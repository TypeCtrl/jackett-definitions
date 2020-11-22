import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'torrentsurf',
  name: 'Torrent Surf',
  description: 'Torrent Surf is a Private Torrent Tracker for MOVIES / TV / GENERAL',
  language: 'en-US',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://torrentsurf.net/'],
  caps: {
    categorymappings: [
      { id: '1', cat: 'TV/Anime', desc: 'Anime' },
      { id: '13', cat: 'PC/Mac', desc: 'Appz/Mac' },
      { id: '3', cat: 'PC/0day', desc: 'Appz/PC' },
      { id: '35', cat: 'TV', desc: 'Big Brother' },
      { id: '28', cat: 'Books/Comics', desc: 'Comics' },
      { id: '4', cat: 'Books/Ebook', desc: 'E-Book' },
      { id: '39', cat: 'Console', desc: 'Games/Console' },
      { id: '33', cat: 'PC/Games', desc: 'Games/PC' },
      { id: '27', cat: 'Other', desc: 'Misc' },
      { id: '37', cat: 'Movies/SD', desc: 'Movies/Cam/TS' },
      { id: '14', cat: 'Movies/DVD', desc: 'Movies/DVD-R' },
      { id: '18', cat: 'Movies/HD', desc: 'Movies/HD' },
      { id: '19', cat: 'Movies/SD', desc: 'Movies/SD' },
      { id: '29', cat: 'Audio', desc: 'Music' },
      { id: '30', cat: 'TV', desc: 'Packs' },
      { id: '24', cat: 'TV/HD', desc: 'TV/HD' },
      { id: '25', cat: 'TV/SD', desc: 'TV/SD' },
      { id: '36', cat: 'XXX', desc: 'XXX' },
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
      name: 'seedbox',
      type: 'checkbox',
      label: 'Use SeedBox Download Link',
      default: false,
    },
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: 4,
      options: { '1': 'title', '4': 'created', '5': 'size', '7': 'seeders' },
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
    path: 'takelogin.php',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      returnto: '/',
    },
    error: [
      {
        selector: 'table.main:contains("Login failed!")',
        message: { selector: 'table tr td.text' },
      },
    ],
    test: { path: 'browse.php', selector: 'a[href="logout.php"]' },
  },
  search: {
    paths: [{ path: 'browse.php' }],
    inputs: {
      $raw: '{{ range .Categories }}c{{.}}=1&{{end}}',
      blah: 0,
      incldead: '{{ if .Config.freeleech }}3{{ else }}1{{ end }}',
      search: '{{ .Keywords }}',
      sort: '{{ .Config.sort }}',
      type: '{{ .Config.type }}',
    },
    rows: {
      selector: 'table[background="tablebg.png"] tbody tr:has(a[href^="download.php?id="])',
    },
    fields: {
      category: {
        selector: 'a[href^="browse.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      title: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'title',
      },
      details: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
      },
      download1: {
        selector: 'a[href^="download.php"]',
        attribute: 'href',
      },
      download2: {
        selector: 'a[href^="download2.php"]',
        attribute: 'href',
      },
      download: {
        text: '{{ if .Config.seedbox }}{{ .Result.download2 }}{{ else }}{{ .Result.download1 }}{{ end }}',
      },
      date: {
        selector: 'td:nth-child(4)',
        filters: [
          { name: 'append', args: ' -07:00' },
          { name: 'dateparse', args: '2006-01-0215:04:05 -07:00' },
        ],
      },
      size: { selector: 'td:nth-child(5)' },
      grabs: {
        selector: 'td:nth-child(6)',
        filters: [{ name: 'regexp', args: '(\\d+)' }],
      },
      seeders: { selector: 'td:nth-last-child(3)' },
      leechers: { selector: 'td:nth-last-child(2)' },
      downloadvolumefactor: {
        case: { 'img[src="pic/freeleech.png"]': 0, '*': 1 },
      },
      uploadvolumefactor: { text: 1 },
      minimumratio: { text: 0.8 },
    },
  },
  source: 'jackett',
};
