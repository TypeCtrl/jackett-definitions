import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'epizod',
  name: 'Epizod',
  description: 'Epizod is a FRENCH Public tracker for MOVIES / TV',
  language: 'fr-FR',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://wwv.epizod.tv/'],
  legacylinks: ['https://www.epizod.tv/'],
  caps: {
    categorymappings: [
      { id: 'series', cat: 'TV', desc: 'SÉRIES' },
      { id: 'films', cat: 'Movies', desc: 'FILMS' },
      { id: 'musique', cat: 'Audio', desc: 'MUSIQUE' },
      { id: 'ebook', cat: 'Books', desc: 'EBOOK' },
      { id: 'other', cat: 'Other', desc: 'OTHER' },
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
      name: 'multilang',
      type: 'checkbox',
      label: 'Replace MULTI by another language in release name',
      default: false,
    },
    {
      name: 'multilanguage',
      type: 'select',
      label: 'Replace MULTI by this language',
      default: 'FRENCH',
      options: {
        FRENCH: 'FRENCH',
        'MULTI.FRENCH': 'MULTI.FRENCH',
        ENGLISH: 'ENGLISH',
        'MULTI.ENGLISH': 'MULTI.ENGLISH',
        VOSTFR: 'VOSTFR',
        'MULTI.VOSTFR': 'MULTI.VOSTFR',
      },
    },
    {
      name: 'vostfr',
      type: 'checkbox',
      label: 'Replace VOSTFR with ENGLISH',
      default: false,
    },
  ],
  download: { selector: 'a[href^="magnet:?xt="]', attribute: 'href' },
  search: {
    paths: [{ path: '/' }],
    inputs: { s: '{{ .Keywords }}' },
    rows: { selector: 'article:not(:has(a[title="DMCA"]))' },
    fields: {
      category: { text: 'other' },
      'category|noappend': {
        selector: 'a[href*="/category/"]',
        attribute: 'href',
        optional: true,
        filters: [{ name: 'split', args: ['/', 4] }],
      },
      site_date: {
        selector: 'div.post-cover > a',
        attribute: 'title',
        filters: [{ name: 'regexp', args: '(19|20\\d{2})$' }],
      },
      title_phase1: {
        selector: 'div.post-cover > a',
        attribute: 'title',
        filters: [
          {
            name: 're_replace',
            args: ['(?i)( FRENCH)', ' {{ .Result.site_date }} FRENCH'],
          },
          {
            name: 're_replace',
            args: ['(?i)( MULTI)', ' {{ .Result.site_date }} MULTI'],
          },
          {
            name: 're_replace',
            args: ['(?i)( TRUEFRENCH)', ' {{ .Result.site_date }} TRUEFRENCH'],
          },
          {
            name: 're_replace',
            args: ['(?i)( VOSTFR)', ' {{ .Result.site_date }} VOSTFR'],
          },
          {
            name: 're_replace',
            args: ['(?i)( SUBFRENCH)', ' {{ .Result.site_date }} SUBFRENCH'],
          },
          { name: 're_replace', args: ['(19|20\\d{2})$', ''] },
        ],
      },
      title_multilang: {
        text: '{{ .Result.title_phase1 }}',
        filters: [
          {
            name: 're_replace',
            args: ['(?i)(\\smulti\\s)', ' {{ .Config.multilanguage }} '],
          },
        ],
      },
      title_phase2: {
        text: '{{ if .Config.multilang }}{{ .Result.title_multilang }}{{ else }}{{ .Result.title_phase1 }}{{ end }}',
      },
      title_vostfr: {
        text: '{{ .Result.title_phase2 }}',
        filters: [
          { name: 're_replace', args: ['(?i)(\\svostfr\\s)', ' ENGLISH '] },
          {
            name: 're_replace',
            args: ['(?i)(\\ssubfrench\\s)', ' ENGLISH '],
          },
        ],
      },
      title: {
        text: '{{ if .Config.vostfr }}{{ .Result.title_vostfr }}{{ else }}{{ .Result.title_phase2 }}{{ end }}',
      },
      details: { selector: 'div.post-cover > a', attribute: 'href' },
      download: { selector: 'div.post-cover > a', attribute: 'href' },
      poster: {
        selector: 'img[data-lazy-src]',
        attribute: 'data-lazy-src',
      },
      date: {
        selector: 'time',
        attribute: 'datetime',
        filters: [
          { name: 'replace', args: ['T', ' '] },
          { name: 'dateparse', args: '2006-01-02 15:04:05-07:00' },
        ],
      },
      cat: {
        text: '{{ if .Result.cat }}{{ .Result.cat }}{{ else }}other{{ end }}',
      },
      size: {
        text:
          '{{ if eq .Result.cat "ebook" }}1 MB{{ else }}{{ end }}{{ if eq .Result.cat "musique" }}128 MB{{ else }}{{ end }}{{ if or (eq .Result.cat "series") (eq .Result.cat "other") }}512 MB{{ else }}{{ end }}{{ if eq .Result.cat "films" }}2 GB{{ else }}{{ end }}',
      },
      seeders: { text: 1 },
      leechers: { text: 1 },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
