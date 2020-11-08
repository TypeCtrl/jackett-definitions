import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'kickasstorrent',
  name: 'KickAssTorrent',
  description:
    'Kickass Torrents (KATcr) is a well-know Public torrent site indexing thousands of torrents verified and commented by a large file-sharing community',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  followredirect: true,
  links: ['https://newkatcr.co/', 'https://kat.unblockit.app/', 'https://katcr.unblocked.rest/'],
  legacylinks: [
    'https://kickasstorrent.cr/',
    'https://katcr.to/',
    'https://kat.unblockit.one/',
    'https://katcr.black-mirror.xyz/',
    'https://katcr.unblocked.casa/',
    'https://katcr.proxyportal.fun/',
    'https://katcr.uk-unblock.xyz/',
    'https://katcr.ind-unblock.xyz/',
    'https://kat.unblockit.me/',
    'https://kat.unblockit.pw/',
    'https://katcr.co/',
    'https://kat.unblockit.id/',
    'https://kat.unblockit.win/',
    'https://kickasstorrents.unblockninja.com/',
    'https://katcr.unblocked.bar/',
    'https://katcr.proxyportal.pw/',
    'https://katcr.uk-unblock.pro/',
    'https://kat.unblockit.top/',
    'https://kat.root.yt/',
    'https://kat.unblockit.lat/',
  ],
  caps: {
    categorymappings: [
      { id: '118', cat: 'TV/Anime', desc: 'Anime - English Translated' },
      { id: '133', cat: 'TV/Anime', desc: 'Anime - Other' },
      {
        id: '144',
        cat: 'PC/Mobile-Other',
        desc: 'Applications - Handheld',
      },
      { id: '142', cat: 'PC/0day', desc: 'Applications - Linux' },
      { id: '140', cat: 'PC/Mac', desc: 'Applications - Mac' },
      { id: '131', cat: 'PC/0day', desc: 'Applications - Other' },
      { id: '139', cat: 'PC/0day', desc: 'Applications - Windows' },
      { id: '109', cat: 'Audio/Audiobook', desc: 'Books - Audio books' },
      { id: '110', cat: 'Books', desc: 'Books - Biography' },
      { id: '102', cat: 'Books', desc: 'Books - Children' },
      { id: '103', cat: 'Books/Comics', desc: 'Books - Comics' },
      { id: '113', cat: 'Books', desc: 'Books - Computers & Technology' },
      { id: '115', cat: 'Books', desc: 'Books - Cooking' },
      { id: '114', cat: 'Books', desc: 'Books - Educational' },
      { id: '107', cat: 'Books', desc: 'Books - Fiction' },
      { id: '112', cat: 'Books', desc: 'Books - History' },
      { id: '105', cat: 'Books', desc: 'Books - Magazines' },
      { id: '104', cat: 'Books', desc: 'Books - Manga' },
      { id: '108', cat: 'Books', desc: 'Books - Non-fiction' },
      { id: '132', cat: 'Books', desc: 'Books - Other' },
      { id: '111', cat: 'Books', desc: 'Books - Religion' },
      { id: '116', cat: 'Books', desc: 'Books - Sport' },
      { id: '106', cat: 'Books', desc: 'Books - Textbooks' },
      { id: '92', cat: 'Console/Other', desc: 'Games - Handheld' },
      { id: '87', cat: 'PC/Games', desc: 'Games - Linux' },
      { id: '130', cat: 'Console/Other', desc: 'Games - Other' },
      { id: '97', cat: 'Console/PS4', desc: 'Games - Playstation' },
      { id: '91', cat: 'Console/Wii', desc: 'Games - Wii' },
      { id: '85', cat: 'PC/Games', desc: 'Games - Windows' },
      { id: '90', cat: 'Console/Xbox', desc: 'Games - Xbox' },
      { id: '69', cat: 'Movies/3D', desc: 'Movies - 3D Movies' },
      { id: '80', cat: 'Movies', desc: 'Movies - Animation' },
      { id: '79', cat: 'Movies', desc: 'Movies - Asian/Bollywood' },
      { id: '148', cat: 'Movies/BluRay', desc: 'Movies - Blu-Ray Disc' },
      { id: '149', cat: 'Movies/SD', desc: 'Movies - Cam' },
      { id: '81', cat: 'Movies', desc: 'Movies - Documentary' },
      { id: '78', cat: 'Movies', desc: 'Movies - Dubbed Movies' },
      { id: '150', cat: 'Movies/DVD', desc: 'Movies - DVD ISO' },
      { id: '71', cat: 'Movies/HD', desc: 'Movies - HD' },
      { id: '128', cat: 'Movies/Other', desc: 'Movies - Other' },
      { id: '74', cat: 'Movies/SD', desc: 'Movies - Screener' },
      { id: '75', cat: 'Movies/HD', desc: 'Movies - UltraHD' },
      { id: '64', cat: 'Audio/Other', desc: 'Music - AAC' },
      { id: '67', cat: 'Audio/Other', desc: 'Music - Karaoke' },
      { id: '23', cat: 'Audio/Lossless', desc: 'Music - Lossless' },
      { id: '22', cat: 'Audio/MP3', desc: 'Music - MP3' },
      { id: '129', cat: 'Audio/Other', desc: 'Music - Other' },
      { id: '26', cat: 'Audio/Other', desc: 'Music - Radio Shows' },
      { id: '66', cat: 'Audio/Other', desc: 'Music - Soundtrack' },
      { id: '65', cat: 'Audio/Other', desc: 'Music - Transcode' },
      { id: '68', cat: 'Audio/Video', desc: 'Music - Videos/Concerts' },
      { id: '154', cat: 'Other', desc: 'Other - DazPoser' },
      { id: '138', cat: 'Other', desc: 'Other - Other' },
      { id: '136', cat: 'Other', desc: 'Other - Pictures' },
      { id: '134', cat: 'Other', desc: 'Other - Subtitles' },
      { id: '145', cat: 'Other', desc: 'Other - Tutorials' },
      { id: '153', cat: 'Other', desc: 'Other - Wordpress' },
      { id: '6', cat: 'TV/HD', desc: 'TV - Blu-Ray Disc' },
      { id: '7', cat: 'TV/Documentary', desc: 'TV - Documentary' },
      { id: '5', cat: 'TV/SD', desc: 'TV - DVD ISO' },
      { id: '41', cat: 'TV/HD', desc: 'TV - HD' },
      { id: '151', cat: 'TV/Other', desc: 'TV - Other' },
      { id: '146', cat: 'TV/Sport', desc: 'TV - Sport' },
      { id: '152', cat: 'TV/HD', desc: 'TV - Ultra HD' },
      { id: '124', cat: 'XXX', desc: 'XXX - Books' },
      { id: '125', cat: 'XXX', desc: 'XXX - Hentai' },
      { id: '123', cat: 'XXX', desc: 'XXX - Magazines' },
      { id: '122', cat: 'XXX/Imageset', desc: 'XXX - Pictures' },
      { id: '121', cat: 'XXX', desc: 'XXX - UltraHD' },
      { id: '119', cat: 'XXX', desc: 'XXX - Videos' },
      { id: '126', cat: 'XXX', desc: 'XXX - XXX Games' },
      { id: '127', cat: 'XXX', desc: 'XXX - XXX HD' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
      'music-search': ['q'],
    },
  },
  settings: [],
  search: {
    paths: [
      {
        path: '{{ if .Keywords }}search/?q={{ .Keywords }}{{ else }}v2/category/latest/1/6/{{ end }}',
      },
    ],
    rows: {
      selector: 'table.torrents_table > tbody > tr',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      title: { selector: 'a.torrents_table__torrent_title b' },
      details: {
        selector: 'a.torrents_table__torrent_title',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="magnet:?xt="]',
        attribute: 'href',
      },
      category: { text: 138 },
      'category|noappend': {
        selector: 'span.torrents_table__upload_info',
        optional: true,
        case: {
          ':has(a:contains("Anime")):contains("English Translated")': 118,
          ':has(a:contains("Anime")):contains("Other")': 133,
          ':has(a:contains("Applications")):contains("Handheld")': 144,
          ':has(a:contains("Applications")):contains("Linux")': 142,
          ':has(a:contains("Applications")):contains("Mac")': 140,
          ':has(a:contains("Applications")):contains("Other")': 131,
          ':has(a:contains("Applications")):contains("Windows")': 139,
          ':has(a:contains("Books")):contains("Audio books")': 109,
          ':has(a:contains("Books")):contains("Biography")': 110,
          ':has(a:contains("Books")):contains("Children")': 102,
          ':has(a:contains("Books")):contains("Comics")': 103,
          ':has(a:contains("Books")):contains("Computers & Technology")': 113,
          ':has(a:contains("Books")):contains("Cooking")': 115,
          ':has(a:contains("Books")):contains("Educational")': 114,
          ':has(a:contains("Books")):contains("Fiction")': 107,
          ':has(a:contains("Books")):contains("History")': 112,
          ':has(a:contains("Books")):contains("Magazines")': 105,
          ':has(a:contains("Books")):contains("Manga")': 104,
          ':has(a:contains("Books")):contains("Non-fiction")': 108,
          ':has(a:contains("Books")):contains("Other")': 132,
          ':has(a:contains("Books")):contains("Religion")': 111,
          ':has(a:contains("Books")):contains("Sport")': 116,
          ':has(a:contains("Books")):contains("Textbooks")': 106,
          ':has(a:contains("Games")):contains("Handheld")': 92,
          ':has(a:contains("Games")):contains("Linux")': 87,
          ':has(a:contains("Games")):contains("Other")': 130,
          ':has(a:contains("Games")):contains("Playstation")': 97,
          ':has(a:contains("Games")):contains("Wii")': 91,
          ':has(a:contains("Games")):contains("Windows")': 85,
          ':has(a:contains("Games")):contains("Xbox")': 90,
          ':has(a:contains("Movies")):contains("3D Movies")': 69,
          ':has(a:contains("Movies")):contains("Animation")': 80,
          ':has(a:contains("Movies")):contains("Asian/Bollywood")': 79,
          ':has(a:contains("Movies")):contains("Blu-Ray Disc")': 148,
          ':has(a:contains("Movies")):contains("Cam")': 149,
          ':has(a:contains("Movies")):contains("Documentary")': 81,
          ':has(a:contains("Movies")):contains("Dubbed Movies")': 78,
          ':has(a:contains("Movies")):contains("DVD ISO")': 150,
          ':has(a:contains("Movies")):contains("HD")': 71,
          ':has(a:contains("Movies")):contains("Other")': 128,
          ':has(a:contains("Movies")):contains("Screener")': 74,
          ':has(a:contains("Movies")):contains("UltraHD")': 75,
          ':has(a:contains("Music")):contains("AAC")': 64,
          ':has(a:contains("Music")):contains("Karaoke")': 67,
          ':has(a:contains("Music")):contains("Lossless")': 23,
          ':has(a:contains("Music")):contains("MP3")': 22,
          ':has(a:contains("Music")):contains("Other")': 129,
          ':has(a:contains("Music")):contains("Radio Shows")': 26,
          ':has(a:contains("Music")):contains("Soundtrack")': 66,
          ':has(a:contains("Music")):contains("Transcode")': 65,
          ':has(a:contains("Music")):contains("Videos/Concerts")': 68,
          ':has(a:contains("Other")):contains("DazPoser")': 154,
          ':has(a:contains("Other")):contains("Other")': 138,
          ':has(a:contains("Other")):contains("Pictures")': 136,
          ':has(a:contains("Other")):contains("Subtitles")': 134,
          ':has(a:contains("Other")):contains("Tutorials")': 145,
          ':has(a:contains("Other")):contains("Wordpress")': 153,
          ':has(a:contains("TV")):contains("Blu-Ray Disc")': 6,
          ':has(a:contains("TV")):contains("Documentary")': 7,
          ':has(a:contains("TV")):contains("DVD ISO")': 5,
          ':has(a:contains("TV")):contains("HD")': 41,
          ':has(a:contains("TV")):contains("Other")': 151,
          ':has(a:contains("TV")):contains("Sport")': 146,
          ':has(a:contains("TV")):contains("Ultra HD")': 152,
          ':has(a:contains("XXX")):contains("Books")': 124,
          ':has(a:contains("XXX")):contains("HD")': 127,
          ':has(a:contains("XXX")):contains("Hentai")': 125,
          ':has(a:contains("XXX")):contains("Magazines")': 123,
          ':has(a:contains("XXX")):contains("Pictures")': 122,
          ':has(a:contains("XXX")):contains("UltraHD")': 121,
          ':has(a:contains("XXX")):contains("Videos")': 119,
          ':has(a:contains("XXX")):contains("XXX Games")': 126,
          '*': 0,
        },
      },
      size: { selector: 'td[data-title="Size"]' },
      files: { selector: 'td[data-title="Files"]' },
      date: {
        selector: 'td[data-title="Age"][title]',
        attribute: 'title',
        filters: [
          { name: 'replace', args: ['(UTC)', '+00:00'] },
          { name: 'dateparse', args: '2006-01-02 15:04:05 -07:00' },
        ],
      },
      seeders: { selector: 'td[data-title="Seed"]' },
      leechers: { selector: 'td[data-title="Leech"]' },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
      imdb: {
        selector: 'a[href^="/find/content/ttimdb/tt"]',
        attribute: 'href',
        filters: [
          { name: 'regexp', args: '/(tt\\d+)/' },
          { name: 'append', args: 'https://www.imdb.com/title/' },
        ],
      },
    },
  },
  source: 'jackett',
};
