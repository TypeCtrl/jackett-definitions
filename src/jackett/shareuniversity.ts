import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'shareuniversity',
  name: 'ShareUniversity',
  description: 'ShareUniversity is a Private Torrent Tracker for High Quality Nordic Content',
  language: 'en-US',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://shareuniversity.org/'],
  certificates: ['bc8d87bd28d61e24c4c1ee6c6a4105e4cc298380'],
  caps: {
    categorymappings: [
      { id: '1', cat: 'Movies', desc: 'Movies' },
      { id: '8', cat: 'Movies', desc: 'Movies Boxset' },
      { id: '2', cat: 'TV', desc: 'TV' },
      { id: '9', cat: 'TV', desc: 'TV Boxset' },
      { id: '12', cat: 'TV', desc: 'TV Series' },
      { id: '21', cat: 'TV', desc: 'TV Series Boxset' },
      { id: '6', cat: 'PC', desc: 'Appz' },
      { id: '13', cat: 'Audio/Audiobook', desc: 'AudioBooks' },
      { id: '4', cat: 'Books/Ebook', desc: 'E-Books' },
      { id: '16', cat: 'Other', desc: 'Elearning' },
      { id: '5', cat: 'Console', desc: 'Games' },
      { id: '19', cat: 'Movies', desc: 'Kids Movies' },
      { id: '20', cat: 'TV', desc: 'Kids Tv' },
      { id: '3', cat: 'Audio', desc: 'Music' },
      { id: '10', cat: 'XXX', desc: 'XXX' },
      { id: '18', cat: 'Movies', desc: 'Not Nordic Movies' },
      { id: '17', cat: 'TV', desc: 'Not Nordic TV' },
      { id: '22', cat: 'TV/Anime', desc: 'Anime Movies' },
      { id: '23', cat: 'TV/Anime', desc: 'Anime Shows' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep', 'imdbid'],
      'movie-search': ['q', 'imdbid'],
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
    error: [
      {
        selector: 'script[nonce]:contains("Error")',
        message: { selector: 'script[nonce]:contains("Error")' },
      },
    ],
  },
  search: {
    paths: [{ path: 'filterTorrents' }],
    inputs: {
      $raw: '{{ range .Categories }}categories[]={{.}}&{{end}}',
      search: '{{ if .Query.IMDBID }}{{else}}{{ .Keywords }}{{end}}',
      description: '',
      uploader: '',
      imdb: '{{ .Query.IMDBIDShort }}',
      tvdb: '',
      tmdb: '',
      sorting: '{{ .Config.sort }}',
      sort: '{{ .Config.sort }}',
      direction: '{{ .Config.type }}',
      qty: 100,
      freeleech: '{{ if .Config.freeleech }}1{{ else }}{{ end }}',
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
      poster: {
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
        filters: [{ name: 'regexp', args: '(\\d+)' }],
      },
      imdb: {
        optional: true,
        selector: 'a[href*="imdb.com/title/tt"]',
        attribute: 'href',
      },
      date: {
        selector: 'time',
        filters: [
          {
            name: 're_replace',
            args: [
              '(?i)(önce|tagasi|geleden|fa|temu|siden|há|atrás|nazpět|назад|acum|în urmă|hace|il y a|vor|преди|前)',
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
            args: ['(?i)(minutit|minutter|minuti|minuty|minutos|минуты|минут|Minuten|минути|minuten)', 'minutes'],
          },
          {
            name: 're_replace',
            args: ['(?i)(dakika|minut|minuto|minuta|minutt|минута|Minute|minuut|分钟|分)', ' minute'],
          },
          {
            name: 're_replace',
            args: ['(?i)(tundi|timer|ore|godziny|horas|hodiny|hoden|часа|часов|ore|heures|Stunden)', 'hours'],
          },
          {
            name: 're_replace',
            args: ['(?i)(saat|tund|time|ora|godzina|hora|hodina|час|oră|heure|Stunde|uur|小时|時間)', ' hour'],
          },
          {
            name: 're_replace',
            args: ['(?i)(päeva|dage|giorni|dni|dias|dny|дня|дней|zile|días|jours|Tagen|дни|dagen)', 'days'],
          },
          {
            name: 're_replace',
            args: ['(?i)(gün|päev|dag|giorno|dzień|dia|den|день|zi|día|jour|Tag|ден|天|日)', ' day'],
          },
          {
            name: 're_replace',
            args: [
              '(?i)(nädalat|uger|settimane|tygodnie|uker|semanas|týdny|недели|недель|săptămâni|semaines|Wochen|седмици|weken)',
              'weeks',
            ],
          },
          {
            name: 're_replace',
            args: [
              '(?i)(hafta|nädal|uge|settimana|tydzień|uke|semana|týden|неделю|săptămână|semaine|Woche|седмица|周|週間)',
              ' week',
            ],
          },
          { name: 're_replace', args: ['(?i) (ay)', 'month'] },
          {
            name: 're_replace',
            args: [
              '(?i)(kuud|måneder|mesi|miesiące|meses|měsíce|месяца|месяцев|luni|meses|mois|Monaten|месеца|maanden)',
              'months',
            ],
          },
          {
            name: 're_replace',
            args: ['(?i)(kuu|måned|mese|miesiąc|mês|měsíc|месяц|lună|mes|Monat|месец|maand|个月|ヶ月)', ' month'],
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
      minimumseedtime: { text: 172800 },
    },
  },
  source: 'jackett',
};
