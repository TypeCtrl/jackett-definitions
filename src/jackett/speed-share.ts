import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'speed-share',
  name: 'Speed-Share',
  description: 'Speed-Share is a Brazilian Private site for TV / MOVIES / GENERAL',
  language: 'pt-BR',
  type: 'private',
  encoding: 'UTF-8',
  links: ['http://speed-share.org/'],
  caps: {
    categorymappings: [
      { id: '239', cat: 'XXX', desc: 'Adulto: HD 4K' },
      { id: '187', cat: 'XXX', desc: 'Adulto: HD' },
      { id: '62', cat: 'XXX/DVD', desc: 'Adulto: DVD' },
      { id: '63', cat: 'XXX', desc: 'Adulto: Rip' },
      { id: '248', cat: 'XXX', desc: 'Adulto: TV 4K' },
      { id: '141', cat: 'XXX', desc: 'Adulto: TV' },
      { id: '249', cat: 'XXX', desc: 'Adulto: WEB 4K' },
      { id: '225', cat: 'XXX', desc: 'Adulto: WEB' },
      { id: '226', cat: 'XXX', desc: 'Adulto: Autorado' },
      { id: '68', cat: 'XXX', desc: 'Adulto: Qualidade Inferior' },
      { id: '101', cat: 'XXX/Imageset', desc: 'Adulto : Revistas' },
      { id: '207', cat: 'XXX/Other', desc: 'Adulto: Jogos' },
      { id: '240', cat: 'TV/Anime', desc: 'Animês: HD 4K' },
      { id: '189', cat: 'TV/Anime', desc: 'Animês: HD' },
      { id: '102', cat: 'TV/Anime', desc: 'Animês: DVD' },
      { id: '103', cat: 'TV/Anime', desc: 'Animês: Rip' },
      { id: '250', cat: 'TV/Anime', desc: 'Animês: TV 4K' },
      { id: '144', cat: 'TV/Anime', desc: 'Animês: TV' },
      { id: '251', cat: 'TV/Anime', desc: 'Animês: WEB 4K' },
      { id: '227', cat: 'TV/Anime', desc: 'Animês: WEB' },
      { id: '228', cat: 'TV/Anime', desc: 'Animês: Autorado' },
      { id: '191', cat: 'TV/Anime', desc: 'Animês: Qualidade Inferior' },
      { id: '167', cat: 'Other', desc: 'Celular: Jogos' },
      { id: '168', cat: 'Other', desc: 'Celular: Programa' },
      {
        id: '151',
        cat: 'Books/Ebook',
        desc: 'Curso e Apostila: Apostila',
      },
      { id: '152', cat: 'Other', desc: 'Curso e Apostila: Videoaula' },
      { id: '212', cat: 'Other/Misc', desc: 'Raridades: Raridades' },
      { id: '241', cat: 'TV/Other', desc: 'Desenhos: HD 4K' },
      { id: '204', cat: 'TV/Other', desc: 'Desenhos: HD' },
      { id: '169', cat: 'TV/Other', desc: 'Desenhos: DVD' },
      { id: '171', cat: 'TV/Other', desc: 'Desenhos: Rip' },
      { id: '252', cat: 'TV/Other', desc: 'Desenhos: TV 4K' },
      { id: '146', cat: 'TV/Other', desc: 'Desenhos: TV' },
      { id: '253', cat: 'TV/Other', desc: 'Desenhos: WEB 4K' },
      { id: '229', cat: 'TV/Other', desc: 'Desenhos: WEB' },
      { id: '230', cat: 'TV/Other', desc: 'Desenhos: Autorado' },
      {
        id: '205',
        cat: 'TV/Other',
        desc: 'Desenhos: Qualidade Inferior',
      },
      { id: '242', cat: 'TV/Documentary', desc: 'Documentários: HD 4K' },
      { id: '130', cat: 'TV/Documentary', desc: 'Documentários: HD' },
      { id: '203', cat: 'TV/Documentary', desc: 'Documentários: DVD' },
      { id: '99', cat: 'TV/Documentary', desc: 'Documentários: Rip' },
      { id: '254', cat: 'TV/Documentary', desc: 'Documentários: TV 4K' },
      { id: '147', cat: 'TV/Documentary', desc: 'Documentários: TV' },
      { id: '255', cat: 'TV/Documentary', desc: 'Documentários: WEB 4K' },
      { id: '223', cat: 'TV/Documentary', desc: 'Documentários: WEB' },
      {
        id: '224',
        cat: 'TV/Documentary',
        desc: 'Documentários: Autorado',
      },
      {
        id: '195',
        cat: 'TV/Documentary',
        desc: 'Documentários: Outra Qualidade',
      },
      { id: '243', cat: 'TV/Sport', desc: 'Esportes: HD 4K' },
      { id: '232', cat: 'TV/Sport', desc: 'Esportes: HD' },
      { id: '233', cat: 'TV/Sport', desc: 'Esportes: DVD' },
      { id: '235', cat: 'TV/Sport', desc: 'Esportes: Rip' },
      { id: '256', cat: 'TV/Sport', desc: 'Esportes: TV 4K' },
      { id: '180', cat: 'TV/Sport', desc: 'Esportes: TV' },
      { id: '257', cat: 'TV/Sport', desc: 'Esportes: WEB 4K' },
      { id: '234', cat: 'TV/Sport', desc: 'Esportes: WEB' },
      { id: '124', cat: 'TV/Sport', desc: 'Esportes: Outra Qualidade' },
      { id: '244', cat: 'Movies/HD', desc: 'Filmes: HD 4K' },
      { id: '214', cat: 'Movies/HD', desc: 'Filmes: HD' },
      { id: '215', cat: 'Movies/DVD', desc: 'Filmes: DVD' },
      { id: '218', cat: 'Movies', desc: 'Filmes: Rip' },
      { id: '258', cat: 'Movies', desc: 'Filmes: TV 4K' },
      { id: '217', cat: 'Movies', desc: 'Filmes: TV' },
      { id: '259', cat: 'Movies/WEBDL', desc: 'Filmes: WEB 4K' },
      { id: '216', cat: 'Movies/WEBDL', desc: 'Filmes: WEB' },
      { id: '220', cat: 'Movies', desc: 'Filmes: Autorado' },
      { id: '219', cat: 'Movies/SD', desc: 'Filmes: Qualidade Inferior' },
      { id: '64', cat: 'PC/Games', desc: 'Jogos: PC' },
      { id: '47', cat: 'Console', desc: 'Jogos: PS1' },
      { id: '48', cat: 'Console', desc: 'Jogos: PS2' },
      { id: '49', cat: 'Console/PS3', desc: 'Jogos: PS3' },
      { id: '236', cat: 'Console/PS4', desc: 'Jogos: PS4' },
      { id: '52', cat: 'PC/Games', desc: 'Jogos: Emuladores' },
      { id: '50', cat: 'Console/PSP', desc: 'Jogos: PSP' },
      { id: '54', cat: 'Console/NDS', desc: 'Jogos: Nintendo DS' },
      { id: '55', cat: 'Console/Wii', desc: 'Jogos: Wii' },
      { id: '57', cat: 'Console/Xbox360', desc: 'Jogos: Xbox 360' },
      { id: '237', cat: 'Console/PS Vita', desc: 'Jogos: PS Vita' },
      { id: '238', cat: 'Console/XboxOne', desc: 'Jogos: Xbox One' },
      { id: '53', cat: 'Console/Other', desc: 'Jogos: Outros' },
      {
        id: '131',
        cat: 'Books/Magazines',
        desc: 'Livro e Revista: Revistas',
      },
      {
        id: '149',
        cat: 'Books/Comics',
        desc: 'Livro e Revista: Mangá e HQ',
      },
      {
        id: '184',
        cat: 'Books/Ebook',
        desc: 'Livro e Revista: Ebook e Audiobook',
      },
      { id: '135', cat: 'Audio', desc: 'Música: Discografia' },
      { id: '112', cat: 'Audio', desc: 'Música: Axé' },
      { id: '163', cat: 'Audio', desc: 'Música: Black Music' },
      { id: '115', cat: 'Audio', desc: 'Música: Blues e Jazz' },
      { id: '164', cat: 'Audio', desc: 'Música: Clássica' },
      { id: '110', cat: 'Audio', desc: 'Música: Eletrônica' },
      { id: '113', cat: 'Audio', desc: 'Música: Forró' },
      { id: '200', cat: 'Audio', desc: 'Música: Funk' },
      { id: '108', cat: 'Audio', desc: 'Música: Gospel' },
      { id: '117', cat: 'Audio', desc: 'Música: Hip Hop' },
      { id: '116', cat: 'Audio', desc: 'Música: Infantil' },
      { id: '114', cat: 'Audio', desc: 'Música: Metal' },
      { id: '120', cat: 'Audio', desc: 'Música: MPB' },
      { id: '119', cat: 'Audio', desc: 'Música: New Age' },
      { id: '165', cat: 'Audio', desc: 'Música: Pop' },
      { id: '118', cat: 'Audio', desc: 'Música: Reggae' },
      { id: '109', cat: 'Audio', desc: 'Música: Rock' },
      { id: '111', cat: 'Audio', desc: 'Música: Samba e Pagode' },
      { id: '107', cat: 'Audio', desc: 'Música: Sertaneja e Country' },
      { id: '133', cat: 'Audio', desc: 'Música: Trilha Sonora' },
      { id: '201', cat: 'Audio', desc: 'Música: Outros' },
      { id: '245', cat: 'TV/HD', desc: 'Séries: HD 4K' },
      { id: '159', cat: 'TV/HD', desc: 'Séries: HD' },
      { id: '158', cat: 'TV', desc: 'Séries: DVD' },
      { id: '92', cat: 'TV', desc: 'Séries: Rip' },
      { id: '260', cat: 'TV/HD', desc: 'Séries: TV 4K' },
      { id: '208', cat: 'TV', desc: 'Séries: TV' },
      { id: '261', cat: 'TV/WEB-DL', desc: 'Séries: WEB 4K' },
      { id: '221', cat: 'TV/WEB-DL', desc: 'Séries: WEB' },
      { id: '202', cat: 'TV', desc: 'Séries: Autorado' },
      { id: '222', cat: 'TV/SD', desc: 'Séries: Qualidade Inferior' },
      { id: '231', cat: 'TV/HD', desc: 'TV: HD' },
      { id: '142', cat: 'TV', desc: 'TV: Rip' },
      { id: '246', cat: 'Audio/Video', desc: 'Shows: HD 4K' },
      { id: '96', cat: 'Audio/Video', desc: 'Shows: HD' },
      { id: '94', cat: 'Audio/Video', desc: 'Shows: DVD' },
      { id: '95', cat: 'Audio/Video', desc: 'Shows: Rip' },
      { id: '262', cat: 'Audio/Video', desc: 'Shows: TV 4K' },
      { id: '206', cat: 'Audio/Video', desc: 'Shows: TV' },
      { id: '263', cat: 'Audio/Video', desc: 'Shows: WEB 4K' },
      { id: '157', cat: 'Audio/Video', desc: 'Shows: WEB' },
      { id: '198', cat: 'Audio/Video', desc: 'Shows: Autorado' },
      { id: '209', cat: 'Audio/Video', desc: 'Shows: Video Clipe DVD' },
      {
        id: '150',
        cat: 'Audio/Video',
        desc: 'Shows: Video Clipe Outros',
      },
      { id: '87', cat: 'PC', desc: 'Softwares: Windows' },
    ],
    modes: { search: ['q'] },
  },
  settings: [
    { name: 'username', type: 'text', label: 'Username' },
    { name: 'password', type: 'password', label: 'Password' },
    {
      name: 'info',
      type: 'info',
      label: '',
      default:
        'For the search to work properly you must configure the "Modelo da Home" option to "Sistema Lista de Torrents" in the Speed-Share user settings.',
    },
  ],
  login: {
    path: 'account-login.php',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    test: { path: 'torrents.php' },
  },
  search: {
    paths: [
      {
        path: 'buscar_tor.php?search={{ .Keywords }}&incldead=1',
        method: 'post',
      },
    ],
    keywordsfilters: [
      { name: 're_replace', args: ['([1-2]\\d{3})', ''] },
      {
        name: 'replace',
        args: ['Agents of SHIELD', 'Agents of S.H.I.E.L.D.'],
      },
    ],
    inputs: { number: 100, offset: 0 },
    rows: { selector: 'table#torrentsTable tr:has(td.ttable_col1)' },
    fields: {
      details: {
        selector: 'a[href^="torrents-details.php?id="]',
        attribute: 'href',
      },
      is_anime: {
        optional: true,
        selector:
          'a[href^="torrents.php?cat=240"] ,a[href^="torrents.php?cat=189"] ,a[href^="torrents.php?cat=102"] ,a[href^="torrents.php?cat=103"] ,a[href^="torrents.php?cat=250"] ,a[href^="torrents.php?cat=144"] ,a[href^="torrents.php?cat=251"] ,a[href^="torrents.php?cat=227"] ,a[href^="torrents.php?cat=228"] ,a[href^="torrents.php?cat=191"]\n',
        attribute: 'href',
      },
      title_anime: {
        selector: 'a[href^="torrents-details.php?id="]',
        filters: [{ name: 're_replace', args: ['(Ep[\\.]?[ ]?(\\d{1,3}))', 'E$2'] }],
      },
      title_normal: {
        selector: 'a[href^="torrents-details.php?id="]',
        filters: [
          {
            name: 're_replace',
            args: ['^(.*?) - ((S(\\d{1,2}))?E(\\d{1,3}))', '$1 $2'],
          },
          { name: 're_replace', args: ['^Doctor Who', 'Doctor Who 2005'] },
          { name: 're_replace', args: ['^Extinct', 'Extinct 2017'] },
          { name: 're_replace', args: ['^The Flash', 'The Flash 2014'] },
          {
            name: 're_replace',
            args: ['^The Magicians', 'The Magicians 2015'],
          },
        ],
      },
      title: {
        text:
          '{{if .Result.is_anime }}{{ .Result.title_anime }}{{else}}{{ .Result.title_normal }}{{end}}',
        filters: [
          { name: 're_replace', args: ['^(\\[XXX]\\s)', ''] },
          { name: 'replace', args: [' - NOVO!', ''] },
          {
            name: 're_replace',
            args: ['(\\d{2})[ºª°] a (\\d{2})[ºª°] Temporada', 'S$1-$2'],
          },
          {
            name: 're_replace',
            args: ['(\\d{1})[ºª°] a (\\d{1})[ºª°] Temporada', 'S0$1-0$2'],
          },
          {
            name: 're_replace',
            args: ['(\\d{1})[ºª°] a (\\d{2})[ºª°] Temporada', 'S0$1-$2'],
          },
          { name: 're_replace', args: ['(\\d{2})[ºª°] Temporada', 'S$1'] },
          { name: 're_replace', args: ['(\\d{1})[ºª°] Temporada', 'S0$1'] },
        ],
      },
      'title|append': {
        optional: true,
        selector: 'td.label > div:contains("Resolução:")',
        filters: [
          { name: 'replace', args: ['Resolução:', ''] },
          {
            name: 're_replace',
            args: ['(\\d{3,4})[ ]?[xX][ ]?(1[0-9][0-9][0-9])', '1080p'],
          },
          {
            name: 're_replace',
            args: ['(\\d{3,4})[ ]?[xX][ ]?([2-9][0-9][0-9][0-9])', '2160p'],
          },
          {
            name: 're_replace',
            args: ['(\\d{3,4})[ ]?[xX][ ]?([6-9][0-9][0-9])', '720p'],
          },
          {
            name: 're_replace',
            args: ['(\\d{3,4})[ ]?[xX][ ]?([3-5][0-9][0-9])', '480p'],
          },
          {
            name: 're_replace',
            args: ['(\\d{3,4})[ ]?[xX][ ]?([1-2][0-9][0-9])', '240p'],
          },
        ],
      },
      download: {
        selector: 'a[href^="torrents-details.php?id="]',
        attribute: 'href',
        filters: [
          {
            name: 'replace',
            args: ['torrents-details.php', 'download.php'],
          },
        ],
      },
      category: {
        selector: 'a[href^="torrents.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      date: {
        selector: 'td.label > div:contains("Lançado em:")',
        filters: [
          { name: 'replace', args: ['Lançado em: ', ''] },
          { name: 'dateparse', args: '02/01/2006 15:04:05' },
        ],
      },
      size: {
        optional: true,
        selector: 'td.ttable_col2:contains(" B")',
      },
      grabs: { selector: 'td.ttable_col1 > font[color^=orange]' },
      seeders: { selector: 'td.ttable_col1 > b > font[color^=green]' },
      leechers: { selector: 'td.ttable_col2 > font[color^=red]' },
      downloadvolumefactor: {
        case: { 'img[src="images/free.gif"]': '0', '*': '1' },
      },
      uploadvolumefactor: { case: { '*': '1' } },
    },
  },
  source: 'jackett',
};
