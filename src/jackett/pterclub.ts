import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'pterclub',
  name: 'PTerClub',
  description:
    'PTerClub is a CHINESE Private Torrent Tracker for HD MUSIC VIDEOS, MOVIES, TV & ANIME',
  language: 'zh-CN',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://pterclub.com/'],
  caps: {
    categorymappings: [
      { id: '401', cat: 'Movies', desc: '电影 (Movie)' },
      { id: '404', cat: 'TV', desc: '电视剧 (TV Play)' },
      { id: '403', cat: 'TV/Anime', desc: '动漫 (Anime)' },
      { id: '405', cat: 'TV', desc: '综艺 (TV Show)' },
      { id: '413', cat: 'Audio/Video', desc: '音乐短片 (MV)' },
      { id: '406', cat: 'Audio', desc: '音乐 (Music)' },
      { id: '402', cat: 'TV/Documentary', desc: '纪录片 (Documentary)' },
      { id: '407', cat: 'TV/Sport', desc: '体育 (Sport)' },
      { id: '408', cat: 'Books', desc: '电子书 (Ebook)' },
      { id: '409', cat: 'Console', desc: '游戏 (Game)' },
      { id: '410', cat: 'PC', desc: '软件 (Software)' },
      { id: '411', cat: 'Other', desc: '学习 (Study)' },
      { id: '412', cat: 'Other', desc: '其它 (Other)' },
    ],
    modes: {
      search: ['q', 'imdbid'],
      'tv-search': ['q', 'season', 'ep', 'imdbid'],
      'movie-search': ['q', 'imdbid'],
      'music-search': ['q'],
    },
  },
  settings: [
    { name: 'username', type: 'text', label: 'Username' },
    { name: 'password', type: 'password', label: 'Password' },
    { name: '2facode', type: 'text', label: '2FA code' },
    {
      name: 'info_2fa',
      type: 'info',
      label: 'About 2FA code',
      default:
        'Only fill in the <b>2FA code</b> box if you have enabled <b>2FA</b> on the PTerClub Web Site. Otherwise just leave it empty.',
    },
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: '4',
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
    captcha: {
      type: 'image',
      selector: 'img[alt="CAPTCHA"]',
      input: 'imagestring',
    },
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      verify_code: '{{ .Config.2facode }}',
      ssl: 'yes',
    },
    error: [
      { selector: 'td.embedded:has(h2:contains("失败"))' },
      { selector: 'td.embedded:has(h2:contains("登录失败"))' },
    ],
    test: { path: 'index.php', selector: 'a[data-url="logout.php"]' },
  },
  search: {
    paths: [{ path: 'torrents.php' }],
    inputs: {
      $raw: '{{ range .Categories }}cat{{.}}=1&{{end}}',
      search: '{{ if .Query.IMDBID }}{{ .Query.IMDBID }}{{else}}{{ .Keywords }}{{end}}',
      incldead: 0,
      spstate: 0,
      search_area: '{{ if .Query.IMDBID }}4{{else}}0{{end}}',
      search_mode: 0,
      sort: '{{ .Config.sort }}',
      type: '{{ .Config.type }}',
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
        optional: true,
        selector: 'a[title][href^="details.php?id="]',
        attribute: 'title',
      },
      details: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="download.php?id="]',
        attribute: 'href',
      },
      banner: {
        selector: 'img[data-orig]',
        attribute: 'data-orig',
        optional: true,
      },
      imdb: {
        optional: true,
        selector: 'a[href*="www.imdb.com/title/tt"]',
        attribute: 'href',
      },
      date: {
        selector: 'td.rowfollow:nth-last-of-type(6):not(:has(span))',
        optional: true,
        filters: [
          { name: 'append', args: ' +08:00' },
          { name: 'dateparse', args: '2006-01-0215:04:05 -07:00' },
        ],
      },
      size: { selector: 'td.rowfollow:nth-last-of-type(5)' },
      seeders: { selector: 'td.rowfollow:nth-last-of-type(4)' },
      leechers: { selector: 'td.rowfollow.rowfollow:nth-last-of-type(3)' },
      grabs: { selector: 'td.rowfollow:nth-last-of-type(2)' },
      downloadvolumefactor: {
        case: {
          'img.pro_free': 0,
          'img.pro_free2up': 0,
          'img.pro_50pctdown': 0.5,
          'img.pro_50pctdown2up': 0.5,
          'img.pro_30pctdown': 0.3,
          '*': 1,
        },
      },
      uploadvolumefactor: {
        case: {
          'img.pro_50pctdown2up': 2,
          'img.pro_free2up': 2,
          'img.pro_2up': 2,
          '*': 1,
        },
      },
      description: { selector: 'td:nth-child(2)', remove: 'a, img' },
    },
  },
  source: 'jackett',
};
