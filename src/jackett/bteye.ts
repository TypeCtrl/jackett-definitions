import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'bteye',
  name: 'BTeye',
  description: 'BTeye is a Public BitTorrent DHT search engine.',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://www.bteye.org/'],
  caps: {
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
    categorymappings: [{ id: '1', cat: 'Other' }],
  },
  settings: [
    {
      name: 'info',
      type: 'info',
      default:
        'BTeye does not use categories. In your software Indexer settings, set the category to 100001.',
    },
  ],
  download: { selector: 'a[href^="magnet:?xt="]', attribute: 'href' },
  search: {
    paths: [{ path: 'q/{{ if .Keywords }}{{ .Keywords }}{{else}}2020{{end}}' }],
    rows: { selector: 'div.plist', filters: [{ name: 'andmatch' }] },
    fields: {
      category: { text: 1 },
      title: { selector: 'div.pname a', attribute: 'title' },
      details: { selector: 'div.pname a', attribute: 'href' },
      download: { selector: 'div.pname a', attribute: 'href' },
      date: {
        selector: 'div.plink b:nth-of-type(3)',
        filters: [{ name: 'dateparse', args: '2006-01-02' }],
      },
      files: { selector: 'div.plink b:nth-of-type(2)' },
      size: { selector: 'div.plink b:nth-of-type(1)' },
      seeders: { text: 1 },
      leechers: { text: 1 },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
