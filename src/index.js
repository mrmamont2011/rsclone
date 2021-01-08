import './styles/main.scss';
import Map from './js/components/map/Map';
import Table from './js/components/table/Table';
import { data } from './js/components/constants';
import renderFilter from './js/components/filter/filterRender';
import getByFilter from './js/components/filter/filter';

const map = new Map();
const table = new Table();

const main = async () => {
  try {
    map.init(data);
    table.init(data);

    renderFilter('.filter__level-select');
    renderFilter('.filter__type-select');

    // filter events
    const filters = document.querySelectorAll('#filter .select');

    filters.forEach((elem) => {
      elem.addEventListener('click', (e) => {
        if (e.target && e.target.matches('li')) {
          const rel = e.target.getAttribute('rel');
          const filteredData = getByFilter(rel, data);
          document.getElementById('map').innerHTML = '';
          map.updateData = filteredData.levelData || [];
        }
      }, false);
    });
  } catch (err) {
    // eslint-disable-next-line no-alert
    alert(err);
  }
};

main();
console.log(data);
