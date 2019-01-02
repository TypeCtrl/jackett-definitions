import { TopLevel } from '../definition-interface';
export const definition: TopLevel = {
  site: 'blubits',
  name: 'Blu-bits',
  description: 'A HD tracker',
  language: 'en-US',
  links: ['https://blu-bits.com/'],
  caps: {
    categories: {
      '14': 'Movies/BluRay',
      '15': 'Movies/HD',
      '16': 'Movies/HD',
      '18': 'Movies/HD',
      '19': 'Movies/HD',
      '21': 'Movies/BluRay',
      '23': 'Movies/HD',
      '24': 'Movies/HD',
      '25': 'Movies/HD',
      '27': 'TV/HD',
      '28': 'TV/HD',
      '29': 'TV/HD',
      '30': 'TV/HD',
      '35': 'TV/HD',
      '36': 'TV/HD',
      '38': 'Audio/Lossless',
      '39': 'Movies/HD',
      '40': 'TV/HD',
      '41': 'TV/Sport',
      '42': 'TV/Anime',
      '44': 'PC',
      '45': 'Audio/Video',
      '46': 'XXX',
      '51': 'XXX',
      '53': 'Audio/Video',
      '54': 'Movies/HD',
      '55': 'Movies/HD',
      '56': 'Movies/HD',
      '57': 'Audio/Video',
      '58': 'Audio/Video',
      '59': 'XXX',
    },
  },
  login: {
    path: 'index.php?page=login',
    method: 'post',
    inputs: {
      uid: '{{ .Config.username }}',
      pwd: '{{ .Config.password }}',
    },
    error: [
      {
        selector:
          'table.lista > tbody > tr > td.lista > span[style="color:#FF0000;"]',
      },
    ],
    test: { path: 'index.php', selector: 'ul#navlist' },
  },
  ratio: {
    path: 'index.php',
    selector: 'ul#navlist > li:contains("Ratio: ")',
    filters: [
      { name: 'split', args: [' ', 1] },
      { name: 'replace', args: ['---', '0'] },
    ],
  },
  search: {
    path: 'index.php',
    inputs: {
      search: '{{ .Query.Keywords }}',
      page: 'torrents',
      options: 0,
      active: 0,
    },
    rows: {
      selector:
        'div.b-content > table.lista > tbody > tr:has(a[href^="index.php?page=torrents&category="])',
    },
    fields: {
      download: {
        selector: 'a[href^="download.php?id="]',
        attribute: 'href',
      },
      title: {
        selector: 'a[href^="index.php?page=torrent-details&id="]',
        attribute: 'title',
        filters: [{ name: 'replace', args: ['View details: ', ''] }],
      },
      category: {
        selector: 'a[href^="index.php?page=torrents&category="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'category' }],
      },
      comments: {
        selector: 'a[href^="index.php?page=torrent-details&id="]',
        attribute: 'href',
      },
      size: {
        selector: 'p',
        filters: [
          { name: 'replace', args: [' ', ''] },
          {
            name: 'regexp',
            args: '\\|\\s+Size:\\s+([\\w\\d\\.,]+ \\w\\w)\\s+\\|',
          },
        ],
      },
      date: {
        selector: 'a[href^="index.php?page=torrent-details&id="]',
        attribute: 'onmouseover',
        filters: [{ name: 'regexp', args: '<center>Added:(.*?)</center>' }],
      },
      grabs: {
        selector: 'a[href^="index.php?page=torrent_history&id="]',
        filters: [{ name: 'replace', args: ['---', '0'] }],
      },
      seeders: {
        selector: 'a[title="Click here to view peers details"]:nth-child(1)',
      },
      leechers: {
        selector: 'a[title="Click here to view peers details"]:nth-child(2)',
      },
      downloadvolumefactor: {
        case: {
          'img[alt="gold"]': '0',
          'img[alt="silver"]': '0.5',
          '*': '1',
        },
      },
      uploadvolumefactor: {
        case: {
          'img[alt="2x Upload Multiplier"]': '2',
          'img[alt="3x Upload Multiplier"]': '3',
          'img[alt="4x Upload Multiplier"]': '4',
          'img[alt="5x Upload Multiplier"]': '5',
          'img[alt="6x Upload Multiplier"]': '6',
          'img[alt="7x Upload Multiplier"]': '7',
          'img[alt="8x Upload Multiplier"]': '8',
          'img[alt="9x Upload Multiplier"]': '9',
          'img[alt="10x Upload Multiplier"]': '10',
          '*': '1',
        },
      },
    },
  },
  encoding: 'UTF-8',
};
