import { TopLevel } from '../definition-interface';
export const definition: TopLevel = {
  site: 'torrentday',
  name: 'TorrentDay',
  language: 'en-US',
  links: ['https://www.torrentday.com/', 'http://td-update.com/'],
  settings: [{ name: 'cookie', type: 'text', label: 'Cookie' }],
  caps: {
    categories: {
      '1': 'Movies/SD',
      '2': 'TV/SD',
      '3': 'Movies/SD',
      '4': 'PC/Games',
      '5': 'Movies/HD',
      '6': 'Audio',
      '7': 'TV/SD',
      '8': 'Console/PSP',
      '9': 'Console/Xbox360',
      '10': 'Console/Wii',
      '11': 'Movies/HD',
      '12': 'PC',
      '13': 'Movies/SD',
      '14': 'TV',
      '16': 'Audio/Video',
      '17': 'Audio/MP3',
      '18': 'Console/PS3',
      '20': 'Books',
      '21': 'Movies/SD',
      '22': 'Movies/SD',
      '23': 'Audio/Foreign',
      '24': 'TV/SD',
      '25': 'Movies/SD',
      '26': 'TV/SD',
      '27': 'Audio/Lossless',
      '28': 'PC',
      '29': 'TV/Anime',
      '30': 'TV/Documentary',
      '31': 'TV/SD',
      '32': 'TV/HD',
      '33': 'TV/SD',
      '34': 'TV/SD',
      '41': 'Audio',
      '42': 'Audio/Audiobook',
      '43': 'PC/Mac',
      '44': 'Movies/SD',
      '46': 'TV/SD',
      '48': 'Movies/HD',
    },
  },
  login: {
    method: 'cookie',
    inputs: { cookie: '{{ .Config.cookie }}' },
    test: { path: '/messages.php' },
  },
  ratio: {
    path: '/index.php',
    selector: '#activityDiv span:nth-child(2)',
  },
  search: {
    path: '/t',
    inputs: {
      $raw: '{{range .Categories}}{{.}}&{{end}}q={{ .Query.Keywords }}',
    },
    rows: {
      selector:
        'table#torrentTable > tbody > tr:nth-child(n+2):has(td.t_label)',
    },
    fields: {
      category: {
        selector: 'td.t_label > a',
        attribute: 'href',
        filters: [{ name: 'regexp', args: '^\\?(\\d+)$' }],
      },
      title: { selector: 'td.torrentNameInfo > a' },
      details: { selector: 'td.torrentNameInfo > a', attribute: 'href' },
      comments: { selector: 'td:nth-child(5) > a', attribute: 'href' },
      download: { selector: 'td:nth-child(3) > a', attribute: 'href' },
      size: { selector: 'td:nth-child(6)' },
      date: {
        selector: 'td:nth-child(2) .t_ctime',
        filters: [
          { name: 'split', args: ['|', -1] },
          { name: 'split', args: [' by ', 0] },
        ],
      },
      seeders: { selector: 'td.seedersInfo' },
      leechers: { selector: 'td.leechersInfo' },
    },
  },
  encoding: 'UTF-8',
};
