import ReqByXML from './ReqByXML.js';
import ReqByFetch from './ReqByFetch.js';

export default class RequestsControl {
  constructor() {
    this._xmlReq = new ReqByXML();
    this._fetchReq = new ReqByFetch();
  }

  // XML part ------------

  getTaskByIdXML(id) {
    this._xmlReq
      .getTaskById(id)
      .then(data => console.log(JSON.parse(data)))
      .catch(error => console.warm(error));
  }

  patchTaskXML(id, task) {
    this._xmlReq
      .patchTask(id, task)
      .then(data => console.log(JSON.parse(data)))
      .catch(error => console.warm(error));
  }

  deleteTaskByIdXML(id) {
    this._xmlReq
      .deleteTaskById(id)
      .then(data => console.log(JSON.parse(data)))
      .catch(error => console.warm(error));
  }

  getTasksXML() {
    this._xmlReq
      .getTasks()
      .then(data => console.log(JSON.parse(data)))
      .catch(error => console.warm(error));
  }

  postNewTaskXML(task) {
    this._xmlReq
      .postNewTask(task)
      .then(data => console.log(JSON.parse(data)))
      .catch(error => console.warm(error));
  }

  // Fetch Part ---------------------

  getTaskByIdFetch(id) {
    this._fetchReq
      .getTaskById(id)
      .then(data => console.log(data))
      .catch(error => console.warm(error));
  }

  patchTaskFetch(id, task) {
    this._fetchReq
      .patchTask(id, task)
      .then(data => console.log(data))
      .catch(error => console.warm(error));
  }

  deleteTaskByIdFetch(id) {
    this._fetchReq
      .deleteTaskById(id)
      .then(data => console.log(data))
      .catch(error => console.warm(error));
  }

  getTasksFetch() {
    this._fetchReq
      .getTasks()
      .then(data => console.log(data))
      .catch(error => console.warm(error));
  }

  postNewTaskFetch(task) {
    this._fetchReq
      .postNewTask(task)
      .then(data => console.log(data))
      .catch(error => console.warm(error));
  }
}
