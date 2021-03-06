import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'brasiltracker',
  name: 'BrasilTracker',
  description: 'BrasilTracker is a BRAZILIAN Private Torrent Tracker for MOVIES / TV / GENERAL',
  language: 'pt-BR',
  encoding: 'UTF-8',
  type: 'private',
  links: ['https://brasiltracker.org/'],
  caps: {
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q', 'imdbid'],
    },
    categorymappings: [{ id: 'Other', cat: 'Other' }],
  },
  settings: [
    { name: 'username', type: 'text', label: 'Username' },
    { name: 'password', type: 'password', label: 'Password' },
    {
      name: 'info_8000',
      type: 'info',
      label: 'About BrasilTracker Categories',
      default:
        "BrasilTracker does not return categories in its search results.</br>To add to your Apps' Torznab indexer, replace all categories with 8000(Other).",
    },
    {
      name: 'freeleech',
      type: 'checkbox',
      label: 'Search freeleech only',
      default: false,
    },
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: 'time',
      options: { time: 'created', seeders: 'seeders', size: 'size' },
    },
    {
      name: 'type',
      type: 'select',
      label: 'Order requested from site',
      default: 'desc',
      options: { desc: 'desc', asc: 'asc' },
    },
    {
      name: 'info_results',
      type: 'info',
      label: 'Search results',
      default:
        'This indexer does not support <b>Torrent Groups</b><br />Un-tick the <b>Torrent grouping</b><i> (Habilitar Grupo de Torrents)</i> checkbox in your <b>Configurações</b>.',
    },
  ],
  login: {
    path: 'login.php',
    method: 'form',
    form: 'form#loginform',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      keeplogged: 1,
    },
    error: [{ selector: 'form#loginform:contains("incorretos")' }],
    test: { path: 'index.php', selector: 'a[href^="logout.php?auth="]' },
  },
  search: {
    paths: [{ path: 'torrents.php' }],
    inputs: {
      searchstr: '{{ if .Query.IMDBID }}{{ .Query.IMDBID }}{{ else }}{{ .Keywords }}{{ end }}',
      order_by: '{{ .Config.sort }}',
      order_way: '{{ .Config.type }}',
      action: 'basic',
      freetorrent: '{{ if .Config.freeleech }}1{{ else }}{{ end }}',
      searchsubmit: 1,
    },
    rows: { selector: 'table#torrent_table > tbody > tr.torrent' },
    fields: {
      category: { text: 'Other' },
      details: {
        selector: 'a[href^="torrents.php?id="]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="torrents.php?action=download&id="]',
        attribute: 'href',
      },
      description: { selector: 'div.tags' },
      poster: { selector: 'img[alt="Cover"]', attribute: 'src' },
      imdb: {
        selector: 'a[href*="imdb.com/title/tt"]',
        attribute: 'href',
      },
      files: { selector: 'td:nth-child(3)' },
      date: {
        selector: 'span.time',
        attribute: 'title',
        filters: [
          { name: 'append', args: ' -03:00' },
          { name: 'dateparse', args: 'Jan 2 2006, 15:04 -07:00' },
        ],
      },
      size: { selector: 'td:nth-child(5)' },
      grabs: { selector: 'td:nth-child(6)' },
      seeders: { selector: 'td:nth-child(7)' },
      leechers: { selector: 'td:nth-child(8)' },
      downloadvolumefactor: { case: { 'strong.tl_free': 0, '*': 1 } },
      uploadvolumefactor: { text: 1 },
      title_details: { selector: 'div.torrent_info', remove: 'strong' },
      title: {
        selector: 'a[href^="torrents.php?id="]',
        filters: [{ name: 'append', args: ' {{ .Result.title_details }}' }],
      },
      minimumratio: { text: 1 },
      minimumseedtime: { text: 172800 },
    },
  },
  source: 'jackett',
};
