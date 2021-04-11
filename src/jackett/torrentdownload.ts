import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'torrentdownload',
  name: 'TorrentDownload',
  description: 'TorrentDownload is a Public general torrent index',
  language: 'en-US',
  type: 'semi-private',
  encoding: 'UTF-8',
  followredirect: true,
  links: [
    'https://www.torrentdownload.info/',
    'https://torrentdownload.unblockit.club/',
    'https://torrentdownload.unblocked.monster/',
  ],
  legacylinks: [
    'https://torrentdownload.unblockit.pro/',
    'https://torrentdownload.unblockit.one/',
    'https://torrentdownload.black-mirror.xyz/',
    'https://torrentdownload.unblocked.casa/',
    'https://torrentdownload.proxyportal.fun/',
    'https://torrentdownload.uk-unblock.xyz/',
    'https://torrentdownload.ind-unblock.xyz/',
    'https://torrentdownload.unblockit.me/',
    'https://torrentdownload.unblockit.pw/',
    'https://torrentdownload.unblockit.id/',
    'https://torrentdownload.unblockit.win/',
    'https://torrentdownload.unblocked.bar/',
    'https://torrentdownload.proxyportal.pw/',
    'https://torrentdownload.uk-unblock.pro/',
    'https://torrentdownload.unblockit.top/',
    'https://torrentdownload.unblockit.lat/',
    'https://torrentdownload.unblockit.app/',
    'https://torrentdownload.unblocked.rest/',
    'https://torrentdownload.unblockit.dev/',
    'https://torrentdownload.unblockit.ltd/',
    'https://torrentdownload.unblockit.link/',
    'https://torrentdownload.unblockit.buzz/',
  ],
  caps: {
    categorymappings: [
      { id: 'Adult', cat: 'XXX', desc: 'Adult' },
      { id: 'AdultPornHDVideo', cat: 'XXX', desc: 'Adult Porn HD Video' },
      {
        id: 'AdultPornPictures',
        cat: 'XXX',
        desc: 'Adult Porn Pictures',
      },
      { id: 'AdultPornVideo', cat: 'XXX', desc: 'Adult Porn Video' },
      { id: 'Anime', cat: 'TV/Anime', desc: 'Anime' },
      {
        id: 'AnimeEnglishtranslated',
        cat: 'TV/Anime',
        desc: 'Anime English translated',
      },
      { id: 'AnimeAnimeOther', cat: 'TV/Anime', desc: 'Anime Other' },
      { id: 'Applications', cat: 'PC/0day', desc: 'Applications' },
      {
        id: 'ApplicationsAndroid',
        cat: 'PC/Mobile-Android',
        desc: 'Applications Android',
      },
      {
        id: 'AudioBooks',
        cat: 'Audio/Audiobook',
        desc: 'Books Audiobooks',
      },
      {
        id: 'AudioLossless',
        cat: 'Audio/Lossless',
        desc: 'Audio Lossless',
      },
      { id: 'BooksAcademic', cat: 'Books', desc: 'Books Academic' },
      { id: 'BooksComics', cat: 'Books/Comics', desc: 'Books Comics' },
      { id: 'BooksEbooks', cat: 'Books/Ebook', desc: 'Books Ebooks' },
      { id: 'BooksEducational', cat: 'Books', desc: 'Books Educational' },
      {
        id: 'BooksMagazines',
        cat: 'Books/Mags',
        desc: 'Books Magazines',
      },
      { id: 'BooksFiction', cat: 'Books', desc: 'Books Fiction' },
      { id: 'BooksNonfiction', cat: 'Books', desc: 'Books Nonfiction' },
      { id: 'Ebooks', cat: 'Books/Ebook', desc: 'Books Ebooks' },
      { id: 'Games', cat: 'Console', desc: 'Games' },
      { id: 'GamesWindows', cat: 'PC/Games', desc: 'Games Windows' },
      { id: 'Movies', cat: 'Movies', desc: 'Movies' },
      { id: 'MoviesAction', cat: 'Movies', desc: 'Movies Action' },
      { id: 'MoviesConcerts', cat: 'Movies', desc: 'Movies Concerts' },
      {
        id: 'MoviesDocumentary',
        cat: 'TV/Documentary',
        desc: 'Movies Documentary',
      },
      {
        id: 'MoviesDubbedMovies',
        cat: 'Movies',
        desc: 'Movies Dubbed Movies',
      },
      {
        id: 'MoviesMusicvideos',
        cat: 'Audio/Video',
        desc: 'Movies Musicvideos',
      },
      { id: 'Music', cat: 'Audio', desc: 'Music' },
      { id: 'MusicHardrock', cat: 'Audio', desc: 'Music Hardrock' },
      { id: 'MusicMp', cat: 'Audio/MP3', desc: 'Music Mp3' },
      { id: 'MusicFLAC', cat: 'Audio/Lossless', desc: 'Music FLAC' },
      {
        id: 'MusicLossless',
        cat: 'Audio/Lossless',
        desc: 'Music Lossless',
      },
      { id: 'MusicRB', cat: 'Audio', desc: 'Music R&B' },
      {
        id: 'MusicTranceHouseDance',
        cat: 'Audio',
        desc: 'Music Trance House Dance',
      },
      { id: 'Other', cat: 'Other', desc: 'Other' },
      { id: 'OtherComics', cat: 'Other', desc: 'Other Comics' },
      { id: 'OtherUnsorted', cat: 'Other', desc: 'Other Unsorted' },
      {
        id: 'PicturesPicturesOther',
        cat: 'Other/Misc',
        desc: 'Pictures Other',
      },
      {
        id: 'PicturesWallpapers',
        cat: 'Other/Misc',
        desc: 'Pictures Wallpapers',
      },
      { id: 'TV', cat: 'TV', desc: 'TV' },
      { id: 'TVEllenDeGeneres', cat: 'TV', desc: 'TV Ellen DeGeneres' },
      { id: 'TVOther', cat: 'TV/Other', desc: 'TV Other' },
      { id: 'TVshows', cat: 'TV', desc: 'TV shows' },
      { id: 'Television', cat: 'TV', desc: 'Television' },
      { id: 'VideoMobile', cat: 'Movies', desc: 'Movies Video Mobile' },
      { id: 'XXX', cat: 'XXX', desc: 'XXX' },
      { id: 'XXXVideo', cat: 'XXX', desc: 'XXX Video' },
      { id: 'XXXHDVideo', cat: 'XXX', desc: 'XXX HD Video' },
      { id: 'XXXPictures', cat: 'XXX', desc: 'XXX Pictures' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
      'music-search': ['q'],
      'book-search': ['q'],
    },
  },
  settings: [
    { name: 'cookie', type: 'text', label: 'Cookie' },
    {
      name: 'info',
      type: 'info',
      label: 'How to get the Cookie',
      default:
        "<ol><li>Access this tracker with your browser<li>Solve the challenge<li>Open the <b>DevTools</b> panel by pressing <b>F12</b><li>Select the <b>Network</b> tab<li>Click on the <b>Doc</b> button<li>Refresh the page by pressing <b>F5</b><li>Select the <b>Headers</b> tab<li>Find <b>'cookie:'</b> in the <b>Request Headers</b> section<li><b>Select</b> and <b>Copy</b> the whole cookie string <i>(everything after 'cookie: ')</i> and <b>Paste</b> here.</ol>",
    },
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site (Applies only to Search with Keywords)',
      default: 'd',
      options: { d: 'created', s: 'seeders', _: 'size' },
    },
  ],
  download: { selector: 'a[href^="magnet:?xt="]', attribute: 'href' },
  login: { method: 'cookie', test: { path: '/' } },
  search: {
    paths: [
      {
        path: '{{ if .Keywords }}search{{ re_replace .Config.sort "_" "" }}?q={{ .Keywords }}{{ else }}{{ end }}',
      },
    ],
    rows: { selector: 'table.table2 > tbody > tr:has(span.smallish)' },
    fields: {
      category: {
        selector: 'div.tt-name > span.smallish',
        filters: [{ name: 're_replace', args: ['[^A-Za-z]+', ''] }],
      },
      title: { selector: 'div.tt-name > a[href^="/"]' },
      details: {
        selector: 'div.tt-name > a[href^="/"]',
        attribute: 'href',
      },
      download: {
        selector: 'div.tt-name > a[href^="/"]',
        attribute: 'href',
      },
      date: {
        selector: 'td:nth-child(2)',
        filters: [
          { name: 'replace', args: ['right ', ''] },
          { name: 'replace', args: ['Last Month', '1 month ago'] },
          { name: 'replace', args: ['+', ' ago'] },
          { name: 'timeago' },
        ],
      },
      size: { selector: 'td:nth-child(3)' },
      seeders: { selector: 'td.tdseed' },
      leechers: { selector: 'td.tdleech' },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
