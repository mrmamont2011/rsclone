import { TELEGRAM_TOKEN } from '../../constants';

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

  static async getPath(id) {
    try {
      const data = await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/getFile?file_id=${id}`);
      const { result } = await data.json();
      return result.file_path;
    } catch (err) {
      console.error(err);
      return null;
    }
  }
}
