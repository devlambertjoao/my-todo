import Todo from '../models/todo';

const removeTodoFromArray = (array: Array<Todo>, itemToRemove: Todo) => {
  const index = array.findIndex((a) => a.name === itemToRemove.name);

  if (index > -1) {
    array.splice(index, 1);
  }
};

export {removeTodoFromArray};
