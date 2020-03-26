import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'shareisland',
  name: 'Shareisland',
  description: 'A general italian tracker',
  language: 'it-IT',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://shareisland.org/'],
  legacylinks: ['http://shareisland.org/', 'http://www.shareisland.org/'],
  caps: {
    categorymappings: [
      { id: '1', cat: 'Movies/HD', desc: 'Movie 1080p' },
      { id: '5', cat: 'Movies/HD', desc: 'Movie 720p' },
      { id: '6', cat: 'Movies/UHD', desc: 'Movie 4K-Ultra-HD' },
      { id: '9', cat: 'Movies/BluRay', desc: 'Movie BluRay Full' },
      { id: '8', cat: 'Movies/SD', desc: 'Movie BDRip' },
      { id: '10', cat: 'Movies/DVD', desc: 'Movie DVD-9' },
      { id: '11', cat: 'Movies/DVD', desc: 'Movie DVD-5' },
      { id: '12', cat: 'Movies/DVD', desc: 'Movie DVD-Rip' },
      { id: '13', cat: 'Movies/SD', desc: 'Movie Divx' },
      { id: '14', cat: 'Movies', desc: 'Movie CineCam' },
      { id: '25', cat: 'Movies/Foreign', desc: 'Movie Lingua Originale' },
      { id: '4', cat: 'TV/HD', desc: 'Serie TV HD' },
      { id: '2', cat: 'TV/SD', desc: 'Serie TV SD' },
      { id: '20', cat: 'TV/Anime', desc: 'Anime' },
      { id: '22', cat: 'TV/Anime', desc: 'Cartoons' },
      { id: '15', cat: 'Books/Ebook', desc: 'Ebook' },
      { id: '17', cat: 'Books', desc: 'Riviste e Giornali' },
      { id: '18', cat: 'Books', desc: 'Fumetti' },
      { id: '19', cat: 'XXX', desc: 'Fumetti XXX' },
      { id: '3', cat: 'Audio', desc: 'Music' },
      { id: '7', cat: 'PC/Games', desc: 'Games PC' },
      { id: '21', cat: 'Console/Xbox', desc: 'Games XboX' },
      { id: '16', cat: 'Console/PS3', desc: 'Games PS3' },
      { id: '23', cat: 'PC', desc: 'Programmi PC' },
      { id: '24', cat: 'PC/Mac', desc: 'Applicazioni Mac' },
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
      mal: '',
      igdb: '',
      sorting: '{{ .Config.sort }}',
      sort: '{{ .Config.sort }}',
      direction: '{{ .Config.type }}',
      qty: 100,
    },
    keywordsfilters: [
      { name: 'diacritics', args: 'replace' },
      { name: 're_replace', args: ['(?i)\\bS0*(\\d+)\\b', '$1'] },
      {
        name: 're_replace',
        args: ['(?i)\\bS0*(\\d+)E0*(\\d+)\\b', '$1 $2'],
      },
    ],
    rows: { selector: 'table > tbody > tr' },
    fields: {
      category: {
        selector: 'a[href*="/categories/"]',
        attribute: 'href',
        filters: [{ name: 'regexp', args: '/categories/(\\d+)' }],
      },
      title: {
        selector: 'a.view-torrent',
        filters: [
          {
            name: 're_replace',
            args: ['[\\[!"#$%&\'()*+,\\-.\\/:;<=>?@[\\]^_`{|}~]', ' '],
          },
          { name: 'diacritics', args: 'replace' },
          { name: 're_replace', args: ['[ ]{2,}', ' '] },
          {
            name: 're_replace',
            args: ['(?i)\\bS(\\d+)\\sE(\\d+)\\b', 'S$1E$2'],
          },
          { name: 're_replace', args: ['(?i)(\\d{2})x(\\d+)', 'S$1E$2'] },
          {
            name: 're_replace',
            args: ['(?i)\\b(\\d{1})x(\\d+)', 'S0$1E$2'],
          },
          {
            name: 're_replace',
            args: ["(?i)\\bStagion[ei]\\s?(\\d{1})\\b|\\bSeason'?s?\\s?(\\d{1})\\b", 'S0$1$2'],
          },
          {
            name: 're_replace',
            args: ["(?i)\\bStagion[ei]\\s?(\\d{2,})\\b|\\bSeason'?s?\\s?(\\d{2,})\\b", 'S$1$2'],
          },
          {
            name: 're_replace',
            args: ['(?i)\\b(?:[\\/\\|]?Episodio\\s?(\\d+)|Puntata\\s?(\\d+))', 'E$1$2'],
          },
          {
            name: 're_replace',
            args: ['(?i)\\b(?:Puntate\\s*)(\\d+)\\s?(\\d+)', 'E0$1-0$2'],
          },
          {
            name: 're_replace',
            args: ['(?i)(Serie completa|Completat?a?|in pausa)', ''],
          },
        ],
      },
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
              '(?i)(önce|tagasi|geleden|fa|temu|siden|atrás|nazpět|назад|acum|în urmă|hace|il y a|vor|преди|前)',
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
