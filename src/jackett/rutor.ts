import { TopLevel } from '../definition-interface';
export const definition: TopLevel = {
  site: 'rutor',
  name: 'RuTor',
  description: 'RuTor is a RUSSIAN Public site for MOVIES / TV / GENERAL',
  language: 'ru-RU',
  type: 'public',
  encoding: 'UTF-8',
  links: ['http://rutor.info/'],
  caps: {
    categorymappings: [{ id: '4', cat: 'TV', desc: 'TV Shows' }],
    modes: { search: ['q'] },
  },
  settings: [
    {
      name: 'method',
      type: 'select',
      label: 'Search Method',
      default: '0',
      options: { '0': 'Full Phrase', '1': 'All Words', '2': 'Any Words' },
    },
    {
      name: 'info',
      type: 'info',
      label: 'A note about RuTor',
      default:
        'RuTor does not display categories in its search results page. This definition is probably only suitable for Jackett Dashboard Manual searches.',
    },
  ],
  search: {
    paths: [
      {
        path:
          '{{ if .Query.Q }}search/0/0/{{ .Config.method }}00/0/{{ .Query.Q }}{{else}}top{{end}}',
      },
    ],
    rows: { selector: 'table > tbody > tr:has(td:has(a.downgif))' },
    fields: {
      title: {
        selector: 'td:nth-of-type(2) a:nth-of-type(3)',
        filters: [
          {
            name: 're_replace',
            args: [
              '.+\\/\\s([^а-яА-я\\/]+)\\s.*\\[(?:S*(\\d+))(?:x*(\\d+-*\\d*).*)*\\].*\\)\\s+(.+)\\s+(?:\\||от)\\s*(.+)',
              '$1 - S$2E$3 - rus - $4 - $5',
            ],
          },
          { name: 'replace', args: ['E -', 'E01-99 -'] },
          { name: 'replace', args: ['Кураж-Бамбей', 'kurazh'] },
        ],
      },
      details: {
        selector: 'td:nth-of-type(2) a:nth-of-type(3)',
        attribute: 'href',
      },
      download: {
        selector: 'td:nth-of-type(2) a:nth-of-type(1)',
        attribute: 'href',
      },
      magnet: {
        selector: 'td:nth-of-type(2) a:nth-of-type(2)',
        attribute: 'href',
      },
      date: {
        selector: 'td:nth-of-type(1)',
        filters: [
          { name: 're_replace', args: ['[\\s]+', ' '] },
          { name: 'replace', args: ['Янв', 'Jan'] },
          { name: 'replace', args: ['Фев', 'Feb'] },
          { name: 'replace', args: ['Мар', 'Mar'] },
          { name: 'replace', args: ['Апр', 'Apr'] },
          { name: 'replace', args: ['Май', 'May'] },
          { name: 'replace', args: ['Июн', 'Jun'] },
          { name: 'replace', args: ['Июл', 'Jul'] },
          { name: 'replace', args: ['Авг', 'Aug'] },
          { name: 'replace', args: ['Сен', 'Sep'] },
          { name: 'replace', args: ['Окт', 'Oct'] },
          { name: 'replace', args: ['Ноя', 'Nov'] },
          { name: 'replace', args: ['Дек', 'Dec'] },
          { name: 'append', args: ' 00:00:00 +03:00' },
          { name: 'dateparse', args: '02 Jan 06 15:04:05 -07:00' },
        ],
      },
      size: { optional: true, selector: 'td:contains(\\00a0B)' },
      seeders: { selector: 'td span:has(img[alt="S"])' },
      leechers: { selector: 'td:has(img[alt="L"]) span' },
      downloadvolumefactor: { text: '0' },
      uploadvolumefactor: { text: '1' },
    },
  },
};