import AsyncStorage from '@react-native-async-storage/async-storage';

const TASK_KEY = '@task';

export const getTasks = async () => {
  try {
    const value = await AsyncStorage.getItem(TASK_KEY);
    console.log(value);
    if (value !== null) {
      return JSON.parse(value);
    }
    return [];
  } catch (error) {
    // error reading value
    console.warn(error);
  }
};

export const saveTasks = async tasks => {
  try {
    await AsyncStorage.setItem(TASK_KEY, JSON.stringify(tasks));
  } catch (error) {
    // saving error
    console.warn(error);
  }
};
