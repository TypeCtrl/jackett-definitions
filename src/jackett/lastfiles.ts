import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'lastfiles',
  name: 'LastFiles',
  description: 'LastFiles (LF) is a ROMANIAN Private Torrent Tracker for 0DAY / GENERAL',
  language: 'ro-RO',
  type: 'private',
  encoding: 'WINDOWS-1252',
  links: ['http://last-torrents.org/'],
  caps: {
    categorymappings: [
      { id: '31', cat: 'Movies/UHD', desc: 'Movies/4K' },
      { id: '5', cat: 'Movies/BluRay', desc: 'Movies/BluRay' },
      { id: '9', cat: 'Movies/DVD', desc: 'Movies/DVD' },
      { id: '11', cat: 'Movies/HD', desc: 'Movies/HD' },
      { id: '58', cat: 'Movies/SD', desc: 'Movies/Cam' },
      { id: '61', cat: 'Movies/3D', desc: 'Movies/3D' },
      { id: '24', cat: 'Movies/SD', desc: 'Movies/XVID' },
      { id: '16', cat: 'Movies', desc: 'Old Movies' },
      { id: '15', cat: 'Movies', desc: 'Movies Mobile' },
      { id: '54', cat: 'Movies/WEBDL', desc: 'Movies/WEB-DL' },
      { id: '56', cat: 'TV/Documentary', desc: 'Documentary' },
      { id: '18', cat: 'Movies', desc: 'Movie Packs' },
      { id: '32', cat: 'Movies/UHD', desc: 'Movies/4K-RO' },
      { id: '6', cat: 'Movies/BluRay', desc: 'Movies/BluRay-Ro' },
      { id: '12', cat: 'Movies/HD', desc: 'Movies/HD-Ro' },
      { id: '81', cat: 'Movies/HD', desc: 'Movies/x265-Ro' },
      { id: '82', cat: 'Movies/HD', desc: 'Movies/x265' },
      { id: '10', cat: 'Movies/DVD', desc: 'Movies/DVD-Ro' },
      { id: '59', cat: 'Movies/SD', desc: 'Movies/Cam-Ro' },
      { id: '25', cat: 'Movies/SD', desc: 'Movies/XVID-Ro' },
      { id: '17', cat: 'Movies', desc: 'Old Movies Ro' },
      { id: '55', cat: 'Movies/WEBDL', desc: 'Movies/WEB-DL Ro' },
      { id: '57', cat: 'TV/Documentary', desc: 'Documentary-Ro' },
      { id: '62', cat: 'Movies/3D', desc: 'Movies/3D-RO' },
      { id: '19', cat: 'Movies', desc: 'Movie Packs Ro' },
      { id: '20', cat: 'TV', desc: 'TV Episodes' },
      { id: '21', cat: 'TV', desc: 'TV Episodes Ro' },
      { id: '13', cat: 'TV/HD', desc: 'HDTV' },
      { id: '14', cat: 'TV/HD', desc: 'HDTV-Ro' },
      { id: '28', cat: 'Audio', desc: 'Music' },
      { id: '51', cat: 'PC/Phone-Android', desc: 'Android Apps & Games' },
      { id: '26', cat: 'PC/0day', desc: 'Software' },
      { id: '30', cat: 'PC/ISO', desc: 'Games PC-ISO' },
      { id: '33', cat: 'PC/Games', desc: 'Game Packs' },
      { id: '1', cat: 'TV/Anime', desc: 'Anime/Hentai' },
      { id: '2', cat: 'TV/Anime', desc: 'Anime-Ro' },
      { id: '42', cat: 'TV/Sport', desc: 'Sport' },
      { id: '43', cat: 'Books', desc: 'Books' },
      { id: '44', cat: 'Other', desc: 'Images' },
      { id: '49', cat: 'Other', desc: 'Diverse' },
      { id: '22', cat: 'Other', desc: 'RoContent' },
      { id: '60', cat: 'XXX', desc: 'Images/XXX' },
      { id: '27', cat: 'XXX', desc: 'XXX' },
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
    path: 'takelogin.php',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [{ selector: 'td.embedded:has(h2:contains("failed"))' }],
    test: { path: 'browse.php' },
  },
  ratio: {
    path: 'browse.php',
    selector: 'font:contains("Ratio:") ~ font',
  },
  search: {
    paths: [{ path: 'browse.php' }],
    inputs: {
      $raw: '{{ range .Categories }}c{{.}}=1&{{end}}',
      search: '{{ if .Query.IMDBID }}{{ .Query.IMDBID }}{{ else }}{{ .Keywords }}{{ end }}',
      genre: '{{ if .Query.IMDBID }}2{{ else }}0{{ end }}',
      incldead: '{{ if .Config.freeleech }}3{{ else }}1{{ end }}',
      sort: '{{ .Config.sort }}',
      type: '{{ .Config.type }}',
    },
    rows: {
      selector: 'table.browser > tbody > tr:has(a[href^="download.php/"])',
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
      banner: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'onmouseover',
        filters: [{ name: 'regexp', args: 'src=([^\\s]+)' }],
      },
      download: {
        selector: 'a[href^="download.php/"]',
        attribute: 'href',
      },
      date: {
        selector: 'td:nth-child(3)',
        filters: [{ name: 'dateparse', args: '02-01-200615:04:05' }],
      },
      size: { selector: 'td:nth-child(4)' },
      grabs: {
        selector: 'td:nth-child(5)',
        filters: [{ name: 'regexp', args: '(\\d+)' }],
      },
      seeders: { selector: 'td:nth-child(6)' },
      leechers: { selector: 'td:nth-child(7)' },
      downloadvolumefactor: {
        case: {
          'span:contains("FREE")': 0,
          'span:contains("Half")': 0.5,
          '*': 1,
        },
      },
      uploadvolumefactor: {
        case: { 'span:contains("2XUP")': 2, '*': 1 },
      },
      minimumratio: { text: 1 },
      minimumseedtime: { text: 129600 },
    },
  },
  source: 'jackett',
};
