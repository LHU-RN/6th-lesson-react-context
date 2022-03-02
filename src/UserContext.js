import React, {createContext, useContext, useEffect, useState} from 'react';

export const UserContext = createContext({});

export const useUserContext = () => useContext(UserContext);

export default function UserContextProvider({children}) {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const signIn = () => {
    // call api
    // store token
    setIsSignedIn(true);
  };

  const signOut = () => {
    // do something
    // clear token
    setIsSignedIn(false);
  };

  useEffect(() => {
    // Check if user is signed in
  }, []);

  return (
    <UserContext.Provider
      value={{
        isSignedIn,
        signIn,
        signOut,
      }}>
      {children}
    </UserContext.Provider>
  );
}
