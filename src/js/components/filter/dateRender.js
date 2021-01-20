import filterDate from './filterDate';
import Map from '../map/Map';

/**
 * render datepicker
 * @param filteredData
 * @return void
 */

export default function dateRender(filteredData = []) {
  const map = new Map();
  const mapId = document.getElementById('map');
  const dateInput = document.querySelector('#filter-date');
  const dateWrapper = document.querySelector('.date__wrap');
  // Jquery function call for datepicker. Work with $ jquery only
  // eslint-disable-next-line no-undef
  $('#filter-date').datepicker({
    onHide(_, animationCompleted) {
      if (!animationCompleted && dateWrapper.classList.contains('active')) {
        dateWrapper.classList.remove('active');
      }

      if (animationCompleted && dateInput.value) {
        const filteredDate = filterDate(dateInput.value, filteredData);
        mapId.innerHTML = '';
        map.init(filteredDate || []);
      }
      return null;
    },
    clearButton: true,
    toggleSelected: false,
    range: true,
    multipleDatesSeparator: '-',
  });

  document.querySelector('.datepicker--button').addEventListener('click', () => {
    mapId.innerHTML = '';
    map.init(filteredData);
  });
}
