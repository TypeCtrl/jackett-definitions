import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'theshinning',
  name: 'The Shinning',
  description: 'A German gerneral tracker',
  language: 'de-DE',
  encoding: 'WINDOWS-1252',
  links: ['https://theshinning.org'],
  caps: {
    categorymappings: [
      { id: '1', cat: 'TV/Sport' },
      { id: '2', cat: 'TV/Sport' },
      { id: '3', cat: 'TV/Sport' },
      { id: '4', cat: 'TV/Sport' },
      { id: '5', cat: 'TV/Sport' },
      { id: '6', cat: 'TV/Sport' },
      { id: '7', cat: 'TV/Sport' },
      { id: '8', cat: 'TV/SD' },
      { id: '9', cat: 'TV/HD' },
      { id: '10', cat: 'TV' },
      { id: '11', cat: 'TV/SD' },
      { id: '12', cat: 'TV' },
      { id: '13', cat: 'Audio' },
      { id: '14', cat: 'Movies' },
      { id: '15', cat: 'Other' },
      { id: '16', cat: 'Movies' },
      { id: '17', cat: 'Movies' },
      { id: '18', cat: 'Movies' },
      { id: '19', cat: 'Movies/HD' },
      { id: '20', cat: 'Movies/HD' },
      { id: '21', cat: 'Movies/3D' },
      { id: '22', cat: 'Movies/SD' },
      { id: '23', cat: 'Other' },
      { id: '24', cat: 'Movies/SD' },
      { id: '25', cat: 'Movies/DVD' },
      { id: '26', cat: 'XXX' },
      { id: '27', cat: 'XXX' },
      { id: '28', cat: 'Movies/SD' },
      { id: '29', cat: 'Movies/BluRay' },
      { id: '30', cat: 'Audio/MP3' },
      { id: '31', cat: 'Audio/Lossless' },
      { id: '32', cat: 'TV' },
      { id: '90', cat: 'TV/Documentary' },
      { id: '91', cat: 'Books' },
      { id: '92', cat: 'PC/Games' },
      { id: '93', cat: 'Console/Xbox' },
      { id: '94', cat: 'Console/PS4' },
      { id: '95', cat: 'Console/Wii' },
      { id: '96', cat: 'Console/NDS' },
      { id: '97', cat: 'Audio/Audiobook' },
      { id: '98', cat: 'PC' },
      { id: '99', cat: 'Movies/SD' },
      { id: '100', cat: 'Movies/HD' },
      { id: '101', cat: 'Movies/HD' },
      { id: '102', cat: 'Movies/HD' },
      { id: '104', cat: 'XXX/Imageset' },
      { id: '105', cat: 'TV' },
      { id: '106', cat: 'Audio' },
      { id: '107', cat: 'Movies/HD' },
    ],
  },
  login: {
    path: '/login.php',
    method: 'form',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [{ selector: 'div.stderr_info_wrap' }],
    test: { path: '/browse.php', selector: 'img[title="Ratio"] + i' },
  },
  ratio: { path: '/browse.php', selector: 'img[title="Ratio"] + i' },
  search: {
    inputs: {
      $raw: '{{range .Categories}}c{{.}}=1&{{end}}',
      search: '{{ .Query.Keywords }}',
      showsearch: '1',
      incldead: '1',
      orderby: 'added',
      sort: 'desc',
    },
    rows: {
      selector:
        'table.main > tbody > tr:contains("Alle Torrents") + tr > td > table.tableinborder > tbody > tr',
    },
    fields: {
      download: {
        selector: 'a[href^="download-ssl.php?torrent="]',
        attribute: 'href',
      },
      title: { selector: 'div.title_wrap', attribute: 'title' },
      category: {
        selector: 'a[href^="browse.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      details: { selector: 'div.title_wrap > a', attribute: 'href' },
      size: {
        selector: 'div.bro_right_ad > b',
        filters: [
          { name: 'replace', args: ['.', ''] },
          { name: 'replace', args: [',', '.'] },
        ],
      },
      grabs: { selector: 'div.bro_right_ae > b' },
      seeders: { selector: 'div.bro_box1_aa > b' },
      leechers: { selector: 'div.bro_box_aaa > b' },
      date: {
        selector: 'div.bro_box_date > span',
        filters: [
          { name: 'replace', args: [' ', ' '] },
          { name: 'dateparse', args: '02.01.2006 15:04:05' },
        ],
      },
      downloadvolumefactor: {
        case: { 'span[title="OnlyUp"]': '0', '*': '1' },
      },
      uploadvolumefactor: { case: { '*': '1' } },
    },
    paths: [{ path: '/browse.php' }],
  },
  source: 'cardigann',
};
