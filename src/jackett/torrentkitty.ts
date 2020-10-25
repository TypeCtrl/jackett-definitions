import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'torrentkitty',
  name: 'TorrentKitty',
  description: 'TorrentKitty is a Public torrent indexer',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: [
    'https://www.torrentkitty.tv/',
    'https://www.torrentkitty.se/',
    'https://www.torrentkitty.io/',
    'https://www.torrentkitty.vip/',
    'https://www.torrentkitty.app/',
  ],
  caps: {
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
    categorymappings: [
      { id: 'tv', cat: 'TV' },
      { id: 'movies', cat: 'Movies' },
      { id: 'other', cat: 'Other' },
    ],
  },
  settings: [
    {
      name: 'category-id',
      type: 'select',
      label:
        'The TorrentKitty web site does not provide categories. Select the category you want Jackett to set on all results returned.',
      default: 'other',
      options: { tv: 'TV', movies: 'Movies', other: 'Other' },
    },
  ],
  search: {
    paths: [
      {
        path: 'search/{{ if .Keywords }}{{ .Keywords}}{{else}}{{ .Today.Year }}{{end}}',
      },
    ],
    rows: {
      selector: 'table#archiveResult tbody tr:has(a[href^="magnet:?xt="])',
    },
    fields: {
      category: { text: '{{ .Config.category-id }}' },
      title: { selector: 'td.name' },
      details: { selector: 'td.action a', attribute: 'href' },
      download: {
        selector: 'a[href^="magnet:?xt="]',
        attribute: 'href',
      },
      date: {
        selector: 'td.date',
        filters: [{ name: 'dateparse', args: '2006-01-02' }],
      },
      size: { selector: 'td.size' },
      seeders: { text: 1 },
      leechers: { text: 1 },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
