import './styles/main.scss';
import Map from './js/components/map/Map';
import Table from './js/components/table/Table';
import dateRender from './js/components/filter/dateRender';
import filterEvents from './js/components/filter/filterEvents';
import Toggle from './js/components/toggle/Toggle';
import Connector from './js/components/connector/Connector';

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
    (async () => Connector.getData())().then((res) => {
      map.init(res);
      table.init(res);
      document.querySelector('#preloader').classList.add('hide');
    });

    toggle.init();
    dateRender();
    filterEvents();
  } catch (err) {
    // eslint-disable-next-line no-alert
    alert(err);
  }
}());
