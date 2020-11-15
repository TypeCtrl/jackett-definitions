import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'animeclipse',
  name: 'AnimeClipse',
  description: 'AnimeClipse is a Public site for Hellenic Fansubs Anime.',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['http://www.animeclipse.com/'],
  settings: [
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: 'added',
      options: { added: 'created', seeders: 'seeders', size: 'size' },
    },
    {
      name: 'type',
      type: 'select',
      label: 'Order requested from site',
      default: 'DESC',
      options: { DESC: 'desc', ASC: 'asc' },
    },
  ],
  caps: {
    categorymappings: [{ id: '1', cat: 'TV/Anime', desc: 'Anime' }],
    modes: { search: ['q'], 'tv-search': ['q', 'season', 'ep'] },
  },
  search: {
    paths: [{ path: 'index.php' }],
    inputs: {
      ind: 'btitracker',
      search: '{{ re_replace .Keywords "[\\s]+" "%" }}',
      category: 0,
      active: 0,
      tor_page: 100,
      order: '{{ .Config.sort }}',
      by: '{{ .Config.type }}',
    },
    rows: { selector: 'tr.torrentRow' },
    fields: {
      category: { text: 1 },
      title: {
        selector: 'a[href*="/download/"]',
        filters: [
          { name: 're_replace', args: ['^(\\[.+?\\])(.+?)$', '$2 $1'] },
          { name: 're_replace', args: ['(_|\\[|\\])', ' '] },
        ],
      },
      details: { text: '{{ .Config.sitelink }}' },
      download: {
        selector: 'a[href*="/download/"]',
        attribute: 'href',
      },
      size: { selector: 'td:contains("[size:") > span.torrentInfoData' },
      date: {
        selector: 'td:contains("[Added:") > span.torrentInfoData',
        filters: [
          { name: 'append', args: ' +02:00' },
          { name: 'dateparse', args: '02/01/2006 15:04:05 -07:00' },
        ],
      },
      grabs: {
        selector: 'td:contains("[Completed:") > span.torrentInfoData',
      },
      seeders: {
        selector: 'td:contains("Seeders") > span.torrentInfoData',
      },
      leechers: {
        selector: 'td:contains("Leechers") > span.torrentInfoData',
      },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
