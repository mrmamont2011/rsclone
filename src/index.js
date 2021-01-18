import './styles/main.scss';
import Map from './js/components/map/Map';
import Table from './js/components/table/Table';
import { data } from './js/constants';
import renderSelectInit from './js/components/filter/selectRender';
import dateRender from './js/components/filter/dateRender';
import filterEvents from './js/components/filter/filterEvents';

// font awesome include
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

// Jquery dependencies for air-datepicker
require('../node_modules/jquery/src/jquery');
require('../node_modules/air-datepicker/src/js/air-datepicker');

const map = new Map();
const table = new Table();

(function main() {
  try {
    map.init(data);
    table.init(data);

    const renderSelect = renderSelectInit();
    renderSelect('.sidebar__status-wrap');
    renderSelect('.sidebar__type-wrap');
    renderSelect('.sidebar__problem-wrap');
    dateRender(data);
    filterEvents();
  } catch (err) {
    // eslint-disable-next-line no-alert
    alert(err);
  }
}());
