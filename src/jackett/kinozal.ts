import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'kinozal',
  name: 'Kinozal',
  description: 'Kinozal is a RUSSIAN Semi-Private Torrent Tracker for MOVIES / TV / MUSIC',
  language: 'ru-RU',
  type: 'semi-private',
  encoding: 'WINDOWS-1251',
  links: ['http://kinozal.tv/'],
  caps: {
    categorymappings: [
      { id: '1001', cat: 'TV', desc: 'All TV Shows' },
      { id: '45', cat: 'TV', desc: 'Russian TV Series' },
      { id: '46', cat: 'TV', desc: 'TV Series' },
      { id: '1002', cat: 'Movies', desc: 'All Movies' },
      { id: '8', cat: 'Movies', desc: 'Movies - Comedy' },
      { id: '6', cat: 'Movies', desc: 'Movies - Action / War' },
      { id: '15', cat: 'Movies', desc: 'Movies - Thriller / Detective' },
      { id: '17', cat: 'Movies', desc: 'Movies - Drama' },
      { id: '35', cat: 'Movies', desc: 'Movies - Melodrama' },
      { id: '39', cat: 'Movies', desc: 'Movies - Indian' },
      { id: '13', cat: 'Movies', desc: 'Movies - Science Fiction' },
      { id: '14', cat: 'Movies', desc: 'Movies - Fantasy' },
      { id: '24', cat: 'Movies', desc: 'Movies - Horror / Mystery' },
      { id: '11', cat: 'Movies', desc: 'Movies - Adventure' },
      { id: '10', cat: 'Movies', desc: 'Movies - Russian Movies' },
      { id: '9', cat: 'Movies', desc: 'Movies - Historical' },
      { id: '47', cat: 'Movies', desc: 'Movies - Asian' },
      { id: '18', cat: 'Movies', desc: 'Movies - Documentaries' },
      { id: '37', cat: 'Movies', desc: 'Movies - Sport' },
      { id: '12', cat: 'Movies', desc: 'Movies - Kids / Family' },
      { id: '7', cat: 'Movies', desc: 'Movies - Classic' },
      { id: '48', cat: 'Movies', desc: 'Movies - Concerts' },
      { id: '49', cat: 'Movies', desc: 'Movies - Shows / TV Shows' },
      { id: '50', cat: 'Movies', desc: 'Movies - TV Show Mir' },
      {
        id: '38',
        cat: 'Movies',
        desc: 'Movies - Theatre, Opera, Ballet',
      },
      { id: '16', cat: 'Movies', desc: 'Movies - Erotica' },
      { id: '1003', cat: 'TV/Anime', desc: 'All Cartoons/Anime' },
      { id: '21', cat: 'TV/Anime', desc: 'Cartoons' },
      { id: '22', cat: 'TV/Anime', desc: 'Cartoons - Russian' },
      { id: '20', cat: 'TV/Anime', desc: 'Cartoons - Anime' },
      { id: '1004', cat: 'Audio', desc: 'All Music' },
      { id: '3', cat: 'Audio', desc: 'Music' },
      { id: '4', cat: 'Audio', desc: 'Music - Russian' },
      { id: '5', cat: 'Audio', desc: 'Music - Collections' },
      { id: '42', cat: 'Audio', desc: 'Music - Classical' },
      { id: '1006', cat: 'TV/Other', desc: 'Shows, Concerts, Sports' },
      { id: '2', cat: 'Audio/Audiobook', desc: 'Other - AudioBooks' },
      { id: '1', cat: 'Audio/Video', desc: "Other - Music Video's" },
      { id: '23', cat: 'Console', desc: 'Other - Games' },
      { id: '32', cat: 'PC', desc: 'Other - Programs' },
      { id: '40', cat: 'Other', desc: 'Other - Design / Graphics' },
      { id: '41', cat: 'Books', desc: 'Other - Library' },
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
      name: 'striprussian',
      type: 'checkbox',
      label: 'Strip Russian Letters',
      default: true,
    },
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: '0',
      options: { '0': 'created', '1': 'seeders', '3': 'size' },
    },
    {
      name: 'type',
      type: 'select',
      label: 'Order requested from site',
      default: '0',
      options: { '0': 'desc', '1': 'asc' },
    },
  ],
  login: {
    path: 'takelogin.php',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [
      {
        selector: 'div.bx1:has(div.red)',
        message: { selector: 'div.bx1 div.red' },
      },
    ],
    test: { path: 'userdetails.php' },
  },
  search: {
    paths: [{ path: 'browse.php' }],
    keywordsfilters: [
      { name: 're_replace', args: ['(?i)\\bS0*(\\d+)\\b', '$1'] },
      {
        name: 're_replace',
        args: ['(?i)\\bS0*(\\d+)E0*(\\d+)\\b', '$1 $2'],
      },
    ],
    inputs: {
      c: 0,
      s: '{{ .Keywords }}',
      g: 0,
      v: 0,
      d: 0,
      w: '{{ if .Config.freeleech }}11{{ else }}0{{ end }}',
      t: '{{ .Config.sort }}',
      f: '{{ .Config.type }}',
    },
    rows: { selector: 'table > tbody > tr:has(td.bt)' },
    fields: {
      title: {
        selector: 'td.nam a[href^="/details.php?id="]',
        filters: [
          { name: 'replace', args: [' / ', ' '] },
          { name: 'replace', args: ['Кураж-Бамбей', 'kurazh'] },
          { name: 'replace', args: ['Кубик в Кубе', 'Kubik'] },
          { name: 'replace', args: ['Кравец', 'Kravec'] },
          {
            name: 're_replace',
            args: [
              '\\((\\d+)\\s+[Сс]езон:\\s+(?:(\\d+-*\\d*)\\s+[Сс]ери[ия]\\s+.*\\d+)\\)(.*)\\s([12][0-9]{3})\\s(.*)',
              '$3 - S$1E$2 - rus $5',
            ],
          },
          {
            name: 're_replace',
            args: [
              '(\\([А-Яа-яЁё\\W]+\\))|(^[А-Яа-яЁё\\W\\d]+\\/ )|([а-яА-ЯЁё \\-]+,+)|([а-яА-ЯЁё]+)',
              '{{ if .Config.striprussian }}{{ else }}$1$2$3$4{{ end }}',
            ],
          },
          { name: 're_replace', args: ['\\((\\d+p)\\)', '$1'] },
          { name: 'replace', args: ['-Rip', 'Rip'] },
          { name: 'replace', args: ['WEB-DL', 'WEBDL'] },
          { name: 'replace', args: ['WEBDLRip', 'WEBDL'] },
          { name: 'replace', args: ['HDTVRip', 'HDTV'] },
        ],
      },
      details: {
        selector: 'td.nam a[href^="/details.php?id="]',
        attribute: 'href',
      },
      category: {
        selector: 'td.bt img',
        attribute: 'onclick',
        filters: [{ name: 're_replace', args: ['[^\\d+]', ''] }],
      },
      download: {
        selector: 'td.nam a[href^="/details.php?id="]',
        attribute: 'href',
        filters: [{ name: 'replace', args: ['details', 'download'] }],
      },
      size: {
        selector: 'td:nth-child(4)',
        filters: [
          { name: 'replace', args: ['ТБ', 'TB'] },
          { name: 'replace', args: ['ГБ', 'GB'] },
          { name: 'replace', args: ['МБ', 'MB'] },
          { name: 'replace', args: ['КБ', 'KB'] },
        ],
      },
      seeders: { selector: 'td:nth-child(5)' },
      leechers: { selector: 'td:nth-child(6)' },
      date: {
        selector: 'td:nth-child(7):contains(".")',
        optional: true,
        filters: [
          { name: 'replace', args: [' в', ''] },
          { name: 'append', args: ' +00:00' },
          { name: 'dateparse', args: '02.01.2006 15:04 -07:00' },
        ],
      },
      downloadvolumefactor: { case: { 'a.r1': 0, 'a.r2': 0.5, '*': 1 } },
      uploadvolumefactor: { text: 1 },
      minimumratio: { text: 1 },
    },
  },
  source: 'jackett',
};
