import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'fanoin',
  name: 'FANO.IN',
  description: 'Fano.in is a LATVIAN Private Torrent Tracker for 0DAY / GENERAL',
  language: 'lv-LV',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://www.fano.in/'],
  caps: {
    categorymappings: [
      { id: '20', cat: 'Movies/SD', desc: 'Movies/SD' },
      { id: '6', cat: 'TV/SD', desc: 'TV/SD' },
      { id: '7', cat: 'PC/Games', desc: 'Games/PC ISO' },
      { id: '5', cat: 'Audio', desc: 'Music' },
      { id: '47', cat: 'Movies', desc: 'Packs/Movies' },
      { id: '44', cat: 'Audio/Audiobook', desc: 'A-Books' },
      { id: '27', cat: 'TV/Anime', desc: 'Anime' },
      { id: '17', cat: 'Movies/Foreign', desc: 'Movies/Rus' },
      { id: '33', cat: 'TV/Foreign', desc: 'TV/Rus' },
      { id: '12', cat: 'PC/Games', desc: 'Games/PC Rips' },
      { id: '31', cat: 'Audio/Lossless', desc: 'Music/HQ' },
      { id: '49', cat: 'TV', desc: 'Packs/TV' },
      { id: '41', cat: 'Books', desc: 'E-Books' },
      { id: '29', cat: 'Books', desc: 'Cartoons' },
      { id: '24', cat: 'Movies/Foreign', desc: 'Movies/Lat' },
      { id: '25', cat: 'TV/Foreign', desc: 'TV/Lat' },
      { id: '34', cat: 'Console/Xbox', desc: 'Games/Xbox' },
      { id: '19', cat: 'Audio/Video', desc: 'Music Videos' },
      { id: '46', cat: 'Console', desc: 'Packs/Games' },
      { id: '42', cat: 'Other', desc: 'Study' },
      { id: '52', cat: 'Movies/3D', desc: '3D' },
      { id: '37', cat: 'Movies/HD', desc: 'Movies/HD' },
      { id: '35', cat: 'TV/HD', desc: 'TV/HD' },
      { id: '43', cat: 'Console/PS4', desc: 'Games/PS' },
      { id: '38', cat: 'PC/Phone-Other', desc: 'Mobile' },
      { id: '48', cat: 'Audio', desc: 'Packs/Music' },
      { id: '36', cat: 'Other', desc: 'X-mas' },
      { id: '53', cat: 'Movies/SD', desc: 'Movies/CAM' },
      { id: '4', cat: 'Movies/DVD', desc: 'Movies/DVD-R' },
      { id: '32', cat: 'TV', desc: 'TV/Facts' },
      { id: '40', cat: 'Console/Wii', desc: 'Games/Wii' },
      { id: '22', cat: 'PC/0day', desc: 'Appz/misc' },
      { id: '50', cat: 'XXX/Packs', desc: 'Packs/XXX' },
      { id: '9', cat: 'XXX', desc: 'XXX' },
      { id: '45', cat: 'XXX', desc: 'XXX/HD' },
      { id: '54', cat: 'Movies', desc: 'Movies/Retro' },
      { id: '23', cat: 'TV/Sport', desc: 'TV/Sport' },
      { id: '51', cat: 'Console', desc: 'Games/Misc' },
      { id: '1', cat: 'PC/0day', desc: 'Appz/PC ISO' },
    ],
    modes: { search: ['q'], 'tv-search': ['q', 'season', 'ep'] },
  },
  login: {
    path: 'takelogin.php',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [{ selector: 'td.embedded:has(h2:contains("failed"))' }],
    test: { path: 'browse_old.php' },
  },
  ratio: {
    path: 'browse_old.php',
    selector: 'img[title="Reitings:"]+font',
  },
  search: {
    paths: [{ path: 'browse_old.php' }],
    inputs: {
      $raw: '{{range .Categories}}c{{.}}=1&{{end}}',
      search: '{{ .Query.Keywords }}',
      incldead: 1,
    },
    rows: {
      selector: 'tr.browse_actions',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      title: { selector: 'a[href^="details.php?id="]' },
      details: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
      },
      category: {
        selector: 'a[href^="browse_old.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      download: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
        filters: [{ name: 'replace', args: ['details.php', 'download.php'] }],
      },
      imdb: {
        selector: 'a[href*="www.imdb.com/title/tt"]',
        attribute: 'href',
      },
      size: { selector: 'td:nth-child(5)' },
      seeders: { selector: 'td:nth-child(7)' },
      leechers: { selector: 'td:nth-child(8)' },
      grabs: {
        selector: 'td:nth-child(6)',
        filters: [{ name: 'regexp', args: '(\\d+)' }],
      },
      date: {
        selector: 'td:nth-child(2) > small:nth-last-child(2)',
        filters: [
          { name: 'replace', args: ['Šodien', 'Today'] },
          { name: 'replace', args: ['Vakar', 'Yesterday'] },
        ],
      },
      downloadvolumefactor: {
        case: { 'img[alt="Free"]': '0', '*': '1' },
      },
      uploadvolumefactor: { case: { 'img[alt="x2"]': '2', '*': '1' } },
      description: {
        selector: 'td:nth-child(2) > small:nth-last-child(1)',
        remove: 'a[href^="details.php?id="]',
      },
    },
  },
  source: 'jackett',
};
