import { TopLevel } from '../definition-interface';
export const definition: TopLevel = {
  site: 'insanetracker',
  name: 'Insane Tracker',
  description:
    'Insane Tracker is a HUNGARIAN Private Torrent Tracker for 0DAY / GENERAL',
  language: 'hu-HU',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://newinsane.info/'],
  caps: {
    categorymappings: [
      { id: 8, cat: 'TV/SD', desc: 'Sorozat/Hun' },
      { id: 40, cat: 'TV/HD', desc: 'Sorozat/Hun/HD' },
      { id: 41, cat: 'Movies/SD', desc: 'Film/Hun/SD' },
      { id: 15, cat: 'Movies/DVD', desc: 'Film/Hun/DVD-R' },
      { id: 27, cat: 'Movies/HD', desc: 'Film/Hun/HD' },
      { id: 44, cat: 'Movies/HD', desc: 'Film/Hun/UHD' },
      { id: 2, cat: 'Books', desc: 'eBook/Hun' },
      { id: 7, cat: 'TV/SD', desc: 'Sorozat/Eng' },
      { id: 39, cat: 'TV/HD', desc: 'Sorozat/Eng/HD' },
      { id: 42, cat: 'Movies/SD', desc: 'Film/Eng/SD' },
      { id: 14, cat: 'Movies/DVD', desc: 'Film/Eng/DVD-R' },
      { id: 25, cat: 'Movies/HD', desc: 'Film/Eng/HD' },
      { id: 45, cat: 'Movies/HD', desc: 'Film/Eng/UHD' },
      { id: 1, cat: 'Books', desc: 'eBook/Eng' },
      { id: 38, cat: 'Audio/Audiobook', desc: 'Hangoskönyv' },
      { id: 21, cat: 'XXX', desc: 'XXX' },
      { id: 4, cat: 'PC/ISO', desc: 'Program/ISO' },
      { id: 19, cat: 'Audio/Other', desc: 'Zene/Hun' },
      { id: 37, cat: 'Audio/Lossless', desc: 'Lossless/Hun' },
      { id: 9, cat: 'PC/Games', desc: 'Játék/ISO' },
      { id: 43, cat: 'Console', desc: 'Játék/Konzol' },
      { id: 29, cat: 'Other', desc: 'Képek' },
      { id: 28, cat: 'XXX/Imageset', desc: 'XXX Képek' },
      { id: 3, cat: 'PC/0day', desc: 'Program/Egyéb' },
      { id: 18, cat: 'Audio/Other', desc: 'Zene/Eng' },
      { id: 26, cat: 'Audio/Lossless', desc: 'Lossless/Eng' },
      { id: 11, cat: 'PC/Games', desc: 'Játék/Rip' },
      { id: 13, cat: 'PC/Phone-Other', desc: 'Mobil' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q', 'imdbid'],
    },
  },
  login: {
    path: 'takelogin.php',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      notsecure: '1',
    },
    error: [{ selector: 'div.login_error_content' }],
    test: { path: '/browse.php' },
  },
  search: {
    paths: [{ path: '/browse.php' }],
    inputs: {
      $raw: '{{range .Categories}}c{{.}}=1&{{end}}',
      search:
        '{{if .Query.IMDBID}}{{ .Query.IMDBID }}{{else}}{{ .Query.Keywords }}{{end}}',
      t: 'all',
    },
    rows: { selector: 'table.torrentable > tbody > tr:has(td.maintd)' },
    fields: {
      title: { selector: 'div.tortitle > a', attribute: 'title' },
      category: {
        selector: 'a[href^="browse.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      details: { selector: 'div.tortitle > a', attribute: 'href' },
      download: {
        selector: 'a[href^="download.php/"]',
        attribute: 'href',
      },
      imdb: {
        optional: true,
        selector: 'a[title="IMDb link"]',
        attribute: 'href',
      },
      banner: {
        optional: true,
        selector: 'a.cover',
        attribute: 'href',
      },
      files: {
        selector: 'td:nth-child(6)',
        filters: [{ name: 'replace', args: ['.', ''] }],
      },
      size: {
        selector: 'td:nth-child(8)',
        filters: [
          { name: 'replace', args: ['.', ''] },
          { name: 'replace', args: [',', '.'] },
        ],
      },
      grabs: {
        selector: 'td:nth-child(9) > div:first-child',
        filters: [
          { name: 'replace', args: ['.', ''] },
          { name: 'regexp', args: '^([\\d]+)' },
        ],
      },
      seeders: {
        selector: 'td:nth-child(9) > div:first-child',
        filters: [
          { name: 'replace', args: ['.', ''] },
          { name: 'regexp', args: '\\|\\s*([\\d]+)\\s*\\|' },
        ],
      },
      leechers: {
        selector: 'td:nth-child(9) > div:first-child',
        filters: [
          { name: 'replace', args: ['.', ''] },
          { name: 'regexp', args: '([\\d]+)$' },
        ],
      },
      date: {
        selector: 'td.date',
        filters: [{ name: 'dateparse', args: '2006.01.02 15:04:05' }],
      },
      downloadvolumefactor: { text: '0' },
      uploadvolumefactor: {
        case: {
          'img[src^="pic/4x.gif"]': '4',
          'img[src^="pic/3x.gif"]': '3',
          'img[src^="pic/2x.gif"]': '2',
          '*': '1',
        },
      },
      description: {
        selector: 'td.maintd',
        remove:
          'div.tortitle, div.markcont, div.tablebuttons, div.tablebigbuttons',
      },
    },
  },
};
