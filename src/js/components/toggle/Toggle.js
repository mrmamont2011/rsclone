const appWrap = document.querySelector('#app-wrapper');

export default class Toggle {
  constructor() {
    this.toggle = document.querySelector('#toggle');
  }

  static togglePage() {
    appWrap.classList.toggle('moved');
    window.scrollTo(0, 0);
  }

  init() {
    this.toggle.addEventListener('change', (e) => {
      e.stopPropagation();

      Toggle.togglePage();
    });
  }
}
