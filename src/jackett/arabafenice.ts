import { TopLevel } from '../definition-interface';
export const definition: TopLevel = {
  site: 'arabafenice',
  name: 'ArabaFenice',
  description:
    'Araba Fenice (Phoenix) is an ITALIAN Private site for TV / MOVIES / GENERAL',
  language: 'it-IT',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://www.arabafenice.me/'],
  legacylinks: ['http://www.arabafenice.me/'],
  caps: {
    categorymappings: [
      { id: '34', cat: 'Movies/HD', desc: '1080p HRS x264' },
      { id: '47', cat: 'Movies/HD', desc: '2160p 4k UltraHD HRS' },
      { id: '35', cat: 'TV', desc: 'Serie TV HRS' },
      { id: '36', cat: 'Movies/SD', desc: 'DVDRip HRS' },
      { id: '41', cat: 'Movies/SD', desc: 'BDRip 576p HRS' },
      { id: '39', cat: 'Movies/HD', desc: '1080p HRS x265 HEVC' },
      { id: '1', cat: 'Movies', desc: 'News Cinema' },
      { id: '2', cat: 'Movies/SD', desc: 'BD-DVDRip' },
      { id: '3', cat: 'Movies/DVD', desc: 'DVD 5' },
      { id: '5', cat: 'Movies/DVD', desc: 'DVD 9' },
      { id: '6', cat: 'Movies/BluRay', desc: 'BluRay Full' },
      { id: '4', cat: 'Movies/HD', desc: '1080p 3D x264' },
      { id: '7', cat: 'Movies/HD', desc: '1080p x264' },
      { id: '46', cat: 'Movies/HD', desc: '1080p Video Untouch' },
      { id: '44', cat: 'Movies/HD', desc: '1080p x265' },
      { id: '9', cat: 'TV/Anime', desc: 'Cartoons' },
      { id: '8', cat: 'TV/Anime', desc: '720p x264' },
      { id: '12', cat: 'TV', desc: 'He concluded seasons' },
      { id: '13', cat: 'TV', desc: 'Seasons in Onda' },
      { id: '14', cat: 'TV', desc: 'TV Show' },
      { id: '42', cat: 'TV', desc: 'Serie Tv Sub Ita' },
      { id: '15', cat: 'TV/Documentary', desc: 'documentaries' },
      { id: '33', cat: 'TV', desc: 'mp4' },
      { id: '40', cat: 'TV/HD', desc: '2160p 4K UltraHD' },
      { id: '38', cat: 'XXX', desc: 'xXx' },
      { id: '43', cat: 'Other', desc: 'Arabic for social' },
      { id: '17', cat: 'Audio', desc: 'Italian music' },
      { id: '45', cat: 'Audio', desc: 'Discography' },
      { id: '18', cat: 'Audio', desc: 'MusicaInternazionale' },
      { id: '19', cat: 'Audio', desc: 'Compilation' },
      { id: '21', cat: 'Books', desc: 'Ebook' },
      { id: '22', cat: 'Books/Comics', desc: 'Comics' },
      { id: '23', cat: 'Books', desc: 'Newsstand' },
      { id: '25', cat: 'Console/PS4', desc: 'Sony Games' },
      { id: '26', cat: 'Console/Xbox', desc: 'XboX Games' },
      { id: '27', cat: 'Console/Other', desc: 'Nintendo Games' },
      { id: '28', cat: 'PC/Games', desc: 'PC Games' },
      { id: '30', cat: 'PC/ISO', desc: 'Windows APP' },
      { id: '31', cat: 'PC/Phone-IOS', desc: 'Apple APP' },
      { id: '32', cat: 'PC/Phone-Android', desc: 'Android APP' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep', 'imdbid'],
      'movie-search': ['q', 'imdbid'],
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
      {
        selector: 'body[onLoad^="makeAlert(\'"]',
        message: {
          selector: 'body[onLoad^="makeAlert(\'"]',
          attribute: 'onLoad',
          filters: [
            { name: 'replace', args: ["makeAlert('Error' , '", ''] },
            { name: 'replace', args: ["');", ''] },
          ],
        },
      },
    ],
    test: { path: 'index.php' },
  },
  download: {
    before: {
      path: 'thanks.php',
      method: 'post',
      inputs: {
        infohash: '{{ .DownloadUri.Query.id }}',
        thanks: '1',
        rndval: '1487013827343',
      },
    },
    selector: 'a[href^="download.php?id="]',
  },
  search: {
    paths: [{ path: 'index.php' }],
    keywordsfilters: [
      { name: 'diacritics', args: 'replace' },
      { name: 're_replace', args: ['(?i)\\bS0*(\\d+)\\b', '$1'] },
      {
        name: 're_replace',
        args: ['(?i)\\bS0*(\\d+)E0*(\\d+)\\b', '$1 $2'],
      },
    ],
    inputs: {
      search:
        '{{if .Query.IMDBID}}{{ .Query.IMDBIDShort }}{{else}}{{ .Keywords }}{{end}}',
      page: 'torrents',
      category: '{{range .Categories}}{{.}};{{end}}',
      options: '{{ if .Query.IMDBID }}4{{else}}0{{end}}',
      active: '0',
    },
    rows: {
      selector:
        'table > tbody > tr > td > table.lista > tbody > tr:has(a[href^="index.php?page=torrent-details&id="])',
    },
    fields: {
      download: {
        selector: 'a[href^="index.php?page=downloadcheck&id="]',
        attribute: 'href',
      },
      title: {
        selector: 'a[onmouseover][href^="index.php?page=torrent-details&id="]',
        filters: [
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
            args: [
              "(?i)\\bStagion[ei]\\s?(\\d{1})\\b|\\bSeason'?s?\\s?(\\d{1})\\b",
              'S0$1$2',
            ],
          },
          {
            name: 're_replace',
            args: [
              "(?i)\\bStagion[ei]\\s?(\\d{2,})\\b|\\bSeason'?s?\\s?(\\d{2,})\\b",
              'S$1$2',
            ],
          },
          {
            name: 're_replace',
            args: [
              '(?i)\\b(?:[\\/\\|]?Episodio\\s?(\\d+)|Puntata\\s?(\\d+))',
              'E$1$2',
            ],
          },
          {
            name: 're_replace',
            args: ['(?i)\\b(?:Puntate\\s*)(\\d+)\\s?(\\d+)', 'E0$1-0$2'],
          },
        ],
      },
      banner: {
        selector: 'a[onmouseover][href^="index.php?page=torrent-details&id="]',
        attribute: 'onmouseover',
        filters: [{ name: 'regexp', args: 'src=(.*?) ' }],
      },
      category: {
        selector: 'a[href^="index.php?page=torrents&category="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'category' }],
      },
      details: {
        selector: 'a[onmouseover][href^="index.php?page=torrent-details&id="]',
        attribute: 'href',
      },
      size: { selector: 'td:nth-last-child(4)' },
      date: {
        selector: 'td:nth-last-child(9)',
        filters: [
          { name: 'append', args: ' +01:00' },
          { name: 'dateparse', args: '02/01/2006 -07:00' },
        ],
      },
      grabs: {
        selector: 'td:nth-last-child(6)',
        filters: [{ name: 'replace', args: ['---', '0'] }],
      },
      seeders: { selector: 'td:nth-last-child(8)' },
      leechers: { selector: 'td:nth-last-child(7)' },
      downloadvolumefactor: {
        case: {
          'img[alt="Gold 100% Free"]': '0',
          'img[alt="Silver 50% Free"]': '0.5',
          'img[alt="Bronze 25% Free"]': '0.75',
          '*': '1',
        },
      },
      uploadvolumefactor: {
        case: {
          'img[alt="2x Upload Multiplier"]': '2',
          'img[alt="3x Upload Multiplier"]': '3',
          'img[alt="4x Upload Multiplier"]': '4',
          'img[alt="5x Upload Multiplier"]': '5',
          'img[alt="6x Upload Multiplier"]': '6',
          'img[alt="7x Upload Multiplier"]': '7',
          'img[alt="8x Upload Multiplier"]': '8',
          'img[alt="9x Upload Multiplier"]': '9',
          'img[alt="10x Upload Multiplier"]': '10',
          '*': '1',
        },
      },
    },
  },
};
