import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'torrentz2k',
  name: 'Torrentz2k',
  description: 'Torrentz2k is a Public torrent indexer',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://torrentz2k.xyz/'],
  caps: {
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
      'music-search': ['q'],
    },
    categorymappings: [
      { id: 'book', cat: 'Books' },
      { id: 'film', cat: 'Movies' },
      { id: 'gamepad', cat: 'Console' },
      { id: 'list', cat: 'Other' },
      { id: 'male', cat: 'XXX' },
      { id: 'music', cat: 'Audio' },
      { id: 'smile-o', cat: 'TV/Anime' },
      { id: 'television', cat: 'TV' },
      { id: 'wrench', cat: 'PC' },
    ],
  },
  settings: [],
  search: {
    paths: [
      { path: 'search/', method: 'post' },
      { path: 'search/', method: 'post', inputs: { page: 2 } },
    ],
    inputs: {
      q: '{{ if .Keywords }}{{ .Keywords }}{{else}}:latest:{{end}}',
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
          { name: 'split', args: [' ', 1] },
          { name: 'replace', args: ['fa-', ''] },
        ],
      },
      title: { selector: 'button', attribute: 'title' },
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
      size: { selector: 'td:nth-child(6)' },
      seeders: { selector: 'td:nth-child(3)' },
      leechers: { selector: 'td:nth-child(4)' },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};