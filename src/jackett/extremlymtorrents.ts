import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'extremlymtorrents',
  name: 'ExtremlymTorrents',
  description: 'ExtremlymTorrents is a Semi-Private tracker for MOVIES / TV / GENERAL',
  language: 'en-US',
  type: 'semi-private',
  encoding: 'UTF-8',
  links: ['https://extremlymtorrents.ws/'],
  caps: {
    categorymappings: [
      { id: '22', cat: 'Movies/HD', desc: '720p HD' },
      { id: '15', cat: 'Movies/HD', desc: '1080p HD' },
      { id: '40', cat: 'Movies/UHD', desc: '4K UHD 2160p' },
      { id: '12', cat: 'Movies/BluRay', desc: 'BluRay' },
      { id: '5', cat: 'Movies/DVD', desc: 'DVDRip ' },
      { id: '16', cat: 'Movies/3D', desc: 'BluRay 3D' },
      { id: '13', cat: 'TV/HD', desc: 'HDTV' },
      { id: '47', cat: 'XXX', desc: 'Porn UHD 4K -[+18]- xXx' },
      { id: '11', cat: 'XXX', desc: 'Porn -[+18]- xXx' },
      { id: '41', cat: 'TV', desc: 'TVRip' },
      { id: '6', cat: 'Audio', desc: 'Music Mp3 | FLAC' },
      { id: '9', cat: 'TV', desc: 'Kidz | Cartoons' },
      { id: '8', cat: 'Books/Ebook', desc: 'Comics | EBook' },
      { id: '10', cat: 'TV', desc: 'TV Episode | Season Complete' },
      { id: '27', cat: 'Movies/DVD', desc: 'DVD | PAL | NTSC' },
      { id: '25', cat: 'Movies/WEBDL', desc: 'WEBRip | WEB-DL' },
      { id: '35', cat: 'Movies', desc: 'BRRip | BDRip | HDRip' },
      { id: '3', cat: 'PC', desc: 'Applications' },
      { id: '17', cat: 'Console/PSP', desc: 'PSP | Playstation ' },
      { id: '30', cat: 'TV/SD', desc: 'PDTV | SDTV' },
      { id: '18', cat: 'Console/PS3', desc: 'PS3 | Playstation 3 ' },
      { id: '46', cat: 'Console/PS4', desc: 'PS4 | PlayStation 4' },
      { id: '20', cat: 'PC/Phone-IOS', desc: 'Iphone iOS' },
      { id: '19', cat: 'PC/Phone-Android', desc: 'Android Apk' },
      { id: '21', cat: 'Movies', desc: 'Pack' },
      { id: '49', cat: 'TV/UHD', desc: 'TV UHD | 2160p | Episodes' },
      { id: '24', cat: 'Audio/Video', desc: 'VideoClip' },
      { id: '26', cat: 'Console/Wii', desc: 'Wii Games' },
      { id: '31', cat: 'TV/Documentary', desc: "DOC's" },
      { id: '36', cat: 'Movies', desc: 'CAMRip | REC' },
      { id: '38', cat: 'Movies', desc: 'TS: TeleSync | HD-TS' },
      { id: '48', cat: 'Audio/Video', desc: '4K | 2160p | Music Video' },
      { id: '28', cat: 'TV/Anime', desc: 'Anime | Japanese' },
      { id: '43', cat: 'XXX', desc: 'Hentai | Manga' },
      { id: '29', cat: 'PC/0day', desc: 'Windows PC' },
      { id: '7', cat: 'PC/Mac', desc: 'Mac' },
      { id: '23', cat: 'PC', desc: 'Linux' },
      { id: '32', cat: 'PC/Phone-Other', desc: 'GPS Navigation' },
      { id: '45', cat: 'Audio', desc: 'Vinyl Rip' },
      { id: '2', cat: 'Console/Xbox360', desc: 'XBOX 360' },
      { id: '1', cat: 'PC/Games', desc: 'Games PC' },
      { id: '14', cat: 'Other', desc: 'Wallpapers' },
      { id: '44', cat: 'Movies', desc: 'Bollywood' },
      { id: '42', cat: 'Other/Misc', desc: 'X EXTERN ONLY MAGNET' },
      { id: '39', cat: 'TV/Sport', desc: 'Sport TV' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
      'music-search': ['q'],
    },
  },
  settings: [
    { name: 'username', type: 'text', label: 'Username' },
    { name: 'password', type: 'password', label: 'Password' },
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: 'id',
      options: {
        id: 'created',
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
    path: 'account-login.php',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [
      {
        selector: 'span.titlebar:contains("Access Denied")',
        message: { selector: 'td.text' },
      },
    ],
    test: {
      path: 'index.php',
      selector: 'a[href="account-logout.php"]',
    },
  },
  search: {
    paths: [{ path: 'torrents-search.php' }],
    inputs: {
      $raw: '{{ range .Categories }}c{{.}}=1&{{end}}',
      search: '{{ .Keywords }}',
      lang: 0,
      sort: '{{ .Config.sort }}',
      order: '{{ .Config.type }}',
    },
    keywordsfilters: [{ name: 're_replace', args: ['(\\w+)', ' +$1'] }],
    rows: { selector: 'table.xtrz > tbody > tr[class^="ttable_col"]' },
    fields: {
      category: {
        selector: 'a[href^="torrents.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      language: { selector: 'td:nth-last-child(5)' },
      description: {
        optional: true,
        selector: 'img[src="/images/vip-icon.png"]',
        attribute: 'src',
        filters: [{ name: 'replace', args: ['/images/vip-icon.png', ' VIP ONLY'] }],
      },
      title: {
        selector: 'a[href^="file.php?id="] b',
        filters: [
          {
            name: 'append',
            args: ' {{ .Result.language }}{{ .Result.description }}',
          },
        ],
      },
      details: {
        selector: 'a[href^="file.php?id="]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="download.php?id="]',
        attribute: 'href',
      },
      banner: {
        selector: 'a[href^="file.php?id="]',
        attribute: 'onmouseover',
        filters: [{ name: 'regexp', args: 'src=(.+?) ' }],
      },
      date: {
        selector: 'td:nth-last-child(1)',
        filters: [{ name: 'dateparse', args: '02.01.200615:04:05' }],
      },
      leechers: { selector: 'td:nth-last-child(2)' },
      seeders: { selector: 'td:nth-last-child(3)' },
      size: { selector: 'td:nth-last-child(4)' },
      downloadvolumefactor: {
        case: { 'img[src="/images/free.png"]': 0, '*': 1 },
      },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
