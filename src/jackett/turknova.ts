import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'turknova',
  name: 'TurkNova',
  description: 'TurkNova is a TURKISH Private Torrent Tracker for MOVIES / TV / GENERAL',
  language: 'tr-TR',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://www.turknova.net/'],
  caps: {
    categorymappings: [
      { id: '64', cat: 'Movies/UHD', desc: '4K - UHD' },
      { id: '35', cat: 'Movies/BluRay', desc: 'BluRay 1080p' },
      { id: '37', cat: 'Movies/BluRay', desc: 'BluRay 720p' },
      { id: '40', cat: 'Movies/HD', desc: 'BDRip-BRRip' },
      { id: '68', cat: 'Movies/HD', desc: 'Micro-Rip' },
      { id: '71', cat: 'Movies/HD', desc: 'x265' },
      { id: '41', cat: 'Movies/SD', desc: 'Cam-TS-Rip' },
      { id: '73', cat: 'Movies/DVD', desc: 'DVD Disc' },
      { id: '39', cat: 'Movies', desc: 'BOXSET' },
      { id: '43', cat: 'Movies/HD', desc: 'Netflix' },
      { id: '54', cat: 'TV', desc: 'BluTV' },
      { id: '59', cat: 'Movies/WEBDL', desc: 'WEB-DL / WEBRip' },
      { id: '34', cat: 'TV/Documentary', desc: 'Belgesel' },
      { id: '60', cat: 'TV/Foreign', desc: 'Yabancı Dizi' },
      { id: '72', cat: 'TV/Anime', desc: 'Animasyon' },
      { id: '48', cat: 'TV/HD', desc: 'HDTV - Rip' },
      { id: '55', cat: 'TV', desc: 'Türk Filmi' },
      { id: '46', cat: 'Other', desc: 'Eğitim' },
      { id: '53', cat: 'Other', desc: 'Resim' },
      { id: '50', cat: 'Audio', desc: 'Müzik' },
      { id: '51', cat: 'PC/Games', desc: 'Oyun' },
      { id: '52', cat: 'PC', desc: 'Program' },
      { id: '62', cat: 'PC', desc: 'İşletim Sistemi' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
      'music-search': ['q'],
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
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: 'added',
      options: { added: 'created', seeders: 'seeders', size: 'size' },
    },
    {
      name: 'type',
      type: 'select',
      label: 'Order requested from site',
      default: 'desc',
      options: { desc: 'desc', asc: 'asc' },
    },
    {
      name: 'info_results',
      type: 'info',
      label: 'Search results',
      default:
        "If you are getting the error: <b>An error has occurred!You can't view this page unless you read all your unread messages</b>, then access the site with your browser and <b>mark as read</b> all PMs.",
    },
  ],
  login: {
    path: '?p=home&pid=1',
    method: 'form',
    form: 'form#sls_form',
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
    error: [{ selector: 'div.overlay:has(div.error)' }],
    test: { path: '?p=home&pid=1', selector: 'a#logout' },
  },
  search: {
    paths: [{ path: '/' }],
    keywordsfilters: [{ name: 're_replace', args: ['[^a-zA-Z0-9]+', '%25'] }],
    inputs: {
      p: 'torrents',
      pid: 32,
      $raw: '{{ range .Categories }}cid[]={{.}}&{{end}}',
      keywords: '{{ .Keywords }}',
      search_type: 'name',
      'sortOptions[sortBy]': '{{ .Config.sort }}',
      'sortOptions[sortOrder]': '{{ .Config.type }}',
    },
    error: [
      {
        selector:
          'div.error:not(:contains("Hiçbir sonuç bulunamadı.")):not(:contains("There are no results found."))',
      },
    ],
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
        selector: 'a[href*="?p=torrents&pid=10&action=details"]',
        attribute: 'href',
        filters: [{ name: 'replace', args: ['details', 'download'] }],
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
          'img[title="FREE!"]': 0,
          'img[title="Download Multiplier: 0.5"]': 0.5,
          '*': 1,
        },
      },
      uploadvolumefactor: {
        case: { 'img[title="Upload Multiplier: 2"]': 2, '*': 1 },
      },
      minimumratio: { text: 0.5 },
      minimumseedtime: { text: 172800 },
    },
  },
  source: 'jackett',
};
