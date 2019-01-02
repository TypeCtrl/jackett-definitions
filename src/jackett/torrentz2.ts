import { TopLevel } from '../definition-interface';
export const definition: TopLevel = {
  site: 'torrentz2',
  name: 'Torrentz2',
  description:
    'Torrentz2 is a Public torrent meta-search engine combining results from dozens of torrent sites',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://torrentz2.eu/'],
  caps: {
    categories: {
      'video tv': 'TV',
      'video anime': 'TV/Anime',
      video: 'Movies',
      'movies divx xvid': 'Movies',
      'video movie dvd': 'Movies',
      'video movie dvdrip': 'Movies',
      'video movie hd': 'Movies/HD',
      ebook: 'Books/Ebook',
      'ebook comics': 'Books/Comics',
      'ebook magazine': 'Books/Magazines',
      'ebook tutorial': 'Books/Technical',
      'ebook audio book': 'Audio/Audiobook',
      audio: 'Audio',
      'audio music lossless': 'Audio/Lossless',
      'audio music mp3': 'Audio/MP3',
      application: 'PC/0day',
      game: 'PC/Games',
      'game pc': 'PC/Games',
      'game xbox': 'Console/Xbox',
      adult: 'XXX',
      'adult amateur': 'XXX',
      'adult anal': 'XXX',
      'adult asian': 'XXX',
      'adult blowjobs': 'XXX',
      'adult creampie': 'XXX',
      'adult double p': 'XXX',
      'adult fisting': 'XXX',
      'adult hairy': 'XXX',
      'adult lesbian': 'XXX',
      'adult milf': 'XXX',
      'adult squirting': 'XXX',
      'adult tattoo': 'XXX',
      other: 'Other',
      images: 'Other',
    },
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
  },
  settings: [
    {
      name: 'itorrents-links',
      type: 'checkbox',
      label: 'Add download links via itorrents.org',
      default: false,
    },
    {
      name: 'filter-safe',
      type: 'checkbox',
      label: 'Exclude adult content from results',
      default: true,
    },
    {
      name: 'filter-verified',
      type: 'checkbox',
      label: 'Only include verifed content in results',
      default: false,
    },
  ],
  search: {
    paths: [
      {
        path: '{{if .Config.filter-verified }}verified{{else}}searchA{{end}}',
      },
    ],
    inputs: {
      f: '{{if .Keywords }}title: {{else}}{{end}}{{ .Keywords }}',
      safe: '{{if .Config.filter-safe }}1{{else}}0{{end}}',
    },
    rows: { selector: 'html body #wrap .results dl:has(a)' },
    fields: {
      title: { selector: 'dt a' },
      details: { selector: 'dt a', attribute: 'href' },
      'download-itorrents': {
        selector: 'dt a',
        attribute: 'href',
        filters: [
          { name: 'regexp', args: '/(\\w+)' },
          { name: 'toupper' },
          { name: 'prepend', args: 'http://itorrents.org/torrent/' },
          { name: 'append', args: '.torrent' },
        ],
      },
      download: {
        text:
          '{{if .Config.itorrents-links}}{{ .Result.download-itorrents }}{{else}}{{end}}',
      },
      magfile: {
        text: '{{ .Result.title }}',
        filters: [{ name: 'validfilename' }, { name: 'urlencode' }],
      },
      magnet: {
        selector: 'dt a',
        attribute: 'href',
        filters: [
          { name: 'regexp', args: '/(\\w+)' },
          { name: 'prepend', args: 'magnet:?xt=urn:btih:' },
          { name: 'append', args: '&dn={{ .Result.magfile }}.torrent' },
        ],
      },
      category: {
        optional: true,
        selector: 'dt',
        remove: 'a',
        filters: [
          { name: 're_replace', args: ['[^a-zA-Z\\s]+', ''] },
          { name: 'trim' },
        ],
      },
      date: { selector: 'dd span:nth-child(2)', attribute: 'title' },
      size: { selector: 'dd span:nth-child(3)' },
      seeders: { selector: 'dd span:nth-child(4)' },
      leechers: { selector: 'dd span:nth-child(5)' },
      downloadvolumefactor: { text: '0' },
      uploadvolumefactor: { text: '1' },
    },
  },
};
