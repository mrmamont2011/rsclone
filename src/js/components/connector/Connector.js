export default class Connector {

  static async getData(url) {
    try {
      const data = await fetch(url);
      const result = await data.json();
      return result;
    } catch (err) {
      console.error(err);
      return null;
    }
  }
}
