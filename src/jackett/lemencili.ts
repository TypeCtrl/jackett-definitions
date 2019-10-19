import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'lemencili',
  name: 'LemenCili',
  description: 'LemenCili is a CHINESE Public Magnet Links search engine',
  language: 'zh-CN',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://lemencili10.xyz/'],
  legacylinks: ['https://lemencili1.xyz/'],
  settings: [],
  caps: {
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
    categorymappings: [{ id: '1', cat: 'Other' }],
  },
  search: {
    paths: [
      {
        path: 'search?keyword={{if .Keywords}}{{.Keywords}}{{else}}test{{end}}',
      },
      {
        path: 'search?keyword={{if .Keywords}}{{.Keywords}}{{else}}test{{end}}&p=2',
      },
    ],
    rows: {
      selector: 'div.panel-default:has(a[href^="/detail/"])',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      title: { selector: 'a[href^="/detail/"]' },
      category: { text: 1 },
      details: { selector: 'a[href^="/detail/"]', attribute: 'href' },
      _magnetfilename: {
        text: '{{ .Result.title }}',
        filters: [{ name: 'validfilename' }, { name: 'urlencode' }],
      },
      download: {
        selector: 'a[href^="/detail/"]',
        attribute: 'href',
        filters: [
          { name: 'split', args: ['/', 3] },
          { name: 'prepend', args: 'magnet:?xt=urn:btih:' },
          {
            name: 'append',
            args: '&dn={{ .Result._magnetfilename }}.torrent',
          },
          {
            name: 'append',
            args:
              '&tr=udp://tracker.openbittorrent.com:80/announce&tr=udp://tracker.opentrackr.org:1337/announce',
          },
        ],
      },
      size: { selector: 'h4 small span:nth-last-child(3)' },
      files: { selector: 'h4 small span:nth-last-child(2)' },
      date: {
        selector: 'h4 small span:nth-last-child(1)',
        filters: [{ name: 'dateparse', args: '2006-01-02 15:04:05' }],
      },
      seeders: { text: '1' },
      leechers: { text: '1' },
      downloadvolumefactor: { text: '0' },
      uploadvolumefactor: { text: '1' },
    },
  },
  source: 'jackett',
};
