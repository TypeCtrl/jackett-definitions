import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'bootytape',
  name: 'BootyTape',
  language: 'en-US',
  description: 'BootyTape is a Semi-Private site for 3X',
  type: 'semi-private',
  encoding: 'UTF-8',
  links: ['https://ssl.bootytape.com/'],
  caps: {
    categorymappings: [
      { id: '70', cat: 'XXX', desc: 'Animation' },
      { id: '22', cat: 'XXX', desc: 'Girl on Girl' },
      { id: '43', cat: 'XXX', desc: 'Images' },
      { id: '52', cat: 'XXX', desc: 'Straight' },
      { id: '82', cat: 'XXX', desc: 'X Play Hard' },
      { id: '92', cat: 'XXX', desc: 'X Play Soft' },
    ],
    modes: { search: ['q'] },
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
      default: 4,
      options: { '1': 'title', '4': 'created', '5': 'size', '7': 'seeders' },
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
      default: 'For best results, change the <b>Torrents per page:</b> setting to <b>100</b> on your account profile.',
    },
  ],
  login: {
    path: 'login.php',
    method: 'post',
    inputs: {
      take_login: 1,
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [{ selector: 'td.mainouter2:has(h1:contains("Failed"))' }],
    test: { path: 'my.php', selector: 'a[href="logout.php"]' },
  },
  search: {
    paths: [{ path: 'torrents.php' }],
    inputs: {
      search: '{{ .Keywords }}',
      tagsearch: '',
      cat: 0,
      freeleech: '{{ if .Config.freeleech }}1{{ else }}{{ end }}',
      tags: 1,
      sort: '{{ .Config.sort }}',
      type: '{{ .Config.type }}',
    },
    rows: { selector: 'table.red > tbody > tr:not(:has(th))' },
    fields: {
      category: {
        selector: 'a[href^="torrents.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      title: { selector: 'a[href^="details.php?id="]' },
      details: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="download.php?id="]',
        attribute: 'href',
      },
      description: { selector: 'div.specg' },
      poster: { selector: 'img[src*="/thbx/imgx/"]', attribute: 'src' },
      files: { selector: 'a[href$="filelist=1"]', optional: true },
      size: { selector: 'td:nth-child(3)' },
      seeders: { selector: 'a[href$="toseeders=1"]', optional: true },
      leechers: { selector: 'a[href$="todlers=1"]', optional: true },
      date: { text: 'now' },
      downloadvolumefactor: {
        case: { 'img[src$="pic/freedownload.gif"]': 0, '*': 1 },
      },
      uploadvolumefactor: {
        case: { 'img[src$="pic/double-upload.gif"]': 2, '*': 1 },
      },
    },
  },
  source: 'jackett',
};
