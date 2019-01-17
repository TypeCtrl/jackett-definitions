import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'torrentgalaxyorg',
  name: 'TorrentGalaxy.org',
  description: 'TorrentGalaxy.org (TGx) is a Public site for TV / MOVIES / GENERAL',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://torrentgalaxy.org/'],
  caps: {
    categorymappings: [
      { id: '28', cat: 'TV/Anime', desc: 'Anime - All' },
      { id: '20', cat: 'PC/Phone-Other', desc: 'Apps - Mobile' },
      { id: '19', cat: 'PC/Mac', desc: 'Apps - OS' },
      { id: '21', cat: 'PC', desc: 'Apps - Other' },
      { id: '18', cat: 'PC/0day', desc: 'Apps - Windows' },
      { id: '13', cat: 'Audio/Audiobook', desc: 'Books - Audiobooks' },
      { id: '12', cat: 'Books/Ebook', desc: 'Books - Ebooks' },
      { id: '14', cat: 'Books/Technical', desc: 'Books - Education' },
      { id: '15', cat: 'Books/Magazines', desc: 'Books - Magazine' },
      { id: '9', cat: 'TV/Documentary', desc: 'Documentaries - All' },
      { id: '11', cat: 'Console', desc: 'Games - Console' },
      { id: '43', cat: 'PC/Phone-Other', desc: 'Games - Mobile' },
      { id: '17', cat: 'Console/Other', desc: 'Games - Other' },
      { id: '10', cat: 'PC/Games', desc: 'Games - Windows' },
      { id: '3', cat: 'Movies/UHD', desc: 'Movies - 2K/4K UHD' },
      { id: '46', cat: 'Movies/Foreign', desc: 'Movies - Bollywood' },
      { id: '45', cat: 'Movies/Other', desc: 'Movies - CAM/TS' },
      { id: '42', cat: 'Movies/HD', desc: 'Movies - HD' },
      { id: '4', cat: 'Movies', desc: 'Movies - Packs' },
      { id: '1', cat: 'Movies/SD', desc: 'Movies - SD' },
      { id: '22', cat: 'Audio', desc: 'Music - Albums' },
      { id: '26', cat: 'Audio', desc: 'Music - Discography' },
      { id: '23', cat: 'Audio/Lossless', desc: 'Music - Lossless' },
      { id: '25', cat: 'Audio/Video', desc: 'Music - Musicvideo' },
      { id: '24', cat: 'Audio', desc: 'Music - Singles' },
      { id: '40', cat: 'Audio/Other', desc: 'Other - Other' },
      { id: '37', cat: 'Other', desc: 'Other - Pictures' },
      { id: '33', cat: 'Other', desc: 'Other - Training' },
      { id: '41', cat: 'TV/HD', desc: 'TV - Episodes HD' },
      { id: '5', cat: 'TV/SD', desc: 'TV - Episodes SD' },
      { id: '6', cat: 'TV/Other', desc: 'TV - Packs' },
      { id: '7', cat: 'TV/Sport', desc: 'TV - Sports' },
      { id: '35', cat: 'XXX', desc: 'XXX - HD' },
      { id: '47', cat: 'XXX', desc: 'XXX - Misc' },
      { id: '34', cat: 'XXX', desc: 'XXX - SD' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
  },
  settings: [],
  search: {
    inputs: {
      $raw: '{{range .Categories}}c{{.}}=1&{{end}}',
      search: '{{.Keywords}}',
      lang: '0',
      sort: 'id',
      order: 'desc',
    },
    rows: { selector: 'div[class="tgxtablerow clickable-row click"]' },
    fields: {
      title: {
        selector: 'div.tgxtablecell:nth-child(3) div a',
        attribute: 'title',
      },
      category: {
        selector: 'div.tgxtablecell a',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      details: {
        selector: 'div.tgxtablecell:nth-child(3) div a',
        attribute: 'href',
      },
      download: {
        selector: 'div.tgxtablecell:nth-child(4) a',
        attribute: 'href',
      },
      magnet: {
        selector: 'div.tgxtablecell:nth-child(4) a:nth-child(2)',
        attribute: 'href',
      },
      size: { selector: 'div.tgxtablecell:nth-child(7) span' },
      seeders: { selector: 'div.tgxtablecell:nth-child(10) span font b' },
      leechers: {
        selector: 'div.tgxtablecell:nth-child(10) span font:nth-child(2) b',
      },
      date: {
        optional: true,
        selector: 'div.tgxtablecell:nth-child(11) small:contains(":")',
        filters: [{ name: 'dateparse', args: '02/01/06 15:04' }],
      },
      downloadvolumefactor: { text: '0' },
      uploadvolumefactor: { text: '1' },
    },
    paths: [{ path: 'torrents.php' }],
  },
  source: 'jackett',
};
