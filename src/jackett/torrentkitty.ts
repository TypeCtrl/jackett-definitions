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
    categorymappings: [{ id: 'Other', cat: 'Other' }],
  },
  settings: [
    {
      name: 'info_8000',
      type: 'info',
      label: 'About TorrentKitty Categories',
      default:
        "TorrentKitty does not return categories in its search results.</br>To add to your Apps' Torznab indexer, replace all categories with 8000(Other).",
    },
  ],
  search: {
    paths: [
      {
        path: 'search/{{ if .Keywords }}{{ .Keywords}}{{ else }}{{ .Today.Year }}{{ end }}',
      },
    ],
    rows: {
      selector: 'table#archiveResult tbody tr:has(a[href^="magnet:?xt="])',
    },
    fields: {
      category: { text: 'Other' },
      title: { selector: 'td.name' },
      details: { selector: 'td.action a', attribute: 'href' },
      download: {
        selector: 'a[href^="magnet:?xt="]',
        attribute: 'href',
      },
      date: {
        selector: 'td.date',
        filters: [
          { name: 'append', args: ' -07:00' },
          { name: 'dateparse', args: '2006-01-02 -07:00' },
        ],
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
