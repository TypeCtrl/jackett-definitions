import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'p2pbg',
  name: 'P2PBG',
  description: 'P2PBG is a BULGARIAN Private Torrent Tracker for 0DAY / GENERAL',
  language: 'bg-BG',
  type: 'private',
  encoding: 'UTF-8',
  links: ['http://p2pbg.com/'],
  caps: {
    categorymappings: [
      { id: '1', cat: 'Movies/SD', desc: 'Movies-XviD' },
      { id: '16', cat: 'Movies/HD', desc: 'Movies-x264' },
      { id: '34', cat: 'Movies', desc: 'Movies-BG' },
      { id: '17', cat: 'Movies/HD', desc: 'Movies-MPEG2' },
      { id: '35', cat: 'Movies', desc: 'Movies-GSM' },
      { id: '55', cat: 'Movies/3D', desc: 'Movies-3D' },
      { id: '18', cat: 'Movies/BluRay', desc: 'Movies-BR/HD-DVD' },
      { id: '7', cat: 'TV/Documentary', desc: 'Movies-Documentaries' },
      { id: '11', cat: 'Movies/DVD', desc: 'Movies-DVD' },
      { id: '24', cat: 'TV/SD', desc: 'TV-BG' },
      { id: '14', cat: 'TV', desc: 'TV-Shows' },
      { id: '15', cat: 'TV', desc: 'TV-Boxset' },
      { id: '38', cat: 'TV/Anime', desc: 'TV-Cartoons' },
      { id: '8', cat: 'PC/Games', desc: 'Games-PC ISO' },
      { id: '9', cat: 'PC/Games', desc: 'Games-PC Rips' },
      { id: '21', cat: 'Console/Xbox', desc: 'Games-XboX' },
      { id: '22', cat: 'Console/Xbox360', desc: 'Games-X360' },
      { id: '33', cat: 'Console/Wii', desc: 'Games-Wii' },
      { id: '20', cat: 'Console/PSP', desc: 'Games-PSP' },
      { id: '23', cat: 'Console/PS3', desc: 'Games-PS3' },
      { id: '12', cat: 'Console/PS3', desc: 'Games-PS2' },
      { id: '2', cat: 'Audio/MP3', desc: 'Music-Song' },
      { id: '28', cat: 'Audio', desc: 'Music-Album' },
      { id: '19', cat: 'Audio/Video', desc: 'Music-Video' },
      { id: '29', cat: 'Audio', desc: 'Music-Discography' },
      { id: '3', cat: 'Audio/Video', desc: 'Music-DVD' },
      { id: '31', cat: 'PC/0day', desc: 'Appz Ripped' },
      { id: '26', cat: 'PC/ISO', desc: 'Appz PC-ISO' },
      { id: '49', cat: 'PC/Mac', desc: 'Appz MacOS' },
      { id: '30', cat: 'PC', desc: 'Appz-Linux' },
      { id: '27', cat: 'PC', desc: 'Appz-GSM' },
      { id: '39', cat: 'Other', desc: 'e-Learning' },
      { id: '37', cat: 'Other/Misc', desc: 'Pictures' },
      { id: '4', cat: 'Other', desc: 'Other' },
      { id: '6', cat: 'Books', desc: 'Books' },
      { id: '52', cat: 'PC/Mobile-Other', desc: 'Mobile-GSM' },
      { id: '40', cat: 'PC/Mobile-iOS', desc: 'Mobile-iPhone' },
      { id: '51', cat: 'TV/Sport', desc: 'Sport' },
      { id: '5', cat: 'TV/Sport', desc: 'Sport F1' },
      { id: '13', cat: 'XXX', desc: 'XXX' },
      { id: '54', cat: 'XXX/x264', desc: 'XXX HD' },
      { id: '32', cat: 'XXX/Imageset', desc: 'XXX Pictures' },
      { id: '56', cat: 'XXX', desc: 'XXX 3D' },
      { id: '53', cat: 'XXX', desc: 'XXX Hentai' },
      { id: '48', cat: 'XXX', desc: 'XXX BG Amateurs' },
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
      name: 'info_results',
      type: 'info',
      label: 'Search results',
      default: 'For best results, change the <b>Torrents per page:</b> setting to <b>100</b> on your account profile.',
    },
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: 'data',
      options: { data: 'created', size: 'size' },
    },
    {
      name: 'type',
      type: 'select',
      label: 'Order requested from site',
      default: 'DESC',
      options: { DESC: 'desc', ASC: 'asc' },
    },
  ],
  login: {
    path: 'index.php?page=login',
    method: 'form',
    form: 'form[action="index.php?page=login"]',
    inputs: {
      uid: '{{ .Config.username }}',
      pwd: '{{ .Config.password }}',
    },
    error: [{ selector: 'td.lista span[style="color:#FF0000;"]' }],
    test: { path: 'index.php', selector: 'a[href="logout.php"]' },
  },
  search: {
    paths: [{ path: 'index.php' }],
    inputs: {
      page: 'torrents',
      category: '{{ if .Categories }}{{ range .Categories }}{{.}};{{end}}{{else}}0;{{end}}',
      search: '{{ if .Keywords }}{{ .Keywords }}{{ else }}{{ end }}',
      active: 0,
      order: '{{ .Config.sort }}',
      by: '{{ .Config.type }}',
    },
    rows: {
      selector: 'table.lista tr td table.lista tr:has(a[href^="index.php?page=torrent-details"])',
    },
    fields: {
      title: {
        selector: 'td a[onclick]',
        attribute: 'title',
        filters: [
          { name: 'replace', args: ['View details: ', ''] },
          { name: 'replace', args: ['Преглед на детайли: ', ''] },
          { name: 'replace', args: ['Преглед на детайли: ', ''] },
        ],
      },
      details: { selector: 'td a[href*="id="]', attribute: 'href' },
      category: {
        selector: 'td a[href*="category="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'category' }],
      },
      download: {
        selector: 'td a[href*="id="]',
        attribute: 'href',
        filters: [
          { name: 'querystring', args: 'id' },
          { name: 'prepend', args: 'download.php?id=' },
          { name: 'append', args: '&f={{.Result.title}}.torrent' },
        ],
      },
      poster: {
        selector: 'td img[src="/torrentimg/pic.png"]',
        attribute: 'onmouseover',
        filters: [{ name: 'regexp', args: 'src=(.+?) width=' }],
      },
      date: {
        selector: 'td:nth-child(6):contains("/")',
        optional: true,
        filters: [
          { name: 'append', args: ' +00:00' },
          { name: 'dateparse', args: '02/01/2006 -07:00' },
        ],
      },
      size: { selector: 'td:nth-child(7)' },
      seeders: { selector: 'td:nth-child(8)' },
      leechers: { selector: 'td:nth-child(9)' },
      grabs: { selector: 'td:nth-child(10)' },
      downloadvolumefactor: { text: 1 },
      uploadvolumefactor: { text: 1 },
      minimumratio: { text: 1 },
    },
  },
  source: 'jackett',
};
