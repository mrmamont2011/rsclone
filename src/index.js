import './styles/main.scss';

import Map from './js/components/map/Map';
import Table from './js/components/table/Table';
import { data } from './js/constants';
import renderSelect from './js/components/filter/selectRender';
import getByFilter from './js/components/filter/filterSelect';
import dateRender from './js/components/filter/dateRender';

// Jquery dependencies for air-datepicker
require('../node_modules/jquery/src/jquery');
require('../node_modules/air-datepicker/src/js/air-datepicker');

const map = new Map();
const table = new Table();

(function main() {
  try {
    map.init(data);
    table.init(data);

    renderSelect('.filter__level-wrap');
    renderSelect('.filter__type-wrap');
    dateRender(data);

    const filterStyledSelect = document.querySelectorAll('#filter .select-styled');
    const filterWrap = document.querySelectorAll('#filter div');
    const filterDate = document.querySelector('#filter-date');
    const filtersSelect = document.querySelectorAll('#filter .select');

    const filterRemoveActiveClass = () => {
      filterWrap.forEach((el) => {
        el.classList.remove('activeFilter');
      });
    };

    // filter events
    filterStyledSelect.forEach((elem) => {
      elem.addEventListener('click', (e) => {
        filterRemoveActiveClass();
        e.target.parentElement.parentElement.classList.add('activeFilter');
      }, false);
    });

    filterDate.addEventListener('click', (e) => {
      filterRemoveActiveClass();
      e.target.parentElement.classList.add('activeFilter');
    }, false);

    filtersSelect.forEach((elem) => {
      elem.addEventListener('click', (e) => {
        console.log(e.target.parentElement);

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
}());
