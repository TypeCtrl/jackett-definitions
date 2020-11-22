import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'mvgroupmain',
  name: 'MVGroup Main',
  description:
    'MVGroup is a Semi-Private site dedicated to UK TV and DOCUMENTARIES. This definition is for the Main Tracker site.',
  language: 'en-US',
  type: 'semi-private',
  encoding: 'UTF-8',
  links: ['https://forums.mvgroup.org/'],
  legacylinks: ['http://forums.mvgroup.org/'],
  caps: {
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
    categorymappings: [{ id: 'Other', cat: 'Other' }],
  },
  settings: [
    { name: 'username', type: 'text', label: 'Username' },
    { name: 'password', type: 'password', label: 'Password' },
    {
      name: 'info_8000',
      type: 'info',
      label: 'About MVGroup Categories',
      default:
        "MVGroup does not return categories in its search results.</br>To add to your Apps' Torznab indexer, replace all categories with 8000(Other).",
    },
    {
      name: 'hidef',
      type: 'checkbox',
      label: 'Show MVGroup HiDef Releases only',
      default: false,
    },
    {
      name: 'withsubs',
      type: 'select',
      label: 'Subtitles',
      default: '_',
      options: {
        _: '-OFF-',
        alb: 'Albanian',
        ara: 'Arabic',
        arm: 'Armenian',
        ass: 'Assyrian',
        bos: 'Bosnian',
        bul: 'Bulgarian',
        cat: 'Catalan',
        chi: 'Chinese, simplified',
        zho: 'Chinese, traditional',
        hrv: 'Croatian',
        cze: 'Czech',
        dan: 'Danish',
        dut: 'Dutch',
        eng: 'English',
        est: 'Estonian',
        fin: 'Finnish',
        fre: 'French',
        glg: 'Galician',
        geo: 'Georgian',
        ger: 'German',
        ell: 'Greek',
        heb: 'Hebrew',
        hin: 'Hindi',
        hun: 'Hungarian',
        ice: 'Icelandic',
        ind: 'Indonesian',
        ita: 'Italian',
        jpn: 'Japanese',
        kaz: 'Kazakh',
        kor: 'Korean',
        lav: 'Latvian',
        lit: 'Lithuanian',
        ltz: 'Luxembourgish',
        mac: 'Macedonian',
        may: 'Malay',
        nor: 'Norwegian',
        per: 'Persian',
        pol: 'Polish',
        por: 'Portuguese',
        rum: 'Romanian',
        rus: 'Russian',
        scc: 'Serbian',
        slo: 'Slovak',
        slv: 'Slovenian',
        spa: 'Spanish',
        swe: 'Swedish',
        tha: 'Thai',
        tur: 'Turkish',
        ukr: 'Ukrainian',
        vie: 'Vietnamese',
      },
    },
    {
      name: 'seed',
      type: 'checkbox',
      label: 'Only released and seeded torrents',
      default: false,
    },
    {
      name: 'dropbbc',
      type: 'checkbox',
      label: 'Drop "BBC " from the front of result titles',
      default: false,
    },
    {
      name: 'stripS01E01',
      type: 'checkbox',
      label: 'Strip the S01E01 from the Torznab search requests',
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
        filename: 'title',
      },
    },
    {
      name: 'type',
      type: 'select',
      label: 'Order requested from site',
      default: 'DESC',
      options: { DESC: 'desc', ASC: 'asc' },
    },
  ],
  login: {
    path: 'index.php?act=Login&CODE=00',
    method: 'form',
    form: 'form[action^="?act=Login"]',
    inputs: {
      UserName: '{{ .Config.username }}',
      PassWord: '{{ .Config.password }}',
      Privacy: 1,
      CookieDate: 1,
      CODE: 1,
      referer: 'https://forums.mvgroup.org/index.php?',
      act: 'Login',
    },
    error: [
      {
        selector: 'div.borderwrap:has(div.tablepad)',
        message: { selector: 'div.borderwrap div.tablepad' },
      },
    ],
    test: {
      path: 'index.php?https://forums.mvgroup.org/',
      selector: 'tr td.nav_mem div span[id="member_menu"]',
    },
  },
  search: {
    paths: [{ path: 'maintracker.php' }],
    inputs: {
      seed: '{{ if .Config.seed }}1{{ else }}0{{ end }}',
      withsubs: '{{ re_replace .Config.withsubs "_" "" }}',
      filter: '{{ if .Config.hidef }}hd+{{ else }}{{ end }}{{ .Keywords }}',
      orderby: '{{ .Config.sort }}',
      order: '{{ .Config.type }}',
    },
    keywordsfilters: [
      {
        name: 're_replace',
        args: ['(?i)S01E01', '{{ if .Config.stripS01E01 }}{{ else }}S01E01{{ end }}'],
      },
    ],
    rows: { selector: 'tr:has(a.magnetlink)' },
    fields: {
      category: { text: 'Other' },
      title: {
        optional: true,
        selector: 'td.doubleindent, td.singleindent a[href^="/index.php?showtopic="]',
        filters: [
          {
            name: 're_replace',
            args: ['^BBC (.*)', '{{ if .Config.dropbbc }}{{ else }}BBC {{ end }}$1'],
          },
          {
            name: 'append',
            args: '{{ if .Config.stripS01E01 }}{{ else }} S01E01{{ end }}',
          },
        ],
      },
      details: {
        optional: true,
        selector: 'td.singleindent a[href^="/index.php?showtopic="]',
        attribute: 'href',
      },
      download: { selector: 'td a.torrentlink', attribute: 'href' },
      magnet: { selector: 'td a.magnetlink', attribute: 'href' },
      size: { text: '500 MB' },
      date: {
        selector: 'td:nth-of-type(3)',
        filters: [
          { name: 'append', args: ' +00:00' },
          { name: 'dateparse', args: '2006/01/02 -07:00' },
        ],
      },
      seeders: { selector: 'td:nth-of-type(4)' },
      leechers: { selector: 'td:nth-of-type(5)' },
      grabs: { selector: 'td:nth-of-type(6)' },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
