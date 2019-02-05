import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'casstudiotv',
  name: 'CasStudioTV',
  description: 'CasStudioTV is a RUSSIAN Private Torrent Tracker for TV',
  language: 'ru-RU',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://casstudio.tv/'],
  caps: {
    categorymappings: [
      { id: '259', cat: 'TV', desc: 'Сериалы (TV Series)' },
      {
        id: '56',
        cat: 'TV',
        desc: 'Зарубежные сериалы (Foreign series)',
      },
      { id: '310', cat: 'TV', desc: '9-1-1' },
      { id: '246', cat: 'TV', desc: '11.22.63' },
      { id: '158', cat: 'TV', desc: '4400 / The 4400' },
      { id: '86', cat: 'TV', desc: '12 Обезьян / 12 Monkeys' },
      {
        id: '120',
        cat: 'TV',
        desc: 'Агенты Щ.И.Т. / Agents of S.H.I.E.L.D.',
      },
      { id: '72', cat: 'TV', desc: 'Агент Картер / Agent Carter' },
      { id: '103', cat: 'TV', desc: 'Ад На Колёсах / Hell On Wheels' },
      {
        id: '110',
        cat: 'TV',
        desc: 'Американская семейка / Modern Family',
      },
      { id: '62', cat: 'TV', desc: 'Американцы / The Americans' },
      {
        id: '70',
        cat: 'TV',
        desc: "Анатомия страсти / Анатомия Грей / Grey's Anatomy",
      },
      { id: '210', cat: 'TV', desc: 'База Куантико / Quantico' },
      { id: '305', cat: 'TV', desc: 'Беглецы / Runaways' },
      { id: '122', cat: 'TV', desc: 'Безумцы / Mad Men' },
      { id: '134', cat: 'TV', desc: 'Белый воротничок / White Collar' },
      { id: '281', cat: 'TV', desc: 'Барыги / Narcos' },
      { id: '239', cat: 'TV', desc: 'Баскетс / Baskets' },
      { id: '155', cat: 'TV', desc: 'Бешеные псы / Mad Dogs' },
      { id: '243', cat: 'TV', desc: 'Библиотекари / The Librarians' },
      {
        id: '154',
        cat: 'TV',
        desc: 'Блудливая Калифорния / Californication',
      },
      {
        id: '208',
        cat: 'TV',
        desc: 'Бойтесь ходячих мертвецов / Fear the Walking Dead',
      },
      { id: '150', cat: 'TV', desc: 'Больница Никербокер / The Knick' },
      { id: '119', cat: 'TV', desc: 'Бывает и хуже / The Middle' },
      { id: '87', cat: 'TV', desc: 'В поле зрения / Person of Interest' },
      {
        id: '219',
        cat: 'TV',
        desc: 'В пустыне смерти / Into the Badlands',
      },
      { id: '118', cat: 'TV', desc: 'Веб терапия / Web Therapy' },
      {
        id: '123',
        cat: 'TV',
        desc: 'Ведьмы Ист-Энда / Witches of East End',
      },
      {
        id: '309',
        cat: 'TV',
        desc: 'Видоизмененный углерод / Altered Carbon',
      },
      { id: '241', cat: 'TV', desc: 'Винил / Vinyl' },
      { id: '91', cat: 'TV', desc: 'Викинги / Vikings' },
      { id: '172', cat: 'TV', desc: 'Вице-Президент / Veep' },
      { id: '204', cat: 'TV', desc: 'Власть в ночном городе / Power' },
      { id: '228', cat: 'TV', desc: 'Волшебники / The Magicians' },
      { id: '220', cat: 'TV', desc: 'Восприятие / Perception' },
      { id: '254', cat: 'TV', desc: 'Восстание / Rebellion' },
      { id: '248', cat: 'TV', desc: 'Вместе / Togetherness' },
      { id: '192', cat: 'TV', desc: 'Водолей / Aquarius' },
      { id: '65', cat: 'TV', desc: 'Возмездие / Revenge' },
      {
        id: '121',
        cat: 'TV',
        desc: 'Все Ненавидят Криса / Everybody Hates Chris',
      },
      { id: '166', cat: 'TV', desc: 'Ганнибал / Hannibal' },
      {
        id: '211',
        cat: 'TV',
        desc: 'Герои: Возрождение / Heroes Reborn',
      },
      { id: '293', cat: 'TV', desc: 'Голубая кровь / Blue Bloods' },
      { id: '145', cat: 'TV', desc: 'Город Хищниц / Cougar Town' },
      { id: '61', cat: 'TV', desc: 'Готэм / Gotham' },
      { id: '117', cat: 'TV', desc: 'Гримм / Grimm' },
      {
        id: '108',
        cat: 'TV',
        desc: 'Две девицы на мели / 2 Broke Girls',
      },
      { id: '66', cat: 'TV', desc: 'Девочки / Girls' },
      {
        id: '271',
        cat: 'TV',
        desc: 'Девушка по вызову / The Girlfriend Experience',
      },
      { id: '176', cat: 'TV', desc: 'Декстер / Dexter' },
      { id: '232', cat: 'TV', desc: 'Десница Божья / Hand of God' },
      { id: '307', cat: 'TV', desc: 'Династия / Dynasty' },
      {
        id: '102',
        cat: 'TV',
        desc: 'Дневники вампира / The Vampire Diaries',
      },
      { id: '229', cat: 'TV', desc: 'Джессика Джонс / Jessica Jones' },
      { id: '282', cat: 'TV', desc: 'Дорожная команда / Roadies' },
      {
        id: '205',
        cat: 'TV',
        desc: 'До смерти красива / Drop Dead Diva',
      },
      { id: '104', cat: 'TV', desc: 'Древние / The Originals' },
      {
        id: '278',
        cat: 'TV',
        desc: 'Загадочные события / Stranger Things',
      },
      {
        id: '182',
        cat: 'TV',
        desc: 'Задержка в развитии / Arrested Development',
      },
      {
        id: '201',
        cat: 'TV',
        desc: 'За пределами / Выжившая / Род человеческий / Extant',
      },
      { id: '301', cat: 'TV', desc: 'Защитники / The Defenders' },
      { id: '314', cat: 'TV', desc: 'Звёздный путь / Star Trek' },
      {
        id: '167',
        cat: 'TV',
        desc: 'Зов крови / Потерянная / Фейри / Lost Girl',
      },
      { id: '116', cat: 'TV', desc: 'Зовите меня Фитц / Call Me Fitz' },
      { id: '74', cat: 'TV', desc: 'Империя / Empire' },
      {
        id: '75',
        cat: 'TV',
        desc: 'Как избежать наказания за убийство / How to Get Away with Murder',
      },
      { id: '203', cat: 'TV', desc: 'Как бы счастье / Happyish' },
      {
        id: '141',
        cat: 'TV',
        desc: 'Как Я Встретил Вашу Маму / How I Met Your Mother',
      },
      { id: '277', cat: 'TV', desc: 'Карантин / Containment' },
      { id: '306', cat: 'TV', desc: 'Каратель / The Punisher' },
      { id: '174', cat: 'TV', desc: 'Карточный домик / House of Cards' },
      { id: '63', cat: 'TV', desc: 'Касл / Castle' },
      { id: '285', cat: 'TV', desc: 'Квантовый скачок / Quantum Leap' },
      { id: '169', cat: 'TV', desc: 'Кей и Пил / Key and Peele' },
      { id: '195', cat: 'TV', desc: 'Киллджойс / Killjoys' },
      {
        id: '222',
        cat: 'TV',
        desc: 'Клуб жен астронавтов / The Astronaut Wives Club',
      },
      {
        id: '197',
        cat: 'TV',
        desc: 'Коварные горничные / Devious Maids',
      },
      { id: '230', cat: 'TV', desc: 'Колония / Colony' },
      { id: '170', cat: 'TV', desc: 'Континуум / Continuum' },
      { id: '233', cat: 'TV', desc: "Конец детства / Childhood's End" },
      { id: '147', cat: 'TV', desc: 'Копы-новобранцы / Rookie Blue' },
      { id: '291', cat: 'TV', desc: 'Королева Юга / Queen of the South' },
      {
        id: '193',
        cat: 'TV',
        desc: 'Красавица и чудовище / Beauty and the Beast',
      },
      { id: '132', cat: 'TV', desc: 'Крах / The Fall' },
      {
        id: '146',
        cat: 'TV',
        desc: 'Красотки в Кливленде / Hot in Cleveland',
      },
      { id: '171', cat: 'TV', desc: 'Красавцы / Антураж / Entourage' },
      {
        id: '207',
        cat: 'TV',
        desc: 'Кремниевая долина / Silicon Valley',
      },
      {
        id: '238',
        cat: 'TV',
        desc: 'Легенды завтрашнего дня / Legends of Tomorrow',
      },
      { id: '300', cat: 'TV', desc: 'Легион / Legion' },
      {
        id: '294',
        cat: 'TV',
        desc: 'Лемони Сникет: 33 несчастья / A Series of Unfortunate Events',
      },
      { id: '130', cat: 'TV', desc: 'Лиллехаммер / Lilyhammer' },
      { id: '276', cat: 'TV', desc: 'Любовницы / Mistresses US' },
      { id: '198', cat: 'TV', desc: 'Люди / Humans' },
      { id: '165', cat: 'TV', desc: 'Лютер / Luther' },
      { id: '247', cat: 'TV', desc: 'Люцифер / Lucifer' },
      { id: '313', cat: 'TV', desc: 'МакГайвер / MacGyver' },
      { id: '127', cat: 'TV', desc: 'Майк и Молли / Mike & Molly' },
      { id: '156', cat: 'TV', desc: 'Мастера Секса / Masters of Sex' },
      { id: '245', cat: 'TV', desc: 'Медики Чикаго / Chicago Med' },
      { id: '180', cat: 'TV', desc: 'Миллеры в разводе / The Millers' },
      { id: '244', cat: 'TV', desc: 'Миллиарды / Billions' },
      { id: '234', cat: 'TV', desc: 'Мистер Робинсон / Mr. Robinson' },
      { id: '200', cat: 'TV', desc: 'Мистер робот / Mr. Robot' },
      { id: '173', cat: 'TV', desc: 'Мост / Broen / Bron' },
      { id: '126', cat: 'TV', desc: 'Мотель Бейтс / Bates Motel' },
      {
        id: '231',
        cat: 'TV',
        desc: 'Моцарт в джунглях / Mozart in the Jungle',
      },
      { id: '69', cat: 'TV', desc: 'Мушкетеры / The Musketeers' },
      {
        id: '76',
        cat: 'TV',
        desc: 'Мыслить как преступник / Criminal Minds',
      },
      { id: '202', cat: 'TV', desc: 'На грани / The Brink' },
      { id: '175', cat: 'TV', desc: 'Налёт / Braquo' },
      { id: '125', cat: 'TV', desc: 'Настоящая кровь / True Blood' },
      {
        id: '152',
        cat: 'TV',
        desc: 'Настоящий детектив / True Detective',
      },
      { id: '79', cat: 'TV', desc: 'Не те парни / The Wrong Mans' },
      { id: '164', cat: 'TV', desc: 'Нэшвилл / Nashville' },
      { id: '58', cat: 'TV', desc: 'Обитель лжи / House of Lies' },
      { id: '137', cat: 'TV', desc: 'Оборотень / Teen Wolf' },
      { id: '303', cat: 'TV', desc: 'Одаренные / The Gifted' },
      {
        id: '92',
        cat: 'TV',
        desc: 'Однажды в сказке / Once Upon A Time',
      },
      { id: '279', cat: 'TV', desc: 'Однажды ночью / The Night Of' },
      {
        id: '275',
        cat: 'TV',
        desc: 'Оранжевый - хит сезона / Orange is the New Black',
      },
      { id: '304', cat: 'TV', desc: 'Орвилл / The Orville' },
      { id: '212', cat: 'TV', desc: 'Оставленные / The Leftovers' },
      { id: '139', cat: 'TV', desc: 'Острые козырьки / Peaky Blinders' },
      {
        id: '163',
        cat: 'TV',
        desc: 'Отчаянные домохозяйки / Desperate Housewives',
      },
      { id: '138', cat: 'TV', desc: 'Отбросы / Misfits' },
      {
        id: '80',
        cat: 'TV',
        desc: 'Пересекающиеся линии / Пересекая черту / Crossing Lines',
      },
      { id: '218', cat: 'TV', desc: 'Плоть и кости / Flesh and Bone' },
      { id: '99', cat: 'TV', desc: 'Под куполом / Under The Dome' },
      {
        id: '149',
        cat: 'TV',
        desc: 'Подпольная Империя / Boardwalk Empire',
      },
      {
        id: '78',
        cat: 'TV',
        desc: 'Помнить все / Незабываемое / Unforgettable',
      },
      { id: '272', cat: 'TV', desc: 'Поворот / TURN' },
      { id: '90', cat: 'TV', desc: 'Пожарные Чикаго / Chicago Fire' },
      {
        id: '236',
        cat: 'TV',
        desc: 'Полицейские на велосипедах / Pacific Blue',
      },
      { id: '144', cat: 'TV', desc: 'Полиция Гавайев / Hawaii Five-0' },
      { id: '77', cat: 'TV', desc: 'Полиция Чикаго / Chicago PD' },
      { id: '162', cat: 'TV', desc: 'Последователи / The Following' },
      { id: '287', cat: 'TV', desc: 'Приговор / Conviction' },
      { id: '135', cat: 'TV', desc: 'ПригорАД / Suburgatory' },
      { id: '274', cat: 'TV', desc: 'Проповедник / Preacher' },
      { id: '113', cat: 'TV', desc: 'Просветленная / Enlightened' },
      { id: '235', cat: 'TV', desc: 'Пространство / The Expanse' },
      { id: '290', cat: 'TV', desc: 'Радиоволна / Frequency' },
      { id: '112', cat: 'TV', desc: 'Революция / Revolution' },
      { id: '83', cat: 'TV', desc: 'Родина / Homeland' },
      { id: '128', cat: 'TV', desc: 'Рэй Донован / Ray Donovan' },
      { id: '136', cat: 'TV', desc: 'Риццоли и Айлc / Rizzoli & Isles' },
      { id: '160', cat: 'TV', desc: 'Рухнувшие Небеса / Falling Skies' },
      { id: '199', cat: 'TV', desc: 'Салем / Salem' },
      { id: '111', cat: 'TV', desc: 'Сверхъестественное / Supernatural' },
      { id: '157', cat: 'TV', desc: 'Секретные материалы / X-Files' },
      { id: '267', cat: 'TV', desc: 'Семья / The Family' },
      { id: '311', cat: 'TV', desc: 'Сирена / Siren' },
      { id: '64', cat: 'TV', desc: 'Скандал / Scandal' },
      { id: '213', cat: 'TV', desc: 'Слепое пятно / Blindspot' },
      {
        id: '129',
        cat: 'TV',
        desc: 'Служба новостей / Новости / The Newsroom',
      },
      {
        id: '286',
        cat: 'TV',
        desc: 'Смертельное Оружие / Lethal Weapon',
      },
      { id: '93', cat: 'TV', desc: 'Сообщество / Community' },
      { id: '179', cat: 'TV', desc: 'Сопрано / The Sopranos' },
      { id: '194', cat: 'TV', desc: 'Сорвиголова / Daredevil' },
      { id: '109', cat: 'TV', desc: 'Сотня / 100 / The Hundred' },
      { id: '153', cat: 'TV', desc: 'Спартак / Spartacus' },
      { id: '266', cat: 'TV', desc: 'Страна чудес / Wonderland' },
      { id: '191', cat: 'TV', desc: 'Страшные сказки / Penny Dreadful' },
      { id: '131', cat: 'TV', desc: 'Стрела / Arrow' },
      { id: '190', cat: 'TV', desc: 'Супергёрл / Supergirl' },
      { id: '82', cat: 'TV', desc: 'Сыны Анархии / Sons of Anarchy' },
      { id: '295', cat: 'TV', desc: 'Табу / Taboo' },
      {
        id: '273',
        cat: 'TV',
        desc: 'Тайны Лауры / The Mysteries of Laura',
      },
      { id: '178', cat: 'TV', desc: 'Твин Пикс / Twin Peaks' },
      {
        id: '107',
        cat: 'TV',
        desc: 'Теория Большого Взрыва / The Big Bang Theory',
      },
      { id: '196', cat: 'TV', desc: 'Тёмная материя / Dark Matter' },
      { id: '280', cat: 'TV', desc: 'Тик / The Tick' },
      { id: '181', cat: 'TV', desc: 'Тугая струна / Wire in the Blood' },
      { id: '95', cat: 'TV', desc: 'Убийство / The Killing' },
      { id: '81', cat: 'TV', desc: 'Убить скуку / Bored to Death' },
      { id: '98', cat: 'TV', desc: 'Уилфред / Wilfred' },
      { id: '187', cat: 'TV', desc: 'Уэйуорд Пайнс / Wayward Pines' },
      { id: '142', cat: 'TV', desc: 'Флэш / Flash' },
      { id: '168', cat: 'TV', desc: 'Форс-мажоры / Костюмы / Suits' },
      {
        id: '59',
        cat: 'TV',
        desc: 'Ходячие мертвецы / The Walking Dead',
      },
      { id: '308', cat: 'TV', desc: 'Хороший доктор / The Good Doctor' },
      { id: '143', cat: 'TV', desc: 'Хранилище 13 / Warehouse 13' },
      {
        id: '237',
        cat: 'TV',
        desc: 'Хроники Шаннары / The Shannara Chronicles',
      },
      { id: '94', cat: 'TV', desc: 'Хэйвен / Haven' },
      { id: '124', cat: 'TV', desc: 'Царство / Reign' },
      { id: '268', cat: 'TV', desc: 'Час пик / Rush Hour' },
      { id: '115', cat: 'TV', desc: 'Чёрное зеркало / Black Mirror' },
      { id: '73', cat: 'TV', desc: 'Черные Паруса / Black Sails' },
      { id: '177', cat: 'TV', desc: 'Черный список / The Blacklist' },
      { id: '189', cat: 'TV', desc: 'Шёпот / The Whispers' },
      { id: '106', cat: 'TV', desc: 'Шпионка / Alias' },
      { id: '85', cat: 'TV', desc: 'Штамм / The Strain' },
      { id: '288', cat: 'TV', desc: 'Экзорцист / The Exorcist' },
      { id: '105', cat: 'TV', desc: 'Элементарно / Elementary' },
      {
        id: '217',
        cat: 'TV',
        desc: 'Эш против Зловещих мертвецов / Ash vs Evil Dead',
      },
      { id: '270', cat: 'TV', desc: 'яЗомби / iZombie' },
      { id: '53', cat: 'TV', desc: 'Другие сериалы (Other TV series)' },
      { id: '240', cat: 'TV', desc: 'Клим (Klim)' },
      { id: '283', cat: 'TV', desc: 'Amazon' },
      { id: '284', cat: 'TV', desc: 'Amazon English' },
      { id: '88', cat: 'TV', desc: 'Мультсериалы (Cartoons)' },
      { id: '101', cat: 'TV', desc: 'Южный Парк / South Park' },
      { id: '89', cat: 'TV', desc: 'Спецагент Арчер / Archer' },
      { id: '225', cat: 'TV', desc: 'Стендап / Stand Up' },
      { id: '54', cat: 'TV', desc: 'Особый раздел (Special section)' },
      { id: '100', cat: 'TV', desc: 'Короткометражки (Short films)' },
      { id: '60', cat: 'TV', desc: 'Документальные (Documentaries)' },
      { id: '159', cat: 'TV', desc: 'Разное (Misc.)' },
      { id: '261', cat: 'TV', desc: 'Спорт (Sport)' },
      { id: '262', cat: 'TV', desc: 'Автомотоспорт (Autosport)' },
      { id: '263', cat: 'TV', desc: 'Формула 1 / Formula 1' },
      { id: '264', cat: 'TV', desc: 'MotoGP / SBK' },
      { id: '265', cat: 'TV', desc: 'V8 supercars' },
      { id: '31', cat: 'TV', desc: 'Пользователи (Users)' },
      { id: '188', cat: 'TV', desc: 'Поздравления (Congratulations)' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
  },
  login: {
    path: 'ucp.php?mode=login',
    method: 'form',
    form: 'form#login',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [{ selector: 'fieldset:has(div.error)' }],
    test: {
      path: '/',
      selector: ':has(a[href^="./ucp.php?mode=logout&sid="])',
    },
  },
  search: {
    paths: [{ path: 'search.php' }],
    inputs: {
      tracker_search: 'torrent',
      keywords: '{{if .Keywords }}{{.Keywords}}{{else}}star{{end}}',
      terms: 'all',
      author: '',
      sc: '1',
      sf: 'titleonly',
      sr: 'topics',
      sk: 't',
      sd: 'd',
      st: '0',
      ch: '300',
      t: '0',
      submit: 'Search',
    },
    rows: { selector: 'tr.row' },
    fields: {
      title: { selector: 'a.topictitle' },
      details: { selector: 'a.topictitle', attribute: 'href' },
      category: {
        selector: 'a[href^="./viewforum.php?f="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'f' }],
      },
      download: {
        selector: 'a[href^="./download/file.php?id="]',
        attribute: 'href',
      },
      size: {
        selector: 'a[href^="./viewforum.php?f="] + b',
        filters: [
          { name: 'replace', args: ['ТБ', 'TB'] },
          { name: 'replace', args: ['ГБ', 'GB'] },
          { name: 'replace', args: ['МБ', 'MB'] },
          { name: 'replace', args: ['КБ', 'KB'] },
        ],
      },
      seeders: { selector: 'td.forumtopics span.seed' },
      leechers: { selector: 'td.forumtopics span.leech' },
      grabs: { selector: 'td.forumposts span.complet' },
      date: {
        selector: 'td.forumdetails span.forum-descriptions',
        filters: [
          { name: 'regexp', args: '(\\d{2} \\D{3} \\d{4}, \\d{2}:\\d{2})' },
          { name: 'replace', args: ['янв', 'Jan'] },
          { name: 'replace', args: ['фев', 'Feb'] },
          { name: 'replace', args: ['мар', 'Mar'] },
          { name: 'replace', args: ['апр', 'Apr'] },
          { name: 'replace', args: ['май', 'May'] },
          { name: 'replace', args: ['июн', 'Jun'] },
          { name: 'replace', args: ['июл', 'Jul'] },
          { name: 'replace', args: ['авг', 'Aug'] },
          { name: 'replace', args: ['сен', 'Sep'] },
          { name: 'replace', args: ['окт', 'Oct'] },
          { name: 'replace', args: ['ноя', 'Nov'] },
          { name: 'replace', args: ['дек', 'Dec'] },
          { name: 'dateparse', args: '02 Jan 06, 15:04' },
        ],
      },
      downloadvolumefactor: { text: '1' },
      uploadvolumefactor: { text: '1' },
    },
  },
  source: 'jackett',
};
