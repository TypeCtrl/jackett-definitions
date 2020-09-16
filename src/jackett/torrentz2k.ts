import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'torrentz2k',
  name: 'Torrentz2k',
  description: 'Torrentz2k is a Public torrent indexer',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://torrentz2k.pw/'],
  legacylinks: ['https://torrentz2k.xyz/'],
  caps: {
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
      'music-search': ['q'],
    },
    categorymappings: [
      { id: 'movies', cat: 'Movies' },
      { id: 'games', cat: 'Console' },
      { id: 'xxx', cat: 'XXX' },
      { id: 'music', cat: 'Audio' },
      { id: 'anime', cat: 'TV/Anime' },
      { id: 'tv', cat: 'TV' },
      { id: 'applications', cat: 'PC' },
      { id: 'apps', cat: 'PC' },
      { id: 'windows', cat: 'PC/0day' },
      { id: 'android', cat: 'PC/Phone-Android' },
      { id: 'other', cat: 'Other' },
    ],
  },
  settings: [],
  search: {
    paths: [
      { path: 'search/', method: 'post' },
      { path: 'search/', method: 'post', inputs: { page: 2 } },
    ],
    inputs: {
      q: '{{ if .Keywords }}{{ .Keywords }}{{else}}:latest:{{end}}',
      category: 'all',
      x: 0,
      y: 0,
    },
    keywordsfilters: [{ name: 're_replace', args: ['[^a-zA-Z0-9]+', '%'] }],
    rows: {
      selector: 'table.table-striped > tbody > tr',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      category: {
        selector: 'a[href^="/category/"]',
        attribute: 'href',
        filters: [{ name: 'split', args: ['/', 2] }],
      },
      title: { selector: 'span.btntitle', attribute: 'title' },
      details: { selector: 'td > a', attribute: 'href' },
      _magnetfilename: {
        text: '{{ .Result.title }}',
        filters: [{ name: 'validfilename' }, { name: 'urlencode' }],
      },
      magnet: {
        optional: true,
        selector: 'td > a',
        attribute: 'href',
        filters: [
          { name: 'replace', args: ['/', ''] },
          { name: 'prepend', args: 'magnet:?xt=urn:btih:' },
          {
            name: 'append',
            args:
              '&dn={{ .Result._magnetfilename }}.torrent&tr=udp://tracker.coppersurfer.tk:6969&tr=udp://tracker.leechers-paradise.org:6969&tr=udp://tracker.opentrackr.org:1337',
          },
        ],
      },
      date: {
        selector: 'td:nth-child(5)',
        filters: [
          { name: 'replace', args: ['sec', 'seconds'] },
          { name: 'replace', args: ['min', 'minutes'] },
          { name: 'replace', args: ['hr', 'hours'] },
          { name: 'append', args: ' ago' },
          { name: 'timeago' },
        ],
      },
      _size: { selector: 'td:nth-child(6)' },
      size: {
        text: '{{ if .Result._size }}{{ .Result._size }}{{else}}0 B{{end}}',
      },
      seeders: { selector: 'td:nth-child(3)' },
      leechers: { selector: 'td:nth-child(4)' },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
