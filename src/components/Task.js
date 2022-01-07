import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Task = ({index, task}) => {
  // props.index, props.task

  return (
    <View style={styles.container}>
      <View style={styles.taskInfo}>
        <Text>{index + 1}</Text>
        <Text numberOfLines={1} style={styles.taskName}>
          {task}
        </Text>
      </View>
      <Text>✓</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    marginVertical: 5,
    padding: 10,
  },
  taskInfo: {
    flex: 1,
    flexDirection: 'row',
  },
  taskName: {
    marginLeft: 5,
  },
});

export default Task;
