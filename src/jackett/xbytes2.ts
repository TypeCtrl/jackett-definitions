import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'xbytesv2',
  name: 'XbytesV2',
  description: 'xbytesV2 is a SPANISH site for HD content',
  language: 'es-ES',
  type: 'private',
  encoding: 'ISO-8859-1',
  links: ['http://xbytesv2.li/'],
  caps: {
    categorymappings: [
      {
        id: '17',
        cat: 'Movies/BluRay',
        desc: 'Video - FullBluray/BDRemux',
      },
      { id: '23', cat: 'Movies/3D', desc: 'Video - 3D' },
      { id: '18', cat: 'Movies/HD', desc: 'Video - 1080p' },
      { id: '30', cat: 'Movies/HD', desc: 'Video - MicroHD x265' },
      { id: '29', cat: 'Movies/HD', desc: 'Video - 1080p x265' },
      { id: '16', cat: 'Movies/HD', desc: 'Video - MicroHD' },
      { id: '61', cat: 'Movies', desc: 'Video - Custom' },
      { id: '42', cat: 'Movies/DVD', desc: 'Video - DVD' },
      {
        id: '21',
        cat: 'Movies/UHD',
        desc: 'Video UHD - FullBluray/BDRemux',
      },
      { id: '45', cat: 'Movies/UHD', desc: 'Video UHD - UHD BDRip' },
      { id: '46', cat: 'Movies/UHD', desc: 'Video UHD - M-UHD' },
      { id: '62', cat: 'Movies/UHD', desc: 'Video UHD - Custom 4K' },
      { id: '25', cat: 'TV/HD', desc: 'Series - temp. complet' },
      { id: '31', cat: 'TV/HD', desc: 'Series - x265' },
      { id: '35', cat: 'TV/UHD', desc: 'Series - 4K' },
      { id: '41', cat: 'TV/Sport', desc: 'Deportes' },
      { id: '37', cat: 'TV/Documentary', desc: 'Documentales' },
      { id: '34', cat: 'TV/HD', desc: 'Dibujos animados' },
      { id: '5', cat: 'TV/Anime', desc: 'Anime' },
      { id: '14', cat: 'Audio/MP3', desc: 'Musica - MP3' },
      { id: '39', cat: 'Audio/Lossless', desc: 'Musica - FLAC' },
      { id: '38', cat: 'Audio/Other', desc: 'Musica - otros formato' },
      { id: '27', cat: 'PC/Games', desc: 'Juegos' },
      { id: '65', cat: 'Console', desc: 'Juegos Retro' },
      { id: '33', cat: 'Books', desc: 'Libros' },
      { id: '7', cat: 'PC/0day', desc: 'Software' },
      { id: '40', cat: 'PC/Phone-Other', desc: 'Telefonos y tablets' },
      { id: '12', cat: 'XXX', desc: 'Adult' },
      { id: '32', cat: 'Other', desc: 'Otros' },
      { id: '19', cat: 'Movies/HD', desc: 'Video - 720p' },
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
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: '3',
      options: { '2': 'title', '3': 'created', '4': 'size', '5': 'seeders' },
    },
    {
      name: 'type',
      type: 'select',
      label: 'Order requested from site',
      default: '2',
      options: { '1': 'asc', '2': 'desc' },
    },
    {
      name: 'info',
      type: 'info',
      label: 'Results Per Page',
      default:
        'For best results, change the <b>Torrents per page:</b> setting to <b>100</b> on your account profile.',
    },
  ],
  login: {
    path: 'index.php?page=login',
    method: 'post',
    inputs: {
      uid: '{{ .Config.username }}',
      pwd: '{{ .Config.password }}',
    },
    test: { path: 'index.php', selector: 'a[href="logout.php"]' },
  },
  search: {
    keywordsfilters: [{ name: 're_replace', args: ['S(\\d{1,2})E(\\d{1,2})', 'S$1/E$2'] }],
    inputs: {
      page: 'torrents',
      $raw: '&category={{ range .Categories }}{{.}};{{end}}',
      active: 1,
      search: '{{ .Keywords }}',
      order: '{{ .Config.sort }}',
      by: '{{ .Config.type }}',
    },
    rows: {
      selector:
        '#Mcol > div > div.block-content > div > div > div > table > tbody > tr:nth-child(3) > td > table tr:not(:first-child):not(:last-child)',
    },
    fields: {
      category: {
        selector: 'td:nth-child(1) a',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'category' }],
      },
      title: {
        selector: 'td[valign="middle"] a',
        filters: [
          { name: 're_replace', args: ['\\/', ' '] },
          {
            name: 're_replace',
            args: ['S(\\d{1,2}) E(\\d{1,2})', 'S$1E$2'],
          },
          { name: 're_replace', args: ['\\(', ''] },
          { name: 're_replace', args: ['\\)', ''] },
          { name: 're_replace', args: ['20[0-2][0-9] [0-9][0-9]', ''] },
          {
            name: 're_replace',
            args: ['20[0-2][0-9] (S[0-9][0-9])', '$1'],
          },
          { name: 'replace', args: ['ESP', 'Spanish'] },
          { name: 're_replace', args: ['[EI]NG', 'English'] },
          { name: 'replace', args: ['CAT', 'Catalan'] },
          { name: 'replace', args: ['FRA', 'French'] },
          { name: 'replace', args: ['JAP', 'Japanese'] },
          { name: 'replace', args: ['ITA', 'Italian'] },
          { name: 'replace', args: ['RUS', 'Russian'] },
          { name: 'replace', args: ['DUAL', 'Spanish English'] },
        ],
      },
      details: { selector: 'td[valign="middle"] a', attribute: 'href' },
      banner: {
        optional: true,
        selector: 'td[valign="middle"] a',
        attribute: 'onmouseover',
        filters: [{ name: 'regexp', args: 'src=(.+?) ' }],
      },
      size: { selector: 'td:nth-child(11)' },
      seeders: { selector: 'td:nth-child(7) a' },
      leechers: { selector: 'td:nth-child(8) a' },
      grabs: { selector: 'td:nth-child(9) a', optional: true },
      date: {
        selector: 'td:nth-child(6)',
        filters: [{ name: 'dateparse', args: '02/01/2006' }],
      },
      download: {
        selector: 'a[href^="download.php"]',
        attribute: 'href',
      },
      downloadvolumefactor: {
        case: {
          'img[src$="gold.png"]': 0,
          'img[src$="silver.png"]': 0.5,
          '*': 1,
        },
      },
      uploadvolumefactor: {
        case: {
          'img[src$="2x.gif"]': 2,
          'img[src$="3x.gif"]': 3,
          'img[src$="4x.gif"]': 4,
          'img[src$="5x.gif"]': 5,
          'img[src$="6x.gif"]': 6,
          'img[src$="7x.gif"]': 7,
          'img[src$="8x.gif"]': 8,
          'img[src$="9x.gif"]': 9,
          '*': 1,
        },
      },
    },
    paths: [{ path: 'index.php' }],
  },
  source: 'jackett',
};
