import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'magicheaven',
  name: 'magic-heaven',
  description: 'magic-heaven is a Private Torrent Tracker for MOVIES / TV / GENERAL',
  language: 'en-EN',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://magic-heaven.info/'],
  caps: {
    categorymappings: [
      { id: '6', cat: 'PC', desc: 'APPS' },
      { id: '108', cat: 'Other', desc: 'APPS Wallpapers' },
      { id: '8', cat: 'Movies/BluRay', desc: 'BLU-RAY' },
      { id: '172', cat: 'Movies/BluRay', desc: 'BLU-RAY 1080p' },
      { id: '179', cat: 'Movies/BluRay', desc: 'BLU-RAY 4K' },
      { id: '176', cat: 'Movies/BluRay', desc: 'BLU-RAY 720p' },
      { id: '156', cat: 'Movies/BluRay', desc: 'BLU-RAY H264' },
      { id: '153', cat: 'Movies/BluRay', desc: 'BLU-RAY X264' },
      { id: '36', cat: 'Movies/SD', desc: 'CAMS' },
      { id: '161', cat: 'Movies/Other', desc: 'Christmas Movies' },
      { id: '164', cat: 'Movies/Other', desc: 'Christmas Music' },
      { id: '160', cat: 'Movies/Other', desc: 'Classic Movies' },
      { id: '169', cat: 'Console', desc: 'Console Games' },
      { id: '178', cat: 'PC/Games', desc: 'PC GAMES' },
      { id: '175', cat: 'Console/Xbox', desc: 'Console Games XBOX' },
      { id: '82', cat: 'Audio/Other', desc: 'DJ MUSIC' },
      { id: '84', cat: 'Audio/Other', desc: 'DJ MUSIC DMC' },
      { id: '102', cat: 'Audio/Other', desc: 'DJ MUSIC Full Tilt Remix' },
      { id: '92', cat: 'Audio/Other', desc: 'DJ MUSIC Funkymix' },
      { id: '83', cat: 'Audio/Other', desc: 'DJ MUSIC MASTERMIX' },
      { id: '93', cat: 'Audio/Other', desc: 'DJ MUSIC Ultimix' },
      { id: '90', cat: 'Audio/Other', desc: ' DJ MUSIC X-mix' },
      { id: '3', cat: 'Movies/DVD', desc: 'DVD-R' },
      { id: '11', cat: 'Books/Ebook', desc: 'E BOOKS' },
      { id: '114', cat: 'Audio/Audiobook', desc: 'E BOOKS Audio Books' },
      { id: '86', cat: 'Books/Mags', desc: 'E BOOKS Magazines' },
      { id: '167', cat: 'Audio/Other', desc: 'KARAOKE' },
      { id: '14', cat: 'Movies/Other', desc: "MKV's" },
      { id: '13', cat: 'Audio/MP3', desc: 'MP3 RELEASES' },
      { id: '17', cat: 'Movies/Other', desc: 'MP4' },
      { id: '18', cat: 'Movies/Other', desc: "MULTI'S" },
      { id: '98', cat: 'Movies/Other', desc: "MULTI'S Movie Box Sets" },
      { id: '20', cat: 'Audio/MP3', desc: 'MUSIC - MP3' },
      { id: '170', cat: 'Audio', desc: 'MUSIC Artist Albums' },
      { id: '150', cat: 'Audio', desc: 'MUSIC Collections' },
      { id: '96', cat: 'Audio', desc: 'MUSIC Discographys' },
      { id: '97', cat: 'Audio/Lossless', desc: 'MUSIC Flac' },
      { id: '177', cat: 'Audio', desc: 'MUSIC Rock / Metal' },
      { id: '171', cat: 'Audio/Video', desc: 'Music-Videos' },
      { id: '81', cat: 'Movies', desc: 'RatioBoosters' },
      { id: '26', cat: 'TV/Sport', desc: 'SPORT' },
      { id: '7', cat: 'Audio', desc: 'Top 40 Albums/Singles' },
      { id: '9', cat: 'TV', desc: 'TV EPISODES' },
      { id: '38', cat: 'TV', desc: 'TV SERIES' },
      { id: '30', cat: 'Other', desc: 'VIP' },
      { id: '158', cat: 'Other', desc: 'VIP GOLD' },
      { id: '173', cat: 'Movies/WEB-DL', desc: 'Web-dl' },
      { id: '34', cat: 'Movies/SD', desc: 'Xvid / HDrip' },
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
      options: {
        added: 'created',
        seeders: 'seeders',
        size: 'size',
        name: 'title',
      },
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
      logout: '',
    },
    error: [
      {
        selector: 'table:has(a[href*="login.php?error=1"])',
        message: { text: 'ERROR: Incorrect username!' },
      },
      {
        selector: 'table:has(a[href*="login.php?error=4"])',
        message: { text: 'ERROR: Incorrect password!' },
      },
      {
        selector: 'table:has(a[href*="login.php?error="])',
        message: { text: 'ERROR: Something went wrong during login!' },
      },
    ],
    test: {
      path: 'index.php',
      selector: 'a[href*="/logout.php?logouthash="]',
    },
  },
  download: {
    before: {
      path: 'takethanks.php',
      method: 'post',
      inputs: { torrentid: '{{ .DownloadUri.Query.id }}' },
    },
    selector: 'a[href*="/download.php?id="]',
    attribute: 'href',
  },
  search: {
    paths: [{ path: 'browse.php' }],
    inputs: {
      do: 'search',
      category: 0,
      include_dead_torrents: 'yes',
      keywords: '{{ .Keywords }}',
      search_type: 't_name',
      sort: '{{ .Config.sort }}',
      order: '{{ .Config.type }}',
    },
    keywordsfilters: [{ name: 're_replace', args: ['[^a-zA-Z0-9]+', '%'] }],
    rows: {
      selector:
        'table#sortabletable tbody tr:has(a[href*="download.php?id="]){{ if .Config.freeleech }}:has(img[src$="/freedownload.gif"]){{ else }}{{ end }}',
    },
    fields: {
      category: {
        selector: 'a[href*="browse.php?category="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'category' }],
      },
      title: {
        selector: 'div[id^="port-content-"] div',
        optional: true,
      },
      details: {
        selector: 'a[href*="details.php?id="]',
        attribute: 'href',
      },
      poster: {
        selector: 'div[id^="port-content-"] img',
        attribute: 'src',
      },
      date: {
        selector: 'td:nth-child(2) > div:last-child',
        filters: [
          { name: 'append', args: ' +00:00' },
          { name: 'dateparse', args: '02-01-2006 15:04 -07:00' },
        ],
      },
      download: {
        selector: 'a[href*="details.php?id="]',
        attribute: 'href',
      },
      magnet: { selector: 'a[href^="magnet:?xt="]', attribute: 'href' },
      size: { selector: 'td:nth-child(5)' },
      grabs: { selector: 'td:nth-child(6)' },
      seeders: { selector: 'td:nth-child(7)' },
      leechers: { selector: 'td:nth-child(8)' },
      downloadvolumefactor: {
        case: {
          'img[src$="/freedownload.gif"]': 0,
          'img[src$="/silverdownload.gif"]': 0.5,
          '*': 1,
        },
      },
      uploadvolumefactor: { case: { 'img[src$="/x2.gif"]': 2, '*': 1 } },
      minimumseedtime: { text: 86400 },
    },
  },
  source: 'jackett',
};
