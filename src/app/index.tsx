import React from 'react';
import {View} from 'react-native';
import CreateTodo from '../components/create-todo';

const App = () => {
  return (
    <View>
      <CreateTodo onCreate={() => {}} />
    </View>
  );
};

export default App;
