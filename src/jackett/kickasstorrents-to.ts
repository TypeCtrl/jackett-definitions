import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'kickasstorrents-to',
  name: 'kickasstorrents.to',
  description: 'kickasstorrents.to is a Public KickAssTorrent clone for TV / MOVIES / GENERAL',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: [
    'https://kickasstorrents.to/',
    'https://kickasstorrent.cr/',
    'https://katcr.to/',
    'https://kickasstorrents.unblockninja.com/',
    'https://kat.root.yt/',
  ],
  caps: {
    categorymappings: [
      { id: 'anime', cat: 'TV/Anime', desc: 'Anime' },
      { id: 'apps', cat: 'PC', desc: 'Apps' },
      { id: 'books', cat: 'Books', desc: 'Books' },
      {
        id: 'documentaries',
        cat: 'TV/Documentary',
        desc: 'Documentaries',
      },
      { id: 'games', cat: 'Console', desc: 'Games' },
      { id: 'movies', cat: 'Movies', desc: 'Movies' },
      { id: 'music', cat: 'Audio', desc: 'Music' },
      { id: 'other', cat: 'Other', desc: 'Other' },
      { id: 'tv', cat: 'TV', desc: 'TV' },
      { id: 'xxx', cat: 'XXX', desc: 'XXX' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
      'music-search': ['q'],
      'book-search': ['q'],
    },
  },
  settings: [
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
  ],
  download: { selector: 'a[href^="magnet:?xt="]', attribute: 'href' },
  search: {
    paths: [
      {
        path:
          '{{ if .Keywords }}usearch/{{ .Keywords }}/{{ else }}new/{{ end }}?sortby={{ .Config.sort }}&sort={{ .Config.type }}',
      },
    ],
    rows: {
      selector: 'table.data tr.odd:has(a[class="cellMainLink"]), table.data tr.even:has(a[class="cellMainLink"])',
    },
    fields: {
      category: {
        selector: 'span > strong > a',
        attribute: 'href',
        filters: [{ name: 'tolower' }, { name: 'trim', args: '/' }],
      },
      title: { selector: 'a[class="cellMainLink"]' },
      details: {
        selector: 'a[class="cellMainLink"]',
        attribute: 'href',
      },
      download: {
        selector: 'a[class="cellMainLink"]',
        attribute: 'href',
      },
      size: { selector: 'td:nth-child(2)' },
      date: {
        selector: 'td:nth-child(4)',
        attribute: 'title',
        filters: [{ name: 'replace', args: ['<br/>', ' '] }, { name: 'timeago' }],
      },
      seeders: { selector: 'td:nth-child(5)' },
      leechers: { selector: 'td:nth-child(6)' },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
