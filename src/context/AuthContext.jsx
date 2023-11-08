import React, { createContext, useContext} from 'react';
import useLocalStorage from '../hooks/useLocalStorage';


const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage('user',{
    email: 'user@example.com',
    password: 'password123',
  });

  const login = (email, password) => {
    if (email === user.email && password === user.password) {
      return true;
    }
    return false;
  };

  return (
    <AuthContext.Provider value={{user, login }}>
      {children}
    </AuthContext.Provider>
  );
};
