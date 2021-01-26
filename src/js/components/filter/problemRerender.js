import { problemOptions } from '../../constants';

export default function problemRerender(val) {
  const problemWrap = document.querySelector('.form__problem-wrap');
  const problemSelect = document.querySelector('#problem-select');

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

  problemWrap.replaceChild(createSelectWithOptions(), problemSelect);
}
