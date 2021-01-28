import Map from '../map/Map';
import filterSearch from './filterSearch';
import problemRerender from './problemRerender';
import filterApply from './filterApply';
import filterDate from './filterDate';
import elements from './filterElements';
import Table from '../table/Table';
import Connector from '../connector/Connector';

/**
 * Events handlers for filter
 * @return void
 */

export default function filterEvents() {
  const map = new Map();
  const table = new Table();

  const {
    tableWrap, hidePanelBtn, showPanelBtn, filterEl, mapEl,
    findForm, findInput, typeSelect,
    searchCount, statusSelect,
    problemWrap, buttonsWrap, dateInput, appContent,
  } = elements;

  hidePanelBtn.addEventListener('click', () => {
    if (appContent.classList.contains('moved')) {
      appContent.classList.add('hide-panel');
    }
    tableWrap.classList.toggle('expanded');
    filterEl.classList.toggle('hided');
  });

  showPanelBtn.addEventListener('click', () => {
    if (appContent.classList.contains('moved')) {
      appContent.classList.remove('hide-panel');
    }

    tableWrap.classList.remove('expanded');
    filterEl.classList.remove('hided');
  });

  findForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formValue = findInput.value.toString();
    if (formValue.length > 0) {
      (async () => Connector.getData())().then((res) => {
        const searchData = filterSearch(res, formValue);
        mapEl.innerHTML = '';
        map.updateData = searchData || [];
        searchCount.innerText = (searchData || []).length;
        searchCount.classList.add('active');
      });
    }
  });

  typeSelect.addEventListener('change', (e) => {
    const { target } = e;
    problemRerender(target.value);
    if (target.value !== 'all') {
      problemWrap.classList.remove('disabled');
    } else {
      problemWrap.classList.add('disabled');
    }
  });

  buttonsWrap.addEventListener('click', (e) => {
    const { target } = e;
    const options = document.querySelectorAll('.custom-select option');
    const problemSelect = document.querySelector('#problem-select');

    const selectValues = [typeSelect.value, problemSelect.value, statusSelect.value];
    const filteredData = filterApply(selectValues);

    filteredData.then((res) => {
      if (res.data.length > 0) {
        res.data = filterDate(dateInput.value, res.data);
      }

      switch (target.dataset.action) {
        case 'apply':
          searchCount.innerText = (res.data || []).length;
          searchCount.classList.add('active');
          mapEl.innerHTML = '';
          map.updateData = res.data || [];
          table.updateTable(res.data || []);
          break;

        case 'reset':
          for (let i = 0, l = options.length; i < l; i++) {
            options[i].selected = options[i].defaultSelected;
          }
          problemRerender('all');
          problemWrap.classList.add('disabled');
          document.querySelector('.datepicker--button').click();
          findInput.value = '';
          searchCount.classList.remove('active');

          (async () => Connector.getData())().then((reset) => {
            mapEl.innerHTML = '';
            map.updateData = reset;
            table.updateTable(reset);
          });

          break;

        default:
          break;
      }
    });
  });

  document.addEventListener('click', (e) => {
    const { target } = e;
    if (target.id !== 'find-input') {
      document.querySelector('.fa-search-location').style.color = 'white';
    }
  });
}
