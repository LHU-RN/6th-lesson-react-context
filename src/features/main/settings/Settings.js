import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useUserContext} from '../../../UserContext';

export default function SettingsScreen() {
  const {signOut, user} = useUserContext();
  return (
    <View style={styles.container}>
      <Text>SettingsScreen</Text>
      <Text>{user.username}</Text>
      <Text>{user.fullName}</Text>
      <Button title="Logout" onPress={signOut} />
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
