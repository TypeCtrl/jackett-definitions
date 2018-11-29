export const definition: any = {
  site: 'zamundanet',
  name: 'Zamunda.net',
  description: 'Zumunda is a BULGARIAN Private Torrent Tracker for 0DAY / GENERAL',
  language: 'bg-bg',
  type: 'private',
  encoding: 'windows-1251',
  links: ['http://zamunda.net/'],
  caps: {
    categories: {
      '5': 'Movies/HD',
      '6': 'Audio',
      '7': 'TV/SD',
      '9': 'XXX',
      '19': 'Movies/SD',
      '20': 'Movies/DVD',
      '25': 'TV/Other',
      '29': 'Audio/Other',
      '30': 'Audio/Other',
      '33': 'TV/HD',
      '34': 'Audio/Lossless',
      '42': 'Movies/BluRay',
      '46': 'Movies/3D',
      '49': 'XXX/Other',
      '51': 'Audio/Other',
    },
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
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
            args: ['^(.*?)download\\.php\\/[0-9]{1,10}\\/|\\.torrent(?=[^.]*$)', ''],
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
