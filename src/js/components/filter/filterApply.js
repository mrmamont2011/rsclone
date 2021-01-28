import getByFilter from './filterSelect';
import Connector from '../connector/Connector';

/**
 * Applies filter for select's
 * @param arr
 * @return object
 */

export default function filterApply(arr = []) {
  return (async () => Connector.getData())().then((res) => {
    const initialData = getByFilter('all', res);
    return arr.reduce((prev, cur) => getByFilter(cur, prev.data), initialData);
  });
}
