import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'torrentfunk',
  name: 'TorrentFunk',
  description: 'TorrentFunk is a Public torrent index',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://www.torrentfunk.com/'],
  caps: {
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
    categorymappings: [
      { id: '1', cat: 'Movies' },
      { id: '2', cat: 'Audio' },
      { id: '3', cat: 'TV' },
      { id: '4', cat: 'PC/Games' },
      { id: '5', cat: 'PC' },
      { id: '6', cat: 'TV/Anime' },
      { id: '7', cat: 'XXX' },
      { id: '8', cat: 'Other' },
      { id: '9', cat: 'Other' },
      { id: '10', cat: 'Books' },
    ],
  },
  settings: [
    {
      name: 'category',
      type: 'select',
      label: 'Category',
      default: 'all',
      options: {
        all: 'All',
        movie: 'Movies',
        music: 'Music',
        television: 'TV',
        game: 'Games',
        software: 'Software',
        anime: 'Anime',
        ebook: 'eBooks',
        adult: 'Adult',
      },
    },
    {
      name: 'verified',
      type: 'select',
      label: 'Verified',
      default: '_',
      options: { _: 'Any', on: 'Verified Only' },
    },
    {
      name: 'sort',
      type: 'select',
      label: 'Sort Desc',
      default: 'added',
      options: {
        added: 'Date',
        seeds: 'Seeders',
        peers: 'Leechers',
        size: 'Size',
        name: 'Title',
      },
    },
  ],
  download: { selector: 'a[href^="/tor/"]' },
  search: {
    paths: [
      {
        path:
          '{{.Config.category}}/torrents/{{.Keywords}}.html?v={{re_replace .Config.verified "_" ""}}&smi=&sma=&i=50&sort={{.Config.sort}}&o=desc',
      },
    ],
    rows: {
      selector: 'table.tmain tbody tr:has(a[href^="/torrent/"])',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      title: { selector: 'div a[href^="/torrent/"]' },
      category: {
        selector: 'td[class^="tv"], td[class^="tn"]',
        attribute: 'class',
        filters: [{ name: 'regexp', args: '(\\d)' }],
      },
      details: {
        selector: 'div a[href^="/torrent/"]',
        attribute: 'href',
      },
      download: {
        selector: 'div a[href^="/torrent/"]',
        attribute: 'href',
      },
      date: {
        selector: 'td:nth-child(2):contains(" ")',
        optional: true,
        filters: [{ name: 'dateparse', args: '2 Jan' }],
      },
      size: { selector: 'td:nth-child(3)' },
      seeders: { selector: 'td:nth-child(4)' },
      leechers: { selector: 'td:nth-child(5)' },
      downloadvolumefactor: { text: '0' },
      uploadvolumefactor: { text: '1' },
    },
  },
  source: 'jackett',
};