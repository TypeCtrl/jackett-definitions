import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'thehorrorcharnel',
  name: 'The Horror Charnel',
  description:
    'The Horror Charnel (THC) is a Private Torrent Tracker for HORROR / CULT / SLEAZE / SCI FI MOVIES',
  language: 'en-US',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://horrorcharnel.org/'],
  caps: {
    modes: { search: ['q'], 'tv-search': ['q', 'season', 'ep'] },
    categorymappings: [{ id: '1', cat: 'Movies' }, { id: '2', cat: 'TV' }],
  },
  settings: [
    { name: 'username', type: 'text', label: 'Username' },
    { name: 'password', type: 'password', label: 'Password' },
  ],
  login: {
    path: 'loginto.php',
    method: 'form',
    form: 'form',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      'use_sslvalue=': 'on',
      perm_ssl: '1',
      returnto: '/',
    },
    error: [
      {
        selector:
          'div#base_content > table.mainouter > tbody > tr > td.outer > table.main > tbody > tr > td:has(h2)',
      },
    ],
    test: { path: 'usercp.php' },
  },
  ratio: {
    path: 'my.php',
    selector: 'td.navi_top:contains("Deine Ratio:")',
    filters: [
      { name: 'replace', args: ['Deine Ratio: ', ''] },
      { name: 'replace', args: ['.', ''] },
      { name: 'replace', args: [',', '.'] },
    ],
  },
  search: {
    paths: [{ path: 'browse.php' }],
    inputs: { search: '{{ .Query.Keywords }}', incldead: 1 },
    rows: {
      selector:
        'p + table > tbody > tr:has(a[href^="download.php"]), p + table > tbody > tr:has(a[href^="download.php"]) + tr[id^="kdescr"]',
      filters: [{ name: 'andmatch' }],
      after: 1,
    },
    fields: {
      title: {
        selector: 'a[onmouseover][href^="details.php?id="]',
        attribute: 'onmouseover',
        filters: [{ name: 'regexp', args: '<b>(.*?)</b>' }],
      },
      description: { selector: 'td[colspan="13"]', remove: 'a' },
      category: { text: 1 },
      comments: {
        selector: 'a[onmouseover][href^="details.php"]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="download.php"]',
        attribute: 'href',
      },
      files: { selector: 'td:nth-child(6)' },
      size: { selector: 'td:nth-child(9)' },
      seeders: { selector: 'td:nth-child(11)' },
      leechers: { selector: 'td:nth-child(12)' },
      date: { selector: 'td:nth-child(8)' },
      grabs: {
        selector: 'td:nth-child(10)',
        filters: [{ name: 'regexp', args: '(\\d+)' }],
      },
      downloadvolumefactor: {
        case: { 'img[src="free.gif"]': '0', '*': '1' },
      },
      uploadvolumefactor: { case: { '*': '1' } },
    },
  },
  source: 'jackett',
};
