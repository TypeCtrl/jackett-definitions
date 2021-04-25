import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'torrentland',
  name: 'Torrentland',
  description: 'Torrentland is a SPANISH Private Torrent Tracker for MOVIES / TV / GENERAL',
  language: 'es-ES',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://torrentland.li/'],
  caps: {
    categorymappings: [
      { id: '1', cat: 'Movies', desc: 'Películas' },
      { id: '2', cat: 'TV', desc: 'Series' },
      { id: '3', cat: 'TV/Anime', desc: 'Animación' },
      { id: '4', cat: 'TV/Anime', desc: 'Series Animación' },
      { id: '5', cat: 'TV/Documentary', desc: 'Documentales' },
      { id: '6', cat: 'TV/Documentary', desc: 'Series Documentales' },
      { id: '7', cat: 'TV/Sport', desc: 'Deportes' },
      { id: '8', cat: 'Audio/Video', desc: 'Videos Músicales' },
      { id: '9', cat: 'XXX', desc: '+18' },
      { id: '10', cat: 'Other', desc: 'Otros' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep', 'imdbid', 'tvdbid'],
      'movie-search': ['q', 'imdbid', 'tmdbid'],
      'music-search': ['q'],
      'book-search': ['q'],
    },
  },
  settings: [
    { name: 'username', type: 'text', label: 'Username' },
    { name: 'password', type: 'password', label: 'Password' },
    {
      name: 'freeleech',
      type: 'checkbox',
      label: 'Search freeleech only',
      default: false,
    },
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: 'created_at',
      options: {
        created_at: 'created',
        seeders: 'seeders',
        size: 'size',
        name: 'title',
      },
    },
    {
      name: 'type',
      type: 'select',
      label: 'Order requested from site',
      default: 'desc',
      options: { desc: 'desc', asc: 'asc' },
    },
  ],
  login: {
    path: 'login',
    method: 'form',
    form: 'form[action$="/login"]',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      remember: 'on',
    },
    selectorinputs: {
      _token: { selector: 'input[name="_token"]', attribute: 'value' },
    },
    error: [{ selector: 'div#ERROR_COPY' }],
  },
  search: {
    paths: [{ path: 'torrents/filter' }],
    inputs: {
      $raw: '{{ range .Categories }}categories[]={{.}}&{{end}}',
      search: '{{ if .Query.IMDBID }}{{ else }}{{ .Keywords }}{{ end }}',
      description: '',
      keywords: '',
      uploader: '',
      imdb: '{{ .Query.IMDBIDShort }}',
      tvdb: '{{ .Query.TVDBID }}',
      tmdb: '{{ .Query.TMDBID }}',
      mal: '',
      igdb: '',
      start_year: '',
      end_year: '',
      sorting: '{{ .Config.sort }}',
      direction: '{{ .Config.type }}',
      qty: 100,
      page: 0,
      view: 'list',
      freeleech: '{{ if .Config.freeleech }}1{{ else }}{{ end }}',
    },
    keywordsfilters: [{ name: 're_replace', args: ['(?i)\\bS(\\d+)', 'T$1'] }],
    rows: { selector: 'table > tbody > tr' },
    fields: {
      category: {
        selector: 'td.category-col div:nth-child(2)',
        case: {
          'span:contains("Películas")': 1,
          'span:contains("Series")': 2,
          'span:contains("Animación")': 3,
          'span:contains("Series Animación")': 4,
          'span:contains("Documentales")': 5,
          'span:contains("Series Documentales")': 6,
          'span:contains("Deportes")': 7,
          'span:contains("Videos Músicales")': 8,
          'span:contains("+18")': 9,
          'span:contains("Otros")': 10,
        },
      },
      title: {
        selector: 'a[href*="/torrents/"]:not(:contains("VOSE"))',
        optional: true,
        filters: [
          { name: 're_replace', args: ['(?i)\\bT(\\d+)', 'S$1'] },
          { name: 're_replace', args: ['UHDRip', 'BDRip'] },
          { name: 'append', args: ' SPANiSH' },
        ],
      },
      download: {
        selector: 'a[href*="/download/"]',
        attribute: 'href',
      },
      details: { selector: 'a[href*="/torrents/"]', attribute: 'href' },
      poster: {
        selector: 'div.torrent-poster img',
        attribute: 'src',
        filters: [
          { name: 'replace', args: ['&w=52&h=80', '&w=180&h=270'] },
          {
            name: 'replace',
            args: ['https://images.weserv.nl/?url=https://via.placeholder.com/52x80&w=180&h=270', ''],
          },
          {
            name: 'replace',
            args: ['https://images.weserv.nl/?url=https://via.placeholder.com/600x900&w=180&h=270', ''],
          },
        ],
      },
      size: { selector: 'td:nth-last-child(4)' },
      seeders: { selector: 'td:nth-last-child(3)' },
      leechers: { selector: 'td:nth-last-child(2)' },
      grabs: {
        selector: 'td:nth-last-child(1)',
        filters: [{ name: 'regexp', args: '(\\d+)' }],
      },
      imdb: {
        selector: 'a[href*="imdb.com/title/tt"]',
        attribute: 'href',
      },
      tmdbid: {
        selector: 'a[href*="themoviedb.org/movie/"]',
        attribute: 'href',
      },
      date: {
        selector: 'time',
        filters: [
          {
            name: 're_replace',
            args: [
              '(?i)(önce|tagasi|geleden|fa|temu|siden|há|atrás|nazpět|назад|acum|în urmă|hace|il y a|vor|преди|前|sedan)',
              ' ago',
            ],
          },
          {
            name: 're_replace',
            args: [
              '(?i)(saniye|sekundit|sekunder|secondi|sekund|segundos|sekundami|секунд|secunde|secondes|Sekunden|секунди|seconden|秒前)',
              'seconds',
            ],
          },
          {
            name: 're_replace',
            args: [
              '(?i)(minutit|minutter|minuti|minuty|minutos|минуты|минут|Minuten|минути|minuten|minuter)',
              'minutes',
            ],
          },
          {
            name: 're_replace',
            args: ['(?i)(dakika|minut|minuto|minuta|minutt|минута|Minute|minuut|分钟|分)', ' minute'],
          },
          {
            name: 're_replace',
            args: ['(?i)(tundi|timer|ore|godziny|horas|hodiny|hoden|часа|часов|ore|heures|Stunden|timmar)', 'hours'],
          },
          {
            name: 're_replace',
            args: ['(?i)(saat|tund|time|ora|godzina|hora|hodina|час|oră|heure|Stunde|uur|小时|時間|timme)', ' hour'],
          },
          {
            name: 're_replace',
            args: ['(?i)(päeva|dage|giorni|dni|dias|dny|дня|дней|zile|días|jours|Tagen|дни|dagen|dagar)', 'days'],
          },
          {
            name: 're_replace',
            args: ['(?i)(gün|päev|dag|giorno|dzień|dia|den|день|zi|día|jour|Tag|ден|天|日)', ' day'],
          },
          {
            name: 're_replace',
            args: [
              '(?i)(nädalat|uger|settimane|tygodnie|uker|semanas|týdny|недели|недель|săptămâni|semaines|Wochen|седмици|weken|veckor)',
              'weeks',
            ],
          },
          {
            name: 're_replace',
            args: [
              '(?i)(hafta|nädal|uge|settimana|tydzień|uke|semana|týden|неделю|săptămână|semaine|Woche|седмица|周|週間|vecka)',
              ' week',
            ],
          },
          { name: 're_replace', args: ['(?i) (ay)', 'month'] },
          {
            name: 're_replace',
            args: [
              '(?i)(kuud|måneder|mesi|miesiące|meses|měsíce|месяца|месяцев|luni|meses|mois|Monaten|месеца|maanden|månader)',
              'months',
            ],
          },
          {
            name: 're_replace',
            args: ['(?i)(kuu|måned|mese|miesiąc|mês|měsíc|месяц|lună|mes|Monat|месец|maand|个月|ヶ月|månad)', ' month'],
          },
          {
            name: 're_replace',
            args: ['(?i)(aastat|anni|lata|anos|roky|года|ani|años|ans|Jahren|години)', ' years'],
          },
          {
            name: 're_replace',
            args: ['(?i)(yil|aasta|år|anno|rok|ano|год|año|Jahr|година|jaar|年)', ' year'],
          },
          { name: 're_replace', args: ['(?i) (an)', 'year'] },
          { name: 're_replace', args: ['(?i)(För |und)', ''] },
          { name: 'timeago' },
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
      minimumratio: { text: 1 },
      minimumseedtime: { text: 345600 },
    },
  },
  source: 'jackett',
};
