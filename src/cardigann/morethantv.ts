import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'morethantv',
  name: 'MoreThan.TV',
  language: 'en-US',
  links: ['https://www.morethan.tv/'],
  caps: {
    categorymappings: [
      { id: '1', cat: 'Movies' },
      { id: '2', cat: 'TV' },
      { id: '3', cat: 'Other' },
    ],
  },
  login: {
    path: '/login.php',
    form: 'form.auth_form',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [
      {
        path: '/login.php',
        message: { selector: '.auth_form .warning center' },
      },
    ],
    test: { path: '/top10.php' },
  },
  ratio: { text: '∞' },
  search: {
    inputs: { searchstr: '{{ .Keywords }}' },
    rows: { selector: 'table#torrent_table tr.torrent' },
    fields: {
      category: {
        selector: 'td.cats_col div',
        case: { '.cats_movies': 1, '.cats_tv': 2 },
      },
      title: { selector: 'td.big_info .group_info a:nth-child(2)' },
      details: {
        selector: 'td.big_info .group_info a:nth-child(2)',
        attribute: 'href',
      },
      download: {
        selector: 'td.big_info span a:nth-child(1)',
        attribute: 'href',
      },
      size: { selector: 'td:nth-child(6)' },
      date: { selector: 'td:nth-child(5) .time', attribute: 'title' },
      seeders: { selector: 'td:nth-child(8)' },
      leechers: { selector: 'td:nth-child(9)' },
      files: { selector: 'td:nth-child(4)' },
      grabs: { selector: 'td:nth-child(7)' },
      downloadvolumefactor: { text: '0' },
      uploadvolumefactor: { text: '1' },
    },
    paths: [{ path: '/torrents.php' }],
  },
  encoding: 'UTF-8',
  source: 'cardigann',
};
