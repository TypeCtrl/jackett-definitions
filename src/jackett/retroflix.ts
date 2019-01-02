import { TopLevel } from '../definition-interface';
export const definition: TopLevel = {
  site: 'retroflix',
  name: 'RetroFlix',
  description:
    'Private Torrent Tracker for Classic Movies / TV / General Releases.',
  language: 'en-US',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://retroflix.club/'],
  legacylinks: ['https://retroflix.net/'],
  caps: {
    categorymappings: [
      { id: '401', cat: 'Movies', desc: 'Movies' },
      { id: '404', cat: 'TV/Documentary', desc: 'Documentaries' },
      { id: '405', cat: 'TV/Anime', desc: 'Animations' },
      { id: '402', cat: 'TV', desc: 'TV Series' },
      { id: '403', cat: 'TV', desc: 'TV Shows' },
      { id: '406', cat: 'Audio/Video', desc: 'Music Videos' },
      { id: '407', cat: 'TV/Sport', desc: 'Sports' },
      { id: '409', cat: 'Other', desc: 'Misc' },
      { id: '408', cat: 'Audio', desc: 'HQ Audio' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q', 'imdbid'],
    },
  },
  settings: [{ name: 'cookie', type: 'text', label: 'Cookie' }],
  login: {
    method: 'cookie',
    inputs: { cookie: '{{ .Config.cookie }}' },
    test: { path: 'torrents.php' },
  },
  search: {
    paths: [{ path: 'torrents.php', method: 'get' }],
    inputs: {
      search:
        '{{if .Query.IMDBID}}{{ .Query.IMDBID }}{{else}}{{ .Keywords }}{{end}}',
      incldead: 1,
      search_area: '{{ if .Query.IMDBID }}4{{else}}0{{end}}',
      search_mode: 0,
    },
    rows: {
      selector: 'table.torrents > tbody > tr:has(table.torrentname)',
    },
    fields: {
      release_year: { selector: 'a[href^="/torrents.php?processing="]' },
      quality: { selector: 'a[href^="/torrents.php?standard="]' },
      title: {
        selector: 'a[title][href^="details.php?id="]',
        attribute: 'title',
        filters: [
          { name: 'append', args: ' {{ .Result.release_year }}' },
          { name: 'append', args: ' {{ .Result.quality }}' },
        ],
      },
      category: {
        selector: 'a[href^="?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      details: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="download.php?id="]',
        attribute: 'href',
      },
      size: { selector: 'td:nth-child(5)' },
      grabs: { selector: 'td:nth-child(8)' },
      seeders: { selector: 'td:nth-child(6)' },
      leechers: { selector: 'td:nth-child(7)' },
      date: {
        selector: 'td:nth-child(4) > span[title]',
        attribute: 'title',
        filters: [{ name: 'dateparse', args: '02-01-2006 15:04:05' }],
      },
      downloadvolumefactor: {
        case: {
          'img.pro_free': '0',
          'img.pro_free2up': '0',
          'img.pro_50pctdown': '0.5',
          'img.pro_50pctdown2up': '0.5',
          'img.pro_30pctdown': '0.3',
          '*': '1',
        },
      },
      uploadvolumefactor: {
        case: {
          'img.pro_50pctdown2up': '2',
          'img.pro_free2up': '2',
          'img.pro_2up': '2',
          '*': '1',
        },
      },
    },
  },
};