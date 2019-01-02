import { TopLevel } from '../definition-interface';
export const definition: TopLevel = {
  site: 'aox',
  name: 'AOX',
  description:
    'AOX (Chippu) is a Private Torrent Tracker for ASIAN MOVIES / TV',
  language: 'en-US',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://aox.to/'],
  caps: {
    categorymappings: [
      { id: 13, cat: 'Movies', desc: 'Movie' },
      { id: 11, cat: 'TV', desc: 'TV-Show' },
      { id: 5, cat: 'TV/Other', desc: 'Variety Show' },
      { id: 24, cat: 'XXX', desc: 'Adult' },
    ],
    modes: { search: ['q'], 'tv-search': ['q', 'season', 'ep'] },
  },
  login: {
    path: 'index.php?page=login',
    method: 'post',
    inputs: {
      uid: '{{ .Config.username }}',
      pwd: '{{ .Config.password }}',
    },
    error: [
      {
        selector: 'body[onLoad^="makeAlert(\'"]',
        message: {
          selector: 'body[onLoad^="makeAlert(\'"]',
          attribute: 'onLoad',
          filters: [
            { name: 'replace', args: ["makeAlert('Error' , '", ''] },
            { name: 'replace', args: ["');", ''] },
          ],
        },
      },
    ],
    test: { path: 'index.php' },
  },
  search: {
    paths: [{ path: 'index.php' }],
    inputs: {
      search: '{{ .Query.Keywords }}',
      page: 'torrents',
      category: '{{range .Categories}}{{.}};{{end}}',
      options: '0',
      active: '0',
    },
    rows: {
      selector:
        'table.table.table-bordered > tbody > tr:has(a[href^="index.php?page=torrent-details&id="])',
    },
    fields: {
      download: {
        selector: 'a[href^="download.php"]',
        attribute: 'href',
      },
      title: {
        selector: 'a[title][href^="index.php?page=torrent-details&id="]',
      },
      banner: { selector: 'img[src^="torrentimg/"]', attribute: 'src' },
      category: {
        selector: 'a[href^="index.php?page=torrents&category="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'category' }],
      },
      details: {
        selector: 'a[title][href^="index.php?page=torrent-details&id="]',
        attribute: 'href',
      },
      size: { selector: 'p:has(b:contains("Size:"))', remove: 'b' },
      date: {
        selector: 'p:has(b:contains("Added:"))',
        remove: 'b',
        filters: [
          { name: 'replace', args: ['@ ', ''] },
          { name: 'append', args: ' +01:00' },
          { name: 'dateparse', args: '01/02/2006 15:04:05 -07:00' },
        ],
      },
      seeders: { selector: 'b:contains("Seeds:") + a' },
      leechers: { selector: 'b:contains("Leechers:") + a' },
      grabs: {
        selector: 'p:has(b:contains("Complete:"))',
        remove: 'b, a[href^="index.php?page=peers"]',
        filters: [{ name: 'replace', args: ['---', '0'] }],
      },
      downloadvolumefactor: {
        case: {
          'i.fa-star': '0',
          'i.fa-star-half-o': '0.5',
          'i.fa-star-o': '0.75',
          '*': '1',
        },
      },
      uploadvolumefactor: {
        case: { 'span[title="2x Upload Multiplier"]': '2', '*': '1' },
      },
      description: { selector: 'p:has(b:contains("Language:"))' },
    },
  },
};
