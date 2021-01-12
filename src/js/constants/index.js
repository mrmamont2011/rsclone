export const data = [
  {
    _id: '5fea0554b20baa05a841403a',
    type: 'незаконная свалка',
    problem: 'бытовой мусор',
    date: 'Sat Jan 02 2020 19:48:55 GMT+0000 (Coordinated Universal Time)',
    location: "{'latitude': '56.24309266089005', 'longitude': '43.96825220147877'}",
    image: ['./images/002.jpg'],
    userComment: 'сильно пахнет',
    video: ['/data/videos/2020-12-28_16-48-59_0001_001.mp4'],
    chatId: '122013352',
    status: 'pending',
    admin: 'defaultAdmin',
    adminComment: 'Передано в администрацию.',
  },
  {
    _id: '5fea0554b20baa05a841403a',
    type: 'незаконная свалка',
    problem: 'коммерческий мусор',
    date: 'Sun Jan 03 2021 19:48:55 GMT+0000 (Coordinated Universal Time)',
    location: "{'latitude': '56.297207266221484', 'longitude': '43.87703669925111'}",
    image: ['./images/002.jpg'],
    userComment: 'сильно пахнет',
    video: ['/data/videos/2020-12-28_16-48-59_0001_001.mp4'],
    chatId: '122013352',
    status: 'new',
    admin: 'defaultAdmin',
    adminComment: 'Передано в администрацию.',
  },
  {
    _id: '5fea0554b20baa05a841403a',
    type: 'автотранспорт',
    problem: 'сгоревший авто',
    date: 'Mon Jan 04 2021 19:48:55 GMT+0000 (Coordinated Universal Time)',
    location: "{'latitude': '56.33845698335641', 'longitude': '43.96497059087701'}",
    image: ['./images/003.jpg'],
    userComment: 'сильно пахнет',
    video: ['/data/videos/2020-12-28_16-48-59_0001_001.mp4'],
    chatId: '122013352',
    status: 'done',
    admin: 'defaultAdmin',
    adminComment: 'Передано в администрацию.',
  },
  {
    _id: '5fea0554b20baa05a841403a',
    type: 'деревья',
    problem: 'поваленные',
    date: 'Tue Jan 04 2021 19:48:55 GMT+0000 (Coordinated Universal Time)',
    location: "{'latitude': '56.331786518319646', 'longitude': '44.01133152122078'}",
    image: ['./images/004.jpg'],
    userComment: 'сильно пахнет',
    video: ['/data/videos/2020-12-28_16-48-59_0001_001.mp4'],
    chatId: '122013352',
    status: 'pending',
    admin: 'defaultAdmin',
    adminComment: 'Передано в администрацию.',
  },
  {
    _id: '5fea0554b20baa05a841403a',
    type: 'мусорный контейнер',
    problem: 'отсутствует',
    date: 'Wed Jan 06 2021 19:48:55 GMT+0000 (Coordinated Universal Time)',
    location: "{'latitude': '56.317398263373775', 'longitude': '44.089733492884854'}",
    image: ['./images/005.jpg'],
    userComment: 'сильно пахнет',
    video: ['/data/videos/2020-12-28_16-48-59_0001_001.mp4'],
    chatId: '122013352',
    status: 'new',
    admin: 'defaultAdmin',
    adminComment: 'Передано в администрацию.',
  },
  {
    _id: '5fea0554b20baa05a841403a',
    type: 'автотранспорт',
    problem: 'брошенный',
    date: 'Thu Jan 07 2021 19:48:55 GMT+0000 (Coordinated Universal Time)',
    location: "{'latitude': '56.31465059868182', 'longitude': '44.01653963308927'}",
    image: ['./images/001.jpg'],
    userComment: 'сильно пахнет',
    video: ['/data/videos/2020-12-28_16-48-59_0001_001.mp4'],
    chatId: '122013352',
    status: 'new',
    admin: 'defaultAdmin',
    adminComment: 'Передано в администрацию.',
  },
  {
    _id: '5fea0554b20baa05a841403a',
    type: 'мусорный контейнер',
    problem: 'сломанный',
    date: 'Fri Jan 08 2021 05:58:36 GMT+0000 (Coordinated Universal Time)',
    location: "{'latitude': '56.31729430533641', 'longitude': '43.97054995435655'}",
    image: ['./images/002.jpg'],
    userComment: 'сильно пахнет',
    video: ['/data/videos/2020-12-28_16-48-59_0001_001.mp4'],
    chatId: '122013352',
    status: 'pending',
    admin: 'defaultAdmin',
    adminComment: 'Передано в администрацию.',
  },
  {
    _id: '5fea0554b20baa05a841403a',
    type: 'деревья',
    problem: 'представляющее опасность падения',
    date: 'Sat Jan 09 2021 05:58:36 GMT+0000 (Coordinated Universal Time)',
    location: "{'latitude': '56.28176729820236', 'longitude': '44.03699586001902'}",
    image: ['./images/003.jpg'],
    userComment: 'сильно пахнет',
    video: ['/data/videos/2020-12-28_16-48-59_0001_001.mp4'],
    chatId: '122013352',
    status: 'done',
    admin: 'defaultAdmin',
    adminComment: 'Передано в администрацию.',
  },
];

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
};

export const tableHeaders = ['№', 'Дата и время', 'Тип проблемы', 'Проблема', 'Комментарий', 'Фото', 'Видео', 'Статус', 'Админ'];
