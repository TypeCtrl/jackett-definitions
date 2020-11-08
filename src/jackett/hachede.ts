import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'hachede',
  name: 'HacheDe',
  description: 'HacheDe is a SPANISH site for HD content',
  language: 'es-ES',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://hachede.me/'],
  caps: {
    categorymappings: [
      { id: '1', cat: 'Movies', desc: 'Películas' },
      { id: '46', cat: 'Movies/3D', desc: 'Películas 3D' },
      { id: '52', cat: 'Movies/BluRay', desc: 'Películas Full Bluray' },
      { id: '33', cat: 'Movies/BluRay', desc: 'Películas BDRemux' },
      { id: '120', cat: 'Movies/BluRay', desc: 'Películas JMBD' },
      { id: '34', cat: 'Movies/HD', desc: 'Películas BDrip 1080p' },
      { id: '99', cat: 'Movies/HD', desc: 'Películas BDrip 720p' },
      {
        id: '140',
        cat: 'Movies/WEB-DL',
        desc: 'Películas WEB-DL AMAZON',
      },
      {
        id: '141',
        cat: 'Movies/WEB-DL',
        desc: 'Películas WEB-DL APPLE TV+',
      },
      { id: '142', cat: 'Movies/WEB-DL', desc: 'Películas WEB-DL HBO' },
      {
        id: '143',
        cat: 'Movies/WEB-DL',
        desc: 'Películas WEB-DL NETFLIX',
      },
      { id: '37', cat: 'Movies/Other', desc: 'Películas HDTVrip' },
      { id: '119', cat: 'Movies/HD', desc: 'Películas HDiTunes' },
      { id: '84', cat: 'Movies/HD', desc: 'Películas MicroHD 1080p' },
      { id: '100', cat: 'Movies/HD', desc: 'Películas MicroHD 720p' },
      { id: '16', cat: 'TV/HD', desc: 'Series' },
      { id: '133', cat: 'TV/HD', desc: 'Series WEB-DL AMAZON' },
      { id: '134', cat: 'TV/HD', desc: 'Series WEB-DL HBO' },
      { id: '135', cat: 'TV/HD', desc: 'Series WEB-DL NETFLIX' },
      { id: '136', cat: 'TV/HD', desc: 'Series WEB-DL STARZ' },
      { id: '137', cat: 'TV/HD', desc: 'Series WEB-DL DISNEY PLUS' },
      { id: '139', cat: 'TV/HD', desc: 'Series WEB-DL APPLE TV+' },
      { id: '44', cat: 'TV/Other', desc: 'Series HDTVrip' },
      {
        id: '144',
        cat: 'TV/HD',
        desc: 'Series WEB-DL ATRESPLAYER PREMIUM',
      },
      { id: '89', cat: 'TV/HD', desc: 'Series HDiTunes' },
      { id: '57', cat: 'TV/HD', desc: 'Series Full Bluray' },
      { id: '40', cat: 'TV/HD', desc: 'Series BDRemux' },
      { id: '121', cat: 'TV/HD', desc: 'Series JMBD' },
      { id: '41', cat: 'TV/HD', desc: 'Series BDrip 1080p' },
      { id: '101', cat: 'TV/HD', desc: 'Series BDrip 720p' },
      { id: '45', cat: 'TV/HD', desc: 'Series MicroHD 1080p' },
      { id: '102', cat: 'TV/HD', desc: 'Series MicroHD 720p' },
      { id: '90', cat: 'Movies', desc: 'Animación' },
      { id: '91', cat: 'Movies/3D', desc: 'Animación 3D' },
      { id: '92', cat: 'Movies/BluRay', desc: 'Animación Full Bluray' },
      { id: '93', cat: 'Movies/HD', desc: 'Animación BDrip 1080p' },
      { id: '104', cat: 'Movies/HD', desc: 'Animación BDrip 720p' },
      { id: '94', cat: 'Movies/BluRay', desc: 'Animación BDRemux' },
      { id: '123', cat: 'Movies/BluRay', desc: 'Animación JMBD' },
      { id: '96', cat: 'Movies/Other', desc: 'Animación HDTVrip' },
      { id: '98', cat: 'Movies/HD', desc: 'Animación MicroHD 1080p' },
      { id: '105', cat: 'Movies/HD', desc: 'Animación MicroHD 720p' },
      { id: '32', cat: 'Movies', desc: 'Documentales' },
      {
        id: '53',
        cat: 'Movies/BluRay',
        desc: 'Documentales Full Bluray',
      },
      { id: '59', cat: 'Movies/3D', desc: 'Documentales 3D' },
      { id: '64', cat: 'Movies/BluRay', desc: 'Documentales BDremux' },
      { id: '138', cat: 'Movies/WEB-DL', desc: 'Documentales WEB-DL' },
      { id: '122', cat: 'Movies/BluRay', desc: 'Documentales JMBD' },
      { id: '68', cat: 'Movies/HD', desc: 'Documentales BDrip 1080p' },
      { id: '106', cat: 'Movies/HD', desc: 'Documentales BDrip 720p' },
      { id: '80', cat: 'Movies/Other', desc: 'Documentales HDTVrip' },
      { id: '85', cat: 'Movies/HD', desc: 'Documentales MicroHD 1080p' },
      { id: '107', cat: 'Movies/HD', desc: 'Documentales MicroHD 720p' },
      { id: '114', cat: 'TV', desc: 'TV' },
      { id: '115', cat: 'TV/Other', desc: 'TV HDTVrip 1080p' },
      { id: '116', cat: 'TV/Other', desc: 'TV HDTVrip 720p' },
      { id: '50', cat: 'Other', desc: 'Deportes' },
      { id: '55', cat: 'Other/Misc', desc: 'Deportes Full Bluray' },
      { id: '60', cat: 'Other/Misc', desc: 'Deportes 3D' },
      { id: '65', cat: 'Other/Misc', desc: 'Deportes BDremux' },
      { id: '69', cat: 'Other/Misc', desc: 'Deportes BDrip 1080p' },
      { id: '108', cat: 'Other/Misc', desc: 'Deportes BDrip 720p' },
      { id: '81', cat: 'Other/Misc', desc: 'Deportes HDTVrip' },
      { id: '86', cat: 'Other/Misc', desc: 'Deportes MicroHD 1080p' },
      { id: '109', cat: 'Other/Misc', desc: 'Deportes MicroHD 720p' },
      { id: '51', cat: 'Movies', desc: 'Conciertos' },
      { id: '56', cat: 'Movies/BluRay', desc: 'Conciertos Full Bluray' },
      { id: '61', cat: 'Movies/3D', desc: 'Conciertos 3D' },
      { id: '66', cat: 'Movies/HD', desc: 'Conciertos BDremux' },
      { id: '70', cat: 'Movies/HD', desc: 'Conciertos BDrip 1080p' },
      { id: '110', cat: 'Movies/HD', desc: 'Conciertos BDrip 720p' },
      { id: '82', cat: 'Movies/Other', desc: 'Conciertos HDTVrip' },
      { id: '87', cat: 'Movies/HD', desc: 'Conciertos MicroHD 1080p' },
      { id: '111', cat: 'Movies/HD', desc: 'Conciertos MicroHD 720p' },
      { id: '49', cat: 'XXX', desc: 'Adultos' },
      { id: '54', cat: 'XXX/x264', desc: 'Adultos Full Bluray' },
      { id: '62', cat: 'XXX/x264', desc: 'Adultos 3D' },
      { id: '67', cat: 'XXX/x264', desc: 'Adultos BDremux' },
      { id: '71', cat: 'XXX/x264', desc: 'Adultos BDrip 1080p' },
      { id: '112', cat: 'XXX/x264', desc: 'Adultos BDrip 720p' },
      { id: '83', cat: 'XXX/XviD', desc: 'Adultos HDTVrip' },
      { id: '88', cat: 'XXX/x264', desc: 'Adultos MicroHD 1080p' },
      { id: '113', cat: 'XXX/x264', desc: 'Adultos MicroHD 720p' },
      { id: '124', cat: 'Movies', desc: 'H265' },
      { id: '126', cat: 'Movies/HD', desc: 'H265 Peliculas' },
      { id: '127', cat: 'TV/HD', desc: 'H265 Series' },
      { id: '130', cat: 'Movies/3D', desc: 'H265 3D' },
      { id: '128', cat: 'Movies/HD', desc: 'H265 Animación' },
      { id: '129', cat: 'Movies/HD', desc: 'H265 Documentales' },
      { id: '125', cat: 'Movies/UHD', desc: 'UHD' },
      { id: '131', cat: 'Movies/UHD', desc: 'UHD Películas' },
      { id: '132', cat: 'TV/UHD', desc: 'UHD Series' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
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
      label: 'Filter freeleech only',
      default: false,
    },
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: 'added',
      options: { added: 'created', seeders: 'seeders', size: 'size' },
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
    test: { path: '?p=home&pid=1', selector: 'div#member_info_bar' },
  },
  search: {
    keywordsfilters: [{ name: 're_replace', args: ['S0?(\\d{1,2})E(\\d{1,2})', '$1x$2'] }],
    inputs: {
      p: 'torrents',
      page: 1,
      pid: 10,
      $raw: '{{range .Categories}}&cid[]={{.}}{{end}}',
      keywords: '{{ .Keywords }}',
      search_type: 'name',
      'sortOptions[sortBy]': '{{ .Config.sort }}',
      'sortOptions[sortOrder]': '{{ .Config.type }}',
    },
    rows: {
      selector:
        'table#torrents_table_classic > tbody > tr:not(:first-child), .torrent-box[id^="torrent_"]{{ if .Config.freeleech }}:has(img[src$="/torrent_free.png"]){{ else }}{{ end }}',
    },
    fields: {
      category: {
        selector: 'td.torrent_image div.category_image a, .categoryImage a',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cid' }],
      },
      title: {
        selector: 'td.torrent_name > a, .newIndicator > a',
        filters: [
          { name: 're_replace', args: ['(?i)full', 'BRDISK.'] },
          { name: 're_replace', args: ['\\W', '.'] },
          { name: 'append', args: '.Spanish-HacheDe' },
          { name: 're_replace', args: ['\\.+', '.'] },
          { name: 're_replace', args: ['^\\.', ''] },
        ],
      },
      details: {
        selector: 'td.torrent_name > a, .newIndicator > a',
        attribute: 'href',
      },
      download: {
        selector: '.torrentImages > span:first-child a',
        attribute: 'href',
      },
      poster: {
        optional: true,
        selector: 'td.torrent_image div.relativeDiv div:not(.category_image) a, .previewImage a',
        attribute: 'href',
      },
      imdb: {
        optional: true,
        selector: '.torrentFlags a[href*="www.imdb.com/title/tt"]',
        attribute: 'href',
      },
      date: {
        selector:
          'td.torrent_name:contains("Uploaded"):not(:contains("-")), .torrentOwner:contains("Uploaded"):not(:contains("-"))',
        optional: true,
        filters: [
          { name: 'regexp', args: '(?<=Uploaded )(.*)(?= by)' },
          { name: 'replace', args: ['Yesterday at', 'Yesterday'] },
          { name: 'replace', args: ['Today at', 'Today'] },
          { name: 'fuzzytime' },
        ],
      },
      size: { selector: 'td.size a, .torrentInfo a[rel="torrent_size"]' },
      grabs: {
        selector: 'td.completed a, .torrentInfo a[rel="times_completed"]',
      },
      seeders: {
        selector: 'td.seeders a, .torrentInfo a[rel="torrent_seeders"]',
      },
      leechers: {
        selector: 'td.leechers a, .torrentInfo a[rel="torrent_leechers"]',
      },
      downloadvolumefactor: {
        optional: true,
        selector: 'img[src$="torrent_multiple_download.png"]',
        attribute: 'title',
        filters: [{ name: 'split', args: [':', 1] }, { name: 'trim' }],
      },
      uploadvolumefactor: {
        optional: true,
        selector: 'img[src$="torrent_multiple_upload.png"]',
        attribute: 'title',
        filters: [{ name: 'split', args: [':', 1] }, { name: 'trim' }],
      },
      minimumratio: { text: 1 },
      minimumseedtime: { text: 259200 },
    },
    paths: [{ path: '/' }],
  },
  source: 'jackett',
};
