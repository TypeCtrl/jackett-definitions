import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'rapidzona',
  name: 'Rapidzona',
  description: 'Rapidzona is a RUSSIAN Public Torrent Tracker for 3X',
  language: 'ru-RU',
  type: 'public',
  encoding: 'WINDOWS-1251',
  links: ['https://rapidzona.tv/'],
  caps: {
    categorymappings: [
      { id: '71', cat: 'XXX', desc: 'Релизы' },
      { id: '73', cat: 'XXX', desc: '   Ролики и сцены' },
      { id: '106', cat: 'XXX', desc: '      Любительское порно' },
      { id: '107', cat: 'XXX', desc: '      Сцены из фильмов' },
      { id: '133', cat: 'XXX', desc: '      Anal & DP' },
      { id: '146', cat: 'XXX', desc: '      Секс втроем' },
      { id: '127', cat: 'XXX', desc: '      Сисястые' },
      { id: '134', cat: 'XXX', desc: '      Группавуха' },
      { id: '114', cat: 'XXX', desc: '      Русские девочки' },
      { id: '130', cat: 'XXX', desc: '      Latin & Ebony' },
      { id: '128', cat: 'XXX', desc: '      Азиатки' },
      { id: '124', cat: 'XXX', desc: '      Межрасовый секс' },
      { id: '131', cat: 'XXX', desc: '      Молоденькие' },
      { id: '132', cat: 'XXX', desc: '      Мамочки' },
      { id: '112', cat: 'XXX', desc: '      Кастинг / Casting' },
      { id: '115', cat: 'XXX', desc: '      Public & Reality' },
      { id: '142', cat: 'XXX', desc: '      Taboo / Incest' },
      { id: '141', cat: 'XXX', desc: '      Лесбийский страпон' },
      { id: '111', cat: 'XXX', desc: '      Лесбо-Ролики' },
      { id: '144', cat: 'XXX', desc: '      Фистинг и Дилдо' },
      { id: '109', cat: 'XXX', desc: '      BDSM-Ролики' },
      { id: '110', cat: 'XXX', desc: '      Fetish-Ролики' },
      { id: '145', cat: 'XXX', desc: '      Femdom-Ролики' },
      { id: '143', cat: 'XXX', desc: '      Skinny & Petite' },
      { id: '138', cat: 'XXX', desc: '      BBW / Толстушки' },
      { id: '136', cat: 'XXX', desc: '      Оральный секс' },
      { id: '113', cat: 'XXX', desc: '      Соло и мастурбация' },
      { id: '140', cat: 'XXX', desc: '      Ролики от LegalPorno' },
      { id: '126', cat: 'XXX', desc: '      Паки порнороликов' },
      { id: '72', cat: 'XXX', desc: '   Полнометражные фильмы' },
      { id: '120', cat: 'XXX', desc: '      Без сюжета' },
      { id: '118', cat: 'XXX', desc: '      Классика' },
      { id: '116', cat: 'XXX', desc: '      Порно с сюжетом' },
      { id: '119', cat: 'XXX', desc: '      Порно-пародия' },
      { id: '117', cat: 'XXX', desc: '      С Русским переводом' },
      { id: '137', cat: 'XXX', desc: '      Отечественное порно' },
      { id: '121', cat: 'XXX', desc: '      Этнические фильмы' },
      { id: '123', cat: 'XXX', desc: '      Лесбо-фильмы' },
      { id: '139', cat: 'XXX', desc: '      Fetish - фильмы' },
      { id: '122', cat: 'XXX', desc: '      BDSM - фильмы' },
      { id: '125', cat: 'XXX', desc: '      Эротика 18+' },
      { id: '129', cat: 'XXX', desc: '      Документальное 18+' },
      { id: '93', cat: 'XXX', desc: '   Анимация и Хентай' },
      { id: '87', cat: 'XXX', desc: '   Images & Wallpaper' },
      { id: '105', cat: 'XXX', desc: '   Порно игры' },
    ],
    modes: { search: ['q'], 'tv-search': ['q'], 'movie-search': ['q'] },
  },
  settings: [
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: 'date',
      options: { date: 'created', title: 'title' },
    },
    {
      name: 'type',
      type: 'select',
      label: 'Order requested from site',
      default: 'desc',
      options: { desc: 'desc', asc: 'asc' },
    },
  ],
  download: {
    selector: 'a[href*="/download.php?id="]',
    attribute: 'href',
  },
  search: {
    paths: [{ path: 'index.php' }],
    inputs: {
      $raw: '{{ range .Categories }}catlist[]={{.}}&{{end}}',
      do: 'search',
      subaction: 'search',
      showposts: 1,
      titleonly: 3,
      story: '{{ if .Keywords }}{{ .Keywords }}{{ else }}2020{{ end }}',
      sortby: '{{ .Config.sort }}',
      resorder: '{{ .Config.type }}',
    },
    rows: { selector: 'div.post' },
    fields: {
      category: {
        selector: 'p a:nth-child(3), p:has(a:nth-child(3):empty) a:nth-child(2)',
        case: {
          'a[href$="/porno-xxx-adult-torrent/"]': 71,
          'a[href$="/porno-video-movies-torrent/"]': 73,
          'a[href$="/amateur/"]': 106,
          'a[href$="/scenes-from-movies/"]': 107,
          'a[href$="/anal/"]': 133,
          'a[href$="/threesomes/"]': 146,
          'a[href$="/big-boobs/"]': 127,
          'a[href$="/group/"]': 134,
          'a[href$="/russian/"]': 114,
          'a[href$="/latin/"]': 130,
          'a[href$="/asian/"]': 128,
          'a[href$="/interracial-xxx/"]': 124,
          'a[href$="/teens/"]': 131,
          'a[href$="/milf/"]': 132,
          'a[href$="/casting/"]': 112,
          'a[href$="/public-reality/"]': 115,
          'a[href$="/taboo/"]': 142,
          'a[href$="/lesbi-strapon/"]': 141,
          'a[href$="/lesbian/"]': 111,
          'a[href$="/fisting-and-dildo/"]': 144,
          'a[href$="/bdsm/"]': 109,
          'a[href$="/fetish/"]': 110,
          'a[href$="/femdom/"]': 145,
          'a[href$="/skinny-petite/"]': 143,
          'a[href$="/bbw/"]': 138,
          'a[href$="/blowjob/"]': 136,
          'a[href$="/solo/"]': 113,
          'a[href$="/legalporno/"]': 140,
          'a[href$="/packs/"]': 126,
          'a[href$="/porno-films-torrent/"]': 72,
          'a[href$="/gonzo/"]': 120,
          'a[href$="/classic/"]': 118,
          'a[href$="/feature/"]': 116,
          'a[href$="/parody/"]': 119,
          'a[href$="/russian-lang/"]': 117,
          'a[href$="/russian-porn/"]': 137,
          'a[href$="/interracial/"]': 121,
          'a[href$="/all-girl-lesbian/"]': 123,
          'a[href$="/fetish-movies/"]': 139,
          'a[href$="/bdsm-and-bondage/"]': 122,
          'a[href$="/erotic-movies/"]': 125,
          'a[href$="/documentary/"]': 129,
          'a[href$="/porno-hentai-anime-torrent/"]': 93,
          'a[href$="/porno-foto-torrent/"]': 87,
          'a[href$="/porno-games-torrent/"]': 105,
          '*': 71,
        },
      },
      title: { selector: 'h1 > a' },
      details: { selector: 'h1 > a', attribute: 'href' },
      download: { selector: 'h1 > a', attribute: 'href' },
      size: { text: '500 MB' },
      seeders: { text: 1 },
      leechers: { text: 1 },
      description: { selector: 'div.news' },
      date: {
        selector: 'p.title-footer',
        filters: [
          {
            name: 'regexp',
            args: '(\\d{1,2}\\/\\d{2}\\/\\d{4} \\d{1,2}\\:\\d{2})',
          },
          { name: 'dateparse', args: '02/01/2006 15:04' },
        ],
      },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
