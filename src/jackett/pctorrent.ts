import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'pctorrent',
  name: 'PC-torrent',
  description: 'PC-torrent is a RUSSIAN Public Torrent Tracker for Games',
  language: 'ru-RU',
  type: 'public',
  encoding: 'WINDOWS-1251',
  links: ['https://pc-torrent.org/'],
  caps: {
    categorymappings: [{ id: '1', cat: 'PC/Games', desc: 'Games' }],
    modes: { search: ['q'] },
  },
  settings: [],
  download: {
    selector: 'a[href*="/engine/download.php?id="]',
    attribute: 'href',
  },
  search: {
    paths: [
      {
        path:
          '{{ if .Keywords }}?do=search&subaction=search&search_start=0&full_search=1&result_from=1&story={{ .Keywords }}{{else}}{{end}}',
      },
    ],
    rows: {
      selector: 'div.dshort:has(div.d3-raz):not(:has(div.d3-raz:contains("Анонс!")))',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      category: { text: 1 },
      title: { selector: 'div.d3-title' },
      details: { selector: 'a', attribute: 'href' },
      download: { selector: 'a', attribute: 'href' },
      banner: { selector: 'img', attribute: 'src', optional: true },
      date: { text: 'now' },
      size: { selector: 'div.d3-raz' },
      seeders: { text: 1 },
      leechers: { text: 1 },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};