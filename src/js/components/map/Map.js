import ymaps from 'ymaps';
import { YANDEX_TOKEN, TELEGRAM_TOKEN } from '../../constants';
import getByLevel from '../filter/filterSelect';
import Connector from '../connector/Connector';
import moment from 'moment';

export default class Map {
  constructor() {
    this.data = null;
    this.point = [];
    this.contextMap = null;
    this.ymaps = null;
  }

  init(data) {
    this.data = data;
    this.initMap();
  }

  set updateData(data) {
    this.data = data;
    this.init(this.data);
  }

  createYMaps() {
    this.contextMap = new this.ymaps.Map('map', {
      center: [56.3228, 43.9980],
      zoom: 11,
      autoFitToViewport: 'always',
      controls: ['fullscreenControl'],
    });

    const searchControl = new this.ymaps.control.SearchControl({
      options: {
        float: 'right',
      },
    });

    this.contextMap.controls.add(searchControl);
  }

  async initYandexMap() {
    this.createYMaps();

    const collection = new this.ymaps.GeoObjectCollection();

    this.data.forEach(({
      date, location, problem, status, type, photo,
    }) => {
      const placemark = new this.ymaps.Placemark([location.latitude, location.longitude], {
        balloonContent: `
        <div></div>
        `,
        hintContent: `
        <div class='hint'>
          <div>${type}</div>
          <div>${problem}</div>
        </div>
        `,
      },
      {
        iconColor: getByLevel(status).color,
      });

      placemark.events.add('balloonopen', () => {
        (async () => Connector.getPath(photo[0].id))().then((res) => {
          const imageGet = `https://api.telegram.org/file/bot${TELEGRAM_TOKEN}/${res}`;
          placemark.properties.set('balloonContent', `<div class="balloon"><div>${moment(date).format('DD.MM.YYYY')}</div><div>${type}</div><div>${problem}</div><div><img src="${imageGet}" alt="${problem}"></div></div>`);
        });
      });

      collection.add(placemark);
    });

    this.contextMap.geoObjects.add(collection);
  }

  async initMap() {
    this.ymaps = await ymaps.load(`https://api-maps.yandex.ru/2.1/?apikey=${YANDEX_TOKEN}&lang=ru_RU`);
    await this.initYandexMap();
  }
}
