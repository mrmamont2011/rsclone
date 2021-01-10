import { filters, statusColors } from '../constants';

/**
 * return filtered data object
 * @param rel
 * @param filteredData
 * @return object
 */

export default function getByFilter(rel, filteredData = []) {
  switch (rel) {
    case filters.status.done:
      return {
        levelData: filteredData.filter((el) => el.status === filters.status.done),
        color: statusColors.green,
      };
    case filters.status.inwork:
      return {
        levelData: filteredData.filter((el) => el.status === filters.status.inwork),
        color: statusColors.yellow,
      };
    case filters.status.new:
      return {
        levelData: filteredData.filter((el) => el.status === filters.status.new),
        color: statusColors.red,
      };
    case filters.type.garbage:
      return {
        levelData: filteredData.filter((el) => el.type === filters.type.garbage),
      };
    case filters.type.container:
      return {
        levelData: filteredData.filter((el) => el.type === filters.type.container),
      };
    case filters.type.auto:
      return {
        levelData: filteredData.filter((el) => el.type === filters.type.auto),
      };
    case filters.type.tree:
      return {
        levelData: filteredData.filter((el) => el.type === filters.type.tree),
      };

    default:
      return {
        levelData: filteredData,
        color: statusColors.black,
      };
  }
}
