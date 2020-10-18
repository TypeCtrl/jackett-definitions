import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'sdkino',
  name: 'SDkino',
  description: 'SDkino is a RUSSIAN Semi-Private Torrent Tracker for MOVIES / TV',
  language: 'ru-RU',
  type: 'semi-private',
  encoding: 'WINDOWS-1251',
  links: ['http://sdkino.net/'],
  caps: {
    categorymappings: [
      { id: '1', cat: 'Movies', desc: 'Фильмы' },
      { id: '2', cat: 'TV/Anime', desc: 'Мультфильмы' },
      { id: '3', cat: 'Other', desc: 'Разное' },
      { id: '4', cat: 'TV', desc: 'Сериалы' },
    ],
    modes: { search: ['q'], 'tv-search': ['q'], 'movie-search': ['q'] },
  },
  settings: [
    { name: 'username', type: 'text', label: 'Username' },
    { name: 'password', type: 'password', label: 'Password' },
    {
      name: 'freeleech',
      type: 'checkbox',
      label: 'Search freeleech only',
      default: false,
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
    {
      name: 'striprussian',
      type: 'checkbox',
      label: 'Strip Russian Letters',
      default: false,
    },
  ],
  login: {
    path: 'takelogin.php',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [{ selector: 'td.embedded:has(div.error)' }],
    test: { path: '/', selector: 'a[href="/logout.php"]' },
  },
  search: {
    paths: [{ path: 'browse.php' }],
    keywordsfilters: [
      { name: 're_replace', args: ['(?i)(\\bS0*\\d+\\b)', ''] },
      { name: 're_replace', args: ['(?i)(\\bS0*\\d+E0*\\d+\\b)', ''] },
    ],
    inputs: {
      $raw: '{{ range .Categories }}c{{.}}=1&{{end}}',
      incldead: '{{ if .Config.freeleech }}3{{ else }}1{{ end }}',
      sort: '{{ .Config.sort }}',
      type: '{{ .Config.type }}',
      search: '{{ .Keywords }}',
    },
    rows: { selector: 'div.torrents_list > div.film' },
    fields: {
      category: {
        selector: 'div.age-of-film a[href^="/browse.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      title: {
        selector: 'div.film-description a[href^="/details.php?id="]',
        filters: [
          {
            name: 're_replace',
            args: ['[\\.\\,\\:\\-\\/\\|\\[\\]\\(\\)]', ' '],
          },
          {
            name: 're_replace',
            args: [
              '(.*)(\\d+)\\s*[CСcс]езон\\s*(\\d+)\\s*(\\d+)\\s*[CСcс]ери[ия]\\s*из\\s*\\d+(.*)',
              '$1 S$2E$3-$4 rus $5',
            ],
          },
          {
            name: 're_replace',
            args: ['(.*)(\\d+)\\s*[CСcс]езон\\s*(\\d+)\\s*(\\d+)\\s*[CСcс]ери[ия]\\s*(.*)', '$1 S$2E$3-$4 rus $5'],
          },
          {
            name: 're_replace',
            args: ['(.*)(\\d+)\\s*[CСcс]езон\\s*(\\d+)\\s[CСcс]ери[ия]\\s*из\\s*\\d+(.*)', '$1 S$2E$3 rus $4'],
          },
          {
            name: 're_replace',
            args: ['(.*)(\\d+)\\s*[CСcс]езон(.*)', '$1 S$2 rus $3'],
          },
          {
            name: 're_replace',
            args: ['(.*)(\\d+)\\s*[CСcс]]ери[ия](.*)', '$1 E$2 rus $3'],
          },
          {
            name: 're_replace',
            args: [
              '(\\([А-Яа-яЁё\\W]+\\))|(^[А-Яа-яЁё\\W\\d]+\\/ )|([а-яА-ЯЁё \\-]+,+)|([а-яА-ЯЁё]+)',
              '{{ if .Config.striprussian }}{{ else }}$1$2$3$4{{ end }}',
            ],
          },
          { name: 'replace', args: ['WEBRip', 'WEBDL'] },
          { name: 'replace', args: ['WEB DL', 'WEBDL'] },
          { name: 'replace', args: ['WEBDLRip', 'WEBDL'] },
          { name: 'replace', args: ['HDTVRip', 'HDTV'] },
        ],
      },
      details: {
        selector: 'div.film-description a[href^="/details.php?id="]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="/download.php?id="]',
        attribute: 'href',
      },
      magnet: {
        selector: 'a[href^="magnet:?xt="]',
        attribute: 'href',
        optional: true,
      },
      banner: {
        selector: 'div.film-img a img',
        attribute: 'src',
        optional: true,
      },
      date: {
        selector: 'span:has(i.fa-calendar-o)',
        filters: [
          { name: 'append', args: ' +03:00' },
          { name: 'dateparse', args: '2006.1.2 -07:00' },
        ],
      },
      files: { selector: 'span:has(i.fa-files-o)' },
      size: { selector: 'span:has(i.fa-folder-open-o)' },
      grabs: { selector: 'span:has(span.fa-check-square-o)' },
      seeders: { selector: 'span:has(i.fa-upload)' },
      leechers: { selector: 'span:has(i.fa-download)' },
      downloadvolumefactor: {
        case: {
          'span:contains("Золотой")': 0,
          'span:contains("Серебряный")': 0.5,
          '*': 1,
        },
      },
      uploadvolumefactor: { text: 1 },
      minimumratio: { text: 1 },
    },
  },
  source: 'jackett',
};
