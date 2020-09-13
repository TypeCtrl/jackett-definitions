import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'hush',
  name: 'HuSh',
  description: 'HuSh is a community-built Movie/TV/FANRES database.',
  language: 'fr-FR',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://team-hush.org/'],
  caps: {
    categorymappings: [
      { id: '1', cat: 'Movies', desc: 'Film' },
      { id: '2', cat: 'TV', desc: 'Serie' },
      { id: '3', cat: 'Movies', desc: 'Doc' },
      { id: '4', cat: 'Movies', desc: 'Dessin Anime' },
      { id: '5', cat: 'Movies', desc: 'Rlz Hush' },
      { id: '6', cat: 'Movies', desc: 'Media' },
    ],
    modes: {
      search: ['q', 'imdbid'],
      'tv-search': ['q', 'season', 'ep', 'imdbid'],
      'movie-search': ['q', 'imdbid'],
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
  ratio: {
    path: '/',
    selector: 'li:has(i.fa-sync-alt)',
    filters: [{ name: 'regexp', args: 'Ratio : (\\d+)' }],
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
      mal: '',
      igdb: '',
      sort: 'created_at',
      direction: 'desc',
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
              '(?i)(minutit|minutter|minuti|minuty|minutos|минуты|минут|Minuten|минути|minuten)',
              'minutes',
            ],
          },
          {
            name: 're_replace',
            args: [
              '(?i)(dakika|minut|minuto|minuta|minutt|минута|Minute|minuut|分钟|分)',
              ' minute',
            ],
          },
          {
            name: 're_replace',
            args: [
              '(?i)(tundi|timer|ore|godziny|horas|hodiny|hoden|часа|часов|ore|heures|Stunden)',
              'hours',
            ],
          },
          {
            name: 're_replace',
            args: [
              '(?i)(saat|tund|time|ora|godzina|hora|hodina|час|oră|heure|Stunde|uur|小时|時間)',
              ' hour',
            ],
          },
          {
            name: 're_replace',
            args: [
              '(?i)(päeva|dage|giorni|dni|dias|dny|дня|дней|zile|días|jours|Tagen|дни|dagen)',
              'days',
            ],
          },
          {
            name: 're_replace',
            args: [
              '(?i)(gün|päev|dag|giorno|dzień|dia|den|день|zi|día|jour|Tag|ден|天|日)',
              ' day',
            ],
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
            args: [
              '(?i)(kuu|måned|mese|miesiąc|mês|měsíc|месяц|lună|mes|Monat|месец|maand|个月|ヶ月)',
              ' month',
            ],
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
    },
  },
  source: 'jackett',
};
