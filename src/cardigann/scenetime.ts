export const definition: any = {
  site: 'scenetime',
  name: 'SceneTime',
  description: 'A general tracker',
  language: 'en-us',
  encoding: 'windows-1252',
  links: ['https://www.scenetime.com/'],
  caps: {
    categories: {
      '1': 'Movies/SD',
      '2': 'TV/SD',
      '3': 'Movies/DVD',
      '4': 'Audio',
      '5': 'PC/0day',
      '6': 'PC/Games',
      '7': 'Books',
      '9': 'TV/HD',
      '11': 'Audio/Video',
      '43': 'TV',
      '47': 'Movies/SD',
      '48': 'Console/Xbox',
      '49': 'Console/PSP',
      '50': 'Console/PS3',
      '51': 'Console/Wii',
      '52': 'PC/Mac',
      '53': 'PC',
      '55': 'Console/NDS',
      '57': 'Movies/SD',
      '59': 'Movies/HD',
      '61': 'Movies/SD',
      '63': 'TV',
      '64': 'Movies/3D',
      '65': 'Books/Comics',
      '77': 'TV/SD',
      '79': 'TV/Sport',
      '80': 'Movies/Foreign',
      '81': 'Movies/BluRay',
      '82': 'Movies/Other',
      '83': 'TV/WEB-DL',
      '100': 'TV/Foreign',
      '102': 'Movies/Other',
      '103': 'Movies/WEBDL',
      '105': 'Movies',
      '107': 'Console/PS4',
    },
  },
  settings: [{ name: 'cookie', type: 'text', label: 'Cookie' }],
  login: {
    method: 'cookie',
    inputs: { cookie: '{{ .Config.cookie }}' },
    test: { path: '/my.php' },
  },
  ratio: {
    path: '/my.php',
    selector: 'div#Statusdiv > div.FLl',
    filters: [{ name: 'regexp', args: '\\((.*?)\\)' }],
  },
  search: {
    path: '/browse_API.php',
    method: 'post',
    inputs: {
      $raw: '{{range .Categories}}c{{.}}=1&{{end}}',
      search: '{{ .Query.Keywords }}',
      cata: 'yes',
      sec: 'jax',
    },
    rows: { selector: 'tr.browse' },
    fields: {
      title: { selector: 'a[href^="details.php"] > font' },
      category: {
        selector: 'a[href^="browse.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      comments: {
        selector: 'a[href^="details.php"]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="details.php"]',
        attribute: 'href',
        filters: [
          { name: 'replace', args: ['details.php?id=', 'download.php/'] },
          { name: 'append', args: '/dummy.torrent' },
        ],
      },
      size: { selector: 'td:nth-child(6)' },
      seeders: { selector: 'td:nth-child(7)' },
      leechers: { selector: 'td:nth-child(8)' },
      date: { selector: 'span.elapsedDate', attribute: 'title' },
      downloadvolumefactor: {
        case: { 'font > b:contains("Freeleech")': '0', '*': '1' },
      },
      uploadvolumefactor: { case: { '*': '1' } },
    },
  },
};
