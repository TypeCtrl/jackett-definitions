import { TopLevel } from '../definition-interface';
export const definition: TopLevel = {
  site: 'awesomehd',
  name: 'Awesome-HD',
  description: 'An HD tracker',
  language: 'en-US',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://awesome-hd.me'],
  caps: {
    categorymappings: [
      { id: '1', cat: 'Movies/HD', desc: 'Movies' },
      { id: '2', cat: 'TV/HD', desc: 'TV-Shows' },
    ],
    modes: { searchstr: ['q'] },
  },
  settings: [{ name: 'cookie', type: 'text', label: 'Cookie' }],
  login: {
    method: 'cookie',
    inputs: { cookie: '{{ .Config.cookie }}' },
    test: { path: 'index.php' },
  },
  search: {
    paths: [{ path: 'torrents.php' }],
    inputs: {
      $raw: '{{range .Categories}}filter_cat[{{.}}]=1&{{end}}',
      searchstr: '{{ .Query.Keywords }}',
      page: 'torrents',
    },
    rows: {
      selector:
        'table#torrent_table > tbody > tr.group, tr.torrent, tr.group_torrent:not(.edition_info)',
    },
    fields: {
      download: {
        selector: 'a[href^="torrents.php?action=download&id="]',
        attribute: 'href',
        optional: true,
      },
      details: {
        selector: 'a[href^="torrents.php?id="]',
        attribute: 'href',
      },
      title: { selector: 'td:nth-child(3) > a' },
      category: { selector: 'td:nth-child(2)' },
      date: { selector: 'td:nth-last-child(5)' },
      size: { selector: 'td:nth-last-child(4)' },
      grabs: { selector: 'td:nth-last-child(3)' },
      seeders: { selector: 'td:nth-last-child(2)' },
      leechers: { selector: 'td:nth-last-child(1)' },
      downloadvolumefactor: { case: { '*': '1' } },
      uploadvolumefactor: { case: { '*': '1' } },
    },
  },
};