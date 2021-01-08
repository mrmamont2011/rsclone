import { filters } from '../constants';

/**
 * return filtered data object
 * @param rel
 * @param filteredData
 * @return object
 */

export default function getByLevel(rel, filteredData = []) {
  switch (rel) {
    case 'done':
      return {
        levelData: filteredData.filter((el) => el.status === filters.status.done),
        color: 'green',
      };
    case 'pending':
      return {
        levelData: filteredData.filter((el) => el.status === filters.status.inwork),
        color: 'yellow',
      };
    case 'new':
      return {
        levelData: filteredData.filter((el) => el.status === filters.status.new),
        color: 'red',
      };

    default:
      return {
        levelData: filteredData,
        color: 'black',
      };
  }
}
