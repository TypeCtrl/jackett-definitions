import { TopLevel } from '../definition-interface';
export const definition: TopLevel = {
  site: 'newstudio',
  name: 'Newstudio',
  description: 'Newstudio is a RUSSIAN Semi-Private site for TV',
  language: 'ru-RU',
  type: 'semi-private',
  encoding: 'UTF-8',
  links: ['http://newstudio.tv'],
  caps: {
    categorymappings: [{ id: 6, cat: 'TV', desc: 'TV series' }],
    modes: { search: ['q'], 'tv-search': ['q', 'season', 'ep'] },
  },
  login: {
    path: '/login.php',
    method: 'post',
    inputs: {
      login: 1,
      login_username: '{{ .Config.username }}',
      login_password: '{{ .Config.password }}',
    },
    error: [{ selector: 'div.alert-error' }],
    test: { path: '/', selector: 'a[href="/login.php?logout=1"]' },
  },
  search: {
    paths: [
      { path: '/tracker.php?nm={{ .Keywords}}' },
      { path: '/tracker.php?nm={{ .Keywords}}&start=50' },
      { path: '/tracker.php?nm={{ .Keywords}}&start=100' },
      { path: '/tracker.php?nm={{ .Keywords}}&start=150' },
    ],
    rows: {
      selector: 'table.well > tbody > tr:has(a[href^="./viewtopic.php?t="])',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      title: {
        selector: 'a[href^="./viewtopic.php?t="] > b',
        filters: [
          { name: 're_replace', args: ['\\b(\\d)\\b', '0$1'] },
          {
            name: 're_replace',
            args: [
              '.+Сезон\\s+(\\d+)(?:.+Серия\\s+(\\d+))*[\\s\\S]*\\/\\s+(.+)\\s+\\(\\d+\\)\\s+(\\S*)\\s*(\\w*\\d*).*',
              '$3 - S$1E$2 - rus $5 $4 newstudio',
            ],
          },
          { name: 'replace', args: ['WEBDLRip', 'WEBDL'] },
          { name: 'replace', args: ['HDTVRip', 'HDTV'] },
          { name: 'replace', args: ['E -', 'E01-99 -'] },
        ],
      },
      details: {
        selector: 'a[href^="./viewtopic.php?t="]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="./download.php?id="]',
        attribute: 'href',
      },
      banner: { selector: 'td:nth-child(3) > a > img', attribute: 'src' },
      size: { selector: 'td:nth-child(5) > a' },
      category: { text: 6 },
      date: {
        selector: 'td:nth-child(6)',
        filters: [
          { name: 're_replace', args: ['(Сегодня|Вчера|\\s|,|-)+', ' '] },
          { name: 're_replace', args: ['(Today|Yesterday|\\s|,|-)+', ' '] },
          { name: 'replace', args: ['Янв', 'Jan'] },
          { name: 'replace', args: ['Фев', 'Feb'] },
          { name: 'replace', args: ['Мар', 'Mar'] },
          { name: 'replace', args: ['Апр', 'Apr'] },
          { name: 'replace', args: ['Май', 'May'] },
          { name: 'replace', args: ['Июн', 'Jun'] },
          { name: 'replace', args: ['Июл', 'Jul'] },
          { name: 'replace', args: ['Авг', 'Aug'] },
          { name: 'replace', args: ['Сен', 'Sep'] },
          { name: 'replace', args: ['Окт', 'Oct'] },
          { name: 'replace', args: ['Ноя', 'Nov'] },
          { name: 'replace', args: ['Дек', 'Dec'] },
          { name: 'append', args: ':00 +05:00' },
          { name: 'dateparse', args: '2 Jan 06 15:04:05 -07:00' },
        ],
      },
      downloadvolumefactor: {
        case: { 'img[src="images/tor_gold.gif"]': '0', '*': '1' },
      },
      uploadvolumefactor: { text: '1' },
    },
  },
};
