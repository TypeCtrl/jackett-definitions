import { TopLevel } from '../definition-interface';
export const definition: TopLevel = {
  site: 'tenyardtracker',
  name: 'TenYardTracker',
  description: 'An American football tracker',
  language: 'en-US',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://tenyardtracker.com/'],
  legacylinks: ['http://tenyardtracker.com/'],
  caps: {
    categories: { '1': 'TV' },
    modes: { search: ['q'], 'tv-search': ['q', 'season', 'ep'] },
  },
  login: {
    path: 'members.php?action=takelogin',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [{ selector: 'div:contains("Login Failed")' }],
    test: { path: 'my.php' },
  },
  ratio: { path: 'browse.php', selector: null },
  search: {
    paths: [{ path: 'browse.php' }],
    inputs: {
      $raw: '{{range .Categories}}filter_cat[{{.}}]=1&{{end}}',
      search: '{{ .Query.Keywords }}',
    },
    rows: { selector: 'table[border="1"] tr:not(:first-child)' },
    fields: {
      category: { text: 1 },
      title: { selector: 'td:nth-child(2)' },
      download: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
        filters: [
          {
            name: 'replace',
            args: ['details.php?id=', 'download.php?torrent='],
          },
        ],
      },
      details: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
      },
      files: { selector: 'td:nth-child(3)' },
      date: { selector: 'td:nth-child(5)' },
      size: { selector: 'td:nth-child(6)' },
      seeders: { selector: 'td:nth-child(8)' },
      leechers: { selector: 'td:nth-child(9)' },
      downloadvolumefactor: { case: { '*': '1' } },
      uploadvolumefactor: { case: { '*': '1' } },
    },
  },
};
