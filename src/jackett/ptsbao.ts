import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'ptsbao',
  name: 'PTSBAO',
  description: 'PTSBAO is a CHINESE Private Torrent Tracker for HD MOVIES / TV',
  language: 'zh-CN',
  type: 'private',
  encoding: 'UTF-8',
  followredirect: true,
  links: ['https://ptsbao.club/'],
  caps: {
    categorymappings: [
      { id: '401', cat: 'Movies', desc: 'Movies(电影)' },
      { id: '402', cat: 'TV', desc: 'TV Series(电视剧)' },
      { id: '403', cat: 'TV/Other', desc: 'TV Shows(电视节目)' },
      { id: '405', cat: 'TV/Anime', desc: 'Animations(动漫)' },
      { id: '414', cat: 'Audio', desc: 'Music(音乐)' },
      { id: '404', cat: 'TV/Documentary', desc: 'Documentaries(记录片)' },
      { id: '423', cat: 'Movies', desc: 'Movies Original(原创)' },
      { id: '409', cat: 'Other', desc: 'Misc(其他)' },
      { id: '424', cat: 'Other', desc: 'Limit(限制)' },
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
    {
      name: 'info_tpp',
      type: 'info',
      label: 'Results Per Page',
      default: 'For best results, change the <b>Torrents per page:</b> setting to <b>100</b> on your account profile.',
    },
  ],
  login: {
    method: 'cookie',
    inputs: { cookie: '{{ .Config.cookie }}' },
    test: { path: 'index.php' },
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
      selector: 'table.torrents > tbody > tr:has(a[href^="download.php?id="])',
    },
    fields: {
      category: {
        selector: 'a[href^="torrents.php?cat="]',
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
      poster: {
        selector: 'img.tooltip',
        attribute: 'src',
        filters: [{ name: 'replace', args: ['pic/imdb_pic/nophoto.gif', ''] }],
      },
      date: {
        selector: 'td:nth-child(6):not(:has(span))',
        optional: true,
        filters: [
          { name: 'append', args: ' +08:00' },
          { name: 'dateparse', args: '2006-01-0215:04:05 -07:00' },
        ],
      },
      size: { selector: 'td:nth-child(7)' },
      seeders: { selector: 'td:nth-child(8)' },
      leechers: { selector: 'td:nth-child(9)' },
      grabs: { selector: 'td:nth-child(10)' },
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
    },
  },
  source: 'jackett',
};
