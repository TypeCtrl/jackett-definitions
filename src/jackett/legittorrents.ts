import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'legittorrents',
  name: 'Legit Torrents',
  description: 'Legit Torrents is a Public site for free and legal torrents',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['http://www.legittorrents.info/'],
  caps: {
    categorymappings: [
      { id: '1', cat: 'Movies', desc: 'Movies' },
      { id: '2', cat: 'Audio', desc: 'Music' },
      { id: '3', cat: 'PC/Games', desc: 'Games' },
      { id: '4', cat: 'Other', desc: 'Other' },
      { id: '5', cat: 'TV/Anime', desc: 'Anime' },
      { id: '6', cat: 'Books', desc: 'Books' },
      { id: '7', cat: 'PC/0day', desc: 'Apps Win' },
      { id: '8', cat: 'PC', desc: 'Apps Linux' },
      { id: '9', cat: 'PC/Mac', desc: 'Apps Mac' },
      { id: '13', cat: 'TV', desc: 'TV' },
      { id: '14', cat: 'PC', desc: 'Linux Distributions' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q'],
      'movie-search': ['q'],
      'music-search': ['q'],
      'book-search': ['q'],
    },
  },
  settings: [
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: 3,
      options: { '2': 'title', '3': 'created', '4': 'size', '5': 'seeders' },
    },
    {
      name: 'type',
      type: 'select',
      label: 'Order requested from site',
      default: 2,
      options: { '1': 'asc', '2': 'desc' },
    },
  ],
  search: {
    paths: [{ path: 'index.php' }],
    inputs: {
      page: 'torrents',
      search: '{{ .Keywords }}',
      category: '{{ range .Categories }}{{.}};{{end}}',
      active: 0,
      order: '{{ .Config.sort }}',
      by: '{{ .Config.type }}',
    },
    rows: {
      selector: 'table table table.lista > tbody > tr:has(a[href^="download.php?id="])',
    },
    fields: {
      category: {
        selector: 'a[href^="index.php?page=torrents&category="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'category' }],
      },
      title: {
        selector: 'a[title][href^="index.php?page=torrent-details&id="]',
      },
      details: {
        selector: 'a[title][href^="index.php?page=torrent-details&id="]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="download.php?id="]',
        attribute: 'href',
      },
      date: {
        selector: 'td time',
        attribute: 'datetime',
        filters: [
          { name: 'append', args: ' -07:00' },
          { name: 'dateparse', args: '2006-01-02 -07:00' },
        ],
      },
      seeders: { selector: 'td:nth-of-type(5)' },
      leechers: { selector: 'td:nth-of-type(6)' },
      grabs: { selector: 'td:nth-of-type(7)' },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
