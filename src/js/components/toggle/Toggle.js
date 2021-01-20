const appWrap = document.querySelector('#app-wrapper');

export default class Toggle {
  constructor() {
    this.toggle = document.querySelector('#toggle');
    this.toggle.addEventListener('change', (e) => {
      e.stopPropagation();

      Toggle.togglePage();
    });
  }

  static togglePage() {
    appWrap.classList.toggle('moved');
    window.scrollTo(0, 0);
  }
}
