import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'gtorrentpro',
  name: 'GTorrent.pro',
  description: 'GTorrent.pro is a RUSSIAN Public Torrent Tracker for MOVIES / TV / GENERAL',
  language: 'ru-RU',
  type: 'public',
  encoding: 'WINDOWS-1251',
  links: ['http://gtorrent.pro/'],
  caps: {
    categorymappings: [
      { id: 'filmy', cat: 'Movies', desc: 'Фильмы (Movies)' },
      { id: 'muzyka', cat: 'Audio', desc: 'Музыка (Music)' },
      { id: 'igry', cat: 'Console', desc: 'Игры (Games)' },
      { id: 'serialy', cat: 'TV', desc: 'Сериалы (TV series)' },
      { id: 'programmy', cat: 'PC', desc: 'Программы (Software)' },
    ],
    modes: { search: ['q'] },
  },
  settings: [],
  download: {
    selector: 'a[href^="/engine/download.php?id="]',
    attribute: 'href',
  },
  search: {
    paths: [{ path: 'index.php' }],
    inputs: {
      do: 'search',
      subaction: 'search',
      search_start: 0,
      full_search: 0,
      result_from: 1,
      story: '{{ if .Keywords }}{{ .Keywords }}{{ else }}{{ .Today.Year }}{{ end }}',
    },
    rows: {
      selector: 'div.blog_brief_news:not(div.first_line):not(:has(div.uploaded:empty))',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      category: {
        selector: 'div.name a',
        attribute: 'href',
        filters: [{ name: 'split', args: ['/', 3] }],
      },
      title: { selector: 'div.name' },
      details: { selector: 'div.name a', attribute: 'href' },
      download: { selector: 'div.name a', attribute: 'href' },
      date: { text: 'now' },
      size: { selector: 'div:nth-child(2)' },
      seeders: { selector: 'div.uploaded' },
      leechers: { selector: 'div.download' },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
