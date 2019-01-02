import { TopLevel } from '../definition-interface';
export const definition: TopLevel = {
  site: 'kapaki',
  name: 'Kapaki',
  description:
    'Kapaki is a GREEK Private Torrent Tracker for MOVIES / TV / GENERAL',
  language: 'el-GR',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://kapaki.info/'],
  caps: {
    categories: {
      '1': 'Movies',
      '16': 'Movies',
      '17': 'Movies/SD',
      '38': 'Movies',
      '39': 'Movies',
      '44': 'Movies',
      '45': 'Movies',
      '55': 'Movies',
      '58': 'TV',
      '59': 'Movies/SD',
      '61': 'Movies',
      '62': 'Movies/SD',
      '63': 'Movies/SD',
      '64': 'Movies',
      '67': 'Movies/WEBDL',
      '69': 'Movies/HD',
      '77': 'Movies',
      '79': 'TV/SD',
      '81': 'TV',
      '84': 'TV/Documentary',
      '93': 'Movies',
      '94': 'Movies',
      '98': 'Movies',
    },
    modes: { search: ['q'], 'tv-search': ['q', 'season', 'ep'] },
  },
  login: {
    path: '/?p=home&pid=1',
    method: 'form',
    form: 'form#loginbox_form',
    submitpath: '/ajax/login.php',
    inputs: {
      action: 'login',
      loginbox_membername: '{{ .Config.username }}',
      loginbox_password: '{{ .Config.password }}',
      loginbox_remember: 'true',
    },
    selectorinputs: {
      securitytoken: {
        selector: 'script:contains("stKey: ")',
        filters: [{ name: 'regexp', args: 'stKey: "(.+?)",' }],
      },
    },
    error: [{ selector: ':contains("-ERROR-")' }],
    test: { path: '/?p=torrents&pid=32', selector: 'a#logout' },
  },
  search: {
    paths: [{ path: '/' }],
    keywordsfilters: [{ name: 're_replace', args: ['[^a-zA-Z0-9]+', '%25'] }],
    inputs: {
      p: 'torrents',
      pid: '32',
      $raw: '{{range .Categories}}cid[]={{.}}&{{end}}',
      keywords: '{{ .Keywords }}',
      search_type: 'name',
      searchin: 'title',
    },
    error: [
      {
        selector:
          'div#show_error:not(:contains("Ουπς! Λάθος!Δεν βρέθηκαν αποτελέσματα."))',
      },
    ],
    rows: {
      selector:
        'table#torrents_table_classic > tbody > tr:not(:first-child), div#content > div.torrent-box[id^="torrent_"]',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      title: { selector: 'a[href*="?p=torrents&pid=10&action=details"]' },
      category: {
        selector: 'div.category_image > a, div.categoryImage > a',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cid' }],
      },
      details: {
        selector: 'a[href*="?p=torrents&pid=10&action=details"]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href*="?p=torrents&pid=10&action=download"]',
        attribute: 'href',
      },
      imdb: {
        selector: 'a[href^="http://www.imdb.com/title/tt"]',
        attribute: 'href',
      },
      size: { selector: 'a[rel="torrent_size"]' },
      seeders: { selector: 'a[rel="torrent_seeders"]' },
      leechers: { selector: 'a[rel="torrent_leechers"]' },
      grabs: { selector: 'a[rel="times_completed"]' },
      banner: {
        optional: true,
        selector: 'a[rel="fancybox"]',
        attribute: 'href',
      },
      downloadvolumefactor: {
        case: {
          'img[title="ΧΡΥΣΟ!"]': '0',
          'img[title="100% FREE!"]': '0',
          'img[title="Πολλαπλασιαστής Κατεβάσματος: 0.5"]': '0.5',
          '*': '1',
        },
      },
      uploadvolumefactor: {
        case: {
          'img[title="Πολλαπλασιαστής Ανεβάσματος: 2"]': '2',
          '*': '1',
        },
      },
      date: {
        optional: true,
        selector: 'div.torrentOwner:not(:has(abbr.timeago))',
        remove: 'span',
        filters: [
          { name: 'replace', args: ['Ανέβηκε ', ''] },
          { name: 'replace', args: [' από', ''] },
          { name: 'replace', args: [' τον/την', ''] },
          { name: 'replace', args: ['στις ', ''] },
          { name: 'replace', args: ['σήμερα', 'Today'] },
          { name: 'replace', args: ['Χθες', 'Yesterday'] },
          { name: 'replace', args: ['Δευτέρα', 'Monday'] },
          { name: 'replace', args: ['Τρίτη', 'Tuesday'] },
          { name: 'replace', args: ['Τετάρτη', 'Wednesday'] },
          { name: 'replace', args: ['Πέμπτη', 'Thursday'] },
          { name: 'replace', args: ['Παρασκευή', 'Friday'] },
          { name: 'replace', args: ['Σάββατο', 'Saturday'] },
          { name: 'replace', args: ['Κυριακή', 'Sunday'] },
          { name: 'dateparse', args: '02-01-2006 15:04' },
        ],
      },
    },
  },
};
