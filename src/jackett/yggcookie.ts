import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'yggcookie',
  name: 'YGGcookie',
  description: 'YGGTorrent is a FRENCH Semi-Private Torrent Tracker for 0DAY / GENERAL',
  language: 'fr-FR',
  type: 'semi-private',
  encoding: 'UTF-8',
  followredirect: true,
  links: ['https://www3.yggtorrent.pe/'],
  legacylinks: [
    'https://yggtorrent.com/',
    'https://ww1.yggtorrent.com/',
    'https://yggtorrent.is/',
    'https://www.yggtorrent.is/',
    'https://ww1.yggtorrent.is/',
    'https://ww2.yggtorrent.is/',
    'https://ww3.yggtorrent.is/',
    'https://ww4.yggtorrent.is/',
    'https://yggtorrent.to/',
    'https://www3.yggtorrent.to/',
    'https://www6.yggtorrent.to/',
    'https://www8.yggtorrent.to/',
    'https://www9.yggtorrent.to/',
    'https://ygg.to/',
    'https://www.ygg.to/',
    'https://ww3.yggtorrent.gg/',
    'http://www2.yggtorrent.gg/',
    'https://www.yggtorrent.gg/',
    'https://www.yggtorrent.ch/',
    'https://www.yggtorrent.pe/',
  ],
  caps: {
    categorymappings: [
      { id: '2145', cat: 'TV', desc: 'Film/Vidéo' },
      { id: '2178', cat: 'Movies', desc: 'Film/Vidéo : Animation' },
      {
        id: '2179',
        cat: 'TV/Anime',
        desc: 'Film/Vidéo : Animation Série',
      },
      { id: '2180', cat: 'TV', desc: 'Film/Vidéo : Concert' },
      { id: '2181', cat: 'TV', desc: 'Film/Vidéo : Documentaire' },
      { id: '2182', cat: 'TV', desc: 'Film/Vidéo : Emission TV' },
      { id: '2183', cat: 'Movies', desc: 'Film/Vidéo : Film' },
      { id: '2184', cat: 'TV', desc: 'Film/Vidéo : Série TV' },
      { id: '2185', cat: 'TV', desc: 'Film/Vidéo : Spectacle' },
      { id: '2186', cat: 'TV', desc: 'Film/Vidéo : Sport' },
      { id: '2187', cat: 'TV', desc: 'Film/Vidéo : Vidéo-clips' },
      { id: '2139', cat: 'Audio', desc: 'Audio' },
      { id: '2147', cat: 'Audio', desc: 'Audio : Karaoké' },
      { id: '2148', cat: 'Audio', desc: 'Audio : Musique' },
      { id: '2150', cat: 'Audio', desc: 'Audio : Podcast Radio' },
      { id: '2149', cat: 'Audio', desc: 'Audio : Samples' },
      { id: '2144', cat: 'PC', desc: 'Application' },
      { id: '2177', cat: 'PC', desc: 'Application : Autre' },
      { id: '2176', cat: 'PC', desc: 'Application : Formation' },
      { id: '2171', cat: 'PC', desc: 'Application : Linux' },
      { id: '2172', cat: 'PC', desc: 'Application : MacOS' },
      { id: '2174', cat: 'PC', desc: 'Application : Smartphone' },
      { id: '2175', cat: 'PC', desc: 'Application : Tablette' },
      { id: '2173', cat: 'PC', desc: 'Application : Windows' },
      { id: '2142', cat: 'PC/Games', desc: 'Jeu vidéo' },
      { id: '2167', cat: 'PC/Games', desc: 'Jeu vidéo : Autre' },
      { id: '2159', cat: 'PC/Games', desc: 'Jeu vidéo : Linux' },
      { id: '2160', cat: 'PC/Games', desc: 'Jeu vidéo : MacOS' },
      { id: '2162', cat: 'PC/Games', desc: 'Jeu vidéo : Microsoft' },
      { id: '2163', cat: 'PC/Games', desc: 'Jeu vidéo : Nintendo' },
      { id: '2165', cat: 'PC/Games', desc: 'Jeu vidéo : Smartphone' },
      { id: '2164', cat: 'PC/Games', desc: 'Jeu vidéo : Sony' },
      { id: '2166', cat: 'PC/Games', desc: 'Jeu vidéo : Tablette' },
      { id: '2161', cat: 'PC/Games', desc: 'Jeu vidéo : Windows' },
      { id: '2140', cat: 'Books', desc: 'eBook' },
      { id: '2151', cat: 'Books', desc: 'eBook : Audio' },
      { id: '2152', cat: 'Books', desc: 'eBook : Bds' },
      { id: '2153', cat: 'Books', desc: 'eBook : Comics' },
      { id: '2154', cat: 'Books', desc: 'eBook : Livres' },
      { id: '2155', cat: 'Books', desc: 'eBook : Mangas' },
      { id: '2156', cat: 'Books', desc: 'eBook : Presse' },
      { id: '2141', cat: 'Other', desc: 'Emulation' },
      { id: '2157', cat: 'Other', desc: 'Emulation : Emulateurs' },
      { id: '2158', cat: 'Other', desc: 'Emulation : Roms' },
      { id: '2143', cat: 'Other', desc: 'GPS' },
      { id: '2168', cat: 'Other', desc: 'GPS : Applications' },
      { id: '2169', cat: 'Other', desc: 'GPS : Cartes' },
      { id: '2170', cat: 'Other', desc: 'GPS : Divers' },
      { id: '2188', cat: 'XXX', desc: 'XXX' },
      { id: '2189', cat: 'XXX', desc: 'XXX : Films' },
      { id: '2190', cat: 'XXX', desc: 'XXX : Hentai' },
      { id: '2191', cat: 'XXX', desc: 'XXX : Images' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
  },
  settings: [
    { name: 'cookie', type: 'text', label: 'Cookie' },
    {
      name: 'info',
      type: 'info',
      label: 'How to get the Cookie',
      default:
        "<ol><li>Login to this tracker in your browser<li>Open the <b>DevTools</b> panel by pressing <b>F12</b><li>Select the <b>Network</b> tab<li>Click on the <b>Doc</b> button<li>Refresh the page by pressing <b>F5</b><li>Select the <b>Headers</b> tab<li>Find 'cookie:' in the <b>Request Headers</b> section<li>Copy & paste the whole cookie string to here</ol>",
    },
    {
      name: 'searchanddlurl',
      label: 'Search and download URL',
      type: 'text',
      default: 'www2.yggtorrent.pe',
    },
    {
      name: 'category',
      type: 'select',
      label: 'Catégorie',
      default: 'all',
      options: {
        '2139': 'Audio',
        '2140': 'eBook',
        '2141': 'Emulation',
        '2142': 'Jeu vidéo',
        '2143': 'GPS',
        '2144': 'Application',
        '2145': 'Film/Vidéo',
        '2188': 'XXX',
        all: 'Tous',
      },
    },
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
    {
      name: 'enhancedAnime',
      type: 'checkbox',
      label:
        'Enhance sonarr compatibility with anime by renaming episode (xxx to exxx). Works only if episode is at the end of the query. Can disturb movies search. (back to the future 3 -> back to the future e3)',
      default: false,
    },
    {
      name: 'betasearchengine',
      type: 'checkbox',
      label: 'Use Beta Search engine URL (Less restrictive) / SonarrV3 Full Series Search NEW',
      default: false,
    },
  ],
  login: {
    method: 'cookie',
    inputs: { cookie: '{{ .Config.cookie }}' },
    test: {
      path: '/',
      selector: 'div#top_panel:contains("Déconnexion")',
    },
  },
  search: {
    followredirect: true,
    keywordsfilters: [
      {
        name: 're_replace',
        args: ['(.*)[sS]([1-9])\\s(\\d{2,3})$', '$1 S0$2E$3'],
      },
      {
        name: 're_replace',
        args: ['(.*)[sS]([1-9])\\s(\\d{1})$', '$1 S0$2E0$3'],
      },
      {
        name: 're_replace',
        args: ['(.*)[sS]([1-9][0-9])\\s(\\d{2,3})$', '$1 S0$2E$3'],
      },
      {
        name: 're_replace',
        args: ['(.*)[sS]([1-9][0-9])\\s(\\d{1})$', '$1 S0$2E0$3'],
      },
      { name: 're_replace', args: ['(.*)[sS]([1-9])$', '$1 S0$2'] },
      { name: 're_replace', args: ['(.*)[sS]([1-9][0-9])$', '$1 S$2'] },
      { name: 'replace', args: ['"', ''] },
      { name: 'trim' },
    ],
    paths: [
      {
        path:
          'https://{{ .Config.searchanddlurl }}/{{if .Config.betasearchengine}}new_search{{else}}engine{{end}}/search?category={{ .Config.category }}&name={{if .Config.betasearchengine}}{{ .Keywords }}{{else}}{{ re_replace .Keywords "\\b[^\\s]+\\b"  ""$&""}}{{end}}&description=&file=&uploader=&sub_category=&do=search&order=desc&sort=publish_date',
      },
      {
        path:
          'https://{{ .Config.searchanddlurl }}/{{if .Config.betasearchengine}}new_search{{else}}engine{{end}}/search?category={{ .Config.category }}&name={{if .Config.betasearchengine}}{{ .Keywords }}{{else}}{{ re_replace .Keywords "\\b[^\\s]+\\b"  ""$&""}}{{end}}&description=&file=&uploader=&sub_category=&do=search&order=desc&sort=publish_date&page=50',
      },
    ],
    rows: { selector: 'table.table > tbody > tr' },
    fields: {
      _id: {
        selector: ':nth-child(2) > a',
        attribute: 'href',
        filters: [{ name: 'regexp', args: '/(\\d+)-' }],
      },
      title_normal: { selector: ':nth-child(2) > a' },
      title_filtered: {
        selector: ':nth-child(2) > a',
        filters: [
          {
            name: 're_replace',
            args: [
              '(?i)^(?:(.+?)((?:[\\.\\-\\s_\\[]+(?:imax|(?:dvd|bd|tv)(?:rip|scr)|bluray(?:\\-?rip)?|720\\s*p?|1080\\s*p?|vof?|vost(?:fr)?|multi|vf(?:f|q)?[1-3]?|(?:true)?french|eng?)[\\.\\-\\s_\\]]*)*)([\\(\\[]?(?:20|1[7-9])\\d{2}[\\)\\]]?)(.*)$|(.*))$',
              '$1 $3 $2 $4 $5',
            ],
          },
          {
            name: 're_replace',
            args: ['([Ss]aison|[Ss]aison )(\\d{1,4})', 'S$2'],
          },
          {
            name: 're_replace',
            args: ['S(\\d+)E(\\d+)(\\D+)', 'S$1E$2 $3'],
          },
          { name: 're_replace', args: ['([Mm][Uu][Ll][Tt][Ii])', 'MULTi'] },
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
          {
            name: 're_replace',
            args: ['[\\.\\s\\[\\-][Ss][Uu][Bb][Ff][Rr][Ee][Nn][Cc][Hh][\\.\\s\\]\\-]', '.ENGLISH.'],
          },
        ],
      },
      title_phase3: {
        text:
          '{{if .Config.vostfr }}{{ .Result.title_vostfr }}{{else}}{{ .Result.title_phase2 }}{{end}}',
      },
      title_anime: {
        text: '{{ .Result.title_phase3 }}',
        filters: [
          {
            name: 're_replace',
            args: ['(.*)(\\.| |\\-)(\\d{2,3})(\\.| |\\-)(.*)', '$1 E$3 $5'],
          },
        ],
      },
      title: {
        text:
          '{{if .Config.enhancedAnime }}{{ .Result.title_anime }}{{else}}{{ .Result.title_phase3 }}{{end}}',
      },
      details: { selector: ':nth-child(2) > a', attribute: 'href' },
      category: { selector: ':nth-child(1) > div.hidden' },
      comments: {
        optional: true,
        selector: 'td:nth-child(1) > a[href$="#comments"]',
        attribute: 'href',
      },
      download: {
        text: 'https://{{ .Config.searchanddlurl }}/engine/download_torrent?id={{ .Result._id }}',
      },
      date: {
        selector: 'td:nth-child(5)',
        filters: [
          { name: 'replace', args: ['il y a ', ''] },
          { name: 'replace', args: [' jours', ' days'] },
          { name: 'replace', args: [' jour', ' day'] },
          { name: 'replace', args: [' heures', ' hours'] },
          { name: 'replace', args: [' heure', ' hour'] },
          { name: 'replace', args: [' semaines', ' weeks'] },
          { name: 'replace', args: [' semaine', ' week'] },
          { name: 'replace', args: [' mois', ' month'] },
          { name: 'replace', args: [' ans', ' years'] },
          { name: 'replace', args: [' an', ' year'] },
          { name: 'append', args: ' ago' },
        ],
      },
      size: {
        selector: 'td:nth-child(6)',
        filters: [{ name: 'replace', args: ['o', 'B'] }],
      },
      grabs: { selector: 'td:nth-child(7)' },
      seeders: { selector: 'td:nth-child(8)', optional: true },
      leechers: { selector: 'td:nth-child(9)', optional: true },
      downloadvolumefactor: { text: '1' },
      uploadvolumefactor: { text: '1' },
    },
  },
  source: 'jackett',
};