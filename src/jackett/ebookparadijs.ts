import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'ebookparadijs',
  name: 'EbookParadijs',
  description: 'EbookParadijs is a DUTCH Private Tracker for EBOOKS',
  language: 'nl-NL',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://www.ebookparadijs.org/'],
  caps: {
    categorymappings: [
      { id: '2', cat: 'Books/Ebook', desc: 'Roman' },
      { id: '3', cat: 'Books/Ebook', desc: 'Thriller' },
      { id: '4', cat: 'Books/Ebook', desc: 'Diverse' },
      { id: '7', cat: 'Books/Ebook', desc: 'Jeugd' },
      { id: '8', cat: 'Books/Ebook', desc: 'Oorlog' },
      { id: '9', cat: 'Books/Ebook', desc: 'Luisterboeken' },
      { id: '10', cat: 'Books/Ebook', desc: 'Stripboeken' },
      { id: '11', cat: 'Books/Ebook', desc: 'Crime' },
      { id: '13', cat: 'Books/Ebook', desc: 'Detective' },
      { id: '15', cat: 'Books/Ebook', desc: 'Erothiek' },
      { id: '16', cat: 'Books/Ebook', desc: 'Tijdschriften' },
      { id: '17', cat: 'Books/Ebook', desc: 'Hobby' },
      { id: '19', cat: 'Books/Ebook', desc: 'Medisch' },
      { id: '21', cat: 'Books/Ebook', desc: 'Sport' },
      { id: '50', cat: 'Books/Ebook', desc: 'Kookboeken' },
      { id: '51', cat: 'Books/Ebook', desc: 'Fantasy' },
      { id: '52', cat: 'Books/Ebook', desc: 'Kerst' },
      { id: '53', cat: 'Books/Ebook', desc: 'Waargebeurd' },
      { id: '56', cat: 'Books/Ebook', desc: 'Engels' },
      { id: '57', cat: 'Books/Ebook', desc: 'Maatschappij' },
      { id: '58', cat: 'Books/Ebook', desc: 'Biografie' },
      { id: '61', cat: 'Books/Ebook', desc: 'Geschiedenis' },
      { id: '60', cat: 'Books/Ebook', desc: 'Sci-Fi' },
      { id: '64', cat: 'Books/Ebook', desc: 'Literatuur' },
      { id: '65', cat: 'Books/Ebook', desc: 'Non-Fiction' },
      { id: '66', cat: 'Books/Ebook', desc: 'Bladmuziek' },
    ],
    modes: { search: ['q'] },
  },
  settings: [
    { name: 'username', type: 'text', label: 'Username' },
    { name: 'password', type: 'password', label: 'Password' },
    {
      name: 'freeleech',
      type: 'checkbox',
      label: 'Filter freeleech only',
      default: false,
    },
    { name: 'thankyou', type: 'text', label: 'Thank You Comment' },
    {
      name: 'info',
      type: 'info',
      label: 'Thank you comment',
      default:
        'This site requires you to leave a Thank You comment before you can download. Enter your personalised comment above.',
    },
  ],
  login: {
    path: 'takelogin.php',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [
      {
        selector: 'table[border="0"][cellspacing="0"][cellpadding="10"] tr td font[color="orange"]',
      },
    ],
    test: { path: '/', selector: 'a[href="logout.php"]' },
  },
  download: {
    before: {
      path: 'comment.php',
      method: 'post',
      inputs: {
        action: 'add',
        tid: '{{ .DownloadUri.Query.id }}',
        text: '{{ .Config.thankyou }}',
        submit: 'Opslaan',
      },
    },
    selector: 'a[href^="download.php?id="]',
    attribute: 'href',
  },
  search: {
    paths: [{ path: 'browse.php' }],
    inputs: {
      $raw: '{{ range .Categories }}c{{.}}=1&{{end}}',
      search: '{{ .Keywords }}',
      incldead: 1,
    },
    rows: {
      selector:
        'table.mainouter{{ if .Config.freeleech }}:has(img[src="pic/freedlfsu.gif"]){{ else }}{{ end }}',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      category: {
        selector: 'a[href^="browse.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      banner: { selector: 'img[src*="/covers/"]', attribute: 'src' },
      title: { selector: 'a[href^="details.php?id="]' },
      details: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
      },
      size: {
        selector: 'td:nth-child(4) table tr td:nth-child(2)',
        filters: [{ name: 'regexp', args: '(.+?) in' }],
      },
      files: {
        selector: 'td:nth-child(4) table tr td:nth-child(2)',
        filters: [{ name: 'regexp', args: 'in (\\d+) bestan' }],
      },
      grabs: {
        selector: 'td:nth-child(4) table tr:nth-child(2) td:nth-child(1)',
        filters: [{ name: 'regexp', args: '(\\d+)' }],
      },
      date: {
        selector: 'td:nth-child(4) table tr:nth-child(2) td:last-child',
        filters: [
          { name: 'replace', args: ['januari', 'January'] },
          { name: 'replace', args: ['februari', 'February'] },
          { name: 'replace', args: ['maart', 'March'] },
          { name: 'replace', args: ['april', 'April'] },
          { name: 'replace', args: ['mei', 'May'] },
          { name: 'replace', args: ['juni', 'June'] },
          { name: 'replace', args: ['juli', 'July'] },
          { name: 'replace', args: ['augustus', 'August'] },
          { name: 'replace', args: ['september', 'September'] },
          { name: 'replace', args: ['oktober', 'October'] },
          { name: 'replace', args: ['november', 'November'] },
          { name: 'replace', args: ['december', 'December'] },
          { name: 're_replace', args: ['\\s*om\\s*', ' '] },
          { name: 'dateparse', args: '2 January 2006 15:04:05' },
        ],
      },
      seeders: {
        optional: true,
        selector: 'td:nth-child(4) table tr:nth-child(3) td:nth-child(5)  font b',
      },
      leechers: {
        optional: true,
        selector: 'td:nth-child(4) table tr:nth-child(3) td:nth-child(5) font font b',
      },
      downloadvolumefactor: {
        case: { 'img[src="pic/freedlfsu.gif"]': 0, '*': 1 },
      },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
