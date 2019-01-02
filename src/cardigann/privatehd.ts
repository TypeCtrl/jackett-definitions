import { TopLevel } from '../definition-interface';
export const definition: TopLevel = {
  site: 'privatehd',
  name: 'PrivateHD',
  language: 'en-US',
  links: ['https://privatehd.to'],
  caps: {
    categories: {
      'TV-Show Torrent': 'TV',
      'Movie Torrent': 'Movies',
      'Music Torrent': 'Audio',
    },
  },
  login: {
    path: '/auth/login',
    form: 'form',
    inputs: {
      email_username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [
      {
        path: '/auth/login',
        message: { selector: '.alert > p:nth-child(2)' },
      },
    ],
    test: { path: '/account' },
  },
  search: {
    path: '/torrents?in=0&search={{ .Query.Keywords}}',
    rows: {
      selector: 'table.table:nth-child(3) > tbody:nth-child(2) > tr',
    },
    fields: {
      category: {
        selector: 'td:nth-child(1) > i:nth-child(1)',
        attribute: 'title',
      },
      title: { selector: 'td .torrent-file .torrent-filename' },
      details: {
        selector: 'td .torrent-file .torrent-filename',
        attribute: 'href',
      },
      download: {
        selector: 'td .torrent-download-icon',
        attribute: 'href',
      },
      size: { selector: 'td:nth-child(6)' },
      date: { selector: 'td:nth-child(4) > span', attribute: 'title' },
      seeders: { selector: 'td:nth-child(7)' },
      leechers: { selector: 'td:nth-child(8)' },
    },
  },
  encoding: 'UTF-8',
};
