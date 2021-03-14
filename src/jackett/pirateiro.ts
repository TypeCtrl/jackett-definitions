import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'pirateiro',
  name: 'Pirateiro',
  description: 'Pirateiro is a Public site for MOVIES / TV / GENERAL',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  followredirect: true,
  links: ['https://pirateiro.com/', 'https://pirateiro.eu/', 'https://pirateiro.unblockit.buzz/'],
  legacylinks: [
    'http://pirateiro.com/',
    'https://pirateiro.unblockit.pro/',
    'https://pirateiro.unblockit.one/',
    'https://pirateiro.unblockit.me/',
    'https://pirateiro.unblockit.pw/',
    'https://pirateiro.unblockit.id/',
    'https://pirateiro.unblockit.win/',
    'https://pirateiro.unblockit.top/',
    'https://pirateiro.unblockit.lat/',
    'https://pirateiro.unblockit.app/',
    'https://pirateiro.unblockit.dev/',
    'https://pirateiro.unblockit.ltd/',
    'https://pirateiro.unblockit.link/',
  ],
  caps: {
    categorymappings: [
      { id: 'cat100', cat: 'TV/Anime', desc: 'Anime' },
      { id: 'cat200', cat: 'PC', desc: 'Software' },
      { id: 'cat300', cat: 'Movies', desc: 'Movies' },
      { id: 'cat400', cat: 'Console', desc: 'Games' },
      { id: 'cat500', cat: 'Audio', desc: 'Music' },
      { id: 'cat600', cat: 'Other', desc: 'Other' },
      { id: 'cat700', cat: 'TV', desc: 'TV' },
      { id: 'cat800', cat: 'XXX', desc: 'Adult' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
      'music-search': ['q'],
    },
  },
  settings: [
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: 'enviado',
      options: {
        enviado: 'created',
        seeders: 'seeders',
        tamanho: 'size',
      },
    },
    {
      name: 'flaresolverr',
      type: 'info',
      label: 'FlareSolverr',
      default:
        'This site may use Cloudflare DDoS Protection, therefore Jackett requires <a href="https://github.com/Jackett/Jackett#configuring-flaresolverr" target="_blank">FlareSolver</a> to access it.',
    },
  ],
  search: {
    paths: [{ path: 'torrents/' }],
    inputs: { search: '{{ .Keywords }}', orderby: '{{ .Config.sort }}' },
    rows: {
      selector: 'table.torrenttable tbody tr:has(a[href^="magnet:?xt="])',
    },
    fields: {
      category: {
        selector: 'td:nth-child(1) a',
        attribute: 'class',
        filters: [{ name: 'split', args: [' ', 0] }],
      },
      title: { selector: 'td:nth-child(1) a:nth-child(2)' },
      details: {
        selector: 'td:nth-child(1) a:nth-child(2)',
        attribute: 'href',
      },
      download: {
        optional: true,
        selector: 'a[href$="/download"]',
        attribute: 'href',
      },
      magnet: { selector: 'a[href^="magnet:?xt="]', attribute: 'href' },
      date: {
        selector: 'td:nth-child(3) span',
        attribute: 'title',
        filters: [
          { name: 'append', args: ' +01:00' },
          { name: 'dateparse', args: '02/01/2006 15:04:05 -07:00' },
        ],
      },
      size: { selector: 'td:nth-child(4)' },
      seeders: {
        selector: 'td:nth-child(5)',
        filters: [{ name: 'replace', args: [' ', ''] }],
      },
      leechers: {
        selector: 'td:nth-child(6)',
        filters: [{ name: 'replace', args: [' ', ''] }],
      },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
