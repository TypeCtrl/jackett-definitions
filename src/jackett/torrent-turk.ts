import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'torrent-turk',
  name: 'TOrrent-tuRK',
  description:
    'TOrrent-tuRK (TORK) is a Turkish Private Torrent Tracker for HD MOVIES / TV / GENERAL',
  language: 'tr-TR',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://torrent-turk.de/'],
  legacylinks: ['https://torrent-turk.org/', 'https://torrent-turk.co/'],
  caps: {
    categorymappings: [
      { id: '149', cat: 'Movies', desc: 'Movies/Turkish' },
      { id: '151', cat: 'Movies/HD', desc: 'Movies/Turkish/1080p' },
      { id: '152', cat: 'Movies/HD', desc: 'Movies/Turkish/720p' },
      { id: '153', cat: 'Movies/DVD', desc: 'Movies/Turkish/DVD5-DVD9' },
      {
        id: '154',
        cat: 'Movies/WEBDL',
        desc: 'Movies/Turkish/BRRip-HDRip-DVDRip-WebDL',
      },
      { id: '155', cat: 'Movies/Other', desc: 'Movies/Turkish/Boxset' },
      { id: '156', cat: 'Movies', desc: 'Movies/Foreign' },
      { id: '157', cat: 'Movies/UHD', desc: 'Movies/Foreign/4K / 3D' },
      { id: '159', cat: 'Movies/HD', desc: 'Movies/Foreign/1080p' },
      { id: '160', cat: 'Movies/HD', desc: 'Movies/Foreign/720p' },
      { id: '161', cat: 'Movies/DVD', desc: 'Movies/Foreign/DVD5-DVD9' },
      {
        id: '162',
        cat: 'Movies/WEBDL',
        desc: 'Movies/Foreign/BRRip-HDRip-DVDRip-WebDL',
      },
      { id: '163', cat: 'Movies/Other', desc: 'Movies/Foreign/Boxset' },
      { id: '164', cat: 'TV', desc: 'TV' },
      { id: '165', cat: 'TV', desc: 'TV/Turkish' },
      { id: '166', cat: 'TV', desc: 'TV/Foreign' },
      { id: '167', cat: 'TV/Other', desc: 'TV Programs' },
      { id: '185', cat: 'TV/Documentary', desc: 'TV/Documentary' },
      { id: '168', cat: 'TV/Other', desc: 'TV/Other' },
      { id: '171', cat: 'Audio', desc: 'Music' },
      { id: '172', cat: 'Audio', desc: 'Music/Turkish' },
      { id: '173', cat: 'Audio', desc: 'Music/Foreign' },
      { id: '184', cat: 'Audio', desc: 'Music/Discography' },
      { id: '174', cat: 'Audio/Video', desc: 'Music/Video' },
      { id: '175', cat: 'PC', desc: 'Apps / Game / Graphics' },
      { id: '176', cat: 'PC', desc: 'Apps' },
      { id: '177', cat: 'Other', desc: 'Pictures' },
      { id: '183', cat: 'Books/Ebook', desc: 'EBook' },
      { id: '178', cat: 'Books/Technical', desc: 'Training Sets' },
      { id: '179', cat: 'PC', desc: 'OS' },
      { id: '180', cat: 'PC/Games', desc: 'PC/Games' },
      { id: '181', cat: 'Console', desc: 'Playstation' },
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
      name: 'info',
      type: 'info',
      label: 'Layout',
      default:
        '<ol><li>Only the English Classic profile is supported.<li>Make sure to set the <b>Torrent Listing (Listeleme Biçimi)</b> option in your profile to <b>Classic (Klasik)</b><li>And set the <b>Language (Dil)</b> to <b>English</b><li>Using the <i>Modern</i> theme will prevent results, and using <i>Turkish</i> will prevent upload dates.</ol>',
    },
  ],
  login: {
    path: '?p=home&pid=1',
    method: 'form',
    form: 'form#loginbox_form',
    submitpath: 'ajax/login.php',
    inputs: {
      action: 'login',
      loginbox_membername: '{{ .Config.username }}',
      loginbox_password: '{{ .Config.password }}',
      loginbox_remember: 1,
    },
    selectorinputs: {
      securitytoken: {
        selector: 'script:contains("stKey: ")',
        filters: [{ name: 'regexp', args: 'stKey: "(.+?)",' }],
      },
    },
    error: [{ selector: ':contains("-ERROR-")' }],
    test: {
      path: '?p=torrents&type=bookmarks&pid=508',
      selector: 'a#logout',
    },
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
    error: [{ selector: 'div.error:not(:contains("Hiçbir sonuç bulunamadı."))' }],
    rows: {
      selector: 'table#torrents_table_classic > tbody > tr:has(td.torrent_name)',
    },
    fields: {
      title: { selector: 'a[href*="?p=torrents&pid=10&action=details"]' },
      category: {
        selector: 'div.category_image > a',
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
      date: {
        optional: true,
        selector: 'td.torrent_name:contains(" at ")',
        filters: [
          { name: 'regexp', args: 'Uploaded (.+?) by' },
          { name: 'replace', args: [' at ', ' '] },
        ],
      },
      size: { selector: 'a[rel="torrent_size"]' },
      seeders: { selector: 'a[rel="torrent_seeders"]' },
      leechers: { selector: 'a[rel="torrent_leechers"]' },
      grabs: { selector: 'a[rel="times_completed"]' },
      banner: {
        selector: 'a[rel="fancybox"]',
        optional: true,
        attribute: 'href',
      },
      downloadvolumefactor: {
        case: {
          'img[title="FREE!"]': '0',
          'img[title="Download Multiplier: 0.5"]': '0.5',
          '*': '1',
        },
      },
      uploadvolumefactor: {
        case: { 'img[title="Upload Multiplier: 2"]': '2', '*': '1' },
      },
    },
  },
  source: 'jackett',
};
