import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'shareuniversity',
  name: 'ShareUniversity',
  description: 'ShareUniversity is a Private Torrent Tracker for High Quality Nordic Content',
  language: 'en-US',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://shareuniversity.org/'],
  caps: {
    categorymappings: [
      { id: '1', cat: 'Movies' },
      { id: '8', cat: 'Movies' },
      { id: '2', cat: 'TV' },
      { id: '9', cat: 'TV' },
      { id: '12', cat: 'TV/Anime' },
      { id: '6', cat: 'Other' },
      { id: '13', cat: 'Audio/Audiobook' },
      { id: '4', cat: 'Books/Ebook' },
      { id: '5', cat: 'PC/Games' },
      { id: '11', cat: 'Movies' },
      { id: '3', cat: 'Audio' },
      { id: '10', cat: 'XXX' },
      { id: '7', cat: 'Movies' },
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
    path: 'torrents',
    selector: 'li:has(i.fa-sync-alt)',
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
      mal: '',
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
        method: 'post',
        selector: 'a[href*="/download/"]',
        attribute: 'href',
      },
      details: { selector: 'a.view-torrent', attribute: 'href' },
      comments: { selector: 'a[href*="#comments"]', attribute: 'href' },
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
          'i[data-original-title="Global Freeleech"]': '0',
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
