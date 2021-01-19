const map = document.querySelector('#map');
const table = document.querySelector('#table-container');

export default class Toggle {
  constructor() {
    this.toggle = document.querySelector('#toggle');
    this.toggle.addEventListener('change', (e) => {
      e.stopPropagation();

      Toggle.togglePage();
    });
  }

  static togglePage() {
    map.classList.toggle('hidden');
    table.classList.toggle('hidden');
  }
}
