export const definition: any = {
  site: 'mononokebt',
  name: 'Mononoké-BT',
  description: 'Mononoke-BT is a FRENCH Private Torrent Tracker for ANIME',
  language: 'fr-fr',
  type: 'private',
  encoding: 'iso-8859-15',
  links: ['http://mononoke-bt.org/'],
  caps: {
    categories: { '1': 'TV/Anime' },
    modes: { search: ['q'], 'tv-search': ['q', 'season', 'ep'] },
  },
  login: {
    path: 'takelogin.php',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [{ selector: 'td.embedded:has(h2:contains("l\'authentification"))' }],
    test: { path: 'browse2.php' },
  },
  search: {
    paths: [{ path: 'browse2.php' }],
    inputs: {
      search: '%{{ re_replace .Query.Keywords "[^a-zA-Z0-9]+" "%" }}%',
      incldead: 1,
    },
    rows: {
      selector: 'table#torrentstable > tbody > tr:has(a[href^="details.php?id="])',
    },
    fields: {
      download: {
        selector: 'a[href^="gettorrent.php?id="]',
        attribute: 'href',
      },
      title: { selector: 'a[href^="details.php?id="]' },
      details: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
      },
      banner: {
        selector: 'a[href^="browse2.php?cat="] > img',
        attribute: 'src',
      },
      category: { text: '1' },
      seeders: { selector: 'td:nth-child(13)' },
      leechers: { selector: 'td:nth-child(14)' },
      grabs: { selector: 'td:nth-child(12)' },
      files: { selector: 'td:nth-child(6)' },
      size: {
        selector: 'td:nth-child(10)',
        filters: [{ name: 'replace', args: ['o', 'b'] }],
      },
      downloadvolumefactor: {
        case: {
          'img[src="/pic/icons/cadeau1.png"]': '0',
          'img[src="/pic/icons/cadeau2.png"]': '0',
          'img[src="/pic/icons/cadeau3.png"]': '0',
          '*': '1',
        },
      },
      uploadvolumefactor: { case: { '*': '1' } },
      date: {
        selector: 'td:nth-child(9)',
        filters: [
          { name: 'append', args: ' +01:00' },
          { name: 'dateparse', args: '2006-01-0215:04:05 -07:00' },
        ],
      },
    },
  },
};
