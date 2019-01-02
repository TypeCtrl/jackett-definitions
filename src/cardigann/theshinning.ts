import { TopLevel } from '../definition-interface';
export const definition: TopLevel = {
  site: 'theshinning',
  name: 'The Shinning',
  description: 'A German gerneral tracker',
  language: 'de-DE',
  encoding: 'WINDOWS-1252',
  links: ['https://theshinning.org'],
  caps: {
    categories: {
      '1': 'TV/Sport',
      '2': 'TV/Sport',
      '3': 'TV/Sport',
      '4': 'TV/Sport',
      '5': 'TV/Sport',
      '6': 'TV/Sport',
      '7': 'TV/Sport',
      '8': 'TV/SD',
      '9': 'TV/HD',
      '10': 'TV',
      '11': 'TV/SD',
      '12': 'TV',
      '13': 'Audio',
      '14': 'Movies',
      '15': 'Other',
      '16': 'Movies',
      '17': 'Movies',
      '18': 'Movies',
      '19': 'Movies/HD',
      '20': 'Movies/HD',
      '21': 'Movies/3D',
      '22': 'Movies/SD',
      '23': 'Other',
      '24': 'Movies/SD',
      '25': 'Movies/DVD',
      '26': 'XXX',
      '27': 'XXX',
      '28': 'Movies/SD',
      '29': 'Movies/BluRay',
      '30': 'Audio/MP3',
      '31': 'Audio/Lossless',
      '32': 'TV',
      '90': 'TV/Documentary',
      '91': 'Books',
      '92': 'PC/Games',
      '93': 'Console/Xbox',
      '94': 'Console/PS4',
      '95': 'Console/Wii',
      '96': 'Console/NDS',
      '97': 'Audio/Audiobook',
      '98': 'PC',
      '99': 'Movies/SD',
      '100': 'Movies/HD',
      '101': 'Movies/HD',
      '102': 'Movies/HD',
      '104': 'XXX/Imageset',
      '105': 'TV',
      '106': 'Audio',
      '107': 'Movies/HD',
    },
  },
  login: {
    path: '/login.php',
    method: 'form',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [{ selector: 'div.stderr_info_wrap' }],
    test: { path: '/browse.php', selector: 'img[title="Ratio"] + i' },
  },
  ratio: { path: '/browse.php', selector: 'img[title="Ratio"] + i' },
  search: {
    path: '/browse.php',
    inputs: {
      $raw: '{{range .Categories}}c{{.}}=1&{{end}}',
      search: '{{ .Query.Keywords }}',
      showsearch: '1',
      incldead: '1',
      orderby: 'added',
      sort: 'desc',
    },
    rows: {
      selector:
        'table.main > tbody > tr:contains("Alle Torrents") + tr > td > table.tableinborder > tbody > tr',
    },
    fields: {
      download: {
        selector: 'a[href^="download-ssl.php?torrent="]',
        attribute: 'href',
      },
      title: { selector: 'div.title_wrap', attribute: 'title' },
      category: {
        selector: 'a[href^="browse.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      details: { selector: 'div.title_wrap > a', attribute: 'href' },
      size: {
        selector: 'div.bro_right_ad > b',
        filters: [
          { name: 'replace', args: ['.', ''] },
          { name: 'replace', args: [',', '.'] },
        ],
      },
      grabs: { selector: 'div.bro_right_ae > b' },
      seeders: { selector: 'div.bro_box1_aa > b' },
      leechers: { selector: 'div.bro_box_aaa > b' },
      date: {
        selector: 'div.bro_box_date > span',
        filters: [
          { name: 'replace', args: [' ', ' '] },
          { name: 'dateparse', args: '02.01.2006 15:04:05' },
        ],
      },
      downloadvolumefactor: {
        case: { 'span[title="OnlyUp"]': '0', '*': '1' },
      },
      uploadvolumefactor: { case: { '*': '1' } },
    },
  },
};
