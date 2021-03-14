import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: '1ptbar',
  name: '1ptbar',
  description: '1ptbar is a CHINESE Private Torrent Tracker for Movies, TV, and e-Learning',
  language: 'zh-CN',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://1ptba.com/'],
  caps: {
    categorymappings: [
      { id: '401', cat: 'Movies', desc: 'Movies/电影' },
      { id: '404', cat: 'TV/Documentary', desc: 'Documentaries/纪录片' },
      { id: '405', cat: 'TV/Anime', desc: 'Animations/动漫' },
      { id: '402', cat: 'TV', desc: 'TV Series/电视剧' },
      { id: '403', cat: 'TV', desc: 'TV Shows/综艺节目' },
      { id: '406', cat: 'Audio/Video', desc: 'Music Videos/音乐MV' },
      { id: '407', cat: 'TV/Sport', desc: 'Sports/体育' },
      { id: '409', cat: 'Other', desc: 'Misc/其他' },
      { id: '408', cat: 'Audio', desc: 'HQ Audio/高品质音频' },
      { id: '412', cat: 'Other', desc: 'Edu/教育' },
      { id: '411', cat: 'PC/Games', desc: 'Games/游戏' },
      { id: '410', cat: 'PC/0day', desc: 'Software/软件' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep', 'imdbid'],
      'movie-search': ['q', 'imdbid'],
      'music-search': ['q'],
    },
  },
  settings: [
    { name: 'cookie', type: 'text', label: 'Cookie' },
    {
      name: 'info',
      type: 'info',
      label: 'How to get the Cookie',
      default:
        "<ol><li>Login to this tracker with your browser<li>Open the <b>DevTools</b> panel by pressing <b>F12</b><li>Select the <b>Network</b> tab<li>Click on the <b>Doc</b> button (Chrome Browser) or <b>HTML</b> button (FireFox)<li>Refresh the page by pressing <b>F5</b><li>Click on the first row entry<li>Select the <b>Headers</b> tab on the Right panel<li>Find <b>'cookie:'</b> in the <b>Request Headers</b> section<li><b>Select</b> and <b>Copy</b> the whole cookie string <i>(everything after 'cookie: ')</i> and <b>Paste</b> here.</ol>",
    },
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
      default: 'For best results, change the <b>Torrents per page:</b> setting to <b>100</b> on your account profile.',
    },
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: 4,
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
    method: 'cookie',
    inputs: { cookie: '{{ .Config.cookie }}' },
    test: { path: 'torrents.php' },
  },
  search: {
    paths: [{ path: 'torrents.php' }],
    inputs: {
      $raw: '{{ range .Categories }}cat{{.}}=1&{{end}}',
      search: '{{ if .Query.IMDBID }}{{ .Query.IMDBID }}{{ else }}{{ .Keywords }}{{ end }}',
      incldead: 0,
      spstate: '{{ if .Config.freeleech }}2{{ else }}0{{ end }}',
      search_area: '{{ if .Query.IMDBID }}4{{ else }}0{{ end }}',
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
        selector: 'a[href*="imdb.com/title/tt"]',
        attribute: 'href',
      },
      date: {
        selector: 'td.rowfollow:nth-last-of-type(7):not(:has(span))',
        optional: true,
        filters: [
          { name: 'append', args: ' +08:00' },
          { name: 'dateparse', args: '2006-01-0215:04:05 -07:00' },
        ],
      },
      size: { selector: 'td.rowfollow:nth-last-of-type(6)' },
      seeders: { selector: 'td.rowfollow:nth-last-of-type(5)' },
      leechers: { selector: 'td.rowfollow:nth-last-of-type(4)' },
      grabs: { selector: 'td.rowfollow:nth-last-of-type(3)' },
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
