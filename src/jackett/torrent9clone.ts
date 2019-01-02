import { TopLevel } from '../definition-interface';
export const definition: TopLevel = {
  site: 'torrent9clone',
  name: 'Torrent9 clone (torrents9.pw)',
  description: 'Torrent9 is a FRENCH Public site for TV / MOVIES / GENERAL',
  language: 'fr-FR',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://www.torrents9.pw/'],
  legacylinks: ['https://www.torrent9.ch/'],
  caps: {
    categorymappings: [
      { id: 'films', cat: 'Movies', desc: 'Movies' },
      { id: 'series', cat: 'TV', desc: 'TV' },
      { id: 'musique', cat: 'Audio', desc: 'Music' },
      { id: 'ebook', cat: 'Books', desc: 'Books' },
      { id: 'logiciels', cat: 'PC', desc: 'Software' },
      { id: 'jeux-pc', cat: 'PC/Games', desc: 'PC Games' },
      {
        id: 'jeux-consoles',
        cat: 'Console/Xbox360',
        desc: 'Console Games',
      },
    ],
    modes: { search: ['q'], 'tv-search': ['q', 'season', 'ep'] },
  },
  settings: [
    {
      name: 'category',
      type: 'select',
      label: 'Category Filter',
      default: '/',
      options: {
        '/': 'All',
        '/films/': 'Movies',
        '/films-french/': 'Movies/French',
        '/films-vostfr/': 'Movies/VOSTFR',
        '/films-dvdrip-x264/': 'Movies/DVDRIP .x264',
        '/720p/': 'Movies/BluRay 720p',
        '/1080p/': 'Movies/BluRay 1080p',
        '/series/': 'TV/Series',
        '/series-vostfr/': 'TV/VOSTFR',
        '/series-francaise/': 'TV/French',
        '/series-dvdrip/': 'TV/DVDRIP',
        '/spectacles/': 'Shows',
        '/musique/': 'Music',
        '/ebook/': 'Ebooks',
        '/logiciels/': 'Software',
        '/jeux-pc/': 'PC Games',
        '/jeux-consoles/': 'Console Games',
      },
    },
  ],
  download: { selector: 'a[href^="magnet:?"]', attribute: 'href' },
  search: {
    paths: [
      {
        path: '{{ if .Keywords }}/recherche/{{ .Keywords }}{{else}}/top{{end}}',
      },
    ],
    rows: { selector: 'div.table-responsive > table tbody tr' },
    fields: {
      site_date: {
        selector: 'td:nth-child(1) a',
        filters: [{ name: 'regexp', args: '(\\w+)$' }],
      },
      title: {
        selector: 'td:nth-child(1) a',
        filters: [
          {
            name: 'replace',
            args: ['FRENCH', '{{ .Result.site_date }} FRENCH'],
          },
          {
            name: 'replace',
            args: ['TRUEFRENCH', '{{ .Result.site_date }} TRUEFRENCH'],
          },
          {
            name: 'replace',
            args: ['VOSTFR', '{{ .Result.site_date }} VOSTFR'],
          },
          { name: 're_replace', args: ['(\\w+)$', ''] },
        ],
      },
      details: { selector: 'td:nth-child(1) a', attribute: 'href' },
      category: {
        selector: 'td:nth-child(1) i',
        case: {
          'i[class="Films"]': 'films',
          'i[class="Séries"]': 'series',
          'i[class="Musique"]': 'musique',
          'i[class=""Jeux-PC"]': 'jeux-pc',
          'i[class="Logiciels"]': 'logiciels',
          'i[class="Ebook"]': 'ebook',
        },
      },
      download: { selector: 'td:nth-child(1) a', attribute: 'href' },
      date: { text: 'now' },
      size: {
        selector: 'td:nth-child(2)',
        filters: [
          { name: 're_replace', args: ['\\.(\\d) Ko', '$1X00'] },
          { name: 're_replace', args: [' Ko', '000'] },
          { name: 're_replace', args: ['\\.(\\d) Mo', '$1X00000'] },
          { name: 're_replace', args: [' Mo', '000000'] },
          { name: 're_replace', args: ['\\.(\\d) Go', '$1X00000000'] },
          { name: 're_replace', args: [' Go', '000000000'] },
          { name: 're_replace', args: ['\\.(\\d) To', '$1X00000000000'] },
          { name: 're_replace', args: [' To', '000000000000'] },
          { name: 'replace', args: ['X', ''] },
        ],
      },
      seeders: {
        selector: 'td:nth-child(3) span.seed_ok',
        optional: true,
      },
      leechers: { selector: 'td:nth-child(4)', optional: true },
      downloadvolumefactor: { text: '0' },
      uploadvolumefactor: { text: '1' },
    },
  },
};
