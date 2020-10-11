import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'rutracker-ru',
  name: 'RuTracker.RU',
  description: 'RuTracker.RU is a RUSSIAN Public Torrent Tracker for MOVIES / GENERAL',
  language: 'ru-RU',
  type: 'public',
  encoding: 'UTF-8',
  links: ['http://rutracker.ru/'],
  caps: {
    categorymappings: [
      { id: '1564', cat: 'Movies', desc: 'Новинки кинопроката 2020' },
      {
        id: '1573',
        cat: 'Movies',
        desc: ' |- Зарубежные новинки (2020)',
      },
      {
        id: '1572',
        cat: 'Movies',
        desc: ' |- Отечественные новинки (2020)',
      },
      {
        id: '1571',
        cat: 'Movies/HD',
        desc: ' |- Зарубежные новинки в 720p (2020)',
      },
      {
        id: '1570',
        cat: 'Movies/HD',
        desc: ' |- Отечественные новинки в 720p (2020)',
      },
      {
        id: '1569',
        cat: 'Movies/HD',
        desc: ' |- Зарубежные новинки в 1080p (2020)',
      },
      {
        id: '1568',
        cat: 'Movies/HD',
        desc: ' |- Отечественные новинки в 1080р (2020)',
      },
      { id: '1543', cat: 'Movies', desc: 'Фильмы 2019 года' },
      { id: '1544', cat: 'Movies', desc: ' |- Зарубежные фильмы (2019)' },
      {
        id: '1545',
        cat: 'Movies',
        desc: ' |- Отечественные фильмы (2019)',
      },
      {
        id: '1546',
        cat: 'Movies',
        desc: ' |- Зарубежные фильмы в 720p (2019)',
      },
      {
        id: '1547',
        cat: 'Movies/HD',
        desc: ' |- Отечественные фильмы в 720p (2019)',
      },
      {
        id: '1548',
        cat: 'Movies/HD',
        desc: ' |- Зарубежные фильмы в 1080p (2019)',
      },
      {
        id: '1549',
        cat: 'Movies/HD',
        desc: ' |- Отечественные фильмы в 1080р (2019)',
      },
      { id: '1450', cat: 'Movies', desc: 'Фильмы 2018 года' },
      { id: '1451', cat: 'Movies', desc: ' |- Зарубежные фильмы (2018)' },
      {
        id: '1452',
        cat: 'Movies',
        desc: ' |- Отечественные фильмы (2018)',
      },
      {
        id: '1453',
        cat: 'Movies/HD',
        desc: ' |- Зарубежные фильмы в 720p (2018)',
      },
      {
        id: '1454',
        cat: 'Movies/HD',
        desc: ' |- Отечественные фильмы в 720p (2018)',
      },
      {
        id: '1455',
        cat: 'Movies/HD',
        desc: ' |- Зарубежные фильмы в 1080p (2018)',
      },
      {
        id: '1456',
        cat: 'Movies/HD',
        desc: ' |- Отечественные фильмы в 1080р (2018)',
      },
      { id: '1324', cat: 'Movies', desc: 'Фильмы 2017 года' },
      { id: '1325', cat: 'Movies', desc: ' |- Зарубежные фильмы (2017)' },
      {
        id: '1326',
        cat: 'Movies',
        desc: ' |- Отечественные фильмы (2017)',
      },
      {
        id: '1327',
        cat: 'Movies/HD',
        desc: ' |- Зарубежные фильмы в 720p (2017)',
      },
      {
        id: '1328',
        cat: 'Movies/HD',
        desc: ' |- Отечественные фильмы в 720p (2017)',
      },
      {
        id: '1329',
        cat: 'Movies/HD',
        desc: ' |- Зарубежные фильмы в 1080p (2017)',
      },
      {
        id: '1330',
        cat: 'Movies/HD',
        desc: ' |- Отечественные фильмы в 1080р (2017)',
      },
      { id: '820', cat: 'Movies/HD', desc: 'Зарубежные фильмы' },
      {
        id: '1346',
        cat: 'Movies/UHD',
        desc: ' |- [4K | ULTRA HD | 2160p]',
      },
      {
        id: '843',
        cat: 'Movies/HD',
        desc: ' |- Blu-Ray , BDRip 1080p , HDTV 1080 , WEB-DL 1080р',
      },
      {
        id: '842',
        cat: 'Movies/HD',
        desc: ' |- BDRip 720p , WEB-DL 720p , HDTVRip 720p',
      },
      { id: '840', cat: 'Movies/DVD', desc: ' |- DVD5 , DVD9' },
      { id: '841', cat: 'Movies/3D', desc: ' |- Фильмы в 3D формате' },
      { id: '825', cat: 'Movies', desc: ' |- Азиатское кино' },
      { id: '830', cat: 'Movies', desc: ' |- Индийское кино' },
      {
        id: '826',
        cat: 'Movies',
        desc: ' |- Боевик , Приключения , Вестерн',
      },
      { id: '831', cat: 'Movies', desc: ' |- Военные , Исторические' },
      { id: '828', cat: 'Movies', desc: ' |- Детектив , Криминал' },
      { id: '829', cat: 'Movies', desc: ' |- Драма , Мелодрама' },
      {
        id: '833',
        cat: 'Movies',
        desc: ' |- Комедия , Мюзикл , Семейный',
      },
      { id: '835', cat: 'Movies', desc: ' |- Мистика , Фэнтези' },
      { id: '839', cat: 'Movies', desc: ' |- Ужасы , Триллер' },
      { id: '836', cat: 'Movies', desc: ' |- Фантастика' },
      { id: '832', cat: 'Movies', desc: ' |- Классика зарубежного кино' },
      {
        id: '1608',
        cat: 'Movies',
        desc: ' |- Классика зарубежного кино (720p, 1080p)',
      },
      {
        id: '1317',
        cat: 'Movies',
        desc: ' |- Детские фильмы, сказки, сериалы',
      },
      {
        id: '837',
        cat: 'Movies',
        desc: ' |- Сборники фильмов , Фильмографии',
      },
      { id: '838', cat: 'Movies', desc: ' |- Короткометражные фильмы' },
      { id: '845', cat: 'Movies', desc: ' |- В оригинале' },
      {
        id: '1560',
        cat: 'Movies',
        desc: ' |- | - фильмы с переводом UKR',
      },
      { id: '798', cat: 'Movies/HD', desc: 'Российские фильмы' },
      {
        id: '817',
        cat: 'Movies/HD',
        desc: ' |- Blu-Ray , BDRip 1080p , HDTV 1080 , WEB-DL 1080р',
      },
      {
        id: '818',
        cat: 'Movies/HD',
        desc: ' |- BDRip 720p , WEB-DL 720p , HDTVRip 720p',
      },
      { id: '802', cat: 'Movies/DVD', desc: ' |- DVD5 , DVD9' },
      { id: '801', cat: 'Movies/3D', desc: ' |- Фильмы в 3D формате' },
      {
        id: '815',
        cat: 'Movies',
        desc: ' |- Боевик , Приключения , Вестерн',
      },
      { id: '811', cat: 'Movies', desc: ' |- Военные , Исторические' },
      { id: '812', cat: 'Movies', desc: ' |- Детектив , Криминал' },
      { id: '813', cat: 'Movies', desc: ' |- Драма , Мелодрама' },
      {
        id: '809',
        cat: 'Movies',
        desc: ' |- Комедия , Мюзикл , Семейный',
      },
      { id: '807', cat: 'Movies', desc: ' |- Мистика , Фэнтези' },
      { id: '806', cat: 'Movies', desc: ' |- Ужасы , Триллер' },
      { id: '805', cat: 'Movies', desc: ' |- Фантастика' },
      { id: '810', cat: 'Movies', desc: 'Кино СССР' },
      { id: '1609', cat: 'Movies', desc: ' |- Кино СССР (720p, 1080p)' },
      {
        id: '1318',
        cat: 'Movies',
        desc: ' |- Детские фильмы, сказки, сериалы',
      },
      {
        id: '804',
        cat: 'Movies',
        desc: ' |- Сборники фильмов / Фильмографии',
      },
      { id: '17', cat: 'TV', desc: 'Зарубежные сериалы' },
      { id: '1551', cat: 'TV/UHD', desc: ' |- [4K | ULTRA HD | 2160p]' },
      {
        id: '1085',
        cat: 'TV/HD',
        desc: ' |- BDRip 1080p , HDTV 1080 , WEB-DL 1080р',
      },
      {
        id: '1086',
        cat: 'TV/HD',
        desc: ' |- BDRip 720p , WEB-DL 720p , HDTVRip 720p',
      },
      { id: '1087', cat: 'TV/SD', desc: ' |- DVD5 , DVD9' },
      { id: '16', cat: 'TV', desc: 'Отечественные сериалы' },
      {
        id: '1082',
        cat: 'TV/HD',
        desc: ' |- BDRip 1080p , HDTV 1080 , WEB-DL 1080р',
      },
      {
        id: '1083',
        cat: 'TV/HD',
        desc: ' |- BDRip 720p , WEB-DL 720p , HDTVRip 720p',
      },
      { id: '1084', cat: 'TV/SD', desc: ' |- DVD5 , DVD9' },
      { id: '125', cat: 'TV', desc: 'Мультфильмы' },
      {
        id: '1353',
        cat: 'TV/HD',
        desc: ' |- BDRip 1080p , HDTV 1080 , WEB-DL 1080р',
      },
      {
        id: '1355',
        cat: 'TV/HD',
        desc: ' |- BDRip 720p , WEB-DL 720p , HDTVRip 720p',
      },
      { id: '1352', cat: 'TV/SD', desc: ' |- DVD5 , DVD9' },
      { id: '1343', cat: 'TV/Anime', desc: ' |- Аниме' },
      {
        id: '1025',
        cat: 'TV/Anime',
        desc: ' |- Мультфильмы в 3D формате',
      },
      { id: '8', cat: 'TV', desc: 'Мультсериалы' },
      {
        id: '1347',
        cat: 'TV/HD',
        desc: ' |- BDRip 1080p , HDTV 1080 , WEB-DL 1080р',
      },
      {
        id: '1348',
        cat: 'TV/HD',
        desc: ' |- BDRip 720p , WEB-DL 720p , HDTVRip 720p',
      },
      { id: '1349', cat: 'TV/SD', desc: ' |- DVD5 , DVD9' },
      { id: '60', cat: 'PC/Games', desc: 'Игры для PC' },
      {
        id: '73',
        cat: 'Console',
        desc: ' |- Горячие новинки 2020 года (только AAA проекты)',
      },
      { id: '61', cat: 'Console', desc: ' |- Онлайн Игры' },
      { id: '1234', cat: 'Console', desc: ' |- Симуляторы' },
      { id: '84', cat: 'Console', desc: ' |- Action' },
      { id: '82', cat: 'Console', desc: ' |- Гонки' },
      { id: '85', cat: 'Console', desc: ' |- RPG' },
      { id: '78', cat: 'Console', desc: ' |- Стратегии' },
      { id: '77', cat: 'Console', desc: ' |- Приключения и квесты' },
      { id: '76', cat: 'Console', desc: ' |- Аркады' },
      { id: '1538', cat: 'Console', desc: 'Игры для консолей' },
      { id: '1539', cat: 'Console/PSP', desc: ' |- PlayStation' },
      { id: '878', cat: 'Console/Xbox', desc: ' |- XBox' },
      {
        id: '11',
        cat: 'TV/Documentary',
        desc: 'Документальные фильмы и телепередачи',
      },
      { id: '12', cat: 'TV', desc: 'Развлекательные телепередачи' },
      { id: '13', cat: 'TV/Sport', desc: 'Спорт' },
      { id: '1621', cat: 'TV/Sport', desc: ' |- Формула 1' },
      { id: '1622', cat: 'TV/Sport', desc: ' |- Автоспорт' },
      {
        id: '726',
        cat: 'Books',
        desc: 'Художественная литература, журналы, газеты',
      },
      { id: '728', cat: 'Books', desc: ' |- Журналы и газеты' },
      {
        id: '761',
        cat: 'Books',
        desc: ' |- Фантастика, фентези, мистика',
      },
      {
        id: '760',
        cat: 'Books',
        desc: ' |- Детективы, боевики, триллеры',
      },
      {
        id: '757',
        cat: 'Books',
        desc: ' |- Классика мировой литературы',
      },
      { id: '1314', cat: 'Books', desc: ' |- Детская литература' },
      {
        id: '722',
        cat: 'Books',
        desc: 'Научная, техническая и учебная литература, хобби',
      },
      { id: '727', cat: 'Books', desc: ' |- Увлечения, хобби' },
      {
        id: '1021',
        cat: 'Books',
        desc: ' |- Инструкции, Схемы, Технические и сервисные документации',
      },
      { id: '1020', cat: 'Books', desc: ' |- Сварка, Пайка' },
      { id: '730', cat: 'Audio/Audiobook', desc: 'Аудиокниги' },
      {
        id: '776',
        cat: 'Audio/Audiobook',
        desc: ' |- Фантастика Фэнтези',
      },
      {
        id: '777',
        cat: 'Audio/Audiobook',
        desc: ' |- Детективы триллеры боевики',
      },
      {
        id: '1164',
        cat: 'Audio/Audiobook',
        desc: ' |- Радиоспектакли аудиофильмы',
      },
      {
        id: '1156',
        cat: 'Audio/Audiobook',
        desc: ' |- Историческая литература биографии мемуары',
      },
      {
        id: '1158',
        cat: 'Audio/Audiobook',
        desc: ' |- Зарубежная проза',
      },
      {
        id: '1233',
        cat: 'Audio/Audiobook',
        desc: ' |- Отечественная проза',
      },
      { id: '1159', cat: 'Audio/Audiobook', desc: ' |- Любовные романы' },
      {
        id: '1315',
        cat: 'Audio/Audiobook',
        desc: ' |- Детская аудиокнига',
      },
      {
        id: '1223',
        cat: 'Audio/Audiobook',
        desc: ' |- Аудиокниги Учебная, Научная и Техническая литература',
      },
      {
        id: '1177',
        cat: 'Audio/MP3',
        desc: 'Неофициальные и внежанровые сборники',
      },
      {
        id: '1179',
        cat: 'Audio/MP3',
        desc: ' |- Сборники поп музыки (50/50 общие)',
      },
      {
        id: '1178',
        cat: 'Audio/MP3',
        desc: ' |- Зарубежные поп сборники',
      },
      {
        id: '1606',
        cat: 'Audio/MP3',
        desc: ' |- Eurodance, Disco, Hi-NRG, Technopop (Сборники)',
      },
      {
        id: '1603',
        cat: 'Audio/MP3',
        desc: ' |- Club, Dance, Hands Up (Сборники)',
      },
      {
        id: '1427',
        cat: 'Audio/MP3',
        desc: ' |- Сборники Российской поп музыки',
      },
      {
        id: '1561',
        cat: 'Audio/MP3',
        desc: ' |- Сборники Русского шансона',
      },
      { id: '1168', cat: 'Audio/MP3', desc: 'Рок музыка' },
      {
        id: '1200',
        cat: 'Audio/MP3',
        desc: ' |- Зарубежный Classic Rock&Hard Rock',
      },
      {
        id: '1552',
        cat: 'Audio/MP3',
        desc: ' |- Зарубежный Progressive&Art-Rock',
      },
      {
        id: '1565',
        cat: 'Audio/MP3',
        desc: ' |- Зарубежный Folk-Rock, Folk-Punk, Songwriter',
      },
      {
        id: '1554',
        cat: 'Audio/MP3',
        desc: ' |- Зарубежный Melodic Rock, Arena rock',
      },
      {
        id: '1553',
        cat: 'Audio/MP3',
        desc: ' |- Зарубежный Pop-Rock&Soft Rock',
      },
      {
        id: '1567',
        cat: 'Audio/MP3',
        desc: ' |- Instrumental Guitar Rock (Виртуозы гитары)',
      },
      {
        id: '1566',
        cat: 'Audio/MP3',
        desc: " |- Зарубежный Rockabilly, Rock'n'Roll",
      },
      {
        id: '1556',
        cat: 'Audio/MP3',
        desc: ' |- Сборники зарубежного рока',
      },
      { id: '1579', cat: 'Audio/MP3', desc: 'Зарубежный Metal' },
      {
        id: '1588',
        cat: 'Audio/MP3',
        desc: ' |- Avant-garde, Experimental Metal',
      },
      { id: '1580', cat: 'Audio/MP3', desc: ' |- Black Metal' },
      { id: '1581', cat: 'Audio/MP3', desc: ' |- Death, Doom' },
      { id: '1582', cat: 'Audio/MP3', desc: ' |- Folk, Pagan, Viking' },
      { id: '1583', cat: 'Audio/MP3', desc: ' |- Gothic Metal' },
      { id: '1584', cat: 'Audio/MP3', desc: ' |- Grind, Brutal Death' },
      {
        id: '1585',
        cat: 'Audio/MP3',
        desc: ' |- Heavy, Power, Progressive',
      },
      {
        id: '1586',
        cat: 'Audio/MP3',
        desc: ' |- Sludge, Stoner, Post-Metal',
      },
      { id: '1587', cat: 'Audio/MP3', desc: ' |- Thrash, Speed' },
      { id: '1602', cat: 'Audio/MP3', desc: ' |- Сборники Metal' },
      {
        id: '1589',
        cat: 'Audio/MP3',
        desc: 'Зарубежные Alternative, Punk, Independent',
      },
      { id: '1590', cat: 'Audio/MP3', desc: ' |- Alternative&Nu-metal' },
      { id: '1591', cat: 'Audio/MP3', desc: ' |- Punk' },
      { id: '1592', cat: 'Audio/MP3', desc: ' |- Hardcore' },
      {
        id: '1593',
        cat: 'Audio/MP3',
        desc: ' |- Indie, Post-Rock&Post-Punk',
      },
      {
        id: '1594',
        cat: 'Audio/MP3',
        desc: ' |- Industrial&Post-industrial',
      },
      {
        id: '1595',
        cat: 'Audio/MP3',
        desc: ' |- Emocore, Post-hardcore, Metalcore, Deathcore',
      },
      { id: '1596', cat: 'Audio/MP3', desc: ' |- Gothic Rock&Dark Folk' },
      {
        id: '1597',
        cat: 'Audio/MP3',
        desc: ' |- Avant-garde, Experimental Rock',
      },
      { id: '1598', cat: 'Audio/MP3', desc: 'Отечественный Rock, Metal' },
      { id: '1599', cat: 'Audio/MP3', desc: ' |- Отечественный Rock' },
      { id: '1600', cat: 'Audio/MP3', desc: ' |- Отечественный Metal' },
      { id: '1601', cat: 'Audio/MP3', desc: ' |- Сборники Rock, Metal' },
      { id: '1171', cat: 'Audio/MP3', desc: 'Электронная музыка' },
      {
        id: '1610',
        cat: 'Audio/MP3',
        desc: ' |- Goa Trance, Psy-Trance',
      },
      {
        id: '1611',
        cat: 'Audio/MP3',
        desc: ' |- PsyChill, Ambient, Dub',
      },
      { id: '1457', cat: 'Audio/MP3', desc: ' |- Trance' },
      {
        id: '1613',
        cat: 'Audio/MP3',
        desc: ' |- Hardcore, Hardstyle, Jumpstyle',
      },
      { id: '1614', cat: 'Audio/MP3', desc: ' |- House' },
      { id: '1203', cat: 'Audio/MP3', desc: ' |- Techno' },
      {
        id: '1615',
        cat: 'Audio/MP3',
        desc: ' |- Electro, Electro-Freestyle, Nu Electro',
      },
      { id: '1616', cat: 'Audio/MP3', desc: ' |- Drum&Bass, Jungle' },
      { id: '1617', cat: 'Audio/MP3', desc: ' |- Breakbeat' },
      { id: '1618', cat: 'Audio/MP3', desc: ' |- Dubstep' },
      { id: '1205', cat: 'Audio/MP3', desc: ' |- IDM' },
      {
        id: '1619',
        cat: 'Audio/MP3',
        desc: ' |- Chillout, Lounge, Downtempo',
      },
      {
        id: '1620',
        cat: 'Audio/MP3',
        desc: ' |- Nu Jazz, Acid Jazz, Future Jazz',
      },
      {
        id: '1206',
        cat: 'Audio/MP3',
        desc: ' |- Trip Hop, Abstract Hip-Hop',
      },
      {
        id: '1575',
        cat: 'Audio/MP3',
        desc: ' |- Traditional Electronic, Ambient, Modern Classical,...',
      },
      {
        id: '1576',
        cat: 'Audio/MP3',
        desc: ' |- Industrial, Noise, EBM, Dark Electro, Aggrotech,...',
      },
      {
        id: '1577',
        cat: 'Audio/MP3',
        desc: ' |- Electronic music (разные стили)',
      },
      {
        id: '1540',
        cat: 'Audio/MP3',
        desc: 'Остальные муз. жанры, + Видео',
      },
      {
        id: '1578',
        cat: 'Audio/MP3',
        desc: ' |- Российская попса (альбомы, синглы)',
      },
      { id: '1170', cat: 'Audio/MP3', desc: ' |- Русский шансон' },
      {
        id: '1167',
        cat: 'Audio/MP3',
        desc: ' |- Отечественный Рэп, Хип-Хоп',
      },
      { id: '1173', cat: 'Audio/MP3', desc: " |- Rap, Hip-hop, R'n'B" },
      { id: '1607', cat: 'Audio/MP3', desc: " |- Rap, Hip-hop, R'n'B" },
      { id: '1563', cat: 'Audio/MP3', desc: ' |- Jazz, Blues, Swing' },
      { id: '1605', cat: 'Audio/MP3', desc: ' |- Blues' },
      { id: '1604', cat: 'Audio/MP3', desc: ' |- Reggae, Ska, Dub' },
      {
        id: '1562',
        cat: 'Audio/MP3',
        desc: ' |- Инструментальная и классическая музыка',
      },
      {
        id: '1185',
        cat: 'Audio/MP3',
        desc: ' |- New Age, Relax, Meditative',
      },
      {
        id: '1183',
        cat: 'Audio/MP3',
        desc: ' |- Музыкальное видео (все жанры)',
      },
      {
        id: '1210',
        cat: 'Audio/Lossless',
        desc: 'Отечественная музыка (Lossless)',
      },
      { id: '1211', cat: 'Audio/Lossless', desc: ' |- Поп музыка' },
      {
        id: '1212',
        cat: 'Audio/Lossless',
        desc: ' |- Отечественный Рок, Панк, Метал, Альтернатива.',
      },
      {
        id: '1213',
        cat: 'Audio/Lossless',
        desc: ' |- Шансон, авторская песня',
      },
      {
        id: '1309',
        cat: 'Audio/Lossless',
        desc: ' |- Официальные сборники отечественных исполнителей',
      },
      {
        id: '1209',
        cat: 'Audio/Lossless',
        desc: 'Зарубежная музыка (Lossless)',
      },
      { id: '1214', cat: 'Audio/Lossless', desc: ' |- Pop music' },
      {
        id: '1215',
        cat: 'Audio/Lossless',
        desc: ' |- Rock, Punk, Metal, Alternative music',
      },
      {
        id: '1217',
        cat: 'Audio/Lossless',
        desc: ' |- Electronic and club music',
      },
      {
        id: '1394',
        cat: 'Audio/Lossless',
        desc: ' |- Jazz, Blues, Soul',
      },
      {
        id: '1308',
        cat: 'Audio/Lossless',
        desc: ' |- Официальные сборники зарубежных исполнителей',
      },
      {
        id: '1534',
        cat: 'Audio/Lossless',
        desc: ' |- Classical and instrumental music',
      },
      {
        id: '1231',
        cat: 'Audio/Lossless',
        desc: ' |- Other musical genres',
      },
      { id: '105', cat: 'PC', desc: 'Операционные системы' },
      { id: '1120', cat: 'PC', desc: ' |- Windows 10' },
      { id: '706', cat: 'PC', desc: ' |- Windows 8, 8.1' },
      { id: '212', cat: 'PC', desc: ' |- Windows 7' },
      {
        id: '210',
        cat: 'PC',
        desc: ' |- Windows XP , Windows Vista , Windows выпущенные до 20...',
      },
      { id: '213', cat: 'PC', desc: ' |- Серверные ОС от Microsoft' },
      {
        id: '215',
        cat: 'PC',
        desc: ' |- Разное (RC, Beta, Service Packs, Cracks)',
      },
      { id: '1395', cat: 'PC', desc: ' |- Linux, Unix, Mac и другие ОС' },
      { id: '107', cat: 'PC', desc: 'Системные программы' },
      { id: '1405', cat: 'PC', desc: ' |- Драйверы' },
      {
        id: '1398',
        cat: 'PC',
        desc: ' |- Обслуживание и диагностика компьютера',
      },
      { id: '193', cat: 'PC', desc: ' |- Работа с жёсткими дисками' },
      {
        id: '1518',
        cat: 'PC',
        desc: ' |- Работа с внешними носителями информации',
      },
      {
        id: '195',
        cat: 'PC',
        desc: ' |- Архиваторы и файловые менеджеры',
      },
      {
        id: '341',
        cat: 'PC',
        desc: ' |- Программы для интернета и сетей',
      },
      {
        id: '196',
        cat: 'PC',
        desc: ' |- Настройка и оптимизация и изменение интерфейса ОС',
      },
      {
        id: '969',
        cat: 'PC',
        desc: ' |- WPI и прочие сборники программ',
      },
      { id: '1523', cat: 'PC', desc: ' |- LiveCD/DVD/USB' },
      { id: '1505', cat: 'PC', desc: 'Безопасность' },
      { id: '201', cat: 'PC', desc: ' |- Антивирусы' },
      { id: '1506', cat: 'PC', desc: ' |- Фаерволы, брандмауэры' },
      {
        id: '1508',
        cat: 'PC',
        desc: ' |- Антишпионское, антирекламное и антиблокировочное ПО',
      },
      { id: '1509', cat: 'PC', desc: ' |- Средства защиты информации' },
      { id: '1507', cat: 'PC', desc: ' |- Комплексная защита ПК' },
      {
        id: '108',
        cat: 'PC',
        desc: 'Программы для бизнеса, офиса, научной и проектной работы',
      },
      { id: '217', cat: 'PC', desc: ' |- Офисные системы' },
      { id: '218', cat: 'PC', desc: ' |- Системы для бизнеса' },
      { id: '222', cat: 'PC', desc: ' |- Системы для научной работы' },
      {
        id: '1404',
        cat: 'PC',
        desc: ' |- САПР, софт для архитекторов, дизайнеров и пр.',
      },
      {
        id: '1522',
        cat: 'PC',
        desc: ' |- Справочные системы, базы данных',
      },
      {
        id: '1504',
        cat: 'PC',
        desc: ' |- Программы для верстки, печати и работы со шрифтами',
      },
      {
        id: '220',
        cat: 'PC',
        desc: ' |- Работа с PDF, DjVu, FB2, EPUB, MOBI и пр.',
      },
      {
        id: '221',
        cat: 'PC',
        desc: ' |- Словари, переводчики, программы обучения языкам',
      },
      {
        id: '219',
        cat: 'PC',
        desc: ' |- Распознавание текста, звука и синтез речи',
      },
      {
        id: '1511',
        cat: 'PC',
        desc: 'Программирование и веб-разработка',
      },
      {
        id: '1512',
        cat: 'PC',
        desc: ' |- WYSIWYG-редакторы для веб-дизайна',
      },
      {
        id: '1513',
        cat: 'PC',
        desc: ' |- Текстовые редакторы с подсветкой кода',
      },
      {
        id: '1514',
        cat: 'PC',
        desc: ' |- Среды программирования, компиляторы и вспомогател...',
      },
      {
        id: '1515',
        cat: 'PC',
        desc: ' |- Системы управления базами данных (СУБД)',
      },
      { id: '1516', cat: 'PC', desc: ' |- Скрипты и шаблоны' },
      {
        id: '110',
        cat: 'PC',
        desc: 'Программы для работы с мультимедиа и 3D',
      },
      {
        id: '966',
        cat: 'PC',
        desc: ' |- Графические редакторы и каталогизаторы',
      },
      { id: '1500', cat: 'PC', desc: ' |- Видеоредакторы' },
      { id: '1501', cat: 'PC', desc: ' |- Аудиоредакторы' },
      {
        id: '967',
        cat: 'PC',
        desc: ' |- Аудио- Видео- проигрыватели и каталогизаторы',
      },
      {
        id: '965',
        cat: 'PC',
        desc: ' |- Аудио- Видео- грабберы, рипперы и конвертеры',
      },
      { id: '1499', cat: 'PC', desc: ' |- Анимация' },
      { id: '1502', cat: 'PC', desc: ' |- Программные комплекты' },
      {
        id: '1503',
        cat: 'PC',
        desc: ' |- Дополнительные материалы для мультимедиа',
      },
      {
        id: '968',
        cat: 'PC',
        desc: ' |- Разное (Программы для работы с мультимедиа и 3D)',
      },
      { id: '1287', cat: 'PC/Phone-Other', desc: 'Видео' },
      {
        id: '1307',
        cat: 'PC/Phone-Other',
        desc: ' |- Мобильные телефоны',
      },
      { id: '1306', cat: 'PC/Phone-IOS', desc: ' |- iPhone' },
      { id: '1305', cat: 'PC/Phone-IOS', desc: ' |- iPad' },
      { id: '1289', cat: 'PC', desc: 'Программы' },
      { id: '1302', cat: 'PC', desc: ' |- Мобильные телефоны' },
      { id: '1301', cat: 'PC/Phone-Android', desc: ' |- Android OS' },
      { id: '1298', cat: 'PC', desc: ' |- Symbian OS' },
      { id: '1293', cat: 'PC/Phone-Other', desc: ' |- Windows Mobile' },
      { id: '1292', cat: 'PC/Phone-IOS', desc: ' |- iPhone' },
      { id: '1291', cat: 'PC/Phone-IOS', desc: ' |- Apple Macintosh' },
      { id: '1294', cat: 'PC', desc: 'Игры' },
      { id: '1303', cat: 'PC', desc: ' |- Мобильные телефоны' },
      { id: '1300', cat: 'PC/Phone-Android', desc: ' |- Android OS' },
      { id: '1299', cat: 'PC', desc: ' |- Symbian OS' },
      { id: '1296', cat: 'PC/Phone-IOS', desc: ' |- iPhone' },
      { id: '1295', cat: 'PC/Phone-Other', desc: ' |- Windows Mobile' },
      { id: '1490', cat: 'XXX', desc: 'Эротика (не порно)' },
      {
        id: '1491',
        cat: 'XXX',
        desc: ' |-  Эротические фильмы ≪с переводом Rus≫',
      },
      {
        id: '1492',
        cat: 'XXX',
        desc: ' |-  Эротические фильмы с «родной» озвучкой',
      },
      {
        id: '1493',
        cat: 'XXX',
        desc: ' |-  Playboy, Penthouse (эротический видео журнал)',
      },
      { id: '1495', cat: 'XXX', desc: ' |-  Нудизм-Натуризм' },
      { id: '1494', cat: 'XXX', desc: ' |-  Фото, картинки, журналы' },
      { id: '1376', cat: 'XXX', desc: 'Зарубежное видео ХХХ' },
      { id: '1378', cat: 'XXX', desc: ' |-  Зарубежные порно фильмы' },
      { id: '1470', cat: 'XXX', desc: ' |-  Гонзо-фильмы / Gonzo' },
      {
        id: '1446',
        cat: 'XXX',
        desc: ' |-  Гонзо и зарубежные  фильмы ≪720p, 1080p≫',
      },
      {
        id: '1468',
        cat: 'XXX',
        desc: ' |-  Этнические фильмы / Ethnic-Themed',
      },
      {
        id: '1537',
        cat: 'XXX',
        desc: ' |-  Лесбо-фильмы / All Girl&Solo',
      },
      {
        id: '1444',
        cat: 'XXX',
        desc: ' |-  Порно пародии / Parody porn',
      },
      {
        id: '1379',
        cat: 'XXX',
        desc: ' |-  Зарубежное порно ≪с переводом Rus≫',
      },
      {
        id: '1388',
        cat: 'XXX',
        desc: ' |-  Классика и ретро порно / Classic (Retro)',
      },
      { id: '1389', cat: 'XXX', desc: ' |-  Японские фильмы и сайтрипы' },
      {
        id: '1380',
        cat: 'XXX',
        desc: ' |-  Зарубежные сайтрипы ≪Definition 480p, 540p≫',
      },
      {
        id: '1441',
        cat: 'XXX',
        desc: ' |-  Зарубежные сайтрипы  ≪HD Video 720p, 1080p≫',
      },
      {
        id: '1439',
        cat: 'XXX',
        desc: ' |-  Сцены и Сайтрипы ≪4К UHD 2160p≫',
      },
      {
        id: '1535',
        cat: 'XXX',
        desc: ' |-  Виртуальная реальность ХХХ / Virtual Reality Porn (VR)',
      },
      {
        id: '1392',
        cat: 'XXX',
        desc: ' |-  Любительское видео ≪WebCam, CamRip≫',
      },
      { id: '1426', cat: 'XXX', desc: ' |-  Документальное видео' },
      { id: '1377', cat: 'XXX', desc: 'Русское видео ХХХ' },
      {
        id: '1383',
        cat: 'XXX',
        desc: ' |-  Порно фильмы Российского пр-ва',
      },
      {
        id: '1387',
        cat: 'XXX',
        desc: ' |-  Сайтрипы с русскими актрисами ≪Definition 480p, 540p≫',
      },
      {
        id: '1428',
        cat: 'XXX',
        desc: ' |-  Сайтрипы с русскими актрисами ≪HD Video 720p, 1080p≫',
      },
      {
        id: '1440',
        cat: 'XXX',
        desc: ' |-  Сцены и Сайтрипы с Русскими актрисами ≪4К UHD 2160p≫',
      },
      {
        id: '1384',
        cat: 'XXX',
        desc: ' |-  Любительское порно ≪CamRip≫',
      },
      { id: '1429', cat: 'XXX', desc: 'Нетрадиционное порно' },
      {
        id: '1430',
        cat: 'XXX',
        desc: ' |-  Буккаке, Камшот / Bukkake, Cumshot Compilation',
      },
      {
        id: '1431',
        cat: 'XXX',
        desc: ' |-  Женское доминирование и страпон / Femdom&Strapon',
      },
      {
        id: '1432',
        cat: 'XXX',
        desc: ' |-  BDSM ≪бандаж, дисциплина, садизм, мазохизм≫',
      },
      {
        id: '1433',
        cat: 'XXX',
        desc: ' |-  Фетиш, медосмотры / Medical Fetish',
      },
      {
        id: '1442',
        cat: 'XXX',
        desc: ' |-  Переодевание, униформа / Uniform',
      },
      {
        id: '1434',
        cat: 'XXX',
        desc: ' |-  Фистинг и дилдо / Fisting&Dildo',
      },
      {
        id: '1469',
        cat: 'XXX',
        desc: ' |-  Транссексуалы / Transsexual',
      },
      { id: '1443', cat: 'XXX', desc: ' |-  Мочеиспускание / Peeing' },
      { id: '1536', cat: 'XXX', desc: ' |-  Подглядывание / Voyeur' },
      { id: '1438', cat: 'XXX', desc: ' |-  Беременные / Pregnant' },
      { id: '1496', cat: 'XXX', desc: ' |-  Бисексуалы / Bisexual' },
      {
        id: '1480',
        cat: 'XXX',
        desc: 'Мультфильмы ХХХ&Хентай&Порно игры',
      },
      { id: '1542', cat: 'XXX', desc: ' |-  Порно игры / Porno games' },
      { id: '1481', cat: 'XXX', desc: ' |-  Мультфильмы / Cartoons' },
      { id: '1482', cat: 'XXX', desc: ' |-  Хентай / Hentai ' },
      { id: '118', cat: 'Other', desc: 'Разное' },
      { id: '987', cat: 'Other', desc: ' |- Обои для рабочего стола' },
      { id: '1068', cat: 'Other', desc: ' |- Эротические обои' },
      {
        id: '1424',
        cat: 'Other',
        desc: ' |- Боевые искусства (Видеоуроки)',
      },
      {
        id: '1425',
        cat: 'Other',
        desc: ' |- Видеоуроки и обучающие интерактивные DVD',
      },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
      'music-search': ['q'],
    },
  },
  settings: [
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
  search: {
    paths: [{ path: 'tracker.php' }],
    keywordsfilters: [
      { name: 'diacritics', args: 'replace' },
      { name: 're_replace', args: ['(?i)\\bS0*(\\d+)\\b', 'сезон $1'] },
      {
        name: 're_replace',
        args: ['(?i)\\bS0*(\\d+)E0*(\\d+)\\b', 'сезон $1 серии $2'],
      },
    ],
    inputs: {
      $raw: '{{ if .Categories }}{{ range .Categories }}f[]={{.}}&{{end}}{{else}}f[]=-1{{end}}',
      prev_allw: 1,
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
      prev_tor_type: 0,
      o: '{{ .Config.sort }}',
      s: '{{ .Config.type }}',
      dc: 0,
      df: 1,
      da: 1,
      ds: 0,
      tm: -1,
      sns: -1,
      srg: -1,
      nm: '{{ .Keywords }}',
      pn: '',
      allw: 0,
    },
    rows: { selector: 'tr[id^="tor_"]:has(a[href^="magnet:?xt="])' },
    fields: {
      category: {
        selector: 'a[href^="tracker.php?f="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'f' }],
      },
      title: {
        selector: 'a[href^="./viewtopic.php?t="]',
        filters: [
          {
            name: 're_replace',
            args: ['[\\.\\,\\:\\-\\/\\|\\[\\]\\(\\)]', ' '],
          },
          {
            name: 're_replace',
            args: [
              '(.*)[CСcс]езон\\s*(\\d+)\\s*[CСcс]ери[ияй]\\s*(\\d+)\\s*(\\d+)\\s*из\\s*\\d+(.*)',
              '$1 S$2E$3-$4 rus $5',
            ],
          },
          {
            name: 're_replace',
            args: [
              '(.*)[CСcс]езон\\s*(\\d+)\\s*(\\d+)\\s*(\\d+)\\s*[CСcс]ери[ияй]\\s*из\\s*\\d+(.*)',
              '$1 S$2E$3-$4 rus $5',
            ],
          },
          {
            name: 're_replace',
            args: [
              '(.*)(\\d+)\\s*[CСcс]езон\\s*(\\d+)\\s*(\\d+)\\s*[CСcс]ери[ияй]\\s*из\\s*\\d+(.*)',
              '$1 S$2E$3-$4 rus $5',
            ],
          },
          {
            name: 're_replace',
            args: ['(.*)[CСcс]езон\\s*(\\d+)\\s*[CСcс]ери[ияй]\\s*(\\d+)\\s*(\\d+)\\s*(.*)', '$1 S$2E$3-$4 rus $5'],
          },
          {
            name: 're_replace',
            args: ['(.*)[CСcс]езон\\s*(\\d+)\\s*[CСcс]ери[ияй]\\s*(\\d+)\\s*из\\s*\\d+(.*)', '$1 S$2E$3 rus $4'],
          },
          {
            name: 're_replace',
            args: ['(.*)[CСcс]езон\\s*(\\d+)(.*)', '$1 S$2 rus $3'],
          },
          {
            name: 're_replace',
            args: ['(.*)[CСcс]]ери[ия]\\s*(\\d+)(.*)', '$1 E$2 rus $3'],
          },
          {
            name: 're_replace',
            args: [
              '(\\([А-Яа-яЁё\\W]+\\))|(^[А-Яа-яЁё\\W\\d]+\\/ )|([а-яА-ЯЁё \\-]+,+)|([а-яА-ЯЁё]+)',
              '{{ if .Config.striprussian }}{{ else }}$1$2$3$4{{ end }}',
            ],
          },
          { name: 'replace', args: ['WEBRip', 'WEBDL'] },
          { name: 'replace', args: ['WEB DL', 'WEBDL'] },
          { name: 'replace', args: ['WEBDLRip', 'WEBDL'] },
          { name: 'replace', args: ['HDTVRip', 'HDTV'] },
        ],
      },
      details: {
        selector: 'a[href^="./viewtopic.php?t="]',
        attribute: 'href',
      },
      magnet: { selector: 'a[href^="magnet:?xt="]', attribute: 'href' },
      size: { selector: 'td:nth-child(6) > u' },
      seeders: { selector: 'td.seedmed > b' },
      leechers: { selector: 'td.leechmed > b' },
      grabs: { selector: 'td:nth-child(9)' },
      date: { selector: 'td:last-child > u' },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
