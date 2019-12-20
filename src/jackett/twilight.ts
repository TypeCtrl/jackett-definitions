import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'twilight',
  name: 'Twilight Torrents',
  description: 'Twilight Torrents is a Private Torrent Tracker for MOVIES / TV / GENERAL',
  language: 'en-US',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://www.twilightsdreams.com/'],
  caps: {
    categorymappings: [
      { id: '28', cat: 'Movies', desc: ' Boxsets' },
      { id: '14', cat: 'PC', desc: 'apps' },
      { id: '44', cat: 'Other', desc: 'Bots no Cat yet' },
      {
        id: '46',
        cat: 'TV/Documentary',
        desc: 'documentary-TV and Movies',
      },
      { id: '35', cat: 'Audio/Audiobook', desc: 'E-books (audio)' },
      { id: '13', cat: 'Books/Ebook', desc: 'E-Books (text)' },
      { id: '48', cat: 'Movies', desc: 'Filled Requests' },
      { id: '6', cat: 'Console', desc: 'Games/console' },
      { id: '7', cat: 'Console', desc: 'Games/handheld' },
      { id: '19', cat: 'PC/Mac', desc: 'Games/Mac' },
      { id: '2', cat: 'PC/Games', desc: 'Games/PC/Linux' },
      { id: '45', cat: 'Movies', desc: 'Holiday stuff' },
      { id: '26', cat: 'Movies', desc: 'Kids/all-G-Rated' },
      { id: '15', cat: 'Other', desc: 'Misc ' },
      { id: '10', cat: 'Movies', desc: 'Movies' },
      { id: '31', cat: 'Movies', desc: 'Movies /Non English' },
      { id: '32', cat: 'Movies', desc: 'Movies Retro/Pre  2000' },
      { id: '3', cat: 'Audio', desc: 'Music' },
      { id: '4', cat: 'Audio/Video', desc: 'Music/videos' },
      { id: '33', cat: 'TV/Sport', desc: 'Sports' },
      { id: '36', cat: 'TV', desc: 'Tv' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
  },
  login: {
    path: 'login.php',
    method: 'form',
    form: 'form[action="takelogin.php"]',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      perm_ssl: 1,
      submitme: 'X',
    },
    error: [{ selector: 'h2', message: { selector: 'table tr td.text' } }],
    test: { path: 'browse.php', selector: 'a[href="logout.php"]' },
  },
  search: {
    paths: [{ path: 'browse.php' }],
    inputs: {
      $raw: '{{range .Categories}}c{{.}}=1&{{end}}',
      search: '{{ .Keywords }}',
      incldead: 1,
    },
    rows: { selector: 'tr[class^="color"]' },
    fields: {
      category: {
        selector: 'a[href^="browse.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      title: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'onmouseover',
        filters: [
          { name: 'split', args: ['>', '2'] },
          { name: 'replace', args: ['</b', ''] },
        ],
      },
      details: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="download.php?torrent="]',
        attribute: 'href',
      },
      files: { selector: 'td:nth-of-type(6)' },
      date: {
        selector: 'td:nth-of-type(8):not(:contains("day"))',
        optional: true,
        filters: [{ name: 'dateparse', args: 'Jan 2 2006 03:04 PM' }],
      },
      size: { selector: 'td:nth-of-type(9)' },
      grabs: {
        selector: 'td:nth-of-type(10)',
        filters: [{ name: 'regexp', args: '([\\d]+)' }],
      },
      seeders: { selector: 'td:nth-of-type(11)' },
      leechers: { selector: 'td:nth-of-type(12)' },
      downloadvolumefactor: {
        case: { 'img[src="free.gif"]': '0', '*': '1' },
      },
      uploadvolumefactor: { text: '1' },
    },
  },
  source: 'jackett',
};
