import React, {useState} from 'react';
import {View} from 'react-native';
import CreateTodo from '../components/create-todo';
import TodoList from '../components/todo-list';
import Todo from '../models/todo';

const App = () => {
  const [todos, setTodos] = useState<Array<Todo>>([]);

  const handleNewTodo = (todo: Todo) => {
    const newTodoArray = [...todos, todo];
    setTodos(newTodoArray);
  };

  return (
    <View>
      <CreateTodo onCreate={(t) => handleNewTodo(t)} />
      <TodoList data={todos} />
    </View>
  );
};

export default App;
