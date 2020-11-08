import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'libranet',
  name: 'LibraNet',
  description: 'LibraNet (LN) is a HUNGARIAN Private Torrent Tracker for EBOOKS / LOSSLESS MUSIC',
  language: 'hu-HU',
  type: 'private',
  encoding: 'ISO-8859-2',
  links: ['https://libranet.org/'],
  caps: {
    categorymappings: [
      { id: '50', cat: 'Movies', desc: 'Film' },
      { id: '51', cat: 'Movies', desc: 'Film/Hun' },
      { id: '3', cat: 'Audio/Audiobook', desc: 'Hangoskönyv' },
      { id: '4', cat: 'Audio/Audiobook', desc: 'Hangoskönyv/Hun' },
      { id: '1', cat: 'Books/Ebook', desc: 'Könyv' },
      { id: '2', cat: 'Books/Ebook', desc: 'Könyv/Hun' },
      { id: '55', cat: 'Other', desc: 'Mûhelysarok' },
      { id: '56', cat: 'Audio/Lossless', desc: 'LossLess' },
      { id: '57', cat: 'Audio/Lossless', desc: 'LossLess/Hun' },
      { id: '48', cat: 'Books/Mags', desc: 'Magazin' },
      { id: '49', cat: 'Books/Mags', desc: 'Magazin/Hun' },
    ],
    modes: {
      search: ['q'],
      'movie-search': ['q'],
      'music-search': ['q'],
      'book-search': ['q'],
    },
  },
  login: {
    path: 'takelogin.php',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [
      {
        selector: 'td.text:contains("Error")',
        message: { selector: 'td.text' },
      },
    ],
    test: { path: '/', selector: 'a[href="/logout.php"]' },
  },
  search: {
    paths: [{ path: 'browse.php' }],
    inputs: {
      $raw: '{{ range .Categories }}cat{{.}}=1&{{end}}',
      search: '{{ .Keywords }}',
      searchwhere: '',
      subcat: '',
      musicstyle: '',
      format: '',
      incldead: 1,
    },
    rows: {
      selector: 'table.rounded tr:has(a[href^="browse.php?cat="])',
    },
    fields: {
      category: {
        selector: 'a[href^="browse.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      title: { selector: 'a[href^="details.php?id="]' },
      details: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
        filters: [
          { name: 'replace', args: ['details', 'download'] },
          { name: 'replace', args: ['&hit=1', ''] },
        ],
      },
      description: { selector: 'img[width="60"]', attribute: 'title' },
      poster: {
        selector: 'a[onmouseover]',
        optional: true,
        attribute: 'onmouseover',
        filters: [{ name: 'regexp', args: 'src=(.*?) width' }],
      },
      date: {
        selector: 'td:nth-last-child(7)',
        filters: [
          { name: 'append', args: ' +01:00' },
          { name: 'dateparse', args: '2006-01-0215:04:05 -07:00' },
        ],
      },
      size: { selector: 'td:nth-last-child(6)' },
      grabs: {
        selector: 'td:nth-last-child(5)',
        filters: [{ name: 'regexp', args: '(\\d+) x' }],
      },
      seeders: { selector: 'td:nth-last-child(4)' },
      leechers: { selector: 'td:nth-last-child(3)' },
      downloadvolumefactor: {
        case: { 'img[src$="/pic/freeleech.gif"]': 0, '*': 1 },
      },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
