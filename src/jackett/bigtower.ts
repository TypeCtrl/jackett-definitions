import { TopLevel } from '../definition-interface';
export const definition: TopLevel = {
  site: 'bigtower',
  name: 'BigTower',
  description: 'Big Tower is an ITALIAN Private site for TV / MOVIES / GENERAL',
  language: 'it-IT',
  type: 'private',
  encoding: 'UTF-8',
  links: ['http://bigtower.info/'],
  caps: {
    categorymappings: [
      { id: 91, cat: 'Movies/HD', desc: 'DSS' },
      { id: 92, cat: 'Movies/HD', desc: 'DSS 3D' },
      { id: 14, cat: 'Movies', desc: 'Screener' },
      { id: 15, cat: 'Movies/SD', desc: 'DVDRip' },
      { id: 16, cat: 'Movies/HD', desc: 'BDRip' },
      { id: 17, cat: 'Movies/HD', desc: 'HD 720p' },
      { id: 18, cat: 'Movies/HD', desc: 'HD 1080p' },
      { id: 19, cat: 'Movies/HD', desc: 'HD 3D' },
      { id: 83, cat: 'Movies/HD', desc: '4K (Ultra HD)' },
      { id: 89, cat: 'Movies/DVD', desc: 'DVD 5' },
      { id: 90, cat: 'Movies/DVD', desc: 'DVD 9' },
      { id: 37, cat: 'Movies', desc: 'MP4' },
      { id: 61, cat: 'TV', desc: 'TV Show' },
      { id: 78, cat: 'TV', desc: 'Serie TV' },
      { id: 96, cat: 'TV/HD', desc: 'Serie TV 720p' },
      { id: 97, cat: 'TV/HD', desc: 'Serie TV 1080p' },
      { id: 98, cat: 'TV', desc: 'Serie TV MP4' },
      { id: 24, cat: 'TV/Anime', desc: 'Cartoni' },
      { id: 66, cat: 'TV/Anime', desc: 'Anime' },
      { id: 71, cat: 'TV', desc: 'SUB iTA' },
      { id: 75, cat: 'TV/Documentary', desc: 'Documentari' },
      { id: 72, cat: 'TV/Sport', desc: 'Sport' },
      { id: 28, cat: 'PC/Games', desc: 'PC Games' },
      { id: 63, cat: 'Console/Xbox360', desc: 'XBOX 360' },
      { id: 64, cat: 'Console/PS3', desc: 'PS3' },
      { id: 33, cat: 'Console/Wii', desc: 'WII' },
      { id: 76, cat: 'Console/Other', desc: 'PS2' },
      { id: 81, cat: 'Console/XboxOne', desc: 'XBOX ONE' },
      { id: 84, cat: 'Console/PS4', desc: 'PS4' },
      { id: 35, cat: 'Audio', desc: 'MP3' },
      { id: 67, cat: 'Audio', desc: 'FLAC' },
      { id: 52, cat: 'PC/ISO', desc: 'Windows' },
      { id: 54, cat: 'PC/ISO', desc: 'Mac' },
      { id: 69, cat: 'PC/ISO', desc: 'Linux' },
      { id: 40, cat: 'PC/Phone-IOS', desc: 'Android' },
      { id: 41, cat: 'PC/Phone-Android', desc: 'Iphone' },
      { id: 44, cat: 'Other', desc: 'Varie' },
      { id: 82, cat: 'Other', desc: 'Music Video' },
      { id: 86, cat: 'Other', desc: 'Navigatori' },
      { id: 95, cat: 'Other', desc: 'Immagini' },
      { id: 99, cat: 'Other', desc: 'AudioLibri' },
      { id: 46, cat: 'Books', desc: 'Ebook' },
      { id: 73, cat: 'Books/Comics', desc: 'Fumetti' },
      { id: 74, cat: 'Books/Comics', desc: 'Manga' },
      { id: 87, cat: 'Books', desc: 'Giornali' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
  },
  settings: [
    { name: 'username', type: 'text', label: 'Username' },
    { name: 'password', type: 'password', label: 'Password' },
    {
      name: 'donor',
      type: 'checkbox',
      label: "Show donor torrent? (Enable if you're a donor)",
      default: false,
    },
  ],
  login: {
    path: 'index.php?page=login',
    method: 'post',
    inputs: {
      uid: '{{ .Config.username }}',
      pwd: '{{ .Config.password }}',
    },
    error: [{ selector: 'span:contains("Nome Utente non corretto")' }],
    test: { path: 'index.php', selector: 'a[href="logout.php"]' },
  },
  search: {
    paths: [{ path: 'index.php' }],
    inputs: {
      search: '{{ .Keywords }}',
      page: 'torrents',
      category: '{{range .Categories}}{{.}};{{end}}',
      options: '0',
      active: '0',
    },
    rows: {
      selector:
        'table > tbody > tr > td > table.lista > tbody > tr:has(a[href^="index.php?page=torrent-details&id="]){{if .Config.donor }}{{else}}:not(:has(img[src*="keditbookmarks.png"])){{end}}',
    },
    fields: {
      download: {
        selector: 'a[href^="index.php?page=torrent-details&id="]',
        attribute: 'href',
        filters: [
          {
            name: 'replace',
            args: ['index.php?page=torrent-details&id=', 'download.php?id='],
          },
        ],
      },
      title: {
        selector: 'a[onmouseover][href^="index.php?page=torrent-details&id="]',
        filters: [{ name: 're_replace', args: ['(?i)(\\[Richiesta\\])', ''] }],
      },
      banner: {
        selector: 'a[onmouseover][href^="index.php?page=torrent-details&id="]',
        attribute: 'onmouseover',
        filters: [{ name: 'regexp', args: 'src=(.*?) ' }],
      },
      category: {
        selector: 'a[href^="index.php?page=torrents&category="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'category' }],
      },
      details: {
        selector: 'a[onmouseover][href^="index.php?page=torrent-details&id="]',
        attribute: 'href',
      },
      size: { selector: 'td:nth-last-child(2)' },
      date: {
        selector: 'td:nth-last-child(7)',
        filters: [
          { name: 'append', args: ' +01:00' },
          { name: 'dateparse', args: '02/01/2006 -07:00' },
        ],
      },
      grabs: {
        selector: 'td:nth-last-child(4)',
        filters: [{ name: 'replace', args: ['---', '0'] }],
      },
      seeders: { selector: 'td:nth-last-child(6)' },
      leechers: { selector: 'td:nth-last-child(5)' },
      downloadvolumefactor: {
        case: {
          'img[alt="Gold 100% Free"]': '0',
          'img[alt="Silver 50% Free"]': '0.5',
          'img[alt="Bronze 25% Free"]': '0.75',
          '*': '1',
        },
      },
      uploadvolumefactor: {
        case: {
          'img[alt="2x Upload Multiplier"]': '2',
          'img[alt="3x Upload Multiplier"]': '3',
          'img[alt="4x Upload Multiplier"]': '4',
          'img[alt="5x Upload Multiplier"]': '5',
          'img[alt="6x Upload Multiplier"]': '6',
          'img[alt="7x Upload Multiplier"]': '7',
          'img[alt="8x Upload Multiplier"]': '8',
          'img[alt="9x Upload Multiplier"]': '9',
          'img[alt="10x Upload Multiplier"]': '10',
          '*': '1',
        },
      },
    },
  },
};
