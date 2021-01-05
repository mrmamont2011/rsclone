// import { data } from '../constants/constants';

export default class Table {
  constructor () {
    this.data = null;
  }

  renderTable() {
    const tableDom = document.querySelector('#table');

    const tableRow = document.createElement('tr');
    tableRow.classList.add('table__header');

    const tableHeaders = ['№', 'Дата', 'Время', 'Тип проблемы', 'Проблема', 'Статус', 'Комментарий', 'Фото', 'Видео', 'Результат', 'Админ'];

    tableHeaders.forEach((item) => {
      const tableHeader = document.createElement('th');
      tableHeader.classList.add('table__header-cell');
      tableHeader.textContent = `${item}`;

      tableRow.append(tableHeader);
    })

    tableDom.append(tableRow);

    this.data.forEach(({
      chatId, date, type, problem, status, comment, images, movies, result, nameAdmin
    }) => {

      const tableRow = document.createElement('tr');
      tableRow.classList.add('table__row');

      const cellsInRow = [
        this.createCell('chatId', chatId),
        this.createCell('date', date),
        this.createCell('time', date),
        this.createCell('type', type),
        this.createCell('problem', problem),
        this.createCell('status', status),
        this.createCell('comment', comment),
        this.createCell('images', images),
        this.createCell('movies', movies),
        this.createCell('result', result),
        this.createCell('nameAdmin', nameAdmin)
      ];

      cellsInRow.forEach((cell) =>{
        tableRow.append(cell);
      })

      tableDom.append(tableRow);
    })
  }

  createCell(type, value) {
    const tableCell = document.createElement('td');
    tableCell.classList.add('table__row-cell');

    switch(type) {
      case 'chatId':
      case 'type':
      case 'problem':
      case 'status':
      case 'comment':
      case 'result':
      case 'nameAdmin':
        tableCell.textContent = `${value}`;
        break;

      case 'date':
        tableCell.textContent = '01.01.2021';
        break;

      case 'time':
        tableCell.textContent = '20:30';
        break;

      case 'images':
        
        break;

      case 'movies':
      
        break;
    }

    return tableCell;
  }

  init(data) {
    this.data = data;
    this.renderTable();
  }
}
