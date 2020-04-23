import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'pwtorrents',
  name: 'PWTorrents',
  description: 'PWTorrents (PWT) is a Private Torrent Tracker for PROFESSIONAL WRESTLING',
  language: 'en-US',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://pwtorrents.net/'],
  caps: {
    categorymappings: [
      { id: '1', cat: 'TV/Sport', desc: 'Boxing' },
      { id: '2', cat: 'TV/Sport', desc: 'Documentaries' },
      { id: '3', cat: 'TV/Sport', desc: 'DVD' },
      { id: '4', cat: 'TV/Sport', desc: 'ECW' },
      { id: '5', cat: 'TV/Sport', desc: 'Games and Software' },
      { id: '6', cat: 'TV/Sport', desc: "Indy's" },
      { id: '7', cat: 'TV/Sport', desc: 'Matches' },
      { id: '8', cat: 'TV/Sport', desc: 'Misc.' },
      { id: '9', cat: 'TV/Sport', desc: 'MMA' },
      { id: '11', cat: 'TV/Sport', desc: 'Puro' },
      { id: '10', cat: 'TV/Sport', desc: 'PWT Packs' },
      { id: '12', cat: 'TV/Sport', desc: 'Ring Of Honor' },
      { id: '13', cat: 'TV/Sport', desc: "TNA PPV's" },
      { id: '14', cat: 'TV/Sport', desc: 'TNA Weekly' },
      { id: '15', cat: 'TV/Sport', desc: 'WCW' },
      { id: '18', cat: 'TV/Sport', desc: 'WWE Network' },
      { id: '16', cat: 'TV/Sport', desc: "WWE PPV's" },
      { id: '17', cat: 'TV/Sport', desc: 'WWE Weekly' },
    ],
    modes: { search: ['q'], 'tv-search': ['q'] },
  },
  settings: [
    { name: 'username', type: 'text', label: 'Username' },
    { name: 'password', type: 'password', label: 'Password' },
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
      default: '4',
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
    error: [{ selector: 'table.main:contains("Login failed!")' }],
    test: { path: 'my.php', selector: 'a[href="logout.php"]' },
  },
  ratio: {
    path: 'browse.php',
    selector: 'span.smallfont:has(a[href="logout.php"])',
    filters: [{ name: 'regexp', args: 'Ratio:\\s(.*?)\\s\\s' }],
  },
  search: {
    paths: [{ path: 'browse.php' }],
    inputs: {
      $raw: '{{ range .Categories }}c{{.}}=1&{{end}}',
      incldead: '1',
      search: '{{ .Keywords }}',
      sort: '{{ .Config.sort }}',
      type: '{{ .Config.type }}',
    },
    rows: {
      selector:
        'table[border="1"][cellspacing="0"][cellpadding="5"] tr:has(a[href^="download.php?id="])',
    },
    fields: {
      category: {
        selector: 'a[href^="browse.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      title: { selector: 'a[href^="details.php?id="]' },
      details: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
      },
      download1: {
        selector: 'a[href^="download.php?id="]',
        attribute: 'href',
      },
      download2: {
        selector: 'a[href^="seeddownload.php?id="]',
        attribute: 'href',
      },
      download: {
        text:
          '{{ if .Config.seedbox }}{{ .Result.download2 }}{{else}}{{ .Result.download1 }}{{end}}',
      },
      date: {
        selector: 'td:nth-child(4)',
        filters: [{ name: 'dateparse', args: '2006-01-0215:04:05' }],
      },
      size: { selector: 'td:nth-child(5)' },
      grabs: {
        selector: 'td:nth-child(6)',
        filters: [{ name: 'regexp', args: '(\\d+)' }],
      },
      seeders: { selector: 'td:nth-child(9)' },
      leechers: { selector: 'td:nth-child(10)' },
      downloadvolumefactor: { text: 1 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
