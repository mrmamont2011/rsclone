import Map from '../map/Map';
import Table from '../table/Table';
import getByFilter from './filterSelect';
import { data } from '../../constants';
import filterSearch from './filterSearch';
/**
 * filter events
 * @return void
 */

export default function filterEvents() {
  const map = new Map();
  const table = new Table();
  const mapEl = document.querySelector('#map');
  const filter = document.querySelector('#filter');
  const styledSelect = document.querySelectorAll('#filter .select-styled');
  const dateEl = document.querySelector('#filter-date');
  const select = document.querySelectorAll('#filter .select');
  const hide = document.querySelector('#hide-panel');
  const tableWrap = document.querySelector('.table-wrapper');
  const findForm = document.querySelector('#findForm');
  const findInput = document.querySelector('#find-input');

  styledSelect.forEach((styled) => {
    styled.addEventListener('click', (e) => {
      e.stopPropagation();
      const { target } = e;
      const active = document.querySelector('.select-styled.active');
      if (active) { active.classList.remove('active'); }
      target.classList.add('active');

      const ulOptions = document.querySelectorAll('#filter .select-options');

      ulOptions.forEach((option) => {
        const style = option;
        if (option.getAttribute('data-toogle-id') === styled.getAttribute('data-toogle-id')) {
          style.classList.add('active');
        } else {
          style.classList.remove('active');
        }
      });
    }, false);
  });

  const resetWrapClasses = () => {
    document.querySelectorAll('#filter div').forEach((el) => {
      el.classList.remove('active-wrap');
    });
  };

  styledSelect.forEach((styled) => {
    styled.addEventListener('click', (e) => {
      resetWrapClasses();
      const { target } = e;
      const wrapTarget = target.parentElement.parentElement;
      wrapTarget.classList.add('active-wrap');
    });
  });

  document.addEventListener('click', (e) => {
    const { target } = e;
    if (!target.classList.contains('active')) {
      styledSelect.forEach((styled) => {
        styled.classList.remove('active');
        const options = styled.nextSibling;
        options.classList.remove('active');
      });
    }
  });

  dateEl.addEventListener('click', (e) => {
    const { target } = e;
    const wrapTarget = target.parentElement.parentElement;
    const dateWrapTarget = target.parentElement;
    resetWrapClasses();
    if (!wrapTarget.classList.contains('active-wrap')) {
      wrapTarget.classList.add('active-wrap');
      dateWrapTarget.classList.add('active');
    }
  });

  select.forEach((sel) => {
    sel.addEventListener('click', (e) => {
      const { target } = e;
      if (target && target.matches('li')) {
        const rel = target.getAttribute('rel');
        const filteredData = getByFilter(rel, data);
        mapEl.innerHTML = '';
        map.updateData = filteredData.data || [];
        const styledTxt = sel.children[1];
        styledTxt.textContent = target.textContent;
      }
    }, false);
  });

  hide.addEventListener('click', () => {
    tableWrap.classList.toggle('expanded');
    filter.classList.toggle('hided');
  });

  findForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formValue = findInput.value.toString();
    const searchData = filterSearch(data, formValue);
    mapEl.innerHTML = '';
    map.updateData = searchData || [];
    table.updateTable(searchData || []);
  });
}
