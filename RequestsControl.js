import ReqByXML from './ReqByXML.js';
import ReqByFetch from './ReqByFetch.js';

export default class RequestsControl {
  constructor() {
    this._xmlReq = new ReqByXML();
    this._fetchReq = new ReqByFetch();
    this.isReqByFetch = true;
  }

  get(id) {
    if (this.isReqByFetch) {
      this._fetchReq
        .getTaskById(id)
        .then(data => console.log(`GET/Fetch Задание получено `, data))
        .catch(error => console.log(error));
    } else {
      this._xmlReq
        .getTaskById(id)
        .then(data => console.log(`GET/XMLHttp Задание получено `, JSON.parse(data)))
        .catch(error => console.log(error));
    }
  }
  patch(id, task) {
    if (this.isReqByFetch) {
      this._fetchReq
        .patchTask(id, task)
        .then(data => console.log(`PATCH/Fetch Задание №${id} изменено `, data))
        .catch(error => console.log(error));
    } else {
      this._xmlReq
        .patchTask(id, task)
        .then(data => console.log(`PATCH/XMLHttp Задание №${id} изменено `, JSON.parse(data)))
        .catch(error => console.log(error));
    }
  }
  delete(id) {
    if (this.isReqByFetch) {
      this._fetchReq
        .deleteTaskById(id)
        .then(data => console.log(`PATCH/Fetch Задание №${id} удалено `, data))
        .catch(error => console.log(error));
    } else {
      this._xmlReq
        .deleteTaskById(id)
        .then(data => console.log(`PATCH/XMLHttp Задание №${id} удалено `, JSON.parse(data)))
        .catch(error => console.log(error));
    }
  }
  getAll() {
    if (this.isReqByFetch) {
      this._fetchReq
        .getTasks()
        .then(data => console.log(`GET/Fetch Получены все задания `, data))
        .catch(error => console.log(error));
    } else {
      this._xmlReq
        .getTasks()
        .then(data => console.log(`GET/XMLHttp Получены все задания `, JSON.parse(data)))
        .catch(error => console.log(error));
    }
  }
  post(task) {
    if (this.isReqByFetch) {
      this._fetchReq
        .postNewTask(task)
        .then(data => console.log(`POST/Fetch Добавлено новое задание `, data))
        .catch(error => console.log(error));
    } else {
      this._xmlReq
        .postNewTask(task)
        .then(data => console.log(`POST/XMLHttp Добавлено новое задание `, JSON.parse(data)))
        .catch(error => console.log(error));
    }
  }
  switchReqMethod() {
    this.isReqByFetch = !this.isReqByFetch;
    console.log(`Метод запроса изменен на ${this.isReqByFetch ? 'FETCH' : 'XMLHttp'}`);
  }
}
