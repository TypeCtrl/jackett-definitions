import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'monova',
  name: 'Monova',
  description: 'Monova is a Public torrent index.',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  followredirect: true,
  links: [
    'https://monova.org/',
    'https://monova.to/',
    'https://monova.unblockit.id/',
    'https://monova.unblocked.bar/',
    'https://monova.proxyportal.pw/',
    'https://monova.uk-unblock.pro/',
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
  ],
  caps: {
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
      'music-search': ['q'],
    },
    categorymappings: [
      { id: 'venus-mars', cat: 'XXX' },
      { id: 'video-camera', cat: 'Movies' },
      { id: 'music', cat: 'Audio' },
      { id: 'book', cat: 'Books' },
      { id: 'gamepad', cat: 'PC/Games' },
      { id: 'cog', cat: 'PC/0day' },
      { id: 'list', cat: 'Other' },
      { id: 'picture-o', cat: 'Other/Misc' },
    ],
  },
  settings: [],
  download: { selector: 'a#download-file', attribute: 'href' },
  search: {
    paths: [
      {
        path: '{{if .Keywords}}search?term={{.Keywords}}{{else}}video{{end}}',
      },
      {
        path: '{{ if .Keywords }}search?term={{ .Keywords }}&{{ else }}video?{{end}}page=2',
      },
      {
        path: '{{ if .Keywords }}search?term={{ .Keywords }}&{{ else }}video?{{end}}page=3',
      },
      {
        path: '{{ if .Keywords }}search?term={{ .Keywords }}&{{ else }}video?{{end}}page=4',
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
      title: { selector: 'td.torrent_name a' },
      category: {
        selector: 'td.torrent_name i',
        attribute: 'class',
        filters: [{ name: 'replace', args: ['fa fa-', ''] }],
      },
      details: { selector: 'td.torrent_name a', attribute: 'href' },
      download: { selector: 'td.torrent_name a', attribute: 'href' },
      size: {
        optional: true,
        selector: 'td.center-align',
        filters: [{ name: 'replace', args: ['N/A', '500 MB'] }],
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
