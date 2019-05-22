import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'uniongang',
  name: 'UnionGang',
  description: 'UnionGang is a RUSSIAN Private Torrent Tracker for MOVIES / GENERAL',
  language: 'ru-RU',
  type: 'private',
  encoding: 'WINDOWS-1251',
  links: ['https://www.uniongang.net/'],
  caps: {
    categorymappings: [
      { id: '1', cat: 'Movies', desc: 'Movies SATRip / DVDRip / HDRip' },
      {
        id: '21',
        cat: 'Movies/WEBDL',
        desc: 'Movies WEB-DLRip / WEB-DL',
      },
      { id: '2', cat: 'Movies/HD', desc: 'Movies x264' },
      { id: '3', cat: 'Movies/DVD', desc: 'Movies DVD5' },
      { id: '4', cat: 'Movies/DVD', desc: 'Movies DVD9' },
      {
        id: '5',
        cat: 'Movies/HD',
        desc: 'Movies BDRemux / 720p / 1080p / Bl',
      },
      { id: '6', cat: 'TV', desc: 'TV Сериал' },
      { id: '7', cat: 'TV/Documentary', desc: 'TV Документальный' },
      { id: '19', cat: 'TV/Sport', desc: 'TV Спорт' },
      { id: '8', cat: 'XXX', desc: 'XXX Эротика' },
      { id: '9', cat: 'TV', desc: 'Мультфильм' },
      { id: '10', cat: 'TV', desc: 'КВН Юмор' },
      { id: '11', cat: 'PC', desc: 'Игра PC' },
      { id: '13', cat: 'Audio', desc: 'Музыка / Русская' },
      { id: '14', cat: 'Audio', desc: 'Музыка / Зарубежная' },
      { id: '15', cat: 'Audio/Video', desc: 'Видеоклип' },
      { id: '16', cat: 'Audio/Audiobook', desc: 'Аудиокнига' },
      { id: '20', cat: 'Movies/3D', desc: 'Movies 3D' },
      { id: '23', cat: 'Movies/UHD', desc: 'Movies 4K' },
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
    error: [{ selector: 'div.error' }],
    test: { path: '/', selector: 'a[href="/logout.php"]' },
  },
  search: {
    paths: [{ path: 'browse.php' }],
    inputs: {
      $raw: '{{range .Categories}}c{{.}}=1&{{end}}',
      search: '{{ .Keywords }}',
      incldead: 1,
      dsearch: '',
    },
    rows: {
      selector: 'table.embedded > tbody > tr:has(a[href^="download.php?id="])',
    },
    fields: {
      title: {
        selector: 'a[href^="/torrent-"]',
        filters: [
          {
            name: 're_replace',
            args: [
              '(\\([А-Яа-я\\W]+\\))|(^[А-Яа-я\\W\\d]+\\/ )|([а-яА-Я \\-]+,+)|([а-яА-Я]+)',
              '{{ if .Config.striprussian }}{{ else }}$1$2$3$4{{ end }}',
            ],
          },
        ],
      },
      details: { selector: 'a[href^="/torrent-"]', attribute: 'href' },
      category: {
        selector: 'a[href^="browse.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      download: {
        selector: 'a[href^="download.php?id="]',
        attribute: 'href',
      },
      date: {
        selector: 'i',
        filters: [{ name: 'dateparse', args: '2006-01-02 15:04:05' }],
      },
      files: { selector: 'td:nth-last-child(5)' },
      size: { selector: 'td:nth-last-child(3)' },
      seeders: {
        selector: 'td:nth-last-child(2)',
        filters: [{ name: 'split', args: ['|', 0] }],
      },
      leechers: {
        selector: 'td:nth-last-child(2)',
        filters: [{ name: 'split', args: ['|', 1] }],
      },
      grabs: { selector: 'td:nth-last-child(1)' },
      downloadvolumefactor: {
        case: {
          'img[src="pic/freedownload.gif"]': '0',
          'img[src="pic/silverdownload.gif"]': '0.5',
          '*': '1',
        },
      },
      uploadvolumefactor: { text: '1' },
    },
  },
  source: 'jackett',
};
