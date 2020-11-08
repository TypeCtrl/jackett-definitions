import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'siambit',
  name: 'SiamBIT',
  description: 'SiamBIT is a THAI Private Torrent Tracker for GENERAL',
  language: 'th-TH',
  type: 'private',
  encoding: 'TIS-620',
  links: ['https://www.siambit.me/'],
  caps: {
    categorymappings: [
      { id: '1', cat: 'Other', desc: '@ King' },
      { id: '75', cat: 'PC/0day', desc: 'OS Windows / Office' },
      { id: '10', cat: 'TV', desc: 'Cartoons / Animation' },
      { id: '9', cat: 'TV/Sport', desc: 'Sports / Football' },
      { id: '110', cat: 'PC/Games', desc: 'Mobile games' },
      { id: '7', cat: 'PC/Games', desc: 'Games' },
      { id: '40', cat: 'Audio/Video', desc: 'clips' },
      { id: '16', cat: 'Audio/Video', desc: 'Concert' },
      { id: '3', cat: 'Audio/Other', desc: 'Karaoke / MV' },
      { id: '70', cat: 'PC', desc: 'software AntiVirus / Antispyware' },
      {
        id: '100',
        cat: 'PC/Mobile-Other',
        desc: 'software Mobile / Theme / Ringtone / mv',
      },
      { id: '85', cat: 'PC/Mac', desc: 'Mac software' },
      { id: '105', cat: 'PC', desc: 'Linux software' },
      { id: '8', cat: 'PC', desc: 'software' },
      { id: '56', cat: 'Other', desc: 'Dictionary / map' },
      { id: '19', cat: 'TV', desc: 'Talk show / comedy / radio' },
      { id: '20', cat: 'TV', desc: 'general' },
      { id: '55', cat: 'PC/Mobile-iOS', desc: 'Tablet / iPhone' },
      { id: '21', cat: 'TV', desc: 'Dharma' },
      { id: '2', cat: 'Audio/MP3', desc: 'Music' },
      {
        id: '130',
        cat: 'Audio/Audiobook',
        desc: 'High quality music (Lossless)',
      },
      {
        id: '60',
        cat: 'Other',
        desc: 'fonts / icons / clip art / templates',
      },
      { id: '90', cat: 'Movies/UHD', desc: '4K UHD movies' },
      { id: '91', cat: 'Movies/DVD', desc: 'DVD movies' },
      { id: '92', cat: 'Movies/HD', desc: 'Hi-Def movies' },
      { id: '89', cat: 'Movies/SD', desc: 'VCD movies' },
      {
        id: '93',
        cat: 'TV',
        desc: 'Mother and child @ / Learning materials for children',
      },
      { id: '4', cat: 'TV', desc: 'TV shows / Variety / Game shows' },
      { id: '50', cat: 'Other', desc: 'Images' },
      { id: '18', cat: 'Other', desc: 'website' },
      { id: '17', cat: 'TV/Documentary', desc: 'Documentary' },
      {
        id: '11',
        cat: 'Books/Technical',
        desc: 'Learning materials / Books / Ebook',
      },
      { id: '5', cat: 'Movies', desc: 'Movies / series [Korea]' },
      { id: '54', cat: 'Movies', desc: 'Movies / Series [China]' },
      { id: '51', cat: 'Movies', desc: 'Movie series / series [Japan]' },
      { id: '52', cat: 'Movies', desc: 'Movies / Series [Western]' },
      { id: '57', cat: 'Movies', desc: 'Movies / series [other]' },
      {
        id: '53',
        cat: 'Movies',
        desc: 'Movie series / series / drama [Thai]',
      },
      { id: '901', cat: 'XXX', desc: 'XXX-Anime' },
      { id: '902', cat: 'XXX', desc: 'XXX-Game' },
      { id: '903', cat: 'XXX', desc: 'XXX-Japan censored' },
      { id: '904', cat: 'XXX', desc: 'XXX-Japan' },
      { id: '905', cat: 'XXX', desc: 'XXX-Guava' },
      { id: '906', cat: 'XXX', desc: 'XXX-Asia censored' },
      { id: '907', cat: 'XXX', desc: 'XXX-Asia' },
      { id: '908', cat: 'XXX', desc: 'XXX-Gay' },
      { id: '910', cat: 'XXX', desc: 'XXX-clip' },
      { id: '911', cat: 'XXX', desc: 'XXX-pictures' },
      { id: '912', cat: 'XXX', desc: 'XXX-magazine' },
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
      default: 15,
      options: {
        '1': 'title desc',
        '5': 'size',
        '8': 'seeders',
        '14': 'title asc',
        '15': 'created',
      },
    },
    {
      name: 'info_results',
      type: 'info',
      label: 'Search results',
      default:
        'If you are getting the error <b>Found no results while trying to browse this tracker</b> then the most likely reason is that you have <b>Important news from the team</b> on the Web Site that must be read before you can proceed to the torrent search page.',
    },
  ],
  login: {
    path: 'takelogin.php',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [{ selector: 'td.text' }],
    test: { path: '/', selector: 'a[href="logout.php"]' },
  },
  download: {
    before: {
      path: 'ajax.php',
      method: 'get',
      inputs: { _action: 'say_thank', id: '{{ .DownloadUri.Query.id }}' },
    },
    selector: 'a[href^="downloadnew.php?id="]',
    attribute: 'href',
  },
  search: {
    paths: [
      {
        path: 'viewno18.php',
        categories: ['!', 901, 902, 903, 904, 905, 906, 907, 908, 910, 911, 912],
      },
      {
        path: 'viewbr.php',
        categories: [901, 902, 903, 904, 905, 906, 907, 908, 910, 911, 912],
      },
    ],
    inputs: {
      $raw: '{{ range .Categories }}c{{.}}=1&{{end}}',
      search: '{{ .Keywords }}',
      searchin: 0,
      sortby: '{{ .Config.sort }}',
    },
    rows: {
      selector:
        'table[width="100%"][border=1][cellspacing=0][cellpadding=5] > tbody > tr:has(a[href*="hashinfo="]){{ if .Config.freeleech }}:has(td:nth-child(3):contains("100%")){{ else }}{{ end }}',
    },
    fields: {
      title: { selector: 'a[href^="details.php?id="]' },
      details: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
      },
      category: {
        selector: 'a[href^="viewno18.php?cat="], a[href^="viewbr.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      download: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
      },
      imdb: {
        optional: true,
        selector: 'a[href*="www.imdb.com/title/"]',
        attribute: 'href',
      },
      files: { selector: 'td:nth-child(5)' },
      date: {
        selector: 'td:nth-child(7)',
        filters: [{ name: 'dateparse', args: '02-01-200615:04:05' }],
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
          'td:nth-child(3):contains("100%")': 0,
          'td:nth-child(3):contains("95%")': 0.05,
          'td:nth-child(3):contains("90%")': 0.1,
          'td:nth-child(3):contains("85%")': 0.15,
          'td:nth-child(3):contains("80%")': 0.2,
          'td:nth-child(3):contains("75%")': 0.25,
          'td:nth-child(3):contains("70%")': 0.3,
          'td:nth-child(3):contains("65%")': 0.35,
          'td:nth-child(3):contains("60%")': 0.4,
          'td:nth-child(3):contains("55%")': 0.45,
          'td:nth-child(3):contains("50%")': 0.5,
          'td:nth-child(3):contains("45%")': 0.55,
          'td:nth-child(3):contains("40%")': 0.6,
          'td:nth-child(3):contains("35%")': 0.65,
          'td:nth-child(3):contains("30%")': 0.7,
          'td:nth-child(3):contains("25%")': 0.75,
          'td:nth-child(3):contains("20%")': 0.8,
          'td:nth-child(3):contains("15%")': 0.85,
          'td:nth-child(3):contains("10%")': 0.9,
          'td:nth-child(3):contains("5%")': 0.95,
          '*': 1,
        },
      },
      uploadvolumefactor: {
        case: {
          'td:nth-child(4):contains("x2")': 2,
          'td:nth-child(4):contains("x3")': 3,
          'td:nth-child(4):contains("x4")': 4,
          'td:nth-child(4):contains("x5")': 5,
          'td:nth-child(4):contains("x6")': 6,
          'td:nth-child(4):contains("x7")': 7,
          'td:nth-child(4):contains("x8")': 8,
          'td:nth-child(4):contains("x9")': 9,
          '*': 1,
        },
      },
      minimumratio: { text: 1 },
    },
  },
  source: 'jackett',
};
