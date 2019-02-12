import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'aniRena',
  name: 'AniRena',
  description:
    'AniRena is a Public torrent tracker for the latest anime and Japanese related torrents',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://www.anirena.com/'],
  settings: [],
  caps: {
    categorymappings: [
      { id: '1', cat: 'TV/Anime', desc: 'Raw Animes' },
      { id: '2', cat: 'TV/Anime', desc: 'Anime' },
      { id: '3', cat: 'TV/Anime', desc: 'Hentai' },
      { id: '4', cat: 'TV/Anime', desc: 'Drama' },
      { id: '9', cat: 'TV/Anime', desc: 'Anime Music Videos' },
      { id: '10', cat: 'TV/Anime', desc: 'Non-English' },
      { id: '5', cat: 'PC/ISO', desc: 'DVD/ISO' },
      { id: '6', cat: 'PC', desc: 'Hentai-Game' },
      { id: '7', cat: 'Books', desc: 'Manga' },
      { id: '8', cat: 'Audio', desc: 'Audio' },
      { id: '11', cat: 'Other', desc: 'Other' },
    ],
    modes: { search: ['q'], 'tv-search': ['q', 'season', 'ep'] },
  },
  search: {
    paths: [{ path: '{{if .Keywords}}?s={{ .Keywords}}{{else}}{{end}}' }],
    rows: { selector: 'table tbody tr:has(td.torrents_small_type_data1)' },
    fields: {
      title: { selector: '.torrents_small_info_data1 div' },
      download: {
        selector: '.torrents_small_info_data2 a[title="Download Torrent"]',
        attribute: 'href',
      },
      magnet: {
        selector: '.torrents_small_info_data2 a[title="Magnet Link"]',
        attribute: 'href',
      },
      date: { text: 'now' },
      size: { selector: '.torrents_small_size_data1' },
      seeders: { selector: '.torrents_small_seeders_data1 b big' },
      leechers: { selector: '.torrents_small_leechers_data1 b big' },
      grabs: { selector: '.torrents_small_downloads_data1' },
      category: {
        selector: '.torrents_small_type_data1 img',
        attribute: 'src',
        case: {
          '[src="./styles/tracker/imageset/cat_raw_small.png"]': '1',
          '[src="./styles/tracker/imageset/cat_anime_small.png"]': '2',
          '[src="./styles/tracker/imageset/cat_hentai_small.png"]': '3',
          '[src="./styles/tracker/imageset/cat_drama_small.png"]': '4',
          '[src="./styles/tracker/imageset/cat_dvd_small.png"]': '5',
          '[src="./styles/tracker/imageset/cat_hgame2_small.png"]': '6',
          '[src="./styles/tracker/imageset/cat_manga_small.png"]': '7',
          '[src="./styles/tracker/imageset/cat_music_small.png"]': '8',
          '[src="./styles/tracker/imageset/cat_musicvid_small.png"]': '9',
          '[src="./styles/tracker/imageset/cat_noneng_small.png"]': '10',
          '[src="./styles/tracker/imageset/cat_other_small.png"]': '11',
        },
      },
      downloadvolumefactor: { text: '0' },
      uploadvolumefactor: { text: '1' },
    },
  },
  source: 'jackett',
};
