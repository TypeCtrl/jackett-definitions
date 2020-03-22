import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'torrentleech-pl',
  name: 'Torrentleech.pl',
  description: 'Torrentleech.pl is a POLISH Private Torrent Tracker for 0DAY / GENERAL',
  language: 'pl-PL',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://torrentleech.pl/'],
  caps: {
    categorymappings: [
      { id: '32', cat: 'PC', desc: 'Aplikacje PC' },
      { id: '33', cat: 'Books', desc: 'eBooki/AudioBooki/Prasa' },
      { id: '65', cat: 'Movies/3D', desc: 'Filmy/3D' },
      { id: '69', cat: 'Movies/UHD', desc: 'Filmy/4K UHD' },
      { id: '28', cat: 'TV/Anime', desc: 'Filmy/Animowane' },
      { id: '66', cat: 'Movies/BluRay', desc: 'Filmy/BDRip' },
      { id: '61', cat: 'Movies/BluRay', desc: 'Filmy/BRRip' },
      { id: '67', cat: 'Movies', desc: 'Filmy/CAM-TC-TS' },
      { id: '58', cat: 'TV/Documentary', desc: 'Filmy/Dokumentalne' },
      { id: '39', cat: 'Movies/HD', desc: 'Filmy/Full HD' },
      { id: '36', cat: 'Movies/HD', desc: 'Filmy/HD Ready' },
      { id: '64', cat: 'Movies', desc: 'Filmy/Kino Polskie' },
      { id: '59', cat: 'Movies', desc: 'Filmy/PACK' },
      { id: '40', cat: 'Movies/SD', desc: 'Filmy/SD' },
      { id: '68', cat: 'Movies/WEBDL', desc: 'Filmy/WEB-DL' },
      { id: '62', cat: 'Console', desc: 'Gry/Dodatki' },
      { id: '41', cat: 'Console', desc: 'Gry/Konsole' },
      { id: '42', cat: 'PC/Games', desc: 'Gry/PC' },
      { id: '44', cat: 'PC/Phone-Other', desc: 'GSM/PDA' },
      { id: '57', cat: 'Audio/Video', desc: 'Koncerty/Teledyski' },
      { id: '63', cat: 'Audio/Lossless', desc: 'Muzyka/FLAC' },
      { id: '46', cat: 'Audio/MP3', desc: 'Muzyka/MP3' },
      { id: '47', cat: 'Other', desc: 'Różne' },
      { id: '60', cat: 'TV/Sport', desc: 'Sport' },
      { id: '53', cat: 'TV', desc: 'TV Seriale' },
      { id: '56', cat: 'XXX', desc: 'XXX' },
    ],
    modes: {
      search: ['q', 'imdbid'],
      'tv-search': ['q', 'season', 'ep', 'imdbid'],
      'movie-search': ['q', 'imdbid'],
    },
  },
  settings: [
    { name: 'cookie', type: 'text', label: 'Cookie' },
    {
      name: 'info',
      type: 'info',
      label: 'How to get the Cookie',
      default:
        "<ol><li>Login to this tracker with your browser<li>Open the <b>DevTools</b> panel by pressing <b>F12</b><li>Select the <b>Network</b> tab<li>Click on the <b>Doc</b> button<li>Refresh the page by pressing <b>F5</b><li>Select the <b>Headers</b> tab<li>Find 'cookie:' in the <b>Request Headers</b> section<li>Copy & paste the whole cookie string to here.</ol>",
    },
  ],
  login: {
    method: 'cookie',
    inputs: { cookie: '{{ .Config.cookie }}' },
    test: { path: '/', selector: 'a[href^="logout.php"]' },
  },
  search: {
    paths: [{ path: 'browse.php' }],
    inputs: {
      $raw: '{{ range .Categories }}c{{.}}=1&{{end}}',
      search: '{{ if .Query.IMDBID }}{{ .Query.IMDBID }}{{else}}{{ .Keywords }}{{end}}',
      incldead: 1,
      titlesearch: '{{ if .Query.IMDBID }}1{{else}}0{{end}}',
      polish: 0,
      cat_film: '',
      napisy: 0,
    },
    rows: {
      selector:
        'table[border="1"][cellspacing="0"][cellpadding="5"] > tbody > tr:has(a[href^="details.php?id="])',
      filters: [{ name: 'andmatch' }],
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
        selector: 'a[href^="download.php/"]',
        attribute: 'href',
      },
      imdb: {
        optional: true,
        selector: 'a[href*="www.imdb.com/title/tt"]',
        attribute: 'href',
      },
      description: {
        optional: true,
        selector: 'img[src="pic/napisy.gif"]',
        filters: [
          { name: 'append', args: 'Subbed\n<br>' },
          { name: 'prepend', args: '{{ .Result.description }}' },
        ],
      },
      date: {
        selector: 'td:nth-child(4)',
        filters: [
          { name: 'append', args: ' +00:00' },
          { name: 'dateparse', args: '2006-01-0215:04:05 -07:00' },
        ],
      },
      size: { selector: 'td:nth-child(5)' },
      grabs: {
        selector: 'td:nth-child(6)',
        filters: [{ name: 'regexp', args: '(\\d+)' }],
      },
      seeders: {
        selector: 'td:nth-child(7)',
        filters: [{ name: 'split', args: ['/', 0] }],
      },
      leechers: {
        selector: 'td:nth-child(7)',
        filters: [{ name: 'split', args: ['/', 1] }],
      },
      downloadvolumefactor: { case: { 'tr.darmowy': 0, '*': 1 } },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};