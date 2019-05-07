import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'icetorrent',
  name: 'ICE Torrent',
  description: 'ICE Torrent is a ratioless ROMANIAN Private Torrent Tracker for 0DAY / GENERAL',
  language: 'ro-RO',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://www.icetorrent.org/'],
  caps: {
    categorymappings: [
      { id: '1', cat: 'PC/0day', desc: 'Appz' },
      { id: '85', cat: 'Audio/Audiobook', desc: 'AudioBooks' },
      { id: '68', cat: 'Books', desc: 'Carti/Reviste' },
      { id: '23', cat: 'Books', desc: 'Cartoons' },
      { id: '73', cat: 'Audio/Video', desc: 'Concert/Videoclip' },
      { id: '75', cat: 'Other', desc: 'Diverse' },
      { id: '69', cat: 'Books', desc: 'Documentare' },
      { id: '51', cat: 'TV/Documentary', desc: 'Documentaries' },
      { id: '43', cat: 'Books', desc: 'eBooks' },
      { id: '63', cat: 'Movies/DVD', desc: 'Filme DVD' },
      { id: '65', cat: 'Movies/HD', desc: 'Filme HD' },
      { id: '64', cat: 'Movies/SD', desc: 'Filme Xvid' },
      { id: '40', cat: 'Console', desc: 'Games/Console' },
      { id: '26', cat: 'PC/Games', desc: 'Games/PC' },
      { id: '38', cat: 'PC/Phone-Other', desc: 'Mobile' },
      { id: '59', cat: 'Movies/3D', desc: 'Movies/3D' },
      { id: '92', cat: 'Movies/UHD', desc: 'Movies/4K-UHD' },
      { id: '32', cat: 'Movies/BluRay', desc: 'Movies/Blu-Ray' },
      { id: '28', cat: 'Movies/DVD', desc: 'Movies/DVD' },
      { id: '42', cat: 'Movies/HD', desc: 'Movies/HD-x264' },
      { id: '91', cat: 'Movies/HD', desc: 'Movies/HEVC-x265' },
      { id: '79', cat: 'Movies/HD', desc: 'Movies/microHD' },
      { id: '29', cat: 'Movies/SD', desc: 'Movies/SD' },
      { id: '72', cat: 'Audio/Lossless', desc: 'Music/FLAC' },
      { id: '6', cat: 'Audio/MP3', desc: 'Music/MP3' },
      { id: '37', cat: 'Audio/Video', desc: 'Music/Video' },
      { id: '70', cat: 'Audio/Lossless', desc: 'Muzica FLAC' },
      { id: '71', cat: 'Audio/MP3', desc: 'Muzica MP3' },
      { id: '74', cat: 'Other', desc: 'Other' },
      { id: '41', cat: 'Other', desc: 'Pictures' },
      { id: '67', cat: 'TV', desc: 'Seriale TV' },
      { id: '48', cat: 'TV/Sport', desc: 'Sports' },
      { id: '87', cat: 'Other', desc: 'TUTS' },
      { id: '33', cat: 'TV/SD', desc: 'TV Episodes' },
      { id: '34', cat: 'TV/HD', desc: 'TVHD Episodes' },
      { id: '9', cat: 'XXX', desc: 'XXX' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep', 'imdbid'],
      'movie-search': ['q', 'imdbid'],
    },
  },
  login: {
    path: 'login.php',
    method: 'form',
    form: 'form',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [{ selector: 'div.alert:contains("failed")' }],
    test: { path: 'browse.php' },
  },
  ratio: { text: -1 },
  search: {
    paths: [
      { path: 'browse.php', categorymappings: ['!', 9] },
      { path: 'browseadult.php', categorymappings: [9] },
    ],
    inputs: {
      $raw: '{{range .Categories}}c{{.}}=1&{{end}}',
      search: '{{if .Query.IMDBID}}{{ .Query.IMDBIDShort }}{{else}}{{ .Keywords }}{{end}}',
      incldead: 1,
      search_by: '{{ if .Query.IMDBID }}imdb{{else}}name{{end}}',
    },
    rows: {
      selector: 'table.table-striped > tbody > tr:has(a[href^="details.php?id="])',
    },
    fields: {
      title: { selector: 'a[href^="details.php?id="]' },
      details: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
      },
      category: {
        selector: 'a[href^="?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      banner: { attribute: 'rel' },
      imdb: {
        selector: 'a[href*="www.imdb.com/title/"]',
        optional: true,
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="download.php"]',
        attribute: 'href',
      },
      files: {
        selector: 'a[href$="filelist=1#filelist"]',
        filters: [{ name: 'regexp', args: '(\\d+)' }],
      },
      size: {
        selector: 'td:has(a[href$="filelist=1#filelist"])',
        remove: 'a',
      },
      date: {
        selector: 'td > small:has(i.fa-clock)',
        filters: [
          { name: 'replace', args: [' ', ' '] },
          { name: 'replace', args: ['st ', ' '] },
          { name: 'replace', args: ['nd ', ' '] },
          { name: 'replace', args: ['rd ', ' '] },
          { name: 'replace', args: ['th ', ' '] },
          { name: 'regexp', args: '(.+?) by' },
          { name: 'append', args: ' +02:00' },
          { name: 'dateparse', args: '2 Jan 2006 15:04:05 -07:00' },
        ],
      },
      seeders: { selector: 'td:nth-last-child(2)' },
      leechers: { selector: 'td:nth-last-child(1)' },
      downloadvolumefactor: { case: { '*': '0' } },
      uploadvolumefactor: { case: { '*': '1' } },
    },
  },
  source: 'jackett',
};
