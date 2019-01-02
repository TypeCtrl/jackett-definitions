import { TopLevel } from '../definition-interface';
export const definition: TopLevel = {
  site: 'zamundanet',
  name: 'Zamunda.net',
  description:
    'Zumunda is a BULGARIAN Private Torrent Tracker for 0DAY / GENERAL',
  language: 'bg-BG',
  type: 'private',
  encoding: 'WINDOWS-1251',
  links: ['http://zamunda.net/'],
  caps: {
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
    categorymappings: [
      { id: '5', cat: 'Movies/HD' },
      { id: '6', cat: 'Audio' },
      { id: '7', cat: 'TV/SD' },
      { id: '9', cat: 'XXX' },
      { id: '19', cat: 'Movies/SD' },
      { id: '20', cat: 'Movies/DVD' },
      { id: '25', cat: 'TV/Other' },
      { id: '29', cat: 'Audio/Other' },
      { id: '30', cat: 'Audio/Other' },
      { id: '33', cat: 'TV/HD' },
      { id: '34', cat: 'Audio/Lossless' },
      { id: '42', cat: 'Movies/BluRay' },
      { id: '46', cat: 'Movies/3D' },
      { id: '49', cat: 'XXX/Other' },
      { id: '51', cat: 'Audio/Other' },
    ],
  },
  login: {
    path: '/takelogin.php',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [{ selector: 'td.embedded:has(h2:contains("failed"))' }],
    test: { path: '/bananas' },
  },
  search: {
    paths: [{ path: '/bananas' }],
    inputs: {
      $raw: '{{range .Categories}}c{{.}}=1&{{end}}',
      search: '{{ .Query.Keywords }}',
      incldead: 1,
    },
    rows: { selector: '.responsetop > tbody > tr:has(td.td_newborder)' },
    fields: {
      title: {
        selector: 'td:nth-child(2) > a[href^="/download.php"]',
        attribute: 'href',
        filters: [
          {
            name: 're_replace',
            args: [
              '^(.*?)download\\.php\\/[0-9]{1,10}\\/|\\.torrent(?=[^.]*$)',
              '',
            ],
          },
        ],
      },
      details: {
        selector: 'td:nth-child(2) > a:nth-child(1)',
        attribute: 'href',
      },
      category: {
        selector: 'td:nth-child(1) > a',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      download: { selector: 'a:has(i.fa-download)', attribute: 'href' },
      grabs: {
        selector: 'td:nth-child(7)',
        filters: [{ name: 'regexp', args: '(\\d+)' }],
      },
      size: { selector: 'td:nth-child(6)' },
      date: {
        selector: 'td:nth-child(5)',
        filters: [
          {
            name: 'regexp',
            args: '([12]\\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01]))',
          },
        ],
      },
      seeders: { selector: 'td:nth-child(8)' },
      leechers: { selector: 'td:nth-child(9)' },
      banner: {
        selector: 'td:nth-child(2) > a:nth-child(1)',
        attribute: 'onmouseover',
        filters: [{ name: 'regexp', args: "src=\\\\'([^\\s\\\\]+)" }],
      },
      downloadvolumefactor: { text: '0' },
      uploadvolumefactor: { text: '1' },
    },
  },
};