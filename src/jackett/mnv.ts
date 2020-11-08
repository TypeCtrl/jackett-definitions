import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'mnv',
  name: 'MNV',
  description: 'MNV (Max-New-Vision) is a Private GERMAN tracker',
  language: 'de-DE',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://mnvv2.info/'],
  caps: {
    categorymappings: [
      { id: '1', cat: 'TV/Anime', desc: 'Anime' },
      { id: '2', cat: 'PC', desc: 'Appz' },
      { id: '13', cat: 'TV/Documentary', desc: 'Doku' },
      { id: '3', cat: 'Books/Ebook', desc: 'E-Books/Bücher' },
      { id: '27', cat: 'Console/NDS', desc: 'Games/Nintendo' },
      { id: '24', cat: 'PC/Games', desc: 'Games/PC' },
      { id: '25', cat: 'Console/PSP', desc: 'Games/PlayStation' },
      { id: '28', cat: 'Console/Xbox', desc: 'Games/XBOX' },
      { id: '22', cat: 'PC/Mobile-Other', desc: 'Handy/PDA' },
      { id: '32', cat: 'TV/Anime', desc: 'Hentai' },
      { id: '4', cat: 'Audio/Audiobook', desc: 'Hörspiel/Hörbuch' },
      { id: '31', cat: 'Movies/BluRay', desc: 'Movies/BluRay' },
      { id: '8', cat: 'Movies/DVD', desc: 'Movies/DVD' },
      { id: '6', cat: 'Movies/HD', desc: 'Movies/H.26x' },
      { id: '9', cat: 'Movies/SD', desc: 'Movies/VCD' },
      { id: '11', cat: 'Movies/SD', desc: 'Movies/Xvid/DivX' },
      { id: '18', cat: 'Audio', desc: 'Musik' },
      { id: '19', cat: 'Audio/Video', desc: 'Musik Videos' },
      { id: '30', cat: 'Other', desc: 'Sonstiges' },
      { id: '21', cat: 'TV/Sport', desc: 'Sport' },
      { id: '5', cat: 'Books/Mags', desc: 'Tageszeitung' },
      { id: '14', cat: 'TV', desc: 'TV-Serien' },
      { id: '29', cat: 'XXX', desc: 'XXX' },
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
      label: 'Search FreeLeech only',
      default: false,
    },
    {
      name: 'onlyupload',
      type: 'checkbox',
      label: 'Search OnlyUpload only',
      default: false,
    },
    {
      name: 'info_free',
      type: 'info',
      label: 'About Freeleech and OnlyUpload at MNV',
      default:
        '<li>FreeLeech are torrents where neither the download or upload is counted.</li><li>OnlyUpload are torrents where download is not counted but upload is. Good for buiding your Ratio up.</li><li>Do not set both FreeLeech and OnlyUpload check boxes, there are no torrents with both these flags so you will get a no-results error.</li>',
    },
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: 'added',
      options: {
        added: 'created',
        seeds: 'seeders',
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
    {
      name: 'info_tpp',
      type: 'info',
      label: 'Results Per Page',
      default:
        'For best results, change the <b>Torrents per page:</b> setting to <b>100</b> on your account profile. The default is <i>10</i>.',
    },
  ],
  login: {
    path: 'takelogin.php',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [{ selector: '.tablea:contains("Fehler")' }],
    test: { path: 'browse.php', selector: 'a[href="logout.php"]' },
  },
  search: {
    inputs: {
      $raw: '{{range .Categories}}c{{.}}=1&{{end}}',
      search: '{{ .Keywords }}',
      blah: 0,
      incldead: 1,
      team: 0,
      language: 'all',
      freeleech: '{{ if .Config.freeleech }}1{{ else }}{{ end }}',
      free: '{{ if .Config.onlyupload }}1{{ else }}{{ end }}',
      orderby: '{{ .Config.sort }}',
      order: '{{ .Config.type }}',
    },
    rows: {
      selector: 'table.tableinborder > tbody > tr:has(a[href^="download.php"])',
    },
    fields: {
      category: {
        selector: 'a[href^="browse.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      title: { selector: 'a[href^="details.php"]' },
      details: {
        selector: 'a[href^="details.php"]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="download.php"]',
        attribute: 'href',
      },
      poster: {
        selector: 'a[href^="details.php"]',
        attribute: 'onMouseover',
        filters: [{ name: 'regexp', args: 'src=(.*?) width' }],
      },
      date: {
        selector: 'td.tablea > table > tbody > tr:nth-child(2) > td:nth-child(2) > b',
        filters: [
          { name: 'append', args: ' +01:00' },
          { name: 'replace', args: [' ', ' '] },
          { name: 'dateparse', args: '02.01.2006 15:04:05 -07:00' },
        ],
      },
      grabs: {
        selector: 'td.tablea table tbody tr:nth-child(2) td:nth-child(3) b',
      },
      size: {
        selector: 'a[href^="details.php"]',
        attribute: 'onMouseover',
        filters: [
          { name: 'regexp', args: 'Größe: <b>(.*?)</b>' },
          { name: 'replace', args: ['.', ''] },
          { name: 'replace', args: [',', '.'] },
        ],
      },
      seeders: {
        selector: 'a[href^="details.php"]',
        attribute: 'onMouseover',
        filters: [{ name: 'regexp', args: '>(\\d+) Seeder' }],
      },
      leechers: {
        selector: 'a[href^="details.php"]',
        attribute: 'onMouseover',
        filters: [{ name: 'regexp', args: '>(\\d+) Leecher' }],
      },
      downloadvolumefactor: {
        case: {
          'img[src="pic/oupic.gif"]': 0,
          'img[src="pic/freeleech.gif"]': 0,
          '*': 1,
        },
      },
      uploadvolumefactor: {
        case: { 'img[src="pic/freeleech.gif"]': 0, '*': 1 },
      },
      minimumratio: { text: 0.7 },
      minimumseedtime: { text: 172800 },
    },
    paths: [{ path: 'browse.php' }],
  },
  source: 'jackett',
};
