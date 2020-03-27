import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'finelite',
  name: 'FinElite',
  description: 'FinElite (FE) is a FINNISH Private Torrent Tracker for MOVIES / TV / GENERAL',
  language: 'fi-FI',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://finelite.org/'],
  settings: [
    { name: 'username', type: 'text', label: 'Username' },
    { name: 'password', type: 'password', label: 'Password' },
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
  caps: {
    categorymappings: [
      { id: '8', cat: 'PC/0day', desc: '0day/Apps' },
      { id: '29', cat: 'TV/Documentary', desc: 'Documentary' },
      { id: '24', cat: 'Books/Ebook', desc: 'Ebooks' },
      { id: '28', cat: 'Movies', desc: 'FE-INT' },
      { id: '10', cat: 'Console', desc: 'Games - Console' },
      { id: '11', cat: 'PC/Games', desc: 'Games - PC' },
      { id: '26', cat: 'Movies', desc: 'Kids' },
      { id: '9', cat: 'PC/Phone-Other', desc: 'Mobile' },
      { id: '12', cat: 'Movies', desc: 'Movie Pack' },
      { id: '13', cat: 'Movies/DVD', desc: 'Movies DVD-r' },
      { id: '14', cat: 'Movies/HD', desc: 'Movies HD' },
      { id: '15', cat: 'Movies/SD', desc: 'Movies SD' },
      { id: '22', cat: 'Audio/Lossless', desc: 'Music FLAC' },
      { id: '23', cat: 'Audio/MP3', desc: 'Music MP3' },
      { id: '19', cat: 'TV/HD', desc: 'TV HD' },
      { id: '16', cat: 'TV', desc: 'TV Pack' },
      { id: '17', cat: 'TV/SD', desc: 'TV SD' },
      { id: '31', cat: 'Movies/UHD', desc: 'Ultra HD' },
      { id: '20', cat: 'XXX', desc: 'XXX HD' },
      { id: '21', cat: 'XXX', desc: 'XXX SD' },
    ],
    modes: {
      search: ['q', 'imdbid'],
      'tv-search': ['q', 'season', 'ep', 'imdbid'],
      'movie-search': ['q', 'imdbid'],
    },
  },
  login: {
    path: 'login.php',
    method: 'form',
    form: 'form#login',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [
      { selector: 'td.embedded:contains("Virhe")' },
      { selector: 'td.embedded:contains("epäonnistui")' },
    ],
    test: { path: '/', selector: 'a[href="ulos.php"]' },
  },
  search: {
    paths: [{ path: 'selaa.php' }],
    inputs: {
      $raw: '{{ range .Categories }}c{{.}}=1&{{end}}',
      search: '{{ if .Query.IMDBID }}{{ .Query.IMDBID }}{{else}}{{ .Keywords }}{{end}}',
      hae: 1,
      incldead: 1,
      sort: '{{ .Config.sort }}',
      type: '{{ .Config.type }}',
    },
    rows: {
      selector: 'table.main > tbody >  tr:has(a[href^="/lataa.php/"])',
    },
    fields: {
      category: {
        selector: 'a[href*="?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      title: {
        selector: 'a[href^="julkaisu.php?id="]',
        attribute: 'title',
      },
      details: {
        selector: 'a[href^="julkaisu.php?id="]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="/lataa.php/"]',
        attribute: 'href',
      },
      imdb: {
        optional: true,
        selector: 'a[href*="www.imdb.com/title/tt"]',
        attribute: 'href',
      },
      files: { selector: 'td:nth-last-child(6)' },
      date: {
        selector: 'td:nth-last-child(4)',
        filters: [
          { name: 're_replace', args: [' (\\d{1}):(\\d{2})', ' 0$1:$2'] },
          { name: 'dateparse', args: '2.01.2006 15:04' },
        ],
      },
      size: { selector: 'td:nth-last-child(3)' },
      seeders: { selector: 'td:nth-last-child(2)' },
      leechers: { selector: 'td:nth-last-child(1)' },
      downloadvolumefactor: { case: { 'span.label-free': 0, '*': 1 } },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
