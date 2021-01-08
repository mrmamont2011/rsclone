import './styles/main.scss';
import Map from './js/components/map/Map';
import Table from './js/components/table/Table';
import { data } from './js/components/constants';
import renderFilter from './js/components/filter/filterRender';
import getByLevel from './js/components/filter/levelFilter';

const map = new Map();
const table = new Table();

const main = async () => {
  try {
    map.init(data);
    table.init(data);
    renderFilter('.filter__level-select');

    // level filter event
    document.querySelector('.filter__level-select .select').addEventListener('click', (e) => {
      if (e.target && e.target.matches('li')) {
        const rel = e.target.getAttribute('rel');
        const filteredData = getByLevel(rel, data);
        console.log(filteredData);
        document.getElementById('map').innerHTML = '';
        map.updateData = filteredData.levelData || [];
      }
    }, false);
  } catch (err) {
    // eslint-disable-next-line no-alert
    alert(err);
  }
};

main();
console.log(data);
