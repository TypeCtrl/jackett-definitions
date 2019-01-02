import { TopLevel } from '../definition-interface';
export const definition: TopLevel = {
  site: 'tokyotosho',
  name: 'Tokyo Toshokan',
  description: 'A BitTorrent Library for Japanese Media',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://www.tokyotosho.info/'],
  settings: [{ name: 'type-id', type: 'text', label: 'Type Id' }],
  caps: {
    categories: {
      '1': 'TV/Anime',
      '2': 'Audio',
      '3': 'Books',
      '4': 'XXX',
      '5': 'Other',
      '7': 'TV/Anime',
      '8': 'TV/Anime',
      '9': 'TV/Anime',
      '10': 'TV/Anime',
      '11': 'TV/Anime',
      '12': 'XXX',
      '13': 'XXX',
      '14': 'XXX',
      '15': 'XXX',
    },
    modes: { search: ['q'], 'tv-search': ['q', 'season', 'ep'] },
  },
  search: {
    paths: [
      { path: '{{if .Query.Keywords }}search.php{{else}}index.php{{end}}' },
    ],
    inputs: {
      terms: '{{ .Query.Keywords }}',
      type: '{{ .Config.type-id }}',
      cat: '{{ .Config.type-id }}',
    },
    rows: { selector: 'table.listing tr.category_0', after: 1 },
    fields: {
      category: {
        selector: 'td:nth-child(1) > a',
        attribute: 'href',
        filters: [{ name: 'regexp', args: '(\\d+)' }],
      },
      title: { selector: 'td:nth-child(2) > a:nth-child(2)' },
      details: { selector: 'td:nth-child(3) > a', attribute: 'href' },
      download: {
        selector: 'td:nth-child(2) > a:nth-child(2)',
        attribute: 'href',
      },
      size: {
        selector: 'td:nth-child(4)',
        filters: [
          { name: 'split', args: ['|', 1] },
          { name: 'regexp', args: 'Size: (.+?) ?$' },
        ],
      },
      date: {
        selector: 'td:nth-child(4)',
        filters: [
          { name: 'split', args: ['|', 2] },
          { name: 'regexp', args: 'Date: (.+?) ?$' },
          { name: 'replace', args: ['UTC', '-00'] },
          { name: 'dateparse', args: '2006-01-02 15:04 -07' },
        ],
      },
      seeders: { selector: 'td:nth-child(5) > span:nth-child(1)' },
      leechers: { selector: 'td:nth-child(5) > span:nth-child(2)' },
    },
  },
};
