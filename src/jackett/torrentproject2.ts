import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'torrentproject2',
  name: 'TorrentProject2',
  description: 'TorrentProject2 is a Public torrent meta-search engine',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://torrentproject2.se/'],
  caps: {
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
    categorymappings: [
      { id: 'video tv', cat: 'TV' },
      { id: 'video dvd', cat: 'Movies/SD' },
      { id: 'Video Dvdrip', cat: 'Movies/SD' },
      { id: 'video hdrip', cat: 'Movies/HD' },
      { id: 'Video Lq', cat: 'Movies/Foreign' },
      { id: 'audio mp3', cat: 'Audio/MP3' },
      { id: 'audio lossless', cat: 'Audio/Lossless' },
      { id: 'video', cat: 'Movies' },
      { id: 'ebooks', cat: 'Books/Ebook' },
      { id: 'Ebooks Comics', cat: 'Books/Comics' },
      { id: 'Ebooks Magazines', cat: 'Other' },
      { id: 'Ebooks Audiobook', cat: 'Audio/Audiobook' },
      { id: 'Ebooks Tutorials', cat: 'Books/Ebook' },
      { id: 'Games PC', cat: 'PC/Games' },
      { id: 'Games Nintendo', cat: 'Console' },
      { id: 'Games PlayStation', cat: 'Console' },
      { id: 'Games XBox', cat: 'Console/Xbox' },
      { id: 'Mobile', cat: 'PC/Phone-Other' },
      { id: 'Applications', cat: 'PC' },
      { id: 'Images', cat: 'Other' },
      { id: 'Other', cat: 'Other' },
    ],
  },
  settings: [
    {
      name: 'filter-verified',
      type: 'checkbox',
      label: 'Only include verifed content in results',
      default: false,
    },
  ],
  download: {
    selector: '#download > div:nth-child(2) > div:nth-child(1) > a',
    attribute: 'href',
    filters: [{ name: 'replace', args: ['https://mylink.me.uk/?url=', ''] }, { name: 'urldecode' }],
  },
  search: {
    paths: [
      {
        path:
          '?t={{if .Keywords}}{{.Keywords}}{{else}}test{{end}}&orderby=latest{{if .Config.filter-verified }}&safe=on{{else}}{{end}}',
        followredirect: true,
      },
    ],
    rows: { selector: '#similarfiles div:has(a[href^="/t3-"])' },
    fields: {
      title: { selector: 'span > a' },
      details: { selector: 'span > a', attribute: 'href' },
      download: { selector: 'span > a', attribute: 'href' },
      category: {
        optional: true,
        selector: 'div > span:nth-child(1) > span',
      },
      date: { selector: 'div > span:nth-child(4)' },
      size: { selector: 'div > span:nth-child(5)' },
      seeders: { selector: 'div > span:nth-child(2)' },
      leechers: { selector: 'div > span:nth-child(3)' },
      downloadvolumefactor: { text: '0' },
      uploadvolumefactor: { text: '1' },
    },
  },
  source: 'jackett',
};
