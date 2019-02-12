import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'scenerush',
  name: 'SceneRush',
  description: 'SceneRush is a Portuguese general tracker.',
  language: 'pt-PT',
  type: 'private',
  encoding: 'UTF-8',
  links: ['http://www.scene-rush.pt/'],
  caps: {
    categorymappings: [
      { id: '1', cat: 'PC', desc: 'Apps' },
      { id: '5', cat: 'PC/Games', desc: 'PC Games' },
      { id: '6', cat: 'Movies/HD', desc: 'HD' },
      { id: '7', cat: 'XXX', desc: 'XXX' },
      { id: '8', cat: 'TV/Anime', desc: 'ANIME' },
      { id: '9', cat: 'Audio', desc: 'Audio' },
      { id: '11', cat: 'Console/Xbox360', desc: 'XBOX 360' },
      { id: '12', cat: 'Console/PSP', desc: 'PSP' },
      { id: '13', cat: 'TV/Documentary', desc: 'DOC' },
      { id: '17', cat: 'TV/HD', desc: 'TV-X264' },
      { id: '19', cat: 'XXX/DVD', desc: 'XXX DVD' },
      { id: '20', cat: 'Movies/DVD', desc: 'A.DVD' },
      { id: '21', cat: 'PC/Mac', desc: 'MAC' },
      { id: '32', cat: 'Movies/BluRay', desc: 'BluRay' },
      { id: '33', cat: 'Console/Wii', desc: 'WII' },
      { id: '34', cat: 'Console/PS3', desc: 'PS3' },
      { id: '35', cat: 'Movies/HD', desc: 'A.HD' },
      { id: '36', cat: 'PC/Phone-Android', desc: 'Android' },
      { id: '37', cat: 'Movies/DVD', desc: 'C.DVDR' },
      { id: '38', cat: 'Movies/Other', desc: 'CAM TS' },
      { id: '40', cat: 'Console/PS4', desc: 'PS4' },
      { id: '41', cat: 'Movies/SD', desc: 'BDRIP' },
      { id: '42', cat: 'Movies/WEBDL', desc: 'WEB DL' },
      { id: '43', cat: 'Books', desc: 'EBOOK' },
      { id: '44', cat: 'TV/Sport', desc: 'SPORTS' },
    ],
    modes: { search: ['q'], 'tv-search': ['q'] },
  },
  login: {
    path: 'takelogin.php',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [{ selector: 'td.embedded:has(h2:contains("failed")+table)' }],
    test: { path: 'browse.php' },
  },
  ratio: {
    path: 'browse.php',
    selector: "td[width='60'][style=['text-align:center;'] > span > font",
  },
  search: {
    paths: [{ path: 'browse.php' }],
    method: 'post',
    inputs: {
      $raw: '{{range .Categories}}c{{.}}=1&{{end}}',
      search: '{{ .Query.Keywords }}',
      incldead: '1',
      blah: '0',
    },
    rows: {
      selector:
        "table[cellpadding='5'][width='96%'] > tbody > tr:has(a[href*=\"details.php?id=\"])",
    },
    fields: {
      title: { selector: 'td:nth-child(2) > a > b' },
      category: {
        selector: 'a[href^="browse.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      details: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="download.php?id="]',
        attribute: 'href',
      },
      size: { selector: 'td:nth-child(8)' },
      grabs: { selector: 'td:nth-child(10)' },
      seeders: { selector: 'td:nth-child(11)' },
      leechers: { selector: 'td:nth-child(12)' },
      date: {
        selector: 'td:nth-child(7)',
        filters: [
          {
            name: 're_replace',
            args: ['(\\d{4}-\\d{2}-\\d{2})(\\d{2}:\\d{2}:\\d{2})', '$1 $2'],
          },
          { name: 'dateparse', args: '2018-12-30 22:30:31' },
        ],
      },
      downloadvolumefactor: { case: { 'i.fg-gold': '0', '*': '1' } },
      uploadvolumefactor: { case: { '*': '1' } },
    },
  },
  source: 'jackett',
};
