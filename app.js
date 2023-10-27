import RequestsControl from './RequestsControl.js';

const controller = new RequestsControl();

const newTask = {
  name: 'Go to store',
  info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  isImportant: false,
  isCompleted: false,
};

const completeTask = {
  isCompleted: true,
};

// controller.getTaskByIdXML(id);
// controller.patchTaskXML(id, completeTask);
// controller.deleteTaskByIdXML(id);
// controller.getTasksXML();
// controller.postNewTaskXML(newTask);

// controller.getTaskByIdFetch(id);
// controller.patchTaskFetch(id, completeTask);
// controller.deleteTaskByIdFetch(id);
// controller.getTasksFetch();
// controller.postNewTaskFetch(newTask);
