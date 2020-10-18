import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'fantasticheaven',
  name: 'Fantastic Heaven',
  description: 'Fantastic Heaven is a German Time based tracker',
  language: 'de-DE',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://fantastic-heaven.eu/'],
  caps: {
    categorymappings: [
      { id: '54', cat: 'Movies/SD', desc: 'kino SD x264/x265' },
      { id: '56', cat: 'Movies/HD', desc: 'kino 720p' },
      { id: '57', cat: 'Movies/HD', desc: 'kino 1080p' },
      { id: '100', cat: 'Movies/3D', desc: 'kino 3D' },
      { id: '58', cat: 'Movies/SD', desc: 'Filme SD x264/x265' },
      { id: '59', cat: 'Movies/HD', desc: 'Filme 720p' },
      { id: '60', cat: 'Movies/HD', desc: 'Filme 1080p' },
      { id: '61', cat: 'Movies/UHD', desc: 'Filme 2160p' },
      { id: '62', cat: 'Movies/3D', desc: 'Filme 3D' },
      { id: '101', cat: 'Movies/DVD', desc: 'Filme DVD' },
      { id: '63', cat: 'Movies/HD', desc: 'Filme Remux' },
      { id: '129', cat: 'Movies/SD', desc: 'Filme Packs SD x264/265' },
      { id: '130', cat: 'Movies/HD', desc: 'Filme Packs 720p' },
      { id: '131', cat: 'Movies/HD', desc: 'Filme Packs 1080p' },
      { id: '64', cat: 'TV/SD', desc: 'Serien SD x264/x265' },
      { id: '65', cat: 'TV/HD', desc: 'Serien 720p' },
      { id: '66', cat: 'TV/HD', desc: 'Serien 1080p' },
      { id: '68', cat: 'TV/UHD', desc: 'Serien 2160p' },
      { id: '69', cat: 'TV/Foreign', desc: 'Serien Ger-Subbed' },
      { id: '70', cat: 'TV/Foreign', desc: 'Serien International' },
      { id: '76', cat: 'TV/SD', desc: 'Serienpacks SD x264/x265' },
      { id: '77', cat: 'TV/HD', desc: 'Serienpacks 720p' },
      { id: '78', cat: 'TV/HD', desc: 'Serienpacks 1080p' },
      { id: '81', cat: 'TV/UHD', desc: 'Serienpacks 2160p' },
      { id: '79', cat: 'TV/Foreign', desc: 'Serienpacks Ger-Subbed' },
      { id: '80', cat: 'TV/Foreign', desc: 'Serienpacks International' },
      { id: '115', cat: 'Movies/SD', desc: 'Kids-Filme SD x264/x265' },
      { id: '116', cat: 'Movies/HD', desc: 'Kids-Filme 720p' },
      { id: '117', cat: 'Movies/HD', desc: 'Kids-Filme 1080p' },
      { id: '109', cat: 'TV/SD', desc: 'Kids-Serien SD x264/x265' },
      { id: '110', cat: 'TV/HD', desc: 'Kids-Serien 720p' },
      { id: '111', cat: 'TV/HD', desc: 'Kids-Serien 1080p' },
      { id: '112', cat: 'TV/SD', desc: 'Kids-Serien Packs SD' },
      { id: '113', cat: 'TV/HD', desc: 'Kids-Serien Packs 720p' },
      { id: '114', cat: 'TV/HD', desc: 'Kids-Serien Packs 1080p' },
      { id: '127', cat: 'TV/Foreign', desc: 'Kids-Serien International' },
      { id: '98', cat: 'TV/SD', desc: 'Tatort SD x264/x265' },
      { id: '99', cat: 'TV/HD', desc: 'Tatort 720p' },
      { id: '105', cat: 'TV/SD', desc: 'Daily Soaps SD x264/x265' },
      { id: '103', cat: 'TV/HD', desc: 'Daily Soaps 720p' },
      { id: '104', cat: 'TV/HD', desc: 'Daily Soaps 1080p' },
      { id: '106', cat: 'TV/Documentary', desc: 'Dokus SD x264/x265' },
      { id: '107', cat: 'TV/Documentary', desc: 'Dokus 720p' },
      { id: '108', cat: 'TV/Documentary', desc: 'Dokus 1080p' },
      { id: '83', cat: 'Movies/SD', desc: 'TV-Filme SD x264/x265' },
      { id: '84', cat: 'Movies/HD', desc: 'TV-Filme 720p' },
      { id: '85', cat: 'Movies/HD', desc: 'TV-Filme 1080p' },
      { id: '86', cat: 'TV/SD', desc: 'TV-Shows SD x264/x265' },
      { id: '87', cat: 'TV/HD', desc: 'TV-Shows 720p' },
      { id: '88', cat: 'TV/HD', desc: 'TV-Shows 1080p' },
      { id: '118', cat: 'TV/Sport', desc: 'SportSD x264/x265' },
      { id: '119', cat: 'TV/Sport', desc: 'Sport720p' },
      { id: '120', cat: 'TV/Sport', desc: 'Sport1080p' },
      { id: '122', cat: 'TV/Sport', desc: 'Sport2160p' },
      { id: '121', cat: 'TV/Sport', desc: 'SportInternational' },
      { id: '82', cat: 'Audio/Audiobook', desc: 'Audio Audiobooks' },
      { id: '71', cat: 'Audio/MP3', desc: 'Audio MP3' },
      { id: '72', cat: 'Audio/Lossless', desc: 'Audio Flac' },
      { id: '135', cat: 'Audio/Lossless', desc: 'Audio WAV' },
      { id: '73', cat: 'Audio/MP3', desc: 'Audio MP3 Packs' },
      { id: '74', cat: 'Audio/Lossless', desc: 'Audio Flac Packs' },
      { id: '128', cat: 'Audio', desc: 'Audio Kids' },
      { id: '75', cat: 'Audio/Video', desc: 'Audio Musikvideo' },
      { id: '123', cat: 'PC', desc: 'Software Windows' },
      { id: '124', cat: 'PC', desc: 'Software Linux' },
      { id: '125', cat: 'PC/Phone-Android', desc: 'Software Android' },
      { id: '126', cat: 'PC/Mac', desc: 'Software MacOS' },
      { id: '132', cat: 'PC/Games', desc: 'Spiele Windows' },
      { id: '133', cat: 'PC/Mac', desc: 'Spiele MacOS' },
      { id: '134', cat: 'Console', desc: 'Spiele Nintendo' },
      {
        id: '90',
        cat: 'Books/Magazines',
        desc: 'Diverses Zeitschriften',
      },
      { id: '89', cat: 'Books/Ebook', desc: 'Diverses E-Books' },
      { id: '91', cat: 'XXX/x264', desc: 'XXX SD x264/x265' },
      { id: '92', cat: 'XXX/x264', desc: 'XXX 720p' },
      { id: '93', cat: 'XXX/x264', desc: 'XXX 1080p' },
      { id: '95', cat: 'XXX/Packs', desc: 'XXX Packs SD' },
      { id: '96', cat: 'XXX/Packs', desc: 'XXX Packs HD' },
      { id: '94', cat: 'XXX/Imageset', desc: 'XXX Magazine' },
      { id: '97', cat: 'XXX/Imageset', desc: 'XXX Pics' },
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
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: 'added',
      options: {
        added: 'created',
        seeds: 'seeders',
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
    path: 'login.php',
    method: 'form',
    form: 'form[action="/login.php"]',
    cookies: ['JAVA=OK'],
    captcha: {
      type: 'image',
      selector: 'img[src^="cap/captcha_math.php?codeCaptcha="]',
      input: 'stringCaptcha',
    },
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      loggiin: 'einloggen',
    },
    error: [{ selector: 'div#login_error' }],
    test: { path: 'index.php', selector: 'a[href="logout.php"]' },
  },
  search: {
    paths: [{ path: 'selection.php' }],
    inputs: {
      $raw: '{{ if .Categories }}{{ range .Categories }}scat[]={{.}}&{{end}}{{else}}{{end}}',
      search: '{{ .Keywords }}',
      blah: 0,
      orderby: '{{ .Config.sort }}',
      sort: '{{ .Config.type }}',
    },
    rows: {
      selector: 'div.content_wrap > div.selection_wrap:has(a[href^="details.php?id="])',
    },
    fields: {
      title: { selector: 'a[href^="details.php?id="]' },
      category: {
        selector: 'a[href^="selection.php?cat="]',
        attribute: 'href',
        filters: [
          { name: 'querystring', args: 'cat' },
          { name: 'replace', args: ['#2', ''] },
        ],
      },
      details: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="download.php?torrent="]',
        attribute: 'href',
      },
      grabs: {
        selector: 'div.selection_unter_ae',
        filters: [{ name: 'replace', args: [' x', ''] }],
      },
      size: {
        selector: 'div.selection_unter_ad',
        filters: [{ name: 'replace', args: [',', '.'] }],
      },
      seeders: { selector: 'div.selection_unter_aa > b' },
      leechers: { selector: 'div.selection_unter_aaa > b' },
      date: {
        selector: 'div.selection_unter_ab',
        filters: [
          { name: 'append', args: ' +01:00' },
          { name: 'replace', args: ['um ', ''] },
          { name: 'dateparse', args: '02.01.2006 15:04:05 -07:00' },
        ],
      },
      downloadvolumefactor: { text: 1 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
