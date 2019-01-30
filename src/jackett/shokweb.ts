import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'shokweb',
  name: 'shokweb',
  description: 'shokweb is a CHINESE Public tracker',
  language: 'zh-CN',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://shokweb.com/'],
  certificates: ['ba7fb6290a9d7d821e73efb0eac4ed95a7fd2d11'],
  settings: [],
  caps: {
    modes: { search: ['q'] },
    categorymappings: [
      { id: '影视', cat: 'Movies' },
      { id: '安装包', cat: 'PC/ISO' },
      { id: '其他', cat: 'Other' },
      { id: '音乐', cat: 'Audio' },
      { id: '文档书籍', cat: 'Books' },
      { id: '压缩文件', cat: 'PC' },
      { id: '图像', cat: 'Other/Misc' },
    ],
  },
  search: {
    paths: [{ path: '{{if .Keywords}}{{.Keywords}}{{else}}{{end}}' }],
    rows: {
      selector: 'div:has(a[href^="magnet:?"])',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      title: { selector: 'a[href^="/post/"]' },
      category: { selector: 'p:has(img) span:nth-last-child(4)' },
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
      seeders: { text: '1' },
      leechers: { text: '1' },
      downloadvolumefactor: { text: '0' },
      uploadvolumefactor: { text: '1' },
    },
  },
  source: 'jackett',
};
