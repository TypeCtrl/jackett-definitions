import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'archetorrent',
  name: 'ArcheTorrent',
  description: 'ArcheTorrent is a FRENCH Private Torrent Tracker',
  language: 'fr-FR',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://archetorrent.com'],
  settings: [
    { name: 'username', type: 'text', label: 'Username' },
    { name: 'password', type: 'password', label: 'Password' },
    {
      name: 'filter_title',
      type: 'checkbox',
      label: 'Try to normalize releases names by moving year after the title',
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
  ],
  caps: {
    categorymappings: [
      { id: '18', cat: 'PC', desc: 'Applications: PC' },
      { id: '19', cat: 'PC/Mac', desc: 'Applications: Mac' },
      { id: '54', cat: 'PC', desc: 'Applications: linux' },
      { id: '56', cat: 'XXX/Other', desc: 'Autres: ebook xxx' },
      { id: '36', cat: 'Books', desc: 'Autres: E-Books' },
      { id: '37', cat: 'Other', desc: 'Autres: Images' },
      {
        id: '38',
        cat: 'PC/Phone-Other',
        desc: 'Autres: Telephone-mobile',
      },
      { id: '47', cat: 'Movies', desc: 'Films: Animé' },
      { id: '1', cat: 'Movies/DVD', desc: 'Films: DVD' },
      { id: '2', cat: 'Movies/SD', desc: 'Films: Dvdrip' },
      { id: '68', cat: 'Movies', desc: 'Films: TAT Releases' },
      { id: '70', cat: 'Movies/HD', desc: 'Films: UHD 4K' },
      { id: '69', cat: 'Movies', desc: 'Films: Retro' },
      { id: '3', cat: 'Movies/HD', desc: 'Films: HD1080' },
      { id: '42', cat: 'Movies/HD', desc: 'Films: HD720' },
      { id: '4', cat: 'Movies', desc: 'Films: Cam/Ts' },
      { id: '22', cat: 'Movies/BluRay', desc: 'Films: bluray' },
      { id: '23', cat: 'Movies/3D', desc: 'Films: 3D' },
      { id: '24', cat: 'Movies/Foreign', desc: 'Films: VOSTFR' },
      { id: '25', cat: 'XXX', desc: 'Films: Adulte' },
      { id: '48', cat: 'TV/Documentary', desc: 'Films: Documentaire' },
      { id: '49', cat: 'Movies/Other', desc: 'Films: Spectacle' },
      { id: '51', cat: 'Movies/SD', desc: 'Films: R5' },
      { id: '52', cat: 'Movies/SD', desc: 'Films: bdrip' },
      { id: '53', cat: 'Movies/SD', desc: 'Films: brrip' },
      { id: '55', cat: 'Movies/DVD', desc: 'Films: dvd-pack' },
      { id: '57', cat: 'Movies', desc: 'Films: manga' },
      { id: '59', cat: 'Movies/WEBDL', desc: 'Films: Webrip' },
      { id: '63', cat: 'Movies/SD', desc: 'Films: M-HD' },
      { id: '10', cat: 'PC/Games', desc: 'Jeux: PC' },
      { id: '11', cat: 'Console/Other', desc: 'Jeux: PS2' },
      { id: '43', cat: 'Console/PS3', desc: 'Jeux: PS3' },
      { id: '12', cat: 'Console/PSP', desc: 'Jeux: PSP' },
      { id: '14', cat: 'Console/Xbox360', desc: 'Jeux: Xbox360' },
      { id: '44', cat: 'Console/Wii', desc: 'Jeux: Wii' },
      { id: '45', cat: 'Console/NDS', desc: 'Jeux: DS' },
      { id: '27', cat: 'Audio/Video', desc: 'Musique: Clip Video' },
      { id: '62', cat: 'TV/SD', desc: 'Serie tv: TV BDRip' },
      { id: '5', cat: 'TV/SD', desc: 'Serie tv: Dvdrip' },
      { id: '41', cat: 'TV/HD', desc: 'Serie tv: Hd' },
      { id: '60', cat: 'TV/SD', desc: 'Serie tv: pack série tv' },
      { id: '64', cat: 'TV/Foreign', desc: 'Serie tv: vostfr' },
      { id: '65', cat: 'TV/HD', desc: 'Serie tv: Série tv 720P' },
      { id: '66', cat: 'TV/HD', desc: 'Serie tv: Série tv 1080P' },
      { id: '67', cat: 'TV/HD', desc: 'Serie tv: Série tv PackHD' },
      { id: '73', cat: 'TV/Anime', desc: 'Serie tv: Anime ' },
      { id: '72', cat: 'TV/Sport', desc: 'Sport: sport' },
      { id: '61', cat: 'TV/SD', desc: 'Tv: DVDRip' },
    ],
    modes: { search: ['q'], 'tv-search': ['q', 'season', 'ep'] },
  },
  login: {
    path: 'account-login.php',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [
      {
        selector: 'form:contains("Erreur")',
        message: { selector: 'form', remove: 'table' },
      },
    ],
    test: { path: 'torrents-search.php' },
  },
  search: {
    keywordsfilters: [
      { name: 'replace', args: ['-', ' '] },
      { name: 'replace', args: ['+', ' '] },
      { name: 're_replace', args: ['(\\w+)', ' +$1'] },
    ],
    paths: [{ path: 'torrents-search.php' }],
    inputs: {
      $raw: '{{range .Categories}}c{{.}}=1&{{end}}',
      search: '{{ .Keywords }}',
      incldead: '1',
    },
    rows: {
      selector: 'table.ttable_headinner > tbody > tr[class^="t-row"]',
    },
    fields: {
      download: {
        selector: 'a[href^="torrents-details.php?id="]',
        attribute: 'href',
        filters: [
          {
            name: 'replace',
            args: ['torrents-details.php', 'download.php'],
          },
        ],
      },
      date: {
        selector: 'td:nth-child(3) a',
        attribute: 'onmouseover',
        filters: [
          { name: 'regexp', args: 'Poster le: </b>(.*?)<br />' },
          { name: 'dateparse', args: '02-01-2006' },
        ],
      },
      title_normal: {
        selector: 'a[href^="torrents-details.php?id="]',
        filters: [{ name: 'replace', args: [' - (Nouveau!)', ''] }],
      },
      title_filtered: {
        selector: 'a[href^="torrents-details.php?id="]',
        filters: [
          { name: 'replace', args: [' - (Nouveau!)', ''] },
          {
            name: 're_replace',
            args: [
              '(?i)^(?:(.+?)((?:[\\.\\-\\s_\\[]+(?:imax|(?:dvd|bd|tv)(?:rip|scr)|bluray(?:\\-?rip)?|720\\s*p?|1080\\s*p?|vof?|vost(?:fr)?|multi|vf(?:f|q)?[1-3]?|(?:true)?french|eng?)[\\.\\-\\s_\\]]*)*)([\\(\\[]?(?:20|1[7-9])\\d{2}[\\)\\]]?)(.*)$|(.*))$',
              '$1 $3 $2 $4 $5',
            ],
          },
          { name: 'replace', args: ['.', ' '] },
          { name: 'trim' },
          {
            name: 're_replace',
            args: ['(?i)\\s(mkv|avi|divx|xvid|mp4)$', ''],
          },
          { name: 're_replace', args: ['(\\s{2,5})', ' '] },
          { name: 'trim' },
        ],
      },
      title_phase1: {
        text:
          '{{if .Config.filter_title }}{{ .Result.title_filtered }}{{else}}{{ .Result.title_normal }}{{end}}',
      },
      title_multilang: {
        text: '{{ .Result.title_phase1 }}',
        filters: [
          {
            name: 're_replace',
            args: [
              '[\\.\\s\\[\\-][Mm][Uu][Ll][Tt][Ii][\\.\\s\\]\\-]',
              '.{{ .Config.multilanguage }}.',
            ],
          },
        ],
      },
      title_phase2: {
        text:
          '{{if .Config.multilang }}{{ .Result.title_multilang }}{{else}}{{ .Result.title_phase1 }}{{end}}',
      },
      title_vostfr: {
        text: '{{ .Result.title_phase2 }}',
        filters: [
          {
            name: 're_replace',
            args: ['[\\.\\s\\[\\-][Vv][Oo][Ss][Tt][Ff][Rr][\\.\\s\\]\\-]', '.ENGLISH.'],
          },
        ],
      },
      title: {
        text:
          '{{if .Config.vostfr }}{{ .Result.title_vostfr }}{{else}}{{ .Result.title_phase2 }}{{end}}',
      },
      category: {
        selector: 'a[href^="torrents.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      details: {
        selector: 'a[href^="torrents-details.php?id="]',
        attribute: 'href',
      },
      banner: { selector: 'img.rounded-img', attribute: 'src' },
      size: { selector: 'td:nth-child(6)' },
      grabs: { selector: 'td:nth-child(9) font b' },
      seeders: { selector: 'td:nth-child(7) font b' },
      leechers: { selector: 'td:nth-child(8) font b' },
      downloadvolumefactor: {
        case: { 'img[title="freeleech"]': '0', '*': '1' },
      },
      uploadvolumefactor: { case: { '*': '1' } },
    },
  },
  source: 'jackett',
};
