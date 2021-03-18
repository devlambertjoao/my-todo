import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Todo from '../../models/todo';
import {RemoveIcon} from './styles';

interface IProps {
  data: Todo;
  remove: (todo: Todo) => void;
}

const s = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    backgroundColor: '#b0b0eb',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 18,
  },
  item: {
    fontSize: 18,
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: Dimensions.get('screen').width - 124,
  },
});

const TodoItem = ({data, remove}: IProps) => {
  return (
    <View style={s.container}>
      <Text style={s.item}>{data.name}</Text>
      <TouchableOpacity onPress={() => remove(data)}>
        <RemoveIcon source={require('../../assets/remove.png')} />
      </TouchableOpacity>
    </View>
  );
};

export default TodoItem;
