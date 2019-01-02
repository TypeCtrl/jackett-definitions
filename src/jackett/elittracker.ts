import { TopLevel } from '../definition-interface';
export const definition: TopLevel = {
  site: 'elittracker',
  name: 'Elit Tracker',
  description:
    'Elit Tracker (ET) is a HUNGARIAN Private Torrent Tracker for 0DAY / GENERAL',
  language: 'hu-HU',
  type: 'private',
  encoding: 'ISO-8859-2',
  links: ['http://elittorent.us/'],
  caps: {
    categorymappings: [
      { id: '35', cat: 'Movies', desc: 'BluRay-Egyéb (BluRay Other)' },
      { id: '30', cat: 'Movies', desc: 'BluRay-Hun' },
      { id: '34', cat: 'Movies', desc: 'Cam-Egyéb (Cam Other)' },
      { id: '33', cat: 'Movies', desc: 'Cam-Hun' },
      { id: '36', cat: 'Movies', desc: 'DVD-Egyéb (DVD Other)' },
      { id: '2', cat: 'Movies', desc: 'DVD-Eng' },
      { id: '3', cat: 'Movies', desc: 'DVD-Hun' },
      { id: '6', cat: 'Other', desc: 'Egyéb (Other)' },
      { id: '10', cat: 'Console', desc: 'Játék-Konzol (Games Console)' },
      { id: '7', cat: 'Console', desc: 'Játék-PC (Games PC)' },
      { id: '8', cat: 'Console', desc: 'Játék-PS (Games PS)' },
      { id: '9', cat: 'Console', desc: 'Játék-Xbox (Games Xbox)' },
      { id: '11', cat: 'Other', desc: 'Klip (Clips)' },
      { id: '4', cat: 'Books', desc: 'Könyv-Eng (Book Eng)' },
      { id: '5', cat: 'Books', desc: 'Könyv-Hun (Book Hun)' },
      { id: '12', cat: 'Books', desc: 'Mese-Eng (Tale Eng)' },
      { id: '13', cat: 'Books', desc: 'Mese-Hun (Tale Hun)' },
      { id: '14', cat: 'PC', desc: 'Mobil (Mobile)' },
      { id: '15', cat: 'PC', desc: 'Program (Software)' },
      { id: '16', cat: 'PC', desc: 'Program-Linux (Software Linux)' },
      { id: '17', cat: 'TV', desc: 'Sorozat-Eng (TV Eng)' },
      { id: '18', cat: 'TV', desc: 'Sorozat-Hun (TV Hun)' },
      { id: '37', cat: 'Movies', desc: 'XviD-Egyéb (Xvid Other)' },
      { id: '19', cat: 'Movies', desc: 'XviD-Eng' },
      { id: '20', cat: 'Movies', desc: 'XviD-Hun' },
      { id: '21', cat: 'XXX', desc: 'XXX' },
      { id: '22', cat: 'XXX', desc: 'XXX-Képek (XXX Pics)' },
      { id: '32', cat: 'Audio', desc: 'Zene-Egyéb (Msuci Other)' },
      { id: '23', cat: 'Audio', desc: 'Zene-Eng (Music Eng)' },
      { id: '24', cat: 'Audio', desc: 'Zene-Hun (Music Hun)' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
  },
  settings: [
    { name: 'username', type: 'text', label: 'Username' },
    { name: 'password', type: 'password', label: 'Password' },
    {
      name: 'category',
      type: 'select',
      label: 'Category',
      default: '0',
      options: {
        '0': 'toate categoriile (All)',
        '2': 'DVD-Eng',
        '3': 'DVD-Hun',
        '4': 'Könyv-Eng (Book Eng)',
        '5': 'Könyv-Hun (Book Hun)',
        '6': 'Egyéb (Other)',
        '7': 'Játék-PC (Games PC)',
        '8': 'Játék-PS (Games PS)',
        '9': 'Játék-Xbox (Games Xbox)',
        '10': 'Játék-Konzol (Games Console)',
        '11': 'Klip (Clips)',
        '12': 'Mese-Eng (Tale Eng)',
        '13': 'Mese-Hun (Tale Hun)',
        '14': 'Mobil (Mobile)',
        '15': 'Program (Software)',
        '16': 'Program-Linux (Software Linux)',
        '17': 'Sorozat-Eng (TV Eng)',
        '18': 'Sorozat-Hun (TV Hun)',
        '19': 'XviD-Eng',
        '20': 'XviD-Hun',
        '21': 'XXX',
        '22': 'XXX-Képek (XXX Pics)',
        '23': 'Zene-Eng (Music Eng)',
        '24': 'Zene-Hun (Music Hun)',
        '30': 'BluRay-Hun',
        '32': 'Zene-Egyéb (XXX Other)',
        '33': 'Cam-Hun',
        '34': 'Cam-Egyéb (Cam Other)',
        '35': 'BluRay-Egyéb (BluRay Other)',
        '36': 'DVD-Egyéb (DVD OTher)',
        '37': 'XviD-Egyéb (Xvid Other)',
      },
    },
  ],
  login: {
    path: 'login.php',
    method: 'form',
    form: 'form[action="takelogin.php"]',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [{ selector: 'td:contains("Hiba:")' }],
    test: { path: 'browse.php' },
  },
  search: {
    paths: [{ path: 'browse.php', method: 'post' }],
    inputs: {
      do: 'search',
      keywords: '{{ .Keywords }}',
      search_type: 't_name',
      category: '{{ .Config.category }}',
    },
    rows: {
      selector: 'table > tbody > tr:has(img[src*="/pic/categories/"])',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      title: {
        selector: 'td:nth-of-type(3) a',
        attribute: 'title',
        filters: [{ name: 'replace', args: ['Torrent letöltése: ', ''] }],
      },
      details: {
        selector: 'td:nth-of-type(2) > a[href$=".ts"]',
        attribute: 'href',
      },
      banner: {
        selector: 'td:nth-of-type(2) a:nth-of-type(2)',
        attribute: 'onmouseover',
        filters: [{ name: 'regexp', args: 'src=([^\\s]+)' }],
      },
      download: { selector: 'td:nth-of-type(3) a', attribute: 'href' },
      category: {
        selector: 'td:nth-of-type(1) > a',
        attribute: 'href',
        filters: [{ name: 'regexp', args: '-c-(\\d+)\\.ts' }],
      },
      date: {
        selector: 'td:nth-of-type(2)',
        remove: 'b',
        filters: [
          { name: 'split', args: [' ', 0] },
          { name: 'append', args: ' +01:00' },
          { name: 'dateparse', args: '2006 2, January, 15:04:05 -07:00' },
        ],
      },
      files: { selector: 'td:nth-of-type(4)' },
      seeders: { selector: 'td:nth-of-type(6)' },
      leechers: { selector: 'td:nth-of-type(7)' },
      grabs: {
        selector: 'td:nth-of-type(9):not(a[href*="/viewsnatches.php?id="]) b',
        optional: true,
        filters: [{ name: 'replace', args: ['x', ''] }],
      },
      size: {
        selector: 'td:nth-of-type(9)',
        remove: 'a, b',
        filters: [{ name: 'replace', args: ['x', ''] }],
      },
      downloadvolumefactor: {
        case: {
          'img[src$="pic/external.gif"]': '0',
          'img[src$="pic/freedownload.gif"]': '0',
          'img[src$="pic/silverdownload.gif"]': '0.5',
          '*': '1',
        },
      },
      uploadvolumefactor: {
        case: {
          'img[src$="pic/external.gif"]': '0',
          'img[src$="pic/x2.gif"]': '2',
          '*': '1',
        },
      },
    },
  },
};
