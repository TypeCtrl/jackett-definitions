import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'itorrent',
  name: 'iTorrent',
  description: 'iTorrent is a Public HUNGARIAN site',
  language: 'hu-HU',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://itorrent.ws/'],
  caps: {
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
    categorymappings: [
      { id: 'Apps', cat: 'PC' },
      { id: 'book', cat: 'Books' },
      { id: 'Games', cat: 'PC/Games' },
      { id: 'Movies', cat: 'Movies' },
      { id: 'Music', cat: 'Audio' },
      { id: 'XXX', cat: 'XXX' },
      { id: 'TV', cat: 'TV' },
    ],
  },
  settings: [],
  download: { selector: 'a[href^="/torrentfiles/"]' },
  search: {
    paths: [{ path: 'torrentek/title/{{ .Keywords}}/' }],
    rows: { selector: 'tr.gradeX', filters: [{ name: 'andmatch' }] },
    fields: {
      category: {
        selector: 'td:nth-child(1) i',
        attribute: 'class',
        filters: [{ name: 'replace', args: [' ', '-'] }, { name: 'split', args: ['-', 2] }],
      },
      title: { selector: 'td:nth-child(2) a' },
      details: { selector: 'td:nth-child(2) a', attribute: 'href' },
      download: { selector: 'td:nth-child(2) a', attribute: 'href' },
      date: {
        selector: 'td:nth-child(4):not(span)',
        optional: true,
        filters: [{ name: 'dateparse', args: '2006.01.02' }],
      },
      size: { selector: 'td:nth-child(5)' },
      grabs: { selector: 'td:nth-child(6)' },
      seeders: { selector: 'td:nth-child(7)' },
      leechers: { selector: 'td:nth-child(8)' },
      downloadvolumefactor: { text: '0' },
      uploadvolumefactor: { text: '1' },
    },
  },
  source: 'jackett',
};
