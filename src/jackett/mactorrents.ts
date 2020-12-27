import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'mactorrents',
  name: 'MacTorrents',
  description: 'MacTorrents is a Public tracker for Mac software',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://mac-torrents.io/'],
  legacylinks: ['https://mac-torrents.com/', 'https://www.mac-torrents.com/'],
  caps: {
    categorymappings: [
      { id: 'mac-os-apps', cat: 'PC/Mac', desc: 'Apps' },
      { id: 'games', cat: 'PC/Games', desc: 'Games' },
      { id: 'uncategorized', cat: 'Other', desc: 'Uncategorized' },
    ],
    modes: { search: ['q'] },
  },
  settings: [
    {
      name: 'flaresolverr',
      type: 'info',
      label: 'FlareSolverr',
      default:
        'This site may use Cloudflare DDoS Protection, therefore Jackett requires <a href="https://github.com/Jackett/Jackett#configuring-flaresolverr" target="_blank">FlareSolver</a> to access it.',
    },
  ],
  search: {
    paths: [{ path: '/' }],
    inputs: { s: '{{ .Keywords }}' },
    rows: {
      selector: 'div.iso-item article:has(a.download)',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      title: { selector: 'div.blog-content h3 a' },
      category: {
        selector: 'a[href*="/mac-os-apps/"], a[href*="/games/"], a[href*="/uncategorized/"]',
        attribute: 'href',
        filters: [{ name: 'split', args: ['/', 3] }],
      },
      details: { selector: 'div.blog-content h3 a', attribute: 'href' },
      download: { selector: 'a.download', attribute: 'href' },
      poster: {
        selector: 'div.blog-media p a img',
        attribute: 'data-src',
      },
      date: {
        selector: 'time',
        attribute: 'datetime',
        filters: [
          { name: 'replace', args: ['T', ' '] },
          { name: 'dateparse', args: '2006-01-02 15:04:05-07:00' },
        ],
      },
      size: { text: '512 MB' },
      seeders: { text: 1 },
      leechers: { text: 1 },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
