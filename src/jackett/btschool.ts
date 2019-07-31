import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'btschool',
  name: 'BTSCHOOL',
  description: 'BTSCHOOL is a CHINESE Private Torrent Tracker for MOVIES / TV / GENERAL',
  language: 'zh-CN',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://pt.btschool.club/'],
  caps: {
    categorymappings: [
      { id: '405', cat: 'Movies', desc: '电影/Movies' },
      { id: '406', cat: 'TV', desc: '连续剧/TV-Series' },
      { id: '407', cat: 'TV/Anime', desc: '动漫/Anime' },
      { id: '408', cat: 'TV/Documentary', desc: '纪录片/Documentary' },
      { id: '412', cat: 'TV', desc: '综艺/TV-Show' },
      { id: '404', cat: 'PC', desc: '软件/Software' },
      { id: '402', cat: 'TV', desc: '资料/Education' },
      { id: '411', cat: 'PC/Games', desc: '游戏/Game' },
      { id: '409', cat: 'Audio', desc: '音乐/Music' },
      { id: '410', cat: 'TV/Sport', desc: '体育/Sports' },
      { id: '415', cat: 'Other', desc: '其他/Other' },
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
    error: [
      { selector: 'td.embedded:has(h2:contains("登錄失敗"))' },
      { selector: 'td.embedded:has(h2:contains("失败"))' },
    ],
    test: { path: 'index.php', selector: 'a[href="logout.php"]' },
  },
  search: {
    paths: [{ path: 'torrents.php' }],
    inputs: {
      $raw: '{{range .Categories}}cat{{.}}=1&{{end}}',
      search: '{{if .Query.IMDBID}}{{ .Query.IMDBID }}{{else}}{{ .Keywords }}{{end}}',
      incldead: 0,
      spstate: 0,
      inclbookmarked: 0,
      search_area: '{{ if .Query.IMDBID }}4{{else}}0{{end}}',
      search_mode: 0,
      sort: 4,
      type: 'desc',
    },
    rows: {
      selector: 'table.torrents > tbody > tr:has(table.torrentname)',
    },
    fields: {
      category: {
        selector: 'a[href^="?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      title: {
        selector: 'a[title][href^="details.php?id="]',
        attribute: 'title',
      },
      details: {
        selector: 'a[title][href^="details.php?id="]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="download.php?id="]',
        attribute: 'href',
      },
      date: {
        selector: 'td:nth-child(4) > span[title]',
        attribute: 'title',
        filters: [
          { name: 'append', args: ' +08:00' },
          { name: 'dateparse', args: '2006-01-02 15:04:05 -07:00' },
        ],
      },
      size: { selector: 'td.rowfollow:nth-child(5)' },
      seeders: { selector: 'td.rowfollow:nth-child(6)' },
      leechers: { selector: 'td.rowfollow:nth-child(7)' },
      grabs: { selector: 'td.rowfollow:nth-child(8)' },
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
