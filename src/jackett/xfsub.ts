import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'xfsub',
  name: 'XFSUB',
  description: 'XFSUB is a CHINESE Public site for ANIME',
  language: 'zh-CN',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://bt.xfsub.org/', 'http://share.xfapi.top:88/'],
  settings: [],
  caps: {
    categorymappings: [
      { id: '1', cat: 'TV/Anime', desc: '动画 (Anime)' },
      { id: '2', cat: 'Books/Comics', desc: '漫画 (Manga)' },
      { id: '3', cat: 'Audio', desc: '音乐 (OST)' },
      { id: '4', cat: 'TV/Anime', desc: '片源 (AnimeRAW)' },
      { id: '5', cat: 'PC/Games', desc: '游戏 (Games)' },
      { id: '6', cat: 'Movies', desc: '电影 (Movies)' },
      { id: '7', cat: 'TV', desc: '日剧 (JP Series)' },
      { id: '8', cat: 'TV', desc: '美剧 (US Series)' },
      { id: '9', cat: 'Other', desc: '其他/综艺 (Other)' },
      { id: '10', cat: 'TV', desc: '港台综艺 (HK+TW Shows' },
      { id: '11', cat: 'TV', desc: '大陆综艺 (CH Shows)' },
      { id: '12', cat: 'TV', desc: '日韩综艺 (JP+KR Shows)' },
      { id: '13', cat: 'TV', desc: '台湾连续剧 (TW Series)' },
      { id: '14', cat: 'Movies/3D', desc: '3D立体电影 (Movies3D)' },
      { id: '15', cat: 'Books/Ebook', desc: 'Books' },
      { id: '16', cat: 'TV', desc: '国产电视剧 (CH Series)' },
      { id: '17', cat: 'TV', desc: '特摄 (Tokusatsu)' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
      'music-search': ['q'],
    },
  },
  search: {
    paths: [
      {
        path: '{{ if .Keywords }}search.php?keyword={{ .Keywords }}{{else}}{{end}}',
      },
    ],
    rows: {
      selector: 'table#listTable > tbody > tr:has(a[href^="sort-"])',
    },
    fields: {
      category: {
        selector: 'a[href^="sort-"]',
        attribute: 'href',
        filters: [{ name: 'split', args: ['-', 1] }],
      },
      title: { selector: 'a[href^="show-"]' },
      details: { selector: 'a[href^="show-"]', attribute: 'href' },
      download: { selector: 'a[href*="/torrent/"]', attribute: 'href' },
      size: { selector: 'td:nth-child(3)' },
      seeders: { selector: 'td:nth-child(4)' },
      leechers: { selector: 'td:nth-child(5)' },
      grabs: { selector: 'td:nth-child(6)' },
      date: {
        selector: 'td:last-child:not(:contains("天"))',
        optional: true,
        filters: [
          { name: 'append', args: ' +08:00' },
          { name: 'dateparse', args: '01/02 15:04 -07:00' },
        ],
      },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
