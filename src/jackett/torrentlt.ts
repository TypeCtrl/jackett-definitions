import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'torrentlt',
  name: 'Torrent.LT',
  description: 'Torrent.LT is Private site for TV / MOVIES / GENERAL',
  language: 'lt-LT',
  type: 'private',
  encoding: 'UTF-8',
  links: ['http://www.torrent.ai/'],
  caps: {
    categorymappings: [
      { id: '27', cat: 'TV', desc: 'Animacija' },
      { id: '35', cat: 'TV/Anime', desc: 'Anime' },
      { id: '31', cat: 'Movies/DVD', desc: 'Filmai / DVD' },
      { id: '33', cat: 'Movies', desc: 'Filmai / LTU' },
      { id: '43', cat: 'Movies', desc: 'Filmai / LT-Subs' },
      { id: '34', cat: 'Movies', desc: 'Filmai / Eng' },
      { id: '32', cat: 'Movies', desc: 'Filmai / Rus' },
      { id: '1', cat: 'PC/Games', desc: 'Žaidimai / PC' },
      { id: '50', cat: 'Console/PS4', desc: 'Žaidimai / PlayStation' },
      { id: '51', cat: 'Console/Xbox360', desc: 'Žaidimai / XBOX-360' },
      { id: '73', cat: 'Console', desc: 'Žaidimai / Priedai' },
      { id: '36', cat: 'Console/Other', desc: 'Žaidimai / Kita' },
      { id: '52', cat: 'Movies', desc: 'HD / Animacija' },
      { id: '53', cat: 'TV/Documentary', desc: 'HD / Dokumentika' },
      { id: '54', cat: 'Movies/HD', desc: 'HD / Filmai' },
      { id: '55', cat: 'Audio/Video', desc: 'HD / Music videos' },
      { id: '56', cat: 'TV/HD', desc: 'HD / Serialai' },
      { id: '72', cat: 'Movies/3D', desc: 'HD / 3D' },
      { id: '74', cat: 'TV/HD', desc: 'HD / LT' },
      { id: '37', cat: 'TV/HD', desc: 'HD / Kita' },
      { id: '57', cat: 'Audio/MP3', desc: 'Muzika / VA' },
      { id: '26', cat: 'Audio', desc: 'Muzika / DJ Sets' },
      { id: '6', cat: 'Audio', desc: 'Muzika / Albumai' },
      { id: '29', cat: 'Audio/Video', desc: 'Muzika / Video Klipai' },
      { id: '42', cat: 'TV', desc: 'Serialai / Eng' },
      { id: '58', cat: 'TV', desc: 'Serialai / LTU' },
      { id: '59', cat: 'TV', desc: 'Serialai / Rus' },
      { id: '45', cat: 'TV', desc: 'Serialai / Animacija' },
      { id: '10', cat: 'PC/0day', desc: 'Soft / PC' },
      { id: '44', cat: 'PC/Mac', desc: 'Soft / MAC' },
      { id: '61', cat: 'PC', desc: 'Soft / PDA' },
      { id: '75', cat: 'PC/Phone-Other', desc: 'Soft / Kita' },
      { id: '62', cat: 'TV/Sport', desc: 'Sport / Basketball' },
      { id: '40', cat: 'TV/Sport', desc: 'Sport / Kita' },
      { id: '63', cat: 'TV/Sport', desc: 'Sport / Cars' },
      { id: '65', cat: 'TV/Sport', desc: 'Sport / Fights' },
      { id: '66', cat: 'TV/Sport', desc: 'Sport / Football' },
      { id: '69', cat: 'TV', desc: 'TV / LT' },
      { id: '70', cat: 'TV', desc: 'TV / RU' },
      { id: '39', cat: 'TV/Documentary', desc: 'TV / Dokumentika' },
      { id: '28', cat: 'TV', desc: 'TV / Kita' },
      { id: '21', cat: 'XXX', desc: 'pr0n' },
      { id: '71', cat: 'XXX/Packs', desc: 'pr0n / pack' },
      { id: '30', cat: 'Other', desc: 'Kita' },
      { id: '41', cat: 'Books', desc: 'E-Books' },
      { id: '76', cat: 'TV', desc: 'Animacija / LT' },
    ],
    modes: { search: ['q'], 'tv-search': ['q', 'season', 'ep'] },
  },
  login: {
    path: 'lt/account-login.php',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [{ selector: 'p.error_text' }],
    test: { path: 'lt/torrents.php' },
  },
  search: {
    paths: [{ path: 'lt/torrents.php' }],
    inputs: {
      $raw: '{{range .Categories}}cats[]={{.}}&{{end}}',
      search: '{{ .Keywords }}',
    },
    keywordsfilters: [{ name: 'replace', args: ['.', ' '] }],
    rows: {
      selector: 'table> tbody > tr[class^="torrents_table_row_"]',
      filters: [{ name: 'andmatch', args: 50 }],
    },
    fields: {
      title: { selector: 'td[class$="torrent_info"] a' },
      details: {
        selector: 'td[class$="torrent_info"] a',
        attribute: 'href',
      },
      banner: {
        selector: 'td[class$="torrent_info"] a',
        attribute: 'data-poster-preview',
      },
      category: {
        selector: 'td[class^="torrent_cat_image"] a',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cats[]' }],
      },
      seeders: { selector: 'td span.torrent_seeders' },
      leechers: { selector: 'td span.torrent_leechers' },
      download: { selector: 'td a.torrent_size', attribute: 'href' },
      size: { selector: 'td a.torrent_size' },
      downloadvolumefactor: { text: 1 },
      uploadvolumefactor: { text: 1 },
      date: {
        selector: 'td[class$="torrent_info"] span',
        remove: 'div, i',
        filters: [{ name: 'dateparse', args: '2006-01-02 15:04' }],
      },
    },
  },
  source: 'jackett',
};
