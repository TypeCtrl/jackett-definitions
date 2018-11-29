export const definition: any = {
  site: 'speedcd',
  name: 'speed.cd',
  description: 'TV Series anyone?',
  language: 'en-us',
  links: ['http://speed.cd/'],
  caps: {
    categories: {
      '1': 'Movies/Other',
      '2': 'TV/SD',
      '24': 'PC/0day',
      '25': 'PC/ISO',
      '26': 'Audio',
      '27': 'Books',
      '28': 'Movies/BluRay',
      '29': 'Audio/Video',
      '30': 'TV/Anime',
      '32': 'Movies',
      '33': 'Console/Xbox360',
      '35': 'Console',
      '39': 'Console/Wii',
      '40': 'Movies/DVD',
      '41': 'TV/Other',
      '42': 'Movies',
      '43': 'Movies/HD',
      '44': 'Audio',
      '45': 'Console/PS3',
      '46': 'PC/Phone-Other',
      '47': 'Movies',
      '48': 'Movies/3D',
      '49': 'TV/HD',
      '50': 'TV/Sport',
      '51': 'PC/Mac',
      '52': 'TV/HD',
      '55': 'TV/Other',
    },
  },
  ratio: {
    path: '/browse.php',
    selector: 'body > div.cHead > table.sts > tbody > tr > td:nth-child(1) > div:nth-child(2)',
    filters: [{ name: 'regexp', args: '(\\ \\d{1,2}\\.\\d{2}\\ )' }],
  },
  login: {
    path: '/takeElogin.php',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [{ selector: 'tbody:contains("File Not Found")' }],
    test: { path: '/user/' },
  },
  search: {
    path: '/browse.php',
    inputs: { search: '{{ .Query.Keywords }}' },
    rows: { selector: '#torrentTable .boxContent > table tbody tr' },
    fields: {
      title: { selector: 'td.lft > div > a > b' },
      category: {
        selector: 'td:nth-child(1) > div:nth-child(1) > a:nth-child(2)',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      download: {
        selector: 'td:nth-child(3) > a:nth-child(1)',
        attribute: 'href',
      },
      date: {
        selector: 'td.lft > div > span.date > span',
        attribute: 'title',
      },
      size: { selector: 'td:nth-child(5)' },
      seeders: { selector: 'td:nth-child(6)' },
      leechers: { selector: 'td:nth-child(7)' },
    },
  },
};
