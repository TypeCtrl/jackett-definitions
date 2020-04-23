import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'deildu',
  name: 'Deildu',
  description: 'Deildu is an Icelandic Semi-Private site for TV / MOVIES / GENERAL',
  language: 'is-IS',
  type: 'semi-private',
  encoding: 'ISO-8859-1',
  links: ['https://deildu.net/'],
  caps: {
    categorymappings: [
      { id: '15', cat: 'TV/Anime', desc: 'Anime' },
      { id: '1', cat: 'Other', desc: 'Other' },
      { id: '5', cat: 'Movies/DVD', desc: 'Movies DVDR' },
      { id: '9', cat: 'TV/Documentary', desc: 'TV - Documentaries' },
      { id: '12', cat: 'TV/HD', desc: 'TV HD' },
      { id: '2', cat: 'TV/Sport', desc: 'Sports' },
      { id: '6', cat: 'Movies', desc: 'Movies' },
      { id: '10', cat: 'PC/Games', desc: 'Games' },
      { id: '3', cat: 'PC/Mac', desc: 'Mac' },
      { id: '7', cat: 'Movies/Other', desc: 'Cartoons' },
      { id: '11', cat: 'Audio', desc: 'Music' },
      { id: '14', cat: 'PC', desc: 'Windows' },
      { id: '4', cat: 'XXX', desc: 'XXX' },
      { id: '8', cat: 'TV', desc: 'TV shows' },
    ],
    modes: {
      search: ['q', 'imdbid'],
      'tv-search': ['q', 'season', 'ep', 'imdbid'],
      'movie-search': ['q', 'imdbid'],
      'music-search': ['q'],
    },
  },
  settings: [
    { name: 'username', type: 'text', label: 'Username' },
    { name: 'password', type: 'password', label: 'Password' },
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
  ],
  login: {
    path: 'takelogin.php',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      keeplogged: 1,
    },
    test: { path: 'my.php' },
  },
  search: {
    paths: [{ path: 'browse.php' }],
    inputs: {
      $raw: '{{ range .Categories }}c{{.}}=1&{{end}}',
      search: '{{ if .Query.IMDBID }}{{ .Query.IMDBID }}{{else}}{{ .Keywords }}{{end}}',
      incldead: 1,
      Lysing: '{{ if .Query.IMDBID }}1{{else}}{{end}}',
      sort: '{{ .Config.sort }}',
      type: '{{ .Config.type }}',
    },
    rows: {
      selector: 'table[class="torrentlist"] > tbody > tr:has(a[href*="details.php?id="])',
      filters: [{ name: 'andmatch', args: 55 }],
    },
    fields: {
      category: {
        selector: 'a[href^="browse.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      title: { selector: 'td:nth-child(2)' },
      details: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="download.php"]',
        attribute: 'href',
      },
      size: { selector: 'td:nth-child(7)' },
      files: { selector: 'td:nth-child(4)' },
      grabs: {
        selector: 'td:nth-child(8)',
        filters: [{ name: 'regexp', args: '(\\d+)' }],
      },
      seeders: { selector: 'td:nth-child(9)' },
      leechers: { selector: 'td:nth-child(10)' },
      date: {
        selector: 'td:nth-child(6)',
        filters: [{ name: 'dateparse', args: '2006-01-0215:04:05' }],
      },
      downloadvolumefactor: { text: 1 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
