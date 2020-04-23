import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'hdcity',
  name: 'HDCity',
  description: 'HDCity is a SPANISH site for HD content',
  language: 'es-ES',
  type: 'private',
  encoding: 'ISO-8859-1',
  links: ['https://hdcity.li/'],
  caps: {
    categorymappings: [
      { id: '12', cat: 'Movies/BluRay', desc: 'Peliculas - Full BluRay' },
      {
        id: '13',
        cat: 'Movies/HD',
        desc: 'Peliculas - BluRay Rip 1080p',
      },
      { id: '14', cat: 'Movies/HD', desc: 'Peliculas - BluRay Rip 720p' },
      {
        id: '15',
        cat: 'Movies/HD',
        desc: 'Peliculas - HDTV & WEB-DL 1080p',
      },
      {
        id: '16',
        cat: 'Movies/HD',
        desc: 'Peliculas - HDTV & WEB-DL 720p',
      },
      { id: '17', cat: 'Movies/HD', desc: 'Peliculas - BDRemux' },
      { id: '18', cat: 'Movies/HD', desc: 'Peliculas - JMBD' },
      { id: '19', cat: 'Movies/3D', desc: 'Peliculas - Full BluRay 3D' },
      { id: '20', cat: 'Movies/3D', desc: 'Peliculas - 3D' },
      { id: '67', cat: 'Movies/BluRay', desc: 'Peliculas - Bluray 4K' },
      { id: '68', cat: 'Movies/3D', desc: 'Peliculas - Bluray 3D 4K' },
      { id: '69', cat: 'Movies/HD', desc: 'Peliculas - JMBD 4K' },
      { id: '72', cat: 'Movies/HD', desc: 'Peliculas - BDREMUX 4K' },
      {
        id: '73',
        cat: 'Movies/BluRay',
        desc: 'Peliculas - BluRay Rip 4K',
      },
      { id: '110', cat: 'Movies/HD', desc: 'Peliculas - HDTV WEB-DL 4K' },
      { id: '21', cat: 'TV/HD', desc: 'TV/Series - Full BluRay' },
      { id: '22', cat: 'TV/HD', desc: 'TV/Series - BluRay Rip 1080p' },
      { id: '23', cat: 'TV/HD', desc: 'TV/Series - BluRay Rip 720p' },
      { id: '24', cat: 'TV/HD', desc: 'TV/Series - HDTV & WEB-DL 1080p' },
      { id: '25', cat: 'TV/HD', desc: 'TV/Series - HDTV & WEB-DL 720p' },
      { id: '74', cat: 'TV/HD', desc: 'TV/Series - Bluray 4K' },
      { id: '75', cat: 'TV/HD', desc: 'TV/Series - JMDB 4K' },
      { id: '76', cat: 'TV/HD', desc: 'TV/Series - BDREMUX 4K' },
      { id: '77', cat: 'TV/HD', desc: 'TV/Series - BluRay Rip 4K' },
      { id: '111', cat: 'TV/HD', desc: 'TV/Series - HDTV WEB-DL 4K' },
      { id: '26', cat: 'TV/Anime', desc: 'Anime - Full BluRay' },
      { id: '28', cat: 'TV/Anime', desc: 'Anime - BluRay Rip 1080p' },
      { id: '29', cat: 'TV/Anime', desc: 'Anime - BluRay Rip 720p' },
      { id: '32', cat: 'TV/Anime', desc: 'Anime - BDRemux' },
      { id: '107', cat: 'TV/Anime', desc: 'Anime - HDTV 4K' },
      {
        id: '34',
        cat: 'TV/Documentary',
        desc: 'Documental - Full BluRay',
      },
      {
        id: '36',
        cat: 'TV/Documentary',
        desc: 'Documental - BluRay Rip 1080p',
      },
      {
        id: '37',
        cat: 'TV/Documentary',
        desc: 'Documental - BluRay Rip 720p',
      },
      {
        id: '38',
        cat: 'TV/Documentary',
        desc: 'Documental - Full BluRay 3D',
      },
      { id: '40', cat: 'TV/Documentary', desc: 'Documental - 3D' },
      { id: '65', cat: 'TV/Documentary', desc: 'Documental - HDTV 720p' },
      {
        id: '66',
        cat: 'TV/Documentary',
        desc: 'Documental - HDTV 1080p',
      },
      { id: '87', cat: 'TV/Documentary', desc: 'Documental - Bluray 4K' },
      {
        id: '88',
        cat: 'TV/Documentary',
        desc: 'Documental - Bluray 3D 4K',
      },
      { id: '89', cat: 'TV/Documentary', desc: 'Documental - JMBD 4K' },
      {
        id: '90',
        cat: 'TV/Documentary',
        desc: 'Documental - BDREMUX 4K',
      },
      {
        id: '91',
        cat: 'TV/Documentary',
        desc: 'Documental - BluRay Rip 4K',
      },
      {
        id: '112',
        cat: 'TV/Documentary',
        desc: 'Documental - HDTV WEB-DL 4K',
      },
      { id: '117', cat: 'TV/Documentary', desc: 'Documental - BDRemux' },
      { id: '48', cat: 'Audio/Lossless', desc: 'Música - Full BluRay' },
      {
        id: '50',
        cat: 'Audio/Lossless',
        desc: 'Música - BluRay Rip 1080p',
      },
      {
        id: '51',
        cat: 'Audio/Lossless',
        desc: 'Música - BluRay Rip 720p',
      },
      {
        id: '61',
        cat: 'Audio/Lossless',
        desc: 'Música - Full bluray 3D',
      },
      { id: '62', cat: 'Audio/Lossless', desc: 'Música - 3D' },
      { id: '97', cat: 'Audio/Lossless', desc: 'Música - Bluray 4K' },
      { id: '98', cat: 'Audio/Lossless', desc: 'Música - Bluray 3D 4K' },
      { id: '99', cat: 'Audio/Lossless', desc: 'Música - JMBD 4K' },
      { id: '100', cat: 'Audio/Lossless', desc: 'Música - BDREMUX 4K' },
      {
        id: '101',
        cat: 'Audio/Lossless',
        desc: 'Música - BluRay Rip 4K',
      },
      {
        id: '113',
        cat: 'Audio/Lossless',
        desc: 'Música - HDTV WEB-DL 4K',
      },
      {
        id: '116',
        cat: 'Audio/Lossless',
        desc: 'Música - HDTV WEB-DL 720p',
      },
      { id: '54', cat: 'TV/Sport', desc: 'Deporte - BluRay Rip 1080p' },
      { id: '55', cat: 'TV/Sport', desc: 'Deporte - BluRay Rip 720p' },
      { id: '57', cat: 'TV/Sport', desc: 'Deporte - HDTV 1080p' },
      { id: '59', cat: 'TV/Sport', desc: 'Deporte - HDTV 720p' },
      { id: '92', cat: 'TV/Sport', desc: 'Deporte - Bluray 4K' },
      { id: '93', cat: 'TV/Sport', desc: 'Deporte - Bluray 3D 4K' },
      { id: '94', cat: 'TV/Sport', desc: 'Deporte - JMBD 4K' },
      { id: '95', cat: 'TV/Sport', desc: 'Deporte - BDREMUX 4K' },
      { id: '96', cat: 'TV/Sport', desc: 'Deporte - BluRay Rip 4K' },
      { id: '114', cat: 'TV/Sport', desc: 'Deporte - HDTV WEB-DL 4K' },
      { id: '47', cat: 'XXX/x264', desc: 'XXX - Full BluRay' },
      { id: '49', cat: 'XXX/x264', desc: 'XXX - BluRay Rip 1080p' },
      { id: '52', cat: 'XXX/x264', desc: 'XXX - BluRay Rip 720p' },
      { id: '56', cat: 'XXX/x264', desc: 'XXX - HDTV & WEB-DL 1080p' },
      { id: '60', cat: 'XXX/x264', desc: 'XXX - HDTV & WEB-DL 720p' },
      { id: '64', cat: 'XXX/x264', desc: 'XXX - Full BluRay 3D' },
      { id: '102', cat: 'XXX/x264', desc: 'XXX - Bluray 4K' },
      { id: '103', cat: 'XXX/x264', desc: 'XXX - Bluray 3D 4K' },
      { id: '104', cat: 'XXX/x264', desc: 'XXX - JMBD 4K' },
      { id: '105', cat: 'XXX/x264', desc: 'XXX - BDREMUX 4K' },
      { id: '106', cat: 'XXX/x264', desc: 'XXX - BluRay Rip 4K' },
      { id: '115', cat: 'XXX/x264', desc: 'XXX - HDTV WEB-DL 4K' },
      { id: '39', cat: 'Movies/BluRay', desc: 'Animación - Full BluRay' },
      {
        id: '41',
        cat: 'Movies/HD',
        desc: 'Animación - BluRay Rip 1080p',
      },
      { id: '42', cat: 'Movies/HD', desc: 'Animación - BluRay Rip 720p' },
      {
        id: '43',
        cat: 'Movies/HD',
        desc: 'Animación - HDTV & WEB-DL 1080p',
      },
      {
        id: '44',
        cat: 'Movies/HD',
        desc: 'Animación - HDTV & WEB-DL 720p',
      },
      { id: '45', cat: 'Movies/3D', desc: 'Animación - Full BluRay 3D' },
      { id: '46', cat: 'Movies/3D', desc: 'Animación - 3D' },
      { id: '63', cat: 'Movies/HD', desc: 'Animación - BDRemux' },
      { id: '78', cat: 'Movies/BluRay', desc: 'Animación - Bluray 4K' },
      { id: '79', cat: 'Movies/3D', desc: 'Animación - Bluray 3D 4K' },
      { id: '80', cat: 'Movies/HD', desc: 'Animación - JMBD 4K' },
      { id: '81', cat: 'Movies/BluRay', desc: 'Animación - BDREMUX 4K' },
      {
        id: '82',
        cat: 'Movies/BluRay',
        desc: 'Animación - BluRay Rip 4K',
      },
      { id: '108', cat: 'Movies/HD', desc: 'Animación - HDTV WEB-DL 4K' },
      { id: '83', cat: 'Movies/BluRay', desc: 'Animación - Bluray 4k' },
      { id: '27', cat: 'TV/HD', desc: 'Series Animación - Full Bluray' },
      {
        id: '30',
        cat: 'TV/HD',
        desc: 'Series Animación - BluRay Rip 1080p',
      },
      {
        id: '31',
        cat: 'TV/HD',
        desc: 'Series Animación - BluRay Rip 720p',
      },
      {
        id: '33',
        cat: 'TV/HD',
        desc: 'Series Animación - HDTV & WEB-DL 1080p',
      },
      {
        id: '35',
        cat: 'TV/HD',
        desc: 'Series Animación - HDTV & WEB-DL 720p',
      },
      { id: '84', cat: 'TV/HD', desc: 'Series Animación - JMBD 4K' },
      { id: '85', cat: 'TV/HD', desc: 'Series Animación - BDREMUX 4K' },
      {
        id: '86',
        cat: 'TV/HD',
        desc: 'Series Animación - BluRay Rip 4K',
      },
      {
        id: '109',
        cat: 'TV/HD',
        desc: 'Series Animación - HDTV WEB-DL 4K',
      },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q'],
      'movie-search': ['q'],
      'music-search': ['q'],
    },
  },
  settings: [
    { name: 'username', type: 'text', label: 'Username' },
    { name: 'password', type: 'password', label: 'Password' },
    {
      name: 'info',
      type: 'info',
      label: 'IP requirement',
      default:
        'This site accepts only users with Spanish IP addresses.<br>For others it will return error: 403 Forbidden.',
    },
  ],
  login: {
    path: 'index.php?page=login',
    method: 'post',
    inputs: {
      uid: '{{ .Config.username }}',
      pwd: '{{ .Config.password }}',
    },
    error: [{ selector: '.lista>span' }],
    test: { path: 'index.php', selector: 'form[name="jump1"]' },
  },
  search: {
    keywordsfilters: [
      { name: 're_replace', args: ['S0?(\\d{1,2})E(\\d{1,2})', '$1x$2'] },
      { name: 're_replace', args: ['S0?(\\d{1,2})', ' $1 '] },
      { name: 're_replace', args: ['[^a-zA-Z0-9]+', ' '] },
    ],
    inputs: {
      page: 'torrents',
      $raw: '&category={{range .Categories}}{{.}};{{end}}',
      active: '1',
      search: '{{ .Keywords }}',
    },
    rows: {
      selector: '#category+table table tr:not(:first-child):not(:last-child)',
    },
    fields: {
      category: {
        selector: 'td:nth-child(1) a',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'category' }],
      },
      title: {
        selector: 'td[valign="middle"] a:not(:contains("VOSE"))',
        optional: true,
        filters: [
          { name: 'append', args: ' [Spanish] [English]' },
          {
            name: 're_replace',
            args: ['(?i)T[\\s-_]?(\\d{1,2})\\b', ' S$1 '],
          },
          {
            name: 're_replace',
            args: ['(?i)\\w*Temp\\w*\\b\\s?(\\d{1,2})(ª|\\D)?\\b', ' S$1 '],
          },
          {
            name: 're_replace',
            args: ['(?i)(\\d{1,2})(ª|\\D)?\\s?\\w*Temp\\w*\\b', ' S$1 '],
          },
        ],
      },
      details: { selector: 'td[valign="middle"] a', attribute: 'href' },
      banner: {
        optional: true,
        selector: 'td[valign="middle"] a',
        attribute: 'onmouseover',
        filters: [{ name: 'regexp', args: 'src=(.+?) ' }],
      },
      size: { selector: 'td:nth-child(10)' },
      seeders: { selector: 'td:nth-child(6) a' },
      leechers: { selector: 'td:nth-child(7) a' },
      grabs: {
        selector: 'td:nth-child(8)',
        filters: [{ name: 'replace', args: ['---', '0'] }],
      },
      date: {
        selector: 'td:nth-child(5)',
        filters: [{ name: 'dateparse', args: '02/01/2006' }],
      },
      download: {
        selector: 'a[href^="download.php"]',
        attribute: 'href',
      },
      downloadvolumefactor: {
        case: {
          'img[src$="freeleech.gif"]': '0',
          'img[src$="gold.gif"]': '0',
          'img[src$="silver.gif"]': '0.5',
          '*': '1',
        },
      },
      uploadvolumefactor: {
        case: {
          'img[src$="2x.gif"]': '2',
          'img[src$="3x.gif"]': '3',
          'img[src$="4x.gif"]': '4',
          'img[src$="5x.gif"]': '5',
          'img[src$="6x.gif"]': '6',
          'img[src$="7x.gif"]': '7',
          'img[src$="8x.gif"]': '8',
          'img[src$="9x.gif"]': '9',
          '*': '1',
        },
      },
    },
    paths: [{ path: 'index.php' }],
  },
  source: 'jackett',
};
