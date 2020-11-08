import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'shokweb',
  name: 'shokweb',
  description: 'shokweb is a CHINESE Public tracker',
  language: 'zh-CN',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://shokweb.com/'],
  certificates: ['ba7fb6290a9d7d821e73efb0eac4ed95a7fd2d11'],
  settings: [],
  caps: {
    categorymappings: [
      { id: '影视', cat: 'Movies', desc: '影视(Movie)' },
      {
        id: '安装包',
        cat: 'PC/ISO',
        desc: '安装包(Installation Package)',
      },
      { id: '其他', cat: 'Other', desc: '其他(Other)' },
      { id: '音乐', cat: 'Audio', desc: '音乐(Music)' },
      { id: '文档书籍', cat: 'Books', desc: '文档书籍(Documents Book)' },
      { id: '压缩文件', cat: 'PC', desc: '压缩文件(Compressed Files)' },
      { id: '图像', cat: 'Other/Misc', desc: '图像(Image)' },
    ],
    modes: {
      search: ['q'],
      'movie-search': ['q'],
      'music-search': ['q'],
      'book-search': ['q'],
    },
  },
  search: {
    paths: [{ path: '{{ if .Keywords }}/search/{{ .Keywords }}{{ else }}{{ end }}' }],
    rows: {
      selector: 'div:has(a[href^="magnet:?"])',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      category: { selector: 'p:has(img) span:nth-last-child(4)' },
      title: { selector: 'a[href^="/post/"]' },
      details: { selector: 'a[href^="/post/"]', attribute: 'href' },
      download: { selector: 'a[href^="magnet:?"]', attribute: 'href' },
      size: { selector: 'p:has(img) span:nth-last-child(2)' },
      grabs: { selector: 'p:has(img) span:nth-last-child(5)' },
      date: {
        selector: 'p:has(img) span:nth-last-child(1)',
        filters: [
          { name: 'replace', args: ['时', ' hours'] },
          { name: 'replace', args: ['分', ' minutes'] },
          { name: 'replace', args: ['天', ' days'] },
          { name: 'replace', args: ['年', ' year'] },
          { name: 'replace', args: ['月', ' months'] },
          { name: 'replace', args: ['前', ' ago'] },
        ],
      },
      seeders: { text: 1 },
      leechers: { text: 1 },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
