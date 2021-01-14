import Map from '../map/Map';
import getByFilter from './filterSelect';
import { data } from '../../constants';

/**
 * add filter events
 * @return void
 */

// TODO: Анимация открытия фильтров типа и статуса
// TODO: Анимация выбранного фильтра. Плавное появление полосы слева направо.

export default function filterEvents() {
  const map = new Map();
  const mapEl = document.querySelector('#map');
  const styledSelect = document.querySelectorAll('#filter .select-styled');
  const dateEl = document.querySelector('#filter-date');
  const select = document.querySelectorAll('#filter .select');

  styledSelect.forEach((styled, i) => {
    styled.setAttribute('data-select-id', i);
    styled.addEventListener('click', (e) => {
      e.stopPropagation();
      const { target } = e;
      const active = document.querySelector('.select-styled.active');
      if (active) { active.classList.remove('active'); }
      target.classList.add('active');

      const ulOptions = document.querySelectorAll('#filter .select-options');

      ulOptions.forEach((option, j) => {
        option.setAttribute('data-select-id', j);
        const style = option;
        if (option.getAttribute('data-select-id') === styled.getAttribute('data-select-id')) {
          style.style.display = 'block';
          console.log();
        } else {
          style.style.display = 'none';
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
        const options = styled;
        options.nextSibling.style.display = 'none';
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
        map.updateData = filteredData.levelData || [];
        const styledTxt = sel.children[1];
        styledTxt.textContent = target.textContent;
      }
    }, false);
  });
}
