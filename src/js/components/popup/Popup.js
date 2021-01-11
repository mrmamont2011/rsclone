import createDomElem from '../../helpers/domHelpers';

const overlay = document.querySelector('#overlay');

export default class Popup {
  constructor() {
    this.popupDom = document.querySelector('#popup');
    this.popupContent = document.querySelector('#popup-content');
    this.closePopupBtn = document.querySelector('#button_close__popup');
  }

  openPopup(source, tag) {
    overlay.classList.add('overlay--visible');

    this.popupContent.innerHTML = '';

    if (tag === 'image') {
      this.popupContent.append(createDomElem('img', 'popup__photo', source));
    } else if (tag === 'video') {
      const videoDom = createDomElem('video', 'video', source);
      videoDom.setAttribute('controls', 'controls');
      this.popupContent.append(videoDom);
    }

    this.popupDom.classList.add('popup--visible');
    document.body.classList.add('no-scroll');

    this.closePopupBtn.addEventListener('click', (e) => {
      e.preventDefault();

      overlay.classList.remove('overlay--visible');
      this.popupDom.classList.remove('popup--visible');
      document.body.classList.remove('no-scroll');
    });

    overlay.addEventListener('click', () => {
      this.closePopupBtn.click();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closePopupBtn.click();
      }
    });
  }
}
