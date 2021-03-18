import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import Todo from '../../models/todo';
import TodoItem from '../todo-item';
import {ItemListSeparator} from './styles';

interface IProps {
  data: Array<Todo>;
  remove: (todo: Todo) => void;
}

const TodoList = ({data, remove}: IProps) => {
  const renderItem = (todo: Todo, index: number) => {
    return <TodoItem data={todo} key={index} remove={remove} />;
  };

  return (
    <SafeAreaView>
      <FlatList
        scrollEnabled
        keyExtractor={(item, index) => index.toString()}
        data={data}
        renderItem={(item) => renderItem(item.item, item.index)}
        ItemSeparatorComponent={ItemListSeparator}
      />
    </SafeAreaView>
  );
};

export default TodoList;
