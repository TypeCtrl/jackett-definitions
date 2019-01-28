import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'torrof',
  name: 'Torrof',
  description: 'Torrof (Torrentoff) is meta-search engine for torrents',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['http://www.torrof.com/'],
  caps: {
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
    categorymappings: [
      { id: 'Software', cat: 'PC' },
      { id: 'Book', cat: 'Books' },
      { id: 'Video', cat: 'Movies' },
      { id: 'Music', cat: 'Audio' },
      { id: 'Other', cat: 'Other' },
      { id: 'Picture', cat: 'Other/Misc' },
    ],
  },
  settings: [
    {
      name: 'category',
      type: 'select',
      label: 'Category',
      default: '_',
      options: {
        _: 'All',
        Book: 'Book',
        Music: 'Music',
        Other: 'Other',
        Picture: 'Picture',
        Software: 'Software',
        Video: 'Video',
      },
    },
    {
      name: 'verified',
      type: 'select',
      label: 'Verified',
      default: '_',
      options: { '1': 'Verified Only', _: 'Any' },
    },
    {
      name: 'sort',
      type: 'select',
      label: 'Sort',
      default: '_',
      options: {
        _: 'Default',
        'creation_date desc': 'Age desc',
        'creation_date asc': 'Age asc',
        'total_size desc': 'Size desc',
        'total_size asc': 'Size asc',
      },
    },
  ],
  download: { selector: 'section.file-info a:nth-child(2)' },
  search: {
    paths: [
      {
        path: '{{if .Keywords}}{{.Keywords}}{{else}}test{{end}}',
        method: 'post',
      },
    ],
    inputs: {
      text: '{{if .Keywords}}{{.Keywords}}{{else}}test{{end}}',
      size: '0:inf',
      date: '0:inf',
      verified_only: '{{ re_replace .Config.verified "_" "" }}',
      category: '{{ re_replace .Config.category "_" "" }}',
      tags: '',
      mode: 'titles',
      sort: '{{ re_replace .Config.sort "_" "" }}',
      page: '0',
    },
    rows: {
      selector: 'tr:has(a[href^="/view/"])',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      title: { selector: 'td:nth-child(2) a:nth-child(1)' },
      category: {
        selector: 'td:nth-child(1) span',
        attribute: 'title',
        filters: [{ name: 'split', args: [' ', 0] }],
      },
      details: {
        selector: 'td:nth-child(2) a:nth-child(1)',
        attribute: 'href',
      },
      download: {
        selector: 'td:nth-child(2) a:nth-child(1)',
        attribute: 'href',
      },
      date: {
        selector: 'td:nth-child(4)',
        filters: [{ name: 'dateparse', args: 'Jan 2006' }],
      },
      size: { selector: 'td:nth-child(3) span:nth-child(1)' },
      files: {
        selector: 'td:nth-child(3) span:nth-last-child(1)',
        filters: [{ name: 'replace', args: [' Files', ''] }],
      },
      seeders: { text: '1' },
      leechers: { text: '1' },
      downloadvolumefactor: { text: '0' },
      uploadvolumefactor: { text: '1' },
    },
  },
  source: 'jackett',
};
