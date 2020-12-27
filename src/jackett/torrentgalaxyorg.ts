import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'torrentgalaxyorg',
  name: 'TorrentGalaxy.org',
  description: 'TorrentGalaxy.org (TGx) is a Public site for TV / MOVIES / GENERAL',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  followredirect: true,
  links: [
    'https://torrentgalaxy.to/',
    'https://torrentgalaxy.mx/',
    'https://torrentgalaxy.su/',
    'https://torrentgalaxy.unblockninja.com/',
    'https://torrentgalaxy.unblockit.dev/',
    'https://tgx.unblocked.rest/',
  ],
  legacylinks: [
    'https://torrentgalaxy.org/',
    'https://torrentgalaxy.unblockit.pro/',
    'https://torrentgalaxy.unblockit.one/',
    'https://tgx.black-mirror.xyz/',
    'https://tgx.unblocked.casa/',
    'https://tgx.proxyportal.fun/',
    'https://tgx.uk-unblock.xyz/',
    'https://tgx.ind-unblock.xyz/',
    'https://torrentgalaxy.unblockit.me/',
    'https://torrentgalaxy.unblockit.pw/',
    'https://torrentgalaxy.unblockit.id/',
    'https://torrentgalaxy.unblockit.win/',
    'https://torrentgalaxy.pw/',
    'https://tgx.unblocked.bar/',
    'https://tgx.proxyportal.pw/',
    'https://tgx.uk-unblock.pro/',
    'https://torrentgalaxy.unblockit.top/',
    'https://torrentgalaxy.unblockit.lat/',
    'https://torrentgalaxy.unblockit.app/',
    'https://torrentgalaxy.root.yt/',
  ],
  caps: {
    categorymappings: [
      { id: '28', cat: 'TV/Anime', desc: 'Anime - All' },
      { id: '20', cat: 'PC/Mobile-Other', desc: 'Apps - Mobile' },
      { id: '19', cat: 'PC/Mac', desc: 'Apps - OS' },
      { id: '21', cat: 'PC', desc: 'Apps - Other' },
      { id: '18', cat: 'PC/0day', desc: 'Apps - Windows' },
      { id: '13', cat: 'Audio/Audiobook', desc: 'Books - Audiobooks' },
      { id: '12', cat: 'Books/Ebook', desc: 'Books - Ebooks' },
      { id: '14', cat: 'Books/Technical', desc: 'Books - Education' },
      { id: '15', cat: 'Books/Mags', desc: 'Books - Magazine' },
      { id: '9', cat: 'TV/Documentary', desc: 'Documentaries - All' },
      { id: '11', cat: 'Console', desc: 'Games - Console' },
      { id: '43', cat: 'PC/Mobile-Other', desc: 'Games - Mobile' },
      { id: '17', cat: 'Console/Other', desc: 'Games - Other' },
      { id: '10', cat: 'PC/Games', desc: 'Games - Windows' },
      { id: '3', cat: 'Movies/UHD', desc: 'Movies - 2K/4K UHD' },
      { id: '46', cat: 'Movies/Foreign', desc: 'Movies - Bollywood' },
      { id: '45', cat: 'Movies/Other', desc: 'Movies - CAM/TS' },
      { id: '42', cat: 'Movies/HD', desc: 'Movies - HD' },
      { id: '4', cat: 'Movies', desc: 'Movies - Packs' },
      { id: '1', cat: 'Movies/SD', desc: 'Movies - SD' },
      { id: '22', cat: 'Audio', desc: 'Music - Albums' },
      { id: '26', cat: 'Audio', desc: 'Music - Discography' },
      { id: '23', cat: 'Audio/Lossless', desc: 'Music - Lossless' },
      { id: '25', cat: 'Audio/Video', desc: 'Music - Musicvideo' },
      { id: '24', cat: 'Audio', desc: 'Music - Singles' },
      { id: '40', cat: 'Audio/Other', desc: 'Other - Other' },
      { id: '37', cat: 'Other', desc: 'Other - Pictures' },
      { id: '33', cat: 'Other', desc: 'Other - Training' },
      { id: '41', cat: 'TV/HD', desc: 'TV - Episodes HD' },
      { id: '5', cat: 'TV/SD', desc: 'TV - Episodes SD' },
      { id: '6', cat: 'TV/Other', desc: 'TV - Packs' },
      { id: '7', cat: 'TV/Sport', desc: 'TV - Sports' },
      { id: '35', cat: 'XXX', desc: 'XXX - HD' },
      { id: '47', cat: 'XXX', desc: 'XXX - Misc' },
      { id: '34', cat: 'XXX', desc: 'XXX - SD' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
      'music-search': ['q'],
      'book-search': ['q'],
    },
  },
  settings: [
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: 'id',
      options: {
        id: 'created',
        seeders: 'seeders',
        size: 'size',
        name: 'title',
      },
    },
    {
      name: 'type',
      type: 'select',
      label: 'Order requested from site',
      default: 'desc',
      options: { desc: 'desc', asc: 'asc' },
    },
  ],
  login: {
    path: 'galaxyfence.php?f',
    method: 'form',
    form: 'form[action="/galaxyfence.php"]',
    inputs: { dropoff: '/torrents.php' },
    captcha: {
      type: 'image',
      selector: 'img#captcha',
      input: 'captcha',
    },
    error: [{ selector: 'span:contains("Captcha incorrect")' }],
    test: { path: '/' },
  },
  search: {
    inputs: {
      $raw: '{{ range .Categories }}c{{.}}=1&{{end}}',
      search: '{{ .Keywords }}',
      lang: 0,
      sort: '{{ .Config.sort }}',
      order: '{{ .Config.type }}',
    },
    rows: {
      selector: 'div.tgxtable > div:has(div[class="tgxtablecell shrink"])',
    },
    fields: {
      category: {
        selector: 'div a[href^="/torrents.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      title_full: {
        selector: 'div a[href^="/torrent/"]',
        attribute: 'title',
      },
      title_text: { selector: 'div a[href^="/torrent/"]' },
      title_href: {
        selector: 'div a[href^="/torrent/"]',
        attribute: 'href',
        filters: [
          { name: 're_replace', args: ['-quot-', ' '] },
          { name: 're_replace', args: ['-', ' '] },
        ],
      },
      title: {
        text:
          '{{ if or .Result.title_full .Result.title_text }}{{ or .Result.title_full .Result.title_text }}{{ else }}{{ .Result.href }}{{ end }}',
      },
      details: {
        selector: 'div a[href^="/torrent/"]',
        attribute: 'href',
      },
      magnet: {
        selector: 'div a[href^="magnet:?"]',
        attribute: 'href',
      },
      size: { selector: 'div span[style^="border-radius"]' },
      seeders: { selector: 'div span[title="Seeders/Leechers"] font b' },
      leechers: {
        selector: 'div span[title="Seeders/Leechers"] font:nth-child(2) b',
      },
      date: {
        optional: true,
        selector: 'div td:last-of-type small:contains(":")',
        filters: [
          { name: 'append', args: ' -07:00' },
          { name: 'dateparse', args: '02/01/06 15:04 -07:00' },
        ],
      },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
    paths: [{ path: 'torrents.php' }],
  },
  source: 'jackett',
};
