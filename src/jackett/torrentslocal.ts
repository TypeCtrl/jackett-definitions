import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'torrentslocal',
  name: 'Torrents-Local',
  description: 'Torrents-Local is a RUSSIAN Semi-Private Torrent Tracker',
  language: 'ru-RU',
  type: 'semi-private',
  encoding: 'UTF-8',
  links: ['https://torrents-local.xyz/'],
  caps: {
    categorymappings: [
      { id: '8', cat: 'Movies', desc: 'Арт-хаус и авторское кино' },
      { id: '12', cat: 'Movies', desc: 'Аниме' },
      { id: '371', cat: 'Movies', desc: 'HD' },
      { id: '932', cat: 'Movies', desc: 'HD Полнометражные' },
      { id: '119', cat: 'Movies', desc: 'OST' },
      { id: '149', cat: 'Movies', desc: 'Манга' },
      { id: '148', cat: 'Movies', desc: 'Онгоинги' },
      { id: '215', cat: 'Movies', desc: 'Полнометражные' },
      { id: '202', cat: 'Movies', desc: 'Фэндом' },
      { id: '6', cat: 'Movies', desc: 'Зарубежное кино' },
      { id: '592', cat: 'Movies', desc: 'Азиатские фильмы' },
      { id: '160', cat: 'Movies', desc: 'Индийские фильмы' },
      { id: '813', cat: 'Movies', desc: 'Коллекции' },
      { id: '591', cat: 'Movies', desc: 'Фильмы до 1960 года' },
      { id: '590', cat: 'Movies', desc: 'Фильмы 1961 - 2000' },
      { id: '589', cat: 'Movies', desc: 'Фильмы 2001 - 2005' },
      { id: '588', cat: 'Movies', desc: 'Фильмы 2006 - 2010' },
      { id: '945', cat: 'Movies', desc: 'Фильмы 2011 - 2015' },
      { id: '978', cat: 'Movies', desc: 'Фильмы 2016 - 2019' },
      { id: '479', cat: 'Movies', desc: 'Фильмы на языке оригинала' },
      { id: '10', cat: 'Movies', desc: 'Мультфильмы' },
      { id: '759', cat: 'Movies', desc: 'Короткометражные' },
      { id: '475', cat: 'Movies', desc: 'СССР' },
      { id: '7', cat: 'Movies', desc: 'Отечественное кино' },
      { id: '227', cat: 'Movies', desc: 'СССР' },
      { id: '888', cat: 'Movies', desc: '3D и 4K Видео' },
      { id: '399', cat: 'Movies', desc: '3D и 4K Кинофильмы' },
      { id: '339', cat: 'Movies', desc: '3D и 4K Мультфильмы' },
      { id: '948', cat: 'Movies', desc: '3D и 4K Документальные фильмы' },
      { id: '212', cat: 'Movies', desc: 'Театр' },
      {
        id: '832',
        cat: 'Movies/HD',
        desc: 'Арт-хаус и авторское кино HD',
      },
      { id: '835', cat: 'Movies/HD', desc: 'Классика зарубежного кино' },
      { id: '842', cat: 'Movies/HD', desc: 'Зарубежное кино HD' },
      { id: '876', cat: 'Movies/HD', desc: 'HD Коллекции' },
      { id: '845', cat: 'Movies/HD', desc: 'HD до 2000 года' },
      { id: '844', cat: 'Movies/HD', desc: 'HD 2001 - 2005' },
      { id: '843', cat: 'Movies/HD', desc: 'HD 2006 - 2010' },
      { id: '870', cat: 'Movies/HD', desc: 'HD 2011 - 2015' },
      { id: '980', cat: 'Movies/HD', desc: 'HD 2016 - 2019' },
      { id: '846', cat: 'Movies/HD', desc: 'Мультфильмы HD' },
      { id: '849', cat: 'Movies/HD', desc: 'Отечественное кино DVD/HD' },
      { id: '851', cat: 'Movies/HD', desc: 'Отечественное кино DVD' },
      { id: '850', cat: 'Movies/HD', desc: 'Отечественное кино HD' },
      { id: '14', cat: 'TV', desc: 'Зарубежные сериалы' },
      { id: '862', cat: 'TV', desc: 'Сборники' },
      { id: '454', cat: 'TV', desc: 'Сериалы на языке оригинала' },
      { id: '981', cat: 'TV', desc: 'Ад на колёсах / Hell on Wheels' },
      {
        id: '982',
        cat: 'TV',
        desc: 'Американская история ужасов / American Horror Story',
      },
      { id: '194', cat: 'TV', desc: "Анатомия страcти / Grey's Anatomy" },
      { id: '997', cat: 'TV', desc: 'Банши / Banshee' },
      { id: '998', cat: 'TV', desc: 'Белый воротничок / White Collar' },
      { id: '1013', cat: 'TV', desc: 'Бесстыжие / Shameless' },
      {
        id: '379',
        cat: 'TV',
        desc: 'Блудливая калифорния / Californication',
      },
      { id: '988', cat: 'TV', desc: 'Бруклин 9-9 / Brooklyn Nine-Nine' },
      {
        id: '992',
        cat: 'TV',
        desc: 'В поле зрения / Person of Interest',
      },
      { id: '1000', cat: 'TV', desc: 'Викинги / Vikings' },
      {
        id: '818',
        cat: 'TV',
        desc: 'Во все тяжкие / Breaking Bad; Лучше звоните Солу / Better...',
      },
      { id: '90', cat: 'TV', desc: 'Герои / Heroes' },
      { id: '558', cat: 'TV', desc: 'Готэм / Gotham' },
      { id: '126', cat: 'TV', desc: 'Грань / Fringe' },
      { id: '162', cat: 'TV', desc: 'Гримм / Grimm' },
      {
        id: '134',
        cat: 'TV',
        desc: 'Два с половиной человека / Two and a Half Men',
      },
      { id: '81', cat: 'TV', desc: 'Декстер / Dexter' },
      {
        id: '164',
        cat: 'TV',
        desc: 'Дневники вампира / The Vampire Diaries; Древние / The...',
      },
      { id: '112', cat: 'TV', desc: 'Доктор Кто / Doctor Who' },
      { id: '61', cat: 'TV', desc: 'Доктор Хаус / House M.D.' },
      { id: '121', cat: 'TV', desc: 'Друзья / Friends & Джо / Joey' },
      { id: '91', cat: 'TV', desc: 'Звездные Врата / Stargate' },
      {
        id: '433',
        cat: 'TV',
        desc: 'Звездный крейсер Галактика / Battlestar Galactica',
      },
      { id: '220', cat: 'TV', desc: 'Игра Престолов / Game of Thrones' },
      {
        id: '201',
        cat: 'TV',
        desc: 'Как я встретил вашу маму / How I met your mother',
      },
      { id: '995', cat: 'TV', desc: 'Карточный домик / House of Cards' },
      { id: '653', cat: 'TV', desc: 'Клан Сопрано / The Sopranos' },
      { id: '127', cat: 'TV', desc: 'Коломбо / Columbo' },
      { id: '431', cat: 'TV', desc: 'Косяки (Дурман) / Weeds' },
      { id: '62', cat: 'TV', desc: 'Клиника / Scrubs' },
      { id: '1003', cat: 'TV', desc: 'Менталист / The Mentalist' },
      { id: '751', cat: 'TV', desc: 'Мерлин / Merlin' },
      { id: '192', cat: 'TV', desc: 'Молокососы / Skins' },
      { id: '1014', cat: 'TV', desc: 'Нация Z / Z Nation' },
      { id: '1004', cat: 'TV', desc: 'Оборотень / Teen Wolf' },
      { id: '64', cat: 'TV', desc: 'Остаться в живых / LOST' },
      { id: '198', cat: 'TV', desc: 'Отбросы / Плохие / Misfits' },
      {
        id: '386',
        cat: 'TV',
        desc: 'Отчаянные домохозяйки / Desperate housewives',
      },
      { id: '406', cat: 'TV', desc: 'Офис / The Office' },
      { id: '63', cat: 'TV', desc: 'Побег / Prison Break' },
      { id: '943', cat: 'TV', desc: 'Редкие и старинные сериалы' },
      { id: '98', cat: 'TV', desc: 'Сверхъестественное / Supernatural' },
      { id: '88', cat: 'TV', desc: 'Секретные материалы / X-files' },
      {
        id: '1007',
        cat: 'TV',
        desc: 'Силиконовая долина / Silicon Valley',
      },
      { id: '385', cat: 'TV', desc: 'Спартак / Spartacus' },
      { id: '128', cat: 'TV', desc: 'Стрела / Arrow' },
      { id: '983', cat: 'TV', desc: 'Сыны Анархии / Sons of Anarchy' },
      { id: '101', cat: 'TV', desc: 'Тайны Смолвиля / Smallville' },
      { id: '993', cat: 'TV', desc: 'Темное дитя / Orphan Black' },
      {
        id: '190',
        cat: 'TV',
        desc: 'Теория Большого Взрыва / The Big Bang Theory; Мол...',
      },
      {
        id: '738',
        cat: 'TV',
        desc: 'Теория Лжи (Обмани меня) / Lie to me',
      },
      { id: '129', cat: 'TV', desc: 'Флэш / The Flash' },
      {
        id: '161',
        cat: 'TV',
        desc: 'Ходячие мертвецы / The Walking Dead; Бойтесь хо...',
      },
      { id: '986', cat: 'TV', desc: 'Хранилище 13 / Warehouse 13' },
      { id: '472', cat: 'TV', desc: 'Шерлок / Sherlock' },
      { id: '1008', cat: 'TV', desc: 'Штамм / The Strain' },
      { id: '11', cat: 'TV', desc: 'Мультсериалы' },
      { id: '13', cat: 'TV', desc: 'Отечественные cериалы' },
      { id: '137', cat: 'TV', desc: 'Бригада' },
      { id: '188', cat: 'TV', desc: 'Восьмидесятые' },
      { id: '815', cat: 'TV', desc: 'Глухарь' },
      { id: '559', cat: 'TV', desc: 'Интерны' },
      { id: '189', cat: 'TV', desc: 'Кадетство' },
      { id: '221', cat: 'TV', desc: 'Карпов' },
      { id: '422', cat: 'TV', desc: 'Реальные пацаны' },
      { id: '661', cat: 'TV', desc: 'Сваты' },
      { id: '584', cat: 'TV', desc: 'Убойная сила' },
      { id: '651', cat: 'TV', desc: 'Улицы разбитых фонарей' },
      { id: '136', cat: 'TV', desc: 'Универ' },
      {
        id: '57',
        cat: 'TV',
        desc: 'Документальные фильмы и телепередачи',
      },
      { id: '155', cat: 'TV', desc: 'BBC' },
      { id: '186', cat: 'TV', desc: 'Discovery Channel' },
      { id: '570', cat: 'TV', desc: 'HD' },
      { id: '634', cat: 'TV', desc: 'IMAX/3D' },
      { id: '403', cat: 'TV', desc: 'National Geographic' },
      { id: '824', cat: 'TV', desc: 'Авиация' },
      { id: '855', cat: 'TV', desc: 'Биографии. Личности и кумиры' },
      { id: '856', cat: 'TV', desc: 'Видовые, релаксационные' },
      { id: '443', cat: 'TV', desc: 'Военное дело' },
      { id: '554', cat: 'TV', desc: 'Живая планета' },
      { id: '830', cat: 'TV', desc: 'За рулем' },
      {
        id: '867',
        cat: 'TV',
        desc: 'Информационно-аналитические передачи и публицистика',
      },
      { id: '633', cat: 'TV', desc: 'История и мировая культура' },
      { id: '531', cat: 'TV', desc: 'Космос' },
      { id: '185', cat: 'TV', desc: 'Криминальная документалистика' },
      { id: '965', cat: 'TV', desc: 'Научно-популярные фильмы' },
      {
        id: '866',
        cat: 'TV',
        desc: 'Паранормальные явления и экстрасенсорика',
      },
      { id: '523', cat: 'TV', desc: 'Политика и экономика' },
      {
        id: '58',
        cat: 'TV',
        desc: 'Развлекательные телепередачи и шоу, приколы и юмор',
      },
      { id: '154', cat: 'TV', desc: 'Comedy Club' },
      { id: '551', cat: 'TV', desc: 'Top Gear' },
      { id: '621', cat: 'TV', desc: 'Пост-КВН и Молодежные скетч-шоу' },
      { id: '15', cat: 'Books', desc: 'Книги (общий раздел)' },
      { id: '1015', cat: 'Books', desc: 'Собрание сочинений' },
      { id: '1016', cat: 'Books', desc: 'Издательские серии и циклы' },
      { id: '852', cat: 'Books', desc: 'Библиотеки и собрания книг' },
      {
        id: '1018',
        cat: 'Books',
        desc: 'Естественные и формальные науки',
      },
      { id: '358', cat: 'Books', desc: 'Научно-популярная литература' },
      {
        id: '1032',
        cat: 'Books',
        desc: 'Головоломки, логические задачи и игры',
      },
      { id: '942', cat: 'Books', desc: 'Иностранные языки' },
      { id: '20', cat: 'Books', desc: 'Авто и мото' },
      { id: '359', cat: 'Books', desc: 'Детские книги и журналы' },
      { id: '97', cat: 'Books', desc: 'Журналы (общий раздел)' },
      {
        id: '972',
        cat: 'Books',
        desc: 'Искусство. Культурология. Путеводители',
      },
      { id: '356', cat: 'Books', desc: 'Искусство фотографии' },
      {
        id: '354',
        cat: 'Books',
        desc: 'Историческая литература и военное дело',
      },
      { id: '116', cat: 'Books', desc: 'Комиксы' },
      { id: '973', cat: 'Books', desc: 'Кулинария' },
      { id: '352', cat: 'Books', desc: 'Медицина и здоровье' },
      {
        id: '816',
        cat: 'Books',
        desc: 'Многопредметные энциклопедии и словари',
      },
      { id: '446', cat: 'Books', desc: 'Ноты и музыкальная литература' },
      {
        id: '946',
        cat: 'Books',
        desc: 'Психология. Философия. Эзотерика.',
      },
      { id: '756', cat: 'Books', desc: 'Радиоэлектроника' },
      { id: '355', cat: 'Books', desc: 'Рисунок, графический дизайн' },
      { id: '353', cat: 'Books', desc: 'Спорт, боевые искусства' },
      { id: '357', cat: 'Books', desc: 'Строительство и ремонт' },
      { id: '94', cat: 'Books', desc: 'Учебные' },
      { id: '93', cat: 'Books', desc: 'Художественные' },
      {
        id: '640',
        cat: 'Books',
        desc: 'Хобби и увлечения, коллекционирование (разное)',
      },
      { id: '1019', cat: 'Books', desc: 'Художественная литература' },
      {
        id: '1020',
        cat: 'Books',
        desc: 'Собрание сочинений (классическая литература)',
      },
      {
        id: '1021',
        cat: 'Books',
        desc: 'Собрание сочинений (классическая фантастика/фэнтези)',
      },
      {
        id: '1022',
        cat: 'Books',
        desc: 'Собрание сочинений (современная литература)',
      },
      {
        id: '1023',
        cat: 'Books',
        desc: 'Собрание сочинений (современная фантастика/фэнтези)',
      },
      { id: '1024', cat: 'Books', desc: 'Издательские серии и циклы' },
      { id: '1025', cat: 'Books', desc: 'Библиотеки и собрания книг' },
      {
        id: '1026',
        cat: 'Books',
        desc: 'Классическая русская литература',
      },
      {
        id: '1027',
        cat: 'Books',
        desc: 'Классическая зарубежная литература',
      },
      { id: '1036', cat: 'Books', desc: 'Классический детектив' },
      {
        id: '1028',
        cat: 'Books',
        desc: 'Классическая фантастика и фэнтези',
      },
      { id: '1035', cat: 'Books', desc: 'Классическое фэнтези' },
      { id: '1037', cat: 'Books', desc: 'Современная классика' },
      { id: '1029', cat: 'Books', desc: 'Современная литература' },
      {
        id: '1030',
        cat: 'Books',
        desc: 'Современная фантастика и фэнтези',
      },
      { id: '1038', cat: 'Books', desc: 'Современная фэнтези' },
      { id: '1040', cat: 'Books', desc: 'Детективы и триллеры' },
      { id: '1041', cat: 'Books', desc: 'Мистика и ужасы' },
      {
        id: '1043',
        cat: 'Books',
        desc: 'Приключения и путешествия. Природа и животные',
      },
      { id: '1044', cat: 'Books', desc: 'Биографии и мемуары' },
      {
        id: '1045',
        cat: 'Books',
        desc: 'Легенды и мифы, сказки народов мира',
      },
      {
        id: '1042',
        cat: 'Books',
        desc: 'Детская и подростковая литература',
      },
      { id: '1039', cat: 'Books', desc: 'Поэзия' },
      { id: '1031', cat: 'Books', desc: 'Ранобэ' },
      { id: '16', cat: 'Books', desc: 'Компьютерная литература' },
      {
        id: '1033',
        cat: 'Books',
        desc: 'Машинное обучение и data mining',
      },
      {
        id: '344',
        cat: 'Books',
        desc: 'Unix-подобная операционная система',
      },
      { id: '346', cat: 'Books', desc: 'Веб-дизайн и программирование' },
      { id: '348', cat: 'Books', desc: 'Графика' },
      { id: '351', cat: 'Books', desc: 'Железо (книги о ПК)' },
      { id: '341', cat: 'Books', desc: 'Компьютерные журналы' },
      { id: '347', cat: 'Books', desc: 'Программирование' },
      { id: '1034', cat: 'Books', desc: 'Программирование (теория)' },
      { id: '343', cat: 'Books', desc: 'Программы' },
      { id: '342', cat: 'Books', desc: 'Программы от Microsoft' },
      { id: '349', cat: 'Books', desc: 'Сети' },
      { id: '345', cat: 'Books', desc: 'Базы данных, СУБД' },
      { id: '350', cat: 'Books', desc: 'Хакинг и безопасность' },
      { id: '17', cat: 'Books', desc: 'Аудиокниги' },
      { id: '941', cat: 'Books', desc: 'Детская литература' },
      { id: '940', cat: 'Books', desc: 'Иностранные языки' },
      {
        id: '468',
        cat: 'Books',
        desc: 'Классическая литература (Аудиокниги)',
      },
      {
        id: '853',
        cat: 'Books',
        desc: 'Психология, тренинги, саморазвитие (Аудиокниги)',
      },
      {
        id: '95',
        cat: 'Books',
        desc: 'Современная литература (Аудиокниги)',
      },
      { id: '96', cat: 'Books', desc: 'Учебные аудиокниги (разное)' },
      {
        id: '854',
        cat: 'Books',
        desc: 'Фантастика / Фэнтези / Мистика (Аудиокниги)',
      },
      {
        id: '19',
        cat: 'Books',
        desc: 'Видеоуроки и обучающие интерактивные DVD',
      },
      { id: '629', cat: 'Books', desc: 'Авто и мото' },
      {
        id: '596',
        cat: 'Books',
        desc: 'Беременность, роды, уход за новорождённым',
      },
      { id: '439', cat: 'Books', desc: 'Бизнес' },
      { id: '575', cat: 'Books', desc: 'Для детей' },
      { id: '522', cat: 'Books', desc: 'Иностранные языки' },
      { id: '426', cat: 'Books', desc: 'Йога' },
      { id: '595', cat: 'Books', desc: 'Кулинария' },
      { id: '744', cat: 'Books', desc: 'Массаж' },
      { id: '577', cat: 'Books', desc: 'Медицина и здоровье' },
      { id: '219', cat: 'Books', desc: 'Музыка' },
      { id: '811', cat: 'Books', desc: 'Пикап, правила общения' },
      { id: '217', cat: 'Books', desc: 'ПО' },
      {
        id: '593',
        cat: 'Books',
        desc: 'Психология, тренинги, саморазвитие',
      },
      { id: '654', cat: 'Books', desc: 'Рисование' },
      { id: '218', cat: 'Books', desc: 'Рыбалка' },
      { id: '747', cat: 'Books', desc: 'Секреты красоты' },
      { id: '576', cat: 'Books', desc: 'Строительство и ремонт' },
      { id: '474', cat: 'Books', desc: 'Танцы' },
      { id: '743', cat: 'Books', desc: 'Фокусы и трюки' },
      { id: '82', cat: 'Books', desc: 'Подкасты' },
      { id: '216', cat: 'Audio', desc: 'Rocksteady, Ska, Reggae, Dub' },
      { id: '83', cat: 'Audio', desc: 'World Music, Ethnic, Folk' },
      { id: '401', cat: 'Audio', desc: 'Сборники' },
      { id: '598', cat: 'Audio', desc: 'Башкирская, татарская' },
      { id: '617', cat: 'Audio', desc: 'Видео' },
      { id: '616', cat: 'Audio', desc: 'Сборники клипов' },
      { id: '615', cat: 'Audio', desc: 'Сборники' },
      { id: '637', cat: 'Audio', desc: 'Юмор' },
      { id: '22', cat: 'Audio', desc: 'Джаз и Блюз' },
      { id: '606', cat: 'Audio', desc: 'Lossless' },
      { id: '23', cat: 'Audio', desc: 'Классическая музыка' },
      { id: '607', cat: 'Audio', desc: 'Lossless' },
      { id: '27', cat: 'Audio', desc: 'Музыка других жанров' },
      { id: '608', cat: 'Audio', desc: 'Lossless' },
      { id: '24', cat: 'Audio', desc: 'Поп музыка' },
      { id: '470', cat: 'Audio', desc: 'Зарубежная' },
      { id: '599', cat: 'Audio', desc: 'Зарубежная (lossless)' },
      { id: '469', cat: 'Audio', desc: 'Отечественная' },
      { id: '600', cat: 'Audio', desc: 'Отечественная (lossless)' },
      { id: '471', cat: 'Audio', desc: 'Сборники' },
      { id: '25', cat: 'Audio', desc: "Рэп, Хип-Хоп, R'n'B" },
      { id: '925', cat: 'Audio', desc: 'WebRip Видео (Зарубежное)' },
      { id: '880', cat: 'Audio', desc: 'WebRip Видео (Отечественное)' },
      { id: '410', cat: 'Audio', desc: 'DVD видео' },
      { id: '411', cat: 'Audio', desc: 'HD видео' },
      { id: '420', cat: 'Audio', desc: 'Instrumental' },
      { id: '235', cat: 'Audio', desc: 'Зарубежный Рэп, Хип-Хоп' },
      {
        id: '611',
        cat: 'Audio',
        desc: "Зарубежный Рэп, Хип-Хоп, R'n'B (lossless)",
      },
      { id: '921', cat: 'Audio', desc: "Зарубежный R'n'B" },
      { id: '922', cat: 'Audio', desc: "Отечественный R'n'B" },
      { id: '234', cat: 'Audio', desc: 'Отечественный Рэп, Хип-Хоп' },
      {
        id: '612',
        cat: 'Audio',
        desc: "Отечественный Рэп, Хип-Хоп, R'n'B (lossless)",
      },
      { id: '409', cat: 'Audio', desc: 'Видео (Заруб.)' },
      { id: '412', cat: 'Audio', desc: 'Видео (Отеч.)' },
      { id: '26', cat: 'Audio', desc: 'Саундтреки и Караоке' },
      { id: '484', cat: 'Audio', desc: 'Саундтреки к играм' },
      { id: '579', cat: 'Audio', desc: 'Саундтреки к играм (lossless)' },
      {
        id: '485',
        cat: 'Audio',
        desc: 'Саундтреки к фильмам и сериалам',
      },
      {
        id: '580',
        cat: 'Audio',
        desc: 'Саундтреки к фильмам и сериалам (lossless)',
      },
      { id: '735', cat: 'Audio', desc: 'Караоке' },
      {
        id: '156',
        cat: 'Audio',
        desc: 'Шансон, Авторская и Военная песня',
      },
      { id: '676', cat: 'Audio', desc: 'Шансон' },
      { id: '677', cat: 'Audio', desc: 'Авторская и Военная песня' },
      { id: '678', cat: 'Audio', desc: 'Сборники' },
      { id: '239', cat: 'Audio', desc: 'Видео (Музыка)' },
      { id: '241', cat: 'Audio', desc: 'DVD' },
      { id: '240', cat: 'Audio', desc: 'HD' },
      { id: '376', cat: 'Audio', desc: 'Клипы (Зарубежные)' },
      { id: '375', cat: 'Audio', desc: 'Клипы (Отечественные)' },
      { id: '549', cat: 'Audio', desc: 'Сборники Клипов' },
      { id: '30', cat: 'Audio', desc: 'Зарубежная Alternative' },
      { id: '267', cat: 'Audio', desc: 'Alternative' },
      { id: '562', cat: 'Audio', desc: 'Alternative (lossless)' },
      { id: '368', cat: 'Audio', desc: 'Emo / Hardcore' },
      { id: '563', cat: 'Audio', desc: 'Emo / Hardcore (lossless)' },
      { id: '369', cat: 'Audio', desc: 'Industrial' },
      { id: '564', cat: 'Audio', desc: 'Industrial (lossless)' },
      { id: '266', cat: 'Audio', desc: 'Punk' },
      { id: '565', cat: 'Audio', desc: 'Punk (lossless)' },
      { id: '364', cat: 'Audio', desc: 'Отечественная Alternative' },
      { id: '370', cat: 'Audio', desc: 'Alternative' },
      { id: '566', cat: 'Audio', desc: 'Alternative (lossless)' },
      { id: '365', cat: 'Audio', desc: 'Emo / Hardcore' },
      { id: '567', cat: 'Audio', desc: 'Emo / Hardcore (lossless)' },
      { id: '366', cat: 'Audio', desc: 'Industrial' },
      { id: '568', cat: 'Audio', desc: 'Industrial (lossless)' },
      { id: '367', cat: 'Audio', desc: 'Punk' },
      { id: '569', cat: 'Audio', desc: 'Punk (lossless)' },
      { id: '29', cat: 'Audio', desc: 'Зарубежный Metal' },
      { id: '254', cat: 'Audio', desc: 'Avant-garde, Experimental' },
      {
        id: '498',
        cat: 'Audio',
        desc: 'Avant-garde, Experimental (lossless)',
      },
      { id: '253', cat: 'Audio', desc: 'Black, Folk, Pagan, Viking' },
      {
        id: '499',
        cat: 'Audio',
        desc: 'Black, Folk, Pagan, Viking (lossless)',
      },
      { id: '252', cat: 'Audio', desc: 'Death, Doom, Sludge, Stoner' },
      {
        id: '500',
        cat: 'Audio',
        desc: 'Death, Doom, Sludge, Stoner (lossless)',
      },
      { id: '251', cat: 'Audio', desc: 'Gothic Metal' },
      { id: '501', cat: 'Audio', desc: 'Gothic Metal (lossless)' },
      { id: '250', cat: 'Audio', desc: 'Grind, Brutal Death' },
      { id: '502', cat: 'Audio', desc: 'Grind, Brutal Death (lossless)' },
      { id: '249', cat: 'Audio', desc: 'Heavy, Power, Progressive' },
      {
        id: '503',
        cat: 'Audio',
        desc: 'Heavy, Power, Progressive (lossless)',
      },
      { id: '895', cat: 'Audio', desc: 'Symphonic, Operatic' },
      { id: '909', cat: 'Audio', desc: 'Symphonic, Operatic (lossless)' },
      { id: '247', cat: 'Audio', desc: 'Thrash, Speed' },
      { id: '504', cat: 'Audio', desc: 'Thrash, Speed (lossless)' },
      { id: '28', cat: 'Audio', desc: 'Зарубежный Rock' },
      { id: '260', cat: 'Audio', desc: 'Classic Rock & Hard Rock' },
      {
        id: '505',
        cat: 'Audio',
        desc: 'Classic Rock & Hard Rock (lossless)',
      },
      { id: '258', cat: 'Audio', desc: 'Folk-Rock' },
      { id: '506', cat: 'Audio', desc: 'Folk-Rock (lossless)' },
      {
        id: '444',
        cat: 'Audio',
        desc: 'Garage Rock, Post-Punk, Gothic Rock, Synth Pop',
      },
      {
        id: '507',
        cat: 'Audio',
        desc: 'Garage Rock, Post-Punk, Gothic Rock, Synth Pop (lossless)',
      },
      { id: '256', cat: 'Audio', desc: 'Instrumental' },
      { id: '508', cat: 'Audio', desc: 'Instrumental (lossless)' },
      {
        id: '257',
        cat: 'Audio',
        desc: 'Indie Rock, Britpop, Pop-Rock, Soft Rock',
      },
      {
        id: '509',
        cat: 'Audio',
        desc: 'Indie Rock, Britpop, Pop-Rock, Soft Rock (lossless)',
      },
      { id: '259', cat: 'Audio', desc: 'Progressive & Art-Rock' },
      {
        id: '510',
        cat: 'Audio',
        desc: 'Progressive & Art-Rock (lossless)',
      },
      {
        id: '255',
        cat: 'Audio',
        desc: "Rockabilly, Psychobilly, Rock'n'Roll",
      },
      {
        id: '511',
        cat: 'Audio',
        desc: "Rockabilly, Psychobilly, Rock'n'Roll (lossless)",
      },
      { id: '99', cat: 'Audio', desc: 'Отечественный Метал' },
      { id: '336', cat: 'Audio', desc: 'Black, Folk, Pagan, Viking' },
      {
        id: '512',
        cat: 'Audio',
        desc: 'Black, Folk, Pagan, Viking (lossless)',
      },
      { id: '338', cat: 'Audio', desc: 'Death, Grind' },
      { id: '513', cat: 'Audio', desc: 'Death, Grind (lossless)' },
      { id: '335', cat: 'Audio', desc: 'Doom, Gothic' },
      { id: '514', cat: 'Audio', desc: 'Doom, Gothic (lossless)' },
      {
        id: '333',
        cat: 'Audio',
        desc: 'Hard & Heavy, Power, Speed, Thrash',
      },
      {
        id: '515',
        cat: 'Audio',
        desc: 'Hard & Heavy, Power, Speed, Thrash (lossless)',
      },
      { id: '334', cat: 'Audio', desc: 'Progressive, Art' },
      { id: '516', cat: 'Audio', desc: 'Progressive, Art (lossless)' },
      { id: '31', cat: 'Audio', desc: 'Отечественный Рок' },
      {
        id: '360',
        cat: 'Audio',
        desc: "Classic Rock & Hard Rock & Rock'n'Roll",
      },
      {
        id: '517',
        cat: 'Audio',
        desc: "Classic Rock & Hard Rock & Rock'n...",
      },
      { id: '361', cat: 'Audio', desc: 'Progressive & Art-Rock' },
      {
        id: '518',
        cat: 'Audio',
        desc: 'Progressive & Art-Rock (lossless)',
      },
      {
        id: '362',
        cat: 'Audio',
        desc: 'Pop-Rock & Soft Rock & Folk Rock',
      },
      {
        id: '519',
        cat: 'Audio',
        desc: 'Pop-Rock & Soft Rock & Folk Rock (lossless)',
      },
      { id: '141', cat: 'Audio', desc: 'Experimental' },
      { id: '526', cat: 'Audio', desc: 'Lossless' },
      { id: '32', cat: 'Audio', desc: 'Видео (Рок-музыка)' },
      { id: '374', cat: 'Audio', desc: 'Alternative' },
      { id: '238', cat: 'Audio', desc: 'DVD' },
      { id: '573', cat: 'Audio', desc: 'Experimental' },
      { id: '237', cat: 'Audio', desc: 'HD' },
      { id: '574', cat: 'Audio', desc: 'J-Rock / Pop / Visual Kei' },
      { id: '571', cat: 'Audio', desc: 'Metal' },
      { id: '572', cat: 'Audio', desc: 'Rock' },
      { id: '373', cat: 'Audio', desc: 'Документалистика' },
      { id: '400', cat: 'Audio', desc: 'Сборники Рок-Музыки' },
      {
        id: '33',
        cat: 'Audio',
        desc: 'Trance, Goa-Trance, Psy-Trance, PsyChill, Ambient Dub',
      },
      { id: '429', cat: 'Audio', desc: 'Trance - Albums, Compilations' },
      {
        id: '430',
        cat: 'Audio',
        desc: 'Trance - Radioshows, Livesets, Mixes',
      },
      { id: '874', cat: 'Audio', desc: 'Trance - Singles, EPs' },
      {
        id: '533',
        cat: 'Audio',
        desc: 'Trance - Singles, Albums, LPs (lossless)',
      },
      {
        id: '428',
        cat: 'Audio',
        desc: 'Goa-Trance / Psychedelic / Psy-Chill / Ambient Dub',
      },
      {
        id: '534',
        cat: 'Audio',
        desc: 'Goa-Trance / Psychedelic / Psy-Chill / Ambient Dub...',
      },
      { id: '658', cat: 'Audio', desc: 'Сборники' },
      { id: '34', cat: 'Audio', desc: 'House, Techno' },
      { id: '438', cat: 'Audio', desc: 'Techno / Minimal / Tech House' },
      { id: '435', cat: 'Audio', desc: 'House / Electro House' },
      {
        id: '536',
        cat: 'Audio',
        desc: 'House / Electro House (lossless)',
      },
      { id: '659', cat: 'Audio', desc: 'Сборники House / Electro House' },
      { id: '436', cat: 'Audio', desc: 'Progressive House / Deep House' },
      {
        id: '35',
        cat: 'Audio',
        desc: 'Drum & Bass, Jungle, Electro, Breakbeat, IDM,...',
      },
      { id: '416', cat: 'Audio', desc: 'Breakbeat / Beats' },
      { id: '540', cat: 'Audio', desc: 'Breakbeat / Beats (lossless)' },
      { id: '415', cat: 'Audio', desc: 'Drum & Bass / Jungle' },
      {
        id: '543',
        cat: 'Audio',
        desc: 'Drum & Bass / Jungle (lossless)',
      },
      { id: '417', cat: 'Audio', desc: 'Electro' },
      { id: '419', cat: 'Audio', desc: 'Hardcore / Hardstyle' },
      { id: '418', cat: 'Audio', desc: 'Idm' },
      { id: '660', cat: 'Audio', desc: 'Сборники' },
      {
        id: '36',
        cat: 'Audio',
        desc: 'Chillout, Lounge, Downtempo, Trip-Hop',
      },
      { id: '538', cat: 'Audio', desc: 'Lossless' },
      { id: '402', cat: 'Audio', desc: 'Сборники' },
      { id: '84', cat: 'Audio', desc: 'Industrial' },
      { id: '242', cat: 'Audio', desc: 'Видео (Электронная музыка)' },
      { id: '244', cat: 'Audio', desc: 'DVD' },
      { id: '243', cat: 'Audio', desc: 'HD' },
      { id: '377', cat: 'Audio', desc: 'Клипы' },
      { id: '40', cat: 'PC/Games', desc: 'Новые раздачи' },
      { id: '65', cat: 'PC/Games', desc: 'Горячие Новинки' },
      { id: '75', cat: 'PC/Games', desc: 'Action' },
      { id: '457', cat: 'PC/Games', desc: 'Action до 2003 г.' },
      { id: '900', cat: 'PC/Games', desc: 'FPS (1st Person)' },
      { id: '901', cat: 'PC/Games', desc: 'TPS (3rd Person)' },
      { id: '902', cat: 'PC/Games', desc: 'Counter Strike' },
      { id: '102', cat: 'PC/Games', desc: 'Horror' },
      { id: '456', cat: 'PC/Games', desc: 'Horror до 2003 г.' },
      { id: '822', cat: 'PC/Games', desc: 'Азартные игры' },
      { id: '68', cat: 'PC/Games', desc: 'Аркады' },
      { id: '464', cat: 'PC/Games', desc: 'Аркады до 2003 г.' },
      { id: '73', cat: 'PC/Games', desc: 'Гонки' },
      { id: '463', cat: 'PC/Games', desc: 'Гонки до 2003 г.' },
      { id: '270', cat: 'PC/Games', desc: 'Для самых маленьких' },
      { id: '823', cat: 'PC/Games', desc: 'Другое' },
      { id: '624', cat: 'PC/Games', desc: 'Программы для игр' },
      { id: '66', cat: 'PC/Games', desc: 'Модификации' },
      { id: '657', cat: 'PC/Games', desc: 'Логические' },
      { id: '77', cat: 'PC/Games', desc: 'Многопользовательские' },
      { id: '69', cat: 'PC/Games', desc: 'Приключения и квесты' },
      {
        id: '461',
        cat: 'PC/Games',
        desc: 'Приключения и квесты до 2003 г.',
      },
      { id: '76', cat: 'PC/Games', desc: 'Ролевые (RPG)' },
      { id: '455', cat: 'PC/Games', desc: 'Ролевые (RPG) до 2003 г.' },
      { id: '908', cat: 'PC/Games', desc: 'Симуляторы' },
      { id: '271', cat: 'PC/Games', desc: 'Спортивные симуляторы' },
      { id: '787', cat: 'PC/Games', desc: 'Космические симуляторы' },
      { id: '74', cat: 'PC/Games', desc: 'Другие симуляторы' },
      { id: '71', cat: 'PC/Games', desc: 'Автосимуляторы' },
      { id: '72', cat: 'PC/Games', desc: 'Авиасимуляторы' },
      { id: '70', cat: 'PC/Games', desc: 'Стратегии' },
      { id: '459', cat: 'PC/Games', desc: 'Стратегии до 2003 г.' },
      { id: '903', cat: 'PC/Games', desc: 'TBS (пошаговые стратегии)' },
      {
        id: '904',
        cat: 'PC/Games',
        desc: 'RTS (стратегии в реальном времени)',
      },
      { id: '905', cat: 'PC/Games', desc: 'Экономические стратегии' },
      { id: '496', cat: 'PC/Games', desc: 'Файтинги' },
      {
        id: '906',
        cat: 'PC/Games',
        desc: 'Репаки от R.G.Packers Torrents.Local',
      },
      { id: '961', cat: 'PC/Games', desc: 'Игры с эмуляторами' },
      { id: '918', cat: 'PC', desc: 'Новые раздачи' },
      { id: '50', cat: 'PC', desc: 'Веб-разработка и Программирование' },
      { id: '319', cat: 'PC', desc: 'WYSIWYG Редакторы для веб-диза' },
      {
        id: '316',
        cat: 'PC',
        desc: 'Компоненты для сред программирования',
      },
      { id: '315', cat: 'PC', desc: 'Скрипты и шаблоны' },
      {
        id: '317',
        cat: 'PC',
        desc: 'Среды программирования, компиляторы и вспомогател...',
      },
      { id: '318', cat: 'PC', desc: 'Текстовые редакторы' },
      { id: '52', cat: 'PC', desc: 'ГИС, системы навигации и карты' },
      {
        id: '332',
        cat: 'PC',
        desc: 'Материалы для мультимедиа и дизайна',
      },
      { id: '594', cat: 'PC', desc: 'Авторские сборки' },
      { id: '582', cat: 'PC', desc: 'Кисти' },
      { id: '746', cat: 'PC', desc: 'Семплы' },
      { id: '552', cat: 'PC', desc: 'Футажи' },
      { id: '581', cat: 'PC', desc: 'Шрифты' },
      { id: '47', cat: 'PC', desc: 'Операционные системы от Microsoft' },
      {
        id: '284',
        cat: 'PC',
        desc: 'Настольные ОС от Microsoft (выпущенные до Windows XP)',
      },
      { id: '280', cat: 'PC', desc: 'Windows XP' },
      { id: '282', cat: 'PC', desc: 'Windows Vista' },
      { id: '378', cat: 'PC', desc: 'Windows 7' },
      { id: '944', cat: 'PC', desc: 'Windows 8' },
      { id: '789', cat: 'PC', desc: 'Windows 10' },
      { id: '281', cat: 'PC', desc: 'Серверные ОС' },
      { id: '732', cat: 'PC', desc: 'WPI, Live CD, Пакеты обновлений' },
      {
        id: '51',
        cat: 'PC',
        desc: 'Программы для работы с мультимедиа и 3D',
      },
      {
        id: '324',
        cat: 'PC',
        desc: '3D моделирование, рендеринг и плагины для них',
      },
      { id: '325', cat: 'PC', desc: 'Анимация' },
      {
        id: '330',
        cat: 'PC',
        desc: 'Аудио- и видео-, CD- проигрыватели и каталогизаторы',
      },
      { id: '328', cat: 'PC', desc: 'Аудио- и видео- конверторы' },
      { id: '118', cat: 'PC', desc: 'Графические редакторы' },
      {
        id: '331',
        cat: 'PC',
        desc: 'Каталогизаторы и просмотрщики графики',
      },
      { id: '623', cat: 'PC', desc: 'Кодеки' },
      { id: '329', cat: 'PC', desc: 'Работа со звуком' },
      { id: '327', cat: 'PC', desc: 'Редакторы видео' },
      { id: '326', cat: 'PC', desc: 'Создание DVD-видео' },
      {
        id: '322',
        cat: 'PC',
        desc: 'Плагины для программ компании Adobe',
      },
      { id: '321', cat: 'PC', desc: 'Программные комплекты' },
      {
        id: '323',
        cat: 'PC',
        desc: 'Программы для верстки, печати и работы со шрифтами',
      },
      { id: '48', cat: 'PC', desc: 'Системные программы' },
      { id: '291', cat: 'PC', desc: 'Анти-шпионы и анти-трояны' },
      { id: '300', cat: 'PC', desc: 'Архиваторы и файловые менеджеры' },
      { id: '289', cat: 'PC', desc: 'Драйвера' },
      { id: '287', cat: 'PC', desc: 'Изменение интерфейса ОС Windows' },
      { id: '296', cat: 'PC', desc: 'Информация и диагностика' },
      { id: '290', cat: 'PC', desc: 'Программы для защиты информации' },
      { id: '295', cat: 'PC', desc: 'Программы для интернет и сетей' },
      { id: '292', cat: 'PC', desc: 'Программы для защиты компьютера' },
      {
        id: '299',
        cat: 'PC',
        desc: 'Программы для настройки и оптимизации ОС',
      },
      { id: '297', cat: 'PC', desc: 'Работа с носителями информации' },
      { id: '285', cat: 'PC', desc: 'Работа с жёстким диском' },
      { id: '301', cat: 'PC', desc: 'Резервное копирование' },
      { id: '288', cat: 'PC', desc: 'Серверное ПО для Windows' },
      { id: '298', cat: 'PC', desc: 'Сервисное обслуживание компьютера' },
      { id: '286', cat: 'PC', desc: 'Скринсейверы' },
      { id: '54', cat: 'PC', desc: 'Разное' },
      {
        id: '622',
        cat: 'PC',
        desc: 'Обучающие программы, энциклопедии, электронные пособия ...',
      },
      {
        id: '303',
        cat: 'PC',
        desc: 'Системы для бизнеса, офиса, научной и проектной работы',
      },
      { id: '313', cat: 'PC', desc: 'Медицинский софт' },
      { id: '305', cat: 'PC', desc: 'Офисные системы' },
      {
        id: '312',
        cat: 'PC',
        desc: 'Программы для архитекторов и дизайнеров интерьеров',
      },
      { id: '314', cat: 'PC', desc: 'Прочие справочные системы' },
      { id: '308', cat: 'PC', desc: 'Работа с PDF и DjVu' },
      {
        id: '307',
        cat: 'PC',
        desc: 'Распознавание текста, звука и синтез речи',
      },
      { id: '311', cat: 'PC', desc: 'САПР' },
      { id: '306', cat: 'PC', desc: 'Системы для бизнеса' },
      { id: '310', cat: 'PC', desc: 'Системы для научной работы' },
      { id: '309', cat: 'PC', desc: 'Словари, переводчики' },
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
      name: 'info',
      type: 'info',
      label: 'Layout',
      default:
        '<b>Only the Classic forum style is supported.</b><br/><li>On the TorrentsLocal web site navigate to the <b>Личные настройки (Preferences)</b> section and set the <b>Стиль форума (Forum Style)</b> option to <b>Классическая тема (Classic Theme)</b></li>',
    },
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: 1,
      options: { '1': 'created', '2': 'title', '7': 'size', '10': 'seeders' },
    },
    {
      name: 'type',
      type: 'select',
      label: 'Order requested from site',
      default: 2,
      options: { '1': 'asc', '2': 'desc' },
    },
  ],
  login: {
    path: 'login.php',
    method: 'post',
    inputs: {
      login_username: '{{ .Config.username }}',
      login_password: '{{ .Config.password }}',
      autologin: 1,
      login: 'Log in',
    },
    error: [{ selector: 'h4.text-danger' }],
    test: {
      path: 'tracker.php',
      selector: 'a[href="./login.php?logout=1"]',
    },
  },
  search: {
    paths: [{ path: 'tracker.php', method: 'post' }],
    inputs: {
      $raw: '{{ if .Categories }}{{ range .Categories }}f[]={{.}}&{{end}}{{ else }}f[]=-1{{ end }}',
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
      allw: 1,
    },
    keywordsfilters: [{ name: 're_replace', args: ['(\\w+)', ' +$1'] }],
    rows: { selector: 'tr[id^="tor_"]' },
    fields: {
      category: {
        selector: 'a[href^="tracker.php?f="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'f' }],
      },
      title: { selector: 'a[href^="./viewtopic.php?t="]' },
      details: {
        selector: 'a[href^="./viewtopic.php?t="]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="./dl.php?id="]',
        attribute: 'href',
      },
      magnet: { selector: 'a[href^="magnet:?xt="]', attribute: 'href' },
      size: { selector: 'td:nth-last-child(5) > u' },
      seeders: { selector: 'td.seedmed' },
      leechers: { selector: 'td.leechmed' },
      grabs: { selector: 'td:nth-last-child(2)' },
      date: { selector: 'td:last-child > u' },
      downloadvolumefactor: {
        case: {
          'img[src="styles/images/tor_gold.gif"]': 0,
          'img[src="styles/images/tor_silver.gif"]': 0.5,
          '*': 1,
        },
      },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
