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
      { id: '21', cat: 'Movies/DVD', desc: 'Movie DVD-9' },
      { id: '11', cat: 'Movies/DVD', desc: 'Movie DVD-5' },
      { id: '20', cat: 'Movies/SD', desc: 'Movie DVDRip' },
      { id: '45', cat: 'Movies', desc: 'Movie RIP mp4' },
      { id: '22', cat: 'Movies/UHD', desc: 'Movie 4K-Ultra-HD' },
      { id: '23', cat: 'Movies/HD', desc: 'Movie H-265' },
      { id: '24', cat: 'Movies/HD', desc: 'Movie 1080p' },
      { id: '25', cat: 'Movies/HD', desc: 'Movie 720p' },
      { id: '26', cat: 'Movies/3D', desc: 'Movie 3D-FullHD' },
      { id: '27', cat: 'Movies/BluRay', desc: 'Movie BluRay' },
      { id: '43', cat: 'Movies/SD', desc: 'Movie BDRip' },
      { id: '29', cat: 'Movies/SD', desc: 'Movie Cine News' },
      { id: '30', cat: 'TV/HD', desc: 'Serie TV HD' },
      { id: '31', cat: 'TV/SD', desc: 'Serie TV SD' },
      { id: '35', cat: 'TV/Other', desc: 'Programmi TV' },
      { id: '42', cat: 'TV/Documentary', desc: 'Documentari' },
      { id: '36', cat: 'Audio/MP3', desc: 'Music MP3' },
      { id: '37', cat: 'Audio/Lossless', desc: 'Music Flac' },
      { id: '2', cat: 'Audio', desc: 'Music' },
      { id: '18', cat: 'PC/Games', desc: 'Games PC' },
      { id: '19', cat: 'Console/PS3', desc: 'Games PS3' },
      { id: '33', cat: 'Console/Xbox', desc: 'Games XboX' },
      { id: '39', cat: 'Console/Wii', desc: 'Games Wii' },
      { id: '40', cat: 'Console/Other', desc: 'Games Nintendo' },
      { id: '5', cat: 'TV/Anime', desc: 'Anime' },
      { id: '6', cat: 'Books', desc: 'Edicola' },
      { id: '16', cat: 'Books', desc: 'Edicola Quotidiani' },
      { id: '28', cat: 'Books', desc: 'Edicola Libri' },
      { id: '17', cat: 'Books', desc: 'Edicola Riviste' },
      { id: '41', cat: 'Books', desc: 'Edicola Fumetti' },
      { id: '4', cat: 'PC', desc: 'IPTV' },
      { id: '7', cat: 'PC/0day', desc: 'Applicazioni PC' },
      { id: '8', cat: 'PC/0day', desc: 'Applicazioni Linux' },
      { id: '9', cat: 'PC/Mac', desc: 'Applicazioni Mac' },
      { id: '32', cat: 'PC/Phone-Android', desc: 'Applicazioni Android' },
      { id: '34', cat: 'PC/Phone-IOS', desc: 'Applicazioni Iphone' },
      { id: '38', cat: 'Other', desc: 'V.I.P.' },
      { id: '12', cat: 'XXX', desc: 'Adulti' },
      { id: '13', cat: 'XXX', desc: 'Riviste XXX' },
      { id: '14', cat: 'XXX', desc: 'Fumetti XXX' },
      { id: '44', cat: 'XXX', desc: 'XXX Video' },
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
