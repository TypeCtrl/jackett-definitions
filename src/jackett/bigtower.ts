import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'bigtower',
  name: 'BigTower',
  description: 'Big Tower is an ITALIAN Private site for TV / MOVIES / GENERAL',
  language: 'it-IT',
  type: 'private',
  encoding: 'UTF-8',
  links: ['http://bigtower.info/'],
  caps: {
    categorymappings: [
      { id: '11', cat: 'Movies/HD', desc: 'DSS' },
      { id: '1', cat: 'Movies', desc: 'Screener' },
      { id: '2', cat: 'Movies', desc: 'DVDRip & BDRip' },
      { id: '3', cat: 'Movies/BluRay', desc: 'Bluray 1080p & 720p' },
      { id: '5', cat: 'Movies/UHD', desc: 'Ultra HD 4K' },
      { id: '6', cat: 'TV', desc: 'Serie TV' },
      { id: '4', cat: 'TV/Anime', desc: 'Cartoni' },
      { id: '7', cat: 'PC/Games', desc: 'Giochi' },
      { id: '8', cat: 'Audio', desc: 'Musica' },
      { id: '9', cat: 'PC/0day', desc: 'Software' },
      { id: '12', cat: 'PC/Phone-Other', desc: 'Applicazioni' },
      { id: '14', cat: 'Other', desc: 'Varie & Altro' },
      { id: '13', cat: 'Books', desc: 'Libri & Edicola' },
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
      name: 'donor',
      type: 'checkbox',
      label: "Show donor torrent? (Enable if you're a donor)",
      default: false,
    },
  ],
  login: {
    path: 'index.php?page=login',
    method: 'post',
    inputs: {
      uid: '{{ .Config.username }}',
      pwd: '{{ .Config.password }}',
    },
    error: [{ selector: 'span:contains("Nome Utente non corretto")' }],
    test: { path: 'index.php', selector: 'a[href="logout.php"]' },
  },
  search: {
    paths: [{ path: 'index.php' }],
    inputs: {
      search: '{{ .Keywords }}',
      page: 'torrents',
      category: '{{range .Categories}}{{.}};{{end}}',
      options: '0',
      active: '0',
    },
    rows: {
      selector:
        'table > tbody > tr > td > table.lista > tbody > tr:has(a[href^="index.php?page=torrent-details&id="]){{if .Config.donor }}{{else}}:not(:has(img[src*="keditbookmarks.png"])){{end}}',
    },
    fields: {
      download: {
        selector: 'a[href^="index.php?page=torrent-details&id="]',
        attribute: 'href',
        filters: [
          {
            name: 'replace',
            args: ['index.php?page=torrent-details&id=', 'download.php?id='],
          },
        ],
      },
      title: {
        selector: 'a[onmouseover][href^="index.php?page=torrent-details&id="]',
        filters: [{ name: 're_replace', args: ['(?i)(\\[Richiesta\\])', ''] }],
      },
      banner: {
        selector: 'a[onmouseover][href^="index.php?page=torrent-details&id="]',
        attribute: 'onmouseover',
        filters: [{ name: 'regexp', args: 'src=(.*?) ' }],
      },
      category: {
        selector: 'a[href^="index.php?page=torrents&category="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'category' }],
      },
      details: {
        selector: 'a[onmouseover][href^="index.php?page=torrent-details&id="]',
        attribute: 'href',
      },
      size: { selector: 'td:nth-last-child(2)' },
      date: {
        selector: 'td:nth-last-child(8)',
        filters: [
          { name: 'append', args: ' +01:00' },
          { name: 'dateparse', args: '02/01/2006 -07:00' },
        ],
      },
      grabs: {
        selector: 'td:nth-last-child(5)',
        filters: [{ name: 'replace', args: ['---', '0'] }],
      },
      seeders: { selector: 'td:nth-last-child(7)' },
      leechers: { selector: 'td:nth-last-child(6)' },
      downloadvolumefactor: {
        case: {
          'img[alt="Gold 100% Free"]': '0',
          'img[alt="Silver 50% Free"]': '0.5',
          'img[alt="Bronze 25% Free"]': '0.75',
          '*': '1',
        },
      },
      uploadvolumefactor: {
        case: {
          'img[alt="2x Upload Multiplier"]': '2',
          'img[alt="3x Upload Multiplier"]': '3',
          'img[alt="4x Upload Multiplier"]': '4',
          'img[alt="5x Upload Multiplier"]': '5',
          'img[alt="6x Upload Multiplier"]': '6',
          'img[alt="7x Upload Multiplier"]': '7',
          'img[alt="8x Upload Multiplier"]': '8',
          'img[alt="9x Upload Multiplier"]': '9',
          'img[alt="10x Upload Multiplier"]': '10',
          '*': '1',
        },
      },
    },
  },
  source: 'jackett',
};
