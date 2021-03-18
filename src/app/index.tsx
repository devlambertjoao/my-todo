import React, {useState} from 'react';
import {View} from 'react-native';
import CreateTodo from '../components/create-todo';
import TodoList from '../components/todo-list';
import Todo from '../models/todo';
import {removeTodoFromArray} from '../utils/arrayUtils';

const App = () => {
  const [todos, setTodos] = useState<Array<Todo>>([]);

  const handleNewTodo = (todo: Todo) => {
    setTodos([...todos, todo]);
  };

  const handleRemove = (todo: Todo) => {
    removeTodoFromArray(todos, todo);
    setTodos([...todos]);
  };

  return (
    <View>
      <CreateTodo onCreate={handleNewTodo} />
      <TodoList data={todos} remove={handleRemove} />
    </View>
  );
};

export default App;
