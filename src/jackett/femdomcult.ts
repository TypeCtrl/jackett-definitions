import { TopLevel } from '../definition-interface';
export const definition: TopLevel = {
  site: 'femdomcult',
  name: 'Femdomcult',
  description: 'A porn tracker',
  language: 'en-US',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://femdomcult.org/'],
  caps: {
    categorymappings: [
      { id: 58, cat: 'XXX', desc: 'Amateur/Mainstream' },
      { id: 60, cat: 'XXX', desc: 'Anime Comics' },
      { id: 73, cat: 'XXX', desc: 'Asian Femdom' },
      { id: 61, cat: 'XXX', desc: 'Audio' },
      { id: 59, cat: 'XXX', desc: 'Femdom' },
      { id: 62, cat: 'XXX', desc: 'Femdom Vip' },
      { id: 63, cat: 'XXX', desc: 'Fetish' },
      { id: 68, cat: 'XXX', desc: 'Fetish Vip' },
      { id: 64, cat: 'XXX', desc: 'Gts-Vore-Crush' },
      { id: 72, cat: 'XXX', desc: 'Images' },
      { id: 69, cat: 'XXX', desc: 'Lezdom' },
      { id: 70, cat: 'XXX', desc: 'Pov' },
      { id: 65, cat: 'XXX', desc: 'Scat' },
      { id: 71, cat: 'XXX', desc: 'Strapon' },
      { id: 66, cat: 'XXX', desc: 'Transdom' },
    ],
    modes: { search: ['q'], 'tv-search': ['q'], 'movie-search': ['q'] },
  },
  login: {
    path: 'login.php',
    method: 'form',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      cinfo: '2550|1350|24|-60',
      keeploggedin: 1,
    },
    error: [{ selector: 'form#loginform > span.warning' }],
    test: { path: 'torrents.php', selector: '#nav_userinfo' },
  },
  search: {
    paths: [{ path: 'torrents.php' }],
    inputs: {
      $raw: '{{range .Categories}}filter_cat[{{.}}]=1&{{end}}',
      title: '{{ .Query.Keywords }}',
      order_by: 'time',
      order_way: 'desc',
      action: 'basic',
      searchsubmit: 1,
    },
    rows: {
      selector: 'table#torrent_table > tbody > tr[class^="torrent row"]',
    },
    fields: {
      download: {
        selector: 'a[href^="torrents.php?action=download&id="]',
        attribute: 'href',
      },
      description: { selector: 'div.tags' },
      title: { selector: 'a[href^="torrents.php?id="]' },
      category: {
        selector: 'a[href*="filter_cat"]',
        attribute: 'href',
        filters: [{ name: 'regexp', args: '\\[(\\d+?)\\]' }],
      },
      details: {
        selector: 'a[href^="torrents.php?id="]',
        attribute: 'href',
      },
      banner: {
        selector: 'td:nth-child(2) > script',
        filters: [
          { name: 'regexp', args: 'src=(.*?)>' },
          { name: 're_replace', args: ['\\\\(.)', '$1'] },
          {
            name: 'replace',
            args: ['/static/common/noartwork/noimage.png', ''],
          },
        ],
      },
      files: { selector: 'td:nth-child(3)' },
      date: {
        selector: 'td:nth-child(5) > span',
        attribute: 'title',
        filters: [
          { name: 'append', args: ' +00:00' },
          { name: 'dateparse', args: 'Jan 02 2006, 15:04 -07:00' },
        ],
      },
      size: { selector: 'td:nth-child(6)' },
      grabs: { selector: 'td:nth-child(7)' },
      seeders: { selector: 'td:nth-child(8)' },
      leechers: { selector: 'td:nth-child(9)' },
      downloadvolumefactor: {
        case: { 'img[alt="Freeleech"]': '0', '*': '1' },
      },
      uploadvolumefactor: { case: { '*': '1' } },
    },
  },
};
