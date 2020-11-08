import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'monova',
  name: 'Monova',
  description: 'Monova is a Public torrent index',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  followredirect: true,
  links: [
    'https://monova.org/',
    'https://monova.to/',
    'https://monova.unblockit.app/',
    'https://monova.unblocked.rest/',
  ],
  legacylinks: [
    'https://monova.unblockninja.com/',
    'https://monova.unblockit.pro/',
    'https://monova.unblockit.one/',
    'https://monova.black-mirror.xyz/',
    'https://monova.unblocked.casa/',
    'https://monova.proxyportal.fun/',
    'https://monova.uk-unblock.xyz/',
    'https://monova.ind-unblock.xyz/',
    'https://monova.unblockit.me/',
    'https://monova.unblockit.pw/',
    'https://monova.unblocked.bar/',
    'https://monova.proxyportal.pw/',
    'https://monova.uk-unblock.pro/',
    'https://monova.unblockit.id/',
    'https://monova.unblockit.lat/',
  ],
  caps: {
    categorymappings: [
      { id: 'venus-mars', cat: 'XXX', desc: 'Adult' },
      { id: 'video-camera', cat: 'Movies', desc: 'Video' },
      { id: 'music', cat: 'Audio', desc: 'Audio' },
      { id: 'book', cat: 'Books', desc: 'Books' },
      { id: 'gamepad', cat: 'PC/Games', desc: 'Games' },
      { id: 'cog', cat: 'PC/0day', desc: 'Software' },
      { id: 'list', cat: 'Other', desc: 'Others' },
      { id: 'picture-o', cat: 'Other/Misc', desc: 'Photos' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
      'music-search': ['q'],
      'book-search': ['q'],
    },
  },
  settings: [],
  search: {
    paths: [
      {
        path: '{{ if .Keywords }}search?term={{ .Keywords }}{{ else }}video{{ end }}',
      },
      {
        path: '{{ if .Keywords }}search?term={{ .Keywords }}&{{ else }}video?{{ end }}page=2',
      },
      {
        path: '{{ if .Keywords }}search?term={{ .Keywords }}&{{ else }}video?{{ end }}page=3',
      },
      {
        path: '{{ if .Keywords }}search?term={{ .Keywords }}&{{ else }}video?{{ end }}page=4',
      },
    ],
    keywordsfilters: [
      {
        name: 're_replace',
        args: ['(?:^|\\s)[_\\+\\/\\.\\-\\(\\)]*[\\S]{0,3}[_\\+\\/\\.\\-\\(\\)]*(?:\\s|$)', ' '],
      },
    ],
    rows: {
      selector: 'tr.desktop:not(tr[class="desktop  success"])',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      category: {
        selector: 'td.torrent_name i',
        attribute: 'class',
        filters: [{ name: 'replace', args: ['fa fa-', ''] }],
      },
      title: { selector: 'td.torrent_name a' },
      details: { selector: 'td.torrent_name a', attribute: 'href' },
      infohash: {
        selector: 'td.torrent_name a',
        attribute: 'href',
        filters: [{ name: 'regexp', args: '([0-9A-Fa-f]{40})' }],
      },
      size: {
        optional: true,
        selector: 'td.center-align',
        filters: [{ name: 'replace', args: ['N/A', '512 MB'] }],
      },
      seeders: { text: 1 },
      leechers: { text: 1 },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
      date: {
        optional: true,
        selector: 'td.torrent_name',
        remove: 'a',
        filters: [
          { name: 'replace', args: ['added ', ''] },
          { name: 'replace', args: [' ago.*$', ''] },
          { name: 'replace', args: ['min.', 'minutes'] },
          { name: 'timeago' },
        ],
      },
    },
  },
  source: 'jackett',
};
