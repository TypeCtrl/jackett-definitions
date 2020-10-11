import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'rintornet',
  name: 'RinTor.NeT',
  description: 'RinTor.NeT is a RUSSIAN Public tracker for 3X',
  language: 'ru-RU',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://www.rintor.net/'],
  caps: {
    categorymappings: [
      {
        id: '20',
        cat: 'XXX',
        desc: 'Сайтрипы UHD 2160 4K | Porn Video UHD 2160p 4K',
      },
      {
        id: '1',
        cat: 'XXX',
        desc: "Сайтрипы, Фильмы HD | SiteRip's, Movies HD",
      },
      { id: '9', cat: 'XXX', desc: "Сайтрипы | SiteRip's" },
      {
        id: '12',
        cat: 'XXX',
        desc: 'DVDRip | WEB-DL | WEBRip | VHSRip | CamRip',
      },
      {
        id: '10',
        cat: 'XXX',
        desc: 'Любительское видео | Amateur Video',
      },
      {
        id: '24',
        cat: 'XXX',
        desc: 'Инцест (Инсценировка) | Incest (Simulation)',
      },
      { id: '22', cat: 'XXX', desc: 'Лесбиянки | Lesbians' },
      { id: '26', cat: 'XXX', desc: 'Порно Кастинг | Porno Casting' },
      {
        id: '23',
        cat: 'XXX',
        desc: 'Ретро Порно, Классика | Classic Porn, Retro',
      },
      {
        id: '21',
        cat: 'XXX',
        desc: 'Женское Доминирование, Страпон | Femdom, StrapOn',
      },
      {
        id: '17',
        cat: 'XXX',
        desc: 'БДСМ, Фистинг, Дилдо | BDSM, Fisting, Dildo',
      },
      { id: '19', cat: 'XXX', desc: 'Беременные | Pregnant' },
      {
        id: '16',
        cat: 'XXX',
        desc: 'Транссексуалы | Shemale Transsexual',
      },
      { id: '25', cat: 'XXX', desc: 'Мочеиспускание | Peeing' },
      {
        id: '11',
        cat: 'XXX',
        desc: 'Подборки сетов | Picture Sets Packs',
      },
      {
        id: '14',
        cat: 'XXX',
        desc: 'Порно Мультфильмы | Porno Cartoons',
      },
      { id: '13', cat: 'XXX', desc: 'Порно Игры | Porn Games' },
      {
        id: '15',
        cat: 'XXX',
        desc: 'Гей и Бисекс Порно | Gay and Bisex Porn',
      },
    ],
    modes: { search: ['q'], 'tv-search': ['q'], 'movie-search': ['q'] },
  },
  settings: [],
  download: { selector: 'a[href^="magnet:?xt="]', attribute: 'href' },
  search: {
    paths: [{ path: 'index.php' }],
    inputs: {
      do: 'search',
      subaction: 'search',
      story: '{{ if .Keywords }}{{ .Keywords }}{{ else }}{{ .Today.Year }}{{ end }}',
      titleonly: 3,
      sortby: 'date',
      resorder: 'desc',
      showposts: 0,
      $raw: '{{ range .Categories }}catlist[]={{.}}&{{end}}',
    },
    rows: { selector: 'div.entry' },
    fields: {
      category: {
        selector: 'div.entry__info',
        case: {
          'a:last-of-type:contains("2160p")': 20,
          'a:last-of-type:contains("HD")': 1,
          'a:last-of-type:contains("SiteRip")': 9,
          'a:last-of-type:contains("WEBRip")': 12,
          'a:last-of-type:contains("Amateur")': 10,
          'a:last-of-type:contains("Incest")': 24,
          'a:last-of-type:contains("Lesbians")': 22,
          'a:last-of-type:contains("Casting")': 26,
          'a:last-of-type:contains("Classic")': 23,
          'a:last-of-type:contains("Femdom")': 21,
          'a:last-of-type:contains("BDSM")': 17,
          'a:last-of-type:contains("Pregnant")': 19,
          'a:last-of-type:contains("Shemale")': 16,
          'a:last-of-type:contains("Peeing")': 25,
          'a:last-of-type:contains("Picture")': 11,
          'a:last-of-type:contains("Cartoons")': 14,
          'a:last-of-type:contains("Games")': 13,
          'a:last-of-type:contains("Gay")': 15,
        },
      },
      title: { selector: 'div.h2 > a' },
      details: { selector: 'div.h2 > a', attribute: 'href' },
      download: { selector: 'div.h2 > a', attribute: 'href' },
      banner: {
        selector: 'div.entry_content a.entry__content-image img',
        attribute: 'src',
        optional: true,
      },
      date: {
        selector: 'span.entry__date:contains("-")',
        optional: true,
        filters: [{ name: 'dateparse', args: '2-01-2006, 15:04' }],
      },
      size: { text: '1 GB' },
      seeders: { text: 1 },
      leechers: { text: 1 },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
