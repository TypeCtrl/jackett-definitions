import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'trezzor',
  name: 'Trezzor',
  description: 'Trezzor is a CZECH Private site for TV / MOVIES / GENERAL',
  language: 'cs-CZ',
  type: 'private',
  encoding: 'WINDOWS-1250',
  links: ['https://tracker.czech-server.com/'],
  caps: {
    categorymappings: [
      { id: '1', cat: 'Movies/DVD', desc: 'DVD CZ/SK dabing' },
      { id: '2', cat: 'Movies/DVD', desc: 'DVD CZ/SK titulky' },
      { id: '3', cat: 'Audio/Video', desc: 'DVD Hudební video' },
      { id: '4', cat: 'Movies/SD', desc: 'XviD, DivX CZ/SK dabing' },
      { id: '13', cat: 'Audio', desc: 'Hudba CZ/SK scéna' },
      { id: '24', cat: 'Audio', desc: 'Mluv. slovo CZ/SK dabing' },
      { id: '10', cat: 'Audio/Other', desc: 'DTS audio' },
      { id: '14', cat: 'PC/Games', desc: 'Hry' },
      { id: '17', cat: 'PC', desc: 'Programy' },
      { id: '14', cat: 'PC', desc: 'Cestiny,patche,upgrady' },
      { id: '18', cat: 'Books', desc: 'Knihy CZ/SK lokalizace' },
      { id: '18', cat: 'Books/Comics', desc: 'Komiks CZ/SK lokalizace' },
      { id: '16', cat: 'Other', desc: 'Foto,obrázky' },
      { id: '20', cat: 'Console', desc: 'Konzole' },
      { id: '21', cat: 'PC/Phone-Other', desc: 'Mobilmánia' },
      { id: '22', cat: 'Other', desc: 'Ostatní CZ/SK scéna' },
      { id: '23', cat: 'Other', desc: 'Na prani non CZ/SK' },
      { id: '27', cat: 'Other', desc: 'TreZzoR rls' },
      { id: '35', cat: 'Audio/Video', desc: 'HDTV Hudební video' },
      { id: '36', cat: 'Movies/SD', desc: 'XviD, DivX CZ/SK titulky' },
      { id: '31', cat: 'Movies/HD', desc: 'HDTV CZ/SK Dabing' },
      { id: '33', cat: 'Movies/HD', desc: 'HDTV CZ/SK Titulky' },
      { id: '39', cat: 'Movies/3D', desc: '3D HDTV CZ/SK Dabing' },
      { id: '40', cat: 'Movies/3D', desc: '3D HDTV CZ/SK Titulky' },
      { id: '5', cat: 'Movies/SD', desc: 'TV-rip CZ/SK dabing' },
      { id: '41', cat: 'TV/HD', desc: 'HD Seriály CZ/SK dabing' },
      { id: '42', cat: 'TV/HD', desc: 'HD Seriály CZ/SK titulky' },
      { id: '7', cat: 'TV/SD', desc: 'Seriály CZ/SK dabing' },
      { id: '37', cat: 'TV/SD', desc: 'Seriály CZ/SK titulky' },
      { id: '9', cat: 'XXX/XviD', desc: 'XXX CZ/SK dabing' },
      { id: '32', cat: 'XXX/x264', desc: 'XXX HD CZ/SK dabing' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
      'music-search': ['q'],
      'book-search': ['q'],
    },
  },
  login: {
    path: 'prihlasenie.php',
    method: 'form',
    form: 'form[action^="prihlasenie.php"]',
    inputs: {
      uid: '{{ .Config.username }}',
      pwd: '{{ .Config.password }}',
    },
    error: [{ selector: 'div > font:contains("V pripade problemov kontaktujte")' }],
    test: { path: 'torrents.php' },
  },
  search: {
    paths: [{ path: 'torrents.php' }],
    keywordsfilters: [{ name: 're_replace', args: ['S(\\d{2})E(\\d{2})', '$1 $2'] }],
    inputs: { search: '{{ .Keywords }}', category: '0', active: '1' },
    rows: { selector: 'tr.torrenty_lista' },
    fields: {
      title: {
        selector: 'a[href^="details.php?slug="]',
        attribute: 'title',
        filters: [
          { name: 'replace', args: ['Zobrazit detaily: ', ''] },
          { name: 're_replace', args: ['.*? / ', ''] },
          { name: 'diacritics', args: 'replace' },
        ],
      },
      category: {
        selector: 'a[href^="torrents.php?onlycat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'onlycat' }],
      },
      details: {
        selector: 'a[href^="details.php?slug="]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="download.php?slug="]',
        attribute: 'href',
      },
      size: { selector: 'td:nth-child(7)' },
      date: {
        selector: 'td:nth-child(6)',
        filters: [
          { name: 'append', args: ' +02:00' },
          { name: 'dateparse', args: '2/1/2006 15:04 -07:00' },
        ],
      },
      seeders: { selector: 'td:nth-child(8) a' },
      leechers: { selector: 'td:nth-child(9) a' },
      grabs: {
        selector: 'td:nth-child(10)',
        filters: [{ name: 'replace', args: ['---', '0'] }],
      },
      downloadvolumefactor: { case: { '*': '1' } },
      uploadvolumefactor: { case: { '*': '1' } },
    },
  },
  source: 'jackett',
};
