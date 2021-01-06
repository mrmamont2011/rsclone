/**
 * Render new look of filter select
 * @param selectWrap
 * @return void
 */

export default function initRenderFilter(selectWrap) {
  const mainWrap = document.querySelector(selectWrap);
  function createWrap(el, wrapper) {
    el.parentNode.insertBefore(wrapper, el);
    const wrap = wrapper;
    wrap.className = 'select';
    wrapper.appendChild(el);
  }

  const selects = mainWrap.querySelectorAll('select');
  selects.forEach((element) => {
    const numberOfOptions = element.children.length;
    element.classList.add('select-hidden');
    createWrap(element, document.createElement('div'));

    const selectStyled = document.createElement('div');
    selectStyled.className = 'select-styled';
    const divWrapper = mainWrap.querySelector('.select');
    divWrapper.append(selectStyled);
    selectStyled.textContent = element.children[0].textContent;

    const ulStyled = document.createElement('ul');
    ulStyled.classList.add('select-options');
    divWrapper.append(ulStyled);

    for (let i = 0; i < numberOfOptions; i++) {
      const liStyled = document.createElement('li');
      const spanStyled = document.createElement('span');

      liStyled.setAttribute('rel', element.children[i].value);
      liStyled.textContent = element.children[i].textContent;
      ulStyled.append(liStyled);
      spanStyled.className = `filter-circle filter-circle_${i}`;
      liStyled.append(spanStyled);
    }

    const selecStyled = mainWrap.querySelector('.select-styled');

    mainWrap.querySelector('.select-styled').addEventListener('click', (e) => {
      e.stopPropagation();
      if (selecStyled.classList.contains('active')) {
        selecStyled.classList.remove('active');
        ulStyled.style.display = 'none';
      } else {
        selecStyled.classList.add('active');
        ulStyled.style.display = 'block';
      }
    }, false);

    mainWrap.querySelector('.select').addEventListener('click', (e) => {
      e.stopPropagation();
      if (e.target && e.target.matches('li')) {
        selectStyled.textContent = e.target.textContent;

        if (selecStyled.classList.contains('active')) {
          ulStyled.style.display = 'none';
          selecStyled.classList.remove('active');
        }
      }
    }, false);

    document.addEventListener('click', () => {
      selecStyled.classList.remove('active');
      ulStyled.style.display = 'none';
    });
  });
}
