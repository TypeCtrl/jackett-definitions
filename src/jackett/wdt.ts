import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'wdt',
  name: 'WDT',
  description:
    'Wrestling Desires Torrents (Ultimate Wrestling Torrents) is a Private Torrent Tracker for PROFESSIONAL WRESTLING / MMA',
  language: 'en-US',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://ultimatewrestlingtorrents.com/'],
  caps: {
    categorymappings: [
      { id: '14', cat: 'Audio/Audiobook', desc: 'Audiobooks' },
      { id: '16', cat: 'Audio', desc: 'Music Audio' },
      { id: '13', cat: 'Audio', desc: 'Podcasts' },
      { id: '15', cat: 'Audio', desc: 'Wrestling Themes' },
      { id: '29', cat: 'Books/Ebook', desc: 'Ebooks' },
      { id: '28', cat: 'Books/Mags', desc: 'Magazines' },
      { id: '30', cat: 'Books/Other', desc: 'Misc' },
      { id: '18', cat: 'Books/Other', desc: 'Wrestling Newsletters' },
      {
        id: '34',
        cat: 'TV/Sport',
        desc: 'Impact Wrestling PPV / One Nig',
      },
      { id: '9', cat: 'TV/Sport', desc: 'Weekly' },
      { id: '33', cat: 'TV/Sport', desc: 'Xplosion' },
      { id: '32', cat: 'TV/Sport', desc: 'DVDRips' },
      { id: '31', cat: 'TV/Sport', desc: 'DVDs' },
      { id: '20', cat: 'TV/Sport', desc: 'Packs' },
      { id: '19', cat: 'PC', desc: 'Computer Programs' },
      { id: '35', cat: 'PC/Games', desc: 'Games' },
      { id: '36', cat: 'PC/Mobile-Other', desc: 'Mobile Apps' },
      { id: '37', cat: 'TV/Sport', desc: 'Boxing' },
      { id: '38', cat: 'TV/Sport', desc: 'Classics' },
      { id: '12', cat: 'TV/Documentary', desc: 'Documentary' },
      { id: '40', cat: 'TV', desc: 'Indy Other Promotions' },
      { id: '44', cat: 'TV', desc: 'Other MMA' },
      { id: '11', cat: 'TV', desc: 'Other Videos' },
      { id: '42', cat: 'TV', desc: 'Puro NJPW' },
      { id: '43', cat: 'TV', desc: 'Self Defense Tutorials' },
      { id: '21', cat: 'TV', desc: 'Shoots' },
      { id: '22', cat: 'TV', desc: 'TV Episodes' },
      { id: '41', cat: 'TV/Sport', desc: 'UFC' },
      { id: '10', cat: 'Movies', desc: 'Wrestlers Movies' },
      { id: '26', cat: 'TV/Sport', desc: 'Network' },
      { id: '24', cat: 'TV/Sport', desc: 'NXT' },
      { id: '27', cat: 'TV/Sport', desc: 'Other WWE Shows' },
      { id: '17', cat: 'TV/Sport', desc: 'Raw' },
      { id: '23', cat: 'TV/Sport', desc: 'Smackdown' },
      { id: '25', cat: 'TV/Sport', desc: 'WWE PPV' },
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
      name: 'info_results',
      type: 'info',
      label: 'Search results',
      default:
        'If you are getting the error <b>Login Failed, got redirected</b> then access the site with your browser and <b>mark as read</b> all PMs.',
    },
  ],
  login: {
    path: 'login.php',
    method: 'form',
    form: 'form[action="takelogin.php"]',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      use_ssl: 1,
      perm_ssl: '',
      returnto: '/',
    },
    error: [
      {
        selector: 'table.main:contains("Login failed!")',
        message: { selector: 'table tr td.colhead2' },
      },
    ],
    test: { path: '/', selector: 'a[href*="logout.php?hash_please="]' },
  },
  search: {
    paths: [{ path: 'browse.php' }],
    inputs: {
      $raw:
        'cats3[]=14&cats3[]=16&cats3[]=13&cats3[]=15&cats5[]=29&cats5[]=28&cats5[]=30&cats5[]=18&cats1[]=34&cats1[]=9&cats1[]=33&cats6[]=32&cats6[]=31&cats6[]=20&cats7[]=19&cats7[]=35&cats7[]=36&cats2[]=37&cats2[]=38&cats2[]=12&cats2[]=40&cats2[]=44&cats2[]=11&cats2[]=42&cats2[]=43&cats2[]=21&cats2[]=22&cats2[]=41&cats2[]=10&cats4[]=26&cats4[]=24&cats4[]=27&cats4[]=17&cats4[]=23&cats4[]=25',
      search: '{{ .Keywords }}',
      searchin: 'title',
      incldead: 1,
      only_free: '{{ if .Config.freeleech }}1{{ else }}{{ end }}',
      sort: '{{ .Config.sort }}',
      type: '{{ .Config.type }}',
    },
    rows: {
      selector: 'table.table-bordered tr:has(a[href^="download.php?torrent="])',
    },
    fields: {
      category: {
        selector: 'a[href^="browse.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      title: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'onmouseover',
        filters: [{ name: 'regexp', args: "Tip\\('<b>(.+?)</b>" }],
      },
      download: {
        selector: 'a[href^="download.php?torrent="]',
        attribute: 'href',
      },
      details: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
      },
      files: { selector: 'td:nth-child(5)' },
      date: {
        selector: 'td:nth-child(7)',
        filters: [
          { name: 'append', args: ' +00:00' },
          { name: 'dateparse', args: 'Jan 2 2006 03:04 PM -07:00' },
        ],
      },
      size: { selector: 'td:nth-child(8)' },
      grabs: {
        selector: 'td:nth-child(9)',
        filters: [{ name: 'regexp', args: '(\\d+)' }],
      },
      seeders: { selector: 'td:nth-child(10)' },
      leechers: { selector: 'td:nth-child(11)' },
      downloadvolumefactor: {
        case: {
          'a.info:contains("[FREE]")': 0,
          'a.info:contains("[SILVER]")': 0.5,
          '*': 1,
        },
      },
      uploadvolumefactor: { text: 1 },
      minimumratio: { text: 1 },
      minimumseedtime: { text: 172800 },
    },
  },
  source: 'jackett',
};
