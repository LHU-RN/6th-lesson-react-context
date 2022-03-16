import React, {createContext, useContext, useEffect, useState} from 'react';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getUserInfoApi, signInApi} from './features/auth/services/auth.service';

export const UserContext = createContext({});

export const useUserContext = () => useContext(UserContext);

export default function UserContextProvider({children}) {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [checkedSignIn, setCheckSignIn] = useState(false);
  const [user, setUser] = useState({});

  const signIn = async (username, password) => {
    // call api
    // store token
    try {
      const response = await signInApi(username, password);
      const data = await response.json();
      if (response.ok) {
        // Truong hop thanh cong
        await AsyncStorage.setItem('token', data.token);
        const userInfo = await getUserInfoApi(data.token);
        setUser({token: data.token, ...userInfo});
        setIsSignedIn(true);
      } else {
        // Truong hop loi
        console.log(data.message);
        Alert.alert('Error', data.message);
      }
    } catch (error) {
      console.log(error);
    }
    // setIsSignedIn(true);
  };

  const signOut = () => {
    setIsSignedIn(false);
    return AsyncStorage.removeItem('token');
  };

  useEffect(() => {
    const checkSignIn = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        const userInfo = await getUserInfoApi(token);
        setUser({token, ...userInfo});
        setIsSignedIn(true);
      }
      setCheckSignIn(true);
    };
    checkSignIn();
  }, []);

  return (
    <UserContext.Provider
      value={{
        isSignedIn,
        signIn,
        signOut,
        user,
        checkedSignIn,
      }}>
      {children}
    </UserContext.Provider>
  );
}
