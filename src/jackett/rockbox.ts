import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'RockBox',
  name: 'RockBox Rock/Metal Tracker',
  description:
    'RockBox Semi-Private site dedicated to HEAVY METAL/ROCK MUSIC. This definition is for the English site.',
  language: 'en-US',
  type: 'semi-private',
  encoding: 'UTF-8',
  links: ['https://rawkbawx.rocks/'],
  caps: {
    modes: {
      search: ['q'],
      'music-search': ['q', 'album', 'artist', 'label', 'year'],
    },
    categorymappings: [{ id: 'Music', cat: 'Audio' }],
  },
  settings: [
    { name: 'username', type: 'text', label: 'Username' },
    { name: 'password', type: 'password', label: 'Password' },
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: 'data',
      options: {
        data: 'created',
        seeds: 'seeders',
        size: 'size',
        filename: 'title',
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
    path: 'login.php',
    method: 'form',
    form: 'form[action="login.php?returnto=index.php"]',
    inputs: {
      uid: '{{ .Config.username }}',
      pwd: '{{ .Config.password }}',
    },
    error: [
      {
        selector: 'div.errorSummary',
        message: { selector: 'div.errorSummary ul li' },
      },
    ],
    test: { path: 'index.php', selector: 'a[href="logout.php"]' },
  },
  search: {
    paths: [{ path: 'torrents.php' }],
    inputs: {
      search:
        '{{ if or (.Query.Artist) (.Query.Album) }}{{ or (.Query.Artist) (.Query.Album) }}{{else}}{{ .Keywords }}{{end}}',
      active: 0,
      options: 0,
      order: '{{ .Config.sort }}',
      by: '{{ .Config.type }}',
    },
    rows: {
      selector: 'table.lista[width="100%"] tbody tr:has(a[href^="download.php?id="])',
    },
    fields: {
      title: { selector: 'td a[href^="details.php?id="]' },
      details: {
        selector: 'td a[href^="details.php?id="]',
        attribute: 'href',
      },
      comments: {
        selector: 'td a[href^="details.php?id="]',
        attribute: 'href',
      },
      download: {
        selector: 'td a[href^="download.php?id="]',
        attribute: 'href',
      },
      date: {
        selector: 'td:nth-child(6):not(:contains("/"))',
        optional: true,
        filters: [{ name: 'timeago' }],
      },
      size: { selector: 'td:nth-child(7)' },
      seeders: { selector: 'td:nth-child(9)' },
      leechers: { selector: 'td:nth-child(10)' },
      grabs: { selector: 'td:nth-child(11)' },
      category: { text: 'Music' },
      downloadvolumefactor: { text: 1 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
