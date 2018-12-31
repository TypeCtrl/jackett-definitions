import { TopLevel } from '../definition-interface';
export const definition: TopLevel = {
  site: 'katcrs',
  name: 'KATcrs',
  description:
    'KATcrs is a Public KickAssTorrent clone for TV / MOVIES / GENERAL',
  language: 'en-us',
  type: 'public',
  encoding: 'UTF-8',
  followredirect: true,
  links: ['http://kickasstvshow.host/'],
  legacylinks: [
    'https://kickasskatcr.website/',
    'https://kickasskatcr.stream/',
    'https://kickassextratorrent.xyz/',
    'https://kickassextratorrent.website/',
    'https://kickassextratorrent.club/',
    'https://kickasstvshow.xyz/',
  ],
  caps: {
    categories: {
      movies: 'Movies',
      TV: 'TV',
      Video: 'TV/WEB-DL',
      Anime: 'TV/Anime',
      Music: 'Audio',
      Books: 'Books',
      Documentary: 'TV/Documentary',
      Games: 'Console',
      Apps: 'PC',
      Applications: 'PC',
      Other: 'Other',
      Othero: 'XXX',
    },
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
  },
  settings: [],
  search: {
    paths: [
      { path: '{{ if .Keywords }}search/{{ .Keywords }}/{{else}}new/{{end}}' },
    ],
    rows: {
      selector: 'table.data tr.odd',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      category: {
        selector: 'span.uploader_block strong a',
        attribute: 'href',
        filters: [{ name: 'trim', args: '/' }],
      },
      title: {
        selector: 'td:nth-child(1) div a.cellMainLink',
        attribute: 'title',
      },
      details: {
        selector: 'td:nth-child(1) div a.cellMainLink',
        attribute: 'href',
      },
      download: {
        selector: 'td:nth-child(1) div div a[data-download=""]',
        attribute: 'href',
      },
      magnet: {
        selector: 'td:nth-child(1) div div a[data-nop=""]',
        attribute: 'href',
      },
      size: { selector: 'td:nth-child(2)' },
      date: {
        selector: 'td:nth-child(3)',
        filters: [{ name: 'timeago' }],
      },
      seeders: { selector: 'td:nth-child(4)' },
      leechers: { selector: 'td:nth-child(5)' },
      downloadvolumefactor: { text: '0' },
      uploadvolumefactor: { text: '1' },
    },
  },
};
