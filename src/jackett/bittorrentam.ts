import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'bittorrentam',
  name: 'Bittorrent.AM',
  description: 'Bittorrent.AM is a Public torrent index',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://www.bittorrent.am/'],
  legacylinks: ['http://www.bittorrent.am/'],
  caps: {
    categorymappings: [
      { id: '0', cat: 'XXX', desc: 'Adult' },
      { id: '1', cat: 'TV/Anime', desc: 'Anime / Hentai' },
      { id: '2', cat: 'PC', desc: 'Apps' },
      { id: '3', cat: 'Console', desc: 'Games' },
      { id: '4', cat: 'Movies', desc: 'Movies' },
      { id: '5', cat: 'Audio', desc: 'Music' },
      { id: '6', cat: 'Other', desc: 'Other' },
      { id: '7', cat: 'TV', desc: 'Series / TV Shows' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
  },
  settings: [
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: 'pdd',
      options: {
        pdd: 'created desc',
        pd: 'created asc',
        sdsd: 'seeders desc',
        sds: 'seeders asc',
        szd: 'size desc',
        sz: 'size asc',
        td: 'title desc',
        t: 'title asc',
      },
    },
  ],
  download: { selector: 'a[ href^="magnet:?xt="]', attribute: 'href' },
  search: {
    paths: [
      {
        path:
          '{{ if .Keywords }}search.php?kwds={{ .Keywords }}&ord={{ .Config.sort }}&cat=100{{else}}/{{end}}',
      },
    ],
    rows: { selector: 'table.torrentsTable:has(tr.r) tbody tr.r' },
    fields: {
      category: { text: 6 },
      title: { selector: 'td:nth-child(3) a' },
      details: { selector: 'td:nth-child(3) a', attribute: 'href' },
      download: { selector: 'td:nth-child(3) a', attribute: 'href' },
      date: {
        selector: 'td:nth-child(1)',
        filters: [{ name: 'dateparse', args: '02 Jan 2006' }],
      },
      size: { selector: 'td:nth-child(4)' },
      seeders: {
        selector: 'td:nth-child(5)',
        filters: [{ name: 'replace', args: ['-', '1'] }],
      },
      leechers: {
        selector: 'td:nth-child(6)',
        filters: [{ name: 'replace', args: ['-', '0'] }],
      },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};