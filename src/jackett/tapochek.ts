import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'tapochek',
  name: 'Tapochek',
  description: 'Tapochek is a RUSSIAN Private Torrent Tracker for 0DAY / GENERAL',
  language: 'ru-RU',
  type: 'private',
  encoding: 'WINDOWS-1251',
  links: ['https://tapochek.net/'],
  legacylinks: ['http://tapochek.net/'],
  caps: {
    categorymappings: [
      { id: '2', cat: 'PC/Games', desc: 'Игры для PC (общее)' },
      { id: '14', cat: 'PC/Games', desc: 'Альфа-, Бета- и Демо-версии' },
      { id: '314', cat: 'PC/Games', desc: 'NoCD/ NoDVD' },
      { id: '13', cat: 'PC/Games', desc: 'Русификаторы' },
      { id: '12', cat: 'PC/Games', desc: 'Патчи' },
      { id: '11', cat: 'PC/Games', desc: 'Чит-программы и трейнеры' },
      { id: '10', cat: 'PC/Games', desc: 'Дополнения для игр' },
      {
        id: '9',
        cat: 'PC/Games',
        desc: 'Игровые журналы и приложенные материалы',
      },
      {
        id: '712',
        cat: 'PC/Games',
        desc: 'Гайды, бонусные диски и другие дополнительные материалы',
      },
      { id: '18', cat: 'PC/Games', desc: 'Горячие новинки' },
      { id: '808', cat: 'PC/Games', desc: 'Репаки от R.G. Механики' },
      {
        id: '809',
        cat: 'PC/Games',
        desc: 'Горячие новинки от R.G. Механики',
      },
      { id: '810', cat: 'PC/Games', desc: 'Аркады от R.G. Механики' },
      {
        id: '811',
        cat: 'PC/Games',
        desc: 'Приключения и квесты от R.G. Механики',
      },
      { id: '812', cat: 'PC/Games', desc: 'Стратегии от R.G. Механики' },
      { id: '813', cat: 'PC/Games', desc: 'Симуляторы от R.G. Механики' },
      { id: '814', cat: 'PC/Games', desc: 'Action от R.G. Механики' },
      { id: '815', cat: 'PC/Games', desc: 'RPG от R.G. Механики' },
      { id: '903', cat: 'PC/Games', desc: 'jRPG от R.G. Механики' },
      { id: '942', cat: 'PC/Games', desc: 'Репаки от R.G. Catalyst' },
      {
        id: '943',
        cat: 'PC/Games',
        desc: 'Горячие новинки от R.G. Catalyst',
      },
      { id: '949', cat: 'PC/Games', desc: 'RPG от R.G. Catalyst' },
      { id: '948', cat: 'PC/Games', desc: 'Action от R.G. Catalyst' },
      { id: '947', cat: 'PC/Games', desc: 'Симуляторы от R.G. Catalyst' },
      { id: '946', cat: 'PC/Games', desc: 'Стратегии от R.G. Catalyst' },
      {
        id: '945',
        cat: 'PC/Games',
        desc: 'Приключения и квесты от R.G. Catalyst',
      },
      { id: '944', cat: 'PC/Games', desc: 'Аркады от R.G. Catalyst' },
      { id: '887', cat: 'PC/Games', desc: 'Раздачи от R.G. Игроманы' },
      { id: '888', cat: 'PC/Games', desc: 'Аркады от R.G. Игроманы' },
      {
        id: '889',
        cat: 'PC/Games',
        desc: 'Приключения и квесты от R.G. Игроманы',
      },
      { id: '890', cat: 'PC/Games', desc: 'Стратегии от R.G. Игроманы' },
      { id: '891', cat: 'PC/Games', desc: 'Симуляторы от R.G. Игроманы' },
      { id: '892', cat: 'PC/Games', desc: 'Action от R.G. Игроманы' },
      { id: '893', cat: 'PC/Games', desc: 'RPG от R.G. Игроманы' },
      { id: '913', cat: 'PC/Games', desc: 'Раздачи от R.G. GOGFAN' },
      {
        id: '935',
        cat: 'PC/Games',
        desc: 'Ранний доступ от R.G. GOGFAN',
      },
      { id: '914', cat: 'PC/Games', desc: 'Аркады от R.G. GOGFAN' },
      {
        id: '915',
        cat: 'PC/Games',
        desc: 'Приключения и квесты от R.G. GOGFAN',
      },
      { id: '931', cat: 'PC/Games', desc: 'Стратегии от R.G. GOGFAN' },
      { id: '930', cat: 'PC/Games', desc: 'Симуляторы от R.G. GOGFAN' },
      { id: '929', cat: 'PC/Games', desc: 'Action от R.G. GOGFAN' },
      { id: '928', cat: 'PC/Games', desc: 'RPG от R.G. GOGFAN' },
      { id: '953', cat: 'PC/Games', desc: 'Раздачи от R.G. Origins' },
      { id: '959', cat: 'PC/Games', desc: 'RPG от R.G. Origins' },
      { id: '958', cat: 'PC/Games', desc: 'Симуляторы от R.G. Origins' },
      { id: '957', cat: 'PC/Games', desc: 'Стратегии от R.G. Origins' },
      {
        id: '956',
        cat: 'PC/Games',
        desc: 'Приключения и квесты от R.G. Origins',
      },
      { id: '955', cat: 'PC/Games', desc: 'Action от R.G. Origins' },
      { id: '954', cat: 'PC/Games', desc: 'Аркады от R.G. Origins' },
      { id: '24', cat: 'PC/Games', desc: 'Приключения и квесты' },
      { id: '25', cat: 'PC/Games', desc: 'Стратегии' },
      {
        id: '28',
        cat: 'PC/Games',
        desc: 'RTS (стратегии в реальном времени)',
      },
      { id: '27', cat: 'PC/Games', desc: 'TBS (пошаговые стратегии)' },
      { id: '26', cat: 'PC/Games', desc: 'Wargame' },
      { id: '238', cat: 'PC/Games', desc: 'Экономические стратегии' },
      { id: '19', cat: 'PC/Games', desc: 'Аркады' },
      { id: '23', cat: 'PC/Games', desc: 'Аркады (разное)' },
      { id: '22', cat: 'PC/Games', desc: 'Логические аркады' },
      {
        id: '21',
        cat: 'PC/Games',
        desc: 'Настольные и карточные аркады',
      },
      { id: '20', cat: 'PC/Games', desc: 'Мини/флеш-игры' },
      { id: '29', cat: 'PC/Games', desc: 'Симуляторы' },
      { id: '31', cat: 'PC/Games', desc: 'Авиасимуляторы' },
      { id: '34', cat: 'PC/Games', desc: 'Спортивные симуляторы' },
      { id: '33', cat: 'PC/Games', desc: 'Космические симуляторы' },
      { id: '32', cat: 'PC/Games', desc: 'Гоночные симуляторы' },
      { id: '30', cat: 'PC/Games', desc: 'Другие симуляторы' },
      { id: '35', cat: 'PC/Games', desc: 'Action' },
      { id: '39', cat: 'PC/Games', desc: 'FPS (1st Person)' },
      { id: '38', cat: 'PC/Games', desc: 'TPS (3rd Person)' },
      { id: '37', cat: 'PC/Games', desc: 'Stealth Action' },
      { id: '36', cat: 'PC/Games', desc: 'Тактические шутеры' },
      { id: '40', cat: 'PC/Games', desc: 'RPG' },
      { id: '41', cat: 'PC/Games', desc: 'Эротические игры' },
      { id: '43', cat: 'PC/Games', desc: 'Эротические' },
      { id: '42', cat: 'PC/Games', desc: 'Хентайные' },
      { id: '968', cat: 'PC/Games', desc: 'Игры для VR' },
      { id: '44', cat: 'PC/Games', desc: 'Многопользовательские игры' },
      { id: '45', cat: 'PC/Games', desc: 'MMORPG' },
      { id: '46', cat: 'PC/Games', desc: 'Для самых маленьких' },
      { id: '69', cat: 'Console/Xbox', desc: 'Xbox' },
      { id: '86', cat: 'Console/Xbox360', desc: 'XBox360 | Игры' },
      { id: '646', cat: 'Console/Xbox360', desc: 'XBox360 | JTAG' },
      { id: '87', cat: 'Console/Xbox360', desc: 'XBox360 | 360E' },
      { id: '89', cat: 'Console/Xbox360', desc: 'XBox360 | Demo' },
      { id: '612', cat: 'Console/Xbox360', desc: 'XBox360 | Live' },
      { id: '614', cat: 'Console/Xbox360', desc: 'XBox360 | Soft' },
      { id: '88', cat: 'Console/Xbox', desc: 'XBox | Игры' },
      { id: '85', cat: 'Console/Xbox', desc: 'Прочее | Архив (XBox)' },
      { id: '70', cat: 'Console/PSP', desc: 'PlayStation' },
      { id: '910', cat: 'Console/PS4', desc: 'PS4 | Игры' },
      { id: '911', cat: 'Console/PS4', desc: 'PS4 | Сцена' },
      { id: '689', cat: 'Console/PS3', desc: 'PS3 | Игры' },
      { id: '818', cat: 'Console/PS3', desc: 'PS3 | Сцена' },
      { id: '696', cat: 'Console/PSP', desc: 'PSN | Игры' },
      { id: '853', cat: 'Console/PS3', desc: 'PS3 | Emulation' },
      { id: '904', cat: 'Console/PS Vita', desc: 'PS Vita | Игры' },
      { id: '102', cat: 'Console/PSP', desc: 'PSP | Игры' },
      { id: '103', cat: 'Console/PS3', desc: 'PS2 | Игры' },
      { id: '104', cat: 'Console/PSP', desc: 'PSX | Игры' },
      { id: '435', cat: 'Console/PSP', desc: 'PSP | Сцена' },
      { id: '105', cat: 'Console/PSP', desc: 'PSP | PSX-PSP' },
      { id: '690', cat: 'Console/PS3', desc: 'PS3 | Прочее' },
      { id: '178', cat: 'Console/PSP', desc: 'PSP | Прочее' },
      { id: '101', cat: 'Console/PSP', desc: 'Архив (PS)' },
      { id: '78', cat: 'Console/NDS', desc: 'Nintendo' },
      { id: '148', cat: 'Console/NDS', desc: 'Архив (Nintendo)' },
      { id: '116', cat: 'Console/NDS', desc: 'NDS | Игры' },
      { id: '885', cat: 'Console/3DS', desc: '3DS | Игры' },
      { id: '912', cat: 'Console', desc: 'Switch | Игры' },
      { id: '115', cat: 'Console/Wii', desc: 'Wii | Игры' },
      { id: '899', cat: 'Console/WiiU', desc: 'Wii U | Игры' },
      { id: '900', cat: 'Console/WiiU', desc: 'Wii U | Сцена' },
      { id: '381', cat: 'Console/Wiiware/VC', desc: 'WiiWare | Игры' },
      { id: '382', cat: 'Console', desc: 'GameCube | Игры' },
      { id: '349', cat: 'Console', desc: 'Sega' },
      { id: '350', cat: 'Console', desc: 'Dreamcast | Игры' },
      { id: '351', cat: 'Console', desc: 'Saturn | Игры' },
      { id: '352', cat: 'Console', desc: 'Игры для старых консолей' },
      {
        id: '390',
        cat: 'Console',
        desc: 'Коллекции (игры для разных платформ)',
      },
      {
        id: '936',
        cat: 'PC/Games',
        desc: 'Горячие новинки игр для macOS и Linux',
      },
      {
        id: '129',
        cat: 'PC/Games',
        desc: 'Игры для Linux от R.G. GOGFAN',
      },
      {
        id: '965',
        cat: 'PC/Games',
        desc: '[Linux] Ранний доступ от R.G. GOGFAN',
      },
      {
        id: '874',
        cat: 'PC/Games',
        desc: '[Linux] Аркады от R.G. GOGFAN',
      },
      {
        id: '695',
        cat: 'PC/Games',
        desc: '[Linux] Приключения и квесты от R.G. GOGFAN',
      },
      {
        id: '873',
        cat: 'PC/Games',
        desc: '[Linux] Стратегии от R.G. GOGFAN',
      },
      {
        id: '872',
        cat: 'PC/Games',
        desc: '[Linux] Симуляторы от R.G. GOGFAN',
      },
      {
        id: '871',
        cat: 'PC/Games',
        desc: '[Linux] Action от R.G. GOGFAN',
      },
      { id: '932', cat: 'PC/Games', desc: '[Linux] RPG от R.G. GOGFAN' },
      {
        id: '861',
        cat: 'PC/Games',
        desc: 'Игры для macOS от R.G. GOGFAN',
      },
      {
        id: '966',
        cat: 'PC/Games',
        desc: '[macOS] Ранний доступ от R.G. GOGFAN',
      },
      {
        id: '862',
        cat: 'PC/Games',
        desc: '[macOS] Аркады от R.G. GOGFAN',
      },
      {
        id: '875',
        cat: 'PC/Games',
        desc: '[macOS] Приключения и квесты от R.G. GOGFAN',
      },
      {
        id: '876',
        cat: 'PC/Games',
        desc: '[macOS] Стратегии от R.G. GOGFAN',
      },
      {
        id: '877',
        cat: 'PC/Games',
        desc: '[macOS] Симуляторы от R.G. GOGFAN',
      },
      {
        id: '878',
        cat: 'PC/Games',
        desc: '[macOS] Action от R.G. GOGFAN',
      },
      { id: '933', cat: 'PC/Games', desc: '[macOS] RPG от R.G. GOGFAN' },
      { id: '429', cat: 'Movies', desc: 'Новинки кинематографа' },
      { id: '886', cat: 'Movies/3D', desc: 'Новинки (3D)' },
      { id: '964', cat: 'Movies/UHD', desc: 'Новинки (UHD 4K)' },
      {
        id: '934',
        cat: 'Movies/BluRay',
        desc: 'Новинки 2018-2019 (Blu-Ray и BDRemux)',
      },
      {
        id: '431',
        cat: 'Movies/WEBDL',
        desc: 'Новинки 2018-2019 (Web-DL, HD Rips)',
      },
      { id: '430', cat: 'Movies', desc: 'Новинки 2018-2019 (Rips)' },
      {
        id: '703',
        cat: 'Movies',
        desc: 'Экранки и Low-рипы (CAMRip, TS, WEBRip)',
      },
      {
        id: '909',
        cat: 'Movies/HD',
        desc: 'Новинки 2018-2019 (HD и HD Rips) с рекламой',
      },
      { id: '908', cat: 'Movies', desc: 'Экранки и Low-рипы с рекламой' },
      { id: '74', cat: 'Movies/Foreign', desc: 'Зарубежное кино' },
      {
        id: '121',
        cat: 'Movies/BluRay',
        desc: 'Зарубежное кино | Blu-Ray и BDRemux',
      },
      { id: '122', cat: 'Movies/HD', desc: 'Зарубежное кино | HD Rips' },
      { id: '123', cat: 'Movies/DVD', desc: 'Зарубежное кино | DVD' },
      {
        id: '124',
        cat: 'Movies/Foreign',
        desc: 'Зарубежное кино | Rips',
      },
      { id: '75', cat: 'Movies', desc: 'Отечественное кино' },
      {
        id: '127',
        cat: 'Movies/BluRay',
        desc: 'Отечественное кино | Blu-Ray и BDRemux',
      },
      {
        id: '128',
        cat: 'Movies/HD',
        desc: 'Отечественное кино | HD Rips',
      },
      { id: '130', cat: 'Movies/DVD', desc: 'Российское кино | DVD' },
      { id: '131', cat: 'Movies', desc: 'Российское кино | Rips' },
      { id: '133', cat: 'Movies/DVD', desc: 'Советское кино | DVD' },
      { id: '135', cat: 'Movies', desc: 'Советское кино | Rips' },
      { id: '869', cat: 'Movies/3D', desc: '3D' },
      { id: '161', cat: 'TV/Foreign', desc: 'Зарубежные сериалы' },
      { id: '160', cat: 'TV', desc: 'Отечественные cериалы' },
      { id: '320', cat: 'TV', desc: 'Мультфильмы' },
      { id: '325', cat: 'TV/SD', desc: 'Мультфильмы | DVD' },
      {
        id: '938',
        cat: 'TV/HD',
        desc: 'Мультфильмы | Blu-Ray и BDRemux',
      },
      { id: '324', cat: 'TV/HD', desc: 'Мультфильмы | HD Rips' },
      { id: '326', cat: 'TV', desc: 'Отечественные мультфильмы | Rips' },
      { id: '328', cat: 'TV', desc: 'Зарубежные мультфильмы | Rips' },
      { id: '330', cat: 'TV', desc: 'Сборники мультфильмов' },
      { id: '321', cat: 'TV', desc: 'Мультсериалы' },
      {
        id: '162',
        cat: 'TV/Documentary',
        desc: 'Документальные фильмы и телепередачи',
      },
      {
        id: '392',
        cat: 'TV',
        desc: 'Развлекательные телепередачи и шоу',
      },
      { id: '693', cat: 'TV/Anime', desc: 'Аниме (Основной)' },
      { id: '684', cat: 'TV/Anime', desc: 'Аниме (DVD)' },
      { id: '677', cat: 'TV/Anime', desc: 'Аниме DVD [Бутлег]' },
      { id: '96', cat: 'TV/Anime', desc: 'Аниме DVD [Лицензии]' },
      { id: '678', cat: 'TV/Anime', desc: 'Аниме (HD и Blu-ray)' },
      { id: '660', cat: 'TV/Anime', desc: 'Аниме Blu-ray и Remux' },
      { id: '95', cat: 'TV/Anime', desc: 'Аниме HD Rips' },
      { id: '106', cat: 'TV/Anime', desc: 'Аниме Манга и прочий арт' },
      { id: '109', cat: 'TV/Anime', desc: 'Аниме Манга' },
      { id: '107', cat: 'TV/Anime', desc: 'Аниме Обои, артбуки и др.' },
      { id: '685', cat: 'TV/Anime', desc: 'Аниме Азиатские мультфильмы' },
      { id: '687', cat: 'TV/Anime', desc: 'Аниме DVD' },
      { id: '686', cat: 'TV/Anime', desc: 'Аниме Rips' },
      { id: '688', cat: 'TV/Anime', desc: 'Аниме HD Rips' },
      { id: '680', cat: 'TV/Anime', desc: 'Аниме (Хентай)' },
      { id: '681', cat: 'TV/Anime', desc: 'Аниме Censored' },
      { id: '682', cat: 'TV/Anime', desc: 'Аниме UnCensored' },
      { id: '683', cat: 'TV/Anime', desc: 'Аниме PtCensored' },
      {
        id: '697',
        cat: 'TV/Anime',
        desc: 'Аниме Манга, обои, артбуки и др.',
      },
      {
        id: '451',
        cat: 'Audio/Lossless',
        desc: 'Классическая музыка (lossless)',
      },
      {
        id: '452',
        cat: 'Audio/Lossless',
        desc: 'Классическая музыка в современной обработке (lossless)',
      },
      { id: '453', cat: 'Audio/MP3', desc: 'Классическая музыка (mp3)' },
      {
        id: '454',
        cat: 'Audio/MP3',
        desc: 'Классическая музыка в современной обработке (mp3)',
      },
      {
        id: '455',
        cat: 'Audio/Video',
        desc: 'Классическая музыка (video)',
      },
      {
        id: '457',
        cat: 'Audio/Lossless',
        desc: 'Зарубежный Jazz, Blues (lossless)',
      },
      {
        id: '458',
        cat: 'Audio/Lossless',
        desc: 'Отечественный Jazz, Blues (lossless)',
      },
      {
        id: '459',
        cat: 'Audio/MP3',
        desc: 'Зарубежный Jazz, Blues (mp3)',
      },
      {
        id: '460',
        cat: 'Audio/MP3',
        desc: 'Отечественный Jazz, Blues (mp3)',
      },
      { id: '461', cat: 'Audio/Video', desc: 'Jazz, Blues (video)' },
      {
        id: '463',
        cat: 'Audio/Lossless',
        desc: 'Зарубежный Reggae, Ska, Dub (lossless)',
      },
      {
        id: '464',
        cat: 'Audio/Lossless',
        desc: 'Отечественный Reggae, Ska, Dub (lossless)',
      },
      {
        id: '465',
        cat: 'Audio/MP3',
        desc: 'Зарубежный Reggae, Ska, Dub (mp3)',
      },
      {
        id: '466',
        cat: 'Audio/MP3',
        desc: 'Отечественный Reggae, Ska, Dub (mp3)',
      },
      { id: '467', cat: 'Audio/Video', desc: 'Reggae, Ska, Dub (video)' },
      { id: '469', cat: 'Audio/Lossless', desc: 'Rосk (losslеss)' },
      { id: '470', cat: 'Audio/Lossless', desc: 'Mеtаl (losslеss)' },
      {
        id: '471',
        cat: 'Audio/Lossless',
        desc: 'Аltеrnаtivе, Рunk, Indереndеnt (lоsslеss)',
      },
      { id: '472', cat: 'Audio/MP3', desc: 'Rосk (mр3)' },
      { id: '473', cat: 'Audio/MP3', desc: 'Mеtаl (mр3)' },
      {
        id: '474',
        cat: 'Audio/MP3',
        desc: 'Аltеrnаtivе, Рunk, Indереndеnt (mр3)',
      },
      { id: '475', cat: 'Audio/Video', desc: 'Зарубежный Rock (video)' },
      {
        id: '477',
        cat: 'Audio/Lossless',
        desc: 'Rосk, Punk, Alternative (losslеss)',
      },
      { id: '478', cat: 'Audio', desc: 'Mеtаl (losslеss)' },
      {
        id: '479',
        cat: 'Audio/MP3',
        desc: 'Rосk, Punk, Alternative (mр3)',
      },
      { id: '480', cat: 'Audio/MP3', desc: 'Mеtаl (mр3)' },
      {
        id: '481',
        cat: 'Audio/Video',
        desc: 'Отечественный Rock (video)',
      },
      {
        id: '483',
        cat: 'Audio/Lossless',
        desc: 'Зарубежная Поп-музыка (lossless)',
      },
      {
        id: '484',
        cat: 'Audio/Lossless',
        desc: 'Отечественная Поп-музыка (lossless)',
      },
      {
        id: '485',
        cat: 'Audio/Lossless',
        desc: 'Eurodance, Technopop, Disco (lossless)',
      },
      {
        id: '486',
        cat: 'Audio/MP3',
        desc: 'Зарубежная Поп-музыка (mp3)',
      },
      {
        id: '487',
        cat: 'Audio/MP3',
        desc: 'Отечественная Поп-музыка (mp3)',
      },
      {
        id: '488',
        cat: 'Audio/MP3',
        desc: 'Eurodance, Technopop, Disco (mp3)',
      },
      {
        id: '489',
        cat: 'Audio/MP3',
        desc: 'Поп-музыка, Eurodance, Disco (официальные сборники) (mp3)',
      },
      {
        id: '490',
        cat: 'Audio/Video',
        desc: 'Поп-музыка, Eurodance, Disco (video)',
      },
      {
        id: '492',
        cat: 'Audio/Lossless',
        desc: 'Фольклор, Народная и Этническая музыка (lossless)',
      },
      {
        id: '493',
        cat: 'Audio/MP3',
        desc: 'Фольклор, Народная и Этническая музыка (mp3)',
      },
      {
        id: '494',
        cat: 'Audio/Video',
        desc: 'Фольклор, Народная и Этническая музыка (video)',
      },
      {
        id: '496',
        cat: 'Audio/Lossless',
        desc: 'NewAge, Meditative (lossless)',
      },
      {
        id: '497',
        cat: 'Audio/Lossless',
        desc: 'Flamenco, Акустическая гитара (lossless)',
      },
      { id: '498', cat: 'Audio/MP3', desc: 'NewAge, Meditative (mp3)' },
      {
        id: '499',
        cat: 'Audio/MP3',
        desc: 'Flamenco, Акустическая гитара (mp3)',
      },
      {
        id: '500',
        cat: 'Audio/Video',
        desc: 'New Age, Relax, Meditative & Flamenco (video)',
      },
      { id: '501', cat: 'Audio', desc: 'Звуки природы' },
      { id: '502', cat: 'Audio', desc: 'Психоактивныe аудиопрограммы' },
      {
        id: '504',
        cat: 'Audio/Lossless',
        desc: "Зарубежный Rap, Hip-Hop, R'n'B (lossless)",
      },
      {
        id: '505',
        cat: 'Audio/Lossless',
        desc: "Отечественный Rap, Hip-Hop, R'n'B (lossless)",
      },
      {
        id: '506',
        cat: 'Audio/MP3',
        desc: "Зарубежный Rap, Hip-Hop, R'n'B (mp3)",
      },
      {
        id: '507',
        cat: 'Audio/MP3',
        desc: "Отечественный Rap, Hip-Hop, R'n'B (mp3)",
      },
      {
        id: '508',
        cat: 'Audio/Video',
        desc: "Rap, Hip-Hop, R'n'B (video)",
      },
      {
        id: '510',
        cat: 'Audio/Lossless',
        desc: 'Trance, Goa Trance, Psy-Trance, PsyChill, Ambient Dub (lossl..',
      },
      {
        id: '511',
        cat: 'Audio/Lossless',
        desc: 'House, Techno, Hardcore, Hardstyle, Jumpstyle (lossless)',
      },
      {
        id: '512',
        cat: 'Audio/Lossless',
        desc: 'Drum & Bass, Jungle, Breakbeat, Dubstep, IDM (lossless)',
      },
      {
        id: '513',
        cat: 'Audio/Lossless',
        desc: 'Chillout, Lounge, Downtempo, Trip-Hop (lossless)',
      },
      {
        id: '514',
        cat: 'Audio/Lossless',
        desc: 'Traditional Electronic, Ambient, Experimental (lossless)',
      },
      {
        id: '515',
        cat: 'Audio',
        desc: 'Industrial, Noise, EBM, Dark Electro, Aggrotech, Synthpop, N..',
      },
      {
        id: '516',
        cat: 'Audio/MP3',
        desc: 'Trance, Goa Trance, Psy-Trance, PsyChill, Ambient Dub (mp3)',
      },
      {
        id: '517',
        cat: 'Audio/MP3',
        desc: 'House, Techno, Hardcore, Hardstyle, Jumpstyle (mp3)',
      },
      {
        id: '518',
        cat: 'Audio/MP3',
        desc: 'Drum & Bass, Jungle, Breakbeat, Dubstep, IDM (mp3)',
      },
      {
        id: '519',
        cat: 'Audio/MP3',
        desc: 'Chillout, Lounge, Downtempo, Trip-Hop (mp3)',
      },
      {
        id: '520',
        cat: 'Audio/MP3',
        desc: 'Traditional Electronic, Ambient, Experimental (mp3)',
      },
      {
        id: '521',
        cat: 'Audio',
        desc: 'Industrial, Noise, EBM, Dark Electro, Aggrotech, Synthpop, N..',
      },
      {
        id: '522',
        cat: 'Audio/Video',
        desc: 'Электронная музыка (video)',
      },
      {
        id: '524',
        cat: 'Audio/Lossless',
        desc: 'Зарубежный шансон (lossless)',
      },
      {
        id: '525',
        cat: 'Audio/Lossless',
        desc: 'Отечественный шансон (lossless)',
      },
      {
        id: '526',
        cat: 'Audio/Lossless',
        desc: 'Авторская песня (lossless)',
      },
      {
        id: '527',
        cat: 'Audio/Lossless',
        desc: 'Военная песня (lossless)',
      },
      { id: '528', cat: 'Audio/MP3', desc: 'Зарубежный шансон (mp3)' },
      { id: '529', cat: 'Audio/MP3', desc: 'Отечественный шансон (mp3)' },
      {
        id: '530',
        cat: 'Audio',
        desc: 'Отечественный шансон (официальные сборники) (mp3)',
      },
      { id: '531', cat: 'Audio/MP3', desc: 'Авторская песня (mp3)' },
      { id: '532', cat: 'Audio/MP3', desc: 'Военная песня (mp3)' },
      {
        id: '533',
        cat: 'Audio/Video',
        desc: 'Шансон, Авторская и Военная песня (video)',
      },
      {
        id: '402',
        cat: 'Audio/Lossless',
        desc: 'Саундтреки к фильмам и мультфильмам (lossless)',
      },
      {
        id: '403',
        cat: 'Audio/Lossless',
        desc: 'Саундтреки к аниме (lossless)',
      },
      {
        id: '399',
        cat: 'Audio/Lossless',
        desc: 'Саундтреки к играм (lossless)',
      },
      {
        id: '401',
        cat: 'Audio/MP3',
        desc: 'Саундтреки к фильмам и мультфильмам (mp3)',
      },
      { id: '404', cat: 'Audio/MP3', desc: 'Саундтреки к аниме (mp3)' },
      { id: '400', cat: 'Audio/MP3', desc: 'Саундтреки к играм (mp3)' },
      {
        id: '535',
        cat: 'Audio/Lossless',
        desc: 'Зарубежная музыка других жанров (lossless)',
      },
      {
        id: '536',
        cat: 'Audio/Lossless',
        desc: 'Отечественная музыка других жанров (lossless)',
      },
      {
        id: '537',
        cat: 'Audio/MP3',
        desc: 'Зарубежная музыка других жанров (mp3)',
      },
      {
        id: '538',
        cat: 'Audio/MP3',
        desc: 'Отечественная музыка других жанров (mp3)',
      },
      {
        id: '539',
        cat: 'Audio/Video',
        desc: 'Музыка других жанров (video)',
      },
      {
        id: '540',
        cat: 'Audio',
        desc: 'Караоке и минусовки (фонограммы)',
      },
      { id: '541', cat: 'Audio', desc: 'Сборники песен для детей' },
      {
        id: '542',
        cat: 'Audio',
        desc: 'Неофициальные и внежанровые сборники',
      },
      {
        id: '543',
        cat: 'Audio',
        desc: 'Неофициальные кинематографические видео',
      },
      { id: '545', cat: 'Audio', desc: 'Многоканальная музыка' },
      { id: '546', cat: 'Audio', desc: 'Собственные оцифровки' },
      { id: '547', cat: 'Audio', desc: 'Hi-Res stereo' },
      { id: '202', cat: 'PC/Mac', desc: 'Mac OS (для Apple Macintosh)' },
      { id: '203', cat: 'PC/Mac', desc: 'Mac OS (для РС-Hackintosh)' },
      {
        id: '204',
        cat: 'PC/Mac',
        desc: 'Программы для просмотра и обработки видео Mac OS',
      },
      {
        id: '205',
        cat: 'PC/Mac',
        desc: 'Программы для создания и обработки графики Mac OS',
      },
      {
        id: '206',
        cat: 'PC/Mac',
        desc: 'Аудио редакторы и конверторы для Mac OS',
      },
      {
        id: '939',
        cat: 'PC/Mac',
        desc: '[macOS] Информационная безопасность',
      },
      { id: '940', cat: 'PC/Mac', desc: '[macOS] Интернет-приложения' },
      {
        id: '207',
        cat: 'PC/Mac',
        desc: 'Системные программы для Mac OS',
      },
      {
        id: '215',
        cat: 'PC',
        desc: 'Операционные системы (Unix и Unix-подобные)',
      },
      {
        id: '216',
        cat: 'PC',
        desc: 'Программное обеспечение для Unix и Unix-подобных OS',
      },
      {
        id: '217',
        cat: 'PC',
        desc: 'Другие OS и программное обеспечение под них',
      },
      {
        id: '227',
        cat: 'PC',
        desc: 'Настольные OS, выпущенные до 2001 года (Microsoft Windows OS..',
      },
      { id: '228', cat: 'PC', desc: 'Windows XP' },
      { id: '229', cat: 'PC', desc: 'Windows Vista' },
      { id: '230', cat: 'PC', desc: 'Windows 7' },
      { id: '879', cat: 'PC', desc: 'Windows 8' },
      { id: '905', cat: 'PC', desc: 'Windows 10' },
      { id: '698', cat: 'PC', desc: 'Сборки (Microsoft Windows XP)' },
      { id: '701', cat: 'PC', desc: 'Сборки (Microsoft Windows 7)' },
      { id: '880', cat: 'PC', desc: 'Сборки (Microsoft Windows 8)' },
      { id: '906', cat: 'PC', desc: 'Сборки (Microsoft Windows 10)' },
      { id: '231', cat: 'PC', desc: 'Серверные (Microsoft Windows OS)' },
      { id: '232', cat: 'PC', desc: 'Разное (Microsoft Windows OS)' },
      { id: '236', cat: 'PC', desc: 'Работа с жёстким диском' },
      { id: '237', cat: 'PC', desc: 'Резервное копирование' },
      { id: '240', cat: 'PC', desc: 'Архиваторы и файловые менеджеры' },
      {
        id: '239',
        cat: 'PC',
        desc: 'Программы для настройки и оптимизации ОС',
      },
      { id: '241', cat: 'PC', desc: 'Сервисное обслуживание компьютера' },
      { id: '242', cat: 'PC', desc: 'Работа с носителями информации' },
      { id: '243', cat: 'PC', desc: 'Информация и диагностика' },
      { id: '244', cat: 'PC', desc: 'Программы для интернет и сетей' },
      { id: '245', cat: 'PC', desc: 'Антивирусы и Файерволы' },
      { id: '246', cat: 'PC', desc: 'Программы для защиты информации' },
      { id: '247', cat: 'PC', desc: 'Драйвера' },
      { id: '248', cat: 'PC', desc: 'Серверное ПО для Windows' },
      { id: '249', cat: 'PC', desc: 'Изменение интерфейса ОС Windows' },
      { id: '250', cat: 'PC', desc: 'Скринсейверы' },
      {
        id: '251',
        cat: 'PC',
        desc: 'Разное (Системные программы под Windows)',
      },
      {
        id: '409',
        cat: 'PC',
        desc: 'Системы автоматизации проектных работ (САПР)',
      },
      {
        id: '607',
        cat: 'PC',
        desc: 'Программы для архитекторов и дизайнеров интерьеров',
      },
      { id: '593', cat: 'PC', desc: 'Офисные программы и системы' },
      { id: '595', cat: 'PC', desc: 'Системы для научной работы' },
      { id: '594', cat: 'PC', desc: 'Системы для бизнеса' },
      {
        id: '257',
        cat: 'PC',
        desc: 'Каталогизаторы и просмотрщики графики',
      },
      {
        id: '258',
        cat: 'PC',
        desc: 'Аудио- и видео-, CD- проигрыватели и каталогизаторы',
      },
      { id: '259', cat: 'PC', desc: 'Программы для интернет и сетей' },
      {
        id: '260',
        cat: 'PC',
        desc: 'Распознавание текста, звука и синтез речи',
      },
      { id: '261', cat: 'PC', desc: 'Словари и переводчики' },
      {
        id: '262',
        cat: 'PC',
        desc: 'Программное обеспечение для автолюбителей',
      },
      {
        id: '263',
        cat: 'PC',
        desc: 'Медицинское программное обеспечение',
      },
      { id: '264', cat: 'PC', desc: 'Справочные системы и карты' },
      {
        id: '265',
        cat: 'PC',
        desc: 'Разное (Пользовательские программы)',
      },
      { id: '268', cat: 'PC', desc: 'WYSIWYG Редакторы для веб-диза' },
      { id: '269', cat: 'PC', desc: 'Текстовые редакторы с подсветкой' },
      {
        id: '270',
        cat: 'PC',
        desc: 'Среды программирования, компиляторы и вспомогательные програ..',
      },
      {
        id: '271',
        cat: 'PC',
        desc: 'Компоненты для сред программирования',
      },
      {
        id: '272',
        cat: 'PC',
        desc: 'Системы управления базами данных (СУБД)',
      },
      { id: '273', cat: 'PC', desc: 'Скрипты и шаблоны' },
      {
        id: '274',
        cat: 'PC',
        desc: 'Разное (Веб-разработка и программирование)',
      },
      { id: '278', cat: 'PC', desc: 'Программные комплекты' },
      {
        id: '279',
        cat: 'PC',
        desc: 'Плагины для программ компании Adobe',
      },
      { id: '280', cat: 'PC', desc: 'Графические редакторы' },
      {
        id: '281',
        cat: 'PC',
        desc: 'Программы для верстки, печати и работы со шрифтами',
      },
      {
        id: '282',
        cat: 'PC',
        desc: '3D моделирование, рендеринг и плагины для них',
      },
      { id: '283', cat: 'PC', desc: 'Анимация' },
      { id: '284', cat: 'PC', desc: 'Создание DVD и BD дисков' },
      { id: '285', cat: 'PC', desc: 'Редакторы видео' },
      { id: '286', cat: 'PC', desc: 'Видео- Аудио- конверторы' },
      { id: '287', cat: 'PC', desc: 'Работа со звуком' },
      {
        id: '290',
        cat: 'PC',
        desc: 'Разное (Программы для работы с мультимедиа и 3D)',
      },
      { id: '293', cat: 'PC', desc: 'Растровые и Векторные Клипарты' },
      { id: '294', cat: 'PC', desc: 'Заготовки, виньетки, рамки' },
      {
        id: '295',
        cat: 'PC',
        desc: 'Стили, кисти, формы и узоры для Adobe Photoshop',
      },
      { id: '296', cat: 'PC', desc: 'Текстуры и материалы' },
      { id: '297', cat: 'PC', desc: '3D графика' },
      { id: '298', cat: 'PC', desc: 'Футажи' },
      { id: '299', cat: 'PC', desc: 'Звуковые эффекты' },
      { id: '300', cat: 'PC', desc: 'Библиотеки сэмплов' },
      { id: '301', cat: 'PC', desc: 'Шрифты' },
      { id: '302', cat: 'PC', desc: 'Photostoсks' },
      {
        id: '303',
        cat: 'PC',
        desc: 'Разное (Материалы для мультимедиа и дизайна)',
      },
      { id: '597', cat: 'PC', desc: 'Справочно-правовые Системы' },
      { id: '600', cat: 'PC', desc: 'Консультант Плюс' },
      { id: '599', cat: 'PC', desc: 'Гарант' },
      { id: '601', cat: 'PC', desc: 'Кодекс' },
      { id: '623', cat: 'PC', desc: 'Мобильные телефоны' },
      { id: '624', cat: 'PC', desc: 'КПК' },
      { id: '625', cat: 'PC', desc: 'Навигаторы' },
      { id: '626', cat: 'PC', desc: 'Карты для навигаторов' },
      { id: '627', cat: 'PC', desc: 'Плееры' },
      {
        id: '628',
        cat: 'PC',
        desc: 'Разное (Мобильные устройства и КПК)',
      },
      {
        id: '622',
        cat: 'PC/Phone-IOS',
        desc: 'Apple Mobile Device Software',
      },
      {
        id: '667',
        cat: 'PC/Phone-IOS',
        desc: 'Прошивки (iPhone/iPod Touch/iPad)',
      },
      {
        id: '668',
        cat: 'PC/Phone-IOS',
        desc: 'Программы (iPhone/iPod Touch/iPad)',
      },
      {
        id: '669',
        cat: 'PC/Phone-IOS',
        desc: 'Игры (iPhone/iPod Touch/iPad)',
      },
      {
        id: '670',
        cat: 'PC/Phone-IOS',
        desc: 'Видео (iPhone/iPod Touch/iPad)',
      },
      {
        id: '672',
        cat: 'PC/Phone-IOS',
        desc: 'Разное (iPhone/iPod Touch/iPad)',
      },
      {
        id: '671',
        cat: 'PC/Phone-IOS',
        desc: 'Музыка (iPhone/iPod Touch/iPad)',
      },
      { id: '639', cat: 'PC', desc: 'Обучающие видеоматериалы' },
      { id: '640', cat: 'PC', desc: 'Мультимедийные материалы' },
      { id: '642', cat: 'PC', desc: 'Разное' },
      { id: '717', cat: 'Books', desc: 'Аудиокниги' },
      { id: '740', cat: 'Books', desc: 'Проект S.T.A.L.K.E.R.' },
      { id: '738', cat: 'Books', desc: 'Детектив / боевик' },
      {
        id: '739',
        cat: 'Books',
        desc: 'Фантастика / фэнтези / мистика / ужасы',
      },
      {
        id: '836',
        cat: 'Books',
        desc: 'Роман / комедийные произведения / приключения',
      },
      {
        id: '838',
        cat: 'Books',
        desc: 'Классическая литература и современная проза',
      },
      { id: '837', cat: 'Books', desc: 'Образование и Право' },
      { id: '843', cat: 'Books', desc: 'Разное' },
      { id: '713', cat: 'Books', desc: 'Художественная литература' },
      { id: '724', cat: 'Books', desc: 'Детектив / боевик' },
      {
        id: '728',
        cat: 'Books',
        desc: 'Фантастика / фэнтези / мистика / ужасы',
      },
      { id: '725', cat: 'Books', desc: 'Роман / приключения / драма' },
      { id: '727', cat: 'Books', desc: 'Комедийные произведения' },
      { id: '723', cat: 'Books', desc: 'Историческая книга' },
      {
        id: '721',
        cat: 'Books',
        desc: 'Классическая литература и современная проза',
      },
      { id: '722', cat: 'Books', desc: 'Поэзия' },
      { id: '844', cat: 'Books', desc: 'Разное' },
      { id: '718', cat: 'Books', desc: 'Журналы' },
      { id: '763', cat: 'Books', desc: 'Эротические журналы' },
      { id: '715', cat: 'Books', desc: 'Компьютерная литература' },
      { id: '839', cat: 'Books', desc: 'Научная и тех.литература' },
      {
        id: '719',
        cat: 'Books',
        desc: 'Образование, Право и Психология',
      },
      { id: '846', cat: 'Books', desc: 'Сексология' },
      { id: '840', cat: 'Books', desc: 'Военное дело' },
      { id: '842', cat: 'Books', desc: 'Спорт и физическое воспитание' },
      { id: '841', cat: 'Books', desc: 'Хобби' },
      { id: '716', cat: 'Books', desc: 'Дом и семейный очаг' },
      {
        id: '714',
        cat: 'Books',
        desc: 'Книги для малышей и их родителей',
      },
      { id: '845', cat: 'Books', desc: 'Комиксы' },
      { id: '741', cat: 'Books', desc: 'Разное' },
      {
        id: '578',
        cat: 'Other',
        desc: 'µTorrent и BitTorrent 4.x, 5.x, 6.x',
      },
      { id: '378', cat: 'Other', desc: 'Анонсы' },
      { id: '644', cat: 'Other', desc: 'Разное' },
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
    { name: 'username', type: 'text', label: 'Username' },
    { name: 'password', type: 'password', label: 'Password' },
    {
      name: 'freeleech',
      type: 'checkbox',
      label: 'Search freeleech only',
      default: false,
    },
    {
      name: 'striprussian',
      type: 'checkbox',
      label: 'Strip Russian Letters',
      default: false,
    },
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: '1',
      options: { '1': 'created', '2': 'title', '7': 'size', '10': 'seeders' },
    },
    {
      name: 'type',
      type: 'select',
      label: 'Order requested from site',
      default: '2',
      options: { '1': 'asc', '2': 'desc' },
    },
  ],
  login: {
    path: 'login.php',
    method: 'form',
    form: 'form[action$="/login.php"]',
    inputs: {
      login_username: '{{ .Config.username }}',
      login_password: '{{ .Config.password }}',
      autologin: 1,
      redirect: 'index.php',
    },
    error: [{ selector: 'h4:contains("Вы ввели")' }],
    test: {
      path: 'index.php',
      selector: 'a[href="./login.php?logout=1"]',
    },
  },
  search: {
    paths: [{ path: 'tracker.php' }],
    inputs: {
      $raw: '{{ if .Categories }}{{ range .Categories }}f[]={{.}}&{{end}}{{else}}f[]=-1{{end}}',
      nm: '{{ .Keywords }}',
      o: '{{ .Config.sort }}',
      s: '{{ .Config.type }}',
      tm: -1,
      sns: -1,
      gold: '{{ if .Config.freeleech }}1{{ else }}{{ end }}',
      silver: '',
    },
    rows: {
      selector: 'tr[id^="tor_"]:has(a[href^="./download.php?id="])',
    },
    fields: {
      category: {
        selector: 'td a.gen',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'f' }],
      },
      title: {
        selector: 'a.genmed',
        filters: [
          { name: 'replace', args: [' / ', ' '] },
          { name: 'replace', args: ['Кураж-Бамбей', 'kurazh'] },
          { name: 'replace', args: ['Кубик в Кубе', 'Kubik'] },
          {
            name: 're_replace',
            args: [
              '((\\([12][0-9]{3}\\))(.+)\\([Сс]езон\\s+(\\d+).+[Сс]ери[ия]\\s+(?:(\\d+-*\\d*).*\\d+)*\\))',
              ' - S$4E$5 - rus $3',
            ],
          },
          {
            name: 're_replace',
            args: [
              '(\\([А-Яа-яЁё\\W]+\\))|(^[А-Яа-яЁё\\W\\d]+\\/ )|([а-яА-ЯЁё \\-]+,+)|([а-яА-ЯЁё]+)',
              '{{ if .Config.striprussian }}{{ else }}$1$2$3$4{{ end }}',
            ],
          },
          { name: 'replace', args: ['-Rip', 'Rip'] },
          { name: 'replace', args: ['WEB-DL', 'WEBDL'] },
          { name: 'replace', args: ['WEBDLRip', 'WEBDL'] },
          { name: 'replace', args: ['HDTVRip', 'HDTV'] },
        ],
      },
      details: { selector: 'a.genmed', attribute: 'href' },
      download: {
        selector: 'a[href^="./download.php?id="]',
        attribute: 'href',
      },
      size: { selector: 'td:nth-child(6) > u' },
      date: { selector: 'td:last-child > u' },
      seeders: { selector: 'td.seedmed > b' },
      leechers: { selector: 'td.leechmed > b' },
      downloadvolumefactor: {
        case: {
          'img[src="images/tor_gold.gif"]': 0,
          'img[src="images/tor_silver.gif"]': 0.5,
          '*': 1,
        },
      },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
