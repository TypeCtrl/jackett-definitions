import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: '7torrents',
  name: '7torrents',
  description: '7torrents is a Public BitTorrent DHT search engine.',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://www.7torrents.cc/'],
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
      label: 'About 7torrents Categories',
      default:
        "7torrents does not return categories in its search results.</br>To add to your Apps' Torznab indexer, replace all categories with 8000(Other).",
    },
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: 'created',
      options: {
        created: 'created',
        length: 'size',
        seeders: 'seeders',
      },
    },
  ],
  search: {
    paths: [{ path: 'search' }],
    inputs: {
      query: '{{ if .Keywords }}{{ .Keywords }}{{ else }} {{ end }}',
      sort: '{{ .Config.sort }}',
    },
    rows: { selector: 'div.media' },
    fields: {
      category: { text: 'Other' },
      title: { selector: 'div.media', attribute: 'data-name' },
      details: { selector: 'div.media h5 a', attribute: 'href' },
      magnet: { selector: 'a[href^="magnet:?xt="]', attribute: 'href' },
      date: {
        selector: 'div.media',
        attribute: 'data-added',
        filters: [{ name: 'timeago' }],
      },
      size: { selector: 'div.media', attribute: 'data-size' },
      seeders: { selector: 'div.media', attribute: 'data-seeders' },
      leechers: { selector: 'div.media', attribute: 'data-leechers' },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
