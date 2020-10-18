import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'backups',
  name: 'Back-ups',
  description: 'Back-Ups is a Private Torrent Tracker for MOVIES / TV / GENERAL',
  language: 'en-US',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://back-ups.me/'],
  caps: {
    categorymappings: [
      { id: '12', cat: 'Console', desc: 'XBOX360' },
      { id: '9', cat: 'TV', desc: 'TV-Boxsets' },
      { id: '3', cat: 'PC', desc: 'Apps' },
      { id: '24', cat: 'PC', desc: 'Apple' },
      { id: '11', cat: 'TV', desc: 'TV/x264' },
      { id: '23', cat: 'Console', desc: 'Visionary' },
      { id: '14', cat: 'TV/Sport', desc: 'WWE' },
      { id: '26', cat: 'Console', desc: 'Xbox' },
      { id: '13', cat: 'Console', desc: 'XBOX-JTAG' },
      { id: '35', cat: 'Movies/Other', desc: 'Anime' },
      { id: '4', cat: 'Movies/BluRay', desc: 'Blu-Ray' },
      { id: '6', cat: 'Movies', desc: 'Movies/XVID' },
      { id: '10', cat: 'TV', desc: 'TV/Xvid' },
      { id: '29', cat: 'TV/Sport', desc: 'Sport' },
      { id: '40', cat: 'TV', desc: 'Soaps' },
      { id: '27', cat: 'Console', desc: 'Roms and Emulators' },
      { id: '30', cat: 'Console', desc: 'Playstation' },
      { id: '7', cat: 'Audio', desc: 'Music' },
      { id: '16', cat: 'TV/Documentary', desc: 'Docu' },
      { id: '5', cat: 'Books', desc: 'EBooks' },
      { id: '38', cat: 'Console', desc: 'Hyperspin Bolt-on Edition' },
      { id: '34', cat: 'TV', desc: 'Kids' },
      { id: '8', cat: 'PC/Games', desc: 'PC Games' },
      { id: '22', cat: 'PC/Games', desc: 'CoinOPS' },
      { id: '33', cat: 'TV/Sport', desc: 'MMA/Boxing' },
      { id: '32', cat: 'Movies', desc: 'Movie Pack' },
      { id: '31', cat: 'Console', desc: 'Nintendo' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
      'music-search': ['q'],
      'book-search': ['q'],
    },
  },
  login: {
    path: 'takelogin.php',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [{ selector: 'td:contains("remaining tries")' }],
    test: { path: 'browse.php', selector: 'a[href*="/logout.php"]' },
  },
  search: {
    paths: [{ path: 'browse.php' }],
    keywordsfilters: [
      {
        name: 're_replace',
        args: ['(?:^|\\s)[_\\+\\/\\.\\-\\(\\)]*[\\S]{0,3}[_\\+\\/\\.\\-\\(\\)]*(?:\\s|$)', ' '],
      },
    ],
    inputs: {
      do: 'search',
      keywords: '{{ .Keywords }}',
      search_type: 't_name',
      category: '0',
      include_dead_torrents: 'yes',
    },
    rows: {
      selector: 'table#sortabletable > tbody > tr:has(a[href*="/details.php?id="])',
      filters: [{ name: 'andmatch', args: 66 }],
    },
    fields: {
      title: { optional: true, selector: 'div.tooltip-content > div' },
      details: {
        selector: 'a[href*="/details.php?id="]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href*="/download.php?id="]',
        attribute: 'href',
      },
      magnet: { selector: 'a[href^="magnet:?xt="]', attribute: 'href' },
      category: {
        selector: 'a[href*="/browse.php?category="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'category' }],
      },
      size: { selector: 'td:nth-child(5)' },
      grabs: { selector: 'td:nth-child(6)' },
      seeders: { selector: 'td:nth-child(7)' },
      leechers: { selector: 'td:nth-child(8)' },
      date: {
        selector: 'td:nth-child(2) > div:has(span[style="float: right;"])',
        remove: 'span',
        filters: [
          { name: 'append', args: ' +00:00' },
          { name: 'dateparse', args: '02-01-2006 15:04 -07:00' },
        ],
      },
      banner: {
        optional: true,
        selector: 'div.tooltip-content > img',
        attribute: 'src',
      },
      downloadvolumefactor: {
        case: {
          'img[alt^="Free Torrent "]': '0',
          'img[alt^="Silver Torrent "]': '0.5',
          '*': '1',
        },
      },
      uploadvolumefactor: { case: { '*': '1' } },
    },
  },
  source: 'jackett',
};
