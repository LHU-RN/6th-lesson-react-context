import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Form from './src/components/Form';
import Task from './src/components/Task';
import {getTasks, saveTasks} from './src/services/storageHelpers';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getTasks().then(data => {
      setTasks(data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const addTask = task => {
    setTasks([...tasks, task]);
  };

  const deleteTask = index => {
    setTasks(prevTasks => {
      const newTask = [...prevTasks];
      newTask.splice(index, 1);
      return newTask;
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Todo List</Text>
      <Form onAddTask={addTask} />
      {isLoading ? <Text>Loading....</Text> : null}
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
          <Task key={item} index={index} deleteTask={deleteTask} task={item} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    padding: 10,
  },
  taskList: {
    marginTop: 10,
  },
  headerTitle: {
    fontSize: 30,
    color: '#3F8AFA',
    fontWeight: '700',
  },
});

export default App;
