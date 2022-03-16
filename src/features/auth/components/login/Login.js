import React from 'react';
import {Button, StyleSheet, Text, View, TextInput} from 'react-native';
import {useUserContext} from '../../../../UserContext';

export default function LoginScreen() {
  const {signIn} = useUserContext();
  const [username, setUsername] = React.useState('nguyenvana');
  const [password, setPassword] = React.useState('xxxxxxx');

  const onPressLogin = () => {
    signIn(username, password);
  };

  return (
    <View style={styles.container}>
      <Text>LoginScreen</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder="Username"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
      />
      <Button title="Login" onPress={onPressLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#eee',
    marginBottom: 10,
  },
});
