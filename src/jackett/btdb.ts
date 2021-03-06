import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'btdb',
  name: 'BTDB',
  description: 'BTDB is a Public BitTorrent DHT search engine.',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  followredirect: true,
  links: ['https://btdb.eu/', 'https://btdb.unblockit.li/'],
  legacylinks: [
    'https://btdb.to/',
    'https://btdb.unblocked.app/',
    'https://btdb.unblockit.pro/',
    'https://btdb.unblockit.one/',
    'https://btdb.black-mirror.xyz/',
    'https://btdb.unblocked.casa/',
    'https://btdb.proxyportal.fun/',
    'https://btdb.uk-unblock.xyz/',
    'https://btdb.ind-unblock.xyz/',
    'https://btdb.io/',
    'https://btdb.unblockit.me/',
    'https://btdb.unblockit.pw/',
    'https://btdb.unblockit.id/',
    'https://btdb.unblockit.win/',
    'https://btdb.unblocked.bar/',
    'https://btdb.proxyportal.pw/',
    'https://btdb.uk-unblock.pro/',
    'https://btdb.unblockit.top/',
    'https://btdb.unblockit.lat/',
    'https://btdb.unblockit.app/',
    'https://btdb.unblockit.dev/',
    'https://btdb.unblockit.ltd/',
    'https://btdb.unblockit.link/',
    'https://btdb.unblockit.buzz/',
    'https://btdb.unblockit.club/',
    'https://btdb.unblockit.onl/',
  ],
  caps: {
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
      'music-search': ['q'],
      'book-search': ['q'],
    },
    categorymappings: [{ id: 'Other', cat: 'Other' }],
  },
  settings: [
    {
      name: 'flaresolverr',
      type: 'info',
      label: 'FlareSolverr',
      default:
        'This site may use Cloudflare DDoS Protection, therefore Jackett requires <a href="https://github.com/Jackett/Jackett#configuring-flaresolverr" target="_blank">FlareSolver</a> to access it.',
    },
    {
      name: 'info_8000',
      type: 'info',
      label: 'About BTDB Categories',
      default:
        "BTDB does not return categories in its search results.</br>To add to your Apps' Torznab indexer, replace all categories with 8000(Other).",
    },
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: 'time',
      options: { time: 'created', length: 'size', seeders: 'seeders' },
    },
  ],
  search: {
    paths: [
      {
        path: '{{ if .Keywords }}search/{{ .Keywords }}/{{ else }}recent{{ end }}?sort={{ .Config.sort }}',
      },
      {
        path: '{{ if .Keywords }}search/{{ .Keywords }}/{{ else }}recent{{ end }}?sort={{ .Config.sort }}&page=2',
      },
      {
        path: '{{ if .Keywords }}search/{{ .Keywords }}/{{ else }}recent{{ end }}?sort={{ .Config.sort }}&page=3',
      },
      {
        path: '{{ if .Keywords }}search/{{ .Keywords }}/{{ else }}recent{{ end }}?sort={{ .Config.sort }}&page=4',
      },
      {
        path: '{{ if .Keywords }}search/{{ .Keywords }}/{{ else }}recent{{ end }}?sort={{ .Config.sort }}&page=5',
      },
    ],
    rows: { selector: 'div.media' },
    fields: {
      category: { text: 'Other' },
      title: { selector: 'a[href*="/torrent/"]', attribute: 'title' },
      details: { selector: 'a[href*="/torrent/"]', attribute: 'href' },
      download: {
        selector: 'a[href$=".torrent"]',
        attribute: 'href',
        optional: true,
      },
      magnet: { selector: 'a[href^="magnet:?xt="]', attribute: 'href' },
      poster: {
        selector: 'a.img-thumbnail img',
        attribute: 'src',
        filters: [
          {
            name: 'replace',
            args: ['https://btdb.eu/assets/img/placeholder.png', ''],
          },
        ],
      },
      date: {
        selector: 'small:nth-of-type(5) strong',
        filters: [{ name: 'timeago' }],
      },
      size: { selector: 'small:nth-of-type(1) strong' },
      files: { selector: 'small:nth-of-type(2) strong' },
      seeders: {
        selector: 'small:nth-of-type(3) strong',
        filters: [{ name: 'replace', args: [',', ''] }],
      },
      leechers: {
        selector: 'small:nth-of-type(4) strong',
        filters: [{ name: 'replace', args: [',', ''] }],
      },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
