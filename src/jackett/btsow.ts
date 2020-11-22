import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'btsow',
  name: 'BTSOW',
  description: 'BTSOW is a Public torrent indexer',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://btsow.store/'],
  legacylinks: [
    'https://btos.pw/',
    'https://btio.pw/',
    'https://btsow.club/',
    'https://bteve.com/',
    'https://btsow.fun/',
    'https://btsow.space/',
    'https://btsow.site/',
    'https://btsow.cyou/',
    'https://btsow.monster/',
    'https://btsow.casa/',
    'https://btsow.website/',
    'https://btsow.online/',
    'https://btsow.work/',
  ],
  caps: {
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
      'music-search': ['q'],
      'book-search': ['q'],
    },
    categorymappings: [{ id: 'Other', cat: 'Other' }],
  },
  settings: [
    {
      name: 'info_8000',
      type: 'info',
      label: 'About BTSOW Categories',
      default:
        "BTSOW does not return categories in its search results.</br>To add to your Apps' Torznab indexer, replace all categories with 8000(Other).",
    },
  ],
  download: { selector: 'a#magnetOpen', attribute: 'href' },
  search: {
    paths: [
      {
        path: 'search/{{ if .Keywords }}{{ .Keywords }}{{ else }}{{ .Today.Year }}{{ end }}',
      },
    ],
    rows: { selector: 'div.row:has(a[href*="/detail/hash/"])' },
    fields: {
      category: { text: 'Other' },
      title: {
        selector: 'a[href*="/detail/hash/"]',
        attribute: 'title',
      },
      details: {
        selector: 'a[href*="/detail/hash/"]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href*="/detail/hash/"]',
        attribute: 'href',
      },
      date: {
        selector: 'div.date',
        filters: [
          { name: 'append', args: ' -00:00' },
          { name: 'dateparse', args: '2006-01-02 -07:00' },
        ],
      },
      size: { selector: 'div.size' },
      seeders: { text: 1 },
      leechers: { text: 1 },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
