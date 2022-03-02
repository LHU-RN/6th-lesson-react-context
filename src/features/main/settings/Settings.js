import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useUserContext} from '../../../UserContext';

export default function SettingsScreen() {
  const {signOut} = useUserContext();
  return (
    <View style={styles.container}>
      <Text>SettingsScreen</Text>
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
