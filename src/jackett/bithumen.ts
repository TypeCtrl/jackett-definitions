import { TopLevel } from '../definition-interface';
export const definition: TopLevel = {
  site: 'bithumen',
  name: 'BitHUmen',
  description: 'BitHUmen is a Hungarian Private site for TV / MOVIES / GENERAL',
  language: 'hu-HU',
  type: 'private',
  encoding: 'ISO-8859-2',
  links: ['https://bithumen.be/'],
  caps: {
    categorymappings: [
      { id: '23', cat: 'Movies/SD', desc: 'Film/Hun/SD' },
      { id: '24', cat: 'Movies/DVD', desc: 'Film/Hun/DVD-R' },
      { id: '25', cat: 'Movies/HD', desc: 'Film/Hun/720p' },
      { id: '37', cat: 'Movies/HD', desc: 'Film/Hun/1080p' },
      { id: '33', cat: 'Movies/BluRay', desc: 'Film/Hun/Blu-ray' },
      { id: '30', cat: 'XXX', desc: 'XXX/SD' },
      { id: '19', cat: 'Movies/SD', desc: 'Film/Eng/SD' },
      { id: '20', cat: 'Movies/DVD', desc: 'Film/Eng/DVD-R' },
      { id: '5', cat: 'Movies/HD', desc: 'Film/Eng/720p' },
      { id: '39', cat: 'Movies/HD', desc: 'Film/Eng/1080p' },
      { id: '40', cat: 'Movies/BluRay', desc: 'Film/Eng/Blu-ray' },
      { id: '34', cat: 'XXX', desc: 'XXX/HD' },
      { id: '7', cat: 'TV/SD', desc: 'Sorozat/Hun/SD' },
      { id: '41', cat: 'TV/HD', desc: 'Sorozat/Hun/HD' },
      { id: '26', cat: 'TV/SD', desc: 'Sorozat/Eng/SD' },
      { id: '42', cat: 'TV/HD', desc: 'Sorozat/Eng/HD' },
      { id: '28', cat: 'Books', desc: 'eBook/Hun' },
      { id: '29', cat: 'Books', desc: 'eBook/Eng' },
      { id: '9', cat: 'Audio/MP3', desc: 'Mp3/Hun' },
      { id: '35', cat: 'Audio/Lossless', desc: 'Lossless/Hun' },
      { id: '1', cat: 'PC/0day', desc: 'Programok/ISO' },
      { id: '4', cat: 'PC/Games', desc: 'Játékok/ISO' },
      { id: '31', cat: 'Console/PS4', desc: 'Játékok/PS' },
      { id: '36', cat: 'Console/Wii', desc: 'Játékok/Wii' },
      { id: '6', cat: 'Audio/MP3', desc: 'Mp3/Eng' },
      { id: '38', cat: 'Audio/Lossless', desc: 'Lossless/Eng' },
      { id: '22', cat: 'PC', desc: 'Programok/egyéb' },
      { id: '21', cat: 'PC', desc: 'Játékok/Rip/Dox' },
      { id: '32', cat: 'Console/Xbox360', desc: 'Játékok/Xbox360' },
      { id: '27', cat: 'Other', desc: 'Klipek' },
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
    },
    error: [{ selector: 'td.embedded:has(h2:contains("bejelentkezés"))' }],
    test: { path: 'browse.php' },
  },
  search: {
    paths: [{ path: 'browse.php' }],
    inputs: {
      $raw: '{{range .Categories}}c{{.}}=1&{{end}}',
      search:
        '{{if .Query.IMDBID}}{{ .Query.IMDBID }}{{else}}{{ .Query.Keywords }}{{end}}',
      incldead: 1,
    },
    rows: {
      selector:
        'table#torrenttable > tbody > tr:has(a[href^="details.php?id="])',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      download: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
        filters: [
          { name: 'replace', args: ['details.php?id=', 'download.php/'] },
          { name: 'append', args: '/invalid.torrent' },
        ],
      },
      title: {
        optional: true,
        selector: 'a[href^="details.php?id="]',
        attribute: 'title',
      },
      details: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
      },
      imdb: {
        selector: 'a[href^="http://anonym.to/?http://www.imdb.com/title/"]',
        attribute: 'href',
      },
      banner: {
        selector: 'a[onmouseover^="bithumen.UI.images.coverShow"]',
        attribute: 'onmouseover',
        filters: [{ name: 'regexp', args: '"(.*?)"' }],
      },
      category: {
        selector: 'a[href^="?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      seeders: { selector: 'td:nth-child(8)' },
      leechers: {
        selector: 'td:nth-child(9)',
        filters: [{ name: 'regexp', args: '/\\s*([\\d,]+)' }],
      },
      grabs: { selector: 'td:nth-child(7)' },
      files: { selector: 'td:nth-child(3)' },
      size: { selector: 'td:nth-child(6) > u' },
      downloadvolumefactor: {
        optional: true,
        selector: 'td:nth-child(6) > nobr > font:contains(" × ")',
        filters: [{ name: 'replace', args: ['×', ''] }],
      },
      uploadvolumefactor: {
        optional: true,
        selector: 'td:nth-child(5) > nobr > font:contains(" × ")',
        filters: [{ name: 'replace', args: ['×', ''] }],
      },
      date: {
        selector: 'td:nth-child(5)',
        remove: 'font',
        filters: [
          { name: 'replace', args: ['ma', 'today'] },
          { name: 'replace', args: ['tegnap', 'yesterday'] },
        ],
      },
      description: { selector: 'td:nth-child(2) > div' },
    },
  },
};
