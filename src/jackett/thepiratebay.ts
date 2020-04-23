import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'thepiratebay',
  name: 'The Pirate Bay',
  description: 'Pirate Bay (TPB) is the galaxy’s most resilient Public BitTorrent site',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  followredirect: true,
  links: [
    'https://thepiratebay.vip/',
    'https://thepiratebay0.org/',
    'https://thepiratebay10.org/',
    'https://pirateproxy.live/',
    'https://thehiddenbay.com/',
    'https://thepiratebay.zone/',
    'https://tpb.party/',
    'https://piratebay1.live/',
    'https://piratebay1.xyz/',
    'https://piratebay1.top/',
    'https://piratebayproxy.live/',
    'https://piratebay1.info/',
    'https://thepiratebay1.com/',
    'https://thepiratebay1.live/',
    'https://thepiratebays.info/',
    'https://thepiratebays.live/',
    'https://thepiratebay1.top/',
    'https://thepiratebay1.info/',
  ],
  legacylinks: [
    'https://thepiratesbay.pw/',
    'https://tproxy.pro/',
    'https://thepiratebay.org/',
    'https://tpb.root.yt/?ckattempt=1/',
    'https://tpb.bike/',
    'https://pirateproxy.page/',
    'https://tpb14.ukpass.co/',
  ],
  caps: {
    categorymappings: [
      { id: '100', cat: 'Audio', desc: 'Audio', default: true },
      { id: '101', cat: 'Audio', desc: 'Music', default: true },
      {
        id: '102',
        cat: 'Audio/Audiobook',
        desc: 'Audio books',
        default: true,
      },
      { id: '103', cat: 'Audio', desc: 'Sound clips', default: true },
      { id: '104', cat: 'Audio/Lossless', desc: 'FLAC', default: true },
      {
        id: '199',
        cat: 'Audio/Other',
        desc: 'Audio Other',
        default: true,
      },
      { id: '200', cat: 'Movies', desc: 'Video', default: true },
      { id: '201', cat: 'Movies', desc: 'Movies', default: true },
      {
        id: '202',
        cat: 'Movies/DVD',
        desc: 'Movies DVDR',
        default: true,
      },
      {
        id: '203',
        cat: 'Audio/Video',
        desc: 'Music videos',
        default: true,
      },
      {
        id: '204',
        cat: 'Movies/Other',
        desc: 'Movie clips',
        default: true,
      },
      { id: '205', cat: 'TV', desc: 'TV shows', default: true },
      { id: '206', cat: 'TV/Other', desc: 'Handheld', default: true },
      {
        id: '207',
        cat: 'Movies/HD',
        desc: 'HD - Movies',
        default: true,
      },
      { id: '208', cat: 'TV/HD', desc: 'HD - TV shows', default: true },
      { id: '209', cat: 'Movies/3D', desc: '3D', default: true },
      {
        id: '299',
        cat: 'Movies/Other',
        desc: 'Video Other',
        default: true,
      },
      { id: '300', cat: 'PC', desc: 'Applications', default: true },
      { id: '301', cat: 'PC', desc: 'Windows', default: true },
      { id: '302', cat: 'PC/Mac', desc: 'Mac', default: true },
      { id: '303', cat: 'PC', desc: 'UNIX', default: true },
      {
        id: '304',
        cat: 'PC/Phone-Other',
        desc: 'Handheld',
        default: true,
      },
      {
        id: '305',
        cat: 'PC/Phone-IOS',
        desc: 'IOS (iPad/iPhone)',
        default: true,
      },
      {
        id: '306',
        cat: 'PC/Phone-Android',
        desc: 'Android',
        default: true,
      },
      { id: '399', cat: 'PC', desc: 'Other OS', default: true },
      { id: '400', cat: 'Console', desc: 'Games', default: true },
      { id: '401', cat: 'PC/Games', desc: 'PC', default: true },
      { id: '402', cat: 'PC/Mac', desc: 'Mac', default: true },
      { id: '403', cat: 'Console/PS4', desc: 'PSx', default: true },
      {
        id: '404',
        cat: 'Console/Xbox',
        desc: 'XBOX360',
        default: true,
      },
      { id: '405', cat: 'Console/Wii', desc: 'Wii', default: true },
      {
        id: '406',
        cat: 'Console/Other',
        desc: 'Handheld',
        default: true,
      },
      {
        id: '407',
        cat: 'Console/Other',
        desc: 'IOS (iPad/iPhone)',
        default: true,
      },
      {
        id: '408',
        cat: 'Console/Other',
        desc: 'Android',
        default: true,
      },
      {
        id: '499',
        cat: 'Console/Other',
        desc: 'Games Other',
        default: true,
      },
      { id: '500', cat: 'XXX', desc: 'Porn', default: true },
      { id: '501', cat: 'XXX', desc: 'Movies', default: true },
      { id: '502', cat: 'XXX/DVD', desc: 'Movies DVDR', default: true },
      {
        id: '503',
        cat: 'XXX/Imageset',
        desc: 'Pictures',
        default: true,
      },
      { id: '504', cat: 'XXX', desc: 'Games', default: true },
      { id: '505', cat: 'XXX', desc: 'HD - Movies', default: true },
      { id: '506', cat: 'XXX', desc: 'Movie clips', default: true },
      {
        id: '599',
        cat: 'XXX/Other',
        desc: 'Porn Other',
        default: true,
      },
      { id: '600', cat: 'Other', desc: 'Other', default: true },
      { id: '601', cat: 'Books', desc: 'E-books', default: true },
      { id: '602', cat: 'Books/Comics', desc: 'Comics', default: true },
      { id: '603', cat: 'Books', desc: 'Pictures', default: true },
      { id: '604', cat: 'Books', desc: 'Covers', default: true },
      { id: '605', cat: 'Books', desc: 'Physibles', default: true },
      {
        id: '699',
        cat: 'Books/Other',
        desc: 'Other Other',
        default: true,
      },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
      'music-search': ['q'],
    },
  },
  settings: [
    {
      name: 'info',
      type: 'info',
      label: 'Proxies',
      default:
        'Yes, <b>The Pirate Bay</b> is currently only reachable via <b>TOR</b>.</br>But you can try to use any of the unofficial proxies above.</br>To check on the status of the official TPB Web Site access the <a href="https://pirates-forum.org/misc.php?page=tpbstatus" target="_blank">tpbstatus</a> page. When the <i>https</i> column has green dots then the site is online.',
    },
    {
      name: 'order',
      type: 'select',
      label: 'Order results',
      default: '99',
      options: { '3': 'Time', '8': 'Seeders', '99': 'Default' },
    },
  ],
  search: {
    paths: [
      {
        path:
          '{{ if .Keywords }}/search/{{ .Keywords }}/0/{{ .Config.order }}/{{ join .Categories ","}}{{else}}/recent{{end}}',
      },
    ],
    keywordsfilters: [
      {
        name: 're_replace',
        args: ['([\\p{IsCJKUnifiedIdeographs}\\W]+)', '.'],
      },
      {
        name: 're_replace',
        args: ['General Hospital S(\\d{2,3})E(\\d{2,3})', '$0 | \\(S$1 E$2\\)'],
      },
      { name: 'tolower' },
    ],
    rows: { selector: '#searchResult tbody tr:has(td.vertTh)' },
    fields: {
      category: {
        selector: 'td:nth-child(1) a:last-child',
        attribute: 'href',
        filters: [{ name: 'split', args: ['/', -1] }],
      },
      title: {
        selector: '.detLink',
        filters: [{ name: 'replace', args: ['\u000f', ''] }],
      },
      details: { selector: '.detLink', attribute: 'href' },
      download: {
        selector: 'td:nth-child(2) a[title^="Download"]',
        attribute: 'href',
      },
      size: {
        selector: 'td:nth-child(2) font.detDesc',
        filters: [{ name: 'regexp', args: 'Size (.+?),' }],
      },
      date: {
        optional: true,
        selector: 'td:nth-child(2) font.detDesc:not(:contains("ago")):not(:contains(":"))',
        filters: [
          { name: 'regexp', args: 'Uploaded (.+?),' },
          { name: 'replace', args: [' ', ' '] },
          { name: 'dateparse', args: '01-02 2006' },
        ],
      },
      seeders: { selector: 'td:nth-child(3)' },
      leechers: { selector: 'td:nth-child(4)' },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
