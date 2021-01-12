import createDomElem from '../../helpers/domHelpers';
import { tableHeaders } from '../../constants';
import Popup from '../popup/Popup';

const popup = new Popup();

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
      chatId, date, type, problem, userComment, status, image, video, admin,
    }) => {
      const tableRow = document.createElement('tr');
      tableRow.classList.add('table__row');

      const cellsInRow = [
        Table.createCell('chatId', chatId),
        Table.createCell('date', date),
        Table.createCell('type', type),
        Table.createCell('problem', problem),
        Table.createCell('userComment', userComment),
        Table.createCell('images', image),
        Table.createCell('video', video),
        Table.createCell('status', status),
        Table.createCell('admin', admin),
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

    function createIcon() {
      const icon = document.createElement('div');
      icon.classList.add('table__row-icon');
      return icon;
    }

    const problemDate = new Date(value);
    let imgThumb = null;
    let videoIcon = null;

    switch (type) {
      case 'chatId':
      case 'type':
      case 'problem':
      case 'status':
      case 'comment':
      case 'nameAdmin':
        tableCell.textContent = `${value}`;
        break;

      case 'date':
        tableCell.textContent = Table.getFormattedDate(problemDate);
        break;

      case 'images':
        imgThumb = createDomElem('img', 'table__row-thumb', value);
        imgThumb.addEventListener('click', () => {
          popup.openPopup(value, 'image');
        });
        tableCell.append(imgThumb);
        break;

      case 'video':
        videoIcon = createIcon();
        videoIcon.addEventListener('click', () => {
          console.log(value);
          popup.openPopup(value, 'video');
        });
        tableCell.append(videoIcon);
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
