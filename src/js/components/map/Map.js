import ymaps from 'ymaps';
import { YANDEX_TOKEN } from '../../constants';
/* eslint import/no-cycle: [0] */
// import dotenv from 'dotenv';
import getByLevel from '../filter/filterSelect';

// dotenv.config();

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
      controls: ['zoomControl', 'fullscreenControl'],
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
      location, problem, status, type, image,
    }) => {
      collection.add(new this.ymaps.Placemark([location.latitude, location.longitude], {
        balloonContent: `
        <div class='balloon'>
        <div>${type}</div>
        <div>${problem}</div>
          <div><img src="${image}" alt=""></div>
        </div>
        
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
      }));
    });

    this.contextMap.geoObjects.add(collection);
  }

  async initMap() {
    // console.log('111111111', process.env.YANDEX_TOKEN);
    this.ymaps = await ymaps.load(`https://api-maps.yandex.ru/2.1/?apikey=${YANDEX_TOKEN}&lang=ru_RU`);

    // this.ymaps = await ymaps.load('https://api-maps.yandex.ru/2.1/?apikey=d79b2dc6-c925-42e8-a5be-459618c5977a&lang=ru_RU');
    await this.initYandexMap();
  }
}
