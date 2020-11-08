import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'cpasbienclone',
  name: 'cpasbien clone',
  description: 'cpasbien clone is a FRENCH Public site for TV / MOVIES / GENERAL',
  language: 'fr-FR',
  type: 'public',
  encoding: 'UTF-8',
  followredirect: true,
  links: ['https://cpasbien.to/'],
  legacylinks: [
    'https://www1.cpasbiens.ws/',
    'https://www2.cpasbiens.ws/',
    'https://cpasbiens.cm/',
    'https://www1.cpasbiens.cm/',
    'https://wwv.cpasbien.to/',
    'https://cpasbiens.black-mirror.xyz/',
    'https://cpasbiens.unblocked.casa/',
    'https://cpasbiens.proxyportal.fun/',
    'https://cpasbiens.uk-unblock.xyz/',
    'https://cpasbiens.ind-unblock.xyz/',
  ],
  caps: {
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
    categorymappings: [{ id: 'Other', cat: 'Other' }],
  },
  settings: [
    {
      name: 'info_8000',
      type: 'info',
      label: 'About cpasbienclone Categories',
      default:
        "cpasbienclone does not return categories in its search results.</br>To add to your Apps' Torznab indexer, replace all categories with 8000(Other).",
    },
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
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site (Only works for searches with Keywords)',
      default: '?trie-date-d',
      options: {
        '?trie-date-d': 'created desc',
        '?trie-date-a': 'created asc',
        '?trie-seeds-d': 'seeders desc',
        '?trie-seeds-a': 'seeders asc',
        '?trie-poid-d': 'size desc',
        '?trie-poid-a': 'size asc',
        '?trie-nom-d': 'title desc',
        '?trie-nom-a': 'title asc',
      },
    },
  ],
  download: { selector: 'a[href^="magnet:"]', attribute: 'href' },
  search: {
    paths: [
      {
        path: '{{ if .Keywords }}search_torrent/{{ .Keywords }}{{ .Config.sort }}{{ else }}home/{{ end }}',
      },
    ],
    rows: { selector: 'table.table-corps > tbody > tr:has(a)' },
    fields: {
      category: { text: 'Other' },
      site_date: {
        selector: 'a',
        filters: [{ name: 'regexp', args: '(19|20\\d{2})$' }],
      },
      title_phase1: {
        selector: 'a',
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
      details: { selector: 'a', attribute: 'href' },
      download: { selector: 'a', attribute: 'href' },
      size: {
        selector: 'div.poid',
        filters: [
          { name: 're_replace', args: ['\\.(\\d)Ko', '$1X00'] },
          { name: 're_replace', args: ['Ko', '000'] },
          { name: 're_replace', args: ['\\.(\\d)Mo', '$1X00000'] },
          { name: 're_replace', args: ['Mo', '000000'] },
          { name: 're_replace', args: ['\\.(\\d)Go', '$1X00000000'] },
          { name: 're_replace', args: ['Go', '000000000'] },
          { name: 're_replace', args: ['\\.(\\d)To', '$1X00000000000'] },
          { name: 're_replace', args: ['To', '000000000000'] },
          { name: 'replace', args: ['X', ''] },
          { name: 're_replace', args: ['(\\d+)\\.\\d', '$1 MB'] },
        ],
      },
      date: { text: 'now' },
      seeders: { selector: 'div.up', optional: true },
      leechers: { selector: 'div.down', optional: true },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
