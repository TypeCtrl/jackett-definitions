import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'pixelcove',
  name: 'PixelCove',
  description: 'PixelCove (Ultimate Gamer) is a Private Torrent Tracker for GAMES',
  language: 'en-US',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://www.pixelcove.me/'],
  caps: {
    categorymappings: [
      { id: '10', cat: 'PC/Games', desc: 'Windows' },
      { id: '11', cat: 'PC/Mac', desc: 'Macintosh' },
      { id: '47', cat: 'PC', desc: 'Linux' },
      { id: '56', cat: 'PC', desc: 'VR' },
      { id: '14', cat: 'Console/Xbox', desc: 'Xbox' },
      { id: '61', cat: 'Console/Xbox360', desc: 'Xbox 360' },
      { id: '62', cat: 'Console/XboxOne', desc: 'Xbox One' },
      { id: '43', cat: 'Console/PS3', desc: 'Playstation ' },
      { id: '63', cat: 'Console/PS3', desc: 'Playstation 2' },
      { id: '64', cat: 'Console/PS3', desc: 'Playstation 3' },
      { id: '67', cat: 'Console/PS4', desc: 'Playstation 4' },
      { id: '12', cat: 'Console/Other', desc: 'PSN' },
      { id: '57', cat: 'Console/Other', desc: 'Gamecube' },
      { id: '44', cat: 'Console/Wii', desc: 'Wii' },
      { id: '46', cat: 'Console/Wii', desc: 'Wii U' },
      { id: '76', cat: 'Console/Other', desc: 'Switch' },
      { id: '15', cat: 'Console/NDS', desc: 'DS' },
      { id: '68', cat: 'Console/NDS', desc: '3DS' },
      { id: '69', cat: 'Console/PSP', desc: 'PSP' },
      { id: '70', cat: 'Console/PS Vita', desc: 'PSVita' },
      { id: '65', cat: 'PC/Phone-IOS', desc: 'iOS' },
      { id: '49', cat: 'PC/Phone-Android', desc: 'Android' },
      { id: '66', cat: 'PC/Phone-Other', desc: 'Windows Mobile' },
      { id: '53', cat: 'Books', desc: 'Books/Mags' },
      { id: '60', cat: 'Books', desc: 'Comics' },
      { id: '17', cat: 'Books', desc: 'Guides' },
      { id: '58', cat: 'Audio/Video', desc: 'Gaming Videos' },
      { id: '52', cat: 'Audio', desc: 'OST' },
      { id: '55', cat: 'Other', desc: 'Time for a Break' },
      { id: '59', cat: 'Other', desc: 'Mods' },
      { id: '54', cat: 'Other', desc: 'Updates/Fixes' },
      { id: '71', cat: 'PC/0day', desc: 'Applications/Tools' },
      { id: '48', cat: 'Other', desc: 'Retro' },
      { id: '72', cat: 'Other', desc: 'Board Games' },
      { id: '75', cat: 'Other', desc: 'Paper Crafting' },
    ],
    modes: { search: ['q'] },
  },
  settings: [
    { name: 'username', type: 'text', label: 'Username' },
    { name: 'password', type: 'password', label: 'Password' },
    {
      name: 'freeleech',
      type: 'checkbox',
      label: 'Search freeleech only',
      default: false,
    },
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: 'time',
      options: { time: 'created', seeders: 'seeders', size: 'size' },
    },
    {
      name: 'type',
      type: 'select',
      label: 'Order requested from site',
      default: 'desc',
      options: { desc: 'desc', asc: 'asc' },
    },
  ],
  login: {
    path: 'login',
    method: 'form',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      cinfo: '2550|1350|24|-60',
      keeploggedin: 1,
    },
    error: [{ selector: 'div.error' }],
    test: { path: 'torrents.php', selector: 'a.username' },
  },
  search: {
    paths: [{ path: 'torrents.php' }],
    inputs: {
      $raw: '{{ range .Categories }}filter_cat[{{.}}]=1&{{end}}',
      order_by: '{{ .Config.sort }}',
      order_way: '{{ .Config.type }}',
      action: 'advanced',
      filter_freeleech: '{{ if .Config.freeleech }}1{{ else }}{{ end }}',
      searchtext: '',
      title: '{{ .Keywords }}',
      filelist: '',
      taglist: '',
    },
    rows: {
      selector: 'table#torrent_table > tbody > tr[class^="torrent row"]',
    },
    fields: {
      download: {
        selector: 'a[href^="torrents.php?action=download&id="]',
        attribute: 'href',
      },
      description: { selector: 'div.tags' },
      title: { selector: 'a[href^="/torrents.php?id="]' },
      category: {
        selector: 'a[href*="filter_cat"]',
        attribute: 'href',
        filters: [{ name: 'regexp', args: '\\[(\\d+?)\\]' }],
      },
      details: {
        selector: 'a[href^="/torrents.php?id="]',
        attribute: 'href',
      },
      banner: {
        optional: true,
        selector: 'td:nth-child(2) > script',
        filters: [
          { name: 'regexp', args: 'src=\\\\"(.*?)\\\\"' },
          { name: 're_replace', args: ['\\\\(.)', '$1'] },
          {
            name: 'replace',
            args: ['/static/common/noartwork/noimage.png', ''],
          },
        ],
      },
      files: { selector: 'td:nth-child(3)' },
      date: {
        selector: 'td:nth-child(5) > span',
        attribute: 'title',
        filters: [
          { name: 'append', args: ' +00:00' },
          { name: 'dateparse', args: 'Jan 02 2006, 15:04 -07:00' },
        ],
      },
      size: { selector: 'td:nth-child(6)' },
      grabs: { selector: 'td:nth-child(7)' },
      seeders: { selector: 'td:nth-child(8)' },
      leechers: { selector: 'td:nth-child(9)' },
      downloadvolumefactor: {
        case: { 'img[src$="/freedownload.gif"]': 0, '*': 1 },
      },
      uploadvolumefactor: { text: 1 },
      minimumratio: { text: 0.5 },
    },
  },
  source: 'jackett',
};
