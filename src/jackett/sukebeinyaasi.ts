import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'sukebeinyaasi',
  name: 'sukebei.nyaa.si',
  description:
    'sukebei.nyaa is a Public torrent site focused on adult Eastern Asian media including anime, manga, games and JAV',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://sukebei.nyaa.si/'],
  settings: [
    {
      name: 'cat-id',
      type: 'select',
      label: 'Category',
      default: 0,
      options: {
        '0': 'All categories',
        '10': 'Art',
        '11': 'Art - Anime',
        '12': 'Art - Doujinshi',
        '13': 'Art - Games',
        '14': 'Art - Manga',
        '15': 'Art - Pictures',
        '20': 'Real Life',
        '21': 'Real Life - Photobooks and Pictures',
        '22': 'Real Life - Videos',
      },
    },
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: 'id',
      options: { id: 'created', seeders: 'seeders', size: 'size' },
    },
    {
      name: 'type',
      type: 'select',
      label: 'Order requested from site',
      default: 'desc',
      options: { desc: 'desc', asc: 'asc' },
    },
  ],
  caps: {
    categorymappings: [
      { id: '10', cat: 'XXX', desc: 'Adult Art' },
      { id: '11', cat: 'XXX', desc: 'Adult Anime' },
      { id: '12', cat: 'XXX', desc: 'Doujinshi' },
      { id: '13', cat: 'XXX', desc: 'Adult Games' },
      { id: '14', cat: 'XXX', desc: 'Adult Manga' },
      { id: '15', cat: 'XXX', desc: 'Adult Pictures' },
      { id: '20', cat: 'XXX', desc: 'Adult Real Life' },
      { id: '21', cat: 'XXX', desc: 'Adult Photobooks and Pictures' },
      { id: '22', cat: 'XXX', desc: 'Adult Videos' },
    ],
    modes: { search: ['q'], 'tv-search': ['q'] },
  },
  search: {
    paths: [{ path: '/' }],
    inputs: {
      q: '{{ .Keywords }}',
      f: 0,
      c: '{{ .Config.cat-id }}',
      s: '{{ .Config.sort }}',
      o: '{{ .Config.type }}',
    },
    rows: { selector: 'tr.default,tr.danger,tr.success' },
    fields: {
      category: {
        selector: 'td:nth-child(1) a',
        attribute: 'href',
        filters: [{ name: 'split', args: ['=', -1] }],
      },
      title: { selector: 'td:nth-child(2) a:last-of-type' },
      details: {
        selector: 'td:nth-child(2) a:last-of-type',
        attribute: 'href',
      },
      download: {
        selector: 'td:nth-child(3) a[href$=".torrent"]',
        optional: true,
        attribute: 'href',
      },
      magnet: {
        selector: 'td:nth-child(3) a[href^="magnet:?"]',
        optional: true,
        attribute: 'href',
      },
      size: { selector: 'td:nth-child(4)' },
      date: {
        selector: 'td:nth-child(5)',
        filters: [
          { name: 'append', args: ' -00:00' },
          { name: 'dateparse', args: '2006-01-02 15:04 -07:00' },
        ],
      },
      seeders: { selector: 'td:nth-child(6)' },
      leechers: { selector: 'td:nth-child(7)' },
      grabs: { selector: 'td:nth-child(8)' },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
