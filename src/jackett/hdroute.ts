import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'hdroute',
  name: 'HDRoute',
  description: 'HDRoute is a CHINESE Private Torrent Tracker for HD MOVIES / TV',
  language: 'zh-CN',
  type: 'private',
  encoding: 'UTF-8',
  links: ['http://hdroute.org/'],
  caps: {
    categorymappings: [
      { id: '1', cat: 'Movies', desc: '电影 (Movies)' },
      { id: '2', cat: 'TV/Documentary', desc: '演示/纪录片 (Demo/Docu)' },
      { id: '3', cat: 'TV', desc: '连续剧 (TV)' },
      { id: '4', cat: 'TV/Anime', desc: '动画片 (Animation)' },
      { id: '5', cat: 'Audio/Video', desc: '演唱会/MV (Music Video)' },
      { id: '6', cat: 'TV/Sport', desc: '体育节目 (Sports)' },
      { id: '7', cat: 'Audio/Other', desc: '电影音轨 (Soundtracks' },
      { id: '8', cat: 'Audio/Lossless', desc: '无损音乐 (Lossless)' },
      { id: '9', cat: 'Other', desc: '其他 (Other)' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep', 'imdbid'],
      'movie-search': ['q', 'imdbid'],
    },
  },
  login: {
    path: 'login.php?action=login',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [{ selector: ':contains("用户不存在")' }, { selector: ':contains("密码错误")' }],
    test: { path: 'index.php' },
  },
  search: {
    paths: [{ path: 'browse.php' }],
    inputs: {
      $raw: '{{ range .Categories }}c{{.}}=1&{{end}}',
      s: '{{ if .Query.IMDBID }}{{else}}{{ .Keywords }}{{end}}',
      dp: 0,
      add: 0,
      or: 1,
      action: 's',
      imdb: '{{ if .Query.IMDBID }}{{ .Query.IMDBIDShort }}{{else}}{{end}}',
    },
    rows: {
      selector: 'div#unsticky-torrent-table dl, div#sticky-torrent-table dl',
    },
    fields: {
      category: { text: 9 },
      title: { selector: 'div.torrent_title' },
      details: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
        filters: [{ name: 'replace', args: ['details.php', 'download.php'] }],
      },
      size: { selector: 'div.torrent_size' },
      date: {
        selector: 'div.torrent_added',
        filters: [{ name: 'dateparse', args: '2006-01-0215:04:05' }],
      },
      imdb: {
        selector: 'div.torrent-imdb',
        attribute: 'href',
        optional: true,
      },
      banner: {
        selector: 'div.introForPic img',
        attribute: 'src',
        optional: true,
        filters: [{ name: 'replace', args: ['./img/theme1/default.jpg', ''] }],
      },
      seeders: { selector: 'div.torrent-content-right div:nth-child(5)' },
      leechers: { selector: 'div.torrent-content-right div:nth-child(6)' },
      downloadvolumefactor: {
        case: {
          'figure.sprite_tempo_free': 0,
          'figure.sprite_dlp100': 0,
          'figure.sprite_dlp000': 0,
          'figure.sprite_dlp070': 0.7,
          'figure.sprite_dlp050': 0.5,
          'figure.sprite_dlp030': 0.3,
          '*': 1,
        },
      },
      uploadvolumefactor: { case: { '*': 1 } },
    },
  },
  source: 'jackett',
};
