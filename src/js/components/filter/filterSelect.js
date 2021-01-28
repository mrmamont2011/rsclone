import { filters, statusColors } from '../../constants';

/**
 * Return filtered object by status and type
 * @param rel
 * @param filteredData
 * @return object
 */

export default function getByFilter(rel = 'all', filteredData = []) {
  switch (rel) {
    case filters.status.done:
      return {
        data: filteredData.filter((el) => el.status === filters.status.done),
        color: statusColors.green,
      };
    case filters.status.inwork:
      return {
        data: filteredData.filter((el) => el.status === filters.status.inwork),
        color: statusColors.yellow,
      };
    case filters.status.new:
      return {
        data: filteredData.filter((el) => el.status === filters.status.new),
        color: statusColors.red,
      };
    case filters.type.garbage:
      return {
        data: filteredData.filter((el) => el.type === filters.type.garbage),
      };
    case filters.type.container:
      return {
        data: filteredData.filter((el) => el.type === filters.type.container),
      };
    case filters.type.auto:
      return {
        data: filteredData.filter((el) => el.type === filters.type.auto),
      };
    case filters.type.tree:
      return {
        data: filteredData.filter((el) => el.type === filters.type.tree),
      };
    case filters.problem.constructTrash:
      return {
        data: filteredData.filter((el) => el.problem === filters.problem.constructTrash),
      };

    case filters.problem.comercialTrash:
      return {
        data: filteredData.filter((el) => el.problem === filters.problem.comercialTrash),
      };

    case filters.problem.houseTrash:
      return {
        data: filteredData.filter((el) => el.problem === filters.problem.houseTrash),
      };

    case filters.problem.overContainer:
      return {
        data: filteredData.filter((el) => el.problem === filters.problem.overContainer),
      };

    case filters.problem.brokenContainer:
      return {
        data: filteredData.filter((el) => el.problem === filters.problem.brokenContainer),
      };

    case filters.problem.missedContainer:
      return {
        data: filteredData.filter((el) => el.problem === filters.problem.missedContainer),
      };

    case filters.problem.abandonedCar:
      return {
        data: filteredData.filter((el) => el.problem === filters.problem.abandonedCar),
      };

    case filters.problem.firedCar:
      return {
        data: filteredData.filter((el) => el.problem === filters.problem.firedCar),
      };

    case filters.problem.sawedTrees:
      return {
        data: filteredData.filter((el) => el.problem === filters.problem.sawedTrees),
      };

    case filters.problem.fallenTrees:
      return {
        data: filteredData.filter((el) => el.problem === filters.problem.fallenTrees),
      };

    default:
      return {
        data: filteredData,
        color: statusColors.black,
      };
  }
}
