import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';

const Task = ({index, task, deleteTask}) => {
  // props.index, props.task

  const onTaskPressed = () => {
    deleteTask(index);
  };

  return (
    <View style={styles.container}>
      <View style={styles.taskInfo}>
        <Text
          style={
            index % 2 === 0 ? styles.taskNumberEven : styles.taskNumberOdd
          }>
          {(index + 1).toString().padStart(2, '0')}
        </Text>
        <Text numberOfLines={1} style={styles.taskName}>
          {task}
        </Text>
      </View>
      <Pressable onPress={onTaskPressed}>
        <Text style={styles.doneButton}>✓</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    marginVertical: 5,
    padding: 10,
    borderRadius: 10,
  },
  taskNumberEven: {
    backgroundColor: '#3F8AFA',
    color: '#FFFFFF',
    paddingHorizontal: 10,
    paddingVertical: 1,
    borderRadius: 6,
  },
  taskNumberOdd: {
    backgroundColor: '#00C637',
    color: '#FFFFFF',
    paddingHorizontal: 10,
    paddingVertical: 1,
    borderRadius: 6,
  },
  taskInfo: {
    flex: 1,
    flexDirection: 'row',
  },
  taskName: {
    marginLeft: 10,
  },
  doneButton: {
    color: 'green',
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
});

export default Task;
