import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'zooqle',
  name: 'Zooqle',
  description: 'Zooqle is a Public torrent index providing a huge database of verified torrents',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  followredirect: true,
  links: [
    'https://zooqle.com/',
    'https://zooqle.unblockit.pw/',
    'https://zooqle.unblocked.bar/',
    'https://zooqle.proxyportal.pw/',
    'https://zooqle.uk-unblock.pro/',
  ],
  legacylinks: [
    'https://zooqle.unblockit.pro/',
    'https://zooqle.unblockit.one/',
    'https://zooqle.black-mirror.xyz/',
    'https://zooqle.unblocked.casa/',
    'https://zooqle.proxyportal.fun/',
    'https://zooqle.uk-unblock.xyz/',
    'https://zooqle.ind-unblock.xyz/',
    'https://zooqle.unblockit.me/',
  ],
  caps: {
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
      'music-search': ['q'],
    },
    categorymappings: [
      { id: 'anime', cat: 'TV/Anime' },
      { id: 'app', cat: 'PC' },
      { id: 'book', cat: 'Books' },
      { id: 'files', cat: 'Other/Misc' },
      { id: 'game', cat: 'PC/Games' },
      { id: 'movies', cat: 'Movies' },
      { id: 'music', cat: 'Audio' },
      { id: 'other', cat: 'Other' },
      { id: 'tv', cat: 'TV' },
    ],
  },
  settings: [
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: 'dt',
      options: { dt: 'created', ns: 'seeders', sz: 'size' },
    },
    {
      name: 'type',
      type: 'select',
      label: 'Order requested from site',
      default: 'd',
      options: { d: 'desc', a: 'asc' },
    },
  ],
  search: {
    paths: [
      {
        path:
          'search?{{ if .Keywords }}s={{ .Config.sort }}&v=t&sd={{ .Config.type }}&q={{ .Keywords }}{{else}}s={{ .Config.sort }}&v=t&sd={{ .Config.type }}&q= *{{end}}{{ if .Categories }} category:{{ range .Categories }}{{.}},{{end}}{{else}}{{end}}',
      },
    ],
    rows: {
      selector: 'tr:has(td[class^="text-muted3"])',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      title: { selector: 'td:nth-child(2) a' },
      category: {
        selector: 'td:nth-child(2) > i',
        attribute: 'class',
        filters: [
          { name: 'split', args: [' ', 1] },
          { name: 'replace', args: ['zqf-', ''] },
        ],
      },
      details: { selector: 'td:nth-child(2) a', attribute: 'href' },
      download: {
        optional: true,
        selector: 'a[title^="Generate .torrent"]',
        attribute: 'href',
      },
      magnet: {
        optional: true,
        selector: 'a[title^="Magnet link"]',
        attribute: 'href',
      },
      date: {
        selector: 'td:nth-child(5)',
        filters: [
          { name: 'replace', args: ['long ago', '99 years'] },
          { name: 'replace', args: ['yesterday', '1 day'] },
          { name: 'timeago' },
        ],
      },
      size: {
        selector: 'td:nth-child(4)',
        filters: [{ name: 'replace', args: ['– N/A –', '0 Bytes'] }],
      },
      seeders: {
        optional: true,
        selector: 'td:nth-child(6) div',
        attribute: 'title',
        filters: [
          { name: 'split', args: [' ', 1] },
          { name: 'replace', args: [',', ''] },
        ],
      },
      leechers: {
        optional: true,
        selector: 'td:nth-child(6) div',
        attribute: 'title',
        filters: [
          { name: 'split', args: [' ', 4] },
          { name: 'replace', args: [',', ''] },
        ],
      },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
