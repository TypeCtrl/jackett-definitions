import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'nbtorrents',
  name: 'NBTorrents',
  description: 'NBTorrents is an INDIAN Private site for MOVIES / TV / MUSIC',
  language: 'en-US',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://www.nbtorrents.com/'],
  caps: {
    categorymappings: [
      { id: '22', cat: 'TV/Anime', desc: 'Anime' },
      { id: '26', cat: 'TV/Documentary', desc: 'Documentaries' },
      { id: '1', cat: 'Movies/UHD', desc: 'Movies UHD & BluRay' },
      { id: '3', cat: 'Movies/BluRay', desc: 'Movies BDRips' },
      { id: '6', cat: 'Movies/DVD', desc: 'Movies DVD' },
      { id: '7', cat: 'Movies/DVD', desc: 'Movies DVDRip' },
      { id: '8', cat: 'Movies', desc: 'Movies Pre' },
      { id: '2', cat: 'Movies', desc: 'Movies Remux' },
      { id: '4', cat: 'Movies/WEB-DL', desc: 'Movies Web' },
      { id: '5', cat: 'Movies/WEB-DL', desc: 'Movies WebRip' },
      { id: '15', cat: 'Audio/Lossless', desc: 'Music FLAC' },
      { id: '17', cat: 'Audio/MP3', desc: 'Music MP3' },
      { id: '18', cat: 'Audio', desc: 'Music Pack' },
      { id: '20', cat: 'Audio', desc: 'Music Podcast' },
      { id: '19', cat: 'Audio/Video', desc: 'Music Video' },
      { id: '16', cat: 'Audio', desc: 'Music Web' },
      { id: '25', cat: 'TV/Sport', desc: 'Sports' },
      { id: '10', cat: 'TV/UHD', desc: 'TV UHD & BluRay' },
      { id: '11', cat: 'TV', desc: 'TV BDRips' },
      { id: '14', cat: 'TV', desc: 'TV packs' },
      { id: '12', cat: 'TV/WEB-DL', desc: 'TV Web' },
      { id: '13', cat: 'TV/WEB-DL', desc: 'TV WebRips' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
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
    path: 'login.php',
    method: 'form',
    form: 'form[action="takelogin.php"]',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [
      {
        selector: 'td.colhead:contains("failed")',
        message: { selector: 'table tr td.text' },
      },
    ],
    test: {
      path: 'browse.php',
      selector: 'a[href*="logout.php?hash_insert="]',
    },
  },
  search: {
    paths: [{ path: 'browse.php' }],
    inputs: {
      $raw: '{{ range .Categories }}c{{.}}=1&{{end}}',
      search: '{{ .Keywords }}',
      searchin: 'title',
      incldead: 1,
      only_free: '{{ if .Config.freeleech }}1{{ else }}0{{ end }}',
      sort: '{{ .Config.sort }}',
      type: '{{ .Config.type }}',
    },
    rows: {
      selector: 'table.mainouter tr table tr:has(a[href^="download.php?torrent="])',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      category: {
        selector: 'td a[href^="browse.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      title: { selector: 'td a[href^="details.php?id="]' },
      details: {
        selector: 'td a[href^="details.php?id="]',
        attribute: 'href',
      },
      poster: {
        selector: 'td a[href^="details.php?id="]',
        attribute: 'onmouseover',
        filters: [{ name: 'regexp', args: 'src="(.*?)" ' }],
      },
      download: {
        selector: 'td a[href^="download.php?torrent="]',
        attribute: 'href',
      },
      imdb: {
        selector: 'td a[href*="imdb.com/title/tt"]',
        attribute: 'href',
      },
      files: { selector: 'td:nth-of-type(5)' },
      date: {
        selector: 'td:nth-of-type(7)',
        filters: [{ name: 'dateparse', args: 'Jan 2 2006 03:04 PM' }],
      },
      size: { selector: 'td:nth-of-type(8)' },
      grabs: {
        selector: 'td:nth-of-type(9)',
        filters: [{ name: 'regexp', args: '(\\d+)' }],
      },
      seeders: { selector: 'td:nth-of-type(10)' },
      leechers: { selector: 'td:nth-of-type(11)' },
      downloadvolumefactor: {
        case: {
          'img[title="Free Torrent"]': 0,
          'a.info:contains("Free")': 0,
          '*': 1,
        },
      },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
