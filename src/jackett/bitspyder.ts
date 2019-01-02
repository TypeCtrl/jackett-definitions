import { TopLevel } from '../definition-interface';
export const definition: TopLevel = {
  site: 'bitspyder',
  name: 'Bitspyder',
  description: 'Bitspyder is a Private site for Educational BOOKS / AUDIO',
  language: 'en-US',
  type: 'private',
  encoding: 'WINDOWS-1252',
  links: ['http://bitspyder.net/'],
  caps: {
    categorymappings: [
      { id: '61', cat: 'Books', desc: '3D' },
      { id: '69', cat: 'Books', desc: 'Anim|GFX' },
      { id: '56', cat: 'Books', desc: 'Art' },
      { id: '40', cat: 'Audio/Audiobook', desc: 'Audio Books' },
      { id: '55', cat: 'Books', desc: 'Business' },
      { id: '46', cat: 'Books', desc: 'Career' },
      { id: '2', cat: 'Books', desc: 'CBTs' },
      { id: '39', cat: 'Books', desc: 'Cert QA' },
      { id: '63', cat: 'Books', desc: 'College' },
      { id: '53', cat: 'Books', desc: 'Cooking' },
      { id: '42', cat: 'Books', desc: 'Documentary' },
      { id: '37', cat: 'Books', desc: 'e-Books' },
      { id: '65', cat: 'Books', desc: 'Engineering' },
      { id: '54', cat: 'Books', desc: 'Health-Fitness' },
      { id: '64', cat: 'Books', desc: 'Kids' },
      { id: '47', cat: 'Books', desc: 'Languages' },
      { id: '49', cat: 'Books', desc: 'Linux CBTs' },
      { id: '43', cat: 'Books', desc: 'Lynda.com' },
      { id: '57', cat: 'Books/Magazines', desc: 'Magazines' },
      { id: '71', cat: 'Books', desc: 'Magic' },
      { id: '60', cat: 'Books', desc: 'Medical' },
      { id: '44', cat: 'Books', desc: 'Misc Learning' },
      { id: '51', cat: 'Books', desc: 'Music Learning' },
      { id: '41', cat: 'Books', desc: 'Others' },
      { id: '52', cat: 'Books', desc: 'Photography' },
      { id: '35', cat: 'Books', desc: "PPT 'n Docs" },
      { id: '38', cat: 'Books', desc: 'Religion' },
      { id: '68', cat: 'Books', desc: 'Self Growth' },
      { id: '72', cat: 'Books', desc: 'Templates' },
      { id: '58', cat: 'Books', desc: 'Total Training' },
      { id: '45', cat: 'Books', desc: 'Trainsignal' },
      { id: '59', cat: 'Books', desc: 'VTC' },
    ],
    modes: { search: ['q'], 'tv-search': ['q', 'season', 'ep'] },
  },
  login: {
    path: 'processid.php',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [{ selector: 'td.msg_info > font > b' }],
    test: { path: '/browse.php' },
  },
  search: {
    paths: [{ path: '/browse.php', method: 'post' }],
    inputs: { search: '{{ .Query.Keywords }}', incldead: '1' },
    rows: {
      selector: 'table > tbody > tr[class]',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      title: { selector: 'a[href^="details.php?id="]' },
      category: {
        selector: 'a[href^="browse.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      details: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
        filters: [
          { name: 'replace', args: ['details.php?id=', 'download.php/'] },
          { name: 'replace', args: ['&hit=1', '/dummy.torrent'] },
        ],
      },
      size: {
        selector:
          'td.rowcol:nth-child(6):has(br), font:contains("Size:") + font',
      },
      files: { selector: 'a[href*="&filelist=1"]' },
      grabs: {
        selector: 'td.rowcol:nth-child(7):has(br), td.clear:nth-child(4)',
        filters: [{ name: 'regexp', args: '([\\d,]+)' }],
      },
      seeders: { selector: 'td.rowcol:nth-last-child(3)' },
      leechers: { selector: 'td.rowcol:nth-last-child(2)' },
      date: {
        optional: true,
        selector: 'a[title^="Upploaded at"]',
        attribute: 'title',
        filters: [
          { name: 'replace', args: ['Upploaded at - ', ''] },
          { name: 'append', args: ' +00:00' },
          { name: 'dateparse', args: '2006-01-02 15:04:05 -07:00' },
        ],
      },
      downloadvolumefactor: { case: { '*': '1' } },
      uploadvolumefactor: { case: { '*': '1' } },
      description: { optional: true, selector: 'font[color="#990000"]' },
    },
  },
};
