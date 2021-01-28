export const statusColors = {
  green: 'green',
  red: 'red',
  yellow: 'yellow',
  black: 'black',
};

export const filters = {
  status: {
    done: 'done',
    inwork: 'pending',
    new: 'new',
  },
  type: {
    garbage: 'незаконная свалка',
    container: 'мусорный контейнер',
    auto: 'автотранспорт',
    tree: 'деревья',
  },
  problem: {
    constructTrash: 'строительный мусор',
    houseTrash: 'бытовой мусор',
    comercialTrash: 'коммерческий мусор',
    overContainer: 'переполенный',
    brokenContainer: 'сломанный',
    missedContainer: 'отсутствует',
    abandonedCar: 'брошенный  авто',
    firedCar: 'сгоревший авто',
    sawedTrees: 'спиленные',
    fallenTrees: 'поваленные',
  },
};

export const tableHeaders = ['№', 'Дата и время', 'Тип проблемы', 'Проблема', 'Комментарий', 'Фото', 'Видео', 'Статус', 'Админ'];
export const TELEGRAM_TOKEN = '1471431547:AAFFow0BhaEknDhpm_dZlZjJ06sGq-IPgRc';
export const YANDEX_TOKEN = 'd79b2dc6-c925-42e8-a5be-459618c5977a';
export const URL_BACKEND = 'https://immense-savannah-48052.herokuapp.com/api/reports/';
