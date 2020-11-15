import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'girotorrent',
  name: 'Girotorrent',
  description: 'Girotorrent is an ITALIAN Private site for TV / MOVIES / GENERAL',
  language: 'it-IT',
  type: 'private',
  encoding: 'UTF-8',
  links: ['http://girotorrent.org/'],
  caps: {
    categorymappings: [
      { id: '13', cat: 'Books/Mags', desc: 'Giornali e Riviste' },
      { id: '15', cat: 'Books/Ebook', desc: 'E-Book' },
      { id: '16', cat: 'Books/Comics', desc: 'Fumetti' },
      { id: '70', cat: 'Books', desc: 'Manuali e Guide' },
      { id: '72', cat: 'Audio/Audiobook', desc: 'Audio Libri' },
      { id: '17', cat: 'Movies/Other', desc: 'Movie Cam-Ts' },
      { id: '18', cat: 'Movies/Other', desc: 'Movie Screener' },
      { id: '61', cat: 'Movies/Other', desc: 'Movie R5-R6' },
      { id: '19', cat: 'Movies/Other', desc: 'Movie DVDRip' },
      { id: '20', cat: 'Movies/Other', desc: 'Movie BDRip' },
      { id: '60', cat: 'Movies/Other', desc: 'Movie BluRay' },
      { id: '63', cat: 'Movies/Other', desc: 'Movie WEBDLRip' },
      { id: '22', cat: 'Movies/SD', desc: 'Movie BDRip' },
      { id: '23', cat: 'Movies/SD', desc: 'Movie DvdRip' },
      { id: '95', cat: 'Movies/SD', desc: 'Movie WEBRip' },
      { id: '24', cat: 'Movies/DVD', desc: 'Movie DVD-R 5' },
      { id: '25', cat: 'Movies/DVD', desc: 'Movie DVD-R 9' },
      { id: '26', cat: 'Movies/HD', desc: 'Movie Blu-Ray HD' },
      { id: '27', cat: 'Movies/UHD', desc: 'Movie 4K Ultra HD' },
      { id: '96', cat: 'Movies/HD', desc: 'Movie HD Hevc' },
      { id: '28', cat: 'Movies/Foreign', desc: 'Movie Subbed-ita' },
      { id: '73', cat: 'Movies/SD', desc: 'Movie MP4' },
      { id: '29', cat: 'Movies/Foreign', desc: 'Movie Lingua Originale' },
      { id: '32', cat: 'TV/Anime', desc: 'Anime Disney' },
      { id: '33', cat: 'TV/Anime', desc: 'Anime' },
      { id: '34', cat: 'TV/Anime', desc: 'Anime Altri Cartoni' },
      { id: '62', cat: 'TV/Anime', desc: 'Anime Natale Bimbi Girotor' },
      { id: '36', cat: 'TV', desc: 'TV Serie TV' },
      { id: '77', cat: 'TV', desc: 'TV Reality' },
      { id: '37', cat: 'TV', desc: 'TV Film TV' },
      { id: '59', cat: 'TV/Sport', desc: 'TV Sport' },
      { id: '38', cat: 'TV', desc: 'TV Concerti-Spettacoli' },
      { id: '39', cat: 'TV', desc: 'TV Teatro-Cabaret' },
      { id: '40', cat: 'TV/Documentary', desc: 'Tv Documentario' },
      { id: '42', cat: 'Audio', desc: 'Musica CD Singoli' },
      { id: '43', cat: 'Audio', desc: 'Musica Italiana' },
      { id: '44', cat: 'Audio', desc: 'Musica Straniera' },
      { id: '45', cat: 'Audio', desc: 'Musica Compilation' },
      { id: '46', cat: 'Audio/Video', desc: 'Musica Video Clip' },
      { id: '58', cat: 'Audio', desc: 'Musica Discografie' },
      { id: '97', cat: 'Audio/Lossless', desc: 'Musica Flac' },
      { id: '47', cat: 'PC/Games', desc: 'PC Games' },
      { id: '48', cat: 'Console/PS3', desc: 'PC Giochi PS2-PS3' },
      { id: '49', cat: 'Console/Wii', desc: 'PC Giochi Nintendo Wii' },
      { id: '50', cat: 'Console/Xbox', desc: 'PC Giochi Xbox' },
      { id: '51', cat: 'Console/PSP', desc: 'PC Giochi PSP' },
      { id: '52', cat: 'Console/3DS', desc: 'PC Giochi DS-DS3' },
      { id: '54', cat: 'PC', desc: 'PC Programmi Windows' },
      { id: '55', cat: 'PC/Mac', desc: 'PC Mac' },
      { id: '69', cat: 'PC', desc: 'PC Portable' },
      { id: '56', cat: 'PC', desc: 'PC Linux' },
      { id: '68', cat: 'PC/Mobile-iOS', desc: 'IPhone-IPad' },
      { id: '71', cat: 'PC/Mobile-Android', desc: 'Android APP' },
      { id: '74', cat: 'Other', desc: 'Varie' },
      { id: '75', cat: 'Other', desc: 'Immagini Wallpaper' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
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
      default: 3,
      options: { '2': 'title', '3': 'created', '4': 'size', '5': 'seeders' },
    },
    {
      name: 'type',
      type: 'select',
      label: 'Order requested from site',
      default: 2,
      options: { '1': 'asc', '2': 'desc' },
    },
    {
      name: 'info_tpp',
      type: 'info',
      label: 'Results Per Page',
      default:
        'For best results, change the <b>Torrents per page:</b> setting to <b>100</b> on your account profile. The default is <i>15</i>.',
    },
  ],
  login: {
    path: 'index.php?page=login',
    method: 'post',
    inputs: {
      uid: '{{ .Config.username }}',
      pwd: '{{ .Config.password }}',
    },
    error: [{ selector: 'div.error' }, { selector: 'span[style="color:#FF0000;"]' }],
    test: { path: 'index.php', selector: 'a[href="logout.php"]' },
  },
  download: {
    before: {
      path: 'thanks.php',
      method: 'post',
      inputs: {
        infohash: '{{ .DownloadUri.Query.id }}',
        thanks: 1,
        rndval: '1487013827343',
      },
    },
    selector: 'a[href^="download.php?id="]',
    attribute: 'href',
  },
  search: {
    paths: [{ path: 'index.php' }],
    inputs: {
      search: '{{ .Keywords }}',
      category: '{{ range .Categories }}{{.}};{{end}}',
      page: 'torrents',
      active: 0,
      options: '{{ if .Config.freeleech }}5{{ else }}0{{ end }}',
      order: '{{ .Config.sort }}',
      by: '{{ .Config.type }}',
    },
    keywordsfilters: [
      { name: 'diacritics', args: 'replace' },
      { name: 're_replace', args: ['(?i)\\bS0*(\\d+)\\b', '$1'] },
      {
        name: 're_replace',
        args: ['(?i)\\bS0*(\\d+)E0*(\\d+)\\b', '$1 $2'],
      },
    ],
    rows: {
      selector:
        'div.b-content > table > tbody > tr > td > table.lista > tbody > tr:has(a[href^="index.php?page=torrent-details&id="])',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      category: {
        selector: 'a[href^="index.php?page=torrents&category="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'category' }],
      },
      title: {
        selector: 'a[onmouseover][href^="index.php?page=torrent-details&id="]',
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
      details: {
        selector: 'a[onmouseover][href^="index.php?page=torrent-details&id="]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="index.php?page=downloadcheck&id="]',
        attribute: 'href',
      },
      poster: {
        selector: 'a[onmouseover][href^="index.php?page=torrent-details&id="]',
        attribute: 'onmouseover',
        filters: [{ name: 'regexp', args: 'src=(.+?) ' }],
      },
      date: {
        selector: 'td:nth-last-child(8)',
        filters: [
          { name: 'append', args: ' +00:00' },
          { name: 'dateparse', args: '02/01/2006 -07:00' },
        ],
      },
      seeders: { selector: 'td:nth-last-child(7)' },
      leechers: { selector: 'td:nth-last-child(6)' },
      grabs: {
        selector: 'td:nth-last-child(5)',
        filters: [{ name: 'replace', args: ['---', '0'] }],
      },
      size: { selector: 'td:nth-last-child(3)' },
      downloadvolumefactor: {
        case: {
          'img[alt="Free Leech"]': 0,
          'img[alt="Gold 100% Free"]': 0,
          'img[alt="Silver 50% Free"]': 0.5,
          'img[alt="Bronze 25% Free"]': 0.75,
          '*': 1,
        },
      },
      uploadvolumefactor: {
        optional: true,
        selector: 'img[alt$="x Upload Multiplier"]',
        attribute: 'alt',
        filters: [{ name: 'replace', args: ['x Upload Multiplier', ''] }],
      },
      minimumratio: { text: 0.5 },
    },
  },
  source: 'jackett',
};
