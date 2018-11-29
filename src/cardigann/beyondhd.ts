export const definition: any = {
  site: 'beyondhd',
  name: 'BeyondHD',
  language: 'en-us',
  links: ['https://beyondhd.xyz/', 'https://beyondhd.me/'],
  settings: [{ name: 'cookie', type: 'text', label: 'Cookie' }],
  caps: {
    categories: {
      '17': 'Movies/HD',
      '36': 'Audio/Lossless',
      '37': 'Movies/BluRay',
      '40': 'TV/HD',
      '42': 'Audio/Video',
      '44': 'TV/HD',
      '45': 'TV/HD',
      '46': 'TV/HD',
      '48': 'TV/HD',
      '49': 'Movies/HD',
      '50': 'Movies/HD',
      '54': 'Movies/HD',
      '55': 'Audio/Video',
      '56': 'Audio/Video',
      '61': 'Movies/HD',
      '69': 'Audio/MP3',
      '71': 'Movies/3D',
      '75': 'Movies/HD',
      '77': 'Movies/HD',
      '78': 'Movies/HD',
      '83': 'Movies/3D',
      '86': 'Movies/HD',
      '89': 'TV/HD',
      '94': 'Movies/HD',
    },
  },
  login: {
    method: 'cookie',
    inputs: { cookie: '{{ .Config.cookie }}' },
    test: { path: '/messages.php' },
  },
  ratio: { text: '∞' },
  search: {
    path: 'browse.php',
    inputs: { search: '{{ .Keywords }}' },
    rows: { selector: 'table.torrenttable.tb_detail tr:nth-child(n+2)' },
    fields: {
      category: {
        selector: 'td:nth-child(1) a',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      title: { selector: 'td:nth-child(4) a' },
      details: { selector: 'td:nth-child(4) a', attribute: 'href' },
      download: { selector: 'td:nth-child(3) a', attribute: 'href' },
      size: { selector: 'td:nth-child(8)', remove: 'br' },
      date: {
        selector: 'td:nth-child(4) span:last-child',
        remove: 'i, br',
        filters: [{ name: 'split', args: ['|', 1] }, { name: 'trim', args: '.' }],
      },
      seeders: { selector: 'td:nth-child(10)' },
      leechers: { selector: 'td:nth-child(11)' },
    },
  },
};
