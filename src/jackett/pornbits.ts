import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'pornbits',
  name: 'Pornbits',
  description: 'Pornbits (PB) is a Private Torrent Tracker for 3X',
  language: 'en-US',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://pornbits.net/'],
  legacylinks: ['https://pornbits.org/'],
  caps: {
    modes: { search: ['q'], 'tv-search': ['q'], 'movie-search': ['q'] },
    categorymappings: [{ id: 'xxx', cat: 'XXX' }],
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
      default: 'date_desc',
      options: {
        date_desc: 'created desc',
        date_asc: 'created asc',
        seeds_desc: 'seeders desc',
        seeds_asc: 'seeders asc',
        size_desc: 'size desc',
        size_asc: 'size asc',
      },
    },
  ],
  login: {
    path: 'login',
    method: 'form',
    form: 'form#login',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [{ selector: 'div.alert-danger' }],
    test: { path: 'home', selector: 'a[href="/logout"]' },
  },
  search: {
    paths: [
      {
        path:
          'browse/{{ if or .Keywords .Config.freeleech }}search/{{ .Config.sort }}/{{ else }}index/{{ .Config.sort }}/{{ end }}{{ if .Config.freeleech }}free{{ else }}name{{ end }}{{ if .Keywords }}/{{ .Keywords }}{{ else }}{{ end }}',
      },
    ],
    rows: { selector: 'tr.default, tr.danger, tr.success' },
    fields: {
      category: { text: 'xxx' },
      title: { selector: 'a[href*="/torrent/details/"]' },
      details: {
        selector: 'a[href*="/torrent/details/"]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href*="/torrent/download/"]',
        attribute: 'href',
      },
      banner: {
        selector: 'div.torrent-name-hover img',
        attribute: 'src',
      },
      date: {
        selector: 'td:nth-child(4) div:nth-child(2):contains("-")',
        optional: true,
        filters: [
          { name: 'append', args: ' -07:00' },
          { name: 'dateparse', args: '3:04pm 2006-01-02 -07:00' },
        ],
      },
      size: { selector: 'td:nth-child(5) div:nth-child(1)' },
      files: {
        selector: 'td:nth-child(5) div:nth-child(2)',
        filters: [{ name: 'regexp', args: '(\\d+)' }],
      },
      seeders: { selector: 'td:nth-child(6)' },
      leechers: { selector: 'td:nth-child(7)' },
      grabs: { selector: 'td:nth-child(8)' },
      downloadvolumefactor: {
        case: { 'img[src="/images/glyphicons_069_gift.png"]': 0, '*': 1 },
      },
      uploadvolumefactor: { text: 1 },
      minimumratio: { text: 0.9 },
    },
  },
  source: 'jackett',
};
