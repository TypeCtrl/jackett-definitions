import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'elitetorrent-biz',
  name: 'EliteTorrent.biz',
  description: 'EliteTorrent.biz is a Public torrent site for TV, movies and documentaries',
  language: 'es-ES',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://www.elitetorrent.one/'],
  legacylinks: ['https://www.elitetorrent.biz/', 'https://www.elitetorrent.io/'],
  caps: {
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
    categorymappings: [{ id: 'series', cat: 'TV' }, { id: 'peliculas', cat: 'Movies' }],
  },
  settings: [],
  download: { selector: 'a[href^="magnet:?"]', attribute: 'href' },
  search: {
    paths: [{ path: '/' }, { path: '/page/2/' }, { path: '/page/3/' }],
    keywordsfilters: [
      { name: 're_replace', args: ['S0?(\\d{1,2})', ' $1 '] },
      { name: 're_replace', args: ['E(\\d{2,3})', ' $1 '] },
    ],
    inputs: { s: '{{ .Keywords }}', $raw: '&x=0&y=0' },
    error: [{ selector: '#principal div.not_results' }],
    rows: { selector: '#principal .miniboxs-ficha li' },
    fields: {
      title: {
        selector: '.meta a',
        filters: [
          { name: 're_replace', args: ['(\\d{2})×(\\d{2})', 'S$1E$2'] },
          { name: 're_replace', args: ['(\\d{1})×(\\d{2})', 'S0$1E$2'] },
        ],
      },
      details: { selector: '.meta a', attribute: 'href' },
      download: { selector: '.meta a', attribute: 'href' },
      category: {
        selector: '.meta a',
        attribute: 'href',
        filters: [{ name: 'split', args: ['/', 3] }],
      },
      size: {
        optional: true,
        selector: '.voto1',
        filters: [{ name: 'replace', args: ['s', ''] }],
      },
      date: { text: 'now' },
      seeders: { text: '1' },
      leechers: { text: '1' },
      downloadvolumefactor: { text: '0' },
      uploadvolumefactor: { text: '1' },
    },
  },
  source: 'jackett',
};
