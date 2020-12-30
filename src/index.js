import './styles/main.scss';
import Map from './js/components/map/Map';
import { data } from './js/components/constants/constants';

const map = new Map();

const main = async () => {
  try {
    map.init(data);
  } catch (err) {
    // eslint-disable-next-line no-alert
    alert(err);
  }
};

main();
console.log(data);
