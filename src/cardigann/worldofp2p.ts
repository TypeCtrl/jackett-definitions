import { TopLevel } from '../definition-interface';
export const definition: TopLevel = {
  site: 'worldofp2p',
  name: 'WorldOfP2P',
  description: 'A general tracker',
  language: 'en-US',
  encoding: 'UTF-8',
  links: ['https://worldofp2p.net'],
  caps: {
    categories: {
      '1': 'PC/0day',
      '2': 'PC/Games',
      '3': 'Movies/SD',
      '4': 'Audio/MP3',
      '5': 'TV/SD',
      '6': 'XXX/XviD',
      '7': 'Console/PSP',
      '8': 'Console/Other',
      '9': 'TV/Anime',
      '10': 'Movies/DVD',
      '11': 'Movies/BluRay',
      '12': 'PC/Games',
      '13': 'Audio/Lossless',
      '14': 'Console/Wii',
      '15': 'PC/0day',
      '16': 'PC/Mac',
      '17': 'PC/Phone-Other',
      '18': 'Audio',
      '19': 'Audio/Video',
      '20': 'Console/Other',
      '21': 'Console/PS3',
      '22': 'Console/PS4',
      '23': 'Console/Other',
      '24': 'Movies/3D',
      '25': 'Movies/HD',
      '26': 'Movies/HD',
      '27': 'Movies/SD',
      '28': 'Movies/Other',
      '29': 'Movies/WEBDL',
      '30': 'Movies/HD',
      '31': 'Movies/Other',
      '32': 'Console',
      '33': 'Movies/Other',
      '35': 'TV/SD',
      '36': 'TV/SD',
      '37': 'TV/HD',
      '38': 'TV/HD',
      '39': 'TV/HD',
      '41': 'TV',
      '42': 'TV/WEB-DL',
      '43': 'Console/Xbox',
      '44': 'Console/Xbox360',
      '45': 'Console/Xbox',
      '46': 'XXX',
      '47': 'XXX/Imageset',
      '48': 'XXX/Packs',
      '49': 'Audio',
      '50': 'Books',
      '51': 'Audio/Audiobook',
      '52': 'Movies/SD',
      '53': 'Movies/SD',
      '54': 'TV/HD',
      '55': 'TV/SD',
      '56': 'Movies/HD',
      '57': 'Movies/HD',
      '58': 'TV/HD',
    },
  },
  login: {
    path: '/takelogin.php',
    method: 'post',
    form: 'form',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      login: 'Login',
    },
    error: [{ selector: 'td.stdmsg2' }],
    test: { path: '/usercp.php?action=default' },
  },
  search: {
    path: '/browse.php',
    inputs: {
      $raw: '{{range .Categories}}c{{.}}=1&{{end}}',
      search: '{{ .Query.Keywords }}',
      incldead: '1',
      searchin: 'title',
    },
    rows: {
      selector:
        'table.browsewidth100 > tbody > tr:has(a[href^="download.php?torrent="])',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      title: { selector: 'a[href^="details.php?id="]' },
      category: {
        selector: 'a[href^="browse.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      comments: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="download.php?torrent="]',
        attribute: 'href',
      },
      files: { selector: 'td:nth-child(5)' },
      size: { selector: 'td:nth-child(8)' },
      seeders: { selector: 'td:nth-child(10)' },
      leechers: { selector: 'td:nth-child(11)' },
      date: { selector: 'td:nth-child(7)' },
      grabs: {
        selector: 'a[href^="snatches.php?id="]',
        filters: [{ name: 'regexp', args: '(\\d+)' }],
      },
      downloadvolumefactor: {
        case: {
          'a.info:contains("Free")': '0',
          'img[src*="/free.png"]': '0',
          '*': '1',
        },
      },
      uploadvolumefactor: { case: { '*': '1' } },
    },
  },
};
