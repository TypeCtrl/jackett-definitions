import { TopLevel } from '../definition-interface';
export const definition: TopLevel = {
  site: 'ilcorsaroblu',
  name: 'Il Corsaro Blu',
  description:
    'Il Corsaro Blu is an ITALIAN Public site for TV / MOVIES / GENERAL',
  language: 'it-IT',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://www.ilcorsaroblu.org/'],
  legacylinks: ['http://ilcorsaroblu.org/', 'https://www.ilcorsaroblu.info/'],
  certificates: ['e6dd93ef71f96d04559e2bee8cc8e6fd74957730'],
  caps: {
    categorymappings: [
      { id: '12', cat: 'XXX', desc: 'Adult' },
      { id: '5', cat: 'PC/Phone-Android', desc: 'Android' },
      { id: '6', cat: 'Books', desc: 'Books' },
      { id: '3', cat: 'Other', desc: 'Games' },
      { id: '2', cat: 'Audio', desc: 'Music' },
      { id: '17', cat: 'Movies/SD', desc: 'Movie BDRip' },
      { id: '21', cat: 'Movies/Other', desc: 'Movies - Films' },
      { id: '11', cat: 'Movies/DVD', desc: 'DVD-R' },
      { id: '14', cat: 'Movies/HD', desc: 'Movie 720p' },
      { id: '13', cat: 'Movies/HD', desc: 'Movie 1080p' },
      { id: '15', cat: 'Movies/3D', desc: 'Movie 3D' },
      { id: '24', cat: 'TV/Other', desc: 'TV Show Standard' },
      { id: '19', cat: 'TV/HD', desc: 'Tv Show 1080p' },
      { id: '20', cat: 'TV/HD', desc: 'Tv Show 720' },
      { id: '4', cat: 'Other', desc: 'Other' },
      { id: '7', cat: 'PC', desc: 'Windows' },
      { id: '8', cat: 'Other', desc: 'Linux' },
      { id: '9', cat: 'PC/Mac', desc: 'Mac' },
      { id: '23', cat: 'Other', desc: 'Archive' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
  },
  settings: [],
  search: {
    paths: [{ path: '/index.php' }],
    keywordsfilters: [
      { name: 'diacritics', args: 'replace' },
      { name: 're_replace', args: ['(?i)\\bS0*(\\d+)\\b', '$1'] },
      {
        name: 're_replace',
        args: ['(?i)\\bS0*(\\d+)E0*(\\d+)\\b', '$1 $2'],
      },
    ],
    inputs: {
      search: '{{ .Keywords }}',
      category: '{{range .Categories}}{{.}};{{end}}',
      page: 'torrents',
      active: 0,
    },
    rows: {
      selector:
        'div.b-content > table > tbody > tr > td > table.lista > tbody > tr:has(a[href^="index.php?page=torrents&category="])',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      title: {
        selector: 'td:nth-child(2) > a',
        filters: [
          { name: 're_replace', args: ['[^a-zA-Z0-9\\s]|\\.', ' '] },
          { name: 're_replace', args: ['[ ]{2,}', ' '] },
          {
            name: 're_replace',
            args: ['(?i)\\bS(\\d+)\\sE(\\d+)\\b', 'S$1E$2'],
          },
          { name: 're_replace', args: ['(?i)(\\d{2})x(\\d+)', 'S$1E$2'] },
          {
            name: 're_replace',
            args: ['(?i)\\b(\\d{1})x(\\d+)', 'S0$1E$2'],
          },
          {
            name: 're_replace',
            args: [
              "(?i)\\bStagion[ei]\\s?(\\d{1})\\b|\\bSeason'?s?\\s?(\\d{1})\\b",
              'S0$1$2',
            ],
          },
          {
            name: 're_replace',
            args: [
              "(?i)\\bStagion[ei]\\s?(\\d{2,})\\b|\\bSeason'?s?\\s?(\\d{2,})\\b",
              'S$1$2',
            ],
          },
          {
            name: 're_replace',
            args: [
              '(?i)\\b(?:[\\/\\|]?Episodio\\s?(\\d+)|Puntata\\s?(\\d+))',
              'E$1$2',
            ],
          },
          {
            name: 're_replace',
            args: ['(?i)\\b(?:Puntate\\s*)(\\d+)\\s?(\\d+)', 'E0$1-0$2'],
          },
          {
            name: 're_replace',
            args: ['(?i)(Serie completa|Completat?a?|in pausa)', ''],
          },
        ],
      },
      download: {
        optional: true,
        selector: 'a[href^="download.php?id="]',
        attribute: 'href',
        filters: [
          { name: 'querystring', args: 'id' },
          { name: 'toupper' },
          { name: 'prepend', args: 'http://itorrents.org/torrent/' },
          { name: 'append', args: '.torrent' },
        ],
      },
      _magnetfilename: {
        text: '{{ .Result.title }}',
        filters: [{ name: 'validfilename' }, { name: 'urlencode' }],
      },
      magnet: {
        optional: true,
        selector: 'a[href^="magnet:?xt="]',
        attribute: 'href',
      },
      category: {
        selector: 'a[href^="index.php?page=torrents&category="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'category' }],
      },
      details: { selector: 'td:nth-child(2) > a', attribute: 'href' },
      size: { selector: 'td:nth-last-child(2)' },
      date: {
        selector: "td:nth-last-child(6):contains('/')",
        optional: true,
        filters: [{ name: 'dateparse', args: '02/01/2006' }],
      },
      grabs: {
        selector: 'td:nth-last-child(3)',
        filters: [{ name: 'replace', args: ['---', '0'] }],
      },
      seeders: { selector: 'td:nth-last-child(5)' },
      leechers: { selector: 'td:nth-last-child(4)' },
      downloadvolumefactor: { text: '0' },
      uploadvolumefactor: { text: '1' },
    },
  },
};