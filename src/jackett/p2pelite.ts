import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'p2pelite',
  name: 'P2PElite',
  description: 'P2PElite is a Private Torrent Tracker for EBOOKS / AUDIOBOOKS',
  language: 'en-US',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://p2pelite.com/'],
  caps: {
    categorymappings: [
      { id: '19', cat: 'PC', desc: 'Apps' },
      { id: '11', cat: 'Audio/Audiobook', desc: 'Audio Books' },
      { id: '40', cat: 'Books/Ebook', desc: 'Best Sellers' },
      { id: '17', cat: 'Books/Ebook', desc: 'Biographical' },
      { id: '27', cat: 'Books/Ebook', desc: 'Business/Finance' },
      { id: '8', cat: 'Books/Ebook', desc: 'Children' },
      { id: '30', cat: 'Books/Ebook', desc: 'Classic' },
      {
        id: '2',
        cat: 'Books/Comics',
        desc: 'Comics/GraphicNovels/Manga',
      },
      { id: '14', cat: 'Books/Ebook', desc: 'Computer' },
      { id: '15', cat: 'Books/Ebook', desc: 'Cookbooks' },
      { id: '22', cat: 'Books/Ebook', desc: 'Crime/Thriller/Mystery' },
      { id: '10', cat: 'Books/Ebook', desc: 'DIY' },
      { id: '6', cat: 'Books/Ebook', desc: 'Educational' },
      { id: '12', cat: 'Books/Other', desc: 'Educational Videos' },
      { id: '20', cat: 'Books/Ebook', desc: 'Erotica/over 18' },
      { id: '23', cat: 'Books/Ebook', desc: 'Fantasy' },
      { id: '1', cat: 'Books/Ebook', desc: 'Fiction' },
      { id: '18', cat: 'Books/Ebook', desc: 'Gardening' },
      { id: '21', cat: 'Books/Ebook', desc: 'Health' },
      { id: '33', cat: 'Books/Ebook', desc: 'Historical Fiction' },
      { id: '16', cat: 'Books/Ebook', desc: 'History' },
      { id: '4', cat: 'Books/Ebook', desc: 'Hobby/Pastimes' },
      { id: '29', cat: 'Books/Ebook', desc: 'Horror' },
      { id: '5', cat: 'Books/Ebook', desc: 'Language Learning' },
      { id: '7', cat: 'Books/Mags', desc: 'Magazines' },
      { id: '13', cat: 'Books/Other', desc: 'Misc' },
      { id: '34', cat: 'Audio', desc: 'Music' },
      { id: '37', cat: 'Books/Ebook', desc: 'New Adult' },
      { id: '28', cat: 'Books/Ebook', desc: 'Non-English' },
      { id: '3', cat: 'Books/Ebook', desc: 'Non-Fiction/Reference' },
      { id: '24', cat: 'Books/Ebook', desc: 'Paranormal Romance' },
      { id: '39', cat: 'Books/Ebook', desc: 'Philosophy' },
      { id: '25', cat: 'Books/Ebook', desc: 'Romance' },
      { id: '26', cat: 'Books/Ebook', desc: 'SciFi' },
      { id: '9', cat: 'Books/Ebook', desc: 'Teens' },
      { id: '32', cat: 'Other', desc: 'torrent not modded' },
      { id: '35', cat: 'Books/Ebook', desc: 'True Crime' },
      { id: '38', cat: 'Books/Ebook', desc: 'Urban Fantasy' },
      { id: '31', cat: 'Books/Ebook', desc: 'Western' },
    ],
    modes: { search: ['q'], 'book-search': ['q'] },
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
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: 4,
      options: { '1': 'title', '4': 'created', '5': 'size', '7': 'seeders' },
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
    form: 'form[action="takelogin.php"]',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      returnto: '/',
      perm_ssl: 1,
    },
    error: [
      { selector: 'td.embedded:has(h2:contains("failed"))' },
      { selector: 'td.embedded:has(h2:contains("Error"))' },
    ],
    test: { path: 'index.php', selector: 'a[href^="./logout.php"]' },
  },
  search: {
    paths: [{ path: 'browse.php' }],
    inputs: {
      $raw: '{{ range .Categories }}c{{.}}=1&{{end}}',
      search: '{{ .Keywords }}',
      incldead: 1,
      sort: '{{ .Config.sort }}',
      type: '{{ .Config.type }}',
    },
    rows: {
      selector:
        'table[border="1"][cellspacing="0"][cellpadding="5"]  > tbody > tr:has(a[href^="download.php?torrent="]){{ if .Config.freeleech }}:has(a.info:contains("[FREE]")){{ else }}{{ end }}',
    },
    fields: {
      category: {
        selector: 'a[href^="browse.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      title: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'onmouseover',
        filters: [{ name: 'regexp', args: '<b>(.+?)</b>' }],
      },
      details: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="download.php?torrent="]',
        attribute: 'href',
      },
      poster: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'onmouseover',
        filters: [
          { name: 'regexp', args: 'src="(.*?)"' },
          { name: 'replace', args: ['./pic/noposter.png', ''] },
        ],
      },
      files: { selector: 'td:nth-last-child(8)' },
      date: {
        selector: 'td:nth-last-child(6):not(:contains("day"))',
        optional: true,
        filters: [
          { name: 'append', args: ' +00:00' },
          { name: 'dateparse', args: 'Jan 2 2006 03:04 PM -07:00' },
        ],
      },
      size: { selector: 'td:nth-last-child(5)' },
      grabs: {
        selector: 'td:nth-last-child(4)',
        filters: [{ name: 'regexp', args: '(\\d+)' }],
      },
      seeders: { selector: 'td:nth-last-child(3)' },
      leechers: { selector: 'td:nth-last-child(2)' },
      downloadvolumefactor: {
        case: { 'a.info:contains("[FREE]")': 0, '*': 1 },
      },
      uploadvolumefactor: { text: 1 },
      minimumratio: { text: 0.5 },
    },
  },
  source: 'jackett',
};
