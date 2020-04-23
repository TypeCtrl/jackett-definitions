import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'pirateiro',
  name: 'Pirateiro',
  description: 'Pirateiro is a Public site for MOVIES / TV / GENERAL',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  followredirect: true,
  links: ['https://pirateiro.com/'],
  legacylinks: [
    'http://pirateiro.com/',
    'https://pirateiro.unblockit.pro/',
    'https://pirateiro.unblockit.one/',
  ],
  caps: {
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
      'music-search': ['q'],
    },
    categorymappings: [
      { id: 'cat100', cat: 'TV/Anime' },
      { id: 'cat200', cat: 'PC' },
      { id: 'cat300', cat: 'Movies' },
      { id: 'cat400', cat: 'Console' },
      { id: 'cat500', cat: 'Audio' },
      { id: 'cat600', cat: 'Other' },
      { id: 'cat700', cat: 'TV' },
      { id: 'cat800', cat: 'XXX' },
    ],
  },
  settings: [
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: 'enviado',
      options: {
        enviado: 'created',
        seeders: 'seeders',
        tamanho: 'size',
      },
    },
  ],
  search: {
    paths: [{ path: 'torrents/' }],
    inputs: { search: '{{ .Keywords }}', orderby: '{{ .Config.sort }}' },
    rows: {
      selector: 'table.torrenttable tbody tr:has(a[href^="magnet:?xt="])',
    },
    fields: {
      category: {
        selector: 'td:nth-child(1) a',
        attribute: 'class',
        filters: [{ name: 'split', args: [' ', 0] }],
      },
      title: { selector: 'td:nth-child(1) a:nth-child(2)' },
      details: {
        selector: 'td:nth-child(1) a:nth-child(2)',
        attribute: 'href',
      },
      download: {
        optional: true,
        selector: 'a[href$="/download"]',
        attribute: 'href',
      },
      magnet: { selector: 'a[href^="magnet:?xt="]', attribute: 'href' },
      date: {
        selector: 'td:nth-child(3) span',
        attribute: 'title',
        filters: [
          { name: 'append', args: ' +01:00' },
          { name: 'dateparse', args: '02/01/2006 15:04:05 -07:00' },
        ],
      },
      size: { selector: 'td:nth-child(4)' },
      seeders: {
        selector: 'td:nth-child(5)',
        filters: [{ name: 'replace', args: [' ', ''] }],
      },
      leechers: {
        selector: 'td:nth-child(6)',
        filters: [{ name: 'replace', args: [' ', ''] }],
      },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
