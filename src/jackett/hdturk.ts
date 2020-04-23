import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'hdturk',
  name: 'HDTurk',
  description: 'HDTurk is a TURKISH Private Torrent Tracker for MOVIES / TV / GENERAL',
  language: 'tr-TR',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://hdturk.de/'],
  legacylinks: ['http://hdturk.de/'],
  caps: {
    categorymappings: [
      { id: '37', cat: 'Other', desc: 'Diğer' },
      { id: '210', cat: 'Books/Ebook', desc: 'E-Kitap' },
      { id: '208', cat: 'Other', desc: 'Eğitim' },
      { id: '101', cat: 'Other', desc: 'Resim' },
      { id: '15', cat: 'TV', desc: 'TV Dizi/Show/Spor' },
      { id: '18', cat: 'TV', desc: 'TV Dublaj' },
      { id: '81', cat: 'TV', desc: 'TV Show' },
      { id: '207', cat: 'TV/Sport', desc: 'TV Spor' },
      { id: '17', cat: 'TV', desc: 'TV Yabancı' },
      { id: '16', cat: 'TV', desc: 'TV Yerli' },
      { id: '19', cat: 'TV/HD', desc: 'TV Yerli HD' },
      { id: '170', cat: 'Movies/HD', desc: 'Movies HD' },
      { id: '174', cat: 'Movies/3D', desc: 'Movies 3D DUAL' },
      { id: '180', cat: 'Movies/3D', desc: 'Movies 3D TR' },
      { id: '181', cat: 'Movies/3D', desc: 'Movies 3D Yabancı' },
      { id: '217', cat: 'Movies/UHD', desc: 'Movies 4K DUAL' },
      { id: '218', cat: 'Movies/UHD', desc: 'Movies 4K TR' },
      { id: '216', cat: 'Movies/UHD', desc: 'Movies 4K Yabancı' },
      { id: '205', cat: 'Movies/DVD', desc: 'Movies DVD DUAL' },
      { id: '206', cat: 'Movies/DVD', desc: 'Movies DVD TR/Yerli' },
      { id: '219', cat: 'Movies/DVD', desc: 'Movies DVD Yabancı' },
      { id: '173', cat: 'Movies/BluRay', desc: 'Movies Full BD' },
      { id: '175', cat: 'Movies/HD', desc: 'Movies Remux DUAL' },
      { id: '183', cat: 'Movies/HD', desc: 'Movies Remux Yabancı' },
      { id: '171', cat: 'Movies/HD', desc: 'Movies x264 DUAL' },
      { id: '176', cat: 'Movies/HD', desc: 'Movies x264 TR' },
      { id: '177', cat: 'Movies/HD', desc: 'Movies x264 Yabancı' },
      { id: '172', cat: 'Movies/HD', desc: 'Movies x265 DUAL' },
      { id: '178', cat: 'Movies/HD', desc: 'Movies x265 TR' },
      { id: '179', cat: 'Movies/HD', desc: 'Movies x265 Yabancı' },
      { id: '198', cat: 'Movies/HD', desc: 'Movies XviD DUAL' },
      { id: '200', cat: 'Movies/HD', desc: 'Movies XviD TR' },
      { id: '202', cat: 'Movies/HD', desc: 'Movies XviD Yabancı' },
      { id: '33', cat: 'Audio', desc: 'MÜZİK' },
      { id: '34', cat: 'Audio', desc: 'MÜZİK Albüm' },
      { id: '35', cat: 'Audio', desc: 'MÜZİK Diskografi' },
      { id: '98', cat: 'Audio', desc: 'MÜZİK Single' },
      { id: '36', cat: 'Audio/Video', desc: 'MÜZİK Video' },
      { id: '56', cat: 'Console', desc: 'OYUN' },
      { id: '59', cat: 'Console', desc: 'Konsol' },
      { id: '58', cat: 'Console', desc: 'Mobil/PDA' },
      { id: '57', cat: 'PC/Games', desc: 'PC' },
      { id: '52', cat: 'PC', desc: 'PROGRAM' },
      { id: '54', cat: 'PC/Mac', desc: 'Apple' },
      { id: '55', cat: 'PC', desc: 'Mobil/PDA' },
      { id: '53', cat: 'PC/0day', desc: 'WINDOWS' },
      { id: '182', cat: 'Movies/SD', desc: 'SD' },
      { id: '191', cat: 'Movies/SD', desc: 'x264 DUAL' },
      { id: '192', cat: 'Movies/SD', desc: 'x264 TR' },
      { id: '193', cat: 'Movies/SD', desc: 'x264 Yabancı' },
      { id: '194', cat: 'Movies/SD', desc: 'x265 DUAL' },
      { id: '195', cat: 'Movies/SD', desc: 'x265 TR' },
      { id: '196', cat: 'Movies/SD', desc: 'x265 Yabancı' },
      { id: '201', cat: 'Movies/SD', desc: 'XviD DUAL' },
      { id: '197', cat: 'Movies/SD', desc: 'XviD TR' },
      { id: '199', cat: 'Movies/SD', desc: 'XviD Yabancı' },
      { id: '221', cat: 'Other', desc: 'VIP' },
      { id: '85', cat: 'XXX', desc: 'XXX' },
      { id: '92', cat: 'XXX', desc: 'XXX E-Magazin' },
      { id: '93', cat: 'XXX', desc: 'XXX Movie' },
      { id: '95', cat: 'XXX', desc: 'XXX Packs' },
      { id: '96', cat: 'XXX', desc: 'XXX Pics' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
      'music-search': ['q'],
    },
  },
  login: {
    path: 'login.php',
    method: 'form',
    form: 'form[action$="takelogin.php"]',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    captcha: {
      type: 'image',
      selector: 'img#regimage2',
      input: 'imagestring',
    },
    error: [{ selector: 'table:contains("Bir hata oluştu!")' }],
    test: {
      path: 'index.php',
      selector: 'a[href*="/logout.php?logouthash="]',
    },
  },
  ratio: {
    path: 'index.php',
    selector: 'div#top div:nth-child(2) span:nth-child(2)',
    filters: [{ name: 'regexp', args: 'Ratio: (.+?) Bonus:' }],
  },
  search: {
    paths: [{ path: 'browse.php' }],
    keywordsfilters: [{ name: 're_replace', args: ['(?i)\\bE(\\d+)\\b', 'E$1'] }],
    inputs: {
      do: 'search',
      keywords: '{{.Keywords}}',
      category: 0,
      search_type: 't_name',
      include_dead_torrents: 'yes',
    },
    rows: {
      selector: 'table#sortabletable tbody tr:has(div[id^="port-target-"])',
    },
    fields: {
      title: {
        selector: 'div[id^="port-target-"] a',
        filters: [{ name: 're_replace', args: ['(?i)\\bBL(\\d+)\\b', ' E$1 '] }],
      },
      details: {
        selector: 'div[id^="port-target-"] a',
        attribute: 'href',
      },
      category: {
        selector: 'a[href*="browse.php?category="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'category' }],
      },
      banner: {
        selector: 'div[id^="port-content-"] img',
        attribute: 'src',
      },
      date: {
        selector: 'td:nth-child(2)',
        filters: [{ name: 'dateparse', args: '02-01-2006 15:04' }],
      },
      download: {
        selector: 'a[href*="download.php?id="]',
        attribute: 'href',
      },
      comments: { selector: 'td:nth-child(4) a', attribute: 'href' },
      size: { selector: 'td:nth-child(5)' },
      grabs: { selector: 'td:nth-child(6)' },
      seeders: { selector: 'td:nth-child(7)' },
      leechers: { selector: 'td:nth-child(8)' },
      downloadvolumefactor: {
        case: {
          'img[src$="/freedownload.gif"]': '0',
          'img[src$="/silverdownload.gif"]': '0.5',
          '*': '1',
        },
      },
      uploadvolumefactor: {
        case: { 'img[src$="/x2.gif"]': '2', '*': '1' },
      },
    },
  },
  source: 'jackett',
};
