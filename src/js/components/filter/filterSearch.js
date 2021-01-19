export default function filterSearch(data = [], text = 'placeholder') {
  const findElements = [];

  data.forEach((obj, i) => {
    const searchEl = JSON.stringify(obj);
    if (searchEl.indexOf(text) > -1) {
      findElements.push(data[i]);
    }
  });
  return findElements;
}
