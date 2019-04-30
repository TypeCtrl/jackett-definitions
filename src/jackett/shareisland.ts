import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'shareisland',
  name: 'Shareisland',
  description: 'A general italian tracker',
  language: 'it-IT',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://shareisland.org/'],
  legacylinks: ['http://shareisland.org/', 'http://www.shareisland.org/'],
  caps: {
    categorymappings: [
      { id: '21', cat: 'Movies/DVD', desc: 'Movie DVD-9' },
      { id: '11', cat: 'Movies/DVD', desc: 'Movie DVD-5' },
      { id: '20', cat: 'Movies/SD', desc: 'Movie DVDRip' },
      { id: '45', cat: 'Movies', desc: 'Movie RIP mp4' },
      { id: '22', cat: 'Movies/UHD', desc: 'Movie 4K-Ultra-HD' },
      { id: '23', cat: 'Movies/HD', desc: 'Movie H-265' },
      { id: '24', cat: 'Movies/HD', desc: 'Movie 1080p' },
      { id: '25', cat: 'Movies/HD', desc: 'Movie 720p' },
      { id: '26', cat: 'Movies/3D', desc: 'Movie 3D-FullHD' },
      { id: '27', cat: 'Movies/BluRay', desc: 'Movie BluRay' },
      { id: '43', cat: 'Movies/SD', desc: 'Movie BDRip' },
      { id: '29', cat: 'Movies/SD', desc: 'Movie Cine News' },
      { id: '30', cat: 'TV/HD', desc: 'Serie TV HD' },
      { id: '31', cat: 'TV/SD', desc: 'Serie TV SD' },
      { id: '35', cat: 'TV/Other', desc: 'Programmi TV' },
      { id: '42', cat: 'TV/Documentary', desc: 'Documentari' },
      { id: '36', cat: 'Audio/MP3', desc: 'Music MP3' },
      { id: '37', cat: 'Audio/Lossless', desc: 'Music Flac' },
      { id: '18', cat: 'PC/Games', desc: 'Games PC' },
      { id: '19', cat: 'Console/PS3', desc: 'Games PS3' },
      { id: '33', cat: 'Console/Xbox', desc: 'Games XboX' },
      { id: '39', cat: 'Console/Wii', desc: 'Games Wii' },
      { id: '40', cat: 'Console/Other', desc: 'Games Nintendo' },
      { id: '5', cat: 'TV/Anime', desc: 'Anime' },
      { id: '16', cat: 'Books', desc: 'Edicola Quotidiani' },
      { id: '28', cat: 'Books', desc: 'Edicola Libri' },
      { id: '17', cat: 'Books', desc: 'Edicola Riviste' },
      { id: '41', cat: 'Books', desc: 'Edicola Fumetti' },
      { id: '4', cat: 'PC', desc: 'IPTV' },
      { id: '7', cat: 'PC/0day', desc: 'Applicazioni PC' },
      { id: '8', cat: 'PC/0day', desc: 'Applicazioni Linux' },
      { id: '9', cat: 'PC/Mac', desc: 'Applicazioni Mac' },
      { id: '32', cat: 'PC/Phone-Android', desc: 'Applicazioni Android' },
      { id: '34', cat: 'PC/Phone-IOS', desc: 'Applicazioni Iphone' },
      { id: '38', cat: 'Other', desc: 'V.I.P.' },
      { id: '13', cat: 'XXX', desc: 'Riviste XXX' },
      { id: '14', cat: 'XXX', desc: 'Fumetti XXX' },
      { id: '44', cat: 'XXX', desc: 'Adulti' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
  },
  login: {
    path: 'index.php?page=login',
    method: 'post',
    inputs: {
      uid: '{{ .Config.username }}',
      pwd: '{{ .Config.password }}',
    },
    error: [
      { selector: 'div.error' },
      { selector: 'body:has(h1:contains("403 Forbidden"))' },
      { selector: 'td.lista > span[style="color:#FF0000;"]' },
    ],
    test: { path: 'index.php', selector: 'a[href="logout.php"]' },
  },
  search: {
    paths: [
      { path: 'index.php', inputs: { pages: 1 } },
      { path: 'index.php', inputs: { pages: 2 } },
      { path: 'index.php', inputs: { pages: 3 } },
      { path: 'index.php', inputs: { pages: 4 } },
    ],
    inputs: {
      search: '{{ .Keywords }}',
      category: '{{range .Categories}}{{.}};{{end}}',
      page: 'torrents',
      active: 0,
      order: 3,
      by: 2,
    },
    keywordsfilters: [
      { name: 'diacritics', args: 'replace' },
      { name: 're_replace', args: ['(?i)\\bS0*(\\d+)\\b', '$1'] },
      {
        name: 're_replace',
        args: ['(?i)\\bS0*(\\d+)E0*(\\d+)\\b', '$1 $2'],
      },
    ],
    rows: {
      selector: 'table.lista > tbody > tr:has(a[href^="index.php?page=torrents&category="])',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      download: {
        selector: 'a[href^="download.php?id="]',
        attribute: 'href',
      },
      title: {
        selector: 'a[href^="index.php?page=torrent-details&id="]',
        filters: [
          { name: 're_replace', args: ['[^a-zA-Z0-9\\s]|\\.', ' '] },
          { name: 're_replace', args: ['[ ]{2,}', ' '] },
          {
            name: 're_replace',
            args: ['(?i)\\bS(\\d+)\\sE(\\d+)\\b', 'S$1E$2'],
          },
          { name: 're_replace', args: ['(?i)(\\d{2})x(\\d+)', 'S$1E$2'] },
          {
            name: 're_replace',
            args: ['(?i)\\b(\\d{1})x(\\d+)', 'S0$1E$2'],
          },
          {
            name: 're_replace',
            args: ["(?i)\\bStagion[ei]\\s?(\\d{1})\\b|\\bSeason'?s?\\s?(\\d{1})\\b", 'S0$1$2'],
          },
          {
            name: 're_replace',
            args: ["(?i)\\bStagion[ei]\\s?(\\d{2,})\\b|\\bSeason'?s?\\s?(\\d{2,})\\b", 'S$1$2'],
          },
          {
            name: 're_replace',
            args: ['(?i)\\b(?:[\\/\\|]?Episodio\\s?(\\d+)|Puntata\\s?(\\d+))', 'E$1$2'],
          },
          {
            name: 're_replace',
            args: ['(?i)\\b(?:Puntate\\s*)(\\d+)\\s?(\\d+)', 'E0$1-0$2'],
          },
          {
            name: 're_replace',
            args: ['(?i)(Serie completa|Completat?a?|in pausa)', ''],
          },
        ],
      },
      category: {
        selector: 'a[href^="index.php?page=torrents&category="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'category' }],
      },
      details: {
        selector: 'a[href^="index.php?page=torrent-details&id="]',
        attribute: 'href',
      },
      banner: {
        optional: true,
        selector: 'a[href^="index.php?page=torrent-details&id="][onmouseover]',
        attribute: 'onmouseover',
        filters: [{ name: 'regexp', args: 'src=(.+?) ' }],
      },
      size: {
        selector: 'td:has(a[href^="index.php?page=torrent-details&id="]) p:nth-of-type(2)',
        filters: [{ name: 'replace', args: ['   ', ' '] }, { name: 'regexp', args: '  (.*?)$' }],
      },
      date: {
        selector: 'td:has(a[href^="index.php?page=torrent-details&id="]) p:nth-of-type(3)',
        filters: [
          { name: 'replace', args: ['  ', ' '] },
          { name: 'regexp', args: ' (.*?)$' },
          { name: 'dateparse', args: '15:04:05 02/01/2006' },
        ],
      },
      seeders: {
        selector:
          'td:has(a[href^="index.php?page=torrent-details&id="]) p:nth-of-type(4) a:nth-of-type(1)',
        filters: null,
      },
      leechers: {
        selector:
          'td:has(a[href^="index.php?page=torrent-details&id="]) p:nth-of-type(4) a:nth-of-type(2)',
        filters: null,
      },
      grabs: {
        optional: true,
        selector:
          'td:has(a[href^="index.php?page=torrent-details&id="]) p:nth-of-type(4) a:nth-of-type(3)',
      },
      downloadvolumefactor: {
        case: {
          'img[alt="Free Leech"]': '0',
          'img[alt="Gold 100% Free"]': '0',
          'img[alt="Silver 50% Free"]': '0.5',
          'img[alt="Bronze 25% Free"]': '0.75',
          '*': '1',
        },
      },
      uploadvolumefactor: {
        optional: true,
        selector: 'img[alt$="x Upload Multiplier"]',
        attribute: 'alt',
        filters: [{ name: 'replace', args: ['x Upload Multiplier', ''] }],
      },
    },
  },
  source: 'jackett',
};
