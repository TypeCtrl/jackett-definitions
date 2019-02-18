import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'torrentbd',
  name: 'TorrentBD',
  description: 'A general tracker',
  language: 'en-US',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://www.torrentbd.com/'],
  legacylinks: ['http://www.torrentbd.com/torrent', 'http://www.torrentbd.com/'],
  caps: {
    categorymappings: [
      { id: '28', cat: 'TV/Anime', desc: 'Anime - All' },
      { id: '65', cat: 'PC/Phone-Android', desc: 'Apps - Android' },
      { id: '20', cat: 'PC', desc: 'Apps - Linux' },
      { id: '19', cat: 'PC/Mac', desc: 'Apps - Mac' },
      { id: '18', cat: 'PC', desc: 'Apps - PC' },
      { id: '21', cat: 'Audio', desc: 'Bangla - Audio' },
      { id: '7', cat: 'Movies', desc: 'Bangla - Movies | Natok' },
      { id: '49', cat: 'TV', desc: 'Cartoons - All' },
      { id: '9', cat: 'TV/Documentary', desc: 'Documentaries - All' },
      { id: '73', cat: 'Books/Comics', desc: 'E-Books - Comics' },
      { id: '77', cat: 'Books', desc: 'E-Books - Manga' },
      { id: '60', cat: 'PC/Games', desc: 'Games - Cracks | Patches' },
      { id: '17', cat: 'Console', desc: 'Games - Other' },
      { id: '10', cat: 'PC', desc: 'Games - PC' },
      { id: '11', cat: 'Console/PS3', desc: 'Games - PS2' },
      { id: '43', cat: 'Console/PS3', desc: 'Games - PS3' },
      { id: '12', cat: 'Console/PSP', desc: 'Games - PSP' },
      { id: '52', cat: 'PC/Games', desc: 'Games - Updates | DLC' },
      { id: '13', cat: 'Console/Xbox', desc: 'Games - Xbox' },
      { id: '14', cat: 'Console/Xbox360', desc: 'Games - Xbox360' },
      { id: '23', cat: 'Movies/BluRay', desc: 'Hindi - Blu-ray' },
      { id: '51', cat: 'Movies/SD', desc: 'Hindi - CAM | TS | TC' },
      { id: '27', cat: 'Movies/DVD', desc: 'Hindi - DVDRip' },
      { id: '58', cat: 'Movies/SD', desc: 'Hindi - DVDScr | Pre-DVD' },
      { id: '68', cat: 'Movies/SD', desc: 'Hindi - HD-Rip' },
      { id: '59', cat: 'Movies', desc: 'Hindi - Web-Rip' },
      { id: '47', cat: 'Movies/HD', desc: 'Movies - 1080p BluRay' },
      { id: '67', cat: 'Movies/3D', desc: 'Movies - 3D' },
      { id: '42', cat: 'Movies/BluRay', desc: 'Movies - 720p BluRay' },
      { id: '57', cat: 'Movies', desc: 'Movies - Animation' },
      { id: '4', cat: 'Movies/SD', desc: 'Movies - CAM | TS | TC' },
      { id: '69', cat: 'Movies', desc: 'Movies - Dual Audio' },
      { id: '1', cat: 'Movies/SD', desc: 'Movies - DVDRip' },
      { id: '56', cat: 'Movies/SD', desc: 'Movies - DVDSCR | R5 | R6' },
      { id: '46', cat: 'Movies/SD', desc: 'Movies - HD-Rip' },
      {
        id: '76',
        cat: 'Movies/BluRay',
        desc: 'Movies - Lossless BluRay',
      },
      { id: '2', cat: 'Movies', desc: 'Movies - Packs' },
      { id: '24', cat: 'Movies/SD', desc: 'Movies - SD BluRay' },
      { id: '34', cat: 'Movies', desc: 'Movies - Tamil' },
      { id: '3', cat: 'Movies', desc: 'Movies - Unrated' },
      { id: '72', cat: 'Movies', desc: 'Movies - WEB Rip' },
      { id: '55', cat: 'Movies', desc: 'Movies - WEB-DL' },
      { id: '22', cat: 'Audio', desc: 'Music - Audio' },
      { id: '64', cat: 'Audio', desc: 'Music - Concerts | Live Shows' },
      { id: '71', cat: 'Audio/Lossless', desc: 'Music - FLAC' },
      { id: '50', cat: 'Audio', desc: 'Music - OST' },
      { id: '26', cat: 'Audio', desc: 'Music - Radio' },
      { id: '25', cat: 'Audio', desc: 'Music - Video' },
      { id: '78', cat: 'Audio', desc: 'Music - Video 4K' },
      { id: '36', cat: 'Books', desc: 'Other - E-Books' },
      { id: '37', cat: 'Other', desc: 'Other - Images' },
      { id: '38', cat: 'PC/Phone-Other', desc: 'Other - Mobile Phone' },
      { id: '40', cat: 'Other', desc: 'Other - Other | Misc' },
      { id: '39', cat: 'Other', desc: 'Other - Tutorial' },
      { id: '44', cat: 'Other', desc: 'Religious  - Islam' },
      { id: '48', cat: 'TV/Sport', desc: 'Sports - All' },
      { id: '70', cat: 'TV/Sport', desc: 'Sports - Football' },
      { id: '6', cat: 'TV/Sport', desc: 'Sports - Pro Wrestling' },
      { id: '33', cat: 'Other', desc: 'Trailers - Movie | Games' },
      { id: '66', cat: 'TV', desc: 'TV - Awards | Ceremonies' },
      { id: '5', cat: 'TV/SD', desc: 'TV - Episodes' },
      { id: '61', cat: 'TV/HD', desc: 'TV - Episodes - 720p | 1080p' },
      { id: '41', cat: 'TV/SD', desc: 'TV - Packs' },
      { id: '62', cat: 'TV/HD', desc: 'TV - Packs - HD | BRRip' },
    ],
    modes: { search: ['q'], 'tv-search': ['q', 'season', 'ep'] },
  },
  login: {
    path: 'torrent/account-login.php',
    method: 'form',
    form: 'form[action="account-login.php"]',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [{ selector: 'div.row p.red-text' }],
    test: {
      path: 'torrent/torrents-search.php',
      selector: 'a[href*="logout"]',
    },
  },
  ratio: {
    path: 'torrent/torrents-search.php',
    selector: 'div.myB-content:contains("Ratio:")',
    filters: [{ name: 'regexp', args: 'Ratio: (.*?)$' }],
  },
  search: {
    paths: [{ path: 'torrent/torrents-search.php' }],
    inputs: {
      $raw: '{{range .Categories}}c{{.}}=1&{{end}}',
      search: '{{ .Query.Keywords }}',
      incldead: '1',
    },
    rows: { selector: 'tr.t-row' },
    fields: {
      download: {
        selector: 'a[href^="download.php?id="]',
        attribute: 'href',
      },
      title: { selector: 'span.torrname', attribute: 'title' },
      category: {
        selector: 'a[href^="torrents.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      details: {
        selector: 'a[onmouseover][href^="torrents-details.php?id="]',
        attribute: 'href',
      },
      comments: { selector: 'a[href*="#comments"]', attribute: 'href' },
      size: { selector: 'td:nth-child(6)' },
      grabs: { selector: 'td:nth-child(9)' },
      seeders: { selector: 'td:nth-child(7)' },
      leechers: { selector: 'td:nth-child(8)' },
      date: {
        selector: 'a[onmouseover][href^="torrents-details.php?id="]',
        attribute: 'onmouseover',
        filters: [
          {
            name: 'regexp',
            args: 'Date Added: </b>(\\d+-\\d+-\\d+)<br />',
          },
          { name: 'dateparse', args: '02-01-2006' },
        ],
      },
      downloadvolumefactor: {
        case: { 'img[title^="FreeLeech "]': '0', '*': '1' },
      },
      uploadvolumefactor: { case: { '*': '1' } },
    },
  },
  source: 'jackett',
};
