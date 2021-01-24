import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'sugoimusic',
  name: 'SugoiMusic',
  description: 'SugoiMusic is a Private Torrent Tracker for Asian MUSIC / TV',
  language: 'en-EN',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://sugoimusic.me/'],
  caps: {
    categorymappings: [
      { id: '1', cat: 'Audio', desc: 'Album' },
      { id: '2', cat: 'Audio', desc: 'EP' },
      { id: '3', cat: 'Audio', desc: 'Single' },
      { id: '4', cat: 'Audio/Video', desc: 'Bluray' },
      { id: '5', cat: 'Audio/Video', desc: 'DVD' },
      { id: '6', cat: 'Audio/Video', desc: 'PV' },
      { id: '7', cat: 'Audio/Video', desc: 'Music Performance' },
      { id: '8', cat: 'Audio/Video', desc: 'TV Music' },
      { id: '9', cat: 'TV', desc: 'TV Variety' },
      { id: '10', cat: 'TV', desc: 'TV Drama' },
      { id: '11', cat: 'Other', desc: 'Pictures' },
      { id: '12', cat: 'Other/Misc', desc: 'Misc' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'music-search': ['q'],
    },
  },
  settings: [
    { name: 'username', type: 'text', label: 'Username' },
    { name: 'password', type: 'password', label: 'Password' },
    { name: '2facode', type: 'text', label: '2FA code' },
    {
      name: 'info_2fa',
      type: 'info',
      label: 'About 2FA code',
      default:
        'Only fill in the <b>2FA code</b> box if you have enabled <b>2FA</b> on the SugoiMusic Web Site. Otherwise just leave it empty.',
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
      default: 'time',
      options: { time: 'created', seeders: 'seeders', size: 'size' },
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
      default: 'For best results, change the <b>Covers per page:</b> setting to <b>100</b> on your account profile.',
    },
  ],
  login: {
    path: 'login.php',
    method: 'form',
    form: 'form[action="login.php"]',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      twofa: '{{ .Config.2facode }}',
      login: '',
    },
    error: [
      {
        selector: 'span.warning',
        message: {
          selector: 'span[class="warning"]:not(:contains("JavaScript"))',
        },
      },
    ],
    test: { path: 'index.php', selector: 'a[href^="logout.php"]' },
  },
  search: {
    paths: [{ path: 'torrents.php' }],
    inputs: {
      $raw: '{{ range .Categories }}filter_cat[{{.}}]=1&{{end}}',
      searchstr: '{{ .Keywords }}',
      group_results: 0,
      action: 'basic',
      order_by: '{{ .Config.sort }}',
      order_way: '{{ .Config.type }}',
      freetorrent: '{{ if .Config.freeleech }}1{{ else }}0{{ end }}',
      searchsubmit: 1,
    },
    rows: { selector: 'tr.torrent' },
    fields: {
      category: {
        selector: 'div:nth-child(1)',
        case: {
          'div[title="Album"]': 1,
          'div[title="EP"]': 2,
          'div[title="Single"]': 3,
          'div[title="Bluray"]': 4,
          'div[title="DVD"]': 5,
          'div[title="PV"]': 6,
          'div[title="Music Performance"]': 7,
          'div[title="TV Music"]': 8,
          'div[title="TV Variety"]': 9,
          'div[title="TV Drama"]': 10,
          'div[title="Pictures"]': 11,
          'div[title="Misc"]': 12,
        },
      },
      _title_artist: { selector: 'div.torrent_artists > a' },
      _title_name: { selector: 'a.torrent_name' },
      _title_date: {
        selector: 'div.group_info.clear',
        filters: [{ name: 'regexp', args: '(\\[.+?\\])' }],
      },
      title: {
        text: '{{ .Result._title_artist }} - {{ .Result._title_name }} {{ .Result._title_date }}',
      },
      details: {
        selector: 'a.torrent_name[href^="torrents.php?id="]',
        attribute: 'href',
      },
      poster: {
        selector: 'img',
        attribute: 'src',
        filters: [
          {
            name: 'replace',
            args: ['/static/common/noartwork/nocover.png', ''],
          },
        ],
      },
      download: {
        selector: 'span > a[href^="torrents.php?action=download&id="]',
        attribute: 'href',
      },
      magnet: {
        optional: true,
        selector: 'span > a[href^="magnet:?dn="]',
        attribute: 'href',
      },
      date: {
        selector: 'span.time.tooltip',
        filters: [{ name: 'timeago' }],
      },
      size: { selector: 'td.number_column.nobr' },
      files: { selector: 'td:nth-last-child(6)' },
      seeders: { selector: 'td:nth-last-child(2)' },
      leechers: { selector: 'td:nth-last-child(1)' },
      grabs: { selector: 'td:nth-last-child(3)' },
      downloadvolumefactor: {
        case: {
          'div.torrent_info:contains("Freeleech")': 0,
          'div.torrent_info:contains("Neutral Leech")': 0,
          '*': 1,
        },
      },
      uploadvolumefactor: {
        case: { 'div.torrent_info:contains("Neutral Leech")': 0, '*': 1 },
      },
      minimumratio: { text: 0.95 },
      minimumseedtime: { text: 259200 },
      description: { selector: 'div.torrent_info' },
    },
  },
  source: 'jackett',
};
