/* eslint import/no-cycle: [0] */
import ymaps from 'ymaps';
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
      location, problem, status, type,
    }) => {
      // replace brackets for json parse
      const re = /'/gi;
      const newstr = location.replace(re, '"');
      const geo = JSON.parse(newstr);

      collection.add(new this.ymaps.Placemark([geo.latitude, geo.longitude], {
        hintContent: `${problem}`,
        balloonContent: `${type}`,
      },
      {
        iconColor: getByLevel(status).color,
      }));
    });

    this.contextMap.geoObjects.add(collection);
  }

  async initMap() {
    this.ymaps = await ymaps.load('https://api-maps.yandex.ru/2.1/?apikey=d79b2dc6-c925-42e8-a5be-459618c5977a&lang=ru_RU');
    await this.initYandexMap();
  }
}
