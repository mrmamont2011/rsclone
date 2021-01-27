import { problemOptions } from '../../constants';

/**
 * Create new select for problem filter
 * @param rel
 * @param filteredData
 * @return object
 */

export default function problemRerender(val) {
  function createSelect() {
    const select = document.createElement('select');
    select.classList.add('custom-select');
    select.setAttribute('id', 'problem-select');
    return select;
  }

  function createSelectWithOptions() {
    const select = createSelect();
    const optionsArr = [];
    const { value, text } = problemOptions;

    for (let i = 0; i < value[val].length; i++) {
      optionsArr.push(document.createElement('option'));
    }

    for (let i = 0; i < optionsArr.length; i++) {
      const optionEl = optionsArr[i];
      optionEl.value = value[val][i];
      optionEl.text = text[val][i];
      if (i === 0) { optionEl.setAttribute('selected', ''); }
      select.add(optionEl, null);
    }
    return select;
  }

  document.querySelector('.form__problem-wrap')
    .replaceChild(createSelectWithOptions(), document.querySelector('#problem-select'));
}
