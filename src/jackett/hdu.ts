import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'hdu',
  name: 'HDU',
  description: 'HDU is a CHINESE Private Torrent Tracker for HD MOVIES / TV / GENERAL',
  language: 'zh-CN',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://pt.upxin.net/'],
  legacylinks: ['http://pt.upxin.net/'],
  caps: {
    categorymappings: [
      { id: '401', cat: 'Movies', desc: 'Movies/电影' },
      { id: '402', cat: 'TV', desc: 'TV Series/电视剧' },
      { id: '403', cat: 'TV', desc: 'TV Shows/综艺' },
      { id: '404', cat: 'TV/Documentary', desc: 'Documentaries/纪录片' },
      { id: '405', cat: 'TV/Anime', desc: 'Animations/动画' },
      { id: '406', cat: 'Audio/Video', desc: 'Music Videos/音乐 MV' },
      { id: '407', cat: 'TV/Sport', desc: 'Sports/体育' },
      { id: '408', cat: 'Audio', desc: 'HQ Audio/无损音乐' },
      { id: '411', cat: 'Other', desc: 'Misc/其他' },
      { id: '410', cat: 'PC/Games', desc: 'Games/游戏' },
    ],
    modes: {
      search: ['q', 'imdbid'],
      'tv-search': ['q', 'season', 'ep', 'imdbid'],
      'movie-search': ['q', 'imdbid'],
      'music-search': ['q'],
    },
  },
  settings: [
    { name: 'username', type: 'text', label: 'Username' },
    { name: 'password', type: 'password', label: 'Password' },
    {
      name: 'freeleech',
      type: 'checkbox',
      label: 'Search freeleech only',
      default: false,
    },
    {
      name: 'info_tpp',
      type: 'info',
      label: 'Results Per Page',
      default:
        'For best results, change the <b>Torrents per page:</b> setting to <b>100</b> on your account profile.',
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
      ssl: 'yes',
      trackerssl: '',
    },
    error: [{ selector: 'td.embedded:has(h2:contains("失败"))' }],
    test: { path: 'index.php', selector: 'a[href="logout.php"]' },
  },
  ratio: {
    path: 'index.php',
    selector: 'span.medium:has(a[href="logout.php"])',
    filters: [
      { name: 'replace', args: ['分享率：', 'Ratio: '] },
      { name: 'regexp', args: 'Ratio: (\\d+)' },
    ],
  },
  search: {
    paths: [{ path: 'torrents.php' }],
    inputs: {
      $raw: '{{ range .Categories }}cat{{.}}=1&{{end}}',
      search: '{{ if .Query.IMDBID }}{{ .Query.IMDBID }}{{ else }}{{ .Keywords }}{{ end }}',
      incldead: 0,
      spstate: '{{ if .Config.freeleech }}8{{ else }}0{{ end }}',
      search_area: '{{ if .Query.IMDBID }}4{{ else }}0{{ end }}',
      search_mode: 0,
    },
    rows: {
      selector: 'table.torrents > tbody > tr:has(table.torrentname)',
    },
    fields: {
      title: {
        optional: true,
        selector: 'a[title][href^="details.php?id="]',
        attribute: 'title',
      },
      category: {
        selector: 'a[href^="?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      details: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="download.php?id="]',
        attribute: 'href',
      },
      date: {
        selector: 'td.rowfollow:nth-child(4) > span[title]',
        attribute: 'title',
        filters: [
          { name: 'append', args: ' +08:00' },
          { name: 'dateparse', args: '2006-01-02 15:04:05 -07:00' },
        ],
      },
      size: { selector: 'td.rowfollow:nth-child(5)' },
      seeders: { selector: 'td.rowfollow:nth-child(6)' },
      leechers: { selector: 'td.rowfollow:nth-child(7)' },
      grabs: { selector: 'td.rowfollow:nth-child(8)' },
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
      description: {
        selector: 'td.rowfollow:nth-child(2)',
        remove: 'a, img',
      },
    },
  },
  source: 'jackett',
};
