import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'concertos',
  name: 'Concertos',
  description: 'Concertos - Private site for Live Concerts with Strict Quality Control',
  language: 'en-US',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://concertos.live/'],
  caps: {
    categorymappings: [
      { id: '1', cat: 'TV', desc: 'Live Concert' },
      { id: '2', cat: 'Audio/Video', desc: 'Music Video' },
      { id: '4', cat: 'TV', desc: 'Music Documentary' },
      { id: '5', cat: 'Audio/Lossless', desc: 'Pure Audio' },
      { id: '7', cat: 'TV', desc: 'Opera' },
      { id: '8', cat: 'TV', desc: 'Musical' },
      { id: '9', cat: 'Audio', desc: 'Podcast' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'imdbid'],
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
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: 'created_at',
      options: {
        created_at: 'created',
        seeders: 'seeders',
        size: 'size',
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
    path: 'login',
    method: 'form',
    form: 'form[action$="/login"]',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      remember: 'on',
    },
    selectorinputs: {
      _token: { selector: 'input[name="_token"]', attribute: 'value' },
    },
    error: [{ selector: 'form[action$="/login"] .text-red' }],
  },
  search: {
    paths: [{ path: 'torrents' }],
    inputs: {
      $raw: '{{ range .Categories }}categories[]={{.}}&{{end}}',
      title: '{{ if .Query.IMDBID }}{{ else }}{{ .Keywords }}{{ end }}',
      imdb: '{{ .Query.IMDBIDShort }}',
      freeleech: '{{ if .Config.freeleech }}on{{ else }}{{ end }}',
      order_by: '{{ .Config.sort }}',
      direction: '{{ .Config.type }}',
    },
    rows: { selector: 'table > tbody > tr' },
    fields: {
      category: {
        selector: 'a[href*="?category_"]',
        attribute: 'href',
        filters: [{ name: 'regexp', args: 'category_(\\d+)' }],
      },
      title: { selector: 'a[href*="/torrent/"]' },
      details: { selector: 'a[href*="/torrent/"]', attribute: 'href' },
      download: {
        selector: 'a[href*="/torrent/"]',
        attribute: 'href',
        filters: [{ name: 'append', args: '/download' }],
      },
      size: { selector: 'td.torrents__size' },
      date: { selector: 'td.torrents__age' },
      seeders: { selector: 'td:nth-last-child(3)' },
      leechers: { selector: 'td:nth-last-child(2)' },
      grabs: { selector: 'td:nth-last-child(1)' },
      imdb: {
        selector: 'a[href*="imdb.com/title/tt"]',
        attribute: 'href',
      },
      downloadvolumefactor: {
        case: { 'i.fa-star': 0, 'i.fa-certificate': 0, '*': 1 },
      },
      uploadvolumefactor: {
        case: { 'i.fa-certificate': 2, 'i.fa-gem': 2, '*': 1 },
      },
      minimumratio: { text: 1 },
      minimumseedtime: { text: 604800 },
    },
  },
  source: 'jackett',
};
