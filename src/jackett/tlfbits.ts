import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'tlfbits',
  name: 'TLFBits',
  description: 'TLFBits is a CHINESE Private Torrent Tracker for HD MOVIES / TV',
  language: 'zh-CN',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://pt.eastgame.org/'],
  caps: {
    categorymappings: [
      { id: '426', cat: 'Movies/SD', desc: 'TLF-MiniSD' },
      { id: '432', cat: 'TV/Documentary', desc: 'TLF-Fayea' },
      { id: '436', cat: 'Movies', desc: 'TLF-iNT' },
      { id: '411', cat: 'Movies/SD', desc: 'Movie/XviD' },
      { id: '430', cat: 'Movies/HD', desc: 'Movie/X264' },
      { id: '415', cat: 'TV/SD', desc: 'TV/XviD' },
      { id: '413', cat: 'TV/SD', desc: 'TV/DVDRip' },
      { id: '414', cat: 'TV/HD', desc: 'TV/x264' },
      { id: '416', cat: 'PC/Games', desc: 'Game/PC' },
      { id: '417', cat: 'Console/PS3', desc: 'Game/PS2' },
      { id: '418', cat: 'Console/PS3', desc: 'Game/PS3' },
      { id: '419', cat: 'Console/PSP', desc: 'Game/PSP' },
      { id: '420', cat: 'Console/Wii', desc: 'Game/WII' },
      { id: '421', cat: 'Console/Xbox360', desc: 'Game/Xbox360' },
      { id: '429', cat: 'Console', desc: 'Game/Archive' },
      { id: '422', cat: 'PC', desc: 'APPS' },
      { id: '423', cat: 'PC/0day', desc: '0day' },
      { id: '428', cat: 'PC', desc: '0day/Archive' },
      { id: '424', cat: 'Audio/MP3', desc: 'MP3' },
      { id: '425', cat: 'Audio/Video', desc: 'MVID' },
      { id: '435', cat: 'Audio/Lossless', desc: 'Lossless' },
      { id: '427', cat: 'Other', desc: 'MISC' },
      { id: '437', cat: 'Other', desc: 'Unknown' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep', 'imdbid'],
      'movie-search': ['q', 'imdbid'],
    },
  },
  settings: [
    { name: 'username', type: 'text', label: 'Username' },
    { name: 'password', type: 'password', label: 'Password' },
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: '4',
      options: { '1': 'title', '4': 'created', '5': 'size', '7': 'seeders' },
    },
    {
      name: 'type',
      type: 'select',
      label: 'Order requested from site',
      default: 'desc',
      options: { desc: 'desc', asc: 'asc' },
    },
  ],
  login: {
    path: 'login.php',
    method: 'form',
    form: 'form[action="takelogin.php"]',
    captcha: {
      type: 'image',
      selector: 'img[alt="CAPTCHA"]',
      input: 'imagestring',
    },
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      logout: '',
    },
    error: [
      { selector: 'td.embedded:has(h2:contains("失败"))' },
      { selector: 'td.embedded:has(h2:contains("登录失败"))' },
    ],
    test: { path: 'index.php', selector: 'a[href="logout.php"]' },
  },
  search: {
    paths: [{ path: 'torrents.php' }],
    inputs: {
      $raw: '{{ range .Categories }}cat{{.}}=1&{{end}}',
      search: '{{ if .Query.IMDBID }}{{ .Query.IMDBID }}{{else}}{{ .Keywords }}{{end}}',
      incldead: 0,
      spstate: 0,
      search_area: '{{ if .Query.IMDBID }}4{{else}}0{{end}}',
      search_mode: 0,
      sort: '{{ .Config.sort }}',
      type: '{{ .Config.type }}',
    },
    rows: {
      selector: 'table.torrents > tbody > tr:has(table.torrentname)',
    },
    fields: {
      category: {
        selector: 'a[href^="?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      title: {
        optional: true,
        selector: 'a[title][href^="details.php?id="]',
        attribute: 'title',
      },
      details: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="download.php?id="]',
        attribute: 'href',
      },
      imdb: {
        optional: true,
        selector: 'div.imdb_100 > a',
        attribute: 'href',
      },
      date: {
        selector: 'td:nth-child(4):not(:has(span))',
        optional: true,
        filters: [
          { name: 'append', args: ' +08:00' },
          { name: 'dateparse', args: '2006-01-0215:04:05 -07:00' },
        ],
      },
      size: { selector: 'td:nth-child(5)' },
      seeders: { selector: 'td:nth-child(6)' },
      leechers: { selector: 'td:nth-child(7)' },
      grabs: { selector: 'td:nth-child(8)' },
      downloadvolumefactor: {
        case: {
          'img.pro_free': 0,
          'img.pro_free2up': 0,
          'img.pro_50pctdown': 0.5,
          'img.pro_50pctdown2up': 0.5,
          'img.pro_30pctdown': 0.3,
          '*': 1,
        },
      },
      uploadvolumefactor: {
        case: {
          'img.pro_50pctdown2up': 2,
          'img.pro_free2up': 2,
          'img.pro_2up': 2,
          '*': 1,
        },
      },
      description: { selector: 'td:nth-child(2)', remove: 'a, img' },
    },
  },
  source: 'jackett',
};