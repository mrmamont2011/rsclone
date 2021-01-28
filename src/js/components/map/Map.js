import ymaps from 'ymaps';
import { YANDEX_TOKEN } from '../../constants';
import getByLevel from '../filter/filterSelect';

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
    this.ymaps = await ymaps.load(`https://api-maps.yandex.ru/2.1/?apikey=${YANDEX_TOKEN}&lang=ru_RU`);
    await this.initYandexMap();
  }
}
