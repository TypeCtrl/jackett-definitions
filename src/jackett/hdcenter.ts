import { TopLevel } from '../definition-interface';
export const definition: TopLevel = {
  site: 'hdcenter',
  name: 'HDCenter',
  description: 'An German HD tracker',
  language: 'de-DE',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://hdcenter.cc/'],
  caps: {
    categorymappings: [
      { id: '1', cat: 'Movies/HD', desc: 'Movies' },
      { id: '2', cat: 'Movies/3D', desc: '3D' },
      { id: '3', cat: 'TV/HD', desc: 'Series' },
      { id: '4', cat: 'TV/Documentary', desc: 'Documentary' },
      { id: '5', cat: 'TV/Sport', desc: 'Sport' },
      { id: '6', cat: 'XXX', desc: 'XXX' },
      { id: '7', cat: 'Audio/Lossless', desc: 'Audio' },
      { id: '8', cat: 'PC/0day', desc: 'Appz' },
      { id: '9', cat: 'Movies/HD', desc: 'HDC' },
      { id: '10', cat: 'Movies/HD', desc: 'TvR' },
      { id: '11', cat: 'Movies/HD', desc: '10Bit' },
      { id: '12', cat: 'Movies/HD', desc: 'jTV' },
      { id: '13', cat: 'TV/HD', desc: 'NERDS' },
      { id: '14', cat: 'Audio/Lossless', desc: 'dOWnb3At' },
      { id: '15', cat: 'Movies/Other', desc: 'Anime' },
      { id: '16', cat: 'Audio/Video', desc: 'Live' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep', 'imdbid'],
      'movie-search': ['q', 'imdbid'],
    },
  },
  login: {
    path: '/login.php',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      timeout: '1',
    },
    error: [{ selector: 'div#error-text' }],
    test: { path: '/torrents.php' },
  },
  search: {
    paths: [{ path: 'torrents.php' }],
    inputs: {
      $raw: '{{range .Categories}}filter_cat[{{.}}]=1&{{end}}',
      searchstr:
        '{{if .Query.IMDBID}}{{ .Query.IMDBID }}{{else}}{{ .Keywords }}{{end}}',
    },
    rows: { selector: 'table#torrent_table > tbody > tr.torrent' },
    fields: {
      download: {
        selector: 'a[title="download"]',
        attribute: 'href',
        optional: true,
      },
      details: { selector: 'a.torrent_link_title', attribute: 'href' },
      title: {
        selector:
          'td.cats_col:has(a[href*="filter_cat[10]=1"]) + td.title_col a.torrent_link_title:not(:contains("GERMAN"))',
        optional: true,
        filters: [{ name: 'replace', args: ['.DL', '.GERMAN.DL'] }],
      },
      category: {
        selector: 'td.cats_col > a',
        attribute: 'href',
        filters: [{ name: 'regexp', args: '\\[(\\d+?)\\]' }],
      },
      date: {
        selector: 'td.time_col > .time',
        filters: [
          { name: 'append', args: ' +01:00' },
          { name: 'dateparse', args: 'Jan 02 2006, 15:04 -07:00' },
        ],
      },
      size: { selector: 'td.size_col' },
      grabs: { selector: 'td.snatcher_col' },
      seeders: { selector: 'td.seeder_col' },
      leechers: { selector: 'td.leecher_col' },
      downloadvolumefactor: {
        case: { 'span.freeleech_slot': '0', 'span.freeleech': '0', '*': '1' },
      },
      uploadvolumefactor: { case: { '*': '1' } },
    },
  },
};
