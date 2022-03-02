import React from 'react';
import AppNavigator from './features/AppNavigator';
import UserContextProvider from './UserContext';

export default function App() {
  return (
    <UserContextProvider>
      <AppNavigator />
    </UserContextProvider>
  );
}
