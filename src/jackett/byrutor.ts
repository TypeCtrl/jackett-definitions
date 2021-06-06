import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'byrutor',
  name: 'Byrutor',
  description: 'Byrutor is a RUSSIAN Public Torrent Tracker for GAMES',
  language: 'ru-RU',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://byrut.org/'],
  legacylinks: ['https://byrutor.org/'],
  caps: {
    categorymappings: [
      { id: '1', cat: 'PC/Games', desc: 'Экшены' },
      { id: '2', cat: 'PC/Games', desc: 'Приключения' },
      { id: '3', cat: 'PC/Games', desc: 'Гонки' },
      { id: '4', cat: 'PC/Games', desc: 'RPG' },
      { id: '5', cat: 'PC/Games', desc: 'Головоломка' },
      { id: '6', cat: 'PC/Games', desc: 'Инди' },
      { id: '7', cat: 'PC/Games', desc: 'Стратегии' },
      { id: '8', cat: 'PC/Games', desc: 'Выживание' },
      { id: '9', cat: 'PC/Games', desc: 'Шутеры' },
      { id: '10', cat: 'PC/Games', desc: 'Симуляторы' },
      { id: '11', cat: 'PC/Games', desc: 'Спортивные' },
      { id: '12', cat: 'PC/Games', desc: 'Аркады' },
      { id: '13', cat: 'PC/Games', desc: 'Файтинги' },
      { id: '14', cat: 'PC/Games', desc: 'Хорроры' },
      { id: '15', cat: 'PC/Games', desc: 'Открытый мир' },
      { id: '16', cat: 'PC/Games', desc: 'Аниме' },
      { id: '17', cat: 'PC/Games', desc: 'Repack от Механики' },
      { id: '18', cat: 'PC/Games', desc: 'Repack от Xatab' },
      { id: '19', cat: 'PC/Games', desc: 'Repack от Catalyst' },
      { id: '20', cat: 'PC/Games', desc: 'RePack от FitGirl' },
      { id: '21', cat: 'PC/Games', desc: 'RePack от qoob' },
      { id: '232', cat: 'PC/Games', desc: 'RePack от SpaceX' },
      { id: '233', cat: 'PC/Games', desc: 'RePack от Pioneer' },
      { id: '22', cat: 'PC/Games', desc: 'Русская озвучка' },
      { id: '24', cat: 'PC/Games', desc: 'Новинки игр' },
      { id: '25', cat: 'PC/Games', desc: 'Старые игры' },
      { id: '26', cat: 'PC/Games', desc: 'Игры с геймпадом' },
      { id: '27', cat: 'PC/Games', desc: 'Мультиплеер' },
      { id: '28', cat: 'PC/Games', desc: 'На двоих' },
      { id: '29', cat: 'PC/Games', desc: 'Рогалик' },
      { id: '30', cat: 'PC/Games', desc: 'Слэшер' },
      { id: '31', cat: 'PC/Games', desc: 'Стелс' },
      { id: '32', cat: 'PC/Games', desc: 'Фэнтези' },
      { id: '33', cat: 'PC/Games', desc: 'Платформер' },
      { id: '34', cat: 'PC/Games', desc: 'Песочница' },
      { id: '35', cat: 'PC/Games', desc: 'Игры в 2D' },
      { id: '36', cat: 'PC/Games', desc: 'Казуальная' },
      { id: '37', cat: 'PC/Games', desc: 'Point and click' },
      { id: '38', cat: 'PC/Games', desc: 'Вид сбоку' },
      { id: '39', cat: 'PC/Games', desc: 'Вид сверху' },
      { id: '40', cat: 'PC/Games', desc: 'Tower Defense' },
      { id: '41', cat: 'PC/Games', desc: 'Экономика' },
      { id: '42', cat: 'PC/Games', desc: 'Тактика' },
      { id: '43', cat: 'PC/Games', desc: 'Пошаговые стратегии (TBS)' },
      { id: '44', cat: 'PC/Games', desc: 'Глобальные стратегии' },
      { id: '45', cat: 'PC/Games', desc: 'Стратегии в реальном времени' },
      { id: '46', cat: 'PC/Games', desc: 'ММО' },
      { id: '47', cat: 'PC/Games', desc: 'MMORPG' },
      { id: '48', cat: 'PC/Games', desc: 'Для взрослых' },
      { id: '49', cat: 'PC/Games', desc: 'От первого лица' },
      { id: '50', cat: 'PC/Games', desc: 'От третьего лица' },
      { id: '51', cat: 'PC/Games', desc: 'Шутер от первого лица' },
      { id: '52', cat: 'PC/Games', desc: 'Шутер от третьего лица' },
      { id: '53', cat: 'PC/Games', desc: 'Игры для слабых ПК' },
      { id: '54', cat: 'PC/Games', desc: 'Игры для очень слабых ПК' },
      { id: '55', cat: 'PC/Games', desc: 'Новинки игр для слабых ПК' },
      { id: '56', cat: 'PC/Games', desc: 'Игры для 64 битной системы' },
      { id: '57', cat: 'PC/Games', desc: 'Игры для 32 битной системы' },
      { id: '58', cat: 'PC/Games', desc: 'Психологический хоррор' },
      { id: '59', cat: 'PC/Games', desc: 'Хоррор на выживание' },
      { id: '60', cat: 'PC/Games', desc: 'Ролевой экшен' },
      { id: '61', cat: 'PC/Games', desc: 'Приключенческий экшен' },
      { id: '63', cat: 'PC/Games', desc: 'Головоломка-платформер' },
      { id: '64', cat: 'PC/Games', desc: 'Скролл-шутер' },
      { id: '65', cat: 'PC/Games', desc: 'Шутер с видом сверху' },
      { id: '66', cat: 'PC/Games', desc: 'Градостроительный симулятор' },
      { id: '67', cat: 'PC/Games', desc: 'Космический симулятор' },
      { id: '68', cat: 'PC/Games', desc: 'Научная фантастика' },
      { id: '69', cat: 'PC/Games', desc: 'Ролевая стратегия' },
      { id: '70', cat: 'PC/Games', desc: 'Тактическая ролевая игра' },
      { id: '71', cat: 'PC/Games', desc: 'Тактика в реальном времени' },
      { id: '72', cat: 'PC/Games', desc: 'Японская ролевая игра' },
      { id: '73', cat: 'PC/Games', desc: 'Тёмное фэнтези' },
      { id: '74', cat: 'PC/Games', desc: 'Сложная' },
      { id: '75', cat: 'PC/Games', desc: 'Атмосфера' },
      { id: '76', cat: 'PC/Games', desc: 'Смешная' },
      { id: '77', cat: 'PC/Games', desc: 'Пиксельная графика' },
      { id: '78', cat: 'PC/Games', desc: 'Юмор' },
      { id: '79', cat: 'PC/Games', desc: 'Классика' },
      { id: '80', cat: 'PC/Games', desc: 'Космос' },
      { id: '81', cat: 'PC/Games', desc: 'Зомби' },
      { id: '82', cat: 'PC/Games', desc: 'Мрачная' },
      { id: '83', cat: 'PC/Games', desc: 'Тайна' },
      { id: '84', cat: 'PC/Games', desc: 'Физика' },
      { id: '85', cat: 'PC/Games', desc: 'Реализм' },
      { id: '86', cat: 'PC/Games', desc: 'Короткая' },
      { id: '87', cat: 'PC/Games', desc: 'Строительство' },
      { id: '88', cat: 'PC/Games', desc: 'Война' },
      { id: '89', cat: 'PC/Games', desc: 'Крафтинг' },
      { id: '90', cat: 'PC/Games', desc: 'Будущее' },
      { id: '91', cat: 'PC/Games', desc: 'Средневековье' },
      { id: '92', cat: 'PC/Games', desc: 'Затягивающая' },
      { id: '93', cat: 'PC/Games', desc: 'Строительство базы' },
      { id: '94', cat: 'PC/Games', desc: 'Управление ресурсами' },
      { id: '95', cat: 'PC/Games', desc: 'Насилие' },
      { id: '96', cat: 'PC/Games', desc: 'Для всей семьи' },
      { id: '97', cat: 'PC/Games', desc: 'Исследование' },
      { id: '98', cat: 'PC/Games', desc: 'Расслабляющая' },
      { id: '99', cat: 'PC/Games', desc: 'Реиграбельность' },
      { id: '100', cat: 'PC/Games', desc: 'Поиск предметов' },
      { id: '101', cat: 'PC/Games', desc: 'Пост-апокалипсис' },
      { id: '102', cat: 'PC/Games', desc: 'Вторая мировая война' },
      { id: '103', cat: 'PC/Games', desc: 'Военные действия' },
      { id: '105', cat: 'PC/Games', desc: 'Вождение' },
      { id: '189', cat: 'PC/Games', desc: 'Пошаговая' },
      { id: '106', cat: 'PC/Games', desc: 'Пошаговая тактика' },
      { id: '107', cat: 'PC/Games', desc: '3D-платформер' },
      { id: '108', cat: 'PC/Games', desc: 'Одна жизнь' },
      { id: '109', cat: 'PC/Games', desc: 'Паркур' },
      { id: '110', cat: 'PC/Games', desc: 'Детектив' },
      { id: '111', cat: 'PC/Games', desc: 'Криминал' },
      { id: '112', cat: 'PC/Games', desc: 'Разрушения' },
      { id: '113', cat: 'PC/Games', desc: '90-е' },
      { id: '114', cat: 'PC/Games', desc: '80-е' },
      { id: '115', cat: 'PC/Games', desc: 'Разделение экрана' },
      { id: '116', cat: 'PC/Games', desc: 'Военные конфликты' },
      { id: '117', cat: 'PC/Games', desc: 'Драконы' },
      { id: '118', cat: 'PC/Games', desc: 'Пираты' },
      { id: '119', cat: 'PC/Games', desc: 'Ниндзя' },
      { id: '120', cat: 'PC/Games', desc: 'Поезда' },
      { id: '121', cat: 'PC/Games', desc: 'Динозавры' },
      { id: '122', cat: 'PC/Games', desc: 'Раннер' },
      { id: '123', cat: 'PC/Games', desc: 'Супергерои' },
      { id: '124', cat: 'PC/Games', desc: 'По комиксу' },
      { id: '125', cat: 'PC/Games', desc: 'Хакерство' },
      { id: '126', cat: 'PC/Games', desc: 'Эмоциональная' },
      { id: '127', cat: 'PC/Games', desc: 'Футбол' },
      { id: '128', cat: 'PC/Games', desc: 'Рыбалка' },
      { id: '129', cat: 'PC/Games', desc: 'Бездорожье' },
      { id: '130', cat: 'PC/Games', desc: 'Программирование' },
      { id: '131', cat: 'PC/Games', desc: 'Вампиры' },
      { id: '132', cat: 'PC/Games', desc: 'Снайпер' },
      { id: '133', cat: 'PC/Games', desc: 'Ремейк' },
      { id: '134', cat: 'PC/Games', desc: 'Отличный саундтрек' },
      { id: '135', cat: 'PC/Games', desc: 'Глубокий сюжет' },
      { id: '136', cat: 'PC/Games', desc: 'Женщина-протагонист' },
      { id: '137', cat: 'PC/Games', desc: 'Кровь' },
      { id: '138', cat: 'PC/Games', desc: 'Киберпанк' },
      { id: '139', cat: 'PC/Games', desc: 'Эпичная' },
      { id: '140', cat: 'PC/Games', desc: 'Мясо' },
      { id: '141', cat: 'PC/Games', desc: 'Нагота' },
      { id: '142', cat: 'PC/Games', desc: 'Цветастая' },
      { id: '143', cat: 'PC/Games', desc: 'Education' },
      { id: '144', cat: 'PC/Games', desc: 'Менеджмент' },
      { id: '145', cat: 'PC/Games', desc: 'Упрощённый рогалик' },
      { id: '146', cat: 'PC/Games', desc: 'Музыка' },
      { id: '147', cat: 'PC/Games', desc: 'Кастомизация персонажа' },
      { id: '148', cat: 'PC/Games', desc: 'История' },
      { id: '149', cat: 'PC/Games', desc: 'Охота' },
      { id: '150', cat: 'PC/Games', desc: 'По мотивам книги' },
      { id: '151', cat: 'PC/Games', desc: 'Первая мировая война' },
      { id: '152', cat: 'PC/Games', desc: 'Тайм-менеджмент' },
      { id: '153', cat: 'PC/Games', desc: 'Психоделия' },
      { id: '154', cat: 'PC/Games', desc: 'Наука' },
      { id: '155', cat: 'PC/Games', desc: 'Морские бои' },
      { id: '156', cat: 'PC/Games', desc: 'Сельское хозяйство' },
      { id: '157', cat: 'PC/Games', desc: 'Кинематографичная' },
      { id: '158', cat: 'PC/Games', desc: 'Вестерн' },
      { id: '159', cat: 'PC/Games', desc: 'Три в ряд' },
      { id: '160', cat: 'PC/Games', desc: 'Стимпанк' },
      { id: '161', cat: 'PC/Games', desc: 'Редактор уровней' },
      { id: '162', cat: 'PC/Games', desc: 'Культовая классика' },
      { id: '163', cat: 'PC/Games', desc: 'Минимализм' },
      { id: '164', cat: 'PC/Games', desc: 'Shoot &#039;em up' },
      { id: '165', cat: 'PC/Games', desc: 'Решения с последствиями' },
      { id: '166', cat: 'PC/Games', desc: 'Процедурная генерация' },
      { id: '167', cat: 'PC/Games', desc: 'Мультипликация' },
      { id: '168', cat: 'PC/Games', desc: 'Мультфильм' },
      { id: '169', cat: 'PC/Games', desc: 'Пошаговые сражения' },
      { id: '170', cat: 'PC/Games', desc: 'Магия' },
      { id: '171', cat: 'PC/Games', desc: 'Изометрия' },
      { id: '172', cat: 'PC/Games', desc: 'Карточная игра' },
      { id: '173', cat: 'PC/Games', desc: 'Чёрный юмор' },
      { id: '174', cat: 'PC/Games', desc: 'Beat &#039;em up' },
      { id: '175', cat: 'PC/Games', desc: 'Свобода выбора' },
      { id: '176', cat: 'PC/Games', desc: 'Рисованная графика' },
      { id: '177', cat: 'PC/Games', desc: 'Инопланетяне' },
      { id: '178', cat: 'PC/Games', desc: 'Твин-стик шутер' },
      { id: '179', cat: 'PC/Games', desc: 'Настольная игра' },
      { id: '180', cat: 'PC/Games', desc: 'Полёты' },
      { id: '181', cat: 'PC/Games', desc: 'Лут' },
      { id: '182', cat: 'PC/Games', desc: 'В реальном времени' },
      { id: '183', cat: 'PC/Games', desc: 'MOBA' },
      { id: '184', cat: 'PC/Games', desc: 'Демоны' },
      { id: '185', cat: 'PC/Games', desc: 'Расследование' },
      { id: '186', cat: 'PC/Games', desc: 'Мифология' },
      { id: '187', cat: 'PC/Games', desc: 'VR' },
      { id: '190', cat: 'PC/Games', desc: 'Dungeon Crawler' },
      { id: '191', cat: 'PC/Games', desc: 'Психологическая' },
      { id: '192', cat: 'PC/Games', desc: 'Нелинейная' },
      { id: '193', cat: 'PC/Games', desc: 'Подземелье' },
      { id: '194', cat: 'PC/Games', desc: 'Игры по сети' },
      { id: '195', cat: 'PC/Games', desc: 'Для нескольких игроков' },
      { id: '196', cat: 'PC/Games', desc: 'Шедевр' },
      { id: '197', cat: 'PC/Games', desc: 'Ретро' },
      { id: '198', cat: 'PC/Games', desc: 'Олдскул' },
      { id: '237', cat: 'PC/Games', desc: 'Игры 2023 года' },
      { id: '238', cat: 'PC/Games', desc: 'Игры 2024 года' },
      { id: '236', cat: 'PC/Games', desc: 'Игры 2022 года' },
      { id: '235', cat: 'PC/Games', desc: 'Игры 2021 года' },
      { id: '199', cat: 'PC/Games', desc: 'Игры 2020 года' },
      { id: '200', cat: 'PC/Games', desc: 'Игры 2019 года' },
      { id: '201', cat: 'PC/Games', desc: 'Игры 2018 года' },
      { id: '202', cat: 'PC/Games', desc: 'Игры 2017 года' },
      { id: '203', cat: 'PC/Games', desc: 'Игры 2016 года' },
      { id: '204', cat: 'PC/Games', desc: 'Игры 2015 года' },
      { id: '205', cat: 'PC/Games', desc: 'Игры 2014 года' },
      { id: '206', cat: 'PC/Games', desc: 'Игры 2013 года' },
      { id: '207', cat: 'PC/Games', desc: 'Игры 2012 года' },
      { id: '208', cat: 'PC/Games', desc: 'Игры 2011 года' },
      { id: '209', cat: 'PC/Games', desc: 'Игры 2010 года' },
      { id: '210', cat: 'PC/Games', desc: 'Игры 2009 года' },
      { id: '211', cat: 'PC/Games', desc: 'Игры 2008 года' },
      { id: '212', cat: 'PC/Games', desc: 'Игры 2007 года' },
      { id: '213', cat: 'PC/Games', desc: 'Игры 2006 года' },
      { id: '214', cat: 'PC/Games', desc: 'Игры 2005 года' },
      { id: '215', cat: 'PC/Games', desc: 'Игры 2004 года' },
      { id: '216', cat: 'PC/Games', desc: 'Игры 2003 года' },
      { id: '217', cat: 'PC/Games', desc: 'Игры 2002 года' },
      { id: '218', cat: 'PC/Games', desc: 'Игры 2001 года' },
      { id: '219', cat: 'PC/Games', desc: 'Игры 2000 года' },
      { id: '220', cat: 'PC/Games', desc: 'Игры 1999 года' },
      { id: '221', cat: 'PC/Games', desc: 'Игры 1998 года' },
      { id: '222', cat: 'PC/Games', desc: 'Игры 1997 года' },
      { id: '223', cat: 'PC/Games', desc: 'Игры 1996 года' },
      { id: '224', cat: 'PC/Games', desc: 'Игры 1995 года' },
      { id: '225', cat: 'PC/Games', desc: 'Игры 1994 года' },
      { id: '226', cat: 'PC/Games', desc: 'Игры 1993 года' },
      { id: '227', cat: 'PC/Games', desc: 'Игры 1992 года' },
      { id: '228', cat: 'PC/Games', desc: 'Игры 1991 года' },
      { id: '229', cat: 'PC/Games', desc: 'Игры 1990 года' },
      { id: '230', cat: 'PC/Games', desc: 'Все Топ игры' },
      { id: '231', cat: 'PC/Games', desc: 'Дополнения' },
      { id: '23', cat: 'PC/Games', desc: 'Ранний Доступ' },
      { id: '239', cat: 'PC/Games', desc: 'Ubisoft' },
      { id: '240', cat: 'PC/Games', desc: 'Bethesda' },
      { id: '241', cat: 'PC/Games', desc: '2K' },
      { id: '242', cat: 'PC/Games', desc: 'CD Projekt RED' },
      { id: '243', cat: 'PC/Games', desc: 'Telltale Games' },
      { id: '244', cat: 'PC/Games', desc: 'Capcom' },
      { id: '245', cat: 'PC/Games', desc: 'Square Enix' },
    ],
    modes: { search: ['q'] },
  },
  settings: [],
  download: { selector: 'a.itemtop_game', attribute: 'href' },
  search: {
    paths: [{ path: 'index.php' }],
    inputs: {
      $raw: '{{ range .Categories }}catlist[]={{.}}&{{end}}',
      do: 'search',
      subaction: 'search',
      search_start: 0,
      full_search: 1,
      result_from: 1,
      showposts: 1,
      titleonly: '{{ if .Keywords }}3{{ else }}0{{ end }}',
      searchdate: 0,
      story: '{{ if .Keywords }}{{ .Keywords }}{{ else }}game{{ end }}',
      sortby: 'date',
      resorder: 'desc',
    },
    rows: {
      selector: 'div.short_search:has(div.shor_subtitles span:nth-child(2):contains("Б"))',
    },
    fields: {
      category: { text: 1 },
      year: {
        selector: 'div.shor_subtitles span',
        filters: [{ name: 'regexp', args: '(\\d+)' }],
      },
      title: {
        selector: 'div.short_titles > a',
        filters: [{ name: 'append', args: ' [{{ .Result.year }}]' }],
      },
      details: { selector: 'div.short_titles > a', attribute: 'href' },
      download: { selector: 'div.short_titles > a', attribute: 'href' },
      poster: { selector: 'img', attribute: 'src' },
      description: { selector: 'div.shor_desc', optional: true },
      date: { text: 'now' },
      seeders: { text: 1 },
      leechers: { text: 1 },
      size: {
        selector: 'div.shor_subtitles span:nth-child(2)',
        filters: [
          { name: 'replace', args: ['ТБ', 'TB'] },
          { name: 'replace', args: ['ГБ', 'GB'] },
          { name: 'replace', args: ['МБ', 'MB'] },
          { name: 'replace', args: ['КБ', 'KB'] },
        ],
      },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
