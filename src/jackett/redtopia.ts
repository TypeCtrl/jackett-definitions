import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'redtopia',
  name: 'Redtopia',
  description: 'Tracker Music/Podcasts/Audiobooks',
  language: 'en-US',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://redtopia.xyz/'],
  caps: {
    categorymappings: [
      { id: '1', cat: 'Audio', desc: 'Studio Album' },
      { id: '2', cat: 'Audio', desc: 'Studio Single' },
      { id: '3', cat: 'Audio', desc: 'Studio Collection' },
      { id: '4', cat: 'Audio', desc: 'Indie Album' },
      { id: '5', cat: 'Audio', desc: 'Indie Single' },
      { id: '6', cat: 'Audio', desc: 'Indie Collection' },
      { id: '7', cat: 'Audio', desc: 'Live Album' },
      { id: '8', cat: 'Audio', desc: 'OST' },
      { id: '9', cat: 'Audio', desc: 'Podcast' },
      { id: '10', cat: 'Audio', desc: 'Audio Book' },
      { id: '11', cat: 'Audio', desc: 'Audio Drama' },
    ],
    modes: { search: ['q'], 'music-search': ['q'] },
  },
  login: {
    path: 'login',
    method: 'form',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [{ selector: 'form[action*="/login"] .text-red' }],
    test: { path: 'torrents' },
  },
  search: {
    paths: [{ path: 'filterTorrents' }],
    inputs: {
      $raw: '{{range .Categories}}categories[]={{.}}&{{end}}',
      search: '{{ .Keywords }}',
      uploader: '',
      sorting: 'created_at',
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
      size: { selector: 'td:nth-child(4)' },
      seeders: { selector: 'td:nth-child(6)' },
      leechers: { selector: 'td:nth-child(7)' },
      grabs: {
        selector: 'td:nth-child(5)',
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
              '(ay|kuu|måned|mese|miesiąc|mês|měsíc|месяц|lună|mes|mois|Monat|месец|maand)',
              'month',
            ],
          },
          {
            name: 're_replace',
            args: [
              '(ay|kuud|måneder|mesi|miesiące|meses|měsíce|месяца|месяцев|luni|meses|mois|Monaten|месеца|maanden)',
              'months',
            ],
          },
        ],
      },
      downloadvolumefactor: {
        case: {
          'i[data-original-title="100% Free"]': '0',
          'i[data-original-title="Global FreeLeech"]': '0',
          '*': '1',
        },
      },
      uploadvolumefactor: {
        case: {
          'i[data-original-title="Double Upload"]': '2',
          'i[data-original-title="Double upload"]': '2',
          '*': '1',
        },
      },
    },
  },
  source: 'jackett',
};
