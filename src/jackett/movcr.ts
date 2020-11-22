import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'movcr',
  name: 'MovCr',
  description: 'MovCr is an Indian Public torrent site',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://movcr.st/'],
  legacylinks: [
    'https://movcr.tv/',
    'https://movcr.black-mirror.xyz/',
    'https://movcr.unblocked.casa/',
    'https://movcr.proxyportal.fun/',
    'https://movcr.uk-unblock.xyz/',
    'https://movcr.ind-unblock.xyz/',
    'https://movcr.unblocked.bar/',
    'https://movcr.proxyportal.pw/',
    'https://movcr.uk-unblock.pro/',
    'https://movcr.to/',
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
      label: 'About MovCr Categories',
      default:
        "MovCr does not return categories in its search results.</br>To add to your Apps' Torznab indexer, replace all categories with 8000(Other).",
    },
  ],
  download: { selector: 'a[href^="/torrents/"]', attribute: 'href' },
  search: {
    paths: [
      {
        path: '{{ if .Keywords }}search/search.php?q={{ .Keywords }}{{ else }}/{{ end }}',
      },
    ],
    rows: {
      selector: 'tr:has(td.name a[href^="/download-"])',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      category: { text: 'Other' },
      title: { selector: 'td.name a:nth-child(2)' },
      details: { selector: 'td.name a', attribute: 'href' },
      download: { selector: 'td.name a', attribute: 'href' },
      date: {
        selector: 'td.seeds:not(:contains("-"))',
        optional: true,
        filters: [{ name: 'timeago' }],
      },
      size: { selector: 'td.leeches:contains("B")', optional: true },
      seeders: {
        selector: 'td:nth-child(2)',
        filters: [{ name: 'split', args: ['/', 0] }],
      },
      leechers: {
        selector: 'td:nth-child(2)',
        filters: [{ name: 'split', args: ['/', 1] }],
      },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
