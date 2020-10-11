import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'eztv',
  name: 'EZTV',
  description: 'EZTV is a Public torrent site for TV shows',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  followredirect: true,
  links: [
    'https://eztv.io/',
    'https://eztv.yt/',
    'https://eztv.root.yt/',
    'https://eztv.unblockninja.com/',
    'https://eztv.unblockit.lat/',
    'https://eztv.unblocked.rest/',
  ],
  legacylinks: [
    'https://eztv.ag/',
    'https://eztv.re/',
    'https://eztv.it/',
    'https://eztv.ch/',
    'https://eztv.unblockit.pro/',
    'https://eztv.unblockit.one/',
    'https://eztv.black-mirror.xyz/',
    'https://eztv.unblocked.casa/',
    'https://eztv.proxyportal.fun/',
    'https://eztv.uk-unblock.xyz/',
    'https://eztv.ind-unblock.xyz/',
    'https://eztv.unblockit.me/',
    'https://eztv.unblockit.pw/',
    'https://eztv.unblockit.id/',
    'https://eztv.unblockit.win/',
    'https://eztv.unblocked.bar/',
    'https://eztv.proxyportal.pw/',
    'https://eztv.uk-unblock.pro/',
    'https://eztv.unblockit.top/',
  ],
  caps: {
    modes: { search: ['q'], 'tv-search': ['q', 'season', 'ep'] },
    categorymappings: [{ id: '1', cat: 'TV' }],
  },
  settings: [],
  search: {
    paths: [{ path: '{{ if .Keywords }}search/{{ .Keywords }}{{else}}/{{end}}' }],
    keywordsfilters: [{ name: 're_replace', args: ['S[0-9]{2}([^E]|$)', ''] }],
    rows: {
      selector: "table.forum_header_border tr[name='hover'].forum_header_border:has(a.magnet)",
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      category: { text: 1 },
      title: {
        selector: 'td:nth-child(2) a',
        attribute: 'title',
        filters: [
          { name: 'replace', args: ['[eztv]', ''] },
          { name: 're_replace', args: ['\\(.*\\)$', ''] },
          { name: 'trim' },
        ],
      },
      details: { selector: 'td:nth-child(2) a', attribute: 'href' },
      download: {
        selector: 'td:nth-child(3) a.magnet, td:nth-child(3) a',
        attribute: 'href',
      },
      size: { optional: true, selector: 'td:nth-child(4)' },
      date: {
        selector: 'td:nth-child(5)',
        filters: [{ name: 'append', args: ' ago' }],
      },
      seeders: { selector: 'td:nth-child(6)' },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
