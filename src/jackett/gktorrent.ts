import { TopLevel } from '../definition-interface';
export const definition: TopLevel = {
  site: 'gktorrent',
  name: 'GkTorrent',
  description: 'GkTorrent is a French Public site for TV / MOVIES / GENERAL',
  language: 'fr-FR',
  type: 'public',
  encoding: 'UTF-8',
  followredirect: true,
  links: ['https://www.gktorrent.net/'],
  legacylinks: [
    'https://www.gktorrent.com/',
    'http://www.gktorrent.com/',
    'http://ww1.gktorrent.com/',
    'http://ww2.gktorrent.com/',
    'https://ww2.gktorrent.com/',
    'https://ww3.gktorrent.com/',
    'http://www.gktorrent.net/',
    'https://ww4.gktorrent.com/',
    'http://www.gktorrent.co/',
    'https://www.gktorrent.co/',
    'https://www.gktorrent.ws/',
    'https://www.gktorrent.org/',
    'https://www.gktorrent.me/',
    'https://www.rantop.org/',
  ],
  caps: {
    categorymappings: [
      { id: 'movies', cat: 'Movies', desc: 'Movies' },
      { id: 'tvshows', cat: 'TV', desc: 'TV Shows' },
      { id: 'softwares', cat: 'PC', desc: 'Softwares' },
      { id: 'music', cat: 'Audio', desc: 'Music' },
      { id: 'console-games', cat: 'Console', desc: 'Console Games' },
      { id: 'pc-games', cat: 'PC/Games', desc: 'PC Games' },
      { id: 'books', cat: 'Books', desc: 'Books' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
  },
  settings: [],
  download: { selector: 'a[href*="/get_torrent/"]' },
  search: {
    paths: [
      { path: '{{if .Keywords}}/recherche/{{.Keywords}}{{else}}{{end}}' },
    ],
    rows: { selector: 'div.listing-torrent > table > tbody > tr:has(a)' },
    fields: {
      site_date: {
        selector: 'td:nth-child(1) a',
        filters: [{ name: 'regexp', args: '(\\w+)$' }],
      },
      title: {
        selector: 'td:nth-child(1) a',
        filters: [
          {
            name: 'replace',
            args: ['FRENCH', '{{ .Result.site_date }} FRENCH'],
          },
          {
            name: 'replace',
            args: ['TRUEFRENCH', '{{ .Result.site_date }} TRUEFRENCH'],
          },
          {
            name: 'replace',
            args: ['VOSTFR', '{{ .Result.site_date }} VOSTFR'],
          },
          { name: 're_replace', args: ['(\\w+)$', ''] },
        ],
      },
      details: { selector: 'td:nth-child(1) a', attribute: 'href' },
      download: { selector: 'td:nth-child(1) a', attribute: 'href' },
      size: { selector: 'td:nth-child(2)' },
      seeders: { selector: 'td:nth-child(3)' },
      leechers: { selector: 'td:nth-child(4)' },
      downloadvolumefactor: { text: '0' },
      uploadvolumefactor: { text: '1' },
      category: {
        selector: 'td:nth-child(1) > i',
        case: {
          '.Films': 'movies',
          '.Séries': 'tvshows',
          '.Logiciels': 'softwares',
          '.Musique': 'music',
          '.Jeux-Consoles': 'console-games',
          '.Jeux-PC': 'pc-games',
          '.Ebook': 'books',
        },
      },
      date: { text: 'now' },
    },
  },
};