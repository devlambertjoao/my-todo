import React, {useEffect} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import Todo from '../../models/todo';
import TodoItem from '../todo-item';

interface IProps {
  data: Array<Todo>;
}

const renderItem = (data: Todo) => {
  return <TodoItem data={data} />;
};

const TodoList = ({data}: IProps) => {
  useEffect(() => {
    console.log('aa');
  }, [data]);

  return (
    <SafeAreaView>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={data}
        renderItem={(item) => renderItem(item.item)}
      />
    </SafeAreaView>
  );
};

export default TodoList;
