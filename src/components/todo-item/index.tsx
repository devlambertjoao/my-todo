import React from 'react';
import {Text, View} from 'react-native';
import Todo from '../../models/todo';

interface IProps {
  data: Todo;
}

const TodoItem = ({data}: IProps) => {
  return (
    <View>
      <Text>{data.name}</Text>
    </View>
  );
};

export default TodoItem;
