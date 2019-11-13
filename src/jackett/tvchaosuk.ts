import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'tvchaosuk',
  name: 'TVChaosUK',
  description: 'TV Chaos UK (TVCUK) is a Private Torrent Tracker for UK TV',
  language: 'en-UK',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://tvchaosuk.com/'],
  caps: {
    categorymappings: [
      { id: '4', cat: 'PC', desc: 'Applications' },
      { id: '29', cat: 'TV', desc: 'Comedy' },
      { id: '5', cat: 'TV/Documentary', desc: 'Documentary' },
      { id: '11', cat: 'TV', desc: 'Drama' },
      { id: '14', cat: 'TV', desc: 'Entertainment' },
      { id: '19', cat: 'TV', desc: 'Factual' },
      { id: '43', cat: 'TV', desc: 'Foreign' },
      { id: '32', cat: 'TV', desc: 'Kids/Family' },
      { id: '44', cat: 'Movies', desc: 'Movies' },
      { id: '45', cat: 'TV', desc: 'News & Current Affairs' },
      { id: '51', cat: 'Audio', desc: 'Radio' },
      { id: '30', cat: 'TV', desc: 'Soaps' },
      { id: '33', cat: 'TV', desc: 'Sci-Fi' },
      { id: '42', cat: 'TV/Sport', desc: 'Sport' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep', 'imdbid'],
      'movie-search': ['q', 'imdbid'],
    },
  },
  login: {
    path: 'login',
    method: 'form',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      remember: 'on',
    },
    error: [
      {
        selector: 'script[nonce]:contains("Error")',
        message: { selector: 'script[nonce]:contains("Error")' },
      },
    ],
    test: { path: '/', selector: 'a[href$="/logout"]' },
  },
  ratio: {
    path: '/',
    selector: 'li:has(i.fa-sync-alt)',
    filters: [{ name: 'regexp', args: 'Ratio : (\\d+)' }],
  },
  search: {
    paths: [{ path: 'torrents/filter' }],
    inputs: {
      $raw: '{{range .Categories}}categories[]={{.}}&{{end}}',
      search: '{{if .Query.IMDBID}}{{else}}{{ .Keywords }}{{end}}',
      description: '',
      uploader: '',
      imdb: '{{ .Query.IMDBIDShort }}',
      tvdb: '',
      tmdb: '',
      mal: '',
      igdb: '',
      sort: 'created_at',
      direction: 'desc',
      qty: 100,
    },
    rows: { selector: 'table > tbody > tr' },
    fields: {
      category: {
        selector: 'a[href*="/categories/"]',
        attribute: 'href',
        filters: [{ name: 'regexp', args: '/categories/(\\d+)' }],
      },
      title: { selector: 'a.view-torrent' },
      download: {
        selector: 'a[href*="/download/"]',
        attribute: 'href',
      },
      details: { selector: 'a.view-torrent', attribute: 'href' },
      banner: {
        optional: true,
        selector: 'div.torrent-poster img',
        attribute: 'src',
        filters: [
          {
            name: 'replace',
            args: ['https://via.placeholder.com/600x900', ''],
          },
        ],
      },
      comments: { selector: 'a[href*="#comments"]', attribute: 'href' },
      size: { selector: 'td:nth-last-child(4)' },
      seeders: { selector: 'td:nth-last-child(3)' },
      leechers: { selector: 'td:nth-last-child(2)' },
      grabs: {
        selector: 'td:nth-last-child(1)',
        filters: [{ name: 'regexp', args: '(\\d+)' }],
      },
      imdb: {
        optional: true,
        selector: 'a[href*="www.imdb.com/title/tt"]',
        attribute: 'href',
      },
      date: {
        selector: 'time',
        filters: [
          {
            name: 're_replace',
            args: [
              '(önce|tagasi|geleden|fa|temu|siden|atrás|nazpět|назад|acum|hace|il y a|vor|преди)',
              'ago',
            ],
          },
          {
            name: 're_replace',
            args: ['(dakika|minut|minuto|minuta|minutt|минута|Minute|minuut)', 'minute'],
          },
          {
            name: 're_replace',
            args: [
              '(dakika|minutit|minutter|minuti|minuty|minutos|минуты|минут|Minuten|минути|minuten)',
              'minutes',
            ],
          },
          {
            name: 're_replace',
            args: ['(saat|tund|time|ora|godzina|hora|hodina|час|oră|heure|Stunde|uur)', 'hour'],
          },
          {
            name: 're_replace',
            args: [
              '(saat|tundi|timer|ore|godziny|horas|hodiny|hoden|часа|часов|ore|heures|Stunden)',
              'hours',
            ],
          },
          {
            name: 're_replace',
            args: ['(gün|päev|dag|giorno|dzień|dia|den|день|zi|día|jour|Tag|ден)', 'day'],
          },
          {
            name: 're_replace',
            args: [
              '(gün|päeva|dage|giorni|dni|dias|dny|дня|дней|zile|días|jours|Tagen|дни|dagen)',
              'days',
            ],
          },
          {
            name: 're_replace',
            args: [
              '(hafta|nädal|uge|settimana|tydzień|uke|semana|týden|неделю|săptămână|semaine|Woche|седмица)',
              'week',
            ],
          },
          {
            name: 're_replace',
            args: [
              '(hafta|nädalat|uger|settimane|tygodnie|uker|semanas|týdny|недели|недель|săptămâni|semaines|Wochen|седмици|weken)',
              'weeks',
            ],
          },
          {
            name: 're_replace',
            args: [
              ' (ay|kuu|måned|mese|miesiąc|mês|měsíc|месяц|lună|mes|mois|Monat|месец|maand)',
              'month',
            ],
          },
          {
            name: 're_replace',
            args: [
              ' (ay|kuud|måneder|mesi|miesiące|meses|měsíce|месяца|месяцев|luni|meses|mois|Monaten|месеца|maanden)',
              'months',
            ],
          },
        ],
      },
      downloadvolumefactor: {
        case: {
          'i[class*="fa-id-badge text-orange"]': 0,
          'i[class*="fa-trophy text-purple"]': 0,
          'i[class*="fa-star text-bold"]': 0,
          'i[class*="fa-coins text-bold"]': 0,
          'i[class*="fa-globe text-blue"]': 0,
          'i[class*="fa-star text-gold"]': 0,
          'i[class*="fa-certificate text-pink"]': 0,
          '*': 1,
        },
      },
      uploadvolumefactor: {
        case: {
          'i[class*="fa-gem text-green"]': 2,
          'i[class*="fa-globe text-green"]': 2,
          'i[class*="fa-certificate text-pink"]': 2,
          '*': 1,
        },
      },
    },
  },
  source: 'jackett',
};
