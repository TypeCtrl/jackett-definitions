import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'torrentfunk',
  name: 'TorrentFunk',
  description: 'TorrentFunk is a Public torrent index',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  followredirect: true,
  links: ['https://www.torrentfunk.com/', 'https://www.torrentfunk2.com/', 'https://torrentfunk.unblockit.club/'],
  legacylinks: [
    'https://torrentfunk.unblockit.pro/',
    'https://torrentfunk.unblockit.one/',
    'https://torrentfunk.unblockit.me/',
    'https://torrentfunk.unblockit.pw/',
    'https://torrentfunk.unblockit.id/',
    'https://torrentfunk.unblockit.win/',
    'https://torrentfunk.unblockit.top/',
    'https://torrentfunk.unblockit.lat/',
    'https://torrentfunk.unblockit.app/',
    'https://torrentfunk.unblockit.dev/',
    'https://torrentfunk.unblockit.ltd/',
    'https://torrentfunk.unblockit.link/',
    'https://torrentfunk.unblockit.buzz/',
  ],
  caps: {
    categorymappings: [
      { id: '1', cat: 'Movies', desc: 'Movies' },
      { id: '2', cat: 'Audio', desc: 'Music' },
      { id: '3', cat: 'TV', desc: 'Television' },
      { id: '4', cat: 'PC/Games', desc: 'Games' },
      { id: '5', cat: 'PC', desc: 'Software' },
      { id: '6', cat: 'TV/Anime', desc: 'Anime' },
      { id: '7', cat: 'XXX', desc: 'Adult' },
      { id: '8', cat: 'Other', desc: 'Other(tbd)' },
      { id: '9', cat: 'Other', desc: 'Other(tbd)' },
      { id: '0', cat: 'Other', desc: 'Other(tbd)' },
      { id: '10', cat: 'Other', desc: 'Other(tbd)' },
      { id: '11', cat: 'Other', desc: 'Other(tbd)' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
      'music-search': ['q'],
    },
  },
  settings: [],
  search: {
    paths: [{ path: 'all/torrents/{{ .Keywords }}.html' }],
    keywordsfilters: [{ name: 're_replace', args: ['[\\s]+', '-'] }, { name: 'tolower' }],
    rows: {
      selector: 'table.tmain tbody tr:has(a[href^="/torrent/"])',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      category: {
        selector: 'td[class^="tv"], td[class^="tn"]',
        attribute: 'class',
        filters: [{ name: 'regexp', args: '(\\d+)' }],
      },
      title: { selector: 'div a[href^="/torrent/"]' },
      details: {
        selector: 'div a[href^="/torrent/"]',
        attribute: 'href',
      },
      download: {
        selector: 'div a[href^="/torrent/"]',
        attribute: 'href',
        filters: [
          { name: 'split', args: ['/', 2] },
          { name: 'prepend', args: '/tor/' },
          { name: 'append', args: '.torrent' },
        ],
      },
      date: {
        selector: 'td:nth-child(2):not(:contains("day"))',
        optional: true,
        filters: [
          { name: 'append', args: ' -07:00' },
          { name: 'dateparse', args: '2 Jan -07:00' },
        ],
      },
      size: { selector: 'td:nth-child(3)' },
      seeders: { selector: 'td:nth-child(4)' },
      leechers: { selector: 'td:nth-child(5)' },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
