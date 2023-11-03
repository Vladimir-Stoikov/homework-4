export default class ReqByFetch {
  constructor() {
    this._url = 'http://37.220.80.108/tasks';
  }

  async getTaskById(id) {
    try {
      const props = {
        method: 'GET',
      };

      const response = await fetch(`${this._url}/${id}`, props);
      if (!response.ok) {
        console.log('Ошибка получения данных');
        return null;
      }
      return await response.json();
    } catch (error) {
      throw new Error(error);
    }
  }

  async patchTask(id, task) {
    try {
      const props = {
        method: 'PATCH',
        body: JSON.stringify(task),
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const response = await fetch(`${this._url}/${id}`, props);
      if (!response.ok) {
        console.log('Ошибка получения данных');
        return null;
      }
      return await response.json();
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteTaskById(id) {
    try {
      const props = {
        method: 'DELETE',
      };

      const response = await fetch(`${this._url}/${id}`, props);
      if (!response.ok) {
        console.log('Ошибка получения данных');
        return null;
      }
      return await response.json();
    } catch (error) {
      throw new Error(error);
    }
  }

  async getTasks() {
    try {
      const props = {
        method: 'GET',
      };

      const response = await fetch(`${this._url}`, props);
      if (!response.ok) {
        console.log('Ошибка получения данных');
        return null;
      }
      return await response.json();
    } catch (error) {
      throw new Error(error);
    }
  }

  async postNewTask(task) {
    try {
      const props = {
        method: 'POST',
        body: JSON.stringify(task),
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const response = await fetch(`${this._url}`, props);
      if (!response.ok) {
        console.log('Ошибка получения данных');
        return null;
      }
      return await response.json();
    } catch (error) {
      throw new Error(error);
    }
  }
}
