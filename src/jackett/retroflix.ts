import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'retroflix',
  name: 'RetroFlix',
  description: 'Private Torrent Tracker for Classic Movies / TV / General Releases.',
  language: 'en-US',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://retroflix.club/'],
  legacylinks: ['https://retroflix.net/'],
  caps: {
    categorymappings: [
      { id: '401', cat: 'Movies', desc: 'Movies' },
      { id: '402', cat: 'TV', desc: 'TV Series' },
      { id: '406', cat: 'Audio/Video', desc: 'Music Videos' },
      { id: '407', cat: 'TV/Sport', desc: 'Sports' },
      { id: '409', cat: 'Books', desc: 'Books' },
      { id: '408', cat: 'Audio', desc: 'HQ Audio' },
    ],
    modes: {
      search: ['q', 'imdbid'],
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
    {
      name: 'info_tpp',
      type: 'info',
      label: 'Results Per Page',
      default:
        'For best results, change the <b>Torrents per page:</b> setting to <b>100</b> on your account profile.',
    },
  ],
  login: {
    method: 'cookie',
    inputs: { cookie: '{{ .Config.cookie }}' },
    test: { path: 'torrents.php' },
  },
  search: {
    paths: [{ path: 'torrents1.php' }],
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
      release_year: {
        selector: 'a[href^="/torrents.php?processing="]',
        optional: true,
      },
      quality: {
        selector: 'a[href^="/torrents.php?standard="]',
        optional: true,
      },
      title: {
        selector: 'a[title][href^="details.php?id="]',
        attribute: 'title',
        optional: true,
        filters: [
          { name: 'append', args: ' {{ .Result.release_year }}' },
          { name: 'append', args: ' {{ .Result.quality }}' },
        ],
      },
      details: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="download.php?id="]',
        attribute: 'href',
      },
      banner: {
        optional: true,
        selector: 'tr[onmouseover]',
        attribute: 'onmouseover',
        filters: [{ name: 'regexp', args: 'src="(.*?)"' }],
      },
      imdb: {
        optional: true,
        selector: 'a[href*="imdb.com/title/tt"]',
        attribute: 'href',
      },
      date: {
        selector: 'td:nth-child(4):not(:has(span))',
        optional: true,
        filters: [
          { name: 'append', args: ' +00:00' },
          { name: 'dateparse', args: '02-01-200615:04:05 -07:00' },
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
    },
  },
  source: 'jackett',
};
