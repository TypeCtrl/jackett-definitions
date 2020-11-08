import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'galeriens',
  name: 'Galeriens',
  description: 'Galeriens is a FRENCH Private Torrent Tracker for MOVIES / TV / GENERAL',
  language: 'fr-FR',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://galeriens.com/'],
  legacylinks: ['https://galeriens.eu/'],
  caps: {
    categorymappings: [
      { id: '4', cat: 'Movies/UHD', desc: 'Animations -  4K Remux' },
      { id: '1', cat: 'Movies/3D', desc: 'Animations - 3D' },
      { id: '3', cat: 'Movies/UHD', desc: 'Animations - 4K Light' },
      { id: '2', cat: 'Movies/UHD', desc: 'Animations - 4K UHD' },
      { id: '5', cat: 'Movies/UHD', desc: 'Animations - 4K UHD Bluray' },
      { id: '6', cat: 'Movies/BluRay', desc: 'Animations - BDRip-BRRIP' },
      { id: '7', cat: 'Movies/BluRay', desc: 'Animations - BluRay-R' },
      { id: '8', cat: 'Movies', desc: 'Animations - Coffret Films' },
      { id: '9', cat: 'Movies/DVD', desc: 'Animations - DVD-R' },
      { id: '10', cat: 'Movies/DVD', desc: 'Animations - DVDRip' },
      { id: '11', cat: 'Movies/HD', desc: 'Animations - HD 1080P' },
      { id: '12', cat: 'Movies/HD', desc: 'Animations - HD 720P' },
      { id: '13', cat: 'Movies/HD', desc: 'Animations - HDRiP' },
      { id: '16', cat: 'Movies/HD', desc: 'Animations - HDTV' },
      { id: '14', cat: 'Movies/HD', desc: 'Animations - HDTV 1080p' },
      { id: '15', cat: 'Movies/HD', desc: 'Animations - HDTV 720p' },
      { id: '17', cat: 'Movies', desc: 'Animations - Jap-Animation' },
      { id: '18', cat: 'Movies/HD', desc: 'Animations - M-HD 1080p' },
      { id: '19', cat: 'Movies/HD', desc: 'Animations - M-HD 720p' },
      { id: '20', cat: 'Movies', desc: 'Animations - Remux' },
      { id: '21', cat: 'Movies/WEB-DL', desc: 'Animations - TVRip' },
      { id: '24', cat: 'Movies/WEB-DL', desc: 'Animations - WEB-DL' },
      {
        id: '22',
        cat: 'Movies/WEB-DL',
        desc: 'Animations - WEB-DL 1080p',
      },
      {
        id: '23',
        cat: 'Movies/WEB-DL',
        desc: 'Animations - WEB-DL 720p',
      },
      { id: '25', cat: 'Movies/WEB-DL', desc: 'Animations - WEBRip' },
      { id: '26', cat: 'Movies/HD', desc: 'Animations - X265' },
      {
        id: '49',
        cat: 'TV/Documentary',
        desc: 'Documentaires - Doc-Spectacle',
      },
      {
        id: '48',
        cat: 'TV/Documentary',
        desc: 'Documentaires - Emission TV',
      },
      { id: '51', cat: 'TV/Documentary', desc: 'Documentaires - Film' },
      { id: '50', cat: 'TV/Sport', desc: 'Documentaires - Sport' },
      { id: '57', cat: 'Movies/3D', desc: 'Films - 3D' },
      { id: '59', cat: 'Movies/UHD', desc: 'Films - 4K Light' },
      { id: '60', cat: 'Movies/UHD', desc: 'Films - 4K Remux' },
      { id: '61', cat: 'Movies/UHD', desc: 'Films - 4K UHD' },
      { id: '58', cat: 'Movies/UHD', desc: 'Films - 4K UHD Bluray' },
      { id: '62', cat: 'Movies/BluRay', desc: 'Films - BDRip-BRRIP' },
      { id: '63', cat: 'Movies/BluRay', desc: 'Films - BluRay-R' },
      { id: '64', cat: 'Movies', desc: 'Films - Coffret Films' },
      { id: '65', cat: 'Movies/DVD', desc: 'Films - DVD-R' },
      { id: '66', cat: 'Movies/DVD', desc: 'Films - DVDRip' },
      { id: '67', cat: 'Movies/HD', desc: 'Films - HD 1080P' },
      { id: '68', cat: 'Movies/HD', desc: 'Films - HD 720P' },
      { id: '69', cat: 'Movies/HD', desc: 'Films - HDRiP' },
      { id: '72', cat: 'Movies/HD', desc: 'Films - HDTV' },
      { id: '70', cat: 'Movies/HD', desc: 'Films - HDTV 1080p' },
      { id: '71', cat: 'Movies/HD', desc: 'Films - HDTV 720p' },
      { id: '73', cat: 'Movies/HD', desc: 'Films - M-HD 1080p' },
      { id: '74', cat: 'Movies/HD', desc: 'Films - M-HD 720p' },
      { id: '75', cat: 'Movies', desc: 'Films - Remux' },
      { id: '76', cat: 'Movies/WEB-DL', desc: 'Films - TVRip' },
      { id: '77', cat: 'Movies/WEB-DL', desc: 'Films - WEB-DL' },
      { id: '78', cat: 'Movies/WEB-DL', desc: 'Films - WEB-DL 1080p' },
      { id: '79', cat: 'Movies/WEB-DL', desc: 'Films - WEB-DL 720p' },
      { id: '80', cat: 'Movies/WEB-DL', desc: 'Films - WEBRip' },
      { id: '81', cat: 'Movies/HD', desc: 'Films - X265' },
      { id: '82', cat: 'Movies/3D', desc: 'Films-VOSTFR - 3D' },
      { id: '84', cat: 'Movies/UHD', desc: 'Films-VOSTFR - 4K Light' },
      { id: '85', cat: 'Movies/UHD', desc: 'Films-VOSTFR - 4K Remux' },
      { id: '86', cat: 'Movies/UHD', desc: 'Films-VOSTFR - 4K UHD' },
      {
        id: '83',
        cat: 'Movies/UHD',
        desc: 'Films-VOSTFR - 4K UHD Bluray',
      },
      {
        id: '87',
        cat: 'Movies/BluRay',
        desc: 'Films-VOSTFR - BDRip-BRRIP',
      },
      { id: '88', cat: 'Movies/BluRay', desc: 'Films-VOSTFR - BluRay-R' },
      { id: '89', cat: 'Movies', desc: 'Films-VOSTFR - Coffret Films' },
      { id: '90', cat: 'Movies/DVD', desc: 'Films-VOSTFR - DVD-R' },
      { id: '91', cat: 'Movies/DVD', desc: 'Films-VOSTFR - DVDRip' },
      { id: '92', cat: 'Movies/HD', desc: 'Films-VOSTFR - HD 1080P' },
      { id: '93', cat: 'Movies/HD', desc: 'Films-VOSTFR - HD 720P' },
      { id: '94', cat: 'Movies/HD', desc: 'Films-VOSTFR - HDRiP' },
      { id: '97', cat: 'Movies/HD', desc: 'Films-VOSTFR - HDTV' },
      { id: '95', cat: 'Movies/HD', desc: 'Films-VOSTFR - HDTV 1080p' },
      { id: '96', cat: 'Movies/HD', desc: 'Films-VOSTFR - HDTV 720p' },
      { id: '98', cat: 'Movies/HD', desc: 'Films-VOSTFR - M-HD 1080p' },
      { id: '99', cat: 'Movies/HD', desc: 'Films-VOSTFR - M-HD 720p' },
      { id: '100', cat: 'Movies', desc: 'Films-VOSTFR - Remux' },
      { id: '101', cat: 'Movies/WEB-DL', desc: 'Films-VOSTFR - TVRip' },
      { id: '102', cat: 'Movies/WEB-DL', desc: 'Films-VOSTFR - WEB-DL' },
      {
        id: '103',
        cat: 'Movies/WEB-DL',
        desc: 'Films-VOSTFR - WEB-DL 1080p',
      },
      {
        id: '104',
        cat: 'Movies/WEB-DL',
        desc: 'Films-VOSTFR - WEB-DL 720p',
      },
      { id: '105', cat: 'Movies/WEB-DL', desc: 'Films-VOSTFR - WEBRip' },
      { id: '106', cat: 'Movies/HD', desc: 'Films-VOSTFR - X265' },
      { id: '107', cat: 'Console/3DS', desc: 'Jeux - 3DS-DS' },
      { id: '108', cat: 'PC/Mobile-iOS', desc: 'Jeux - IOS-OSX' },
      { id: '109', cat: 'PC/Games', desc: 'Jeux - PC' },
      { id: '110', cat: 'Console/PS3', desc: 'Jeux - PS3 - PS4' },
      { id: '111', cat: 'Console/PSP', desc: 'Jeux - PSP-PSX' },
      { id: '112', cat: 'Console/Wii', desc: 'Jeux - WII' },
      { id: '113', cat: 'Console/WiiU', desc: 'Jeux - WII-U' },
      { id: '114', cat: 'Console/Xbox', desc: 'Jeux - XBOX' },
      { id: '52', cat: 'Books', desc: 'Livres - BD' },
      { id: '56', cat: 'Audio/Audiobook', desc: 'Livres - Livres Audio' },
      { id: '55', cat: 'Books/Comics', desc: 'Livres - Mangas' },
      { id: '54', cat: 'Books/Mags', desc: 'Livres - Press' },
      { id: '53', cat: 'Books/Ebook', desc: 'Livres - Romans' },
      {
        id: '115',
        cat: 'PC/Mobile-Android',
        desc: 'Logiciels - ANDROID',
      },
      { id: '118', cat: 'PC/Mac', desc: 'Logiciels - APPLE' },
      { id: '116', cat: 'PC/Mobile-iOS', desc: 'Logiciels - IPHONE' },
      { id: '117', cat: 'PC', desc: 'Logiciels - LINUX' },
      { id: '119', cat: 'PC/0day', desc: 'Logiciels - WINDOWS' },
      { id: '120', cat: 'Audio/Lossless', desc: 'Musiques - FLAC' },
      { id: '121', cat: 'Audio', desc: 'Musiques - HQ' },
      { id: '122', cat: 'Audio/MP3', desc: 'Musiques - MP3' },
      { id: '123', cat: 'Audio', desc: 'Musiques - Spect/Concert' },
      { id: '27', cat: 'TV/HD', desc: 'Series-Animee - BDRip-BRRIP' },
      { id: '28', cat: 'TV/HD', desc: 'Series-Animee - BluRay-R' },
      { id: '29', cat: 'TV/SD', desc: 'Series-Animee - DVD-R' },
      { id: '30', cat: 'TV/SD', desc: 'Series-Animee - DVDRip' },
      { id: '32', cat: 'TV/HD', desc: 'Series-Animee - HD 1080P' },
      { id: '31', cat: 'TV/HD', desc: 'Series-Animee - HD 720P' },
      { id: '33', cat: 'TV/HD', desc: 'Series-Animee - HDRiP' },
      { id: '34', cat: 'TV/HD', desc: 'Series-Animee - HDTV' },
      { id: '35', cat: 'TV/HD', desc: 'Series-Animee - HDTV 1080p' },
      { id: '36', cat: 'TV/HD', desc: 'Series-Animee - HDTV 720p' },
      { id: '37', cat: 'TV/HD', desc: 'Series-Animee - M-HD 1080p' },
      { id: '38', cat: 'TV/HD', desc: 'Series-Animee - M-HD 720p' },
      {
        id: '47',
        cat: 'TV/Anime',
        desc: 'Series-Animee - Pack Serie Animee',
      },
      { id: '39', cat: 'TV/Anime', desc: 'Series-Animee - Remux' },
      {
        id: '46',
        cat: 'TV/Anime',
        desc: 'Series-Animee - SERIE JAP-ANIM',
      },
      { id: '40', cat: 'TV/Anime', desc: 'Series-Animee - TVRip' },
      { id: '41', cat: 'TV/Anime', desc: 'Series-Animee - WEB-DL' },
      { id: '42', cat: 'TV/Anime', desc: 'Series-Animee - WEB-DL 1080p' },
      { id: '43', cat: 'TV/Anime', desc: 'Series-Animee - WEB-DL 720p' },
      { id: '44', cat: 'TV/Anime', desc: 'Series-Animee - WEBRip' },
      { id: '45', cat: 'TV/HD', desc: 'Series-Animee - X265' },
      { id: '124', cat: 'TV/HD', desc: 'Series-FR - BDRip-BRRIP' },
      { id: '125', cat: 'TV/HD', desc: 'Series-FR - BluRay-R' },
      { id: '126', cat: 'TV/SD', desc: 'Series-FR - DVD-R' },
      { id: '127', cat: 'TV/SD', desc: 'Series-FR - DVDRip' },
      { id: '128', cat: 'TV/HD', desc: 'Series-FR - HD 1080P' },
      { id: '129', cat: 'TV/HD', desc: 'Series-FR - HD 720P' },
      { id: '130', cat: 'TV/HD', desc: 'Series-FR - HDRiP' },
      { id: '133', cat: 'TV/HD', desc: 'Series-FR - HDTV' },
      { id: '131', cat: 'TV/HD', desc: 'Series-FR - HDTV 1080p' },
      { id: '132', cat: 'TV/HD', desc: 'Series-FR - HDTV 720p' },
      { id: '134', cat: 'TV/HD', desc: 'Series-FR - M-HD 1080p' },
      { id: '135', cat: 'TV/HD', desc: 'Series-FR - M-HD 720p' },
      { id: '136', cat: 'TV', desc: 'Series-FR - Pack Serie' },
      { id: '137', cat: 'TV', desc: 'Series-FR - Remux' },
      { id: '138', cat: 'TV/WEB-DL', desc: 'Series-FR - TVRip' },
      { id: '141', cat: 'TV/WEB-DL', desc: 'Series-FR - WEB-DL' },
      { id: '139', cat: 'TV/WEB-DL', desc: 'Series-FR - WEB-DL 1080p' },
      { id: '140', cat: 'TV/WEB-DL', desc: 'Series-FR - WEB-DL 720p' },
      { id: '142', cat: 'TV/WEB-DL', desc: 'Series-FR - WEBRip' },
      { id: '143', cat: 'TV/HD', desc: 'Series-FR - X265' },
      { id: '144', cat: 'TV/HD', desc: 'Series-VOSTFR - BDRip-BRRIP' },
      { id: '145', cat: 'TV/HD', desc: 'Series-VOSTFR - BluRay-R' },
      { id: '146', cat: 'TV/SD', desc: 'Series-VOSTFR - DVD-R' },
      { id: '147', cat: 'TV/SD', desc: 'Series-VOSTFR - DVDRip' },
      { id: '148', cat: 'TV/HD', desc: 'Series-VOSTFR - HD 1080P' },
      { id: '149', cat: 'TV/HD', desc: 'Series-VOSTFR - HD 720P' },
      { id: '150', cat: 'TV/HD', desc: 'Series-VOSTFR - HDRiP' },
      { id: '153', cat: 'TV/HD', desc: 'Series-VOSTFR - HDTV' },
      { id: '151', cat: 'TV/HD', desc: 'Series-VOSTFR - HDTV 1080p' },
      { id: '152', cat: 'TV/HD', desc: 'Series-VOSTFR - HDTV 720p' },
      { id: '154', cat: 'TV/HD', desc: 'Series-VOSTFR - M-HD 1080p' },
      { id: '155', cat: 'TV/HD', desc: 'Series-VOSTFR - M-HD 720p' },
      { id: '156', cat: 'TV', desc: 'Series-VOSTFR - Pack Serie' },
      { id: '157', cat: 'TV', desc: 'Series-VOSTFR - Remux' },
      { id: '158', cat: 'TV/WEB-DL', desc: 'Series-VOSTFR - TVRip' },
      { id: '161', cat: 'TV/WEB-DL', desc: 'Series-VOSTFR - WEB-DL' },
      {
        id: '159',
        cat: 'TV/WEB-DL',
        desc: 'Series-VOSTFR - WEB-DL 1080p',
      },
      {
        id: '160',
        cat: 'TV/WEB-DL',
        desc: 'Series-VOSTFR - WEB-DL 720p',
      },
      { id: '162', cat: 'TV/WEB-DL', desc: 'Series-VOSTFR - WEBRip' },
      { id: '163', cat: 'TV/HD', desc: 'Series-VOSTFR - X265' },
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
    { name: 'cookie', type: 'text', label: 'Cookie' },
    {
      name: 'info',
      type: 'info',
      label: 'How to get the Cookie',
      default:
        "<ol><li>Login to this tracker with your browser<li>Open the <b>DevTools</b> panel by pressing <b>F12</b><li>Select the <b>Network</b> tab<li>Click on the <b>Doc</b> button (Chrome Browser) or <b>HTML</b> button (FireFox)<li>Refresh the page by pressing <b>F5</b><li>Click on the first row entry<li>Select the <b>Headers</b> tab on the Right panel<li>Find <b>'cookie:'</b> in the <b>Request Headers</b> section<li><b>Select</b> and <b>Copy</b> the whole cookie string <i>(everything after 'cookie: ')</i> and <b>Paste</b> here.</ol>",
    },
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
    {
      name: 'torrentlanguage',
      type: 'select',
      label: 'Torrent Language',
      default: 0,
      options: {
        '0': 'Toutes Les Langues',
        '1': 'Allemand',
        '2': 'Anglais(UK)',
        '3': 'Anglais(US)',
        '4': 'Arabe',
        '5': 'Bengali',
        '6': 'Cantonais',
        '7': 'Coréen',
        '8': 'Danois',
        '9': 'Espagnol',
        '10': 'Flamand',
        '11': 'Français',
        '12': 'Hébreu',
        '13': 'Hindi',
        '14': 'Italien',
        '15': 'Japonais',
        '16': 'Mandarin',
        '17': 'Multi',
        '18': 'Perse',
        '19': 'Portuguais',
        '20': 'Québécois',
        '21': 'Russe',
        '22': 'Suédois',
        '23': 'Ukrainien',
        '24': 'Multi Truefrench',
      },
    },
  ],
  login: {
    method: 'cookie',
    inputs: { cookie: '{{ .Config.cookie }}' },
    test: {
      path: 'TTV3/Bienvenue',
      selector: 'a[href$="/TTV3/Deconnexion"]',
    },
  },
  download: {
    before: {
      path: '/TTV3/Torrents/{{ re_replace .DownloadUri.PathAndQuery "^(.+?)(\\d+)$" "$2" }}/Remercier',
      method: 'post',
      inputs: {
        torrent: '{{ re_replace .DownloadUri.PathAndQuery "^(.+?)(\\d+)$" "$2" }}',
      },
    },
    selector: 'a[href*="/Telechargement/"]',
    attribute: 'href',
  },
  search: {
    paths: [{ path: 'TTV3/Torrents/Recherche' }],
    inputs: {
      recherche: '{{ .Keywords }}',
      type: 'tout',
      endroit: 'nomtorrent',
      langue: '{{ .Config.torrentlanguage }}',
      tl: '{{ if .Config.freeleech }}oui{{ else }}peuimporte{{ end }}',
    },
    rows: { selector: 'table.sortable tbody tr' },
    fields: {
      category: {
        selector: 'a[href*="/SousCategories/"]',
        attribute: 'href',
        filters: [{ name: 'regexp', args: '(\\d+)$' }],
      },
      title_phase1: { selector: 'a[onmouseover]' },
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
      details: { selector: 'a[onmouseover]', attribute: 'href' },
      download: { selector: 'a[onmouseover]', attribute: 'href' },
      poster: {
        selector: 'a[onmouseover]',
        attribute: 'onmouseover',
        filters: [{ name: 'regexp', args: 'src= (.*?)><' }],
      },
      size: { selector: 'td:nth-last-child(5)' },
      grabs: { selector: 'td:nth-last-child(4)' },
      seeders: { selector: 'td:nth-last-child(3)' },
      leechers: { selector: 'td:nth-last-child(2)' },
      date: {
        selector: 'td:nth-child(2) a font[color="#F2F2F2"]',
        filters: [
          { name: 'replace', args: ['il y a ', ''] },
          { name: 'replace', args: [' Jours', ' days'] },
          { name: 'replace', args: [' Jour', ' day'] },
          { name: 'replace', args: [' heures', ' hours'] },
          { name: 'replace', args: [' heure', ' hour'] },
          { name: 'replace', args: [' Semaines', ' weeks'] },
          { name: 'replace', args: [' Semaine', ' week'] },
          { name: 'replace', args: [' mois', ' month'] },
          { name: 'replace', args: [' ans', ' years'] },
          { name: 'replace', args: [' an', ' year'] },
          { name: 'append', args: ' ago' },
        ],
      },
      downloadvolumefactor: {
        case: { 'img[src$="/images/Torrents/TLibre.png"]': 0, '*': 1 },
      },
      uploadvolumefactor: { text: 1 },
      minimumratio: { text: 1 },
      minimumseedtime: { text: 172800 },
    },
  },
  source: 'jackett',
};
