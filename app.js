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

// controller.delete(id);
// controller.post(newTask);
// controller.get(id);
// controller.switchReqMethod();
// controller.get(id);
// controller.patch(id, completeTask);
// controller.get(id);
// controller.switchReqMethod();
// controller.getAll();
