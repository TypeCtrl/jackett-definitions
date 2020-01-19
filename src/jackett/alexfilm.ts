import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'alexfilm',
  name: 'AlexFilm',
  description: 'AlexFilm is a RUSSIAN Semi-Private Torrent Tracker for TV',
  language: 'ru-RU',
  type: 'semi-private',
  encoding: 'UTF-8',
  links: ['https://alexfilm.org/'],
  legacylinks: ['https://alexfilm.cc/'],
  certificates: ['9200e15406272061df1f609a0f40d76282f54295'],
  caps: {
    categorymappings: [{ id: '1', cat: 'TV', desc: 'TV' }],
    modes: { search: ['q'], 'tv-search': ['q', 'season', 'ep'] },
  },
  settings: [
    { name: 'username', type: 'text', label: 'Username' },
    { name: 'password', type: 'password', label: 'Password' },
    {
      name: 'striprussian',
      type: 'checkbox',
      label: 'Strip Russian Letters',
      default: false,
    },
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: '1',
      options: { '1': 'created', '2': 'title', '7': 'size', '10': 'seeders' },
    },
    {
      name: 'type',
      type: 'select',
      label: 'Order requested from site',
      default: '1',
      options: { '1': 'asc', '2': 'desc' },
    },
  ],
  login: {
    path: 'login.php',
    method: 'post',
    inputs: {
      login_username: '{{ .Config.username }}',
      login_password: '{{ .Config.password }}',
      autologin: 1,
      login: 'Log in',
    },
    error: [{ selector: 'div.bg-danger' }],
    test: {
      path: 'tracker.php',
      selector: 'a[href="./login.php?logout=1"]',
    },
  },
  search: {
    paths: [{ path: 'tracker.php', method: 'post' }],
    inputs: {
      prev_allw: 1,
      prev_a: 0,
      prev_dla: 0,
      prev_dlc: 0,
      prev_dld: 0,
      prev_dlw: 0,
      prev_my: 0,
      prev_new: 0,
      prev_sd: 0,
      prev_da: 1,
      prev_dc: 0,
      prev_df: 1,
      prev_ds: 0,
      prev_tor_type: 0,
      o: '{{ .Config.sort }}',
      s: '{{ .Config.type }}',
      dc: 0,
      df: 1,
      da: 1,
      ds: 0,
      tm: -1,
      sns: -1,
      srg: -1,
      nm: '{{ .Keywords }}',
      pn: '',
      allw: 1,
    },
    rows: { selector: 'tr[id^="tor_"]' },
    fields: {
      title: {
        selector: 'td a.tLink',
        filters: [
          { name: 're_replace', args: ['[\\/]+', ''] },
          { name: 'replace', args: ['-Rip', 'Rip'] },
          { name: 'replace', args: ['WEB-DL', 'WEBDL'] },
          { name: 'replace', args: ['WEBRip', 'WEBDL'] },
          { name: 're_replace', args: ['WEBDLRip', 'WEBDL'] },
          {
            name: 're_replace',
            args: [
              '(.*)[CСcс]езон\\s+(\\d+)\\s+[CСcс]ери[ия]\\s+(\\d+)[\\-](\\d+)\\s+\\((\\d+)\\)(.*)',
              '$1 S$2E$3-$4 rus $6',
            ],
          },
          {
            name: 're_replace',
            args: ['(.*)[CСcс]езон\\s+(\\d+)(.*)', '$1 S$2 rus $3'],
          },
          {
            name: 're_replace',
            args: [
              '(\\([А-Яа-яЁё\\W]+\\))|(^[А-Яа-яЁё\\W\\d]+\\/ )|([а-яА-ЯЁё \\-]+,+)|([а-яА-ЯЁё]+)',
              '{{ if .Config.striprussian }}{{ else }}$1$2$3$4{{ end }}',
            ],
          },
        ],
      },
      details: { selector: 'td a.tLink', attribute: 'href' },
      download: { selector: 'li a', attribute: 'href' },
      category: { text: 1 },
      seeders: { selector: 'td:nth-child(3) u' },
      leechers: { selector: 'td:nth-child(4) u' },
      size: { selector: 'td:nth-child(5) u' },
      date: { selector: 'td:nth-child(6) u' },
      grabs: { selector: 'td:nth-child(6) span:nth-last-child(1)' },
      downloadvolumefactor: {
        case: {
          'img[src="./styles/images/tor_gold.gif"]': 0,
          'img[src="./styles/images/tor_silver.gif"]': 0.5,
          '*': 1,
        },
      },
      uploadvolumefactor: { case: { '*': 1 } },
    },
  },
  source: 'jackett',
};
