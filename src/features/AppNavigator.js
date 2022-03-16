import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './auth/components/AuthNavigator';
import MainNavigator from './main/MainNavigator';
import {useUserContext} from '../UserContext';
import {Text} from 'react-native';

export default function AppNavigator() {
  const {isSignedIn, checkedSignIn} = useUserContext();

  useEffect(() => {
    if (checkedSignIn) {
      // Hide splash screen
    }
  }, [checkedSignIn]);

  if (!checkedSignIn) {
    return <Text>Loading......</Text>;
  }

  return (
    <NavigationContainer>
      {isSignedIn ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
