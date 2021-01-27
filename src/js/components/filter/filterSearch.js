/**
 * Search in object converted to string
 * @param data
 * @param text
 * @return array
 */

export default function filterSearch(data = [], text = 'placeholder') {
  return data.reduce((prev, cur) => {
    if (JSON.stringify(cur).indexOf(text) > -1) { prev.push(cur); }
    return prev;
  }, []);
}
