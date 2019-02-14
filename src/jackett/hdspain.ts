import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'hdspain',
  name: 'HD-Spain',
  description: 'HD-Spain is a SPANISH site for HD content',
  language: 'es-ES',
  type: 'private',
  encoding: 'ISO-8859-1',
  links: ['https://www.hd-spain.com/'],
  caps: {
    categorymappings: [
      { id: '1', cat: 'Movies/HD', desc: 'Películas' },
      { id: '5', cat: 'Movies/HD', desc: 'Pelíc. Anim.' },
      { id: '4', cat: 'TV/HD', desc: 'Series' },
      { id: '3', cat: 'TV/HD', desc: 'Series Anim.' },
      { id: '6', cat: 'TV/Documentary', desc: 'Documentales' },
      { id: '11', cat: 'TV/Sport', desc: 'Deportes' },
      { id: '7', cat: 'Audio/Video', desc: 'Música/Espec.' },
      { id: '9', cat: 'TV/Other', desc: 'Programas TV' },
      { id: '8', cat: 'Audio/Lossless', desc: 'Audios' },
      { id: '10', cat: 'XXX/x264', desc: 'XXX' },
    ],
    modes: { search: ['q'] },
  },
  login: {
    path: 'index.php',
    method: 'form',
    inputs: {
      usuario: '{{ .Config.username }}',
      contrasena: '{{ .Config.password }}',
    },
    error: [{ selector: 'p.error' }],
    test: { path: 'index.php', selector: '.tcabecera' },
  },
  search: {
    keywordsfilters: [
      { name: 're_replace', args: ['(?i)\\bS0*(\\d+)\\b', 'T$1'] },
      { name: 're_replace', args: ['S0?(\\d{1,2})E(\\d{1,2})', '$1x$2'] },
    ],
    inputs: {
      sec: 'listado',
      ord: 9,
      b: '{{ .Keywords }}',
      ver: '0',
      relanz: '0',
      $raw: '{{range .Categories}}&cat[]={{.}}{{end}}',
    },
    rows: { selector: 'table.listatorrents tr:not(:first-child)' },
    fields: {
      category: {
        selector: 'td.categorias a',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      title: {
        selector: 'td.titulo a[id]',
        filters: [{ name: 'append', args: ' [spanish]' }],
      },
      details: { selector: 'td.titulo a', attribute: 'href' },
      size: { selector: 'td.tamano' },
      seeders: { selector: 'td.usuarios.seeds a' },
      leechers: { selector: 'td.usuarios.leechers a' },
      grabs: { selector: 'td.usuarios.completados' },
      date: {
        optional: true,
        selector: 'td.fecha',
        attribute: 'title',
        filters: [
          { name: 'replace', args: ['Lunes', 'Monday'] },
          { name: 'replace', args: ['Martes', 'Tuesday'] },
          { name: 're_replace', args: ['Miércoles', 'Wednesday'] },
          { name: 'replace', args: ['Jueves', 'Thursday'] },
          { name: 'replace', args: ['Viernes', 'Friday'] },
          { name: 're_replace', args: ['Sábado', 'Saturday'] },
          { name: 'replace', args: ['Domingo', 'Sunday'] },
          { name: 'replace', args: ['Enero', 'January'] },
          { name: 'replace', args: ['Febrero', 'February'] },
          { name: 'replace', args: ['Marzo', 'March'] },
          { name: 'replace', args: ['Abril', 'April'] },
          { name: 'replace', args: ['Mayo', 'May'] },
          { name: 'replace', args: ['Junio', 'June'] },
          { name: 'replace', args: ['Julio', 'July'] },
          { name: 'replace', args: ['Agosto', 'August'] },
          { name: 'replace', args: ['Septiembre', 'September'] },
          { name: 'replace', args: ['Octubre', 'October'] },
          { name: 'replace', args: ['Noviembre', 'November'] },
          { name: 'replace', args: ['Diciembre', 'December'] },
          { name: 'dateparse', args: 'Monday 2 January 2006, 15:04' },
        ],
      },
      download: { selector: 'td.descargar a', attribute: 'href' },
      downloadvolumefactor: {
        optional: true,
        selector: 'td.descargar a b strong',
        filters: [
          { name: 'replace', args: [' X2', ''] },
          { name: 'replace', args: ['Freeleech', '0'] },
        ],
      },
      uploadvolumefactor: {
        optional: true,
        selector: 'td.descargar a b strong',
        filters: [{ name: 'replace', args: ['Freeleech X2', '2'] }],
      },
    },
    paths: [{ path: 'index.php' }],
  },
  source: 'jackett',
};
