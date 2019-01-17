import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'bitme',
  name: 'BitMe',
  description: 'BitMe.ORG is an E-Learning torrent tracker',
  language: 'en-US',
  type: 'private',
  encoding: 'WINDOWS-1252',
  links: ['http://www.bitme.org/'],
  caps: {
    categorymappings: [
      { id: '20', cat: 'Books', desc: '3D' },
      { id: '1', cat: 'Books', desc: 'AppDev' },
      { id: '14', cat: 'Books', desc: 'Art' },
      { id: '2', cat: 'Audio/Audiobook', desc: 'Audio' },
      { id: '3', cat: 'Books', desc: 'CBT' },
      { id: '21', cat: 'Books', desc: 'Dating' },
      { id: '29', cat: 'Books', desc: 'Do It Yourself' },
      { id: '5', cat: 'TV/Documentary', desc: 'Documentaries' },
      { id: '6', cat: 'Books', desc: 'e-Books' },
      { id: '7', cat: 'Books', desc: 'Keystone' },
      { id: '8', cat: 'Books', desc: 'Languages' },
      { id: '9', cat: 'Books', desc: 'LearnKey' },
      { id: '10', cat: 'Books', desc: 'Lynda.com' },
      { id: '19', cat: 'Books', desc: 'Magic' },
      { id: '30', cat: 'Books', desc: 'MATH' },
      { id: '18', cat: 'Books', desc: 'Medical' },
      { id: '11', cat: 'Books', desc: 'Misc' },
      { id: '12', cat: 'Books', desc: 'Misc E-Learning' },
      { id: '22', cat: 'Books', desc: 'Music Learning' },
      { id: '28', cat: 'Books', desc: 'Photography' },
      { id: '23', cat: 'Books', desc: 'Political' },
      { id: '24', cat: 'Books', desc: 'Religion' },
      { id: '25', cat: 'Books', desc: 'Self Improvement' },
      { id: '16', cat: 'Audio/Other', desc: 'SFX' },
      { id: '26', cat: 'Books', desc: 'Sports' },
      { id: '17', cat: 'Other', desc: 'Stock Photography' },
      { id: '13', cat: 'Books', desc: 'Total Training' },
      { id: '4', cat: 'Books', desc: 'TTC' },
      { id: '27', cat: 'Other', desc: 'Video Stock' },
    ],
    modes: { search: ['q'], 'tv-search': ['q', 'season', 'ep'] },
  },
  login: {
    method: 'form',
    path: 'login.php',
    form: 'form[action="takelogin.php"]',
    captcha: {
      type: 'image',
      selector: 'img[src="visual.php"]',
      input: 'secimage',
    },
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      logout: 'no',
    },
    error: [
      { selector: 'table:contains("Login failed!")' },
      { selector: 'table:contains("Wrong Code!")' },
    ],
    test: { path: '/browse.php' },
  },
  search: {
    method: 'get',
    inputs: { search: '{{ .Query.Keywords }}', incldead: 1 },
    rows: {
      selector: 'table[cellpadding="5"] > tbody > tr:has(td.latest)',
    },
    fields: {
      title: { selector: 'a[href^="details.php?id="]' },
      category: {
        selector: 'a[href^="?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      details: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="download.php/"]',
        attribute: 'href',
      },
      size: {
        selector: 'td:nth-child(7)',
        filters: [{ name: 'replace', args: ['<br>', ''] }],
      },
      grabs: {
        selector: 'td:nth-child(8)',
        filters: [
          { name: 'replace', args: ['<br>', ''] },
          { name: 'replace', args: ['times', ''] },
        ],
      },
      seeders: { selector: 'td:nth-child(9)' },
      leechers: { selector: 'td:nth-child(10)' },
      date: {
        selector: 'font[color="999999"]',
        filters: [
          { name: 'replace', args: ['at', ''] },
          { name: 'replace', args: [',', ''] },
          { name: 'replace', args: ['st', ''] },
          { name: 'replace', args: ['nd', ''] },
          { name: 'replace', args: ['rd', ''] },
          { name: 'replace', args: ['th', ''] },
          { dateparse: null, args: 'Monday January 2 2006 15:04:05 PM' },
        ],
      },
      downloadvolumefactor: { case: { '*': '1' } },
      uploadvolumefactor: { case: { '*': '1' } },
    },
    paths: [{ path: '/browse.php' }],
  },
  source: 'jackett',
};
