import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'torrenting',
  name: 'Torrenting',
  description: 'Torrenting (TT) is a Private site for MOVIES / TV / GENERAL',
  language: 'en-US',
  type: 'private',
  encoding: 'WINDOWS-1252',
  links: ['https://torrenting.com/'],
  caps: {
    categorymappings: [
      { id: '1', cat: 'Movies', desc: 'Movies' },
      { id: '2', cat: 'XXX', desc: 'XXX' },
      { id: '3', cat: 'Movies/BluRay', desc: 'Movies/BluRay' },
      { id: '4', cat: 'TV/SD', desc: 'TV/SD-x264' },
      { id: '5', cat: 'TV/HD', desc: 'TV/HD-x264' },
      { id: '11', cat: 'Movies/HD', desc: 'Movies/HD' },
      { id: '18', cat: 'TV', desc: 'TV/Packs' },
      { id: '21', cat: 'Console', desc: 'Games/Consoles' },
      { id: '26', cat: 'Audio/Video', desc: 'Music/Videos' },
      { id: '27', cat: 'Audio', desc: 'Music/Audio' },
      { id: '29', cat: 'TV/Anime', desc: 'Anime/Toons' },
      { id: '30', cat: 'Books', desc: 'Books' },
      { id: '34', cat: 'PC/0day', desc: 'Applications' },
      { id: '35', cat: 'PC/Games', desc: 'Games/PC' },
      { id: '38', cat: 'Movies/Foreign', desc: 'Movies/Non-English' },
      { id: '40', cat: 'Movies/DVD', desc: 'Movies/DVD-R' },
      { id: '47', cat: 'Movies', desc: 'Movies/Packs' },
      { id: '49', cat: 'Movies/HD', desc: 'Movies/x265' },
      { id: '55', cat: 'TV/Sport', desc: 'Sports' },
      { id: '82', cat: 'TV/Foreign', desc: 'TV/Non-English' },
      { id: '93', cat: 'Audio', desc: 'Music/Packs' },
      { id: '99', cat: 'TV/HD', desc: 'TV/x265' },
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
      name: 'freeleech',
      type: 'checkbox',
      label: 'Search freeleech only',
      default: false,
    },
  ],
  login: {
    path: 'login.php',
    method: 'form',
    form: 'form[action="do-login.php"]',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [{ selector: 'td.embedded:has(h2:contains("failed"))' }],
    test: { path: 't' },
  },
  search: {
    paths: [
      {
        path:
          't?{{ range .Categories }}{{.}}=&{{end}}{{ if .Config.freeleech }}free=on&{{ else }}{{ end }}q={{ if .Query.IMDBID }}{{ .Query.IMDBID }}{{ else }}{{ .Keywords }}{{ end }}&qf={{ if .Query.IMDBID }}adv{{ else }}ti{{ end }}',
      },
    ],
    rows: {
      selector: 'table#torrentsTable > tbody > tr:has(td.torrentNameInfo)',
    },
    fields: {
      download: {
        selector: 'a[href^="/download.php/"]',
        attribute: 'href',
      },
      title: { selector: 'a[href^="/details.php?id="]' },
      details: {
        selector: 'a[href^="/details.php?id="]',
        attribute: 'href',
      },
      category: {
        selector: 'a[href^="?"]',
        attribute: 'href',
        filters: [{ name: 'replace', args: ['?', ''] }],
      },
      date: {
        selector: 'td.torrentNameInfo > div',
        filters: [
          { name: 're_replace', args: [' by.*', ''] },
          { name: 'split', args: ['|', -1] },
        ],
      },
      seeders: { selector: 'td:nth-last-child(2)' },
      leechers: { selector: 'td:nth-last-child(1)' },
      size: { selector: 'td:nth-last-child(3)' },
      downloadvolumefactor: {
        case: { 'span:contains("FreeLeech")': 0, '*': 1 },
      },
      uploadvolumefactor: { text: 1 },
      minimumratio: { text: 1.1 },
      minimumseedtime: { text: 259200 },
    },
  },
  source: 'jackett',
};
