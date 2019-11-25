import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'bitru',
  name: 'BitRu',
  description: 'BitRu is a RUSSIAN Public Torrent Tracker for MOVIES / TV / GENERAL',
  language: 'ru-RU',
  type: 'public',
  encoding: 'UTF-8',
  links: ['http://bitru.org/'],
  caps: {
    modes: { search: ['q'] },
    categorymappings: [
      { id: 'movie', cat: 'Movies' },
      { id: 'serial', cat: 'TV' },
      { id: 'music', cat: 'Audio' },
      { id: 'game', cat: 'PC/Games' },
      { id: 'soft', cat: 'PC' },
      { id: 'literature', cat: 'Books' },
      { id: 'audiobook', cat: 'Audio/Audiobook' },
      { id: 'video', cat: 'Movies' },
      { id: 'image', cat: 'Other' },
      { id: 'xxx', cat: 'XXX' },
    ],
  },
  settings: [
    {
      name: 'adverts',
      type: 'select',
      label: 'Include Advertising',
      default: 'yes',
      options: { yes: 'yes', no: 'no' },
    },
  ],
  search: {
    paths: [{ path: 'browse.php' }],
    inputs: { s: '{{ .Keywords }}', rek: '{{ .Config.adverts }}' },
    rows: { selector: 'table.browse-list > tbody > tr' },
    fields: {
      category: {
        selector: 'td:nth-child(1) a',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'tmp' }],
      },
      title: { selector: 'a[href^="details.php?id="]' },
      details: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
        filters: [{ name: 'replace', args: ['details', 'download'] }],
      },
      description: {
        selector: 'img[src="styles/images/adwarn.png"]',
        optional: true,
        attribute: 'title',
        filters: [
          {
            name: 'replace',
            args: ['Присутствует реклама', 'Contains Adverts'],
          },
        ],
      },
      banner: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'onmouseover',
        filters: [{ name: 'regexp', args: 'src=(.*?) ' }],
      },
      date: {
        selector:
          'td:nth-child(2) div.b-info div span:nth-child(2):not(:contains("Сегодня")):not(:contains("Вчера"))',
        optional: true,
        filters: [
          { name: 'regexp', args: '(.*?) от ' },
          { name: 'replace', args: [' в ', ' '] },
          { name: 'replace', args: ['января', 'January'] },
          { name: 'replace', args: ['февраля', 'February'] },
          { name: 'replace', args: ['марта ', 'March'] },
          { name: 'replace', args: ['апреля', 'April'] },
          { name: 'replace', args: ['мая', 'May'] },
          { name: 'replace', args: ['июня', 'June'] },
          { name: 'replace', args: ['июля', 'July'] },
          { name: 'replace', args: ['августа', 'August'] },
          { name: 'replace', args: ['сентября', 'September'] },
          { name: 'replace', args: ['октября', 'October'] },
          { name: 'replace', args: ['ноября', 'November'] },
          { name: 'replace', args: ['декабря', 'December'] },
          { name: 'dateparse', args: '02 January 2006 15:04' },
        ],
      },
      size: {
        selector: 'td:nth-child(3)',
        filters: [
          { name: 'replace', args: ['ТБ', 'TB'] },
          { name: 'replace', args: ['ГБ', 'GB'] },
          { name: 'replace', args: ['МБ', 'MB'] },
          { name: 'replace', args: ['КБ', 'KB'] },
        ],
      },
      seeders: {
        selector: 'td:nth-child(4)',
        filters: [{ name: 'replace', args: ['?', '1'] }],
      },
      leechers: {
        selector: 'td:nth-child(5)',
        filters: [{ name: 'replace', args: ['?', '0'] }],
      },
      downloadvolumefactor: { text: '0' },
      uploadvolumefactor: { text: '1' },
    },
  },
  source: 'jackett',
};