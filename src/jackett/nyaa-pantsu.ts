import { TopLevel } from '../definition-interface';
export const definition: TopLevel = {
  site: 'nyaa-pantsu',
  name: 'Nyaa-pantsu',
  description: 'Nyaa-pantsu is a Public site for dedicated to Asian ANIME',
  language: 'en-EN',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://nyaa.pantsu.cat/'],
  settings: [
    {
      name: 'cat-id',
      type: 'select',
      label: 'Category',
      default: '_',
      options: {
        '11': 'Software - Applications',
        '12': 'Software - Games',
        '23': 'Audio - Lossless',
        '24': 'Audio - Lossy',
        '35': 'Anime - English-translated',
        '36': 'Anime - Raw',
        '47': 'Literature - English-translated',
        '312': 'Anime - Anime Music Video',
        '313': 'Anime - Non-English-translated',
        '414': 'Literature - Raw',
        _: 'All categories',
        '3_': 'Anime',
        '2_': 'Audio',
        '4_': 'Literature',
        '1_': 'Software',
      },
    },
    {
      name: 'filter-id',
      type: 'select',
      label: 'Filter',
      default: '0',
      options: {
        '0': 'Show all',
        '1': 'Filter Remakes',
        '2': 'Trusted',
        '3': 'A+',
      },
    },
  ],
  caps: {
    categorymappings: [
      { id: '3_', cat: 'TV/Anime', desc: 'Anime' },
      { id: 312, cat: 'TV/Anime', desc: 'Anime music videos' },
      { id: 35, cat: 'TV/Anime', desc: 'English subtitled animes' },
      { id: 313, cat: 'TV/Anime', desc: 'Non-english subtitled animes' },
      { id: 36, cat: 'TV/Anime', desc: 'Raw animes' },
      { id: '2_', cat: 'Audio', desc: 'Audio' },
      { id: 23, cat: 'Audio', desc: 'Lossless audio' },
      { id: 24, cat: 'Audio', desc: 'Lossy audio' },
      { id: '4_', cat: 'Books', desc: 'Literature' },
      { id: 47, cat: 'Books', desc: 'Literature english translated' },
      {
        id: 414,
        cat: 'Books',
        desc: 'Literature non-english translated',
      },
      { id: 48, cat: 'Books', desc: 'Raw literature' },
      { id: '1_', cat: 'PC', desc: 'Software' },
      { id: 11, cat: 'PC/ISO', desc: 'Applications' },
      { id: 12, cat: 'PC/Games', desc: 'Games' },
    ],
    modes: { search: ['q'], 'tv-search': ['q'] },
  },
  search: {
    paths: [{ path: '/search' }],
    inputs: {
      q: '{{ .Query.Keywords }}',
      c: '{{ .Config.cat-id }}',
      s: '{{ .Config.filter-id }}',
    },
    rows: { selector: 'tr.torrent-info' },
    fields: {
      title: { selector: 'td.tr-name a' },
      category: {
        selector: 'td:nth-child(1) a',
        attribute: 'href',
        filters: [{ name: 'split', args: ['=', -1] }],
      },
      details: { selector: 'td.tr-name a', attribute: 'href' },
      download: {
        selector: 'a[title="Magnet Link"]',
        attribute: 'href',
      },
      seeders: { selector: 'td.tr-se', optional: true },
      leechers: { selector: 'td.tr-le', optional: true },
      grabs: { selector: 'td.tr-dl', optional: true },
      date: {
        selector: 'td.date-short',
        filters: [{ name: 'dateparse', args: '2006-01-02T15:04:05Z' }],
      },
      size: {
        selector: 'td.tr-size',
        filters: [{ name: 'replace', args: ['Unknown', '0'] }],
      },
      downloadvolumefactor: { text: '0' },
      uploadvolumefactor: { text: '1' },
    },
  },
};
