import createDomElem from '../../helpers/domHelpers';
import { tableHeaders, TELEGRAM_TOKEN } from '../../constants';
import Popup from '../popup/Popup';
import Connector from '../connector/Connector';

const popup = new Popup();

export default class Table {
  constructor() {
    this.data = null;
    this.tableDom = document.querySelector('#table');
  }

  renderTableHeaders() {
    const tableHeaderRow = document.createElement('tr');
    tableHeaderRow.classList.add('table__header');

    tableHeaders.forEach((item) => {
      const tableHeader = document.createElement('th');
      tableHeader.classList.add('table__header-cell');
      tableHeader.textContent = `${item}`;

      tableHeaderRow.append(tableHeader);
    });

    this.tableDom.append(tableHeaderRow);
  }

  renderTableBody() {
    const tableBody = document.createElement('tbody');

    this.data.forEach(({
      chatId, date, type, problem, userComment, status, photo, admin,
    }) => {
      const tableRow = document.createElement('tr');
      tableRow.classList.add('table__row');

      const cellsInRow = [
        Table.createCell('chatId', chatId),
        Table.createCell('date', date),
        Table.createCell('type', type),
        Table.createCell('problem', problem),
        Table.createCell('userComment', userComment),
        Table.createCell('images', photo),
        Table.createCell('status', status),
        // Table.createCell('admin', admin),
      ];

      cellsInRow.forEach((cell) => {
        tableRow.append(cell);
      });

      tableBody.append(tableRow);
    });

    this.tableDom.append(tableBody);
  }

  static createCell(type, value) {
    const tableCell = document.createElement('td');
    tableCell.classList.add('table__row-cell');

    const problemDate = new Date(value);
    let imgThumb = null;

    switch (type) {
      case 'chatId':
      case 'type':
      case 'problem':
      case 'status':
      case 'comment':
      // case 'nameAdmin':
        tableCell.textContent = `${value}`;
        break;

      case 'date':
        tableCell.textContent = Table.getFormattedDate(problemDate);
        break;

      case 'images':
        (async () => Connector.getPath(value[0].id))().then((res) => {
          const imageGet = `https://api.telegram.org/file/bot${TELEGRAM_TOKEN}/${res}`;
          imgThumb = createDomElem('img', 'table__row-thumb', imageGet);
          imgThumb.addEventListener('click', () => {
            popup.openPopup(imageGet, 'image');
          });
          tableCell.append(imgThumb);
        });
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

    return `${addZero(dateDay)}.${addZero(dateMonth)}.${dateYear} ${addZero(dateHour)}:${addZero(dateMin)}`;
  }

  init(data) {
    this.data = data;
    this.renderTableHeaders();
    this.renderTableBody();
  }

  updateTable(data) {
    this.data = data;
    this.tableDom.tBodies[0].remove();
    this.renderTableBody();
  }
}
