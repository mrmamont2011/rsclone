import './styles/main.scss';
import $ from 'jquery';
import Map from './js/components/map/Map';
import { data } from './js/components/constants';
import renderLevelFilter from './js/components/filter/levelRender';
import getByLevel from './js/components/filter/levelFilter';

const map = new Map();

const main = async () => {
  try {
    map.init(data);
    renderLevelFilter();

    // level filter event
    $('.filter__level-select .select-options li').on('click', (e) => {
      if (e.target && e.target.nodeName === 'LI') {
        const rel = e.target.getAttribute('rel');
        const newData = getByLevel(rel, data);
        $('#map').empty();
        map.updateData = newData;
      }
    });
  } catch (err) {
    // eslint-disable-next-line no-alert
    alert(err);
  }
};

main();
console.log(data);
