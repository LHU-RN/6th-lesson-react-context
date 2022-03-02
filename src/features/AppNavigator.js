import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './auth/AuthNavigator';
import MainNavigator from './main/MainNavigator';
import {useUserContext} from '../UserContext';

export default function AppNavigator() {
  const {isSignedIn} = useUserContext();

  return (
    <NavigationContainer>
      {isSignedIn ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
