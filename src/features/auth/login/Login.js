import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useUserContext} from '../../../UserContext';

export default function LoginScreen() {
  const {signIn} = useUserContext();

  return (
    <View style={styles.container}>
      <Text>LoginScreen</Text>
      <Button title="Login" onPress={signIn} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
