import moment from 'moment';

/**
 * Return filtered data object by start and end date without time
 * @param date
 * @param filteredData
 * @return object
 */

export default function filterDate(date, filteredData = []) {
  if (typeof date === 'undefined' || date === '') {
    return filteredData;
  }

  const splitedDate = date.split('-');
  const startDate = moment(splitedDate[0], 'DD.MM.YYYY', true).startOf('day').format();
  const endDate = moment(splitedDate[1], 'DD.MM.YYYY', true).startOf('day').format();

  function filterByDate(oneDate = false) {
    return filteredData.filter((el) => {
      const dateEl = new Date(el.date);
      const momentDate = moment(dateEl, 'DD.MM.YYYY', true).startOf('day').format();
      return (oneDate === false)
        ? (momentDate >= startDate && momentDate <= endDate)
        : momentDate === startDate;
    });
  }

  if (typeof date !== 'undefined' && date.includes('-')) {
    return filterByDate();
  }

  return filterByDate(true);
}
