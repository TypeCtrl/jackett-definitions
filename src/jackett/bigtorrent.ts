import { TopLevel } from '../definition-interface';
export const definition: TopLevel = {
  site: 'bigtorrent',
  name: 'BIGTorrent',
  description: 'ratio-free Hungarian tracker',
  language: 'hu-HU',
  type: 'private',
  encoding: 'UTF-8',
  links: ['http://www.bigtorrent.eu/'],
  caps: {
    categorymappings: [
      { id: 24533, cat: 'Movies/3D', desc: '3D' },
      { id: 47, cat: 'Other', desc: 'Other' },
      { id: 24541, cat: 'Movies/DVD', desc: 'Film DVD English' },
      { id: 24540, cat: 'Movies/DVD', desc: 'Film DVD Hungarian' },
      { id: 24539, cat: 'Movies/HD', desc: 'Film HD English' },
      { id: 24538, cat: 'Movies/HD', desc: 'Film HD Hungarian' },
      { id: 24537, cat: 'Movies/SD', desc: 'Film SD English' },
      { id: 24536, cat: 'Movies/SD', desc: 'Film SD Hungarian' },
      { id: 69, cat: 'PC/Games', desc: 'Games ISO' },
      { id: 67, cat: 'PC/Games', desc: 'Games Rip' },
      { id: 24534, cat: 'Audio/Audiobook', desc: 'Audiobooks' },
      { id: 65, cat: 'Other', desc: 'Picture' },
      { id: 64, cat: 'Other', desc: 'Video' },
      { id: 68, cat: 'Console/Xbox360', desc: 'Video Game Console' },
      { id: 63, cat: 'Books', desc: 'English Books' },
      { id: 62, cat: 'Books', desc: 'Hungarian Books' },
      { id: 74, cat: 'Audio/Lossless', desc: 'Lossless' },
      { id: 56, cat: 'PC/Phone-Other', desc: 'Mobile' },
      { id: 57, cat: 'PC', desc: 'Programs' },
      { id: 24545, cat: 'TV/HD', desc: 'English HD Series' },
      { id: 24544, cat: 'TV/HD', desc: 'Hungarian HD Series' },
      { id: 24543, cat: 'TV/SD', desc: 'English SD Series' },
      { id: 24542, cat: 'TV/SD', desc: 'Hungarian SD Series' },
      { id: 24535, cat: 'XXX', desc: 'XXX' },
      { id: 59, cat: 'Audio', desc: 'Music' },
      { id: 58, cat: 'Audio', desc: 'Hungarian Music' },
    ],
    modes: { search: ['q'] },
  },
  login: {
    path: '/login.php',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      sent: 'yes',
      returnto: '/',
    },
    error: [{ selector: 'table:contains("Login failed!")' }],
    test: { path: 'index.php' },
  },
  download: { selector: 'a[href^="download.php?id="]' },
  search: {
    paths: [{ path: 'browse.php' }],
    inputs: {
      $raw: '{{range .Categories}}filter_cat[{{.}}]=1&{{end}}',
      search: '{{ .Query.Keywords }}',
    },
    rows: {
      selector:
        'table#torrent_table > tbody > tr:has(a[href^="browse.php?cat="])',
    },
    fields: {
      category: {
        selector: 'a[href^="browse.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      title: { selector: 'td:nth-child(2) a' },
      download: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
        filters: [
          { name: 'replace', args: ['details.php?id=', 'download.php?id='] },
        ],
      },
      details: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
      },
      size: { selector: 'td:nth-child(7)' },
      seeders: { selector: 'td:nth-child(8)' },
      leechers: { selector: 'td:nth-child(9)' },
      date: { selector: 'td:nth-child(4)' },
      downloadvolumefactor: { case: { '*': '1' } },
      uploadvolumefactor: { case: { '*': '1' } },
    },
  },
};
