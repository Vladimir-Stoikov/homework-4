export default class ReqByXML {
  constructor() {
    this._url = 'http://37.220.80.108/tasks';
  }

  getTaskById(id) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', `${this._url}/${id}`);
      xhr.onload = () => resolve(xhr.response);
      xhr.onerror = () => reject(xhr.status);
      xhr.send();
    });
  }

  patchTask(id, task) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('PATCH', `${this._url}/${id}`);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.onload = () => resolve(xhr.response);
      xhr.onerror = () => reject(xhr.status);
      const body = JSON.stringify(task);
      xhr.send(body);
    });
  }

  deleteTaskById(id) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('DELETE', `${this._url}/${id}`);
      xhr.onload = () => resolve(xhr.response);
      xhr.onerror = () => reject(xhr.status);
      xhr.send();
    });
  }

  getTasks() {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', `${this._url}`);
      xhr.onload = () => resolve(xhr.response);
      xhr.onerror = () => reject(xhr.status);
      xhr.send();
    });
  }

  postNewTask(task) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', `${this._url}`);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.onload = () => resolve(xhr.response);
      xhr.onerror = () => reject(xhr.status);
      const body = JSON.stringify(task);
      xhr.send(body);
    });
  }
}
