import React, {useState} from 'react';
import Todo from '../../models/todo';
import {Container, Button, Input} from './styles';

interface IProps {
  onCreate: (todo: Todo) => void;
  todoName?: string;
}

const CreateTodo = ({onCreate, todoName}: IProps) => {
  const [name, setName] = useState(todoName);

  const handleNewTodo = () => {
    onCreate(new Todo(name));
  };

  return (
    <Container>
      <Input placeholder="Task" onChangeText={setName} value={name} />
      <Button onPress={handleNewTodo} title={'Create'} />
    </Container>
  );
};

export default CreateTodo;
