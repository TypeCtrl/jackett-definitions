import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'haidan',
  name: 'HaiDan',
  description: 'HaiDan is a CHINESE Private Torrent Tracker for HD MOVIES / TV',
  language: 'zh-CN',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://www.haidan.video/'],
  legacylinks: ['https://www.haidan.cc/'],
  caps: {
    categorymappings: [
      { id: '404', cat: 'TV/Documentary', desc: 'Documentaries(纪录片)' },
      { id: '401', cat: 'Movies', desc: 'Movies(电影)' },
      { id: '405', cat: 'TV/Anime', desc: 'Animations(动画片)' },
      { id: '402', cat: 'TV', desc: 'TV Series(电视剧)' },
      { id: '403', cat: 'TV', desc: 'TV Shows(综艺)' },
      { id: '406', cat: 'Audio/Video', desc: 'Music Videos(MV)' },
      { id: '407', cat: 'TV/Sport', desc: 'Sports(体育)' },
      { id: '409', cat: 'Other', desc: 'Misc(其他)' },
      { id: '408', cat: 'Audio', desc: 'HQ Audio(音乐)' },
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
    {
      name: 'info_tpp',
      type: 'info',
      label: 'Results Per Page',
      default:
        'For best results, change the <b>Torrents per page:</b> setting to <b>100</b> on your account profile.',
    },
    {
      name: 'info_indexer',
      type: 'info',
      label: 'Alert',
      default:
        'HaiDan has switched to a <b>group</b> torrent list, which means this Indexer can only display the first item in each group.<br>This <b>yml</b> Indexer will eventually be re-written in c# as soon as a c# dev volunteers, to display all items in a group.',
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
      logout: '',
      securelogin: '',
      ssl: 'yes',
      trackerssl: 'yes',
    },
    error: [{ selector: 'td.embedded:has(h2:contains("失败"))' }],
    test: { path: 'index.php', selector: 'a[href*="logout.php"]' },
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
      selector: 'div.torrent_panel > div.torrent_group > div.group_content',
    },
    fields: {
      category: {
        selector: 'a[href^="?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      year: {
        optional: true,
        selector: 'div.video_year',
        filters: [{ name: 'replace', args: ['年份:', ' '] }],
      },
      _title: { selector: 'a.video_name_str' },
      title: { text: '{{ .Result._title }}{{ .Result.year }}' },
      details: { selector: 'a.video_name_str', attribute: 'href' },
      download: {
        selector: 'a[href^="download.php?id="]',
        attribute: 'href',
      },
      description: {
        optional: true,
        selector: 'div.torrent_name_col > a',
      },
      banner: {
        optional: true,
        selector: 'img#poster',
        attribute: 'data-src',
      },
      date: {
        selector: 'div.time_col:not(:has(span))',
        optional: true,
        filters: [
          { name: 'append', args: ' +08:00' },
          { name: 'dateparse', args: '2006-01-02 15:04:05 -07:00' },
        ],
      },
      size: {
        selector: 'div.group > div.video_size, div.torrent_item > div.video_size',
      },
      seeders: {
        selector: 'div.group > div.seeder_col, div.torrent_item > div.seeder_col',
      },
      leechers: {
        selector: 'div.group > div.leecher_col, div.torrent_item > div.leecher_col',
      },
      grabs: {
        selector: 'div.group > div.snatched_col, div.torrent_item > div.snatched_col',
      },
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
    },
  },
  source: 'jackett',
};
