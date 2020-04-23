import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'kinonavse100',
  name: 'KinoNaVse100',
  description: 'Кино на все 100 is a RUSSIAN Semi-Private Torrent Tracker for MOVIES / TV / MUSIC',
  language: 'ru-RU',
  type: 'semi-private',
  encoding: 'UTF-8',
  links: ['http://kinonavse100.com/'],
  caps: {
    categorymappings: [
      { id: '1', cat: 'Other', desc: 'Трекер' },
      {
        id: '113',
        cat: 'Other',
        desc: 'Трекер Сбор средств на перевод фильмов',
      },
      { id: '123', cat: 'Other', desc: 'Трекер Фильмы в работе' },
      {
        id: '109',
        cat: 'Movies',
        desc: 'Трекер Эксклюзивы Кино на все 100',
      },
      { id: '61', cat: 'Movies', desc: 'Трекер Зарубежное кино' },
      {
        id: '62',
        cat: 'Movies',
        desc: 'Трекер Зарубежное кино Новинки кино 2014-2016',
      },
      { id: '63', cat: 'Movies', desc: 'Трекер Зарубежное кино Боевики' },
      {
        id: '70',
        cat: 'Movies',
        desc: 'Трекер Зарубежное кино Триллеры',
      },
      { id: '71', cat: 'Movies', desc: 'Трекер Зарубежное кино Ужасы' },
      {
        id: '72',
        cat: 'Movies',
        desc: 'Трекер Зарубежное кино Катастрофы',
      },
      {
        id: '73',
        cat: 'Movies',
        desc: 'Трекер Зарубежное кино Приключения',
      },
      {
        id: '74',
        cat: 'Movies',
        desc: 'Трекер Зарубежное кино Фантастика, Фэнтези',
      },
      { id: '75', cat: 'Movies', desc: 'Трекер Зарубежное кино Комедии' },
      {
        id: '76',
        cat: 'Movies',
        desc: 'Трекер Зарубежное кино Драмы, Мелодрамы',
      },
      {
        id: '77',
        cat: 'Movies',
        desc: 'Трекер Зарубежное кино Криминал',
      },
      {
        id: '78',
        cat: 'Movies',
        desc: 'Трекер Зарубежное кино Детективы',
      },
      { id: '85', cat: 'Movies', desc: 'Трекер Зарубежное кино Военные' },
      { id: '86', cat: 'Movies', desc: 'Трекер Зарубежное кино Вестерн' },
      {
        id: '87',
        cat: 'Movies',
        desc: 'Трекер Зарубежное кино Арт-хаус и авторское кино',
      },
      {
        id: '95',
        cat: 'Movies',
        desc: 'Трекер Зарубежное кино Короткий метр',
      },
      {
        id: '88',
        cat: 'Movies',
        desc: 'Трекер Зарубежное кино Классика мирового кино',
      },
      {
        id: '108',
        cat: 'Movies',
        desc: 'Трекер Зарубежное кино Мультфильмы',
      },
      { id: '111', cat: 'TV', desc: 'Трекер Зарубежное кино Сериалы' },
      { id: '110', cat: 'Movies', desc: 'Трекер Российское кино' },
      { id: '112', cat: 'TV', desc: 'Tрекер Российское кино Сериалы' },
      { id: '21', cat: 'TV', desc: 'Tрекер HDvideo' },
      { id: '64', cat: 'TV', desc: 'Tрекер HDvideo Blu-ray' },
      { id: '65', cat: 'TV', desc: 'Tрекер HDvideo BD-Remux' },
      { id: '69', cat: 'TV', desc: 'Tрекер HDvideo HD-Video в 3D' },
      { id: '89', cat: 'TV', desc: 'Tрекер Зомби' },
      { id: '96', cat: 'TV', desc: 'Tрекер Зомби Зомби каталог' },
      { id: '106', cat: 'TV', desc: 'Tрекер Зомби Сериалы' },
      { id: '122', cat: 'TV/Anime', desc: 'Tрекер Аниме' },
      { id: '115', cat: 'Audio', desc: 'Музыка' },
      { id: '116', cat: 'Audio', desc: 'Музыка Популярная музыка' },
      { id: '117', cat: 'Audio', desc: 'Музыка Рок-музыка' },
      { id: '118', cat: 'Audio', desc: 'Музыка Электронная музыка' },
      {
        id: '119',
        cat: 'Audio',
        desc: 'Музыка Джазовая и Блюзовая музыка',
      },
      { id: '98', cat: 'Other', desc: 'Фильмографии' },
      { id: '91', cat: 'Other', desc: 'Кино Новости' },
      { id: '92', cat: 'Other', desc: 'Кино Новости Новости мира кино' },
      { id: '93', cat: 'Other', desc: 'Кино Новости КиноПлощадка' },
      { id: '94', cat: 'Other', desc: 'Кино Новости КиноТрейлеры' },
      { id: '79', cat: 'Other', desc: 'Форум и общение' },
      {
        id: '97',
        cat: 'Other',
        desc: 'Форум и общение Рецензии фильмов',
      },
      {
        id: '80',
        cat: 'Other',
        desc: 'Форум и общение Общение на разные темы',
      },
      {
        id: '81',
        cat: 'Other',
        desc: 'Форум и общение Компьютеры, железо и софт',
      },
      { id: '82', cat: 'Other', desc: 'Форум и общение Советы и помощь' },
      { id: '83', cat: 'Other', desc: 'Технический раздел' },
      {
        id: '84',
        cat: 'Other',
        desc: 'Технический раздел Вопросы по трекеру и форуму',
      },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
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
      default: 't',
      options: { t: 'created', ts: 'seeders', sz: 'size', i: 'title' },
    },
    {
      name: 'type',
      type: 'select',
      label: 'Order requested from site',
      default: 'd',
      options: { d: 'desc', a: 'asc' },
    },
  ],
  login: {
    path: 'ucp.php?mode=login',
    method: 'form',
    form: 'form[action="./ucp.php?mode=login"]',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      autologin: 'on',
      viewonline: 'on',
    },
    error: [{ selector: 'span.error' }],
    test: { path: 'search.php' },
  },
  search: {
    paths: [{ path: 'search.php' }],
    inputs: {
      tracker_search: 'torrent',
      keywords: '{{ if .Keywords }}{{ .Keywords }}{{else}}{{ .Today.Year }}{{end}}',
      terms: 'all',
      author: '',
      sc: 1,
      sf: 'titleonly',
      sr: 'topics',
      sk: '{{ .Config.sort }}',
      sd: '{{ .Config.type }}',
      st: 0,
      ch: 300,
      t: 0,
      submit: 'Search',
      $raw: '{{range .Categories}}&fid[]={{.}}{{end}}',
    },
    rows: {
      selector: 'table.tablebg > tbody > tr:has(a[href^="./download/file.php?id="])',
    },
    fields: {
      title: { selector: 'a.topictitle' },
      details: { selector: 'a.topictitle', attribute: 'href' },
      category: {
        selector: 'a[href^="./viewforum.php?f="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'f' }],
      },
      download: {
        selector: 'a[href^="./download/file.php?id="]',
        attribute: 'href',
      },
      size: {
        selector: 'a[href^="./viewforum.php?f="] + b',
        filters: [
          { name: 'replace', args: ['ТБ', 'TB'] },
          { name: 'replace', args: ['ГБ', 'GB'] },
          { name: 'replace', args: ['МБ', 'MB'] },
          { name: 'replace', args: ['КБ', 'KB'] },
        ],
      },
      seeders: { selector: 'span.seed' },
      leechers: { selector: 'span.leech' },
      grabs: { selector: 'span.complet' },
      date: {
        selector:
          'td:last-of-type p:first-of-type:not(:contains("Сегодня")):not(:contains("Вчера"))',
        optional: true,
        filters: [
          { name: 'replace', args: ['янв', 'Jan'] },
          { name: 'replace', args: ['фев', 'Feb'] },
          { name: 'replace', args: ['мар', 'Mar'] },
          { name: 'replace', args: ['апр', 'Apr'] },
          { name: 'replace', args: ['май', 'May'] },
          { name: 'replace', args: ['июн', 'Jun'] },
          { name: 'replace', args: ['июл', 'Jul'] },
          { name: 'replace', args: ['авг', 'Aug'] },
          { name: 'replace', args: ['сен', 'Sep'] },
          { name: 'replace', args: ['окт', 'Oct'] },
          { name: 'replace', args: ['ноя', 'Nov'] },
          { name: 'replace', args: ['дек', 'Dec'] },
          { name: 'dateparse', args: '02 Jan 2006, 15:04' },
        ],
      },
      downloadvolumefactor: {
        case: {
          'img[src="./images/tracker/3_bookmark.gif"]': 0,
          'img[src="./images/tracker/2_bookmark.gif"]': 0.25,
          'img[src="./images/tracker/1_bookmark.gif"]': 0.76,
          '*': 1,
        },
      },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
