import { filters } from '../constants';

/**
 * return filtered data object
 * @param rel
 * @param filteredData
 * @return object
 */

export default function getByLevel(rel, filteredData = {}) {
  let levelData;
  switch (rel) {
    case 'green':
      levelData = filteredData.filter((el) => el.status === filters.status.done);
      break;
    case 'yellow':
      levelData = filteredData.filter((el) => el.status === filters.status.inwork);
      break;
    case 'red':
      levelData = filteredData.filter((el) => el.status === filters.status.received);
      break;
    default:
      levelData = filteredData;
      break;
  }
  return levelData;
}
