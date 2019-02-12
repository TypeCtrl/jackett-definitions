import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'ourbits',
  name: 'Ourbits',
  description: 'Ourbits (HDPter) is a CHINESE Private Torrent Tracker for HD MOVIES / TV / GENERAL',
  language: 'zh-CN',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://ourbits.club/'],
  caps: {
    categorymappings: [
      { id: '401', cat: 'Movies/BluRay', desc: 'Movies Blu-ray' },
      { id: '402', cat: 'Movies/HD', desc: 'Movies REMUX' },
      { id: '419', cat: 'Movies/HD', desc: 'Movies 1080p' },
      { id: '404', cat: 'Movies/HD', desc: 'Movies 720p' },
      { id: '405', cat: 'Movies/3D', desc: 'Movies 3D' },
      { id: '406', cat: 'Movies/DVD', desc: 'Movies DVD' },
      { id: '407', cat: 'Movies/WEBDL', desc: 'Movies WEB-DL' },
      { id: '408', cat: 'Movies/SD', desc: 'Movies HDTV' },
      { id: '409', cat: 'Movies/Other', desc: 'Movies iPad' },
      { id: '410', cat: 'TV/Documentary', desc: 'Documentaries' },
      { id: '411', cat: 'TV/Anime', desc: 'Animations' },
      { id: '412', cat: 'TV', desc: 'TV Series' },
      { id: '413', cat: 'TV', desc: 'TV Shows' },
      { id: '414', cat: 'Audio/Video', desc: 'Music Videos' },
      { id: '415', cat: 'TV/Sport', desc: 'Sports' },
      { id: '416', cat: 'Audio', desc: 'Music' },
      { id: '420', cat: 'Other', desc: 'Other' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep', 'imdbid'],
      'movie-search': ['imdbid'],
    },
  },
  login: {
    path: 'takelogin.php',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [{ selector: 'td.embedded:has(h2:contains("登录失败"))' }],
    test: { path: 'torrents.php' },
  },
  search: {
    paths: [{ path: 'torrents.php', method: 'get' }],
    inputs: {
      $raw: '{{range .Categories}}cat{{.}}=1&{{end}}',
      search: '{{if .Query.IMDBID}}{{ .Query.IMDBID }}{{else}}{{ .Keywords }}{{end}}',
      incldead: '1',
      search_area: '{{ if .Query.IMDBID }}4{{else}}0{{end}}',
    },
    rows: {
      selector: 'table.torrents > tbody > tr:has(table.torrentname)',
    },
    fields: {
      title: {
        optional: true,
        selector: 'a[title][href^="details.php?id="]',
        attribute: 'title',
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
      imdb: {
        optional: true,
        selector: 'div.imdb_100 > a',
        attribute: 'href',
      },
      size: { selector: 'td:nth-child(5)' },
      grabs: { selector: 'td:nth-child(8)' },
      seeders: { selector: 'td:nth-child(6)' },
      leechers: { selector: 'td:nth-child(7)' },
      date: {
        selector: 'td:nth-child(4) > span[title]',
        attribute: 'title',
        filters: [
          { name: 'append', args: ' +08:00' },
          { name: 'dateparse', args: '2006-01-02 15:04:05 -07:00' },
        ],
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
      description: { selector: 'td:nth-child(2)', remove: 'a, img' },
    },
  },
  source: 'jackett',
};
