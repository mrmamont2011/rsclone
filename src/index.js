import './styles/main.scss';
import Map from './js/components/map/Map';
import Table from './js/components/table/Table';
import { data } from './js/constants';
import dateRender from './js/components/filter/dateRender';
import filterEvents from './js/components/filter/filterEvents';
import Toggle from './js/components/toggle/Toggle';

// font awesome
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

// Air-datepicker
require('../node_modules/jquery/src/jquery');
require('../node_modules/air-datepicker/src/js/air-datepicker');

const map = new Map();
const table = new Table();
const toggle = new Toggle();

(function main() {
  try {
    toggle.init();
    map.init(data);
    table.init(data);
    dateRender();
    filterEvents();

    // margin-left: 320px;
  } catch (err) {
    // eslint-disable-next-line no-alert
    alert(err);
  }
}());
