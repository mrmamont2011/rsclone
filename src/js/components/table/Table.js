// import { data } from '../constants/constants';
import { tableHeaders } from '../constants';

export default class Table {
  constructor() {
    this.data = null;
  }

  renderTable() {
    const tableDom = document.querySelector('#table');

    const tableHeaderRow = document.createElement('tr');
    tableHeaderRow.classList.add('table__header');

    tableHeaders.forEach((item) => {
      const tableHeader = document.createElement('th');
      tableHeader.classList.add('table__header-cell');
      tableHeader.textContent = `${item}`;

      tableHeaderRow.append(tableHeader);
    });

    tableDom.append(tableHeaderRow);

    this.data.forEach(({
      chatId, date, type, problem, status, comment, images, movies, result, nameAdmin,
    }) => {
      const tableRow = document.createElement('tr');
      tableRow.classList.add('table__row');

      const cellsInRow = [
        Table.createCell('chatId', chatId),
        Table.createCell('date', date),
        Table.createCell('type', type),
        Table.createCell('problem', problem),
        Table.createCell('status', status),
        Table.createCell('comment', comment),
        Table.createCell('images', images),
        Table.createCell('movies', movies),
        Table.createCell('result', result),
        Table.createCell('nameAdmin', nameAdmin),
      ];

      cellsInRow.forEach((cell) => {
        tableRow.append(cell);
      });

      tableDom.append(tableRow);
    });
  }

  static createCell(type, value) {
    const tableCell = document.createElement('td');
    tableCell.classList.add('table__row-cell');

    function createImgThumb() {
      const image = document.createElement('img');
      image.classList.add('table__row-thumb');
      image.setAttribute('src', '');
      return image;
    }

    const problemDate = new Date(value);
    const imgThumb = createImgThumb();

    switch (type) {
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
        tableCell.textContent = Table.getFormattedDate(problemDate);
        break;

      case 'images':
        tableCell.append(imgThumb);
        break;

      default:
        tableCell.textContent = `${value}`;
        break;
    }

    return tableCell;
  }

  static getFormattedDate(date) {
    function addZero(n) {
      return (parseInt(n, 10) < 10 ? '0' : '') + n;
    }

    const dateDay = date.getDate();
    const dateMonth = date.getMonth() + 1;
    const dateYear = date.getFullYear();
    const dateHour = date.getHours();
    const dateMin = date.getMinutes();

    return `${dateDay}.${dateMonth}.${dateYear} ${addZero(dateHour)}:${addZero(dateMin)}`;
  }

  init(data) {
    this.data = data;
    this.renderTable();
  }
}
