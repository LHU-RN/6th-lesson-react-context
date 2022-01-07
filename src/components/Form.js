import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Keyboard,
} from 'react-native';

const Form = ({onAddTask}) => {
  const [task, setTask] = useState('');

  const addTask = () => {
    onAddTask(task);
    setTask('');
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Type task"
        style={styles.input}
        value={task}
        onChangeText={setTask}
      />
      <Pressable onPress={addTask} style={styles.button}>
        <Text style={styles.buttonTitle}>+</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 10,
  },
  input: {
    backgroundColor: '#fff',
    flex: 1,
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#3F8AFA',
    paddingHorizontal: 17,
    marginLeft: 10,
    borderRadius: 10,
  },
  buttonTitle: {
    fontSize: 30,
    color: '#fff',
  },
});

export default Form;
