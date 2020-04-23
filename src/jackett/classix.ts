import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'classix',
  name: 'Classix',
  description: 'Classic movie tracker',
  language: 'en-US',
  type: 'private',
  encoding: 'UTF-8',
  links: ['http://classix-unlimited.co.uk/'],
  caps: {
    categorymappings: [{ id: '1', cat: 'Movies', desc: 'Movies' }],
    modes: { search: ['q'], 'movie-search': ['q'] },
  },
  login: {
    path: 'account-login.php',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [{ selector: 'div.myContent:contains("Access Denied")' }],
    test: { path: 'index.php' },
  },
  download: {
    selector: 'a[href^="download.php?id="]',
    attribute: 'href',
  },
  search: {
    paths: [{ path: 'torrents-search.php' }],
    inputs: {
      $raw: '{{range .Categories}}filter_cat[{{.}}]=1&{{end}}',
      search: '{{if .Keywords}}"{{.Keywords}}"{{else}}{{end}}',
    },
    rows: {
      selector: 'table > tbody > tr:has(a[href^="torrents.php?cat="])',
    },
    fields: {
      category: { text: 1 },
      title: { selector: 'td:nth-child(3)' },
      download: {
        selector: 'a[href^="torrents-details.php?id="]',
        attribute: 'href',
        filters: [
          {
            name: 'replace',
            args: ['torrents-details.php?id=', 'download.php?id='],
          },
        ],
      },
      details: {
        selector: 'a[href^="torrents-details.php?id="]',
        attribute: 'href',
      },
      size: { selector: 'td:nth-child(7)' },
      seeders: { selector: 'td:nth-child(8)' },
      leechers: { selector: 'td:nth-child(9)' },
      downloadvolumefactor: { case: { '*': '1' } },
      uploadvolumefactor: { case: { '*': '1' } },
    },
  },
  source: 'jackett',
};
