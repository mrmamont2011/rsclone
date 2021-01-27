import elements from './preloaderElements';
import { preloaderTimeOut } from '../../constants';

/**
 * Events handlers for preloader
 * @return void
 */

export default function preloaderEvents() {
  const { preloader } = elements;
  const { time } = preloaderTimeOut;

  window.onload = function preloaderOnLoad() {
    setTimeout(() => {
      preloader.classList.add('hide');
    }, time);
  };
}
