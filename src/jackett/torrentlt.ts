import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'torrentlt',
  name: 'Torrent.LT',
  description: 'Torrent.LT is a LITHUANIAN Private Torrent Tracker for 0DAY / GENERAL',
  language: 'lt-LT',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://torrent.lt/'],
  legacylinks: ['http://www.torrent.ai/', 'https://torrent.ai/'],
  caps: {
    categorymappings: [
      { id: '27', cat: 'TV', desc: 'Animacija' },
      { id: '76', cat: 'TV', desc: 'Animacija / LT' },
      { id: '35', cat: 'TV/Anime', desc: 'Anime' },
      { id: '31', cat: 'Movies/DVD', desc: 'Filmai / DVD' },
      { id: '33', cat: 'Movies', desc: 'Filmai / LT' },
      { id: '43', cat: 'Movies', desc: 'Filmai / LT-Subs' },
      { id: '34', cat: 'Movies', desc: 'Filmai / Eng' },
      { id: '32', cat: 'Movies', desc: 'Filmai / Rus' },
      { id: '1', cat: 'PC/Games', desc: 'Žaidimai / PC' },
      { id: '50', cat: 'Console/PS4', desc: 'Žaidimai / PlayStation' },
      { id: '51', cat: 'Console/Xbox360', desc: 'Žaidimai / XBOX-360' },
      { id: '73', cat: 'Console', desc: 'Žaidimai / Priedai' },
      { id: '36', cat: 'Console/Other', desc: 'Žaidimai / Kita' },
      { id: '80', cat: 'Movies/HD', desc: 'HD / Animacija LT' },
      { id: '52', cat: 'Movies/HD', desc: 'HD / Animacija' },
      { id: '53', cat: 'TV/Documentary', desc: 'HD / Dokumentika' },
      { id: '54', cat: 'Movies/HD', desc: 'HD / Filmai' },
      { id: '55', cat: 'Audio/Video', desc: 'HD / Music videos' },
      { id: '72', cat: 'Movies/3D', desc: 'HD / 3D' },
      { id: '56', cat: 'TV/HD', desc: 'HD / Serialai' },
      { id: '74', cat: 'TV/HD', desc: 'HD / Filmai LT' },
      { id: '79', cat: 'TV/HD', desc: 'HD / Serialai LT' },
      { id: '78', cat: 'TV/HD', desc: 'HD / Filmai RU' },
      { id: '37', cat: 'TV/HD', desc: 'HD / Kita' },
      { id: '57', cat: 'Audio/MP3', desc: 'Muzika / VA' },
      { id: '26', cat: 'Audio', desc: 'Muzika / DJ Sets' },
      { id: '6', cat: 'Audio', desc: 'Muzika / Albumai' },
      { id: '29', cat: 'Audio/Video', desc: 'Muzika / Video Klipai' },
      { id: '42', cat: 'TV', desc: 'Serialai / Eng' },
      { id: '58', cat: 'TV', desc: 'Serialai / LTU' },
      { id: '59', cat: 'TV', desc: 'Serialai / Rus' },
      { id: '45', cat: 'TV', desc: 'Serialai / Animacija' },
      { id: '10', cat: 'PC/0day', desc: 'Soft / PC' },
      { id: '44', cat: 'PC/Mac', desc: 'Soft / MAC' },
      { id: '61', cat: 'PC', desc: 'Soft / PDA' },
      { id: '75', cat: 'PC/Mobile-Other', desc: 'Soft / Kita' },
      { id: '40', cat: 'TV/Sport', desc: 'Sport / Kita' },
      { id: '62', cat: 'TV/Sport', desc: 'Sport / Basketball' },
      { id: '63', cat: 'TV/Sport', desc: 'Sport / Cars' },
      { id: '65', cat: 'TV/Sport', desc: 'Sport / Fights' },
      { id: '66', cat: 'TV/Sport', desc: 'Sport / Football' },
      { id: '69', cat: 'TV', desc: 'TV / LT' },
      { id: '70', cat: 'TV', desc: 'TV / RU' },
      { id: '39', cat: 'TV/Documentary', desc: 'TV / Dokumentika' },
      { id: '28', cat: 'TV', desc: 'TV / Kita' },
      { id: '21', cat: 'XXX', desc: 'pr0n' },
      { id: '71', cat: 'XXX/Pack', desc: 'pr0n / pack' },
      { id: '30', cat: 'Other', desc: 'Kita' },
      { id: '77', cat: 'Other', desc: 'Educational' },
      { id: '41', cat: 'Books', desc: 'E-Books' },
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
      name: 'info',
      type: 'info',
      label: 'How to get the Cookie',
      default:
        "<ol><li>Login to this tracker in your browser<li>Open the <b>DevTools</b> panel by pressing <b>F12</b><li>Select the <b>Network</b> tab<li>Click on the <b>Doc</b> button<li>Refresh the page by pressing <b>F5</b><li>Select the <b>Headers</b> tab<li>Find 'cookie:' in the <b>Request Headers</b> section<li>Copy & paste the whole cookie string to here</ol>",
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
      default: 0,
      options: { '0': 'created', '4': 'size', '6': 'seeders' },
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
    test: { path: 'lt/torrents.php' },
  },
  search: {
    paths: [{ path: 'lt/torrents.php' }],
    inputs: {
      $raw: '{{ range .Categories }}cats[]={{.}}&{{end}}',
      search: '{{ .Keywords }}',
      sort: '{{ .Config.sort }}',
      type: '{{ .Config.type }}',
      free: '{{ if .Config.freeleech }}on{{ else }}{{ end }}',
    },
    keywordsfilters: [{ name: 'replace', args: ['.', ' '] }],
    rows: {
      selector: 'table> tbody > tr[class^="torrents_table_row_"]',
      filters: [{ name: 'andmatch', args: 50 }],
    },
    fields: {
      category: {
        selector: 'td[class^="torrent_cat_image"] a',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cats[]' }],
      },
      title: { selector: 'td[class$="torrent_info"] a' },
      details: {
        selector: 'td[class$="torrent_info"] a',
        attribute: 'href',
      },
      download: { selector: 'td a.torrent_size', attribute: 'href' },
      poster: {
        selector: 'td[class$="torrent_info"] a',
        attribute: 'data-poster-preview',
      },
      seeders: { selector: 'td span.torrent_seeders' },
      leechers: { selector: 'td span.torrent_leechers' },
      size: { selector: 'td a.torrent_size' },
      downloadvolumefactor: {
        case: { 'img[src$="/freedownload.gif"]': 0, '*': 1 },
      },
      uploadvolumefactor: { text: 1 },
      date: {
        selector: 'td[class$="torrent_info"] span',
        remove: 'div, i',
        filters: [
          { name: 'append', args: ' +02:00' },
          { name: 'dateparse', args: '2006-01-02 15:04:05 -07:00' },
        ],
      },
      minimumratio: { text: 0.41 },
    },
  },
  source: 'jackett',
};
