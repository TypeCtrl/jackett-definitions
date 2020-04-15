import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'chdbits',
  name: 'CHDBits',
  description: 'CHDBits is a CHINESE Private Torrent Tracker for HD MOVIES / TV',
  language: 'zh-CN',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://chdbits.co/'],
  caps: {
    categorymappings: [
      { id: '401', cat: 'Movies', desc: 'Movies' },
      { id: '404', cat: 'TV/Documentary', desc: 'Documentaries' },
      { id: '405', cat: 'TV/Anime', desc: 'Animations' },
      { id: '402', cat: 'TV', desc: 'TV Series' },
      { id: '403', cat: 'TV', desc: 'TV Shows' },
      { id: '406', cat: 'Audio/Video', desc: 'Music Videos' },
      { id: '407', cat: 'TV/Sport', desc: 'Sports' },
      { id: '409', cat: 'Other', desc: 'Misc' },
      { id: '408', cat: 'Audio', desc: 'HQ Audio' },
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
    test: { path: 'torrents.php' },
  },
  ratio: {
    path: 'torrents.php',
    selector: 'table#info_block',
    filters: [{ name: 'regexp', args: 'Ratio:\\s(.*?)\\s\\s' }],
  },
  search: {
    paths: [{ path: 'torrents.php' }],
    inputs: {
      $raw: '{{range .Categories}}cat{{.}}=1&{{end}}',
      search: '{{ .Query.Keywords }}',
      incldead: '1',
    },
    rows: {
      selector: 'table.torrents > tbody > tr:has(table.torrentname)',
    },
    fields: {
      title: {
        optional: true,
        selector: 'a[title][href^="details.php?id="]',
        attribute: 'title',
      },
      category: {
        selector: 'a[href^="?cat="]',
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
      size: { selector: 'td:nth-child(5)' },
      grabs: { selector: 'td:nth-child(8)' },
      seeders: { selector: 'td:nth-child(6)' },
      leechers: { selector: 'td:nth-child(7)' },
      date: {
        selector: 'td:nth-child(4) > span[title]',
        attribute: 'title',
        filters: [
          { name: 'append', args: ' +08:00' },
          { name: 'dateparse', args: '2006-01-02 15:04:05 -07:00' },
        ],
      },
      downloadvolumefactor: {
        case: {
          'img.pro_free': '0',
          'img.pro_free2up': '0',
          'img.pro_50pctdown': '0.5',
          'img.pro_50pctdown2up': '0.5',
          'img.pro_30pctdown': '0.3',
          '*': '1',
        },
      },
      uploadvolumefactor: {
        case: {
          'img.pro_50pctdown2up': '2',
          'img.pro_free2up': '2',
          'img.pro_2up': '2',
          '*': '1',
        },
      },
      description: { selector: 'td:nth-child(2)', remove: 'a, img' },
    },
  },
  source: 'jackett',
};
