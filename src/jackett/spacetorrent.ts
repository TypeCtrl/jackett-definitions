import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'spacetorrent',
  name: 'SpaceTorrent',
  description: 'SpaceTorrent is a FRENCH Private Torrent Tracker for MOVIES / TV / GENERAL',
  language: 'fr-FR',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://www.spacetorrent.cloud/'],
  caps: {
    categorymappings: [
      { id: '1', cat: 'Audio', desc: 'Musique' },
      { id: '2', cat: 'Movies', desc: 'Film' },
      { id: '3', cat: 'TV', desc: 'Série' },
      { id: '4', cat: 'Console', desc: 'Jeux' },
      { id: '5', cat: 'Books', desc: 'Ebook' },
      { id: '6', cat: 'PC', desc: 'Logiciels' },
      { id: '7', cat: 'XXX', desc: 'Contenu Adulte' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
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
    method: 'post',
    path: 'ajax/takelogin.php',
    inputs: {
      snlo: 'certified',
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      returnto: '/recherche',
    },
    test: { path: 'recherche', selector: 'a[href="../logout"]' },
  },
  ratio: {
    path: 'recherche',
    selector: 'a.nav-link i[class="ti-pulse"]',
  },
  download: { selector: 'a[href^="magnet:?xt="]', attribute: 'href' },
  search: {
    inputs: {
      advanced_search: true,
      advanced_search_term: '{{ .Keywords }}',
      cat: 0,
      freemium: '{{ if .Config.freeleech }}1{{ else }}{{ end }}',
    },
    rows: { selector: 'table#table-1 tbody tr' },
    fields: {
      download: {
        selector: 'a[href^="../torrent/"]',
        attribute: 'href',
      },
      title: { selector: 'a[href^="../torrent/"]' },
      details: {
        selector: 'a[href^="../torrent/"]',
        attribute: 'href',
      },
      category: {
        selector: 'a[href^="../recherche?"]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      date: {
        selector: 'td:nth-child(4)',
        filters: [
          { name: 'replace', args: ['heure', 'hour'] },
          { name: 'replace', args: ['jour', 'day'] },
          { name: 'replace', args: ['semaine', 'week'] },
          { name: 'replace', args: ['moi', 'month'] },
          { name: 'replace', args: [' an', ' year'] },
          { name: 'append', args: ' ago' },
        ],
      },
      size: { selector: 'td:nth-child(5)' },
      seeders: { optional: true, selector: 'td:nth-child(6)' },
      leechers: { optional: true, selector: 'td:nth-child(7)' },
      downloadvolumefactor: { case: { 'i.fa-star': 0, '*': 1 } },
      uploadvolumefactor: { text: 1 },
      minimumseedtime: { text: 86400 },
    },
    paths: [{ path: 'recherche' }],
  },
  source: 'jackett',
};
