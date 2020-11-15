import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'gay-torrents',
  name: 'Gay-Torrents.net',
  description: 'Gay-Torrents.net is a Private Torrent Tracker for GAY XXX',
  language: 'en-US',
  type: 'semi-private',
  encoding: 'UTF-8',
  links: ['https://www.gay-torrents.net/'],
  caps: {
    categorymappings: [
      { id: 'porn', cat: 'XXX', desc: 'Porn' },
      { id: 'porn/Amateur', cat: 'XXX', desc: 'Amateur' },
      { id: 'porn/Anal', cat: 'XXX', desc: 'Anal' },
      { id: 'porn/Asian', cat: 'XXX', desc: 'Asian' },
      { id: 'porn/Bareback', cat: 'XXX', desc: 'Bareback' },
      { id: 'porn/Bears', cat: 'XXX', desc: 'Bears' },
      { id: 'porn/Bisexual', cat: 'XXX', desc: 'Bisexual' },
      { id: 'porn/Black-Men', cat: 'XXX', desc: 'Black-Men' },
      { id: 'porn/Chubs', cat: 'XXX', desc: 'Chubs' },
      { id: 'porn/Clips', cat: 'XXX/Pack', desc: 'Clips' },
      {
        id: 'porn/Cross-Generation',
        cat: 'XXX',
        desc: 'Cross-Generation',
      },
      { id: 'porn/DVD-R', cat: 'XXX/DVD', desc: 'DVD-R' },
      { id: 'porn/Fetish', cat: 'XXX', desc: 'Fetish' },
      { id: 'porn/Group-Sex', cat: 'XXX', desc: 'Group-Sex' },
      { id: 'porn/HD-Movies', cat: 'XXX', desc: 'HD-Movies' },
      { id: 'porn/Hunks', cat: 'XXX', desc: 'Hunks' },
      { id: 'porn/Images', cat: 'XXX/Imageset', desc: 'Images' },
      { id: 'porn/Interracial', cat: 'XXX', desc: 'Interracial' },
      { id: 'porn/Jocks', cat: 'XXX', desc: 'Jocks' },
      { id: 'porn/Latino', cat: 'XXX', desc: 'Latino' },
      { id: 'porn/Mature', cat: 'XXX', desc: 'Mature' },
      { id: 'porn/Member', cat: 'XXX', desc: 'Member' },
      { id: 'porn/MiddleEast', cat: 'XXX', desc: 'MiddleEast' },
      { id: 'porn/Military', cat: 'XXX', desc: 'Military' },
      { id: 'porn/Muscle', cat: 'XXX', desc: 'Muscle' },
      { id: 'porn/Oral-Sex', cat: 'XXX', desc: 'Oral-Sex' },
      { id: 'porn/Solo', cat: 'XXX', desc: 'Solo' },
      { id: 'porn/Transsexual', cat: 'XXX', desc: 'Transsexual' },
      { id: 'porn/Twinks', cat: 'XXX', desc: 'Twinks' },
      { id: 'porn/Vintage', cat: 'XXX', desc: 'Vintage' },
      { id: 'porn/Wrestling', cat: 'XXX', desc: 'Wrestling' },
      { id: 'nonporn', cat: 'Other', desc: 'NonPorn' },
      { id: 'nonporn/Anime', cat: 'TV/Anime', desc: 'Anime' },
      { id: 'nonporn/Applications', cat: 'PC', desc: 'Applications' },
      { id: 'nonporn/Comedy', cat: 'Movies', desc: 'Comedy' },
      { id: 'nonporn/Comics', cat: 'Books/Comics', desc: 'Comics' },
      { id: 'nonporn/Coming-Out', cat: 'Movies', desc: 'Coming-Out' },
      { id: 'nonporn/Documentary', cat: 'Movies', desc: 'Documentary' },
      { id: 'nonporn/Drama', cat: 'Movies', desc: 'Drama' },
      { id: 'nonporn/DVD-R', cat: 'Movies/DVD', desc: 'DVD-R' },
      { id: 'nonporn/Gay-Movies', cat: 'Movies', desc: 'Gay-Movies' },
      { id: 'nonporn/Misc', cat: 'Other/Misc', desc: 'Misc' },
      { id: 'nonporn/Short-Film', cat: 'Movies', desc: 'Short-Film' },
      { id: 'nonporn/Softcore', cat: 'Movies', desc: 'Softcore' },
      { id: 'nonporn/Thriller', cat: 'Movies', desc: 'Thriller' },
      { id: 'nonporn/TV-Episode', cat: 'TV', desc: 'TV-Episode' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q'],
      'movie-search': ['q'],
      'book-search': ['q'],
    },
  },
  login: {
    path: 'login.php',
    method: 'post',
    inputs: {
      vb_login_username: '{{ .Config.username }}',
      vb_login_password: '{{ .Config.password }}',
      cookieuser: 1,
      do: 'login',
    },
    error: [{ selector: 'div.blockrow:contains("invalid")' }],
    test: { path: 'torrentslist.php', selector: 'ul.isuser' },
  },
  search: {
    paths: [
      {
        path: '{{if .Query.Keywords}}search.php{{ else }}torrentslist.php{{ end }}',
      },
    ],
    inputs: {
      $raw: '{{range .Categories}}type={{.}}&{{end}}',
      textsearch: '{{ .Keywords }}',
    },
    keywordsfilters: [{ name: 're_replace', args: ['(\\w+)', ' +$1'] }],
    rows: { selector: 'ul.TorrentList' },
    fields: {
      category: {
        selector: '.TorrentList1 > a',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'type' }],
      },
      title: { selector: '.TorrentList2 > a' },
      download: {
        selector: '.TorrentList2 > a',
        attribute: 'href',
        filters: [{ name: 'append', args: '&do=download' }],
      },
      details: { selector: '.TorrentList2 > a', attribute: 'href' },
      size: { selector: '.TorrentList3' },
      seeders: { selector: '.TorrentList6' },
      leechers: { selector: '.TorrentList7' },
      date: {
        selector: 'li.TorrentList8',
        filters: [
          { name: 'append', args: ' +02:00' },
          { name: 'dateparse', args: '02 Jan 06, 15:04 -07:00' },
        ],
      },
      downloadvolumefactor: {
        case: { '.TorrentList2 > a:contains("[FFL]")': 0, '*': 1 },
      },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
