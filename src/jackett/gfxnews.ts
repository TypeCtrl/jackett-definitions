import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'gfxnews',
  name: 'Gfxnews',
  description: 'GFXNews is a Private Torrent Tracker for GRAPHICS SOFTWARE / TUTORIALS / ETC',
  language: 'en-US',
  type: 'private',
  encoding: 'UTF-8',
  links: ['http://forum.gfxnews.org/'],
  caps: {
    categorymappings: [
      { id: '1', cat: 'Other', desc: '3D CONTENT' },
      { id: '204', cat: 'Other', desc: '3D CONTENT/3D Total' },
      { id: '106', cat: 'Other', desc: '3D CONTENT/AmbientLight' },
      { id: '215', cat: 'Other', desc: '3D CONTENT/Archvision' },
      { id: '214', cat: 'Other', desc: '3D CONTENT/Arroway' },
      { id: '216', cat: 'Other', desc: '3D CONTENT/AsileFX' },
      { id: '218', cat: 'Other', desc: '3D CONTENT/Axyz Design' },
      { id: '217', cat: 'Other', desc: '3D CONTENT/Daz3D' },
      { id: '136', cat: 'Other', desc: '3D CONTENT/DoschDesign' },
      { id: '213', cat: 'Other', desc: '3D CONTENT/Evermotion' },
      { id: '175', cat: 'Other', desc: '3D CONTENT/ImageCel' },
      { id: '162', cat: 'Other', desc: '3D CONTENT/Marlin Studios 3D' },
      { id: '174', cat: 'Other', desc: '3D CONTENT/PsicoSonic' },
      { id: '2', cat: 'PC', desc: 'APPS' },
      { id: '29', cat: 'PC/ISO', desc: 'APPS/ISO' },
      { id: '30', cat: 'PC', desc: 'APPS/RIP' },
      { id: '201', cat: 'PC', desc: 'APPS/CAD/CAM/CAE' },
      { id: '31', cat: 'PC', desc: 'APPS/Adobe Plugins' },
      { id: '200', cat: 'PC', desc: 'APPS/Archicad Plugins' },
      { id: '198', cat: 'PC', desc: 'APPS/Avid Plugin' },
      { id: '38', cat: 'PC', desc: 'APPS/Cinema 4D Plugin' },
      { id: '32', cat: 'PC', desc: 'APPS/3DMax Plugins' },
      { id: '33', cat: 'PC', desc: 'APPS/LW Plugins' },
      { id: '34', cat: 'PC', desc: 'APPS/Maya Plugins' },
      { id: '10', cat: 'Books', desc: 'BOOKS' },
      { id: '236', cat: 'Books/Magazines', desc: 'BOOKS/Magazines' },
      { id: '11', cat: 'Other', desc: 'DEVELOPMENT' },
      { id: '228', cat: 'Other', desc: 'FILMMAKING & VIDEO PR.' },
      { id: '3', cat: 'Other', desc: 'FONTS' },
      { id: '4', cat: 'Other', desc: 'FOOTAGE' },
      { id: '54', cat: 'Other', desc: 'FOOTAGE/12 INCH Design' },
      { id: '40', cat: 'Other', desc: 'FOOTAGE/3D Bank' },
      { id: '50', cat: 'Other', desc: 'FOOTAGE/3D Fon' },
      { id: '55', cat: 'Other', desc: 'FOOTAGE/5 THINGS' },
      { id: '46', cat: 'Other', desc: 'FOOTAGE/Actionback' },
      {
        id: '56',
        cat: 'Other',
        desc: 'FOOTAGE/Adobe Image Library Video',
      },
      { id: '57', cat: 'Other', desc: 'FOOTAGE/Alien Box/Tommy Back' },
      { id: '58', cat: 'Other', desc: 'FOOTAGE/Animation Factory' },
      { id: '41', cat: 'Other', desc: 'FOOTAGE/Artbeats' },
      { id: '59', cat: 'Other', desc: 'FOOTAGE/Canopus' },
      { id: '87', cat: 'Other', desc: 'FOOTAGE/Capital DV Studio' },
      { id: '60', cat: 'Other', desc: 'FOOTAGE/Corbis Video' },
      { id: '48', cat: 'Other', desc: 'FOOTAGE/Datacraft Video' },
      { id: '61', cat: 'Other', desc: 'FOOTAGE/Digital Brewery' },
      { id: '42', cat: 'Other', desc: 'FOOTAGE/Digital Juice Video' },
      { id: '44', cat: 'Other', desc: 'FOOTAGE/Digital Hotcakes' },
      { id: '62', cat: 'Other', desc: 'FOOTAGE/Digital Preserves' },
      { id: '43', cat: 'Other', desc: 'FOOTAGE/Digital Vision Video' },
      { id: '51', cat: 'Other', desc: 'FOOTAGE/Dosch Video' },
      { id: '63', cat: 'Other', desc: 'FOOTAGE/DV Club' },
      { id: '53', cat: 'Other', desc: 'FOOTAGE/Easymotion' },
      { id: '49', cat: 'Other', desc: 'FOOTAGE/Eyewire' },
      { id: '64', cat: 'Other', desc: 'FOOTAGE/F4 Studio' },
      { id: '52', cat: 'Other', desc: 'FOOTAGE/Film Disk' },
      { id: '88', cat: 'Other', desc: 'FOOTAGE/FreedomFX' },
      { id: '65', cat: 'Other', desc: 'FOOTAGE/Fuzion Films' },
      { id: '66', cat: 'Other', desc: 'FOOTAGE/HyperEye' },
      { id: '67', cat: 'Other', desc: 'FOOTAGE/Marlin Studios Video' },
      { id: '68', cat: 'Other', desc: 'FOOTAGE/Motionloops' },
      { id: '69', cat: 'Other', desc: 'FOOTAGE/MovieStock' },
      { id: '70', cat: 'Other', desc: 'FOOTAGE/Prismo' },
      { id: '71', cat: 'Other', desc: 'FOOTAGE/Pro-Motion' },
      { id: '72', cat: 'Other', desc: 'FOOTAGE/ProCimar' },
      { id: '47', cat: 'Other', desc: 'FOOTAGE/Rab-Byte' },
      { id: '73', cat: 'Other', desc: 'FOOTAGE/Rhino House' },
      { id: '74', cat: 'Other', desc: 'FOOTAGE/Rubberball Video' },
      { id: '75', cat: 'Other', desc: 'FOOTAGE/Shiny DV' },
      { id: '76', cat: 'Other', desc: 'FOOTAGE/ShowStoppers FX' },
      { id: '45', cat: 'Other', desc: 'FOOTAGE/STASH' },
      { id: '77', cat: 'Other', desc: 'FOOTAGE/Studio BS' },
      { id: '78', cat: 'Other', desc: 'FOOTAGE/Taste Media' },
      { id: '79', cat: 'Other', desc: 'FOOTAGE/Thinkstock' },
      { id: '84', cat: 'Other', desc: 'FOOTAGE/Thought Equity' },
      { id: '80', cat: 'Other', desc: 'FOOTAGE/TimeImage' },
      { id: '81', cat: 'Other', desc: 'FOOTAGE/Ulead Pick-a-Video' },
      { id: '82', cat: 'Other', desc: 'FOOTAGE/Video Copilot' },
      { id: '86', cat: 'Other', desc: 'FOOTAGE/vce.com' },
      { id: '85', cat: 'Other', desc: 'FOOTAGE/Video3D.RU' },
      { id: '83', cat: 'Other', desc: 'FOOTAGE/Wededit.RU' },
      { id: '5', cat: 'PC/Mac', desc: 'MAC' },
      { id: '36', cat: 'Other', desc: 'LINUX' },
      { id: '6', cat: 'Other', desc: 'PHOTOSTOCK' },
      { id: '108', cat: 'Other', desc: 'PHOTOSTOCK/Apply Pictures' },
      { id: '109', cat: 'Other', desc: 'PHOTOSTOCK/Aridi' },
      { id: '110', cat: 'Other', desc: 'PHOTOSTOCK/Art Explosion' },
      { id: '111', cat: 'Other', desc: 'PHOTOSTOCK/Artbeats Photo' },
      { id: '112', cat: 'Other', desc: 'PHOTOSTOCK/Artville' },
      { id: '202', cat: 'Other', desc: 'PHOTOSTOCK/AsiaImageBank' },
      { id: '114', cat: 'Other', desc: 'PHOTOSTOCK/BackArts' },
      { id: '115', cat: 'Other', desc: 'PHOTOSTOCK/BananaStock' },
      { id: '116', cat: 'Other', desc: 'PHOTOSTOCK/Bee-Line' },
      { id: '117', cat: 'Other', desc: 'PHOTOSTOCK/Brand X' },
      { id: '145', cat: 'Other', desc: 'PHOTOSTOCK/Broderbund' },
      { id: '135', cat: 'Other', desc: 'PHOTOSTOCK/Central Stock' },
      { id: '119', cat: 'Other', desc: 'PHOTOSTOCK/Circa Art' },
      { id: '205', cat: 'Other', desc: 'PHOTOSTOCK/China Stock' },
      {
        id: '120',
        cat: 'Other',
        desc: 'PHOTOSTOCK/Classic PIO Partnership',
      },
      { id: '121', cat: 'Other', desc: 'PHOTOSTOCK/Club Scorpius' },
      { id: '122', cat: 'Other', desc: 'PHOTOSTOCK/ComStock' },
      { id: '123', cat: 'Other', desc: 'PHOTOSTOCK/Corbis RF' },
      { id: '124', cat: 'Other', desc: 'PHOTOSTOCK/Corel' },
      { id: '125', cat: 'Other', desc: 'PHOTOSTOCK/Creatas' },
      { id: '126', cat: 'Other', desc: 'PHOTOSTOCK/DAJ' },
      { id: '127', cat: 'Other', desc: 'PHOTOSTOCK/Datacraft Photo' },
      { id: '128', cat: 'Other', desc: 'PHOTOSTOCK/Dex Image' },
      { id: '129', cat: 'Other', desc: 'PHOTOSTOCK/DiAMAR' },
      { id: '130', cat: 'Other', desc: 'PHOTOSTOCK/Digigra' },
      { id: '131', cat: 'Other', desc: 'PHOTOSTOCK/Digital Juice Drops' },
      { id: '132', cat: 'Other', desc: 'PHOTOSTOCK/Digital Vision' },
      { id: '133', cat: 'Other', desc: 'PHOTOSTOCK/DigiTouch' },
      { id: '134', cat: 'Other', desc: 'PHOTOSTOCK/Discovery' },
      { id: '137', cat: 'Other', desc: 'PHOTOSTOCK/Dover' },
      { id: '139', cat: 'Other', desc: 'PHOTOSTOCK/Eyewire Photo' },
      { id: '140', cat: 'Other', desc: 'PHOTOSTOCK/Fancy' },
      { id: '222', cat: 'Other', desc: 'PHOTOSTOCK/FStop' },
      { id: '219', cat: 'Other', desc: 'PHOTOSTOCK/GlowImages' },
      { id: '141', cat: 'Other', desc: 'PHOTOSTOCK/GoodShoot' },
      { id: '206', cat: 'Other', desc: 'PHOTOSTOCK/GoMedia' },
      { id: '143', cat: 'Other', desc: 'PHOTOSTOCK/Hakata' },
      { id: '146', cat: 'Other', desc: 'PHOTOSTOCK/Health Head' },
      { id: '144', cat: 'Other', desc: 'PHOTOSTOCK/Hemera' },
      { id: '147', cat: 'Other', desc: 'PHOTOSTOCK/iDREAM stock' },
      { id: '148', cat: 'Other', desc: 'PHOTOSTOCK/Image Kit' },
      { id: '149', cat: 'Other', desc: 'PHOTOSTOCK/Image Making' },
      { id: '150', cat: 'Other', desc: 'PHOTOSTOCK/Image100' },
      { id: '151', cat: 'Other', desc: 'PHOTOSTOCK/ImageDJ' },
      { id: '152', cat: 'Other', desc: 'PHOTOSTOCK/ImageFarm' },
      { id: '203', cat: 'Other', desc: 'PHOTOSTOCK/ImageIdeas' },
      { id: '153', cat: 'Other', desc: 'PHOTOSTOCK/ImageMore' },
      {
        id: '154',
        cat: 'Other',
        desc: 'PHOTOSTOCK/Imagesource (Electra Visi..',
      },
      {
        id: '159',
        cat: 'Other',
        desc: 'PHOTOSTOCK/Imagestate (John Foxx)',
      },
      { id: '160', cat: 'Other', desc: 'PHOTOSTOCK/Ingram Publishing' },
      { id: '155', cat: 'Other', desc: 'PHOTOSTOCK/iStockPhotos' },
      { id: '156', cat: 'Other', desc: 'PHOTOSTOCK/Ivan Ivanich' },
      { id: '157', cat: 'Other', desc: 'PHOTOSTOCK/Izosoft' },
      { id: '161', cat: 'Other', desc: 'PHOTOSTOCK/Lushpix' },
      { id: '163', cat: 'Other', desc: 'PHOTOSTOCK/Medio' },
      { id: '164', cat: 'Other', desc: 'PHOTOSTOCK/MH Foto Design' },
      { id: '165', cat: 'Other', desc: 'PHOTOSTOCK/Mixa' },
      { id: '166', cat: 'Other', desc: 'PHOTOSTOCK/OdinKot' },
      { id: '223', cat: 'Other', desc: 'PHOTOSTOCK/Ojoimages' },
      { id: '167', cat: 'Other', desc: 'PHOTOSTOCK/Pepin Press' },
      { id: '168', cat: 'Other', desc: 'PHOTOSTOCK/PhotoAlto' },
      { id: '169', cat: 'Other', desc: 'PHOTOSTOCK/Photodisc' },
      { id: '170', cat: 'Other', desc: 'PHOTOSTOCK/PhotoSpin' },
      { id: '171', cat: 'Other', desc: 'PHOTOSTOCK/PixLand' },
      { id: '172', cat: 'Other', desc: 'PHOTOSTOCK/Pixtal' },
      { id: '173', cat: 'Other', desc: 'PHOTOSTOCK/Planet Art' },
      { id: '176', cat: 'Other', desc: 'PHOTOSTOCK/Rubberball' },
      { id: '177', cat: 'Other', desc: 'PHOTOSTOCK/Shibvisi' },
      { id: '225', cat: 'Other', desc: 'PHOTOSTOCK/Shutterstock' },
      { id: '179', cat: 'Other', desc: 'PHOTOSTOCK/Spotty' },
      { id: '180', cat: 'Other', desc: 'PHOTOSTOCK/StockDisc' },
      { id: '181', cat: 'Other', desc: 'PHOTOSTOCK/StockByte' },
      { id: '182', cat: 'Other', desc: 'PHOTOSTOCK/Tattoo' },
      { id: '183', cat: 'Other', desc: 'PHOTOSTOCK/Think Stock' },
      { id: '184', cat: 'Other', desc: 'PHOTOSTOCK/Ulead Pick-a-Photo' },
      { id: '185', cat: 'Other', desc: 'PHOTOSTOCK/Visual Language' },
      { id: '186', cat: 'Other', desc: 'PHOTOSTOCK/Zedcor DeskGallery' },
      { id: '191', cat: 'Other', desc: 'PHOTOSTOCK/ZZVE' },
      { id: '8', cat: 'Other', desc: 'TEMPLATES' },
      {
        id: '107',
        cat: 'Other',
        desc: 'TEMPLATES/Animation Factory Photo',
      },
      { id: '209', cat: 'Other', desc: 'TEMPLATES/Atmosphere Studio' },
      { id: '210', cat: 'Other', desc: 'TEMPLATES/Boxedart' },
      {
        id: '212',
        cat: 'Other',
        desc: 'TEMPLATES/DG Foto Art Gallerias',
      },
      { id: '211', cat: 'Other', desc: 'TEMPLATES/DriveArt' },
      { id: '207', cat: 'Other', desc: 'TEMPLATES/DreamTemplate' },
      { id: '190', cat: 'Other', desc: 'TEMPLATES/Iconbase' },
      { id: '178', cat: 'Other', desc: 'TEMPLATES/SPC International' },
      { id: '208', cat: 'Other', desc: 'TEMPLATES/TemplateMonster' },
      { id: '231', cat: 'Other', desc: 'TEMPLATES/Videohive' },
      { id: '9', cat: 'Books', desc: 'TUTORIALS' },
      { id: '95', cat: 'Books', desc: 'TUTORIALS/3D Garage' },
      { id: '105', cat: 'Books', desc: 'TUTORIALS/3D Trainer' },
      { id: '96', cat: 'Books', desc: 'TUTORIALS/AsileFX Tutorial' },
      { id: '100', cat: 'Books', desc: 'TUTORIALS/Autodesk / Alias' },
      { id: '196', cat: 'Books', desc: 'TUTORIALS/Cartoon Smart' },
      { id: '192', cat: 'Books', desc: 'TUTORIALS/CG Academy' },
      { id: '234', cat: 'Books', desc: 'TUTORIALS/cmiVFX' },
      { id: '195', cat: 'Books', desc: 'TUTORIALS/Desktop Images' },
      { id: '102', cat: 'Books', desc: 'TUTORIALS/Digital Art' },
      { id: '93', cat: 'Books', desc: 'TUTORIALS/Digital Tutors' },
      { id: '194', cat: 'Books', desc: 'TUTORIALS/Digital Media' },
      { id: '232', cat: 'Books', desc: 'TUTORIALS/EAT3D' },
      { id: '97', cat: 'Books', desc: 'TUTORIALS/FXphd' },
      { id: '92', cat: 'Books', desc: 'TUTORIALS/Gnomonology' },
      { id: '193', cat: 'Books', desc: 'TUTORIALS/KW Media Group' },
      { id: '98', cat: 'Books', desc: 'TUTORIALS/Lost Pencil' },
      { id: '94', cat: 'Books', desc: 'TUTORIALS/Luxology' },
      { id: '89', cat: 'Books', desc: 'TUTORIALS/Lynda.com' },
      { id: '199', cat: 'Books', desc: 'TUTORIALS/MacProVideo.com' },
      { id: '99', cat: 'Books', desc: 'TUTORIALS/Simply Maya' },
      { id: '189', cat: 'Books', desc: 'TUTORIALS/Softimage' },
      { id: '104', cat: 'Books', desc: 'TUTORIALS/Technical Animation' },
      { id: '90', cat: 'Books', desc: 'TUTORIALS/The Gnomon Workshop' },
      { id: '91', cat: 'Books', desc: 'TUTORIALS/Total Training' },
      { id: '103', cat: 'Books', desc: 'TUTORIALS/Turbo Squid' },
      { id: '230', cat: 'Books', desc: 'TUTORIALS/TutPlus' },
      { id: '235', cat: 'Books', desc: 'TUTORIALS/Video2Brain' },
      { id: '101', cat: 'Books', desc: 'TUTORIALS/VTC' },
      { id: '233', cat: 'Books', desc: 'TUTORIALS/ZbrushWorkshops' },
      { id: '187', cat: 'Other', desc: 'PHOTOGRAPHY' },
      { id: '188', cat: 'Other', desc: 'TRADITIONAL ART' },
    ],
    modes: { search: ['q'] },
  },
  login: {
    path: 'login.php',
    method: 'post',
    inputs: {
      login_username: '{{ .Config.username }}',
      login_password: '{{ .Config.password }}',
      autologin: 1,
      login: 'Log in',
    },
    error: [{ selector: 'td.thead', message: { selector: 'td.thead b' } }],
    test: {
      path: 'tracker.php',
      selector: 'li a[href^="login.php?logout=1"]',
    },
  },
  search: {
    paths: [{ path: 'tracker.php', method: 'post' }],
    inputs: {
      $raw: '{{ if .Categories }}{{ range .Categories }}f[]={{.}}&{{end}}{{else}}f[]=-1{{end}}',
      prev_a: 0,
      prev_dla: 0,
      prev_dlc: 0,
      prev_dld: 0,
      prev_dlw: 0,
      prev_my: 0,
      prev_new: 0,
      prev_sd: 0,
      prev_da: 1,
      prev_dc: 0,
      prev_df: 1,
      prev_ds: 0,
      prev_date_from: '',
      prev_date_to: '',
      prev_hide_rereg: 0,
      o: 1,
      s: 2,
      df: 1,
      da: 1,
      date_from: '',
      date_to: '',
      nm: '{{ .Keywords }}',
      helper_sortby: 'date',
      pn: '',
      submit: 'Search',
    },
    rows: {
      selector: 'table > tbody > tr:has(a[href^="download.php?id="])',
      dateheaders: {
        selector: 'td.menu[colspan="17"] > b',
        filters: [{ name: 'dateparse', args: '2-Jan-06' }],
      },
    },
    fields: {
      title: { selector: 'td a[href^="./viewtopic.php?t="]' },
      details: {
        selector: 'td a[href^="./viewtopic.php?t="]',
        attribute: 'href',
      },
      download: {
        selector: 'td a[href^="download.php?id="]',
        attribute: 'href',
      },
      category: {
        selector: 'td a[href^="tracker.php?f="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'f' }],
      },
      size: { optional: true, selector: 'td:contains(\\00a0B)' },
      seeders: { optional: true, selector: 'td[title="Seeders"]' },
      leechers: { optional: true, selector: 'td[title="Leechers"]' },
      grabs: { optional: true, selector: 'td[title^="Replies:"]' },
      downloadvolumefactor: { text: '1' },
      uploadvolumefactor: { text: '1' },
    },
  },
  source: 'jackett',
};
