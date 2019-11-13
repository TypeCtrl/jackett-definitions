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
      { id: 'Films', cat: 'Movies', desc: 'Films' },
      { id: 'Films_Animation', cat: 'TV/Anime', desc: 'Films Animation' },
      { id: 'Animes', cat: 'TV/Anime', desc: ' Séries Animations' },
      { id: 'Series', cat: 'TV', desc: 'TV Series' },
      {
        id: 'Documentaires',
        cat: 'TV/Documentary',
        desc: 'TV Documentaires',
      },
      { id: 'Emissions', cat: 'TV', desc: 'TV Emissions' },
      { id: 'Sports', cat: 'TV/Sport', desc: 'TV Sports' },
      {
        id: 'Spectacles_Concerts',
        cat: 'TV',
        desc: 'TV Spectacles/Concerts',
      },
      { id: 'Karaoke_Video', cat: 'Audio/Video', desc: 'Karaoké Vidéo' },
      { id: 'Videos_Clips', cat: 'Audio/Video', desc: 'TV Videos Clips' },
      { id: 'Musiques', cat: 'Audio', desc: 'Audio Musiques' },
      { id: 'Karaoke', cat: 'Audio', desc: 'Audio Karaoké' },
      { id: 'Samples', cat: 'Audio', desc: 'Audio Samples' },
      { id: 'Podcasts', cat: 'Audio', desc: 'Audio Podcasts' },
      { id: 'AudioBooks', cat: 'Audio/Audiobook', desc: 'Audio Books' },
      { id: 'Windows', cat: 'PC/0day', desc: ' Applications Windows' },
      {
        id: 'APK',
        cat: 'PC/Phone-Android',
        desc: ' Applications Android',
      },
      { id: 'GPS', cat: 'PC/Phone-Other', desc: ' Applications GPS' },
      { id: 'Ebooks', cat: 'Books/Ebook', desc: 'Books Ebooks' },
      { id: 'BDs', cat: 'Books/Ebook', desc: 'Books BDs' },
      { id: 'Presse', cat: 'Books/Magazines', desc: 'Books Presse' },
      { id: 'Mangas', cat: 'Books/Comics', desc: 'Books Mangas' },
      { id: 'Comics', cat: 'Books/Comics', desc: 'Books Comics' },
      { id: 'Nintendo', cat: 'Console/NDS', desc: 'Jeux Nintendo' },
      { id: 'Microsoft', cat: 'Console/Xbox', desc: 'Jeux Microsoft' },
      { id: 'Linux', cat: 'PC/Games', desc: 'Jeux Linux' },
      { id: 'Mac', cat: 'PC/Games', desc: 'Jeux Mac' },
      { id: 'Sony', cat: 'Console/PSP', desc: 'Jeux Sony' },
      {
        id: 'Smartphone_Tablette',
        cat: 'Console',
        desc: 'Jeux Smartphone/Tablette',
      },
      {
        id: 'Retrogaming_Emulation',
        cat: 'Console',
        desc: 'Jeux Rétrogaming & Emulation',
      },
      { id: 'Formations_Video', cat: 'Other', desc: 'Formations Video' },
      {
        id: 'Formations_Logiciels',
        cat: 'Other',
        desc: 'Formations Logiciels',
      },
      { id: 'Films_X', cat: 'XXX', desc: 'XXX' },
      { id: 'Ebooks_X', cat: 'XXX', desc: 'XXX' },
      { id: 'Hentai', cat: 'XXX', desc: 'Hentai' },
      { id: 'ImagesX', cat: 'XXX', desc: 'ImagesX' },
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
      remember: 'on',
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
      description: '',
      uploader: '',
      sorting: 'created_at',
      direction: 'desc',
      qty: 100,
    },
    rows: { selector: 'div.table-responsive-line' },
    fields: {
      category: {
        selector: 'img.torrent-icon',
        attribute: 'src',
        filters: [{ name: 'regexp', args: '/img/(.+?).png' }],
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
      grabs: { selector: 'div.bouton-c' },
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
      downloadvolumefactor: {
        case: { "span.badge-extra:contains('Freeleech')": 0, '*': 1 },
      },
      uploadvolumefactor: {
        case: { "span.badge-extra:contains('Double Upload')": 2, '*': 1 },
      },
    },
  },
  source: 'jackett',
};
