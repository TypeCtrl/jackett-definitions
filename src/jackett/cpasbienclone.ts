import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'cpasbienclone',
  name: 'cpasbien clone',
  description: 'cpasbien clone is a FRENCH Public site for TV / MOVIES / GENERAL',
  language: 'fr-FR',
  type: 'public',
  encoding: 'UTF-8',
  followredirect: true,
  links: ['https://cpasbiens.cm/'],
  legacylinks: ['https://www1.cpasbiens.ws/', 'https://www2.cpasbiens.ws/'],
  caps: {
    categorymappings: [
      { id: 'films', cat: 'Movies', desc: 'Movies' },
      { id: 'series', cat: 'TV', desc: 'TV' },
    ],
    modes: { search: ['q'], 'tv-search': ['q', 'season', 'ep'] },
  },
  settings: [],
  download: { selector: 'div#btn-download a', attribute: 'href' },
  search: {
    paths: [{ path: '{{if .Keywords}}/recherche/{{.Keywords}}{{else}}{{end}}' }],
    rows: { selector: 'div#gauche > table > tbody > tr:has(a)' },
    fields: {
      site_date: {
        selector: 'a',
        filters: [{ name: 'regexp', args: '(\\w+)$' }],
      },
      title: {
        selector: 'a',
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
      details: { selector: 'a', attribute: 'href' },
      download: { selector: 'a', attribute: 'href' },
      size: {
        selector: 'div.poid',
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
      date: { text: 'now' },
      seeders: { selector: 'div.up', optional: true },
      leechers: { selector: 'div.down', optional: true },
      downloadvolumefactor: { text: '0' },
      uploadvolumefactor: { text: '1' },
    },
  },
  source: 'jackett',
};