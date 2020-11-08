import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'fullmixmusic',
  name: 'FullMixMusic',
  description: 'FullMixMusic is a HUNGARIAN Private Torrent Tracker for MUSIC',
  language: 'hu-HU',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://fullmixmusic.org/'],
  legacylinks: ['http://fullmixmusic.org/'],
  caps: {
    modes: { search: ['q'], 'music-search': ['q', 'artist'] },
    categorymappings: [{ id: '1', cat: 'Audio' }],
  },
  login: {
    path: 'login.php',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [{ selector: 'table.main:contains("Művelet!")' }],
    test: { path: 'browse.php' },
  },
  search: {
    paths: [{ path: 'browse.php' }],
    inputs: {
      search: '{{if .Query.Artist}}{{ .Query.Artist }}{{else}}{{ .Keywords }}{{end}}',
      showsearch: '1',
      incldead: '1',
    },
    rows: {
      selector: 'table.tablak > tbody > tr:has(a[href^="details.php?id="])',
    },
    fields: {
      download: {
        selector: 'a[href^="download.php?id="]',
        attribute: 'href',
      },
      title: {
        selector: 'a[href^="details.php?id="][title]',
        attribute: 'title',
        filters: [{ name: 'regexp', args: '^(.*?)<br />' }],
      },
      poster: {
        selector: 'a[href^="details.php?id="][title]',
        attribute: 'title',
        filters: [{ name: 'regexp', args: 'src="(.*?)">' }],
      },
      category: { text: '1' },
      details: {
        selector: 'a[href^="details.php?id="][title]',
        attribute: 'href',
      },
      description: { selector: 'td:nth-child(2) > i > font' },
      size: { selector: 'td:nth-child(7)' },
      grabs: { selector: 'td:nth-child(10)' },
      seeders: { selector: 'td:nth-child(8)' },
      leechers: { selector: 'td:nth-child(9)' },
      date: {
        selector: 'td:nth-child(6)',
        filters: [
          { name: 'append', args: ' +01:00' },
          { name: 'dateparse', args: '2006-01-02 15:04:05 -07:00' },
        ],
      },
      downloadvolumefactor: { text: '0' },
      uploadvolumefactor: {
        case: {
          'font[title^="Dupla feltöltésű torrent!"]': '2',
          'font[title^="x3 feltöltésű torrent!"]': '3',
          'font[title^="x4 feltöltésű torrent!"]': '4',
          '*': '1',
        },
      },
    },
  },
  source: 'jackett',
};
