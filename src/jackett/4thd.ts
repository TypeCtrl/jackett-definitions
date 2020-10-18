import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: '4thd',
  name: '4thD',
  description: '4th Dimension is a Private Torrent Tracker for MOVIES / TV / GENERAL',
  language: 'en-US',
  encoding: 'UTF-8',
  type: 'private',
  links: ['https://4thd.xyz/'],
  caps: {
    categorymappings: [
      { id: '38', cat: 'Movies', desc: 'Movie Pack' },
      { id: '36', cat: 'Movies', desc: 'Movies/Classic Films' },
      { id: '13', cat: 'Movies', desc: 'Movies/Documentary' },
      { id: '21', cat: 'Movies/Foreign', desc: 'Movies/Foreign' },
      { id: '27', cat: 'Movies/HD', desc: 'MoviesHD' },
      { id: '29', cat: 'Movies/SD', desc: 'Movies/SD' },
      { id: '26', cat: 'Movies/SD', desc: 'Movies/XviD' },
      { id: '41', cat: 'TV/Foreign', desc: 'Foreign tv' },
      { id: '40', cat: 'TV', desc: 'Mini-Series' },
      { id: '43', cat: 'TV/HD', desc: 'TV H265' },
      { id: '42', cat: 'TV', desc: 'TV Movie' },
      { id: '4', cat: 'TV/HD', desc: 'TV/HD-x720' },
      { id: '14', cat: 'TV', desc: 'TV/Packs' },
      { id: '2', cat: 'TV/SD', desc: 'TV/SD MP4/mkv' },
      { id: '31', cat: 'TV/SD', desc: 'TV/XviD' },
      { id: '18', cat: 'PC/Games', desc: 'Games/PC' },
      { id: '44', cat: 'Audio', desc: 'Music/Pack' },
      { id: '12', cat: 'Audio/Lossless', desc: 'Music/FLAC' },
      { id: '15', cat: 'Audio/MP3', desc: 'Music/MP3' },
      { id: '37', cat: 'Audio', desc: 'Radio' },
      { id: '9', cat: 'PC/0day', desc: 'Apps/PC' },
      { id: '34', cat: 'Audio/Audiobook', desc: 'Audiobooks' },
      { id: '25', cat: 'Books/Ebook', desc: 'eBooks' },
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
      label: 'Search freeleech only',
      default: false,
    },
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: 'time',
      options: { time: 'created', seeders: 'seeders', size: 'size' },
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
    path: 'login.php',
    method: 'form',
    form: 'form#loginform',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      keeplogged: 1,
    },
    error: [{ selector: 'form#loginform .warning' }],
    test: { path: 'index.php', selector: 'a[href^="logout.php?auth="]' },
  },
  search: {
    paths: [{ path: 'torrents.php' }],
    inputs: {
      $raw: '{{ range .Categories }}filter_cat[{{.}}]=1&{{end}}',
      order_by: '{{ .Config.sort }}',
      order_way: '{{ .Config.type }}',
      filter_freeleech: '{{ if .Config.freeleech }}1{{ else }}0{{ end }}',
      title: '{{ .Keywords }}',
      search_type: 1,
      taglist: '',
      tags_type: 0,
    },
    rows: {
      selector: 'table#torrent_table > tbody > tr.torrent:has(a[href^="torrents.php?action=download&id="])',
    },
    fields: {
      category: {
        selector: 'td.cats_col div a',
        attribute: 'href',
        filters: [{ name: 'regexp', args: '\\[(\\d+)\\]' }],
      },
      title: { selector: 'a[href^="torrents.php?id="]' },
      details: {
        selector: 'a[href^="torrents.php?id="]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="torrents.php?action=download&id="]',
        attribute: 'href',
      },
      description: { selector: 'div.tags' },
      banner: {
        selector: 'td:nth-child(2) script',
        optional: true,
        filters: [
          { name: 'regexp', args: 'src=(.*?)>' },
          { name: 're_replace', args: ['\\\\', ''] },
        ],
      },
      files: { selector: 'td:nth-child(3)' },
      date: {
        selector: 'td:nth-child(5)',
        filters: [{ name: 'replace', args: ['Never', '99 years ago'] }],
      },
      size: { selector: 'td:nth-child(6)' },
      grabs: { selector: 'td:nth-child(7)' },
      seeders: { selector: 'td:nth-child(8)' },
      leechers: { selector: 'td:nth-child(9)' },
      downloadvolumefactor: {
        case: { 'img[src$="/freedownload.gif"]': 0, '*': 1 },
      },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
