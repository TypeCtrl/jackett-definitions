import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'cartoonchaos',
  name: 'CartoonChaos',
  description: 'CartoonChaos (CC) is a Private Torrent Tracker for ANIMATED MOVIES / TV',
  language: 'en-US',
  type: 'private',
  encoding: 'UTF-8',
  links: ['http://www.cartoonchaos.org/'],
  settings: [
    { name: 'username', type: 'text', label: 'Username' },
    { name: 'password', type: 'password', label: 'Password' },
    {
      name: 'info_results',
      type: 'info',
      label: 'Search results',
      default:
        'Only the <b>xBtit_Default</b> style is supported with this indexer.<br />For best results, increase the torrents number in your profile to 100.<br />Default is 15.',
    },
  ],
  caps: {
    categorymappings: [
      { id: '30', cat: 'TV', desc: 'Complete Sets' },
      { id: '15', cat: 'TV', desc: 'Educational' },
      { id: '16', cat: 'TV', desc: 'Kids' },
      { id: '17', cat: 'TV', desc: 'Mature Cartoons' },
      { id: '41', cat: 'TV', desc: 'Shorts' },
      { id: '20', cat: 'TV/Anime', desc: 'Anime Movies' },
      { id: '21', cat: 'TV/Anime', desc: 'Anime Series' },
      { id: '26', cat: 'Movies', desc: 'Animated Movies' },
      { id: '23', cat: 'Audio', desc: 'Sound Tracks' },
      { id: '24', cat: 'Audio', desc: 'Theme Tunes' },
      { id: '43', cat: 'Audio/Other', desc: 'Misc Audio' },
      { id: '14', cat: 'TV', desc: 'Banned' },
      { id: '29', cat: 'TV', desc: 'Public Domain' },
      { id: '42', cat: 'TV/Foreign', desc: 'Foreign Language' },
      { id: '28', cat: 'TV', desc: 'Animated Adverts' },
      { id: '45', cat: 'TV/Documentary', desc: 'Documentaries' },
    ],
    modes: {
      search: ['q', 'imdbid'],
      'tv-search': ['q', 'season', 'ep', 'imdbid'],
      'movie-search': ['q', 'imdbid'],
    },
  },
  login: {
    path: 'index.php?page=login',
    method: 'form',
    form: 'form[action^="index.php?page=login"]',
    inputs: {
      uid: '{{ .Config.username }}',
      pwd: '{{ .Config.password }}',
    },
    error: [{ selector: 'tr td span[style="color:#FF0000;"]' }],
    test: { path: 'index.php', selector: 'a[href="logout.php"]' },
  },
  search: {
    paths: [{ path: 'index.php' }],
    inputs: {
      page: 'torrents',
      search: '{{if .Query.IMDBID}}{{.Query.IMDBID}}{{else}}{{.Keywords}}{{end}}',
      category: '{{if .Categories}}{{range .Categories}}{{.}};{{end}}{{else}}0{{end}}',
      options: '{{if .Query.IMDBID}}1{{else}}0{{end}}',
      active: 0,
    },
    rows: {
      selector: 'table.lista tr td table.lista tr:has(a[href^="index.php?page=torrent-details"])',
    },
    fields: {
      title: { selector: 'td a[href^="index.php?page=torrent-details"]' },
      details: {
        selector: 'td a[href^="index.php?page=torrent-details"]',
        attribute: 'href',
      },
      category: {
        selector: 'td a[href^="index.php?page=torrents&category="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'category' }],
      },
      download: {
        selector: 'td a[href^="download.php"]',
        attribute: 'href',
      },
      imdb: {
        optional: true,
        selector: 'a[href*="www.imdb.com/title/tt"]',
        attribute: 'href',
        filters: [
          {
            name: 'replace',
            args: [" http://anonym.to?javascript:popdetails('", ''],
          },
          { name: 'replace', args: ["');", ''] },
        ],
      },
      size: { selector: 'td:nth-child(10)' },
      date: {
        selector: 'td:nth-child(5):not(:contains("day"))',
        optional: true,
        filters: [
          { name: 're_replace', args: ['[,]|[\\s+]|[// ],\\/g', ' '] },
          { name: 'dateparse', args: 'January 02  2006  03:04:05 PM' },
        ],
      },
      seeders: { selector: 'td:nth-child(6)' },
      leechers: { selector: 'td:nth-child(7)' },
      grabs: { selector: 'td:nth-child(8)' },
      downloadvolumefactor: {
        case: { 'img[src="gold/gold.gif"]': '0', '*': '1' },
      },
      uploadvolumefactor: { text: '1' },
    },
  },
  source: 'jackett',
};
