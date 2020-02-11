import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'hddisk',
  name: 'HDDisk',
  description: 'HDDisk (HDD) is a CHINESE Private Torrent Tracker for HD MOVIES / TV',
  language: 'zh-CN',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://hddisk.life/'],
  caps: {
    categorymappings: [
      { id: '401', cat: 'Movies', desc: 'Movies/电影' },
      { id: '404', cat: 'TV/Documentary', desc: 'Documentaries/纪录片' },
      { id: '405', cat: 'TV/Anime', desc: 'Animations/动漫' },
      { id: '402', cat: 'TV', desc: 'TV Series/电视剧' },
      { id: '422', cat: 'Console', desc: 'Games/游戏' },
      { id: '406', cat: 'Audio/Video', desc: 'MusicVideo/MV演唱会' },
      { id: '407', cat: 'TV/Sport', desc: 'Sports/体育' },
      { id: '409', cat: 'PC', desc: 'Software/软件' },
      { id: '408', cat: 'Audio', desc: 'HQ Audio/音乐' },
      { id: '423', cat: 'TV', desc: 'TV Shows/综艺' },
      { id: '424', cat: 'Other', desc: 'Other/其他' },
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
      securelogin: '',
      ssl: 'yes',
      trackerssl: 'yes',
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
        selector: 'a[href*="www.imdb.com/title/tt"]',
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
