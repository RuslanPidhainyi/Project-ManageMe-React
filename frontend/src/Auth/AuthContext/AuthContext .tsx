// context/AuthContext.tsx
import React, { createContext, useState, useEffect, ReactNode } from 'react';
import authService from '../AuthService/authService';
import { UserType } from '../../Types/User.type/User.type';

interface AuthContextType {
  user: UserType | null;
  setUser: React.Dispatch<React.SetStateAction<UserType | null>>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserType | null>(authService.getCurrentUser());

  useEffect(() => {
    const loggedUser = authService.getCurrentUser();
    setUser(loggedUser);
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};



// import React, { createContext } from 'react';
// import { UserType } from '../../Types/User.type/User.type';

// interface AuthContextType {
//     user: UserType | null;
//     setUser: React.Dispatch<React.SetStateAction<UserType | null>>;
//   }
  
//   export const AuthContext = createContext<AuthContextType | undefined>(undefined);
  