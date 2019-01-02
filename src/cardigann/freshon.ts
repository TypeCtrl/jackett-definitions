import { TopLevel } from '../definition-interface';
export const definition: TopLevel = {
  site: 'freshon',
  name: 'FreshOnTV',
  description: 'TV Series anyone?',
  language: 'en-US',
  links: ['https://freshon.tv/'],
  caps: { categorymappings: [{ id: '1', cat: 'TV' }] },
  login: {
    path: '/login.php',
    form: 'form',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [
      {
        selector: 'h1:contains("Error:")',
        message: { selector: '#login p', remove: 'style, b' },
      },
    ],
    test: { path: '/profile.php' },
  },
  ratio: {
    path: '/home.php',
    selector: '#stats p:nth-child(3) span:nth-child(1)',
  },
  search: {
    path: '/browse.php',
    inputs: { search: '{{ .Query.Keywords }}' },
    rows: { selector: 'table#highlight > tbody > tr:not(.colhead)' },
    fields: {
      category: { text: 1 },
      title: { selector: 'a.torrent_name_link', attribute: 'title' },
      details: { selector: 'a.torrent_name_link', attribute: 'href' },
      comments: { selector: 'a.torrent_name_link', attribute: 'href' },
      download: {
        selector: 'td.table_links a:nth-child(1)',
        attribute: 'href',
      },
      size: { selector: 'td.table_size', remove: 'br' },
      date: { selector: 'td.table_added', remove: 'br' },
      seeders: { selector: 'td.table_seeders a span' },
      leechers: { selector: 'td.table_leechers a' },
    },
  },
  encoding: 'UTF-8',
};
