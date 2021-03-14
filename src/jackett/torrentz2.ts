import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'torrentz2',
  name: 'Torrentz2',
  description: 'Torrentz2 is a Public torrent meta-search engine combining results from dozens of torrent sites',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  followredirect: true,
  links: [
    'https://torrentzwealmisr.onion.ly/',
    'https://torrentz.unblockit.buzz/',
    'https://torrentz2.unblockninja.com/',
  ],
  legacylinks: [
    'https://torrentz.unblockit.pro/',
    'https://torrentz.unblockit.one/',
    'https://torrentz2.black-mirror.xyz/',
    'https://torrentz2.unblocked.casa/',
    'https://torrentz2.proxyportal.fun/',
    'https://torrentz2.uk-unblock.xyz/',
    'https://torrentz2.ind-unblock.xyz/',
    'https://torrentz.unblockit.me/',
    'https://torrentz.unblockit.pw/',
    'https://torrentz2.eu/',
    'https://torrentz.unblockit.id/',
    'https://torrentz.unblockit.win/',
    'https://torrentz2.unblocked.bar/',
    'https://torrentz2.proxyportal.pw/',
    'https://torrentz2.uk-unblock.pro/',
    'https://torrentz.unblockit.top/',
    'https://torrentz.unblockit.lat/',
    'https://torrentz2.is/',
    'https://torrentsmirror.com/',
    'https://torrentz.pl/',
    'https://torrentz.unblockit.app/',
    'https://torrentz2.unblocked.rest/',
    'https://torrentz.unblockit.dev/',
    'https://torrentz.unblockit.ltd/',
    'https://torrentz.unblockit.link/',
  ],
  caps: {
    categorymappings: [
      { id: 'video tv', cat: 'TV', desc: 'video tv' },
      { id: 'video anime', cat: 'TV/Anime', desc: 'video anime' },
      { id: 'video', cat: 'Movies', desc: 'video' },
      { id: 'movies divx xvid', cat: 'Movies', desc: 'movies divx xvid' },
      { id: 'video movie dvd', cat: 'Movies', desc: 'video movie dvd' },
      {
        id: 'video movie dvdrip',
        cat: 'Movies',
        desc: 'video movie dvdrip',
      },
      { id: 'video movie hd', cat: 'Movies/HD', desc: 'video movie hd' },
      { id: 'ebook', cat: 'Books/Ebook', desc: 'ebook' },
      { id: 'ebook comics', cat: 'Books/Comics', desc: 'ebook comics' },
      { id: 'ebook magazine', cat: 'Books/Mags', desc: 'ebook magazine' },
      {
        id: 'ebook tutorial',
        cat: 'Books/Technical',
        desc: 'ebook tutorial',
      },
      {
        id: 'ebook audio book',
        cat: 'Audio/Audiobook',
        desc: 'ebook audio book',
      },
      { id: 'audio', cat: 'Audio', desc: 'audio' },
      {
        id: 'audio music lossless',
        cat: 'Audio/Lossless',
        desc: 'audio music lossless',
      },
      {
        id: 'audio music mp3',
        cat: 'Audio/MP3',
        desc: 'audio music mp3',
      },
      { id: 'application', cat: 'PC/0day', desc: 'application' },
      { id: 'game', cat: 'PC/Games', desc: 'game' },
      { id: 'game pc', cat: 'PC/Games', desc: 'game pc' },
      { id: 'game xbox', cat: 'Console/Xbox', desc: 'game xbox' },
      {
        id: 'game nintendo',
        cat: 'Console/NDS',
        desc: 'game nintendo"',
      },
      { id: 'adult', cat: 'XXX', desc: 'adult' },
      { id: 'adult amateur', cat: 'XXX', desc: 'adult amateur' },
      { id: 'adult anal', cat: 'XXX', desc: 'adult anal' },
      { id: 'adult asian', cat: 'XXX', desc: 'adult asian' },
      { id: 'adult blowjobs', cat: 'XXX', desc: 'adult blowjobs' },
      { id: 'adult creampie', cat: 'XXX', desc: 'adult creampie' },
      { id: 'adult double p', cat: 'XXX', desc: 'adult double p' },
      { id: 'adult fisting', cat: 'XXX', desc: 'adult fisting' },
      { id: 'adult hairy', cat: 'XXX', desc: 'adult hairy' },
      { id: 'adult hentai', cat: 'XXX', desc: 'adult hentai' },
      { id: 'adult interracial', cat: 'XXX', desc: 'adult interracial' },
      { id: 'adult lesbian', cat: 'XXX', desc: 'adult lesbian' },
      { id: 'adult milf', cat: 'XXX', desc: 'adult milf' },
      { id: 'adult squirting', cat: 'XXX', desc: 'adult squirting' },
      { id: 'adult tattoo', cat: 'XXX', desc: 'adult tattoo' },
      { id: 'other', cat: 'Other', desc: 'other' },
      { id: 'images', cat: 'Other', desc: 'images' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
      'music-search': ['q'],
      'book-search': ['q'],
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
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: 'A',
      options: { _: 'peers', N: 'rating', A: 'created', S: 'size' },
    },
  ],
  search: {
    paths: [
      {
        path: '{{ if .Config.filter-verified }}verified{{ else }}search{{ end }}{{ re_replace .Config.sort "_" "" }}',
      },
    ],
    inputs: {
      f: '{{ if .Keywords }}title: {{ .Keywords }}{{ else }}{{ end }}',
      safe: '{{ if .Config.filter-safe }}1{{ else }}0{{ end }}',
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
        text: '{{ if .Config.itorrents-links }}{{ .Result.download-itorrents }}{{ else }}{{ end }}',
      },
      infohash: {
        selector: 'dt a',
        attribute: 'href',
        filters: [{ name: 'regexp', args: '/(\\w+)' }],
      },
      category: { text: 'other' },
      'category|noappend': {
        optional: true,
        selector: 'dt',
        remove: 'a',
        filters: [{ name: 're_replace', args: ['[^a-zA-Z0-9\\s]+', ''] }, { name: 'trim' }],
      },
      date: { selector: 'dd span:nth-child(2)', attribute: 'title' },
      size: { selector: 'dd span:nth-child(3)' },
      seeders: { selector: 'dd span:nth-child(4)' },
      leechers: { selector: 'dd span:nth-child(5)' },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
