import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'estone',
  name: 'eStone',
  description: 'eStone (XiDER, BeLoad) is a HUNGARIAN Private Torrent Tracker for 0DAY / GENERAL',
  language: 'hu-HU',
  type: 'private',
  encoding: 'UTF-8',
  links: ['http://estone.cc/'],
  caps: {
    categorymappings: [
      { id: '24', cat: 'Movies/SD', desc: 'Film/XviD/Hun' },
      { id: '38', cat: 'Movies/SD', desc: 'Film/XviD/Eng' },
      { id: '51', cat: 'Movies/SD', desc: 'Film/SD/Hun' },
      { id: '52', cat: 'Movies/SD', desc: 'Film/SD/Eng' },
      { id: '25', cat: 'Movies/DVD', desc: 'Film/DVD/Hun' },
      { id: '26', cat: 'Movies/DVD', desc: 'Film/DVD/Eng' },
      { id: '42', cat: 'Movies/HD', desc: 'Film/HD/Hun' },
      { id: '50', cat: 'Movies/HD', desc: 'Film/HD/Eng' },
      { id: '36', cat: 'TV', desc: 'Sorozat/Hun' },
      { id: '47', cat: 'TV', desc: 'Sorozat/Eng' },
      { id: '41', cat: 'Audio/MP3', desc: 'Mp3/Hun' },
      { id: '40', cat: 'Audio/MP3', desc: 'Mp3/Eng' },
      { id: '35', cat: 'PC/0day', desc: 'Program' },
      { id: '28', cat: 'PC/Games', desc: 'Játék/ISO' },
      { id: '30', cat: 'PC/Games', desc: 'Játék/Rip' },
      { id: '32', cat: 'Console', desc: 'Konzol' },
      { id: '34', cat: 'PC/Phone-Other', desc: 'Mobil' },
      { id: '44', cat: 'Books', desc: 'Könyv/Hun' },
      { id: '33', cat: 'Books', desc: 'Könyv/Eng' },
      { id: '31', cat: 'Other', desc: 'Képek' },
      { id: '39', cat: 'XXX', desc: 'XXX/Film' },
      { id: '49', cat: 'XXX/Imageset', desc: 'XXX/Kép' },
    ],
    modes: { search: ['q'], 'tv-search': ['q', 'season', 'ep'] },
  },
  login: {
    path: 'login.php',
    method: 'post',
    inputs: {
      login_username: '{{ .Config.username }}',
      login_password: '{{ .Config.password }}',
    },
    error: [
      {
        selector: 'script:contains("hiba(\\"")',
        message: {
          selector: 'script:contains("hiba(\\"")',
          filters: [
            { name: 'replace', args: ['hiba("', ''] },
            { name: 'replace', args: ['");', ''] },
          ],
        },
      },
    ],
    test: { path: 'letoltes.php' },
  },
  search: {
    paths: [{ path: 'letoltes.php', method: 'get' }],
    inputs: {
      $raw: '{{range .Categories}}kat[]={{.}}&{{end}}',
      kereses_nev: '{{ .Query.Keywords }}',
    },
    rows: { selector: 'body > div[id^="torrent_"]' },
    fields: {
      title: { selector: 'a[title]', attribute: 'title' },
      category: {
        selector: 'div#kategoria_torrent > a',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      details: {
        attribute: 'id',
        filters: [{ name: 'replace', args: ['torrent_', 'adatlap.php?id='] }],
      },
      download: {
        attribute: 'id',
        filters: [{ name: 'replace', args: ['torrent_', 'download.php?id='] }],
      },
      banner: {
        selector: 'img[onmouseover]',
        attribute: 'onmouseover',
        filters: [{ name: 'regexp', args: 'borito\\("(.*?) +?",' }],
      },
      size: { selector: 'input[id^="meret_"]', attribute: 'value' },
      grabs: { selector: 'div:nth-child(8) > div' },
      seeders: { selector: 'div:nth-child(6) > div > a' },
      leechers: { selector: 'div:nth-child(7) > div > a' },
      date: {
        selector: 'div:nth-child(4)',
        filters: [
          { name: 'split', args: ['(', 0] },
          { name: 'append', args: '+01:00' },
          { name: 'dateparse', args: '2006-01-02 15:04:05 -07:00' },
        ],
      },
      downloadvolumefactor: {
        case: { 'img[src="pic/free.png"]': '0', '*': '1' },
      },
      uploadvolumefactor: {
        case: { 'img[src="pic/dupla_up.png"]': '2', '*': '1' },
      },
      description: { selector: 'div:nth-child(2)', remove: 'a' },
    },
  },
  source: 'jackett',
};
