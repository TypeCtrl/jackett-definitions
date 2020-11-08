import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'xwtclassics',
  name: 'XWT-Classics',
  description: 'XWT-Classics is a Private Torrent Tracker for CLASSIC PROFESSIONAL WRESTLING',
  language: 'en-US',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://xwt-classics.net/'],
  legacylinks: ['http://xwt-classics.net/'],
  caps: {
    categorymappings: [
      { id: '1', cat: 'TV/Sport', desc: 'DVD' },
      { id: '9', cat: 'TV/Sport', desc: 'Florida' },
      { id: '7', cat: 'TV/Sport', desc: 'International' },
      { id: '6', cat: 'TV/Sport', desc: 'Japan' },
      { id: '8', cat: 'TV/Sport', desc: 'Misc' },
      { id: '11', cat: 'TV/Sport', desc: 'NWA' },
      { id: '4', cat: 'TV/Sport', desc: 'UWF/Mid-South' },
      { id: '12', cat: 'TV/Sport', desc: 'WCW' },
      { id: '5', cat: 'TV/Sport', desc: 'World Class' },
      { id: '10', cat: 'TV/Sport', desc: 'WWE 24/7' },
      { id: '13', cat: 'TV/Sport', desc: 'WWE Network' },
      { id: '2', cat: 'TV/Sport', desc: 'WWF' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
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
      incldead: '{{ if .Config.freeleech }}3{{ else }}1{{ end }}',
      search: '{{ .Keywords }}',
      sort: '{{ .Config.sort }}',
      type: '{{ .Config.type }}',
    },
    rows: {
      selector: 'table[border="0"][cellspacing="0"][cellpadding="5"] tr:has(a[href^="download.php?id="])',
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
      download1: {
        selector: 'a[href^="download.php"]',
        attribute: 'href',
      },
      download2: {
        selector: 'a[href^="download2.php"]',
        attribute: 'href',
      },
      download: {
        text: '{{if .Config.seedbox}}{{ .Result.download2 }}{{ else }}{{ .Result.download1 }}{{ end }}',
      },
      details: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
      },
      files: { selector: 'td:nth-child(3)' },
      grabs: {
        selector: 'td:nth-child(7)',
        filters: [{ name: 'regexp', args: '(\\d+)' }],
      },
      size: { selector: 'td:nth-child(6)' },
      seeders: { selector: 'td:nth-last-child(3)' },
      leechers: { selector: 'td:nth-last-child(2)' },
      date: {
        selector: 'td:nth-child(5)',
        filters: [
          { name: 'append', args: ' -07:00' },
          { name: 'dateparse', args: '2006-01-0215:04:05 -07:00' },
        ],
      },
      downloadvolumefactor: {
        case: { 'img[src="pic/freeleech.png"]': 0, '*': 1 },
      },
      uploadvolumefactor: { text: 1 },
      minimumratio: { text: 0.7 },
      minimumseedtime: { text: 86400 },
    },
  },
  source: 'jackett',
};
