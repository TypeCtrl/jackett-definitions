import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'badasstorrents',
  name: 'Badass Torrents',
  description: 'Badass Torrents is a Public torrent site for MOVIES / TV / GENERAL',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://badasstorrents.com/'],
  caps: {
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
      'music-search': ['q'],
    },
    categorymappings: [
      { id: 'Anime', cat: 'TV/Anime' },
      { id: 'apps', cat: 'PC' },
      { id: 'Books', cat: 'Books' },
      { id: 'Games', cat: 'PC/Games' },
      { id: 'Movies', cat: 'Movies' },
      { id: 'Music', cat: 'Audio' },
      { id: 'Other', cat: 'Other' },
      { id: 'TV', cat: 'TV' },
      { id: 'XXX', cat: 'XXX' },
    ],
  },
  settings: [
    {
      name: 'downloadlink',
      type: 'select',
      label: 'Download link',
      default: 'magnet:?xt=',
      options: { '/download/': '.torrent', 'magnet:?xt=': 'magnet' },
    },
  ],
  download: {
    selector: 'a[href*="{{ .Config.downloadlink }}"]',
    attribute: 'href',
  },
  search: {
    paths: [{ path: 'torrents/search/{{ .Keywords }}' }],
    rows: {
      selector: 'table.table-hover > tbody > tr:has(a[href*="/torrent/"])',
    },
    fields: {
      category: { selector: 'a[href*="/cat/"]' },
      title: { selector: 'a[href*="/torrent/"]' },
      details: { selector: 'a[href*="/torrent/"]', attribute: 'href' },
      download: { selector: 'a[href*="/torrent/"]', attribute: 'href' },
      date: {
        selector: 'td:nth-child(4)',
        filters: [{ name: 'timeago' }],
      },
      size: { selector: 'td:nth-child(5)' },
      seeders: { selector: 'td:nth-child(6)' },
      leechers: { selector: 'td:nth-child(7)' },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
