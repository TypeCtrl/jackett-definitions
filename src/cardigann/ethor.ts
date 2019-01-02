import { TopLevel } from '../definition-interface';
export const definition: TopLevel = {
  site: 'ethor',
  name: "Ethor.net (Thor's Land)",
  description: 'A French gerneral tracker',
  language: 'fr-FR',
  links: ['https://ethor.net/'],
  caps: {
    categories: {
      '1': 'PC',
      '4': 'PC/Games',
      '5': 'Movies/SD',
      '6': 'Audio',
      '7': 'TV/SD',
      '9': 'XXX',
      '19': 'Movies/SD',
      '20': 'Movies/DVD',
      '22': 'PC',
      '23': 'Books',
      '25': 'Other',
      '34': 'Console/PS4',
      '36': 'Other',
      '37': 'Audio/Video',
      '38': 'Console/Wii',
      '40': 'Console/Xbox',
      '41': 'Console',
      '42': 'Movies/HD',
      '43': 'TV/HD',
      '44': 'PC',
      '45': 'TV/SD',
      '46': 'Other',
      '47': 'Movies/BluRay',
      '48': 'TV/HD',
    },
  },
  settings: [{ name: 'cookie', type: 'text', label: 'Cookie' }],
  login: {
    method: 'cookie',
    inputs: { cookie: '{{ .Config.cookie }}' },
    test: { path: 'browse.php' },
  },
  ratio: { path: 'browse.php', selector: 'span#ratioRatio' },
  search: {
    path: 'browse.php',
    inputs: {
      $raw: '{{range .Categories}}c{{.}}=1&{{end}}',
      search: '{{ .Query.Keywords }}',
      advcat: '0',
      incldead: '1',
      stype: 'b',
      dp: '0',
      isUserClick: '0',
    },
    rows: {
      selector: 'p + table > tbody > tr:has(a[href^="/details.php"])',
    },
    fields: {
      download: {
        selector: 'a[href^="/details.php"]:has(b)',
        attribute: 'href',
        filters: [{ name: 'replace', args: ['/details.php', '/download.php'] }],
      },
      title: { selector: 'a[href^="/details.php"]:has(b)' },
      category: {
        selector: 'a[href^="/browse.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      comments: {
        selector: 'a[href^="/details.php"]:has(b)',
        attribute: 'href',
      },
      files: { selector: 'a[href*="#filelist"]' },
      size: { selector: 'td:nth-child(6)' },
      grabs: {
        selector: 'td:nth-child(7)',
        filters: [{ name: 'regexp', args: '(\\d+)' }],
      },
      seeders: { selector: 'td:nth-child(8)' },
      leechers: { selector: 'td:nth-child(9)' },
      date: {
        selector: 'td:nth-child(5)',
        filters: [
          { name: 'append', args: ' -05:00' },
          { name: 'dateparse', args: '2006-01-0215:04:05 -07:00' },
        ],
      },
      downloadvolumefactor: {
        case: {
          'img[title^="Freeleech: "]': '0',
          'img[title^="Half Freeleech: "]': '0.5',
          '*': '1',
        },
      },
      uploadvolumefactor: { case: { '*': '1' } },
    },
  },
  encoding: 'UTF-8',
};
