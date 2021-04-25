import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'gamestorrents',
  name: 'GamesTorrents',
  description: 'GamesTorrents is a SPANISH Public tracker for GAMES',
  language: 'es-ES',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://www.gamestorrents.nu/', 'https://gamestorrents.nocensor.space/'],
  legacylinks: ['https://www.gamestorrents.com/', 'https://www.gamestorrents.tv/'],
  caps: {
    categorymappings: [
      { id: 'juegos-pc', cat: 'PC/Games', desc: 'Games PC' },
      { id: 'juegos-psp', cat: 'Console/PSP', desc: 'Games PSP' },
      { id: 'juegos-ps3', cat: 'Console/PS3', desc: 'Games PS3' },
      { id: 'juegos-ps4', cat: 'Console/PS4', desc: 'Games PS4' },
      { id: 'juegos-ps2', cat: 'Console/PS Vita', desc: 'Games PS2' },
      { id: 'juegos-mac', cat: 'PC/Mac', desc: 'Games Mac' },
      {
        id: 'juegos-xbox360',
        cat: 'Console/Xbox360',
        desc: 'Games Xbox 360',
      },
      { id: 'juegos-wii', cat: 'Console/Wii', desc: 'Games Wii' },
      { id: 'juegos-nds', cat: 'Console/NDS', desc: 'Games NDS' },
    ],
    modes: { search: ['q'] },
  },
  settings: [],
  download: { selector: 'a#download_torrent', attribute: 'href' },
  search: {
    paths: [{ path: '/' }],
    inputs: { s: '{{ .Keywords }}' },
    rows: {
      selector: 'table.metalion > tbody > tr',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      title: { selector: 'td:nth-child(1) a' },
      details: { selector: 'td:nth-child(1) a', attribute: 'href' },
      category: {
        selector: 'td:nth-child(1) a',
        attribute: 'href',
        filters: [{ name: 'split', args: ['/', 3] }],
      },
      download: { selector: 'td:nth-child(1) a', attribute: 'href' },
      date: {
        selector: 'td:nth-child(2)',
        filters: [
          { name: 'append', args: ' +01:00' },
          { name: 'dateparse', args: '02-01-2006 -07:00' },
        ],
      },
      size: {
        selector: 'td:nth-child(3)',
        filters: [
          { name: 'replace', args: ['Undefined', '0 B'] },
          { name: 'replace', args: ['s', ''] },
        ],
      },
      description: { selector: 'td:nth-child(4)' },
      seeders: { text: 1 },
      leechers: { text: 1 },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
