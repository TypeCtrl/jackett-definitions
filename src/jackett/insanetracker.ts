import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'insanetracker',
  name: 'Insane Tracker',
  description: 'Insane Tracker is a HUNGARIAN Private Torrent Tracker for 0DAY / GENERAL',
  language: 'hu-HU',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://newinsane.info/'],
  caps: {
    categorymappings: [
      { id: '8', cat: 'TV/SD', desc: 'Sorozat/Hun' },
      { id: '40', cat: 'TV/HD', desc: 'Sorozat/Hun/HD' },
      { id: '41', cat: 'Movies/SD', desc: 'Film/Hun/SD' },
      { id: '15', cat: 'Movies/DVD', desc: 'Film/Hun/DVD-R' },
      { id: '27', cat: 'Movies/HD', desc: 'Film/Hun/HD' },
      { id: '44', cat: 'Movies/HD', desc: 'Film/Hun/UHD' },
      { id: '2', cat: 'Books', desc: 'eBook/Hun' },
      { id: '7', cat: 'TV/SD', desc: 'Sorozat/Eng' },
      { id: '39', cat: 'TV/HD', desc: 'Sorozat/Eng/HD' },
      { id: '42', cat: 'Movies/SD', desc: 'Film/Eng/SD' },
      { id: '14', cat: 'Movies/DVD', desc: 'Film/Eng/DVD-R' },
      { id: '25', cat: 'Movies/HD', desc: 'Film/Eng/HD' },
      { id: '45', cat: 'Movies/HD', desc: 'Film/Eng/UHD' },
      { id: '1', cat: 'Books', desc: 'eBook/Eng' },
      { id: '38', cat: 'Audio/Audiobook', desc: 'Hangoskönyv' },
      { id: '21', cat: 'XXX', desc: 'XXX' },
      { id: '4', cat: 'PC/ISO', desc: 'Program/ISO' },
      { id: '19', cat: 'Audio/Other', desc: 'Zene/Hun' },
      { id: '37', cat: 'Audio/Lossless', desc: 'Lossless/Hun' },
      { id: '9', cat: 'PC/Games', desc: 'Játék/ISO' },
      { id: '43', cat: 'Console', desc: 'Játék/Konzol' },
      { id: '29', cat: 'Other', desc: 'Képek' },
      { id: '28', cat: 'XXX/Imageset', desc: 'XXX Képek' },
      { id: '3', cat: 'PC/0day', desc: 'Program/Egyéb' },
      { id: '18', cat: 'Audio/Other', desc: 'Zene/Eng' },
      { id: '26', cat: 'Audio/Lossless', desc: 'Lossless/Eng' },
      { id: '11', cat: 'PC/Games', desc: 'Játék/Rip' },
      { id: '13', cat: 'PC/Phone-Other', desc: 'Mobil' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q', 'imdbid'],
    },
  },
  login: {
    path: 'login.php',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      notsecure: '1',
    },
    error: [{ selector: 'div.login_error_content_text' }],
    test: { path: 'browse.php' },
  },
  search: {
    paths: [{ path: 'browse.php' }],
    inputs: {
      $raw: '{{range .Categories}}c{{.}}=1&{{end}}',
      search: '{{if .Query.IMDBID}}{{ .Query.IMDBID }}{{else}}{{ .Query.Keywords }}{{end}}',
      t: 'all',
    },
    rows: {
      selector: 'table.torrenttable > tbody > tr:has(td.torrentmain)',
    },
    fields: {
      title: {
        selector: 'td.torrentmain > a.torrentname',
        attribute: 'title',
      },
      category: {
        selector: 'a[href^="browse.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      details: {
        selector: 'td.torrentmain > a.torrentname',
        attribute: 'href',
      },
      download: {
        selector: 'a[href*="/download.php/"]',
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
        selector: 'div.files > a.button.small',
        filters: [{ name: 'replace', args: ['.', ''] }],
      },
      size: {
        selector: 'td.center.size',
        filters: [
          { name: 'replace', args: ['.', ''] },
          { name: 'replace', args: [',', '.'] },
        ],
      },
      seeders: {
        selector: 'td.center.data > a:first-child',
        filters: [{ name: 'replace', args: ['.', ''] }],
      },
      leechers: {
        selector: 'td.center.data > a:nth-child(2)',
        filters: [{ name: 'replace', args: ['.', ''] }],
      },
      grabs: {
        selector: 'td.center.data',
        filters: [{ name: 'replace', args: ['.', ''] }],
        remove: 'div.uploader, div.moderation, a.leftborder',
      },
      date: {
        selector: 'td.center.date',
        filters: [
          {
            name: 're_replace',
            args: ['(\\-)(\\d{2})(\\d{2})(\\:)', '-$2 $3:'],
          },
          { name: 'dateparse', args: '2006-01-02 15:04' },
        ],
      },
      downloadvolumefactor: { text: '0' },
      uploadvolumefactor: {
        case: {
          'a[href^="?doubleup=four"]': '4',
          'a[href^="?doubleup=three"]': '3',
          'a[href^="?doubleup=two"]': '2',
          '*': '1',
        },
      },
      description: {
        selector: 'div.contenttext',
        remove: 'div.contenttitle',
      },
    },
  },
  source: 'jackett',
};
