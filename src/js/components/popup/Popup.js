const overlay = document.querySelector('#overlay');

export default class Popup {
  constructor() {
    this.popupDom = document.querySelector('#popup');
    this.popupImg = document.querySelector('#popup-photo');
    this.closePopupBtn = document.querySelector('#button_close__popup');
  }

  openPopup(source) {
    overlay.classList.add('overlay--visible');
    this.popupImg.setAttribute('src', `${source}`);
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
    })

    document.addEventListener('keydown', (e) => {
      if (e.key === "Escape") {
        this.closePopupBtn.click();
      }
    });
  }
}