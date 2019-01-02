import { TopLevel } from '../definition-interface';
export const definition: TopLevel = {
  site: 'scenereactor',
  name: 'SceneReactor',
  description: 'A general tracker',
  language: 'en-US',
  type: 'private',
  encoding: 'WINDOWS-1252',
  links: ['http://www.scenereactor.net/'],
  caps: {
    categorymappings: [
      { id: 8, cat: 'TV/Anime', desc: 'Anime' },
      { id: 1, cat: 'PC/0day', desc: 'Apps' },
      { id: 23, cat: 'Movies/BluRay', desc: 'Blu Ray' },
      { id: 12, cat: 'TV/Documentary', desc: 'Docs' },
      { id: 10, cat: 'Movies/DVD', desc: 'DVD' },
      { id: 3, cat: 'Movies/DVD', desc: 'DVD-C' },
      { id: 2, cat: 'PC/Games', desc: 'Games' },
      { id: 7, cat: 'Other', desc: 'Images' },
      { id: 14, cat: 'PC/Phone-Other', desc: 'Mobile' },
      { id: 4, cat: 'Audio', desc: 'Music' },
      { id: 20, cat: 'TV', desc: 'TV' },
      { id: 18, cat: 'Movies', desc: 'Video' },
      { id: 16, cat: 'Movies/HD', desc: 'x264' },
      { id: 21, cat: 'Movies/HD', desc: 'x264-C' },
      { id: 9, cat: 'Movies/SD', desc: 'XviD' },
      { id: 6, cat: 'XXX', desc: 'XXX' },
    ],
    modes: { search: ['q'], 'tv-search': ['q', 'season', 'ep'] },
  },
  settings: [{ name: 'cookie', type: 'text', label: 'Cookie' }],
  login: {
    method: 'cookie',
    inputs: { cookie: '{{ .Config.cookie }}' },
    test: { path: '/browse.php' },
  },
  search: {
    paths: [{ path: '/browse.php' }],
    inputs: {
      $raw: '{{range .Categories}}c{{.}}=1&{{end}}',
      search: '{{ .Query.Keywords }}',
      incldead: '1',
    },
    rows: { selector: 'table.tables > tbody tr[onmouseover]' },
    fields: {
      download: {
        selector: 'a.torrname',
        attribute: 'href',
        filters: [
          { name: 'querystring', args: 'id' },
          { name: 'prepend', args: '/download.php/' },
          { name: 'append', args: '/dummy.torrent' },
        ],
      },
      title: { selector: 'a.torrname', attribute: 'title' },
      category: {
        selector: 'a[href^="browse.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      details: { selector: 'a.torrname', attribute: 'href' },
      files: { selector: 'a[href$="filelist=1"]' },
      size: { selector: 'td:nth-child(5)' },
      grabs: {
        selector: 'td:nth-child(6)',
        filters: [{ name: 'regexp', args: '([,\\d]+)' }],
      },
      seeders: { selector: 'td:nth-child(7)' },
      leechers: { selector: 'td:nth-child(8)' },
      date: {
        selector: 'td.torrdet:contains("Added:")',
        filters: [
          { name: 'replace', args: ['Added: ', ''] },
          { name: 'replace', args: [' ', ' '] },
          { name: 'dateparse', args: '2006-01-02 15:04:05' },
        ],
      },
      banner: {
        selector: 'img[src="pic/browse/prev.gif"]',
        attribute: 'onmouseover',
        filters: [{ name: 'regexp', args: '"(.+?)"' }, { name: 'strdump' }],
      },
      downloadvolumefactor: {
        case: { 'img[alt="Free Torrent"]': '0', '*': '1' },
      },
      uploadvolumefactor: { case: { '*': '1' } },
    },
  },
};
