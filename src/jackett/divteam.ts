import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'divteam',
  name: 'DivTeam',
  description: 'DivTeam is a SPANISH Private Torrent Tracker for MOVIES / GENERAL',
  language: 'es-ES',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://divteam.com/'],
  caps: {
    categorymappings: [
      { id: '60', cat: 'Movies/HD', desc: 'MicroHD 720p' },
      { id: '77', cat: 'Movies/HD', desc: 'MicroHD 1080p' },
      { id: '78', cat: 'Movies/HD', desc: 'MicroHD 4K' },
      { id: '64', cat: 'TV/HD', desc: 'Pack Series' },
      { id: '65', cat: 'TV/HD', desc: 'Pack Series VOSE' },
      { id: '80', cat: 'Movies/BluRay', desc: 'BDRip X265 1080p' },
      { id: '81', cat: 'Movies/UHD', desc: 'UHDRip x265 4K' },
      { id: '82', cat: 'Movies/WEB-DL', desc: 'Pelis Web-DL 1080' },
      { id: '83', cat: 'Movies/WEB-DL', desc: 'Pelis Web-DL 720' },
      { id: '84', cat: 'Movies/UHD', desc: 'UHD Remux x265' },
      { id: '23', cat: 'TV/Sport', desc: 'Deportes' },
      { id: '20', cat: 'TV/HD', desc: 'Series' },
      { id: '31', cat: 'TV/HD', desc: 'Series VOSE' },
      { id: '69', cat: 'Movies', desc: 'Ciclo Cine Clasico' },
      { id: '70', cat: 'Movies', desc: 'Ciclo Clint Eastwood' },
      { id: '71', cat: 'Movies', desc: 'Ciclo Studio Ghibli' },
      { id: '72', cat: 'Movies', desc: 'Ciclo George A. Romero' },
      { id: '73', cat: 'Movies', desc: 'Saga Fast And Furious' },
      { id: '74', cat: 'Movies', desc: 'Saga Crepúsculo' },
      { id: '75', cat: 'Movies', desc: 'Saga The Purge' },
      { id: '79', cat: 'Movies', desc: 'Saga Star Wars' },
      { id: '76', cat: 'Movies', desc: 'x-men saga' },
      { id: '85', cat: 'Movies', desc: 'Sean Connery' },
      { id: '6', cat: 'Books/Ebook', desc: 'EBooks' },
      { id: '58', cat: 'Books/Ebook', desc: 'Kiosko' },
      { id: '24', cat: 'TV/Documentary', desc: 'Documentales' },
      { id: '32', cat: 'TV/Documentary', desc: 'Documentales VOSE' },
      { id: '49', cat: 'Books/Ebook', desc: 'eLearning' },
      { id: '68', cat: 'TV', desc: 'eLearning Multimedia' },
      { id: '16', cat: 'Movies/DVD', desc: 'DVD-Rip' },
      { id: '48', cat: 'Movies/BluRay', desc: 'BR-Rip/HD-Rip' },
      { id: '17', cat: 'Movies/BluRay', desc: 'BD-Rip' },
      { id: '5', cat: 'TV/Anime', desc: 'Anime' },
      { id: '34', cat: 'PC/Games', desc: 'Juegos PC' },
      { id: '7', cat: 'PC/0day', desc: 'Software PC' },
      { id: '35', cat: 'Console', desc: 'Juegos Sony' },
      { id: '36', cat: 'PC/Games', desc: 'Juegos Microsoft' },
      { id: '37', cat: 'Console/NDS', desc: 'Juegos Nintendo' },
      { id: '45', cat: 'Audio/MP3', desc: 'Music MP3' },
      { id: '44', cat: 'Audio/Lossless', desc: 'Music FLAC' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
      'music-search': ['q'],
      'book-search': ['q'],
    },
  },
  settings: [
    { name: 'cookie', type: 'text', label: 'Cookie' },
    {
      name: 'info_cookie',
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
      default: 3,
      options: { '2': 'title', '3': 'created', '4': 'size', '5': 'seeders' },
    },
    {
      name: 'type',
      type: 'select',
      label: 'Order requested from site',
      default: 2,
      options: { '1': 'asc', '2': 'desc' },
    },
    {
      name: 'info_results',
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
    paths: [{ path: 'index.php' }],
    inputs: {
      page: 'torrents',
      category: '{{ range .Categories }}{{.}};{{end}}',
      search: '{{ .Keywords }}',
      active: 0,
      options: '{{ if .Config.freeleech }}5{{ else }}0{{ end }}',
      order: '{{ .Config.sort }}',
      by: '{{ .Config.type }}',
    },
    rows: {
      selector: 'table.table.table-bordered > tbody > tr:has(a[href^="download.php?id="])',
    },
    fields: {
      download: {
        selector: 'a[href^="download.php?id="]',
        attribute: 'href',
      },
      title: {
        selector: 'a[href^="index.php?page=torrent-details"][onmouseover]:not(:contains("VOSE"))',
        optional: true,
        filters: [
          { name: 're_replace', args: ['\\W', '.'] },
          { name: 'append', args: '.Spanish-DivTeam' },
          { name: 're_replace', args: ['\\.+', '.'] },
          { name: 're_replace', args: ['^\\.', ''] },
          { name: 're_replace', args: ['UHDRip', 'BDRip'] },
        ],
      },
      poster: {
        selector: 'a[onmouseover][href^="index.php?page=torrent-details"]',
        attribute: 'onmouseover',
        filters: [{ name: 'regexp', args: 'src=(.*?) ' }],
      },
      category: {
        selector: 'a[href^="index.php?page=torrents&category="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'category' }],
      },
      details: {
        selector: 'a[href^="index.php?page=torrent-details"]',
        attribute: 'href',
      },
      size: { selector: 'td:nth-child(4)' },
      date: {
        selector: 'td:nth-child(6)',
        filters: [
          { name: 'append', args: ' +00:00' },
          { name: 'dateparse', args: '02/01/2006 -07:00' },
        ],
      },
      seeders: { selector: 'td:nth-last-child(4)' },
      leechers: { selector: 'td:nth-last-child(3)' },
      grabs: { selector: 'td:nth-last-child(2)' },
      downloadvolumefactor: {
        case: {
          'img[src="images/freeleech.gif"]': 0,
          'img[src="images/gold.png"]': 0,
          'img[src="images/silver.png"]': 0.5,
          '*': 1,
        },
      },
      uploadvolumefactor: {
        case: {
          'img[src="images/2x.png"]': 2,
          'img[src="images/3x.png"]': 3,
          'img[src="images/4x.png"]': 4,
          'img[src="images/5x.png"]': 5,
          '*': 1,
        },
      },
      minimumratio: { text: 0.7 },
      minimumseedtime: { text: 172800 },
    },
  },
  source: 'jackett',
};
