import { TopLevel } from '../definition-interface';
export const definition: TopLevel = {
  site: 'unionfansub',
  name: 'Union Fansub',
  description:
    'Union Fansub is a SPANISH Semi private torrent site focused on ANIME',
  language: 'es-ES',
  type: 'semi-private',
  encoding: 'UTF-8',
  links: ['http://torrent.unionfansub.com/'],
  caps: {
    categorymappings: [
      { id: '13', cat: 'Movies', desc: 'Animación' },
      { id: '1', cat: 'TV/Anime', desc: 'Anime' },
      { id: '2', cat: 'TV/Anime', desc: 'Anime/ISO' },
      { id: '3', cat: 'TV/Anime', desc: 'Anime/RAW' },
      { id: '10', cat: 'Audio', desc: 'BSO / OST' },
      { id: '15', cat: 'Movies', desc: 'Cine' },
      { id: '14', cat: 'TV/Documentary', desc: 'Documentales' },
      { id: '9', cat: 'TV/Anime', desc: 'Dorama' },
      { id: '4', cat: 'TV/Anime', desc: 'Hentai' },
      { id: '18', cat: 'TV/Anime', desc: 'Hentai CG' },
      { id: '6', cat: 'TV/Anime', desc: 'Hentai/ISO' },
      { id: '5', cat: 'TV/Anime', desc: 'Hentai/RAW' },
      { id: '16', cat: 'TV/Anime', desc: 'J-Music' },
      { id: '7', cat: 'TV/Anime', desc: 'Manga' },
      { id: '8', cat: 'TV/Anime', desc: 'Manga/Hentai' },
      { id: '17', cat: 'Books', desc: 'Novelas' },
      { id: '12', cat: 'TV/Other', desc: 'Otros' },
      { id: '11', cat: 'TV', desc: 'Programas' },
    ],
    modes: { search: ['q'] },
  },
  login: {
    path: 'http://foro.unionfansub.com/member.php',
    method: 'post',
    inputs: {
      quick_username: '{{ .Config.username }}',
      quick_password: '{{ .Config.password }}',
      action: 'do_login',
      url: 'http://torrent.unionfansub.com/browse.php',
      quick_login: '1',
      quick_remember: 'yes',
    },
    error: [{ selector: 'div.error' }],
    test: { path: '/', selector: 'div#statusbar' },
  },
  search: {
    path: '/browse.php',
    inputs: {
      incldead: '0',
      search: '{{ .Query.Keywords }}',
      $raw: '{{range .Categories}}&c{{.}}=1{{end}}',
    },
    rows: { selector: '.tlist tr:not(:first-child)' },
    fields: {
      title: { selector: 'td:nth-child(2) a' },
      details: { selector: 'td:nth-child(2) a', attribute: 'href' },
      category: {
        selector: 'td:nth-child(1) a',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      download: {
        selector: 'td:nth-child(2) a',
        attribute: 'href',
        filters: [
          {
            name: 'replace',
            args: ['details.php?id=', 'download.php?torrent='],
          },
          { name: 'replace', args: ['&hit=', '&aviso='] },
        ],
      },
      files: { selector: 'td:nth-last-child(8)' },
      size: {
        selector: 'td:nth-last-child(5)',
        filters: [{ name: 'replace', args: [',', '.'] }],
      },
      grabs: { selector: 'td:nth-last-child(4)' },
      seeders: { selector: 'td:nth-last-child(3)' },
      leechers: { selector: 'td:nth-last-child(2)' },
      date: {
        selector: 'td:nth-last-child(6)',
        filters: [{ name: 'timeago' }],
      },
      downloadvolumefactor: { text: '1' },
      uploadvolumefactor: { text: '1' },
    },
  },
};
