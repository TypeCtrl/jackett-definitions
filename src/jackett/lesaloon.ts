import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'lesaloon',
  name: 'LeSaloon',
  description: 'Le Saloon is a FRENCH Private Torrent Tracker for MOVIES / TV / GENERAL',
  language: 'fr-FR',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://lesaloonv2-0.net/'],
  legacylinks: ['http://lesaloonv2-0.net/'],
  caps: {
    categorymappings: [
      { id: '13', cat: 'Movies/BluRay', desc: 'Films BD-Rip / BRRip' },
      { id: '19', cat: 'Movies/WEB-DL', desc: 'Films WEB-DL / WEB-Rip' },
      { id: '15', cat: 'Movies/DVD', desc: 'Films DVD-Rip' },
      { id: '18', cat: 'Movies/HD', desc: 'Films HD 720p' },
      { id: '20', cat: 'Movies/HD', desc: 'Films HD 1080p' },
      { id: '26', cat: 'Movies/HD', desc: 'Films mHD 720p' },
      { id: '27', cat: 'Movies/HD', desc: 'Films mHD 1080p' },
      { id: '28', cat: 'Movies/HD', desc: 'Films x265' },
      { id: '29', cat: 'Movies', desc: 'Films Remux' },
      { id: '30', cat: 'Movies/BluRay', desc: 'Films Blu-Ray (complet)' },
      { id: '31', cat: 'Movies/3D', desc: 'Films 3D' },
      { id: '32', cat: 'Movies/UHD', desc: 'Films 4K UHD' },
      { id: '33', cat: 'Movies/SD', desc: 'Films Québécois SD' },
      { id: '34', cat: 'Movies/HD', desc: 'Films Québécois HD' },
      { id: '35', cat: 'Movies/DVD', desc: 'Films Québécois DVD-R' },
      { id: '37', cat: 'Movies/DVD', desc: 'Films DVD-R' },
      { id: '38', cat: 'Movies/SD', desc: 'Films V.O.S.T. SD' },
      { id: '39', cat: 'Movies/HD', desc: 'Films V.O.S.T. HD' },
      { id: '40', cat: 'Movies/SD', desc: 'Films V.O. SD' },
      { id: '41', cat: 'Movies/HD', desc: 'Films V.O. HD' },
      { id: '42', cat: 'Movies', desc: 'Films TV-Rip' },
      { id: '21', cat: 'TV/SD', desc: 'Séries-Télé SD' },
      { id: '22', cat: 'TV/HD', desc: 'Séries-Télé HD' },
      { id: '17', cat: 'TV/SD', desc: 'Séries-Télé Pack SD' },
      { id: '23', cat: 'TV/HD', desc: 'Séries-Télé Pack HD' },
      { id: '45', cat: 'TV/SD', desc: 'Séries-Télé Québécois SD' },
      { id: '46', cat: 'TV/HD', desc: 'Séries-Télé Québécois HD' },
      { id: '47', cat: 'TV/SD', desc: 'Séries-Télé V.O.S.T. SD' },
      { id: '48', cat: 'TV/HD', desc: 'Séries-Télé V.O.S.T. HD' },
      { id: '49', cat: 'TV/SD', desc: 'Séries-Télé Émissions TV SD' },
      { id: '50', cat: 'TV/HD', desc: 'Séries-Télé Émissions TV HD' },
      { id: '51', cat: 'TV', desc: 'Séries-Télé Blu-Ray' },
      { id: '52', cat: 'TV', desc: 'Séries-Télé DVD-R' },
      { id: '43', cat: 'TV/SD', desc: 'Séries-Télé Pack SD Québec' },
      { id: '44', cat: 'TV/HD', desc: 'Séries-Télé Pack HD Québec' },
      { id: '77', cat: 'TV/Documentary', desc: 'Docu. SD' },
      { id: '78', cat: 'TV/Documentary', desc: 'Docu. HD' },
      { id: '79', cat: 'TV/Documentary', desc: 'Docu. V.O.S.T. SD' },
      { id: '80', cat: 'TV/Documentary', desc: 'Docu. V.O.S.T. HD' },
      { id: '85', cat: 'TV/Documentary', desc: 'Docu-Série SD' },
      { id: '86', cat: 'TV/Documentary', desc: 'Docu-Série HD' },
      { id: '87', cat: 'TV/Documentary', desc: 'Docu-Pack SD' },
      { id: '88', cat: 'TV/Documentary', desc: 'Docu-Pack HD' },
      { id: '54', cat: 'Audio/MP3', desc: 'Musique MP3' },
      { id: '55', cat: 'Audio/Lossless', desc: 'Musique FLAC' },
      { id: '56', cat: 'Audio', desc: 'Musique DSD' },
      { id: '57', cat: 'Audio', desc: 'Musique Karaoke' },
      { id: '58', cat: 'Audio/Other', desc: 'Musique Autres' },
      { id: '59', cat: 'PC/Games', desc: 'Jeux PC' },
      { id: '60', cat: 'Console', desc: 'Jeux Consoles' },
      { id: '61', cat: 'Books/Ebook', desc: 'Livres epub' },
      { id: '62', cat: 'Books/Ebook', desc: 'Livres pdf' },
      { id: '63', cat: 'Books/Mags', desc: 'Livres Journaux' },
      { id: '64', cat: 'Books/Mags', desc: 'Livres Magazines' },
      { id: '65', cat: 'Books/Comics', desc: 'Livres Bandes Dessinées' },
      { id: '66', cat: 'Books/Other', desc: 'Livres Multi-Format' },
      { id: '68', cat: 'PC/0day', desc: 'Logiciels Windows' },
      { id: '69', cat: 'PC/Mac', desc: 'Logiciels Mac' },
      { id: '71', cat: 'TV/Other', desc: 'Spectacles Humour' },
      { id: '72', cat: 'TV/Other', desc: 'Spectacles Live' },
      { id: '84', cat: 'TV/Other', desc: 'Théâtre' },
      { id: '83', cat: 'TV/Anime', desc: 'Séries Animées' },
      { id: '74', cat: 'TV/Sport', desc: 'Sports [Français]' },
      { id: '75', cat: 'TV/Sport', desc: 'Sports [Anglais]' },
      { id: '82', cat: 'Other', desc: 'Autres / Inclassable' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
      'music-search': ['q'],
      'book-search': ['q'],
    },
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
  login: {
    path: 'yupy_login.php',
    method: 'form',
    form: 'form[action^="login"]',
    inputs: {
      uid: '{{ .Config.username }}',
      pwd: '{{ .Config.password }}',
      rememberme: '',
    },
    captcha: {
      type: 'image',
      selector: 'img[src^="access_code/"]',
      input: 'private_key',
    },
    error: [{ selector: 'tr td span[style="color:#FF0000;"]' }],
    test: { path: 'index.php', selector: 'a[href="logout.php"]' },
  },
  search: {
    paths: [{ path: 'index.php' }],
    inputs: {
      page: 'torrents',
      search: '{{ .Keywords }}',
      parentcategory: 0,
      category: 0,
      genre: 0,
      options: '{{ if .Config.freeleech }}5{{ else }}0{{ end }}',
      active: 0,
    },
    rows: {
      selector: 'table.torrentlist tbody tr:has(a[href^="index.php?page=torrent-details"])',
    },
    fields: {
      category: {
        selector: 'td a[href^="index.php?page=torrents&category="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'category' }],
      },
      title_phase1: {
        selector: 'td a[href^="index.php?page=torrent-details"]',
      },
      title_multilang: {
        text: '{{ .Result.title_phase1 }}',
        filters: [
          {
            name: 're_replace',
            args: ['(?i)(\\smulti\\s)', ' {{ .Config.multilanguage }} '],
          },
        ],
      },
      title_phase2: {
        text: '{{ if .Config.multilang }}{{ .Result.title_multilang }}{{ else }}{{ .Result.title_phase1 }}{{ end }}',
      },
      title_vostfr: {
        text: '{{ .Result.title_phase2 }}',
        filters: [
          { name: 're_replace', args: ['(?i)(\\svostfr\\s)', ' ENGLISH '] },
          {
            name: 're_replace',
            args: ['(?i)(\\ssubfrench\\s)', ' ENGLISH '],
          },
        ],
      },
      title: {
        text: '{{ if .Config.vostfr }}{{ .Result.title_vostfr }}{{ else }}{{ .Result.title_phase2 }}{{ end }}',
      },
      details: {
        selector: 'td a[href^="index.php?page=torrent-details"]',
        attribute: 'href',
      },
      download: {
        selector: 'td a[href^="download.php?id="]',
        attribute: 'href',
      },
      poster: {
        selector: 'a[href^="index.php?page=torrent-details"][onmouseover]',
        attribute: 'onmouseover',
        filters: [{ name: 'regexp', args: 'src=(.*?) ' }],
      },
      date: {
        selector: 'td:nth-child(7)',
        filters: [
          { name: 'append', args: ' +01:00' },
          { name: 'dateparse', args: '02/01/2006 15:04:05 -07:00' },
        ],
      },
      seeders: { selector: 'td:nth-child(8)' },
      leechers: { selector: 'td:nth-child(9)' },
      grabs: { selector: 'td:nth-child(10)' },
      size: { selector: 'td:nth-child(12)' },
      downloadvolumefactor: {
        case: {
          'img[src="images/freeleech.gif"]': 0,
          'img[src="images/gold.gif"]': 0,
          'img[src="images/silver.gif"]': 0.5,
          'img[src="images/bronze.gif"]': 0.25,
          '*': 1,
        },
      },
      uploadvolumefactor: { case: { '*': 1 } },
    },
  },
  source: 'jackett',
};
