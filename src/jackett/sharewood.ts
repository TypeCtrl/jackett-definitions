import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'sharewood',
  name: 'Sharewood',
  description: 'sharewood is a Semi-Private FRENCH Torrent Tracker for GENERAL',
  language: 'fr-FR',
  type: 'semi-private',
  encoding: 'UTF-8',
  links: ['https://www.sharewood.tv/'],
  caps: {
    categorymappings: [
      { id: 'Vidéos Torrent', cat: 'Movies', desc: 'Vidéos' },
      { id: 'Audios Torrent', cat: 'Audio', desc: 'Audios' },
      { id: 'Applications Torrent', cat: 'PC', desc: 'Applications' },
      { id: 'Ebooks Torrent', cat: 'Books', desc: 'Ebooks' },
      { id: 'Jeux-Vidéos  Torrent', cat: 'Console', desc: 'Jeux-Vidéos' },
      { id: 'Formations  Torrent', cat: 'Other', desc: 'Formations' },
      { id: 'XXX  Torrent', cat: 'XXX', desc: 'XXX' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
  },
  login: {
    path: 'login',
    method: 'form',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      remember: 1,
    },
    selectorinputs: {
      _token: {
        selector: 'meta[name="csrf-token"]',
        attribute: 'content',
      },
    },
    error: [{ selector: 'form[action$="/login"] .text-red' }],
    test: { path: '/', selector: 'a[href$="/logout"]' },
  },
  ratio: {
    path: '/',
    selector: 'li:has(i.fa-signal)',
    filters: [{ name: 'regexp', args: 'Ratio : (\\d+)' }],
  },
  search: {
    paths: [{ path: 'filterTorrents' }],
    inputs: {
      search: '{{ .Keywords }}',
      uploader: '',
      sort: 'created_at',
      direction: 'desc',
      qty: 100,
    },
    rows: { selector: 'div.table-responsive-line' },
    fields: {
      category: {
        selector: 'i.torrent-icon',
        attribute: 'data-original-title',
      },
      title: { selector: 'a.view-torrent' },
      download: {
        selector: 'a.view-torrent',
        attribute: 'href',
        filters: [{ name: 'replace', args: ['/torrents/', '/download/'] }],
      },
      details: { selector: 'a.view-torrent', attribute: 'href' },
      size: { selector: 'div.col-detail div.row div:nth-child(2)' },
      seeders: { selector: 'div.bouton-s' },
      leechers: { selector: 'div.bouton-l' },
      date: {
        selector: 'div.col-detail div.row div span',
        filters: [
          { name: 'replace', args: ['il y a ', ''] },
          { name: 'replace', args: ['heure', 'hour'] },
          { name: 'replace', args: ['jour', 'day'] },
          { name: 'replace', args: ['semaine', 'week'] },
          { name: 'replace', args: ['mois', 'month'] },
          { name: 'append', args: ' ago' },
        ],
      },
      downloadvolumefactor: { case: { '*': '1' } },
      uploadvolumefactor: { case: { '*': '1' } },
    },
  },
  source: 'jackett',
};
