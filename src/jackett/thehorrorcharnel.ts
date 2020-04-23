import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'thehorrorcharnel',
  name: 'The Horror Charnel',
  description:
    'The Horror Charnel (THC) is a Private Torrent Tracker for HORROR / CULT / SLEAZE / SCI FI MOVIES',
  language: 'en-US',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://horrorcharnel.org/'],
  caps: {
    categorymappings: [
      { id: '14', cat: 'PC', desc: '-- Appz --' },
      { id: '15', cat: 'Books/Comics', desc: '-- Comics --' },
      { id: '17', cat: 'Books/Ebook', desc: '-- E-books --' },
      { id: '16', cat: 'PC/Games', desc: '-- Games --' },
      { id: '19', cat: 'Audio', desc: '-- Music --' },
      { id: '82', cat: 'Other', desc: '-- Other --' },
      { id: '18', cat: 'Other', desc: '-- OTR --' },
      { id: '20', cat: 'Movies', desc: 'Action' },
      { id: '21', cat: 'Movies', desc: 'Adult' },
      { id: '74', cat: 'Movies', desc: 'Aliens' },
      { id: '22', cat: 'Movies', desc: 'Anthology' },
      { id: '23', cat: 'Movies', desc: 'Asian' },
      { id: '94', cat: 'Movies/BluRay', desc: 'BD full' },
      { id: '79', cat: 'Movies', desc: 'Bizarre' },
      { id: '90', cat: 'Movies', desc: 'Blaxploitation' },
      { id: '24', cat: 'Movies', desc: 'Cannibal' },
      { id: '25', cat: 'Movies', desc: 'Cheese' },
      { id: '51', cat: 'Movies', desc: 'Comedy' },
      { id: '95', cat: 'Movies', desc: 'Contests' },
      { id: '26', cat: 'Movies', desc: 'Creatures/Monsters' },
      { id: '75', cat: 'Movies', desc: 'Crime' },
      { id: '27', cat: 'Movies', desc: 'Cult' },
      { id: '50', cat: 'Movies', desc: 'Demons' },
      { id: '84', cat: 'Movies', desc: 'Disaster' },
      { id: '28', cat: 'TV/Documentary', desc: 'Documentary' },
      { id: '81', cat: 'Movies', desc: 'Drama' },
      { id: '68', cat: 'Movies', desc: 'Drugs' },
      { id: '85', cat: 'Movies', desc: 'Ecodisaster' },
      { id: '92', cat: 'Movies', desc: 'Euro Horror' },
      { id: '29', cat: 'Movies', desc: 'Exploitation' },
      { id: '93', cat: 'Movies', desc: 'Fan Edit' },
      { id: '30', cat: 'Movies', desc: 'Fantasy' },
      { id: '31', cat: 'Movies', desc: 'Foreign Language' },
      { id: '32', cat: 'Movies', desc: 'Found Footage' },
      { id: '33', cat: 'Movies', desc: 'Free' },
      { id: '59', cat: 'Movies', desc: 'Ghosts' },
      { id: '34', cat: 'Movies', desc: 'Giallo' },
      { id: '70', cat: 'Movies', desc: 'Gore' },
      { id: '87', cat: 'Movies', desc: 'Grindhouse' },
      { id: '53', cat: 'Movies', desc: 'Hammer' },
      { id: '78', cat: 'Movies', desc: 'Haunting' },
      { id: '67', cat: 'Movies', desc: 'Hicksploitation' },
      { id: '35', cat: 'Movies', desc: 'Indie' },
      { id: '73', cat: 'Movies', desc: 'Killer Dolls' },
      { id: '58', cat: 'Movies', desc: 'Mad Doctors' },
      { id: '36', cat: 'TV', desc: 'Made For TV' },
      { id: '37', cat: 'Movies', desc: 'Martial arts' },
      { id: '91', cat: 'Movies', desc: 'Musicals' },
      { id: '69', cat: 'Movies', desc: 'Mutants' },
      { id: '38', cat: 'Movies', desc: 'Mystery' },
      { id: '86', cat: 'Movies', desc: 'Occult' },
      { id: '76', cat: 'Movies', desc: 'Off-Beat Comedy' },
      { id: '72', cat: 'Movies', desc: 'Possession' },
      { id: '39', cat: 'Movies', desc: 'Post Apocalypse' },
      { id: '61', cat: 'Movies', desc: 'Psychos' },
      { id: '40', cat: 'Movies', desc: 'Psychosis' },
      { id: '65', cat: 'Movies', desc: 'Religious' },
      { id: '62', cat: 'Movies', desc: 'Revenge' },
      { id: '89', cat: 'Movies', desc: 'RiffTrax' },
      { id: '64', cat: 'Movies', desc: 'Satanic' },
      { id: '41', cat: 'Movies', desc: 'Sci-Fi' },
      { id: '55', cat: 'Movies', desc: 'Serial Killers' },
      { id: '42', cat: 'Movies', desc: 'Short' },
      { id: '43', cat: 'Movies', desc: 'Slasher' },
      { id: '44', cat: 'Movies', desc: 'Sleaze' },
      { id: '80', cat: 'Movies', desc: 'Spaghetti Westerns' },
      { id: '45', cat: 'Movies', desc: 'Supernatural' },
      { id: '60', cat: 'Movies', desc: 'Surreal' },
      { id: '54', cat: 'Movies', desc: 'Survival' },
      { id: '88', cat: 'Movies', desc: 'Suspense' },
      { id: '49', cat: 'Movies', desc: 'Theme of the month' },
      { id: '46', cat: 'Movies', desc: 'Thriller' },
      { id: '63', cat: 'Movies', desc: 'Toonz' },
      { id: '47', cat: 'TV', desc: 'TV Series' },
      { id: '52', cat: 'Movies', desc: 'Vampire' },
      { id: '77', cat: 'Movies', desc: 'Voodoo' },
      { id: '57', cat: 'Movies', desc: 'Werewolf' },
      { id: '66', cat: 'Movies', desc: 'Witchcraft' },
      { id: '48', cat: 'Movies', desc: 'Zombie' },
    ],
    modes: {
      search: ['q', 'imdbid'],
      'tv-search': ['q', 'season', 'ep', 'imdbid'],
      'movie-search': ['q', 'imdbid'],
      'music-search': ['q'],
    },
  },
  settings: [
    { name: 'username', type: 'text', label: 'Username' },
    { name: 'password', type: 'password', label: 'Password' },
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: '4',
      options: { '1': 'title', '4': 'created', '5': 'size', '7': 'seeders' },
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
    path: 'loginto.php',
    method: 'form',
    form: 'form',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      use_ssl: 1,
      perm_ssl: 1,
      returnto: '/',
    },
    error: [
      {
        selector:
          'div#base_content > table.mainouter > tbody > tr > td.outer > table.main > tbody > tr > td:has(h2)',
      },
    ],
    test: { path: 'usercp.php' },
  },
  ratio: {
    path: 'my.php',
    selector: 'td.navi_top:contains("Deine Ratio:")',
    filters: [
      { name: 'replace', args: ['Deine Ratio: ', ''] },
      { name: 'replace', args: ['.', ''] },
      { name: 'replace', args: [',', '.'] },
    ],
  },
  search: {
    paths: [{ path: 'browse.php' }],
    inputs: {
      $raw: '{{ range .Categories }}c{{.}}=1&{{end}}',
      search: '{{ if .Query.IMDBID }}{{ .Query.IMDBIDShort }}{{else}}{{ .Keywords }}{{end}}',
      incldead: 1,
      sort: '{{ .Config.sort }}',
      type: '{{ .Config.type }}',
    },
    rows: {
      selector:
        'p + table > tbody > tr:has(a[href^="download.php"]), p + table > tbody > tr:has(a[href^="download.php"]) + tr[id^="kdescr"]',
      after: 1,
    },
    fields: {
      category: {
        selector: 'a[href^="browse.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      title: {
        selector: 'a[onmouseover][href^="details.php?id="]',
        attribute: 'onmouseover',
        filters: [{ name: 'regexp', args: '<b>(.*?)</b>' }],
      },
      details: {
        selector: 'a[onmouseover][href^="details.php?id="]',
        attribute: 'href',
      },
      banner: {
        selector: 'a[onmouseover][href^="details.php?id="]',
        optional: true,
        attribute: 'onmouseover',
        filters: [{ name: 'regexp', args: 'src="(.*?)"' }],
      },
      comments: {
        selector: 'td:nth-child(7) a',
        attribute: 'href',
        optional: true,
      },
      download: {
        selector: 'a[href^="download.php"]',
        attribute: 'href',
      },
      files: { selector: 'td:nth-child(6)' },
      date: { selector: 'td:nth-child(8)' },
      size: { selector: 'td:nth-child(9)' },
      grabs: {
        selector: 'td:nth-child(10)',
        filters: [{ name: 'regexp', args: '(\\d+)' }],
      },
      seeders: { selector: 'td:nth-child(11)' },
      leechers: { selector: 'td:nth-child(12)' },
      description: { selector: 'td[colspan="13"]', remove: 'a' },
      downloadvolumefactor: {
        case: { 'img[src="free.gif"]': 0, '*': 1 },
      },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
