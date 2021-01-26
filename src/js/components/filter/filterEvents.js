import Map from '../map/Map';
import { data } from '../../constants';
import filterSearch from './filterSearch';
import problemRerender from './problemRerender';
import filterApply from './filterApply';
import filterDate from './filterDate';
import Table from '../table/Table';

/**
 * filter events
 * @return void
 */

export default function filterEvents() {
  const map = new Map();
  const table = new Table();

  const mapEl = document.querySelector('#map');
  const filter = document.querySelector('#filter');
  const hidePanel = document.querySelector('#hide-panel');
  const showPanel = document.querySelector('#show-panel');
  const tableWrap = document.querySelector('.table-wrapper');
  const findForm = document.querySelector('#findForm');
  const findInput = document.querySelector('#find-input');
  const typeSelect = document.querySelector('#type-select');

  const searchCount = document.querySelector('#search-count');

  const statusSelect = document.querySelector('#status-select');
  const problemWrap = document.querySelector('.sidebar__problem-wrap');
  const buttonsWrap = document.querySelector('.sidebar__buttons-wrap');
  const dateInput = document.querySelector('#filter-date');

  hidePanel.addEventListener('click', () => {
    tableWrap.classList.toggle('expanded');
    filter.classList.toggle('hided');
  });

  showPanel.addEventListener('click', () => {
    tableWrap.classList.remove('expanded');
    filter.classList.remove('hided');
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
