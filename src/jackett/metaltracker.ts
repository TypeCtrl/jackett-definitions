import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'metaltracker',
  name: 'Metal Tracker',
  description:
    'Metal Tracker is a Semi-Private site dedicated to HEAVY METAL MUSIC. This definition is for the English site.',
  language: 'en-US',
  type: 'semi-private',
  encoding: 'UTF-8',
  links: ['https://en.metal-tracker.com/'],
  legacylinks: ['http://en.metal-tracker.com/'],
  caps: {
    modes: {
      search: ['q'],
      'music-search': ['q', 'album', 'artist', 'label', 'year'],
      'book-search': ['q'],
    },
    categorymappings: [
      { id: 'Books', cat: 'Audio/Audiobook' },
      { id: 'Video', cat: 'Audio/Video' },
      { id: 'Music', cat: 'Audio/MP3' },
    ],
  },
  settings: [
    { name: 'username', type: 'text', label: 'Username' },
    { name: 'password', type: 'password', label: 'Password' },
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: 'date',
      options: {
        date: 'created',
        seeders: 'seeders',
        size: 'size',
        name: 'title',
      },
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
    path: 'user/login.html',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      go: 'Enter',
    },
    error: [
      {
        selector: 'div.errorSummary',
        message: { selector: 'div.errorSummary ul li' },
      },
    ],
    test: {
      path: 'torrents/search.html',
      selector: 'li li:has(a[href="/user/logout.html"])',
    },
  },
  search: {
    paths: [{ path: 'torrents/search.html', method: 'post' }],
    inputs: {
      'SearchTorrentsForm[nameTorrent]':
        '{{ if or (.Query.Artist) (.Query.Album) }}{{ or (.Query.Artist) (.Query.Album) }}{{else}}{{ .Keywords }}{{end}}',
      'SearchTorrentsForm[sort]': '{{ .Config.sort }}',
      'SearchTorrentsForm[sortType]': '{{ .Config.type }}',
      'go-search': 'Search',
    },
    rows: { selector: '.smallalbum' },
    fields: {
      title: { selector: 'a h3' },
      banner: { selector: '.thumb a img', attribute: 'src' },
      details: { selector: '.thumb a', attribute: 'href' },
      download: {
        selector: '.center a[href^="/torrents/download/id/"]',
        attribute: 'href',
      },
      date: { text: 'now' },
      seeders: { selector: '.center font:nth-of-type(1)' },
      leechers: { selector: '.center font:nth-of-type(2)' },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
      category: {
        selector: '.smallalbum',
        remove: 'div.thumb, div.center, a',
        case: {
          ':contains("Type: Music")': 'Music',
          ':contains("Type: Video")': 'Video',
          ':contains("Type: Books")': 'Books',
        },
      },
      size: {
        selector: '.smallalbum',
        filters: [{ name: 'regexp', args: 'Size:\\s+([\\w\\d\\.,]+ \\w\\w)' }],
      },
    },
  },
  source: 'jackett',
};
