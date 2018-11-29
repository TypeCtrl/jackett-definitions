export const definition: any = {
  site: 'tspate',
  name: 'Tspate',
  description: 'A French gerneral tracker',
  language: 'fr-fr',
  links: ['https://www.tspate.me/'],
  caps: {
    categories: {
      '1': 'Movies/SD',
      '2': 'Movies/SD',
      '3': 'Movies/DVD',
      '4': 'Movies/HD',
      '5': 'Movies/HD',
      '6': 'Movies/BluRay',
      '7': 'Movies/3D',
      '8': 'Movies/SD',
      '9': 'Movies/DVD',
      '10': 'Movies/SD',
      '11': 'Movies/HD',
      '12': 'Movies/HD',
      '13': 'Movies/HD',
      '14': 'TV/SD',
      '15': 'TV',
      '16': 'TV',
      '17': 'TV',
      '18': 'TV/HD',
      '19': 'TV/HD',
      '20': 'TV',
      '21': 'TV/SD',
      '22': 'TV/Documentary',
      '23': 'TV/Sport',
      '24': 'TV',
      '25': 'TV/Anime',
      '26': 'TV',
      '27': 'Books',
      '28': 'Books',
      '29': 'Books/Comics',
      '30': 'Books',
      '31': 'Books',
      '32': 'Books',
      '33': 'PC/Games',
      '34': 'Console/PS3',
      '35': 'Console/Xbox',
      '36': 'Console/Wii',
      '37': 'Console/PSP',
      '38': 'Console/NDS',
      '39': 'PC/Phone-Android',
      '40': 'PC',
      '41': 'PC/Mac',
      '42': 'PC/Phone-Android',
      '43': 'PC/Phone-IOS',
      '44': 'PC',
      '45': 'PC',
      '46': 'Audio/MP3',
      '47': 'Audio/Lossless',
      '48': 'Audio',
      '49': 'Audio',
      '50': 'TV/Anime',
      '51': 'XXX',
      '55': 'PC/Mac',
      '56': 'Movies/HD',
      '57': 'TV/HD',
      '58': 'Movies/HD',
      '59': 'Movies/HD',
      '60': 'TV/HD',
      '61': 'TV/HD',
      '62': 'Movies/HD',
      '63': 'Books',
      '64': 'TV/SD',
    },
  },
  login: {
    path: 'account-login.php',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      remember: 'yes',
      returnto: '/',
    },
    error: [{ selector: 'div#nfobar > p#msgError' }],
    test: { path: 'torrents-search.php' },
  },
  ratio: {
    path: 'torrents-search.php',
    selector: 'div#infobar0 > ul > li:nth-child(1) > font:last-child',
  },
  search: {
    path: 'torrents-search.php',
    inputs: {
      $raw: '{{range .Categories}}c{{.}}=1&{{end}}',
      search: '{{ .Query.Keywords }}',
      incldead: '1',
    },
    rows: {
      selector: 'table.ttable_headinner > tbody > tr.t-row',
      after: 1,
    },
    fields: {
      download: {
        selector: 'a[href^="download.php?id="]',
        attribute: 'href',
      },
      title: {
        selector: 'a[href^="torrents-details.php?id="]',
        attribute: 'title',
      },
      category: {
        selector: 'a[href^="torrents.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      comments: {
        selector: 'a[href^="comments.php"]',
        attribute: 'href',
      },
      size: { selector: 'td:nth-child(7)' },
      grabs: { selector: 'td:nth-child(8)' },
      seeders: { selector: 'td:nth-child(9)' },
      leechers: { selector: 'td:nth-child(10)' },
      date: {
        selector: 'small > i',
        filters: [
          { name: 'replace', args: ['Date: ', ''] },
          { name: 'replace', args: ['le ', ''] },
          { name: 'dateparse', args: '15:04:05 02-01-2006' },
        ],
      },
      downloadvolumefactor: {
        case: { 'img[src="images/free.gif"]': '0', '*': '1' },
      },
      uploadvolumefactor: { case: { '*': '1' } },
    },
  },
};
