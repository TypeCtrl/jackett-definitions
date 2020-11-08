import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'hdforever',
  name: 'HD-Forever',
  description: 'HD-Forever (HD-F) is a FRENCH Private Torrent Tracker for HD MOVIES',
  language: 'fr-FR',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://hdf.world/'],
  caps: {
    categorymappings: [
      { id: '1', cat: 'Movies', desc: 'Film' },
      { id: '2', cat: 'Movies', desc: 'Dessin animé' },
      { id: '3', cat: 'Movies', desc: 'Bonus BD' },
      { id: '4', cat: 'Movies', desc: 'Concert' },
      { id: '5', cat: 'TV', desc: 'Série' },
      { id: '6', cat: 'TV/Anime', desc: 'Série anim' },
      { id: '7', cat: 'Movies', desc: 'Documentaire' },
    ],
    modes: { search: ['q'], 'tv-search': ['q'], 'movie-search': ['q'] },
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
      name: 'usetoken',
      type: 'checkbox',
      label: 'Always try to use the FreeLeech Token',
      default: false,
    },
    {
      name: 'multilang',
      type: 'checkbox',
      label: 'Replace MULTI by another language in release name',
      default: false,
    },
    {
      name: 'multilanguage',
      type: 'select',
      label: 'Replace MULTI by this language',
      default: 'FRENCH',
      options: {
        FRENCH: 'FRENCH',
        'MULTI.FRENCH': 'MULTI.FRENCH',
        ENGLISH: 'ENGLISH',
        'MULTI.ENGLISH': 'MULTI.ENGLISH',
        VOSTFR: 'VOSTFR',
        'MULTI.VOSTFR': 'MULTI.VOSTFR',
      },
    },
    {
      name: 'vostfr',
      type: 'checkbox',
      label: 'Replace VOSTFR with ENGLISH',
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
    {
      name: 'info_radarr',
      type: 'info',
      label: 'About Radarr',
      default:
        'The HD-F web site cannot find movies if you use the release year in a title search. When you define your Radarr v3 Indexer remember to tick the <i>Remove year from search string</i> checkbox.',
    },
  ],
  login: {
    path: 'login.php',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      keeplogged: 1,
    },
    error: [{ selector: 'form#loginform > span.warning' }],
    test: {
      path: 'torrents.php',
      selector: 'a[href^="logout.php?auth="]',
    },
  },
  search: {
    inputs: {
      $raw: '{{range .Categories}}filter_cat[{{.}}]=1&{{end}}',
      groupname: '{{ .Keywords }}',
      order_by: '{{ .Config.sort }}',
      order_way: '{{ .Config.type }}',
      action: 'advanced',
      searchsubmit: 1,
      freetorrent: '{{ if .Config.freeleech }}1{{ else }}{{ end }}',
    },
    rows: { selector: 'table#torrent_table > tbody > tr.torrent' },
    fields: {
      category: {
        selector: 'td.cats_col',
        case: {
          'div.cats_film': 1,
          'div.cats_dessinanimé': 2,
          'div.cats_bonusbd': 3,
          'div.cats_concert': 4,
          'div.cats_série': 5,
          'div.cats_sérieanim': 6,
          'div.cats_documentaire': 7,
        },
      },
      'download-regular': {
        selector: 'a[href^="torrents.php?action=download&"]',
        attribute: 'href',
      },
      'download-usetoken': {
        selector: 'a[href^="torrents.php?action=download&"]',
        attribute: 'href',
        filters: [{ name: 'append', args: '&usetoken=1' }],
      },
      download: {
        text: '{{if .Config.usetoken}}{{ .Result.download-usetoken }}{{else}}{{ .Result.download-regular }}{{end}}',
      },
      title_phase1: {
        selector: 'div.group_info',
        remove: 'span:nth-child(1), div.tags',
        filters: [
          { name: 'replace', args: ['\n', ''] },
          {
            name: 're_replace',
            args: ['^(.+)                                                                            (.+)', '$2-$1'],
          },
          { name: 'replace', args: ['                         ', ' '] },
          {
            name: 'replace',
            args: ['Blu-Ray Original', 'Complete.BluRay'],
          },
          { name: 'replace', args: ['Blu-Ray Remux', 'Remux'] },
          { name: 'replace', args: ['Blu-Ray Rip', 'BluRay.Rip'] },
          { name: 'replace', args: ['mHD', 'mHD.BluRay.Rip'] },
          { name: 'replace', args: ['/ DC', '/ Directors.Cut'] },
          { name: 'replace', args: ['/ VL', '/ Extended'] },
          { name: 'replace', args: ['/ RM', '/ Remastered'] },
          { name: 'replace', args: ['/ UC', '/ Uncut'] },
          { name: 'replace', args: ['/ ES', '/ Special.Edition'] },
          { name: 'replace', args: [' / Cust_sub', ''] },
          { name: 'replace', args: [' / Cust', ''] },
          { name: 'replace', args: ['/ UN', '/ Unrated'] },
          { name: 'replace', args: [' / Crit', ''] },
          { name: 'replace', args: [' / WAC', ''] },
          { name: 'replace', args: [' / MoC', ''] },
          { name: 'replace', args: [' / BFI', ''] },
          { name: 'replace', args: [' / MUET', ''] },
          { name: 'replace', args: ['/ Exc NF', '/ NF'] },
          { name: 'replace', args: ['/ Exc AMZ', '/ AMZ'] },
          { name: 'replace', args: ['/ Exc YOU', '/ YT'] },
          { name: 'replace', args: [' / ↓25%', ''] },
          { name: 'replace', args: [' / ↓50%', ''] },
          { name: 'replace', args: [' / ↓75%', ''] },
          { name: 'replace', args: [' / Free', ''] },
          { name: 'replace', args: [' / Complété!', ''] },
          { name: 'replace', args: [' / ', '.'] },
          { name: 'trim' },
          {
            name: 'replace',
            args: ['.VFF.VFQ.StFr.MULTI', '.MULTI.VFF.VFQ'],
          },
          {
            name: 'replace',
            args: ['.VFF.VFQ.VO.StFr.MULTI', '.MULTI.VFF.VFQ'],
          },
          { name: 'replace', args: ['.VFF.VFQ.VO.StFr', '.MULTI.VFF.VFQ'] },
          { name: 'replace', args: ['.VFQ.VO.StFr', '.MULTI.VFQ'] },
          { name: 'replace', args: ['.VO.VFI.StFr', '.MULTI'] },
          { name: 'replace', args: ['.VO.VF?.StFr', '.MULTI'] },
          { name: 'replace', args: ['.VFF.VO.StFr', '.MULTI.VFF'] },
          { name: 'replace', args: ['.VOF.StFr', '.FRENCH'] },
          { name: 'replace', args: ['.VFQ.StFr', '.FRENCH'] },
          { name: 'replace', args: ['.VFF.StFr.MULTI', '.MULTI.VFF'] },
          { name: 'replace', args: ['.VFF.StFr', '.FRENCH'] },
          { name: 'replace', args: ['.VFI.MULTI', '.MULTI'] },
          { name: 'replace', args: ['.VO.StFr', '.VOSTFR'] },
          { name: 'replace', args: ['.VFQ.VO', '.MULTI.VFQ'] },
          { name: 'replace', args: ['.VFF.VO', '.MULTI.VFF'] },
          { name: 'replace', args: ['.VO.VF?.StFr', '.MULTI'] },
          { name: 'replace', args: ['.VFI.StFr', '.FRENCH'] },
          { name: 'replace', args: ['.VOF.MULTI', '.MULTI.FRENCH'] },
          { name: 'replace', args: ['.VOF', '.FRENCH'] },
          { name: 'replace', args: ['.VFQ.MULTI', '.MULTI.VFQ'] },
        ],
      },
      title_multilang: {
        text: '{{ .Result.title_phase1 }}',
        filters: [
          {
            name: 're_replace',
            args: ['(?i)([\\s|\\.|-]*multi[\\s|\\.|-]*)', '.{{ .Config.multilanguage }}.'],
          },
        ],
      },
      title_phase2: {
        text: '{{ if .Config.multilang }}{{ .Result.title_multilang }}{{ else }}{{ .Result.title_phase1 }}{{ end }}',
      },
      title_vostfr: {
        text: '{{ .Result.title_phase2 }}',
        filters: [
          {
            name: 're_replace',
            args: ['(?i)([\\s|\\.|-]*vostfr[\\s|\\.|-]*)', '.ENGLISH.'],
          },
          {
            name: 're_replace',
            args: ['(?i)([\\s|\\.|-]*subfrench[\\s|\\.|-]*)', '.ENGLISH.'],
          },
        ],
      },
      title: {
        text: '{{ if .Config.vostfr }}{{ .Result.title_vostfr }}{{ else }}{{ .Result.title_phase2 }}{{ end }}',
      },
      description: { selector: 'div.group_info' },
      poster: {
        selector: 'div.group_image img',
        attribute: 'src',
        optional: true,
      },
      details: {
        selector: 'a[href^="torrents.php?id="]',
        attribute: 'href',
      },
      files: { selector: 'td:nth-child(3)' },
      date: {
        selector: 'td:nth-child(4)',
        filters: [
          { name: 'replace', args: ['Il y a ', ''] },
          { name: 'replace', args: ['heures', 'hours'] },
          { name: 'replace', args: ['heure', 'hour'] },
          { name: 'replace', args: ['jours', 'days'] },
          { name: 'replace', args: ['jour', 'day'] },
          { name: 'replace', args: ['semaines', 'weeks'] },
          { name: 'replace', args: ['semaine', 'week'] },
          { name: 'replace', args: ['mois', 'months'] },
          { name: 'replace', args: ['ans', 'years'] },
          { name: 'replace', args: ['an', 'year'] },
          { name: 'append', args: ' ago' },
        ],
      },
      size: { selector: 'td:nth-child(5)' },
      grabs: { selector: 'td:nth-child(6)' },
      seeders: { selector: 'td:nth-child(7)' },
      leechers: { selector: 'td:nth-child(8)' },
      downloadvolumefactor: {
        case: {
          'div.group_info:contains("/ Free")': 0,
          'div.group_info:contains("↓75%")': 0.75,
          'div.group_info:contains("↓50%")': 0.5,
          'div.group_info:contains("↓25%")': 0.25,
          '*': 1,
        },
      },
      uploadvolumefactor: { text: 1 },
      minimumratio: { text: 0.6 },
      minimumseedtime: { text: 259200 },
    },
    paths: [{ path: 'torrents.php' }],
  },
  source: 'jackett',
};
