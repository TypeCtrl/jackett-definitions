import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'hdzone',
  name: 'HDZone',
  description: 'HDZone is a CHINESE Private Torrent Tracker for HD MOVIES / TV',
  language: 'zh-CN',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://hdzone.me/'],
  caps: {
    categorymappings: [
      { id: '411', cat: 'Movies/SD', desc: 'Movies SD' },
      { id: '412', cat: 'Movies', desc: 'Movies IPad' },
      { id: '413', cat: 'Movies/HD', desc: 'Movies 720p' },
      { id: '414', cat: 'Movies/HD', desc: 'Movies 1080p' },
      { id: '415', cat: 'Movies', desc: 'Movies REMUX' },
      { id: '450', cat: 'Movies/BluRay', desc: 'Movies Bluray' },
      { id: '499', cat: 'Movies/UHD', desc: 'Movies UHD Blu-ray' },
      { id: '416', cat: 'Movies/UHD', desc: 'Movies 2160p' },
      { id: '417', cat: 'TV/Documentary', desc: 'Doc SD' },
      { id: '418', cat: 'TV/Documentary', desc: 'Doc IPad' },
      { id: '419', cat: 'TV/Documentary', desc: 'Doc 720p' },
      { id: '420', cat: 'TV/Documentary', desc: 'Doc 1080p' },
      { id: '421', cat: 'TV/Documentary', desc: 'Doc REMUX' },
      { id: '451', cat: 'TV/Documentary', desc: 'Doc Bluray' },
      { id: '500', cat: 'TV/Documentary', desc: 'Doc UHD Blu-ray' },
      { id: '422', cat: 'TV/Documentary', desc: 'Doc 2160p' },
      { id: '423', cat: 'Audio/Video', desc: 'TVMusic 720p' },
      { id: '424', cat: 'Audio/Video', desc: 'TVMusic 1080i' },
      { id: '425', cat: 'TV/SD', desc: 'TVShow SD' },
      { id: '426', cat: 'TV', desc: 'TVShow IPad' },
      { id: '471', cat: 'TV', desc: 'TVShow IPad' },
      { id: '427', cat: 'TV/HD', desc: 'TVShow 720p' },
      { id: '472', cat: 'TV/HD', desc: 'TVShow 720p' },
      { id: '428', cat: 'TV/HD', desc: 'TVShow 1080i' },
      { id: '429', cat: 'TV/HD', desc: 'TVShow 1080p' },
      { id: '430', cat: 'TV', desc: 'TVShow REMUX' },
      { id: '452', cat: 'TV/HD', desc: 'TVShow Bluray' },
      { id: '431', cat: 'TV/UHD', desc: 'TVShow 2160p' },
      { id: '432', cat: 'TV/SD', desc: 'TVSeries SD' },
      { id: '433', cat: 'TV', desc: 'TVSeries IPad' },
      { id: '434', cat: 'TV/HD', desc: 'TVSeries 720p' },
      { id: '435', cat: 'TV/HD', desc: 'TVSeries 1080i' },
      { id: '436', cat: 'TV/HD', desc: 'TVSeries 1080p' },
      { id: '437', cat: 'TV', desc: 'TVSeries REMUX' },
      { id: '453', cat: 'TV/HD', desc: 'TVSeries Bluray' },
      { id: '438', cat: 'TV/UHD', desc: 'TVSeries 2160p' },
      { id: '439', cat: 'Audio', desc: 'Music APE' },
      { id: '440', cat: 'Audio/Lossless', desc: 'Music FLAC' },
      { id: '441', cat: 'Audio/Video', desc: 'Music MV' },
      { id: '442', cat: 'TV/Sport', desc: 'Sports 720p' },
      { id: '443', cat: 'TV/Sport', desc: 'Sports 1080i' },
      { id: '444', cat: 'TV/Anime', desc: 'Anime SD' },
      { id: '445', cat: 'TV/Anime', desc: 'Anime IPad' },
      { id: '446', cat: 'TV/Anime', desc: 'Anime 720p' },
      { id: '447', cat: 'TV/Anime', desc: 'Anime 1080p' },
      { id: '448', cat: 'TV/Anime', desc: 'Anime REMUX' },
      { id: '454', cat: 'TV/Anime', desc: 'Anime Bluray' },
      { id: '409', cat: 'Other', desc: 'Misc' },
      { id: '449', cat: 'TV/Anime', desc: 'Anime 2160p' },
      { id: '501', cat: 'TV/Anime', desc: 'Anime UHD Blu-ray' },
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
    test: { path: 'torrents.php', selector: 'a[href="logout.php"]' },
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
