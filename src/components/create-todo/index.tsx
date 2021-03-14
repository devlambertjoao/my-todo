import React, {useRef} from 'react';
import InputReference from '../../interfaces/InputReference';
import Todo from '../../models/todo';
import {Container, Button, Input} from './styles';

interface IProps {
  onCreate: (todo: Todo) => void;
}

const CreateTodo = ({onCreate}: IProps) => {
  const todoName = useRef<InputReference>(null);

  const handleNewTodo = () => {
    onCreate(new Todo(todoName.current?.value));
  };

  return (
    <Container>
      <Input ref={todoName} placeholder="Task" />
      <Button onPress={handleNewTodo} title={'Create'} />
    </Container>
  );
};

export default CreateTodo;
