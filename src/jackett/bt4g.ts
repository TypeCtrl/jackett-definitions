import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'bt4g',
  name: 'BT4G',
  description: 'BT4G is a Public metadata crawler for magnets',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://bt4g.org/'],
  caps: {
    modes: {
      search: ['q'],
      'tv-search': ['q'],
      'movie-search': ['q'],
      'music-search': ['q'],
      'book-search': ['q'],
    },
    categorymappings: [
      { id: 'Application', cat: 'PC' },
      { id: 'Archive file', cat: 'Other' },
      { id: 'Audio', cat: 'Audio' },
      { id: 'Doc', cat: 'Books' },
      { id: 'Other', cat: 'Other' },
      { id: 'Video', cat: 'Movies' },
      { id: 'TV', cat: 'TV' },
    ],
  },
  settings: [],
  search: {
    paths: [
      {
        path: 'search/{{ if .Keywords }}{{ .Keywords }}{{ else }}{{ .Today.Year }}{{ end }}',
      },
    ],
    rows: { selector: 'div.row > div.col > div:has(h5)' },
    fields: {
      title: { selector: 'a' },
      category: {
        optional: true,
        selector: 'span.cpill',
        filters: [{ name: 'replace', args: ['Video', 'TV'] }],
      },
      details: { selector: 'a', attribute: 'href' },
      infohash: {
        selector: 'a',
        attribute: 'href',
        filters: [{ name: 'replace', args: ['/magnet/', ''] }],
      },
      date: {
        selector: 'span:nth-last-child(5) b',
        filters: [{ name: 'dateparse', args: '2006-01-02' }],
      },
      files: { selector: 'span:nth-last-child(4) b' },
      size: { selector: 'span:nth-last-child(3) b' },
      seeders: { selector: 'span:nth-last-child(2) b' },
      leechers: { selector: 'span:nth-last-child(1) b' },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
