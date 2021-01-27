import './styles/main.scss';
import Map from './js/components/map/Map';
import Table from './js/components/table/Table';
import { URL_BACKEND, TELEGRAM_TOKEN } from './js/constants';
import renderSelectInit from './js/components/filter/selectRender';
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

(async function main() {
  try {
    // eslint-disable-next-line no-alert
    const data = await Connector.getData(URL_BACKEND);

    // eslint-disable-next-line no-restricted-syntax
    for (const el of data) {
      const url_img = await Connector.getPath(el.photo[0].id);
      el.image = [`https://api.telegram.org/file/bot${TELEGRAM_TOKEN}/${url_img}`];
    }

    toggle.init();
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
