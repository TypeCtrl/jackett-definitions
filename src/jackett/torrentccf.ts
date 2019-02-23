import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'torrentccf',
  name: 'TorrentCCF',
  description: 'TorrentCCF (TCCF) is a CHINESE Private Torrent Tracker for HD MOVIES / TV',
  language: 'zh-CN',
  type: 'private',
  encoding: 'UTF-8',
  links: ['http://et8.org/'],
  legacylinks: ['https://et8.org/'],
  caps: {
    categorymappings: [
      { id: '601', cat: 'Movies', desc: 'Movies' },
      { id: '602', cat: 'TV/Anime', desc: 'Animations' },
      { id: '603', cat: 'TV/Sport', desc: 'Sports' },
      { id: '604', cat: 'TV/Documentary', desc: 'Documentaries' },
      { id: '605', cat: 'Books', desc: 'EDU' },
      { id: '606', cat: 'TV', desc: 'TV/Cn' },
      { id: '607', cat: 'TV', desc: 'TV/Western' },
      { id: '608', cat: 'TV', desc: 'TV/hk_tw' },
      { id: '609', cat: 'TV', desc: 'TV/Japan_korea' },
      { id: '610', cat: 'TV', desc: 'TV Shows' },
      { id: '611', cat: 'Audio', desc: 'Music/Cn' },
      { id: '612', cat: 'Audio', desc: 'Music/Western' },
      { id: '613', cat: 'Audio', desc: 'Music/Asia' },
      { id: '614', cat: 'Audio', desc: 'Music/Classic' },
      { id: '615', cat: 'Audio/Video', desc: 'MusicVideo' },
      { id: '616', cat: 'PC', desc: 'Appz' },
      { id: '617', cat: 'PC/Games', desc: 'PC Games' },
      { id: '618', cat: 'Console/PS4', desc: 'Playstation' },
      { id: '619', cat: 'Console/Xbox', desc: 'Xbox' },
      { id: '620', cat: 'Console/Wii', desc: 'Wii' },
      { id: '621', cat: 'Other', desc: 'Others' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep', 'imdbid'],
      'movie-search': ['imdbid'],
    },
  },
  login: {
    path: 'login.php',
    method: 'form',
    form: 'form[action="takelogin.php"]',
    captcha: {
      type: 'image',
      selector: 'img[alt="CAPTCHA"]',
      input: 'imagestring',
    },
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
