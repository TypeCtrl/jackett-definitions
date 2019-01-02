import { TopLevel } from '../definition-interface';
export const definition: TopLevel = {
  site: 'magnetdl',
  name: 'MagnetDL',
  description: 'MagnetDL is a Public torrent Magnet Links search engine',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://www.magnetdl.com/'],
  legacylinks: ['http://www.magnetdl.com/'],
  caps: {
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
    categorymappings: [
      { id: 'TV', cat: 'TV' },
      { id: 'Movie', cat: 'Movies' },
      { id: 'Music', cat: 'Audio' },
      { id: 'E-Book', cat: 'Books/Ebook' },
      { id: 'Game', cat: 'PC/Games' },
      { id: 'Software', cat: 'PC' },
      { id: 'Other', cat: 'Other' },
    ],
  },
  settings: [],
  search: {
    headers: {
      Accept: [
        'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
      ],
    },
    keywordsfilters: [
      { name: 're_replace', args: [' ', '-'] },
      { name: 'tolower' },
    ],
    paths: [
      {
        path:
          '{{if .Keywords}}/{{ re_replace .Keywords "(.).*" "$1" }}/{{ .Keywords }}/{{else}}download/invalid-cat/{{end}}',
      },
    ],
    rows: { selector: 'tr:has(td[class="m"])' },
    fields: {
      title: { selector: 'td[class="n"] a', attribute: 'title' },
      category: { optional: true, selector: 'td[class^="t"]' },
      details: { selector: 'td[class="n"] a', attribute: 'href' },
      magnet: { selector: 'td[class="m"] a', attribute: 'href' },
      date: {
        selector: 'td:nth-child(3)',
        filters: [{ name: 'timeago' }],
      },
      size: { selector: 'td:nth-child(6)' },
      seeders: { selector: 'td[class="s"]' },
      files: { selector: 'td[class="l"]' },
      downloadvolumefactor: { text: '0' },
      uploadvolumefactor: { text: '1' },
    },
  },
};