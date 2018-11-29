export const definition: any = {
  site: 'funfile',
  name: 'FunFile',
  description: 'A general tracker',
  language: 'en-us',
  links: ['https://www.funfile.org/'],
  caps: {
    categories: {
      '4': 'PC/Games',
      '6': 'Audio',
      '7': 'TV',
      '19': 'Movies',
      '22': 'PC',
      '27': 'Books',
      '31': 'PC/Phone-Other',
      '40': 'Other/Misc',
      '43': 'Audio/Audiobook',
      '44': 'TV/Anime',
    },
  },
  login: {
    path: '/takelogin.php',
    method: 'post',
    form: 'form',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      login: 'Login',
    },
    error: [{ selector: 'mf_content' }],
    test: { path: '/my.php' },
  },
  ratio: {
    path: '/browse.php',
    selector: 'div:has(div#clock) > b + b+ b > span',
  },
  search: {
    path: '/browse.php',
    inputs: {
      $raw: '{{range .Categories}}c{{.}}=1&{{end}}',
      search: '{{ .Query.Keywords }}',
      incldead: 1,
      showspam: 1,
    },
    rows: {
      selector: 'table[cellpadding="2"] > tbody > tr:has(td.row3)',
    },
    fields: {
      title: {
        selector: 'a[title][href^="details.php"]',
        attribute: 'title',
      },
      category: {
        selector: 'a[href^="browse.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      comments: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="download.php"]',
        attribute: 'href',
      },
      size: { selector: 'td:nth-child(8)' },
      seeders: { selector: 'td:nth-child(10)' },
      leechers: { selector: 'td:nth-child(11)' },
      date: {
        selector: 'td:nth-child(6)',
        filters: [{ name: 'append', args: ' ago' }],
      },
    },
  },
};
