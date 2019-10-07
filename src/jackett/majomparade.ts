import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'majomparade',
  name: 'Majomparádé',
  description: 'Majomparádé (TurkDepo) is a HUNGARIAN Private Torrent Tracker for 0DAY / GENERAL',
  language: 'hu-HU',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://majomparade.eu/'],
  caps: {
    categorymappings: [
      { id: '4', cat: 'Movies/3D', desc: '3D/Magyar' },
      { id: '5', cat: 'Movies/3D', desc: '3D/Külföldi' },
      { id: '48', cat: 'Movies/HD', desc: 'Film/BR-BDRIP/Külföldi' },
      { id: '50', cat: 'Movies/HD', desc: 'Film/BR-BDRIP/Magyar' },
      { id: '75', cat: 'Movies/SD', desc: 'Film/Cam/Külföldi' },
      { id: '76', cat: 'Movies/SD', desc: 'Film/Cam/Magyar' },
      { id: '26', cat: 'Movies/DVD', desc: 'Film/DVD/Külföldi' },
      { id: '25', cat: 'Movies/DVD', desc: 'Film/DVD/Magyar' },
      { id: '58', cat: 'Movies/DVD', desc: 'Film/DVD9/Külföld' },
      { id: '59', cat: 'Movies/DVD', desc: 'Film/DVD9/Magyar' },
      { id: '42', cat: 'Movies/HD', desc: 'Film/HD/Külföldi' },
      { id: '51', cat: 'Movies/HD', desc: 'Film/HD/Magyar' },
      { id: '38', cat: 'Movies/SD', desc: 'Film/XviD/Külföldi' },
      { id: '24', cat: 'Movies/SD', desc: 'Film/XviD/Magyar' },
      { id: '85', cat: 'TV/Sport', desc: 'Sport/Külföldi' },
      { id: '87', cat: 'TV/Sport', desc: 'Sport/Magyar' },
      { id: '47', cat: 'TV/SD', desc: 'Sorozat/Külföldi' },
      { id: '36', cat: 'TV/SD', desc: 'Sorozat/Magyar' },
      { id: '6', cat: 'TV/HD', desc: 'Sorozat/HD/Magyar' },
      { id: '7', cat: 'TV/HD', desc: 'Sorozat/HD/Külföldi' },
      { id: '56', cat: 'Audio/Audiobook', desc: 'Hangoskönyv' },
      { id: '33', cat: 'Books', desc: 'Könyv/Külföldi' },
      { id: '44', cat: 'Books', desc: 'Könyv/Magyar' },
      { id: '28', cat: 'PC/Games', desc: 'Játék/ISO' },
      { id: '32', cat: 'Console', desc: 'Játék/Konzol' },
      { id: '30', cat: 'PC/Games', desc: 'Játék/RIP' },
      { id: '53', cat: 'Audio/Lossless', desc: 'Lossless/Külföldi' },
      { id: '74', cat: 'Audio/Lossless', desc: 'Lossless/Magyar' },
      { id: '40', cat: 'Audio/Other', desc: 'Zene/Külföldi' },
      { id: '41', cat: 'Audio/Other', desc: 'Zene/Magyar' },
      { id: '34', cat: 'PC/Phone-Other', desc: 'Mobil' },
      { id: '35', cat: 'PC/ISO', desc: 'Programok/ISO' },
      { id: '46', cat: 'PC/0day', desc: 'Programok/RIP' },
      { id: '70', cat: 'XXX/DVD', desc: 'XXX/DVD' },
      { id: '39', cat: 'XXX/XviD', desc: 'XXX/XviD' },
      { id: '57', cat: 'XXX', desc: 'XXX/HD' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q', 'imdbid'],
    },
  },
  login: {
    path: 'kezdolap.php',
    submitpath: 'kezdolap.php?belepes',
    method: 'form',
    form: 'form#login_form',
    inputs: {
      nev: '{{ .Config.username }}',
      jelszo: '{{ .Config.password }}',
    },
    selectorinputs: {
      getUnique: {
        selector: 'input[name="getUnique"]',
        attribute: 'value',
      },
    },
    test: { path: 'letoltes.php' },
  },
  search: {
    paths: [
      {
        path: 'letoltes.php',
        categorymappings: ['!', 70, 39, 57],
        inputs: { tipus: '1' },
      },
      {
        path: 'letoltes.php',
        categorymappings: ['!', 70, 39, 57],
        inputs: { tipus: '2' },
      },
      { path: 'xxx.php', categorymappings: [70, 39, 57] },
    ],
    inputs: {
      $raw: '{{range .Categories}}category[]={{.}}&{{end}}',
      name:
        '{{if .Query.IMDBID}}http://www.imdb.com/title/{{ .Query.IMDBID }}{{else}}{{ .Query.Keywords }}{{end}}',
      imdb_search: '{{ if .Query.IMDBID }}yes{{else}}{{end}}',
      k: 'yes',
      tipuska: '1',
    },
    rows: {
      selector: 'table#table > tbody > tr:has(a[href^="details.php?id="])',
    },
    fields: {
      download: {
        selector: 'a[href^="download.php?torrent="]',
        attribute: 'href',
      },
      title: {
        selector: 'a[href^="details.php?id="] > b[title*="Torrent neve:"]',
        optional: true,
        attribute: 'title',
        filters: [{ name: 'regexp', args: 'Torrent neve: (.*?)<' }],
      },
      description: {
        selector: 'a[href^="details.php?id="] > b',
        attribute: 'title',
        filters: [{ name: 'regexp', args: '<br />(.*)' }],
      },
      category: {
        selector: 'a[href*="&category[]="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'category[]' }],
      },
      details: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
      },
      imdb: {
        optional: true,
        selector: 'a[href*="www.imdb.com/title/tt"]',
        attribute: 'href',
      },
      banner: {
        optional: true,
        selector:
          'img[src="pic/borito.png"], a[href^="details.php?id="] > b[title*="Torrent neve:"]',
        attribute: 'title',
        filters: [{ name: 'regexp', args: "src='(.*?)'" }],
      },
      files: { selector: 'td:nth-child(5)' },
      size: { selector: 'td:nth-child(7)' },
      grabs: { selector: 'td:nth-child(8)' },
      seeders: { selector: 'td:nth-child(9)' },
      leechers: { selector: 'td:nth-child(10)' },
      date: {
        selector: 'td:nth-child(6)',
        filters: [
          { name: 'append', args: ' +01:00' },
          { name: 'dateparse', args: '2006-01-02 15:04:05 -07:00' },
        ],
      },
      downloadvolumefactor: { text: '0' },
      uploadvolumefactor: {
        case: {
          'img[title="Ennél a torrentnél 2x szorzó van."]': '2',
          'img[title="Ennél a torrentnél 3x szorzó van."]': '3',
          'img[title="Ennél a torrentnél 4x szorzó van."]': '4',
          '*': '1',
        },
      },
    },
  },
  source: 'jackett',
};
