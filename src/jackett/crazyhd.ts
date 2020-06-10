import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'crazyhd',
  name: 'CrazyHD',
  description: 'CrazyHD is a BANGLADESHI Private Torrent Tracker for MOVIES / TV / GENERAL',
  language: 'en-US',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://www.crazyhd.com/'],
  caps: {
    categorymappings: [
      { id: '16', cat: 'Movies/BluRay', desc: 'Movies English Bluray' },
      { id: '11', cat: 'Movies/DVD', desc: 'Movies English DVD-RIP' },
      { id: '14', cat: 'Movies', desc: 'Movies English CAM' },
      { id: '60', cat: 'Movies/WEBDL', desc: 'Movies English HD/WEBRIP' },
      { id: '19', cat: 'Movies/DVD', desc: 'Movies Hindi DVDRIP' },
      { id: '52', cat: 'Movies/BluRay', desc: 'Movies Hindi Blu Ray' },
      { id: '18', cat: 'Movies/DVD', desc: 'Movies Hindi PreDVD' },
      { id: '17', cat: 'Movies', desc: 'Movies Hindi CAM' },
      { id: '42', cat: 'Movies', desc: 'Movies Tamil' },
      {
        id: '65',
        cat: 'Movies/WEBDL',
        desc: 'Movies Hindi Webrip/HDrip',
      },
      { id: '24', cat: 'Movies', desc: 'Movies UNRATED' },
      { id: '53', cat: 'Movies/Foreign', desc: 'Movies Other Foreign' },
      { id: '64', cat: 'Movies', desc: 'Movies Animated' },
      { id: '45', cat: 'Movies', desc: 'Movies Trailers' },
      { id: '93', cat: 'Movies', desc: 'Movies Dual Movies' },
      { id: '59', cat: 'Movies', desc: 'Movies Pack' },
      { id: '94', cat: 'Movies/UHD', desc: 'Movies 4k' },
      { id: '62', cat: 'Movies/3D', desc: 'Movies 3D' },
      { id: '34', cat: 'TV', desc: 'TV English Series' },
      { id: '57', cat: 'TV', desc: 'TV Bangla series' },
      { id: '58', cat: 'TV', desc: 'TV Hindi series' },
      { id: '28', cat: 'TV/Sport', desc: 'TV Sports' },
      { id: '29', cat: 'TV/Documentary', desc: 'TV Documentary' },
      { id: '95', cat: 'TV', desc: 'TV Other Language' },
      { id: '3', cat: 'PC/Games', desc: 'Games PC' },
      { id: '75', cat: 'PC/Phone-Android', desc: 'Games Android' },
      { id: '77', cat: 'PC/Phone-IOS', desc: 'Games Ipad/Iphone' },
      { id: '79', cat: 'PC/Phone-Other', desc: 'Games Other Platforms' },
      { id: '61', cat: 'PC/Games', desc: 'Games trailer' },
      { id: '90', cat: 'Console/PS4', desc: 'Games Ps4' },
      { id: '86', cat: 'Console/PS3', desc: 'Games xbox / ps3' },
      { id: '92', cat: 'PC/Games', desc: 'Games nrated' },
      { id: '7', cat: 'PC/0day', desc: 'Software Windows' },
      {
        id: '20',
        cat: 'PC/Phone-Android',
        desc: 'Software Android Apps',
      },
      { id: '83', cat: 'PC/Phone-IOS', desc: 'Software Iphone Apps' },
      { id: '39', cat: 'PC', desc: 'Software Tutorials' },
      { id: '63', cat: 'PC', desc: 'Software Linux' },
      { id: '89', cat: 'PC/Mac', desc: 'Software MAC OSX' },
      { id: '56', cat: 'Movies', desc: 'Movies Bangla' },
      { id: '35', cat: 'Movies', desc: 'Movies Bangla Natok' },
      { id: '47', cat: 'Movies', desc: 'Movies Indian Bangla' },
      { id: '46', cat: 'Movies', desc: 'Movies Eid Natok' },
      { id: '67', cat: 'Audio', desc: 'Radio program' },
      { id: '36', cat: 'TV/Anime', desc: 'Anime Cartoons' },
      { id: '40', cat: 'TV/Anime', desc: 'Anime Subbed' },
      { id: '51', cat: 'TV/Anime', desc: 'Anime Dubbed' },
      { id: '69', cat: 'TV/Anime', desc: 'Anime Dual Audio' },
      { id: '25', cat: 'Audio/MP3', desc: 'MP3 English' },
      { id: '26', cat: 'Audio/MP3', desc: 'MP3 Bangla' },
      { id: '27', cat: 'Audio/MP3', desc: 'MP3 Hindi' },
      { id: '48', cat: 'Audio/Video', desc: 'MusicVideo English' },
      { id: '49', cat: 'Audio/Video', desc: 'MusicVideo Bangla' },
      { id: '50', cat: 'Audio/Video', desc: 'MusicVideo Hindi' },
      { id: '6', cat: 'Books', desc: 'Books' },
      { id: '4', cat: 'Other', desc: 'Other' },
      { id: '44', cat: 'Other', desc: 'Food & Recipes' },
      { id: '38', cat: 'Other', desc: 'Pictures' },
      { id: '54', cat: 'Books/Magazines', desc: 'Magazine' },
      { id: '88', cat: 'Books/Comics', desc: 'Comics' },
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
      default: '3',
      options: { '2': 'title', '3': 'created', '4': 'size', '5': 'seeders' },
    },
    {
      name: 'type',
      type: 'select',
      label: 'Order requested from site',
      default: '2',
      options: { '1': 'asc', '2': 'desc' },
    },
  ],
  login: {
    path: 'index.php',
    method: 'form',
    form: 'form[action="index.php?page=login"]',
    inputs: {
      uid: '{{ .Config.username }}',
      pwd: '{{ .Config.password }}',
    },
    error: [{ selector: 'tr td span[style="color:#FF0000;"]' }],
    test: { path: 'index.php', selector: 'a[href="logout.php"]' },
  },
  ratio: {
    path: 'index.php',
    selector: 'span:contains("Ratio ")',
    filters: [{ name: 'replace', args: ['Ratio ', ''] }],
  },
  search: {
    paths: [{ path: 'index.php?page=searchlist', method: 'post' }],
    inputs: {
      page: 'searchlist',
      pages: 1,
      order: '{{ .Config.sort }}',
      by: '{{ .Config.type }}',
      gold: 0,
      options: 0,
      active: 0,
      category: '{{ if .Categories }}{{ range .Categories }}{{.}};{{end}}{{else}}0{{end}}',
      search: '{{ .Keywords }}',
    },
    rows: { selector: 'div.inf-table-row' },
    fields: {
      title: {
        selector: 'div.list-name a.tlink',
        filters: [
          {
            name: 're_replace',
            args: [' [\\(\\=\\!]+(50|100).*?[\\!\\=\\)]+', ''],
          },
        ],
      },
      details: { selector: 'div.list-name a.tlink', attribute: 'href' },
      category: {
        selector: 'div.torrent-cat small a',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'category' }],
      },
      banner: {
        selector: 'div.list-name a.tlink',
        optional: true,
        attribute: 'onmouseover',
        filters: [{ name: 'regexp', args: 'src=(.*?) width=' }],
      },
      download: {
        selector: 'div.list-name a.tlink',
        attribute: 'tfid',
        filters: [
          { name: 'prepend', args: 'download.php?id=' },
          { name: 'append', args: '&f={{ .Result.title }}.torrent' },
        ],
      },
      size: { selector: 'div.torrent-size' },
      date: {
        selector: 'div.torrent-time',
        filters: [{ name: 'dateparse', args: '02/01/2006' }],
      },
      seeders: { selector: 'div.torrent-seeder' },
      leechers: { selector: 'div.torrent-peer' },
      grabs: { selector: 'div.torrent-completed' },
      downloadvolumefactor: {
        case: {
          'img[src="gold/gold.gif"]': 0,
          'img[src="gold/silver.gif"]': 0.5,
          '*': 1,
        },
      },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
