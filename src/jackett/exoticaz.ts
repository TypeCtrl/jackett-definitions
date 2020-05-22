import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'exoticaz',
  name: 'ExoticaZ',
  description: 'ExoticaZ (YourExotic) is a Private Torrent Tracker for 3X',
  language: 'en-US',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://exoticaz.to/'],
  legacylinks: ['https://torrents.yourexotic.com/'],
  caps: {
    categorymappings: [{ id: '1', cat: 'XXX', desc: 'DVDRip' }],
    modes: { search: ['q'], 'tv-search': ['q'], 'movie-search': ['q'] },
  },
  login: {
    path: 'login',
    method: 'form',
    inputs: {
      username_email: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      remember: 'on',
    },
    error: [{ selector: 'div.invalid-feedback' }],
    test: { selector: 'div.ratio-bar' },
  },
  search: {
    inputs: { in: 1, search: '{{ .Keywords }}', category: 0 },
    rows: { selector: 'div.table-responsive > table > tbody > tr' },
    fields: {
      category: { text: 1 },
      title: { selector: 'a.torrent-link', attribute: 'title' },
      details: { selector: 'a.torrent-link', attribute: 'href' },
      download: {
        selector: 'a[href*="/download/"]',
        attribute: 'href',
      },
      banner: {
        selector: '.screen-image',
        attribute: 'data-screens',
        filters: [{ name: 'split', args: ['|', 0] }],
      },
      date: {
        selector: 'td:nth-last-child(5)',
        filters: [{ name: 'append', args: ' ago' }],
      },
      size: { selector: 'td:nth-last-child(4)' },
      seeders: { selector: 'td:nth-last-child(3)' },
      leechers: { selector: 'td:nth-last-child(2)' },
      grabs: { selector: 'td:nth-last-child(1)' },
      downloadvolumefactor: {
        case: {
          'i[title="Free Download"]': 0,
          'i[title="Half Download"]': 0.5,
          '*': 1,
        },
      },
      uploadvolumefactor: { case: { 'i.fa-gem': 2, '*': 1 } },
    },
    paths: [{ path: 'torrents' }],
  },
  source: 'jackett',
};