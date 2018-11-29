export const definition: any = {
  site: 'skytorrents',
  name: 'Sky torrents',
  language: 'en-us',
  encoding: 'UTF-8',
  links: ['https://www.skytorrents.in/'],
  caps: { categories: { TV: 'TV', Movies: 'Movies' } },
  search: {
    path: 'search/all/{{if .Query.Keywords}}ed{{else}}ad{{end}}/1/{{ .Query.Keywords}}',
    rows: { selector: 'table > tbody > tr' },
    fields: {
      title: {
        selector: 'td:nth-child(1) > a:first-child[title]',
        attribute: 'title',
      },
      details: {
        selector: 'td:nth-child(1) > a:first-child',
        attribute: 'href',
      },
      size: { selector: 'td:nth-child(2)' },
      files: { selector: 'td:nth-child(3)' },
      seeders: { selector: 'td:nth-child(5)' },
      leechers: { selector: 'td:nth-child(6)' },
      description: {
        selector: 'td:nth-child(1)',
        case: {
          'img[title="Verified and marked"]': 'Verified and marked',
          '*': '',
        },
      },
      date: { selector: 'td:nth-child(4)' },
      download: {
        selector: 'td > a[href^="/file"]',
        attribute: 'href',
      },
      downloadvolumefactor: { text: '0' },
      uploadvolumefactor: { text: '1' },
    },
  },
};
