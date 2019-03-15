import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'kikibt',
  name: 'KikiBT',
  description: 'KikiBT is a CHINESE Public BitTorrent DHT search engine.',
  language: 'cn-CN',
  type: 'public',
  encoding: 'UTF-8',
  followredirect: true,
  links: ['https://kikibt.cc/', 'https://kikibt.me/'],
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
      default:
        'KikiBT does not use categories. In your software Indexer settings, set the category to 100001.',
    },
  ],
  download: { selector: 'a[href^="magnet:?"]' },
  search: {
    paths: [{ path: '/', method: 'post', followredirect: true }],
    inputs: {
      keyword: '{{if .Keywords }}{{.Keywords}}{{else}}test{{end}}',
    },
    rows: { selector: 'dl.item', filters: [{ name: 'andmatch' }] },
    fields: {
      title: { selector: 'dt a' },
      category: { text: '1' },
      details: { selector: 'dt a', attribute: 'href' },
      download: { selector: 'dt a', attribute: 'href' },
      size: { selector: 'dd span:nth-of-type(2) b' },
      files: { selector: 'dd span:nth-of-type(3) b' },
      date: {
        selector: 'dd span:nth-of-type(1) b',
        filters: [{ name: 'dateparse', args: '2006-01-02' }],
      },
      grabs: { selector: 'dd span:nth-of-type(5) b' },
      seeders: { text: '1' },
      leechers: { text: '1' },
      downloadvolumefactor: { text: '0' },
      uploadvolumefactor: { text: '1' },
    },
  },
  source: 'jackett',
};
