import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'magico',
  name: 'Magico',
  description: 'Magico (Trellas) is a GREEK Private Torrent Tracker for MOVIES / TV / GENERAL',
  language: 'el-GR',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://magico.club/'],
  legacylinks: ['https://magico.info/', 'https://magico.one/'],
  caps: {
    categorymappings: [
      { id: '1', cat: 'Movies', desc: 'Movies' },
      { id: '84', cat: 'Movies', desc: 'Movies New (2017, 2018)' },
      {
        id: '14',
        cat: 'Movies/SD',
        desc: 'Movies DVDRip-BDRip-BRRip (up to 2016) FREE',
      },
      { id: '16', cat: 'Movies/SD', desc: 'Movies (CAM) FREE' },
      { id: '17', cat: 'Movies/BluRay', desc: 'Movies BLU-RAY' },
      { id: '44', cat: 'Movies', desc: 'Movies Greek' },
      { id: '76', cat: 'Movies', desc: 'Movies Documentaries' },
      { id: '82', cat: 'Movies', desc: 'Movies Theater' },
      { id: '52', cat: 'TV', desc: 'TV Series' },
      { id: '53', cat: 'TV/SD', desc: 'TV Series Foreign' },
      { id: '70', cat: 'TV/HD', desc: 'TV Series Foreign (720p)' },
      { id: '54', cat: 'TV', desc: 'TV Series Greek' },
      { id: '86', cat: 'TV', desc: 'TV Series Foreign Complete Seasons' },
      {
        id: '92',
        cat: 'TV',
        desc: 'TV Series Foreign Complete Seasons (720p)',
      },
      { id: '87', cat: 'TV', desc: 'TV Series Greek Complete Seasons' },
      { id: '63', cat: 'TV', desc: 'TV Series Recreational' },
      { id: '83', cat: 'TV/Sport', desc: 'TV Sports' },
      { id: '55', cat: 'Movies', desc: 'Children' },
      { id: '38', cat: 'Movies', desc: 'Children (Movies)' },
      { id: '39', cat: 'Movies', desc: 'Children Subtitled (Movies)' },
      { id: '93', cat: 'Movies', desc: 'Children (TV Series)' },
      { id: '94', cat: 'Movies', desc: 'Children Subtitled (TV Series)' },
      { id: '45', cat: 'Movies', desc: 'Children Anime' },
      { id: '98', cat: 'Movies', desc: 'Children 3D' },
      { id: '64', cat: 'Movies', desc: 'Children Music' },
      { id: '7', cat: 'Audio', desc: 'Music Foreign' },
      { id: '21', cat: 'Audio', desc: 'Music Foreign New Releases' },
      { id: '46', cat: 'Audio', desc: 'Music Foreign Old Releases' },
      { id: '32', cat: 'Audio', desc: 'Music Foreign Discographies' },
      { id: '20', cat: 'Audio', desc: 'Music Foreign Collections' },
      { id: '102', cat: 'Audio', desc: 'Music Foreign MAGICO Radio' },
      { id: '81', cat: 'Audio', desc: 'Music Foreign Karaoke' },
      { id: '95', cat: 'Audio', desc: 'Music Foreign Soundtrack' },
      { id: '47', cat: 'Audio', desc: 'Music Greek' },
      { id: '48', cat: 'Audio', desc: 'Music Greek New Releases' },
      { id: '49', cat: 'Audio', desc: 'Music Greek Old Releases' },
      { id: '51', cat: 'Audio', desc: 'Music Greek Discographies' },
      { id: '50', cat: 'Audio', desc: 'Music Greek Collections' },
      { id: '101', cat: 'Audio', desc: 'Music Greek MAGICO Radio' },
      { id: '97', cat: 'Audio', desc: "Music Greek Live Cd's" },
      { id: '57', cat: 'Audio', desc: 'Music Greek Rebetika' },
      { id: '58', cat: 'Audio', desc: 'Music Greek Primary' },
      { id: '59', cat: 'Audio', desc: 'Music Greek Cretan' },
      { id: '60', cat: 'Audio', desc: 'Music Greek Island' },
      { id: '62', cat: 'Audio', desc: 'Music Greek Pontian' },
      { id: '80', cat: 'Audio', desc: 'Music Greek Karaoke' },
      { id: '96', cat: 'Audio', desc: 'Music Greek Soundtracks' },
      { id: '73', cat: 'Audio', desc: 'Music Seasonal' },
      { id: '74', cat: 'Audio', desc: 'Music Seasonal Xmas' },
      { id: '79', cat: 'Audio', desc: 'Music Seasonal Easter' },
      { id: '75', cat: 'Audio', desc: 'Music Seasonal Halloween' },
      { id: '78', cat: 'Audio', desc: 'Music  Seasonal Valentines' },
      { id: '33', cat: 'Books', desc: 'Books' },
      { id: '41', cat: 'Books', desc: 'Books Greek' },
      { id: '65', cat: 'Books', desc: 'Books Comics' },
      { id: '43', cat: 'Books', desc: 'Books Periodicals' },
      { id: '105', cat: 'Books', desc: 'Books Audio' },
      { id: '72', cat: 'Books', desc: 'Books Children' },
      { id: '66', cat: 'Books', desc: 'Books Educational' },
      { id: '42', cat: 'Books', desc: 'Books Foreign' },
      { id: '67', cat: 'Books', desc: 'Books Photos' },
      { id: '6', cat: 'PC', desc: 'Programs' },
      { id: '18', cat: 'PC/0day', desc: 'Programs PC' },
      { id: '40', cat: 'PC/Mobile-Android', desc: 'Programs Android' },
      { id: '19', cat: 'PC/Mac', desc: 'Programs Mac' },
      { id: '2', cat: 'PC/Games', desc: 'Games' },
      { id: '27', cat: 'PC/Games', desc: 'Games PC' },
      { id: '68', cat: 'PC/Mobile-Android', desc: 'Games Android' },
      {
        id: '88',
        cat: 'Other',
        desc: 'Tutorials / Design / Accessories',
      },
      { id: '89', cat: 'Other', desc: 'Tutorials Photoshop' },
      { id: '91', cat: 'Other', desc: 'Tutorials Illustrator' },
      { id: '90', cat: 'Other', desc: 'Tutorials After Effects' },
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
    { name: 'username', type: 'text', label: 'Username' },
    { name: 'password', type: 'password', label: 'Password' },
    {
      name: 'freeleech',
      type: 'checkbox',
      label: 'Filter freeleech only',
      default: false,
    },
  ],
  login: {
    path: '?p=home&pid=1',
    method: 'form',
    form: 'form#loginbox_form',
    submitpath: '/ajax/login.php',
    inputs: {
      action: 'login',
      loginbox_membername: '{{ .Config.username }}',
      loginbox_password: '{{ .Config.password }}',
      loginbox_remember: 1,
    },
    selectorinputs: {
      securitytoken: {
        selector: 'script:contains("stKey: ")',
        filters: [{ name: 'regexp', args: 'stKey: "(.+?)",' }],
      },
    },
    error: [{ selector: ':contains("-ERROR-")' }],
    test: { path: '?p=torrents&pid=32', selector: 'a#logout' },
  },
  search: {
    paths: [{ path: '/' }],
    keywordsfilters: [
      { name: 're_replace', args: ['\\(*((19|20)\\d{2})\\)*', '($1)'] },
      { name: 'replace', args: ['Greys Anatomy', "Grey's Anatomy"] },
      { name: 're_replace', args: ['[^\\w\\d\\(\\)]+', '%'] },
    ],
    inputs: {
      p: 'torrents',
      pid: 32,
      $raw: '{{ range .Categories }}cid[]={{.}}&{{end}}',
      keywords: '{{ .Keywords }}',
      search_type: 'name',
    },
    error: [{ selector: 'div#show_error font' }],
    rows: {
      selector:
        'div#content > div.torrent-box[id^="torrent_"]{{ if .Config.freeleech }}:has(img[title="No Record!"]){{ else }}{{ end }}, tr:has(a[href*="?p=torrents"][href*="&action=details"]){{ if .Config.freeleech }}:has(img[title="No Record!"]){{ else }}{{ end }}',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      title: {
        selector: 'a[href*="?p=torrents"][href*="&action=details"]',
        filters: [{ name: 'replace', args: ["Grey's Anatomy", 'Greys Anatomy'] }],
      },
      category: {
        selector: 'a[href*="?p=torrents"][href*="&cid="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cid' }],
      },
      details: {
        selector: 'a[href*="?p=torrents"][href*="&action=details"]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href*="?p=torrents"][href*="&action=download"]',
        attribute: 'href',
      },
      imdb: {
        optional: true,
        selector: 'a[href*="imdb.com/title/tt"]',
        attribute: 'href',
      },
      size: { selector: 'a[rel="torrent_size"]' },
      seeders: { selector: 'a[rel="torrent_seeders"]' },
      leechers: { selector: 'a[rel="torrent_leechers"]' },
      grabs: { selector: 'a[rel="times_completed"]' },
      poster: {
        optional: true,
        selector: 'a[rel="fancybox"]',
        attribute: 'href',
      },
      description: {
        optional: true,
        selector: 'div.torrentDetails > div:has(span.floatright)',
      },
      downloadvolumefactor: {
        case: { 'img[title="No Record!"]': 0, '*': 1 },
      },
      uploadvolumefactor: { case: { '*': 1 } },
      date: {
        optional: true,
        selector: 'td.torrent_name',
        remove: 'div, a, span',
        filters: [
          { name: 'replace', args: ['Uploaded ', ''] },
          { name: 'replace', args: [' by', ''] },
          { name: 'replace', args: ['at ', ''] },
          { name: 'append', args: ' +00:00' },
          { name: 'dateparse', args: '02-01-2006 15:04 -07:00' },
        ],
      },
    },
  },
  source: 'jackett',
};
