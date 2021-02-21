import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'nethd',
  name: 'NetHD',
  description: 'NetHD (VietTorrent) is a VIETNAMESE Semi-Private Torrent Tracker for HD MOVIES / TV',
  language: 'vi-VN',
  type: 'semi-private',
  encoding: 'UTF-8',
  links: ['https://nethd.org/'],
  legacylinks: ['http://nethd.org/'],
  caps: {
    categorymappings: [
      { id: '401', cat: 'Movies', desc: 'Movies' },
      { id: '402', cat: 'Audio', desc: 'Music' },
      { id: '403', cat: 'PC/Games', desc: 'Game' },
      { id: '404', cat: 'PC', desc: 'Software' },
      { id: '405', cat: 'Other', desc: 'Image' },
      { id: '406', cat: 'Books', desc: 'Book' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep', 'imdbid'],
      'movie-search': ['q', 'imdbid'],
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
      label: 'Search freeleech only',
      default: false,
    },
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: 'added',
      options: {
        added: 'created',
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
    {
      name: 'info_tpp',
      type: 'info',
      label: 'Results Per Page',
      default: 'For best results, change the <b>Torrents per page:</b> setting to <b>100</b> on your account profile.',
    },
  ],
  login: {
    path: 'takelogin.php',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      logout: '',
      securelogin: '',
      ssl: '',
      trackerssl: '',
    },
    error: [{ selector: 'form#loginform > span.warning' }],
    test: { path: 'torrents.php' },
  },
  search: {
    paths: [{ path: 'torrents.php' }],
    inputs: {
      $raw: '{{ range .Categories }}cat={{.}}&{{end}}',
      search: '{{ if .Query.IMDBID }}{{ .Query.IMDBID }}{{ else }}{{ .Keywords }}{{ end }}',
      search_area: '{{ if .Query.IMDBID }}4{{ else }}0{{ end }}',
      search_mode: 0,
      spstate: '{{ if .Config.freeleech }}2{{ else }}0{{ end }}',
      incldead: 0,
      sort: '{{ .Config.sort }}',
      type: '{{ .Config.type }}',
    },
    rows: {
      selector: 'tr:has(td.name)',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      category: {
        selector: 'td.category > a',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      title: {
        selector: 'td.name > div > a[href*="-torrent-"][title]',
        attribute: 'title',
      },
      details: {
        selector: 'td.name > div > a[href*="-torrent-"][title]',
        attribute: 'href',
      },
      poster: {
        selector: 'td.name > a.poster-preview img',
        attribute: 'src',
      },
      download: {
        selector: 'td.name > div > a[href*="-torrent-"][title]',
        attribute: 'href',
        filters: [
          { name: 'regexp', args: '-torrent-(\\d+).html' },
          { name: 'prepend', args: 'download.php?id=' },
        ],
      },
      date: {
        selector: 'td:nth-child(5)',
        filters: [
          { name: 're_replace', args: ['năm', 'years '] },
          { name: 're_replace', args: ['tháng', 'months '] },
          { name: 're_replace', args: ['ngày', 'days '] },
          { name: 're_replace', args: ['phút', 'minutes '] },
          { name: 're_replace', args: ['giờ', 'hours '] },
          { name: 'timeago' },
        ],
      },
      size: { selector: 'td:nth-child(6)' },
      seeders: { selector: 'td:nth-child(7)' },
      leechers: { selector: 'td:nth-child(8)' },
      grabs: { selector: 'td:nth-child(9)' },
      downloadvolumefactor: {
        case: {
          'span.label:contains("Free")': 0,
          'span.label:contains("50%")': 0.5,
          'span.label:contains("30%")': 0.7,
          '*': 1,
        },
      },
      uploadvolumefactor: {
        case: { 'span.label:contains("2X")': 2, '*': 1 },
      },
      minimumratio: { text: 0.5 },
    },
  },
  source: 'jackett',
};
