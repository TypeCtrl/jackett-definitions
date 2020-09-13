import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'crazyspirits',
  name: 'CrazySpirits',
  description: 'Crazy Spirits is a FRENCH Private Torrent Tracker for MOVIES / TV / GENERAL',
  language: 'fr-FR',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://www.crazyspirits.com/'],
  caps: {
    categorymappings: [
      { id: '96', cat: 'TV/Documentary', desc: 'Docus TV' },
      { id: '124', cat: 'TV/Documentary', desc: 'Docus Formation Video' },
      { id: '1', cat: 'XXX', desc: '3X' },
      { id: '47', cat: 'XXX', desc: '3X  HD720p' },
      { id: '48', cat: 'XXX', desc: '3X  HD1080p' },
      { id: '49', cat: 'Movies/3D', desc: 'Films 3D' },
      { id: '50', cat: 'Movies/UHD', desc: 'Films 4K' },
      { id: '51', cat: 'TV/UHD', desc: 'Films 4K UHDTV' },
      { id: '56', cat: 'Movies/BluRay', desc: 'Films Blu-Ray' },
      { id: '53', cat: 'Movies/HD', desc: 'Films HD1080p' },
      { id: '52', cat: 'Movies/HD', desc: 'Films HD 720p' },
      { id: '61', cat: 'Movies/HD', desc: 'Films HDRip' },
      { id: '59', cat: 'Movies/DVD', desc: 'Films DVDR' },
      { id: '60', cat: 'Movies/DVD', desc: 'Films DVDRip' },
      { id: '57', cat: 'Movies/BluRay', desc: 'Films BDRip' },
      { id: '58', cat: 'Movies/BluRay', desc: 'Films BRRip' },
      { id: '63', cat: 'Movies/HD', desc: 'Films MHD' },
      { id: '64', cat: 'Movies', desc: 'Films R5' },
      { id: '65', cat: 'Movies', desc: 'Films FSCR' },
      { id: '66', cat: 'Movies', desc: 'Films CamTS' },
      { id: '67', cat: 'Movies', desc: 'Films Pack Films' },
      { id: '68', cat: 'Movies', desc: 'Films VostFR' },
      { id: '69', cat: 'Movies', desc: 'Films VO' },
      { id: '70', cat: 'Movies/WEBDL', desc: 'Films WebRip 1080p' },
      { id: '71', cat: 'Movies/WEBDL', desc: 'Films WebRip 720p' },
      { id: '73', cat: 'Movies/WEBDL', desc: 'Films Webrip' },
      { id: '72', cat: 'Movies/WEBDL', desc: 'Films WEB DL' },
      { id: '99', cat: 'Movies', desc: 'Films Remux' },
      { id: '98', cat: 'TV/Anime', desc: 'Films Film Animées' },
      { id: '122', cat: 'Movies/WEBDL', desc: 'Films Web-DL 1080P' },
      { id: '123', cat: 'Movies/WEBDL', desc: 'Films WEB-DL 720p' },
      { id: '126', cat: 'Movies', desc: 'Films HDTV' },
      { id: '114', cat: 'PC/Games', desc: 'Jeux PC' },
      { id: '115', cat: 'Console/PS3', desc: 'Jeux PS3' },
      { id: '116', cat: 'Console/PSP', desc: 'Jeux PSP- PSX' },
      { id: '117', cat: 'Console', desc: 'Jeux Roms' },
      { id: '118', cat: 'Console', desc: 'Jeux Switch' },
      { id: '119', cat: 'Console/Wii', desc: 'Jeux Wii' },
      { id: '120', cat: 'Console/WiiU', desc: 'Jeux WiiU' },
      { id: '121', cat: 'Console/Xbox', desc: 'Jeux Xbox' },
      { id: '100', cat: 'Audio/Audiobook', desc: 'Livre Audio' },
      { id: '101', cat: 'Books/Ebook', desc: 'Livre Epub' },
      { id: '102', cat: 'Books', desc: 'Livre Mangas' },
      { id: '103', cat: 'Books', desc: 'Livres BD' },
      { id: '104', cat: 'Books/Comics', desc: 'Livres Comics' },
      { id: '105', cat: 'Books/Magazines', desc: 'Livres Press' },
      { id: '106', cat: 'Books', desc: 'Livres Romans' },
      { id: '110', cat: 'PC/0day', desc: 'Logiciel Windows' },
      { id: '111', cat: 'PC', desc: 'Logiciel Linux' },
      { id: '113', cat: 'PC/Phone-IOS', desc: 'Logiciel Apple' },
      { id: '112', cat: 'PC/Phone-Other', desc: 'Logiciel Smart Phone' },
      { id: '125', cat: 'Audio/Video', desc: 'Musiques Videos Pack' },
      { id: '107', cat: 'Audio/MP3', desc: 'Musiques MP3' },
      { id: '108', cat: 'Audio/Lossless', desc: 'Musiques FLAC' },
      { id: '109', cat: 'Audio', desc: 'Musiques WMA' },
      { id: '76', cat: 'TV/HD', desc: 'Series Blu-Ray' },
      { id: '77', cat: 'TV/HD', desc: 'Series HDTV' },
      { id: '78', cat: 'TV/HD', desc: 'Series 1080p' },
      { id: '79', cat: 'TV/HD', desc: 'Series 720p' },
      { id: '80', cat: 'TV/SD', desc: 'Series DvDR' },
      { id: '81', cat: 'TV/SD', desc: 'Series DVDrip' },
      { id: '82', cat: 'TV/HD', desc: 'Series MHD' },
      { id: '83', cat: 'TV/WEB-DL', desc: 'Series WebDL1080p' },
      { id: '84', cat: 'TV/HD', desc: 'Series Épisodes HD' },
      { id: '85', cat: 'TV/SD', desc: 'Series Épisodes SD' },
      { id: '86', cat: 'TV', desc: 'Series VosFR' },
      { id: '87', cat: 'TV', desc: 'Series VO' },
      { id: '89', cat: 'TV', desc: 'Series VOSTA' },
      { id: '97', cat: 'TV/Anime', desc: 'Series Animée' },
      { id: '88', cat: 'TV', desc: 'Series Pack HD' },
      { id: '128', cat: 'TV', desc: 'Series Pack SD' },
      { id: '91', cat: 'TV/Other', desc: 'Spectacle 720p' },
      { id: '90', cat: 'TV/Other', desc: 'Spectacle 1080p' },
      { id: '74', cat: 'TV/HD', desc: 'TV TVHD' },
      { id: '75', cat: 'TV', desc: 'TV TVRip' },
      { id: '92', cat: 'TV/Other', desc: 'TV Spectacles' },
      { id: '93', cat: 'TV/Documentary', desc: 'TV Documentaires' },
      { id: '94', cat: 'TV', desc: 'TV Animation' },
      { id: '95', cat: 'TV/Sport', desc: 'TV Sports' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
      'music-search': ['q'],
    },
  },
  settings: [
    { name: 'cookie', type: 'text', label: 'Cookie' },
    {
      name: 'info',
      type: 'info',
      label: 'How to get the Cookie',
      default:
        "<ol><li>Login to this tracker with your browser<li>Open the <b>DevTools</b> panel by pressing <b>F12</b><li>Select the <b>Network</b> tab<li>Click on the <b>Doc</b> button (Chrome Browser) or <b>HTML</b> button (FireFox)<li>Refresh the page by pressing <b>F5</b><li>Click on the first row entry<li>Select the <b>Headers</b> tab on the Right panel<li>Find <b>'cookie:'</b> in the <b>Request Headers</b> section<li><b>Select</b> and <b>Copy</b> the whole cookie string <i>(everything after 'cookie: ')</i> and <b>Paste</b> here.</ol>",
    },
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
    method: 'cookie',
    inputs: { cookie: '{{ .Config.cookie }}' },
    test: {
      path: 'torrents-search.php',
      selector: 'a[href="account-logout.php"]',
    },
  },
  download: {
    before: {
      path: 'thanks.php',
      method: 'get',
      inputs: {
        id: '{{ .DownloadUri.Query.id }}',
        to: 'give',
        torrent: '{{ .DownloadUri.Query.id }}',
      },
    },
    selector: 'a:contains("Télécharger ce torrent")',
    attribute: 'href',
  },
  search: {
    paths: [{ path: 'torrents-search.php' }],
    inputs: {
      $raw: '{{ range .Categories }}c{{.}}=1&{{end}}',
      search: '{{ .Keywords }}',
      incldead: 1,
      freeleech: '{{ if .Config.freeleech }}2{{ else }}0{{ end }}',
      lang: 0,
      sort: '{{ .Config.sort }}',
      order: '{{ .Config.type }}',
    },
    rows: { selector: 'table.border_table > tbody > tr.t-row' },
    fields: {
      title: { selector: 'a[href^="torrents-details.php?id="] b' },
      category: {
        selector: 'a[href^="torrents.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      details: {
        selector: 'a[href^="torrents-details.php?id="]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="torrents-details.php?id="]',
        attribute: 'href',
      },
      banner: {
        selector: 'a[onmouseover][href^="torrents-details.php?id="]',
        attribute: 'onmouseover',
        filters: [{ name: 'regexp', args: 'src=(.*?)><' }],
      },
      grabs: { selector: 'td:nth-last-child(5)' },
      seeders: { selector: 'td:nth-last-child(4)' },
      leechers: { selector: 'td:nth-last-child(3)' },
      size: {
        selector: 'a[onmouseover][href^="torrents-details.php?id="]',
        attribute: 'onmouseover',
        filters: [{ name: 'regexp', args: 'Taille : </b>(.*?)<br' }],
      },
      date: {
        selector: 'a[onmouseover][href^="torrents-details.php?id="]',
        attribute: 'onmouseover',
        filters: [
          { name: 'regexp', args: 'Partagé Voilà : </b>(.*?)<br' },
          { name: 'dateparse', args: '01-02-2006' },
        ],
      },
      downloadvolumefactor: {
        case: { 'img[src="images/Torrents/free.png"]': 0, '*': 1 },
      },
      uploadvolumefactor: { text: 1 },
      minimumseedtime: { text: 172800 },
    },
  },
  source: 'jackett',
};
