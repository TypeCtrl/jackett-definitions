import { TopLevel } from '../definition-interface';
export const definition: TopLevel = {
  site: 'thepiratebay',
  name: 'The Pirate Bay',
  language: 'en-US',
  encoding: 'UTF-8',
  links: [
    'https://thepiratebay.org/',
    'https://thepiratesbay.pw/',
    'https://tproxy.pro/',
  ],
  caps: {
    categories: {
      '201': 'Movies',
      '202': 'Movies/DVD',
      '203': 'Audio/Video',
      '204': 'Movies/Other',
      '205': 'TV',
      '206': 'TV/Other',
      '207': 'Movies/HD',
      '208': 'TV/HD',
      '209': 'Movies/3D',
      '299': 'Movies/Other',
    },
  },
  search: {
    path:
      '{{if .Query.Keywords}}search/{{ .Query.Keywords}}/0/99/0{{else}}/recent{{end}}',
    rows: { selector: '#searchResult tbody tr:has(td.vertTh)' },
    fields: {
      category: {
        selector: 'td:nth-child(1) a:last-child',
        attribute: 'href',
        filters: [{ name: 'split', args: ['/', -1] }],
      },
      title: { selector: '.detLink' },
      details: { selector: '.detLink', attribute: 'href' },
      download: {
        selector: 'td:nth-child(2) a[title^="Download"]',
        attribute: 'href',
      },
      size: {
        selector: 'td:nth-child(2) font.detDesc',
        filters: [{ name: 'regexp', args: 'Size (.+?),' }],
      },
      date: {
        selector: 'td:nth-child(2) font.detDesc',
        filters: [{ name: 'regexp', args: 'Uploaded (.+?),' }],
      },
      seeders: { selector: 'td:nth-child(3)' },
      leechers: { selector: 'td:nth-child(4)' },
      downloadvolumefactor: { text: '0' },
      uploadvolumefactor: { text: '1' },
    },
  },
};
