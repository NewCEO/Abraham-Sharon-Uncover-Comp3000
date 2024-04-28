// UserDataContext.js
import React, { createContext, useContext } from 'react';

const UserDataContext = createContext(null);

export const useUserData = () => useContext(UserDataContext);

export const UserDataProvider = ({ userData, children }) => (
  <UserDataContext.Provider value={userData}>
    {children}
  </UserDataContext.Provider>
);
