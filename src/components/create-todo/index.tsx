import React, {useRef} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';
import InputReference from '../../interfaces/InputReference';
import Todo from '../../models/todo';

const s = StyleSheet.create({
  container: {
    padding: 24,
  },
  input: {
    marginBottom: 12,
  },
});

interface IProps {
  onCreate: (todo: Todo) => void;
}

const CreateTodo = ({onCreate}: IProps) => {
  const todoName = useRef<InputReference>(null);

  const handleNewTodo = () => {
    onCreate(new Todo(todoName.current?.value));
  };

  return (
    <View style={s.container}>
      <TextInput styles={s.input} ref={todoName} />
      <Button onPress={handleNewTodo} title={'Create'} />
    </View>
  );
};

export default CreateTodo;
