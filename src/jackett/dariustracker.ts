import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'dariustracker',
  name: 'Darius Tracker',
  description: 'Darius Tracker is a HUNGARIAN Private Tracker for MOVIES / TV / GENERAL',
  language: 'hu-HU',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://dariustracker.hu/'],
  caps: {
    categorymappings: [
      { id: '86', cat: 'Movies/SD', desc: 'Film/Cam/XviD/Eng' },
      { id: '85', cat: 'Movies/SD', desc: 'Film/Cam/XviD/Hun' },
      { id: '19', cat: 'Movies/DVD', desc: 'Film/DVD-R/Eng' },
      { id: '17', cat: 'Movies/DVD', desc: 'Film/DVD-R/Hun' },
      { id: '88', cat: 'XXX', desc: 'Film/DVD/XXX' },
      { id: '62', cat: 'Movies/DVD', desc: 'Film/DVD9/Hun' },
      { id: '82', cat: 'Movies/HD', desc: 'Film/HD/Eng' },
      { id: '83', cat: 'Movies/HD', desc: 'Film/HD/Hun' },
      { id: '89', cat: 'XXX', desc: 'Film/HD/XXX' },
      { id: '48', cat: 'Movies/HD', desc: 'Film/x264/Eng' },
      { id: '34', cat: 'Movies/HD', desc: 'Film/x264/Hun' },
      { id: '16', cat: 'Movies/SD', desc: 'Film/XviD/Eng' },
      { id: '15', cat: 'Movies/SD', desc: 'Film/XviD/Hun' },
      { id: '64', cat: 'Movies/SD', desc: 'Film/XviD/Pack' },
      { id: '70', cat: 'TV/Sport', desc: 'Film/XviD/Sport' },
      { id: '33', cat: 'XXX', desc: 'Film/XviD/XXX' },
      { id: '90', cat: 'Audio/Audiobook', desc: 'Hangoskönyv' },
      { id: '31', cat: 'PC/Games', desc: 'Játék/Pc/Iso' },
      { id: '29', cat: 'PC/Games', desc: 'Játék/Pc/Rip' },
      { id: '54', cat: 'Console/PS3', desc: 'Játék/PS2/PS3' },
      { id: '32', cat: 'Console/Xbox', desc: 'Játék/XBOX' },
      { id: '50', cat: 'Books', desc: 'Könyv/Eng' },
      { id: '27', cat: 'Books', desc: 'Könyv/Hun' },
      { id: '65', cat: 'Other', desc: 'Képek' },
      { id: '66', cat: 'XXX', desc: 'Képek/XXX' },
      { id: '71', cat: 'Audio/Lossless', desc: 'Lossless/Eng' },
      { id: '84', cat: 'Audio/Lossless', desc: 'Lossless/Hun' },
      { id: '68', cat: 'Movies/DVD', desc: 'Mese/DVD' },
      { id: '69', cat: 'Movies/SD', desc: 'Mese/XviD' },
      { id: '67', cat: 'PC/Mobile-Other', desc: 'Mobiltelefon' },
      { id: '26', cat: 'Audio/MP3', desc: 'Mp3/Eng' },
      { id: '25', cat: 'Audio/MP3', desc: 'Mp3/Hun' },
      { id: '14', cat: 'PC', desc: 'Program/Egyéb' },
      { id: '81', cat: 'PC/ISO', desc: 'Program/Iso' },
      { id: '49', cat: 'PC', desc: 'Program/Rip' },
      { id: '58', cat: 'TV', desc: 'Sorozat/Eng' },
      { id: '22', cat: 'TV', desc: 'Sorozat/Hun' },
      { id: '24', cat: 'Audio/Video', desc: 'Videóklipp' },
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
    { name: 'username', type: 'text', label: 'Username' },
    { name: 'password', type: 'password', label: 'Password' },
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
      options: { '1': 'name', '4': 'added', '5': 'size', '7': 'seeders' },
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
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [{ selector: 'table[cellpadding="5"]:contains("Hiba")' }],
    test: { path: 'index.php', selector: 'a[href^="logout.php"]' },
  },
  search: {
    paths: [{ path: 'browse.php' }],
    inputs: {
      $raw: '{{ range .Categories }}c[{{.}}]=1&{{end}}',
      viewMode: '',
      search: '{{ .Keywords }}',
      incldead: 1,
      sort: '{{ .Config.sort }}',
      type: '{{ .Config.type }}',
    },
    rows: {
      selector:
        'table[cellpadding="5"] > tbody > tr > td > table[cellpadding="5"] > tbody > tr:has(a[href^="download.php?torrent="])',
    },
    fields: {
      category: {
        selector: 'a[href^="browse.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      title: { selector: 'a[href^="details.php?id="]' },
      details: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="download.php?torrent="]',
        attribute: 'href',
      },
      poster: {
        selector: 'a.preview',
        attribute: 'href',
        optional: true,
      },
      imdb: {
        selector: 'a[href*="imdb.com/title/tt"]',
        attribute: 'href',
        optional: true,
      },
      files: {
        selector: 'td:nth-last-child(7)',
        filters: [{ name: 'regexp', args: '(\\d+)' }],
      },
      date: {
        selector: 'td:nth-last-child(5)',
        filters: [
          { name: 'append', args: ' +01:00' },
          { name: 'dateparse', args: '2006-01-02 15:04:05 -07:00' },
        ],
      },
      size: { selector: 'td:nth-last-child(4) b' },
      grabs: {
        selector: 'td:nth-last-child(3)',
        filters: [{ name: 'regexp', args: '(\\d+)' }],
      },
      seeders: { selector: 'td:nth-last-child(2)' },
      leechers: { selector: 'td:nth-last-child(1)' },
      downloadvolumefactor: {
        selector: 'img[src="skin/vilagos_kek/arrowdown.png"] ~ span',
        filters: [{ name: 'regexp', args: '(\\d+)' }],
      },
      uploadvolumefactor: {
        selector: 'img[src="skin/vilagos_kek/arrowup.png"] ~ span',
        filters: [{ name: 'regexp', args: '(\\d+)' }],
      },
      minimumratio: { text: 1 },
      minimumseedtime: { text: 259200 },
    },
  },
  source: 'jackett',
};
