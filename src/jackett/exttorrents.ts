import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'exttorrents',
  name: 'EXT Torrents',
  description: 'EXT Torrents is a Public torrent site for MOVIES / TV / GENERAL',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://ext.to/', 'https://torrent.extto.com/'],
  legacylinks: ['https://ext.unblockninja.com/', 'https://t.extto.com/'],
  caps: {
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
      'music-search': ['q'],
      'book-search': ['q'],
    },
    categorymappings: [
      { id: '/anime/', cat: 'TV/Anime' },
      { id: '/anime/english-translated/', cat: 'TV/Anime' },
      { id: '/applications/', cat: 'PC' },
      { id: '/applications/android/', cat: 'PC/Phone-Android' },
      { id: '/applications/ios/', cat: 'PC/Phone-IOS' },
      { id: '/applications/linux/', cat: 'PC' },
      { id: '/applications/mac/', cat: 'PC/Mac' },
      { id: '/applications/other-applications/', cat: 'PC/Phone-Other' },
      { id: '/applications/windows/', cat: 'PC/0day' },
      { id: '/books/', cat: 'Books' },
      { id: '/books/audio-books/', cat: 'Audio/Audiobook' },
      { id: '/books/comics/', cat: 'Books/Comics' },
      { id: '/books/ebooks/', cat: 'Books/Ebook' },
      { id: '/games/', cat: 'PC/Games' },
      { id: '/games/nds/', cat: 'Console/NDS' },
      { id: '/games/other-games/', cat: 'Console/Other' },
      { id: '/games/pc-games/', cat: 'PC/Games' },
      { id: '/games/ps3/', cat: 'Console/PS3' },
      { id: '/games/ps4/', cat: 'Console/PS4' },
      { id: '/games/psp/', cat: 'Console/PSP' },
      { id: '/games/wii/', cat: 'Console/Wii' },
      { id: '/games/xbox360/', cat: 'Console/Xbox360' },
      { id: '/movies/', cat: 'Movies' },
      { id: '/movies/3d-movies/', cat: 'Movies/3D' },
      { id: '/movies/bollywood/', cat: 'Movies' },
      { id: '/movies/dubbed-movies/', cat: 'Movies' },
      { id: '/movies/highres-movies/', cat: 'Movies/HD' },
      { id: '/movies/mp4/', cat: 'Movies' },
      { id: '/movies/ultrahd/', cat: 'Movies/UHD' },
      { id: '/music/', cat: 'Audio' },
      { id: '/music/aac/', cat: 'Audio' },
      { id: '/music/lossless/', cat: 'Audio/Lossless' },
      { id: '/music/mp3/', cat: 'Audio/MP3' },
      { id: '/music/other-music/', cat: 'Audio/Other' },
      { id: '/music/radio-shows/', cat: 'Audio' },
      { id: '/other/', cat: 'Other' },
      { id: '/tv/', cat: 'TV' },
    ],
  },
  settings: [
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: 'age',
      options: { age: 'created', seed: 'seeders', size: 'size' },
    },
    {
      name: 'type',
      type: 'select',
      label: 'Order requested from site',
      default: 'desc',
      options: { desc: 'desc', asc: 'asc' },
    },
  ],
  download: { selector: 'a[href^="magnet:?xt="]', attribute: 'href' },
  search: {
    paths: [
      {
        path:
          '{{ if .Keywords }}search/?order={{ .Config.sort }}&sort={{ .Config.type }}&q={{ .Keywords }}{{ else }}latest/?order={{ .Config.sort }}&sort={{ .Config.type }}{{ end }}',
      },
    ],
    rows: { selector: 'table.table-striped > tbody > tr' },
    fields: {
      category: {
        selector: 'td:nth-child(1) div div a:last-child',
        attribute: 'href',
      },
      title: { selector: 'td:nth-child(1) div a' },
      details: { selector: 'td:nth-child(1) div a', attribute: 'href' },
      download: { selector: 'td:nth-child(1) div a', attribute: 'href' },
      size: { selector: 'td:nth-child(2)' },
      files: { selector: 'td:nth-child(3)', optional: true },
      date: { selector: 'td:nth-child(4)' },
      seeders: { selector: 'td:nth-child(5)' },
      leechers: { selector: 'td:nth-child(6)' },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
