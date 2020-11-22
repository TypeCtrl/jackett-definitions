import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'greekdiamond',
  name: 'GreekDiamond',
  description: 'GreekDiamond is a GREEK Private Torrent Tracker for MOVIES / TV / GENERAL',
  language: 'el-GR',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://greekdiamond.info/'],
  caps: {
    categorymappings: [
      { id: '22', cat: 'TV', desc: 'TV Greek series' },
      { id: '23', cat: 'TV', desc: 'TV series packs' },
      { id: '21', cat: 'Movies', desc: 'Movies World series' },
      { id: '12', cat: 'Movies/DVD', desc: 'Movies DVDRIp' },
      { id: '13', cat: 'Movies/HD', desc: 'Movies Hd rip x264' },
      { id: '14', cat: 'Movies/SD', desc: 'Movies Cam-Ts-R6' },
      { id: '10', cat: 'Movies/HD', desc: 'Movies 720p-1080p' },
      { id: '16', cat: 'Movies/BluRay', desc: 'Movies Blue Ray' },
      { id: '17', cat: 'Movies', desc: 'Movies pack' },
      { id: '18', cat: 'TV/Documentary', desc: 'TV Documentary' },
      { id: '19', cat: 'Movies', desc: 'Movies Greek' },
      { id: '51', cat: 'TV', desc: 'TV Greek Packs' },
      { id: '52', cat: 'Movies', desc: 'Movies Greek Packs' },
      { id: '53', cat: 'Movies/HD', desc: 'BDRIP-BRRIP' },
      { id: '24', cat: 'Audio', desc: 'Music Greek' },
      { id: '25', cat: 'Audio', desc: 'Music Greek discografy' },
      { id: '26', cat: 'Audio', desc: 'Music Rock' },
      { id: '27', cat: 'Audio', desc: 'Music Rock discografy' },
      { id: '28', cat: 'Audio', desc: 'Music Compat Disc Club' },
      { id: '29', cat: 'Audio', desc: 'Music HipHop/Rap/RnB' },
      { id: '30', cat: 'Audio', desc: 'Music Pop/Electronic' },
      { id: '31', cat: 'Audio', desc: 'Music Soundtracks-VArtists' },
      { id: '32', cat: 'Audio/Video', desc: 'Music videos' },
      { id: '50', cat: 'Audio', desc: 'Music Διάφορα (Other)' },
      { id: '33', cat: 'PC/Games', desc: 'Games PC' },
      { id: '34', cat: 'Console/PSP', desc: 'Games Playstation/PSP' },
      { id: '35', cat: 'Console/Xbox', desc: 'Games Xbox' },
      { id: '36', cat: 'TV/Anime', desc: 'Anime /Μεταγλωτισμένα' },
      { id: '37', cat: 'TV/Anime', desc: 'Anime /Subtitled' },
      { id: '40', cat: 'Books/Comics', desc: 'Comics' },
      { id: '41', cat: 'Books/Mags', desc: 'Magazines' },
      { id: '42', cat: 'Books/Ebook', desc: 'E-books' },
      { id: '43', cat: 'Books/Ebook', desc: 'PDF' },
      { id: '44', cat: 'Other', desc: 'Images' },
      { id: '45', cat: 'TV/Sport', desc: 'Football Leagues' },
      { id: '46', cat: 'TV/Sport', desc: 'Formula 1' },
      { id: '48', cat: 'PC/0day', desc: 'Apps Win' },
      { id: '8', cat: 'PC', desc: 'Apps Linux' },
      { id: '9', cat: 'PC/Mac', desc: 'Apps Mac' },
      { id: '49', cat: 'PC/Mobile-Other', desc: 'Apps Mobile' },
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
    { name: 'uid', type: 'text', label: 'Username' },
    { name: 'pwd', type: 'password', label: 'Password' },
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
      name: 'info',
      type: 'info',
      label: 'Results Per Page',
      default: 'For best results, change the <b>Torrents per page:</b> setting to <b>100</b> on your account profile.',
    },
  ],
  login: {
    path: 'index.php?page=login',
    method: 'post',
    form: 'form[action="index.php?page=login"]',
    inputs: { uid: '{{ .Config.uid }}', pwd: '{{ .Config.pwd }}' },
    error: [
      {
        selector: 'form[action="index.php?page=login&returnto=index.php"] table tr:nth-of-type(2) td span',
      },
    ],
    test: { path: 'index.php', selector: 'a[href="logout.php"]' },
  },
  search: {
    paths: [{ path: 'index.php' }],
    inputs: {
      page: 'torrents',
      search: '{{ .Keywords }}',
      category: '{{ range .Categories }}{{.}};{{end}}',
      options: 0,
      active: 0,
      gold: '{{ if .Config.freeleech }}3{{ else }}0{{ end }}',
      order: '{{ .Config.sort }}',
      by: '{{ .Config.type }}',
    },
    rows: {
      selector: 'table > tbody > tr > td > table.lista > tbody > tr:has(td[onmouseover="this.className=\'post\'"])',
    },
    fields: {
      category: {
        selector: 'a[href^="index.php?page=torrents&category="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'category' }],
      },
      title: {
        selector: 'a[onmouseover][href^="index.php?page=torrent-details&id="]',
      },
      details: {
        selector: 'a[onmouseover][href^="index.php?page=torrent-details&id="]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="download.php?id="]',
        attribute: 'href',
      },
      poster: {
        selector: 'a[onmouseover][href^="index.php?page=torrent-details&id="]',
        attribute: 'onmouseover',
        filters: [{ name: 'regexp', args: 'src=(.*?) ' }],
      },
      date: {
        selector: 'td:nth-last-of-type(12)',
        filters: [
          { name: 'append', args: ' +00:00' },
          { name: 'dateparse', args: '02/01/2006 -07:00' },
        ],
      },
      seeders: { selector: 'td:nth-last-of-type(10)' },
      leechers: { selector: 'td:nth-last-of-type(9)' },
      grabs: {
        selector: 'td:nth-last-of-type(8)',
        filters: [{ name: 'replace', args: ['---', '0'] }],
      },
      size: {
        selector: 'td:nth-last-of-type(6)',
        filters: [{ name: 'replace', args: [',', ''] }],
      },
      description: {
        selector: 'td:nth-last-of-type(4) img',
        attribute: 'title',
        filters: [{ name: 'prepend', args: 'Language: ' }],
      },
      downloadvolumefactor: {
        case: {
          'img[src="images/freeleech.gif"]': 0,
          'img[src="gold/gold.gif"]': 0,
          'img[src="gold/slver.gif"]': 0.5,
          '*': 1,
        },
      },
      uploadvolumefactor: { text: 1 },
      minimumratio: { text: 1 },
    },
  },
  source: 'jackett',
};
