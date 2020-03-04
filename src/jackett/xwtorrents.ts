import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'xwtorrents',
  name: 'XWtorrents',
  description:
    'XtremeWrestlingTorrents (XWT) is a Private Torrent Tracker for PROFESSIONAL WRESTLING / MMA',
  language: 'en-US',
  type: 'private',
  encoding: 'WINDOWS-1252',
  links: ['https://xtremewrestlingtorrents.net/'],
  caps: {
    categorymappings: [
      { id: '47', cat: 'TV/Sport', desc: 'Boxing' },
      { id: '14', cat: 'TV/Sport', desc: 'Documentary' },
      { id: '20', cat: 'TV/Sport', desc: 'DVD' },
      { id: '2', cat: 'TV/Sport', desc: 'ECW Original' },
      { id: '26', cat: 'TV/Sport', desc: 'ECW Weekly' },
      { id: '21', cat: 'TV/Sport', desc: "Int Indy's" },
      { id: '69', cat: 'TV/Sport', desc: 'Lucha Libre' },
      { id: '70', cat: 'TV/Sport', desc: 'Lucha Libre HD' },
      { id: '23', cat: 'TV/Sport', desc: 'Misc' },
      { id: '24', cat: 'TV/Sport', desc: 'MMA' },
      { id: '59', cat: 'TV/Sport', desc: 'MMA HD' },
      { id: '30', cat: 'TV/Sport', desc: 'Packs' },
      { id: '68', cat: 'TV/Sport', desc: 'Podcasts' },
      { id: '29', cat: 'TV/Sport', desc: 'Puro' },
      { id: '18', cat: 'TV/Sport', desc: 'ROH' },
      { id: '52', cat: 'TV/Sport', desc: 'ROH HD' },
      { id: '45', cat: 'TV/Sport', desc: 'Shoot Interviews' },
      { id: '4', cat: 'TV/Sport', desc: 'Single Matches' },
      { id: '7', cat: 'TV/Sport', desc: 'TNA Impact' },
      { id: '49', cat: 'TV/Sport', desc: 'TNA Impact HD' },
      { id: '6', cat: 'TV/Sport', desc: "TNA PPV's" },
      { id: '55', cat: 'TV/Sport', desc: "TNA PPV's HD" },
      { id: '66', cat: 'TV/Sport', desc: 'Total Divas' },
      { id: '67', cat: 'TV/Sport', desc: 'Total Divas HD' },
      { id: '57', cat: 'TV/Sport', desc: 'Tough Enough' },
      { id: '58', cat: 'TV/Sport', desc: 'Tough Enough HD' },
      { id: '22', cat: 'TV/Sport', desc: "USA Indy's" },
      { id: '12', cat: 'TV/Sport', desc: 'WCW' },
      { id: '71', cat: 'TV/Sport', desc: 'Womens Wrestling' },
      { id: '15', cat: 'TV/Sport', desc: 'Wrestling Films' },
      { id: '72', cat: 'TV/Sport', desc: 'WWE 205 Live' },
      { id: '73', cat: 'TV/Sport', desc: 'WWE 205 Live HD' },
      { id: '16', cat: 'TV/Sport', desc: 'WWE Heat' },
      { id: '63', cat: 'TV/Sport', desc: 'WWE Main Event' },
      { id: '64', cat: 'TV/Sport', desc: 'WWE Network' },
      { id: '65', cat: 'TV/Sport', desc: 'WWE Network HD' },
      { id: '46', cat: 'TV/Sport', desc: 'WWE NXT' },
      { id: '50', cat: 'TV/Sport', desc: 'WWE NXT HD' },
      { id: '9', cat: 'TV/Sport', desc: "WWE PPV's" },
      { id: '56', cat: 'TV/Sport', desc: "WWE PPV's HD" },
      { id: '10', cat: 'TV/Sport', desc: 'WWE RAW' },
      { id: '51', cat: 'TV/Sport', desc: 'WWE RAW HD' },
      { id: '11', cat: 'TV/Sport', desc: 'WWE Smackdown' },
      { id: '53', cat: 'TV/Sport', desc: 'WWE Smackdown HD' },
      { id: '43', cat: 'TV/Sport', desc: 'WWE Superstars' },
      { id: '54', cat: 'TV/Sport', desc: 'WWE Superstars HD' },
      { id: '19', cat: 'TV/Sport', desc: 'WWE Velocity' },
      { id: '31', cat: 'TV/Sport', desc: 'WWE Vintage' },
      { id: '74', cat: 'TV/Sport', desc: 'AEW' },
      { id: '75', cat: 'TV/Sport', desc: 'AEW HD' },
    ],
    modes: { search: ['q'], 'tv-search': ['q', 'season', 'ep'] },
  },
  settings: [
    { name: 'username', type: 'text', label: 'Username' },
    { name: 'password', type: 'password', label: 'Password' },
    {
      name: 'seedbox',
      type: 'checkbox',
      label: 'Use SeedBox Download Link',
      default: false,
    },
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: '4',
      options: { '1': 'title', '4': 'created', '5': 'size', '7': 'seeders' },
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
    path: 'takelogin.php',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      returnto: '/',
    },
    error: [
      {
        selector: 'table.main:contains("Login failed!")',
        message: { selector: 'table tr td.text' },
      },
    ],
    test: { path: 'browse.php', selector: 'a[href="logout.php"]' },
  },
  ratio: { path: 'browse.php', selector: 'div#wel-radio b:nth-child(2)' },
  search: {
    paths: [{ path: 'browse.php' }],
    inputs: {
      $raw: '{{ range .Categories }}c{{.}}=1&{{end}}',
      incldead: 1,
      search: '{{ .Keywords }}',
      sort: '{{ .Config.sort }}',
      type: '{{ .Config.type }}',
    },
    rows: {
      selector:
        'table[border="0"][cellspacing="0"][cellpadding="5"] tr:has(a[href^="download.php?id="])',
    },
    fields: {
      category: {
        selector: 'a[href^="browse.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      title: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'title',
      },
      download1: {
        selector: 'a[href^="download.php"]',
        attribute: 'href',
      },
      download2: {
        selector: 'a[href^="download2.php"]',
        attribute: 'href',
      },
      download: {
        text: '{{if .Config.seedbox}}{{ .Result.download2 }}{{else}}{{ .Result.download1 }}{{end}}',
      },
      details: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
      },
      files: { selector: 'td:nth-child(3)' },
      grabs: {
        selector: 'td:nth-child(7)',
        filters: [{ name: 'regexp', args: '(\\d+)' }],
      },
      size: { selector: 'td:nth-child(6)' },
      seeders: { selector: 'td:nth-last-child(3)' },
      leechers: { selector: 'td:nth-last-child(2)' },
      date: {
        selector: 'td:nth-child(5)',
        filters: [{ name: 'dateparse', args: '2006-01-0215:04:05' }],
      },
      downloadvolumefactor: {
        case: { 'img[src="pic/freeleech.png"]': 0, '*': 1 },
      },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
