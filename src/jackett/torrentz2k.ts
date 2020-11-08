import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'torrentz2k',
  name: 'Torrentz2k',
  description: 'Torrentz2k is a Public torrent indexer',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://torrentz2k.xyz/'],
  legacylinks: ['https://torrentz2k.pw/'],
  caps: {
    categorymappings: [
      { id: 'book', cat: 'Books', desc: 'Books' },
      { id: 'film', cat: 'Movies', desc: 'Movies' },
      { id: 'gamepad', cat: 'Console', desc: 'Games' },
      { id: 'list', cat: 'Other', desc: 'Other' },
      { id: 'male', cat: 'XXX', desc: 'XXX' },
      { id: 'music', cat: 'Audio', desc: 'Music MP3' },
      { id: 'sellsy', cat: 'Audio/Lossless', desc: 'Music Lossless' },
      { id: 'play-circle', cat: 'TV', desc: 'WEBTV' },
      { id: 'smile-o', cat: 'TV/Anime', desc: 'Anime' },
      { id: 'television', cat: 'TV', desc: 'TV' },
      { id: 'wrench', cat: 'PC', desc: 'Software' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
      'music-search': ['q'],
      'book-search': ['q'],
    },
  },
  settings: [],
  search: {
    paths: [
      { path: 'search/', method: 'post' },
      { path: 'search/', method: 'post', inputs: { page: 2 } },
    ],
    inputs: {
      q: '{{ if .Keywords }}{{ .Keywords }}{{ else }}:latest:{{ end }}',
      category: 'all',
      x: 0,
      y: 0,
    },
    keywordsfilters: [{ name: 're_replace', args: ['[^a-zA-Z0-9]+', '%'] }],
    rows: {
      selector: 'table.table-striped > tbody > tr',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      category: {
        selector: 'i',
        attribute: 'class',
        filters: [
          { name: 'append', args: ' list' },
          { name: 'split', args: [' ', 1] },
          { name: 'replace', args: ['fa-', ''] },
        ],
      },
      title: { selector: 'span.btntitle', attribute: 'title' },
      details: { text: '/' },
      download: {
        selector: 'a[href^="magnet:?xt="]',
        attribute: 'href',
      },
      date: {
        selector: 'td:nth-child(5)',
        filters: [
          { name: 'replace', args: ['sec', 'seconds'] },
          { name: 'replace', args: ['min', 'minutes'] },
          { name: 'replace', args: ['hr', 'hours'] },
          { name: 'append', args: ' ago' },
          { name: 'timeago' },
        ],
      },
      _size: { selector: 'td:nth-child(6)' },
      size: {
        text: '{{ if .Result._size }}{{ .Result._size }}{{else}}0 B{{end}}',
      },
      seeders: { selector: 'td:nth-child(3)' },
      leechers: { selector: 'td:nth-child(4)' },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
