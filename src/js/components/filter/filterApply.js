import getByFilter from './filterSelect';
import { data } from '../../constants';

export default function filterApply(arr = []) {
  return arr.reduce((prev, cur) => getByFilter(cur, prev.data), getByFilter('all', data));
}
