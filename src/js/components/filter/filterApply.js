import getByFilter from './filterSelect';
import { data } from '../../constants';

/**
 * Applies filter for select's
 * @param arr
 * @return object
 */

export default function filterApply(arr = []) {
  const initialData = getByFilter('all', data);
  return arr.reduce((prev, cur) => getByFilter(cur, prev.data), initialData);
}
