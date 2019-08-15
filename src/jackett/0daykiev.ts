import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: '0daykiev',
  name: '0day.kiev',
  description: '0day.kiev.ua is a RUSSIAN Private Torrent Tracker for MOVIES / TV / GENERAL',
  language: 'ru-RU',
  type: 'private',
  encoding: 'WINDOWS-1251',
  links: ['https://tracker.0day.kiev.ua/'],
  caps: {
    categorymappings: [
      { id: '10', cat: 'Movies', desc: 'Фильмы (Movies)' },
      { id: '11', cat: 'TV', desc: 'Мультфильмы (Cartoons)' },
      { id: '29', cat: 'TV', desc: 'Мультсериалы (TV Series)' },
      { id: '34', cat: 'TV/Anime', desc: 'Аниме (Anime)' },
      {
        id: '20',
        cat: 'TV/Documentary',
        desc: 'Документальное (Documentary)',
      },
      { id: '14', cat: 'Audio', desc: 'Музыка / Аудио (Music / Audio)' },
      {
        id: '15',
        cat: 'Audio/Video',
        desc: 'Музыка / Видео (Music / Video)',
      },
      { id: '16', cat: 'Movies/HD', desc: 'HD / Фильмы (HD / Movies)' },
      {
        id: '27',
        cat: 'TV/HD',
        desc: 'HD / Мультфильмы (HD / Cartoons)',
      },
      {
        id: '28',
        cat: 'TV/HD',
        desc: 'HD / Документальное (HD / Documentary)',
      },
      {
        id: '41',
        cat: 'Movies/3D',
        desc: 'HD / 3D видео (HD / 3D video)',
      },
      { id: '47', cat: 'Movies', desc: 'HDv 0day Team' },
      { id: '17', cat: 'PC/Games', desc: 'Игры / ПК (Games / PC)' },
      {
        id: '25',
        cat: 'Console/Xbox360',
        desc: 'Игры / XBOX360 (Games / XBOX360)',
      },
      {
        id: '33',
        cat: 'Console/PSP',
        desc: 'Игры / PSP - PS2 (Games / PSP - PS2)',
      },
      { id: '37', cat: 'Console/PS3', desc: 'Игры / PS3 (Games / PS3)' },
      {
        id: '18',
        cat: 'PC/0day',
        desc: 'Софт / Windows (Software / Windows)',
      },
      {
        id: '39',
        cat: 'PC/Mac',
        desc: 'Mac OS (Софт / Игры) (Mac OS (Software / Games))',
      },
      { id: '19', cat: 'TV', desc: 'TV / Сериалы (TV shows)' },
      { id: '30', cat: 'TV/HD', desc: 'HD / Сериалы (HD / TV Shows)' },
      { id: '23', cat: 'TV', desc: 'TV / Передачи (TV / Broadcasts)' },
      { id: '22', cat: 'TV/Sport', desc: 'Спорт (Sports)' },
      { id: '31', cat: 'Other', desc: 'Прочее (Other)' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
  },
  settings: [
    { name: 'username', type: 'text', label: 'Username' },
    { name: 'password', type: 'password', label: 'Password' },
    {
      name: 'striprussian',
      type: 'checkbox',
      label: 'Strip Russian Letters',
      default: true,
    },
  ],
  login: {
    path: 'takelogin.php',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      returnto: '/browse.php',
    },
    error: [
      {
        selector: 'div.maintitle:contains("Ошибка")',
        message: { selector: 'div.borderwrap table.embedded' },
      },
    ],
    test: { path: 'browse.php', selector: 'a[href="/logout.php"]' },
  },
  search: {
    paths: [{ path: 'browse.php' }],
    keywordsfilters: [
      { name: 'diacritics', args: 'replace' },
      { name: 're_replace', args: ['(?i)\\bS0*(\\d+)\\b', 'езон $1'] },
      {
        name: 're_replace',
        args: ['(?i)\\bS0*(\\d+)E0*(\\d+)\\b', 'езон $1 ерии $2'],
      },
    ],
    inputs: {
      $raw: '{{range .Categories}}c{{.}}=1&{{end}}',
      search: '{{ .Keywords }}',
      incldead: 1,
      where: 0,
    },
    rows: { selector: 'table > tbody > tr.rowtorrentinfo' },
    fields: {
      category: {
        selector: 'a[href^="browse.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      title: {
        selector: 'a[href^="details.php?id="]',
        filters: [
          { name: 're_replace', args: ['[\\:\\-\\/\\|]', ' '] },
          { name: 'replace', args: ['Кураж Бамбей', 'kurazh'] },
          { name: 'replace', args: ['Кубик в Кубе', 'Kubik'] },
          { name: 'replace', args: ['Кравец', 'Kravec'] },
          {
            name: 're_replace',
            args: [
              '(.*)\\([CСcс]езон\\s+(\\d+)\\)\\s+[CСcс]ери[ия]\\s+(\\d+)\\s+(\\d+)(.*)',
              '$1 S$2E$3-$4 rus $5',
            ],
          },
          {
            name: 're_replace',
            args: ['(.*)\\([CСcс]езон\\s+(\\d+)\\)(.*)', '$1 S$2 rus $3'],
          },
          {
            name: 're_replace',
            args: [
              '(\\([А-Яа-я\\W]+\\))|(^[А-Яа-я\\W\\d]+\\/ )|([а-яА-Я \\-]+,+)|([а-яА-Я]+)',
              '{{ if .Config.striprussian }}{{ else }}$1$2$3$4{{ end }}',
            ],
          },
          { name: 'replace', args: ['WEB DL', 'WEBDL'] },
          { name: 'replace', args: ['WEBDLRip', 'WEBDL'] },
        ],
      },
      details: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="download.php?id="]',
        attribute: 'href',
      },
      date: {
        selector: 'td:nth-child(2) i',
        filters: [{ name: 'dateparse', args: '2006-01-02 15:04:05' }],
      },
      size: {
        selector: 'td:nth-child(4)',
        filters: [
          { name: 'replace', args: ['.', ''] },
          { name: 'replace', args: [',', '.'] },
          { name: 'replace', args: ['ТБ', 'TB'] },
          { name: 'replace', args: ['ГБ', 'GB'] },
          { name: 'replace', args: ['МБ', 'MB'] },
          { name: 'replace', args: ['КБ', 'KB'] },
        ],
      },
      grabs: {
        selector: 'td:nth-child(5)',
        filters: [{ name: 'regexp', args: '(\\d+)' }],
      },
      seeders: {
        selector: 'td:nth-child(6)',
        filters: [{ name: 'split', args: ['|', 0] }],
      },
      leechers: {
        selector: 'td:nth-child(6)',
        filters: [{ name: 'split', args: ['|', 1] }],
      },
      downloadvolumefactor: {
        case: {
          'img[src="pic/freedownload.gif"]': 0,
          'img[src="pic/silverdownload.gif"]': 0.5,
          '*': 1,
        },
      },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};