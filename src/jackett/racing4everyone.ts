import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'racing4everyone',
  name: 'Racing4Everyone (R4E)',
  description: 'Racing4Everyone (R4E) is a Private Torrent Tracker for RACING',
  language: 'en-US',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://racing4everyone.eu/'],
  legacylinks: ['https://racing4everyone.jp/'],
  caps: {
    categorymappings: [
      { id: '1', cat: 'TV/Sport', desc: 'BTCC' },
      { id: '2', cat: 'TV/Sport', desc: 'Documentaries/TV' },
      { id: '3', cat: 'TV/Sport', desc: 'DTM' },
      { id: '22', cat: 'TV/Sport', desc: 'Formula 2' },
      { id: '23', cat: 'TV/Sport', desc: 'Formula E' },
      { id: '24', cat: 'TV/Sport', desc: 'Misc' },
      { id: '25', cat: 'TV/Sport', desc: 'Motorbikes' },
      { id: '26', cat: 'TV/Sport', desc: 'MotoGP/2/3' },
      { id: '31', cat: 'TV/Sport', desc: 'Nascar' },
      { id: '32', cat: 'TV/Sport', desc: 'Stockcars' },
      { id: '33', cat: 'TV/Sport', desc: 'Touring Cars' },
      { id: '50', cat: 'TV/Sport', desc: 'WRC' },
      { id: '53', cat: 'TV/Sport', desc: 'Open-Wheelers' },
      { id: '55', cat: 'TV/Sport', desc: 'Season Reviews' },
      { id: '56', cat: 'TV/Sport', desc: 'WRX' },
      { id: '57', cat: 'TV/Sport', desc: 'WEC' },
      { id: '58', cat: 'TV/Sport', desc: 'Formula 1 Full Seasons' },
      { id: '60', cat: 'TV/Sport', desc: 'Drag Racing' },
      { id: '61', cat: 'TV/Sport', desc: 'Rally' },
      { id: '62', cat: 'TV/Sport', desc: 'Formula 1 Testing' },
      { id: '63', cat: 'TV/Sport', desc: 'Supercars' },
      { id: '64', cat: 'TV/Sport', desc: 'Indycar Complete Seasons' },
      { id: '65', cat: 'TV/Sport', desc: 'NASCAR Complete Seasons' },
      { id: '66', cat: 'TV/Sport', desc: 'Documentaries' },
      { id: '67', cat: 'TV/Sport', desc: 'Formula 1 2019' },
      { id: '68', cat: 'TV/Sport', desc: 'Formula 1 2018-1950' },
    ],
    modes: { search: ['q'], 'tv-search': ['q', 'season', 'ep', 'imdbid'] },
  },
  login: {
    path: 'login',
    method: 'form',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      remember: 1,
    },
    error: [
      {
        selector: 'script[nonce]:contains("Error")',
        message: { selector: 'script[nonce]:contains("Error")' },
      },
    ],
    test: { path: 'torrents', selector: 'a[href$="/logout"]' },
  },
  ratio: {
    path: '/',
    selector: 'span:has(i.fa-sync-alt)',
    filters: [{ name: 'regexp', args: 'Ratio : (\\d+)' }],
  },
  search: {
    paths: [{ path: 'filterTorrents' }],
    inputs: {
      $raw: '{{range .Categories}}categories[]={{.}}&{{end}}',
      search: '{{if .Query.IMDBID}}{{else}}{{ .Keywords }}{{end}}',
      description: '',
      uploader: '',
      imdb: '{{ .Query.IMDBIDShort }}',
      tvdb: '',
      tmdb: '',
      sort: 'created_at',
      direction: 'desc',
      qty: 100,
    },
    rows: { selector: 'table > tbody > tr' },
    fields: {
      category: {
        selector: 'a[href*="/categories/"]',
        attribute: 'href',
        filters: [{ name: 'regexp', args: '/categories/.*?\\.(\\d+)' }],
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
      size: { selector: 'td:nth-last-child(4)' },
      seeders: { selector: 'td:nth-last-child(3)' },
      leechers: { selector: 'td:nth-last-child(2)' },
      grabs: {
        selector: 'td:nth-last-child(1)',
        filters: [{ name: 'regexp', args: '([\\d\\.]+)' }],
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
          'i[data-original-title="Personal Freeleech"]': '0',
          'i[data-original-title="Special Freeleech"]': '0',
          'i[data-original-title="Freeleech Token"]': '0',
          'i[data-original-title="Global FreeLeech"]': '0',
          'i[data-original-title="Freeleech"]': '0',
          'i[data-original-title="Featured"]': '0',
          '*': '1',
        },
      },
      uploadvolumefactor: {
        case: {
          'i[data-original-title="Double Upload"]': '2',
          'i[data-original-title="Global Double Upload"]': '2',
          'i[data-original-title="Featured"]': '2',
          '*': '1',
        },
      },
    },
  },
  source: 'jackett',
};
