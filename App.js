import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Form from './src/components/Form';
import Task from './src/components/Task';

const App = () => {
  const [tasks, setTasks] = useState(['Task 1', 'Task 2']);

  const addTask = task => {
    setTasks([...tasks, task]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Todo List</Text>
      <Form onAddTask={addTask} />
      {tasks.map((task, index) => (
        <Task key={index} index={index} task={task} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    padding: 10,
  },
  headerTitle: {
    fontSize: 30,
    color: '#3F8AFA',
    fontWeight: '700',
  },
});

export default App;
