/* eslint import/no-cycle: [0] */
import ymaps from 'ymaps';

export default class Map {
  constructor() {
    this.data = null;
    this.point = [];

    this.dataPopulation = null;
    this.contextMap = null;
    this.highlightedDistrict = null;
    this.districtBalloon = null;
    this.ymaps = null;
    this.isoPopulation = {};
    this.isoTotalConfirmed = {};
    this.isoNewConfirmed = {};
    this.districtCollections = {};
    this.bordersInfo = {};
    this.cord = [];
    this.nameCountryCode = {};
    this.bordersFeatures = {}; // { код страны: feature от this.ymaps.borders.load }
    this.countryIndexes = {}; // { код страны: индекс страны в yandex geoObjects }
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
  }

  createStaticPane(map) {
    return new this.ymaps.pane.StaticPane(map, {
      zIndex: 100,
      css: {
        width: '100%',
        height: '100%',
        backgroundColor: '#f7f7f7',
        opacity: '0.3',
      },
    });
  }

  async initYandexMap() {
    this.createYMaps();
    const pane = this.createStaticPane(this.contextMap);
    this.contextMap.panes.append('white', pane);
    // const plac1 = new this.ymaps.Placemark([56.24309266089005, 43.96825220147877], {});
    //  this.contextMap.geoObjects.add(plac1);
    console.log(this.data);
    this.data.forEach(({
      _id, geo, problem, status, comment,
    }) => {
      console.log(problem);

      this.point[_id] = new this.ymaps.Placemark([Number(geo.slice(1, geo.length - 1).split(',')[0]), Number(geo.slice(1, geo.length - 1).split(',')[1])], {
        hintContent: `${problem}`,
        balloonContent: `${comment}`,
      },
      {
        iconColor: status,
      });

      this.contextMap.geoObjects.add(this.point[_id]);
    });
  }

  async initMap() {
    this.ymaps = await ymaps.load('https://api-maps.yandex.ru/2.1/?apikey=d79b2dc6-c925-42e8-a5be-459618c5977a&lang=ru_RU');
    await this.initYandexMap();
  }
}