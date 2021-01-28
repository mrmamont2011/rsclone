import Map from '../map/Map';
import { data } from '../../constants';
import filterSearch from './filterSearch';
import problemRerender from './problemRerender';
import filterApply from './filterApply';
import filterDate from './filterDate';
import elements from './filterElements';
import Table from '../table/Table';

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
      const searchData = filterSearch(data, formValue);
      mapEl.innerHTML = '';
      map.updateData = searchData || [];
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

    if (filteredData.data.length > 0) {
      filteredData.data = filterDate(dateInput.value, filteredData.data);
    }

    switch (target.dataset.action) {
      case 'apply':
        mapEl.innerHTML = '';
        searchCount.innerText = (filteredData.data || []).length;
        searchCount.classList.add('active');
        map.updateData = filteredData.data || [];
        table.updateTable(filteredData.data || []);
        break;

      case 'reset':
        for (let i = 0, l = options.length; i < l; i++) {
          options[i].selected = options[i].defaultSelected;
        }
        problemRerender('all');
        problemWrap.classList.add('disabled');
        document.querySelector('.datepicker--button').click();
        mapEl.innerHTML = '';
        map.updateData = data;
        table.updateTable(data);
        findInput.value = '';
        searchCount.classList.remove('active');
        break;

      default:
        break;
    }
  });

  document.addEventListener('click', (e) => {
    const { target } = e;
    if (target.id !== 'find-input') {
      document.querySelector('.fa-search-location').style.color = 'white';
    }
  });
}
