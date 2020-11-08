import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'genesismovement',
  name: 'Genesis-Movement',
  description: 'Genesis-Movement is a Semi-Private Torrent Tracker for GENESIS BOOTLEG MUSIC',
  language: 'en-US',
  type: 'semi-private',
  encoding: 'ISO-8859-1',
  links: ['https://torrent.genesis-movement.org/'],
  caps: {
    categorymappings: [
      { id: '20', cat: 'Audio', desc: 'Audio - Genesis' },
      { id: '28', cat: 'Audio', desc: 'Audio - Mike And The Mechanics ' },
      { id: '22', cat: 'Audio', desc: 'Audio - Peter Gabriel' },
      { id: '24', cat: 'Audio', desc: 'Audio - Phil Collins' },
      { id: '30', cat: 'Audio', desc: 'Audio - Ray Wilson' },
      { id: '26', cat: 'Audio', desc: 'Audio - Steve Hackett' },
      { id: '32', cat: 'Audio', desc: 'Audio - Tony Banks' },
      { id: '36', cat: 'Audio/Other', desc: 'Misc - BrandX' },
      { id: '19', cat: 'Audio/Other', desc: 'Misc - Misc' },
      { id: '38', cat: 'Audio/Other', desc: 'Misc - Non-Music' },
      { id: '21', cat: 'Audio/Video', desc: 'Video - Genesis' },
      {
        id: '29',
        cat: 'Audio/Video',
        desc: 'Video - Mike And The Mechanics',
      },
      { id: '23', cat: 'Audio/Video', desc: 'Video - Peter Gabriel' },
      { id: '25', cat: 'Audio/Video', desc: 'Video - Phil Collins' },
      { id: '31', cat: 'Audio/Video', desc: 'Video - Ray Wilson' },
      { id: '27', cat: 'Audio/Video', desc: 'Video - Steve Hackett' },
      { id: '33', cat: 'Audio/Video', desc: 'Video - Tony Banks' },
    ],
    modes: { search: ['q'], 'music-search': ['q'] },
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
      default: 'id',
      options: {
        id: 'created',
        name: 'title',
        size: 'size',
        seeders: 'seeders',
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
    error: [{ selector: 'table.bblock:contains("Access Denied")' }],
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
      tour: 0,
      incldead: 1,
      freeleech: '{{ if .Config.freeleech }}2{{ else }}0{{ end }}',
      lang: 0,
      owner: 0,
      sort: '{{ .Config.sort }}',
      order: '{{ .Config.type }}',
    },
    rows: {
      selector: 'table[class="ttable_headinner"] > tbody > tr:not(:has(td.ttable_head))',
      after: 1,
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      category: {
        selector: 'a[href^="torrents.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      title: {
        selector: 'a[href^="torrents-details.php?id="]',
        attribute: 'title',
      },
      details: {
        selector: 'a[href^="torrents-details.php?id="]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="download.php?id="]',
        attribute: 'href',
      },
      date: {
        selector: 'div[id^="kt"] > table > tbody > tr > td:contains("Date Added:")',
        filters: [
          {
            name: 'regexp',
            args: '(\\d{2}-\\d{2}-\\d{4} at \\d{2}:\\d{2}:\\d{2})',
          },
          { name: 'replace', args: [' at ', ' '] },
          { name: 'append', args: ' +00:00' },
          { name: 'dateparse', args: '02-01-2006 15:04:05 -07:00' },
        ],
      },
      size: { selector: 'td:nth-last-child(6)' },
      grabs: { selector: 'td:nth-last-child(5)' },
      seeders: { selector: 'td:nth-last-child(4)' },
      leechers: { selector: 'td:nth-last-child(3)' },
      downloadvolumefactor: {
        case: { 'a[title="FreeLeech!"]': 0, '*': 1 },
      },
      uploadvolumefactor: { text: 1 },
      minimumratio: { text: 1 },
    },
  },
  source: 'jackett',
};
