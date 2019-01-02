import { TopLevel } from '../definition-interface';
export const definition: TopLevel = {
  site: 'kickasstorrent',
  name: 'KickAssTorrent',
  language: 'en-US',
  encoding: 'UTF-8',
  links: ['https://kat.how'],
  caps: {
    categories: {
      movies: 'Movies',
      tv: 'TV',
      music: 'Audio',
      books: 'Books',
      Games: 'Console',
      applications: 'PC',
      xxx: 'XXX',
      other: 'Other',
    },
  },
  search: {
    path: 'search.php',
    inputs: { q: '{{ .Query.Keywords }}' },
    rows: { selector: 'table[class="data"] tr[id]' },
    fields: {
      category: {
        selector: 'span[id^="cat_"] > strong > a',
        attribute: 'href',
        filters: [{ name: 'trim', args: '/' }],
      },
      title: {
        selector: 'td:nth-child(1) > div > div > a[class="cellMainLink"]',
      },
      details: {
        selector: 'td:nth-child(1) > div > div > a[class="cellMainLink"]',
        attribute: 'href',
      },
      download: {
        selector: 'td:nth-child(1) > div > a[data-download=""]',
        attribute: 'href',
      },
      size: { selector: 'td:nth-child(2)' },
      date: { selector: 'td:nth-child(3)' },
      seeders: { selector: 'td:nth-child(4)' },
      leechers: { selector: 'td:nth-child(5)' },
      description: { selector: 'td:nth-child(1) > div > div > span' },
      downloadvolumefactor: { text: '0' },
      uploadvolumefactor: { text: '1' },
    },
  },
};
