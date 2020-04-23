import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'greekteam',
  name: 'Greek Team',
  language: 'el-GR',
  description: 'Greek Team is a GREEK Private site for TV / MOVIES / GENERAL',
  type: 'private',
  encoding: 'WINDOWS-1253',
  links: ['https://www.greek-team.cc/'],
  legacylinks: ['http://www.greek-team.cc/'],
  caps: {
    categorymappings: [
      {
        id: '59',
        cat: 'TV/Anime',
        desc: 'Anime DVD/BR-rip Gr Sub - Emb',
      },
      { id: '35', cat: 'TV/Anime', desc: 'Anime DVDRip/BR-rip' },
      { id: '9', cat: 'TV/Anime', desc: 'Anime HD' },
      { id: '63', cat: 'TV/Anime', desc: 'Anime HDTV' },
      { id: '57', cat: 'TV/Anime', desc: 'Anime TV' },
      { id: '10', cat: 'Books', desc: 'Books Magazines' },
      { id: '31', cat: 'Console/Other', desc: 'Games Other' },
      { id: '30', cat: 'Console/PS4', desc: 'Games PSx' },
      { id: '20', cat: 'PC/Games', desc: 'Games Windows' },
      { id: '29', cat: 'Console/Xbox', desc: 'Games XBOX' },
      { id: '11', cat: 'Other', desc: 'Misc' },
      { id: '47', cat: 'PC/Phone-Other', desc: 'Mobile' },
      { id: '27', cat: 'Movies/DVD', desc: 'Movies DVD-R' },
      { id: '53', cat: 'Movies/3D', desc: 'Movies 3D' },
      { id: '15', cat: 'Movies/UHD', desc: 'Movies 4K' },
      { id: '18', cat: 'Movies/BluRay', desc: 'Movies Bluray' },
      { id: '40', cat: 'Movies/HD', desc: 'Movies DVD-rip x264' },
      {
        id: '60',
        cat: 'Movies/HD',
        desc: 'Movies DVD-rip x264 Packages',
      },
      { id: '39', cat: 'Movies/SD', desc: 'Movies DVD/BR-rip' },
      {
        id: '14',
        cat: 'Movies/SD',
        desc: 'Movies DVD/BR-rip Gr Sub - Emb',
      },
      {
        id: '61',
        cat: 'Movies/SD',
        desc: 'Movies DVD/BR-rip XviD Packs',
      },
      { id: '12', cat: 'Movies/SD', desc: 'Movies Greek DVD/BRrip' },
      { id: '19', cat: 'Movies/HD', desc: 'Movies HD' },
      { id: '52', cat: 'Movies/HD', desc: 'Movies HD Packages' },
      { id: '48', cat: 'Audio', desc: 'Music DJ & Promos' },
      { id: '22', cat: 'Audio', desc: 'Music Foreign' },
      { id: '2', cat: 'Audio', desc: 'Music Foreign Discographies' },
      { id: '33', cat: 'Audio/Lossless', desc: 'Music Foreign Flac' },
      { id: '1', cat: 'Audio', desc: 'Music Greek' },
      { id: '21', cat: 'Audio', desc: 'Music Greek Discographies' },
      { id: '50', cat: 'Audio/Lossless', desc: 'Music Greek Flac' },
      { id: '16', cat: 'Audio/Video', desc: 'Music Videos' },
      { id: '46', cat: 'PC', desc: 'Programs Linux' },
      { id: '45', cat: 'PC', desc: 'Programs MAC' },
      { id: '23', cat: 'PC', desc: 'Programs Windows' },
      { id: '8', cat: 'TV/Documentary', desc: 'Documentaries Foreign' },
      {
        id: '25',
        cat: 'TV/Documentary',
        desc: 'Documentaries Foreign HD',
      },
      { id: '5', cat: 'TV/Documentary', desc: 'Documentaries Greek' },
      { id: '6', cat: 'TV/Sport', desc: 'TV Sports' },
      { id: '54', cat: 'TV/Sport', desc: 'TV Sports HD' },
      { id: '34', cat: 'TV/SD', desc: 'TV Foreign Series' },
      { id: '7', cat: 'TV/SD', desc: 'TV Foreign Series Emb' },
      { id: '36', cat: 'TV/HD', desc: 'TV Foreign Series HD' },
      { id: '62', cat: 'TV/HD', desc: 'TV Foreign Series HD Packages' },
      { id: '42', cat: 'TV/SD', desc: 'TV Foreign Series Packages' },
      { id: '55', cat: 'TV/SD', desc: 'TV Greek Movies' },
      { id: '49', cat: 'TV/HD', desc: 'TV Greek Movies HD' },
      { id: '26', cat: 'TV/SD', desc: 'TV Greek Other' },
      { id: '3', cat: 'TV/SD', desc: 'TV Greek Series' },
      { id: '44', cat: 'TV/SD', desc: 'TV Greek Packages' },
      { id: '4', cat: 'TV/SD', desc: 'TV Greek Shows' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
      'music-search': ['q'],
    },
  },
  login: {
    path: 'login.php',
    method: 'post',
    inputs: {
      take_login: '1',
      logout: 'no',
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [{ selector: 'td.embedded:has(h2:contains("failed"))' }],
    test: { path: 'browse.php' },
  },
  search: {
    paths: [{ path: 'browse.php' }],
    inputs: {
      $raw: '{{range .Categories}}c{{.}}=1&{{end}}',
      search: '{{ .Keywords }}',
      incldead: '1',
      blah: '0',
    },
    rows: { selector: 'table.row1 > tbody > tr:has(a.torname)' },
    fields: {
      _id: {
        selector: 'a.torname',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'id' }],
      },
      category: {
        selector: 'a[href^="browse.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      title: { selector: 'a.torname' },
      details: { selector: 'a.torname', attribute: 'href' },
      download: { text: 'download2.php?torrent={{ .Result._id }}' },
      files: { selector: 'td:has(a[href$="filelist=1"])' },
      date: {
        selector: 'td:has(a[href$="filelist=1"]) ~ td ~ td > nobr',
        filters: [
          { name: 'append', args: ' +02:00' },
          { name: 'dateparse', args: '2006-01-0215:04:05 -07:00' },
        ],
      },
      size: {
        selector: 'td:has(a[href$="filelist=1"]) ~ td ~ td ~ td ~ td',
      },
      seeders: {
        selector: 'td:has(a[href$="filelist=1"]) ~ td ~ td ~ td ~ td ~ td',
      },
      leechers: {
        selector: 'td:has(a[href$="filelist=1"]) ~ td ~ td ~ td ~ td ~ td ~ td',
      },
      downloadvolumefactor: {
        case: { 'img[src="pic/free.png"]': '0', '*': '1' },
      },
      uploadvolumefactor: { case: { '*': '1' } },
    },
  },
  source: 'jackett',
};
