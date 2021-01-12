// Добавил для тестов. Вызывает колбек на изменения в доме у выбранного узла.

export default function observer() {

  //   // Выбираем целевой элемент
  //   const target = document.getElementById('map');

  //   // Конфигурация observer (за какими изменениями наблюдать)
  //   const config = {
  //     attributes: false,
  //     childList: true,
  //     subtree: false,
  //     characterData: false,
  //   };

  //   // Функция обратного вызова при срабатывании мутации
  //   const callback = function (mutationsList, observer) {
  //     for (const mutation of mutationsList) {
  //       if (mutation.type === 'childList') {
  //         console.log('A child node has been added or removed.');
  //       } else if (mutation.type === 'attributes') {
  //       // console.log()
  //       }
  //     }
  //   };

  //   // Создаем экземпляр наблюдателя с указанной функцией обратного вызова
  //   const observer = new MutationObserver(callback);
  //   // Начинаем наблюдение за настроенными изменениями целевого элемента
  //   observer.observe(target, config);
}
