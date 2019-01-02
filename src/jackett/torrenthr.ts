import { TopLevel } from '../definition-interface';
export const definition: TopLevel = {
  site: 'torrenthr',
  name: 'TorrentHR',
  description:
    'TorrentHR is a ratioless CROATIAN Private Torrent Tracker for 0DAY / GENERAL',
  language: 'hr-HR',
  type: 'private',
  encoding: 'WINDOWS-1250',
  links: ['https://www.torrenthr.org/'],
  caps: {
    categorymappings: [
      { id: '31', cat: 'TV/Anime', desc: 'Anime' },
      { id: '4', cat: 'Movies/SD', desc: 'Filmovi/SD' },
      { id: '18', cat: 'Movies/Foreign', desc: 'Crtani Filmovi' },
      { id: '5', cat: 'PC/Games', desc: 'Igre/PC' },
      { id: '7', cat: 'TV/SD', desc: 'Serije/SD' },
      { id: '1', cat: 'PC/0day', desc: 'Aplikacije' },
      { id: '14', cat: 'Movies/DVD', desc: 'Filmovi/DVD' },
      { id: '12', cat: 'TV/Documentary', desc: 'Dokumentarni Filmovi' },
      { id: '27', cat: 'Console/PS4', desc: 'Igre/PS' },
      { id: '34', cat: 'TV/HD', desc: 'Serije/HD' },
      { id: '25', cat: 'Books', desc: 'E-books' },
      { id: '17', cat: 'Movies/HD', desc: 'Filmovi/HD' },
      { id: '11', cat: 'Audio', desc: 'Koncerti/Spotovi' },
      { id: '28', cat: 'Console/Wii', desc: 'Igre/Wii' },
      { id: '30', cat: 'Books/Comics', desc: 'Stripovi' },
      { id: '38', cat: 'PC/Phone-Other', desc: 'Smartphone' },
      { id: '40', cat: 'Movies/BluRay', desc: 'Filmovi/BD' },
      { id: '3', cat: 'Audio/MP3', desc: 'Glazba/MP3' },
      { id: '26', cat: 'Console/Xbox', desc: 'Igre/Xbox' },
      { id: '10', cat: 'XXX', desc: 'XXX/SD' },
      { id: '16', cat: 'TV', desc: 'THR Packs' },
      { id: '15', cat: 'TV/Sport', desc: 'Sport' },
      { id: '29', cat: 'Audio/Lossless', desc: 'Glazba/FLAC' },
      { id: '13', cat: 'Other', desc: 'Ostalo' },
      { id: '36', cat: 'XXX', desc: 'XXX/HD' },
    ],
    modes: { search: ['q'], 'tv-search': ['q', 'season', 'ep'] },
  },
  login: {
    path: '/takelogin.php',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      ssl: 'yes',
    },
    error: [
      { selector: 'div.glavni:has(div.glavni_naslov:contains("Greška"))' },
    ],
    test: { path: '/browse.php' },
  },
  search: {
    paths: [{ path: '/browse.php' }],
    inputs: {
      $raw: '{{range .Categories}}c{{.}}=1&{{end}}',
      search: '{{ .Query.Keywords }}',
      incldead: '1',
      sort: '4',
      type: 'desc',
    },
    rows: {
      selector: 'div.glavni_txt table > tbody > tr[id^="record-"]',
    },
    fields: {
      title: {
        optional: true,
        selector: 'a[href^="details.php?id="][onmousemove]',
        attribute: 'onmousemove',
        filters: [
          { name: 'regexp', args: "return overlibImage\\('(.*)','.*'\\);" },
        ],
      },
      details: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
      },
      category: {
        selector: 'td.kategorije > a[href^="browse.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      download: {
        selector: 'a[href^="download.php?id="]',
        attribute: 'href',
      },
      files: { selector: 'td:nth-child(5)' },
      size: {
        selector: 'td:nth-child(7)',
        filters: [
          { name: 'replace', args: ['.', ''] },
          { name: 'replace', args: [',', '.'] },
        ],
      },
      grabs: {
        selector: 'td:nth-child(7)',
        filters: [
          { name: 'regexp', args: '([\\d,]+)' },
          { name: 'replace', args: [',', ''] },
        ],
      },
      seeders: { selector: 'td:nth-child(9)' },
      leechers: { selector: 'td:nth-child(10)' },
      banner: {
        optional: true,
        selector: 'a[href^="details.php?id="][onmousemove]',
        attribute: 'onmousemove',
        filters: [
          { name: 'regexp', args: "return overlibImage\\('.*','(.*)'\\);" },
        ],
      },
      downloadvolumefactor: { text: '0' },
      uploadvolumefactor: { text: '1' },
      date: {
        selector: 'td:nth-child(2) > small',
        filters: [
          { name: 'replace', args: [' u ', ' '] },
          { name: 'append', args: ' +00:00' },
          { name: 'dateparse', args: '02.01.2006 15:04:05 -07:00' },
        ],
      },
      description: {
        optional: true,
        selector: 'td:nth-child(2)',
        remove: 'a, br, small',
      },
    },
  },
};
