import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'yourbittorrent',
  name: 'YourBittorrent',
  description: 'YourBittorrent is a Public torrent index',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://yourbittorrent.com/', 'https://yourbittorrent2.com/'],
  legacylinks: ['https://yourbittorrent.host/'],
  caps: {
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
      'music-search': ['q'],
    },
    categorymappings: [
      { id: 'anime', cat: 'TV/Anime' },
      { id: 'software', cat: 'PC' },
      { id: 'ebooks', cat: 'Books' },
      { id: 'adult', cat: 'XXX' },
      { id: 'games', cat: 'PC/Games' },
      { id: 'movies', cat: 'Movies' },
      { id: 'music', cat: 'Audio' },
      { id: 'television', cat: 'TV' },
      { id: 'other', cat: 'Other' },
      { id: 'photos', cat: 'Other' },
      { id: 'pictures', cat: 'Other' },
      { id: 'unknown', cat: 'Other' },
    ],
  },
  settings: [],
  search: {
    paths: [{ path: '/' }],
    inputs: { v: '', c: '', q: '{{ .Keywords }}' },
    keywordsfilters: [{ name: 're_replace', args: ['[\\s]+', '-'] }, { name: 'tolower' }],
    rows: {
      selector: 'tr.table-default',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      category: {
        selector: 'td:nth-child(1)',
        attribute: 'onclick',
        filters: [{ name: 'regexp', args: "href='/(.+?).html" }],
      },
      title: { selector: 'td:nth-child(2) a' },
      details: { selector: 'td:nth-child(2) a', attribute: 'href' },
      download: {
        selector: 'td:nth-child(2) a',
        attribute: 'href',
        filters: [
          { name: 'split', args: ['/', 2] },
          { name: 'prepend', args: '/down/' },
          { name: 'append', args: '.torrent' },
        ],
      },
      size: { selector: 'td:nth-child(3)' },
      date: {
        selector: 'td:nth-child(4):contains("/")',
        optional: true,
        filters: [{ name: 'dateparse', args: '02/01/06' }],
      },
      seeders: { selector: 'td:nth-child(5)' },
      leechers: { selector: 'td:nth-child(6)' },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
