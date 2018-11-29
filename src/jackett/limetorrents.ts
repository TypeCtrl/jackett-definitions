export const definition: any = {
  site: 'limetorrents',
  name: 'LimeTorrents',
  description: 'LimeTorrents is a Public general torrent index with mostly verified torrents',
  language: 'en-us',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://www.limetorrents.info/'],
  legacylinks: [
    'https://www.limetorrents.io/',
    'https://www.limetorrents.cc/',
    'https://www.limetorrents.me/',
  ],
  caps: {
    categories: {
      'TV shows': 'TV',
      Movies: 'Movies',
      Music: 'Audio',
      Games: 'Console',
      Applications: 'PC/0day',
      Other: 'Other/Misc',
      Anime: 'TV/Anime',
    },
    modes: { search: ['q'], 'tv-search': ['q', 'season', 'ep'] },
  },
  settings: [
    {
      name: 'downloadlink',
      type: 'select',
      label: 'Download link',
      default: 'magnet:',
      options: {
        'http://itorrents.org/': 'iTorrents.org',
        'magnet:': 'magnet',
      },
    },
  ],
  download: {
    selector: 'a.csprite_dltorrent[href^="{{ .Config.downloadlink }}"]',
  },
  search: {
    paths: [
      {
        path: '{{if .Keywords}}search/all/{{ .Keywords}}/{{else}}/index.php?page=latest100{{end}}',
      },
    ],
    keywordsfilters: [{ name: 're_replace', args: ['S[0-9]{2}([^E]|$)', ''] }],
    rows: { selector: '.table2 > tbody > tr[bgcolor]' },
    fields: {
      title: { selector: 'div.tt-name > a[href^="/"]' },
      details: {
        selector: 'div.tt-name > a[href^="/"]',
        attribute: 'href',
      },
      size: { selector: 'td:nth-child(3)' },
      seeders: { selector: '.tdseed' },
      leechers: { selector: '.tdleech' },
      date: {
        selector: 'td:nth-child(2)',
        filters: [
          { name: 'split', args: ['-', 0] },
          { name: 'replace', args: ['Last Month', '1 month ago'] },
          { name: 'replace', args: ['+', ' ago'] },
        ],
      },
      download: {
        selector: 'div.tt-name > a[href^="/"]',
        attribute: 'href',
      },
      category: {
        optional: true,
        selector: 'td:nth-child(2)',
        filters: [{ name: 'split', args: ['-', 1] }, { name: 'replace', args: [' in ', ''] }],
      },
      downloadvolumefactor: { text: '0' },
      uploadvolumefactor: { text: '1' },
    },
  },
};
