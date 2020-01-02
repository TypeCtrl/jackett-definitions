import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'btdb',
  name: 'BTDB',
  description: 'BTDB is a Public BitTorrent DHT search engine.',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://btdb.io/'],
  legacylinks: ['https://btdb.to/', 'https://btdb.unblocked.app/', 'https://btdb.eu/'],
  caps: {
    categorymappings: [{ id: '1', cat: 'Other', desc: 'Other' }],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
  },
  settings: [
    {
      name: 'info',
      type: 'info',
      label: 'Category for Sonarr and Radarr',
      default:
        'BTDB does not use categories. In your Sonarr or Radarr Torznab Indexer settings, set the category to 100001.',
    },
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: 'time',
      options: { time: 'created', length: 'size', popular: 'seeders' },
    },
  ],
  search: {
    paths: [
      {
        path:
          '{{ if .Keywords }}?s={{ .Keywords }}&sort={{ .Config.sort }}{{else}}recent?sort={{ .Config.sort }}{{end}}',
      },
    ],
    rows: { selector: 'li[class$="item"]' },
    fields: {
      title: {
        selector: 'h2[class$="title"] a[href*="/torrent/"]',
        attribute: 'title',
      },
      category: { text: 1 },
      details: {
        selector: 'h2[class$="title"] a[href*="/torrent/"]',
        attribute: 'href',
      },
      magnet: {
        selector: 'div[class$="info"] a[href^="magnet:?xt="]',
        attribute: 'href',
      },
      size: { selector: 'div[class$="info"] span:nth-of-type(1)' },
      files: { selector: 'div[class$="info"] span:nth-of-type(2)' },
      date: {
        selector: 'div[class$="info"] span:nth-of-type(3)',
        filters: [{ name: 'timeago' }],
      },
      seeders: { selector: 'div[class$="info"] span:nth-of-type(4)' },
      leechers: { selector: 'div[class$="info"] span:nth-of-type(5)' },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
