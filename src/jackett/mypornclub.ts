import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'mypornclub',
  name: 'MyPornClub',
  description: 'MyPornClub is a Public Torrent Tracker for 3X',
  language: 'en-EN',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://myporn.club/'],
  certificates: ['da470bec581812000ee09a68fd62dff7a3f50127'],
  caps: {
    categorymappings: [{ id: 'XXX', cat: 'XXX', desc: 'XXX' }],
    modes: { search: ['q'], 'tv-search': ['q'], 'movie-search': ['q'] },
  },
  settings: [],
  download: {
    selector: 'a[href^="magnet:?xt="]',
    attribute: 'href',
    filters: [{ name: 're_replace', args: ['\\s+', ' '] }],
  },
  search: {
    paths: [
      {
        path: '{{ if .Keywords }}search/{{ re_replace .Keywords "\\s+" "-" }}{{else}}torrents{{end}}',
      },
    ],
    rows: {
      selector: 'div.torrents_list > div.torrent_element',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      category: { text: 'XXX' },
      title: { selector: 'a[href^="/torrent/"]', remove: 'i' },
      details: { selector: 'a[href^="/torrent/"]', attribute: 'href' },
      download: { selector: 'a[href^="/torrent/"]', attribute: 'href' },
      date: {
        selector: 'div.torrent_element_info span:nth-child(2)',
        filters: [
          { name: 'replace', args: ['Last year', '1 year ago'] },
          { name: 'replace', args: ['Last month', '1 month ago'] },
        ],
      },
      size: { selector: 'div.torrent_element_info span:nth-child(4)' },
      grabs: { selector: 'div.torrent_element_info span:nth-child(8)' },
      seeders: { selector: 'div.torrent_element_info span:nth-child(10)' },
      leechers: { selector: 'div.torrent_element_info span:nth-child(12)' },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
