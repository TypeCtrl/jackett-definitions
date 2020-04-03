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
      { id: '2', cat: 'TV/Sport', desc: 'Documentaries TV' },
      { id: '3', cat: 'TV/Sport', desc: 'DTM' },
      { id: '22', cat: 'TV/Sport', desc: 'Formula 2' },
      { id: '23', cat: 'TV/Sport', desc: 'Formula E' },
      { id: '24', cat: 'TV/Sport', desc: 'Misc' },
      { id: '25', cat: 'TV/Sport', desc: 'Other Bikes' },
      { id: '26', cat: 'TV/Sport', desc: 'MotoGP 2-3-E' },
      { id: '31', cat: 'TV/Sport', desc: 'Nascar' },
      { id: '32', cat: 'TV/Sport', desc: 'Stock Car Brazil' },
      { id: '50', cat: 'TV/Sport', desc: 'WRC' },
      { id: '55', cat: 'TV/Sport', desc: 'Season Reviews' },
      { id: '56', cat: 'TV/Sport', desc: 'WRX' },
      { id: '57', cat: 'TV/Sport', desc: 'WEC' },
      { id: '58', cat: 'TV/Sport', desc: 'W Series' },
      { id: '60', cat: 'TV/Sport', desc: 'Drag Racing' },
      { id: '61', cat: 'TV/Sport', desc: 'ERC' },
      { id: '62', cat: 'TV/Sport', desc: 'Indycar Series' },
      { id: '63', cat: 'TV/Sport', desc: 'Supercars' },
      { id: '66', cat: 'TV/Sport', desc: 'Documentaries' },
      { id: '67', cat: 'TV/Sport', desc: 'Formula 1' },
      { id: '68', cat: 'TV/Sport', desc: 'Formula 3' },
      { id: '69', cat: 'TV/Sport', desc: 'Other Cars' },
      { id: '70', cat: 'TV/Sport', desc: 'Motorsport Movies' },
      { id: '71', cat: 'TV/Sport', desc: 'WSBK' },
      { id: '72', cat: 'TV/Sport', desc: 'AMA Pro Motocross' },
      { id: '73', cat: 'TV/Sport', desc: 'AMA Supercross' },
      { id: '74', cat: 'TV/Sport', desc: 'WTCR' },
      { id: '76', cat: 'TV/Sport', desc: 'ARCA' },
      { id: '77', cat: 'TV/Sport', desc: 'Blancpain GT' },
      { id: '78', cat: 'TV/Sport', desc: 'Porsche Supercup' },
      { id: '79', cat: 'TV/Sport', desc: 'TV Series' },
      { id: '80', cat: 'TV/Sport', desc: 'Touring Cars' },
    ],
    modes: {
      search: ['q', 'imdbid'],
      'tv-search': ['q', 'season', 'ep', 'imdbid'],
    },
  },
  settings: [
    { name: 'username', type: 'text', label: 'Username' },
    { name: 'password', type: 'password', label: 'Password' },
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
  ratio: {
    path: '/',
    selector: 'li:has(i.fa-sync-alt)',
    filters: [{ name: 'regexp', args: 'Ratio : (\\d+)' }],
  },
  search: {
    paths: [{ path: 'torrents/filter' }],
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
            args: ['(?i)(dakika|minut|minuto|minuta|minutt|минута|Minute|minuut|分钟)', ' minute'],
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
              '(?i)(saat|tund|time|ora|godzina|hora|hodina|час|oră|heure|Stunde|uur|小时)',
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
            args: ['(?i)(gün|päev|dag|giorno|dzień|dia|den|день|zi|día|jour|Tag|ден|天)', ' day'],
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
              '(?i)(hafta|nädal|uge|settimana|tydzień|uke|semana|týden|неделю|săptămână|semaine|Woche|седмица|周)',
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
              '(?i)(kuu|måned|mese|miesiąc|mês|měsíc|месяц|lună|mes|Monat|месец|maand|个月)',
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
