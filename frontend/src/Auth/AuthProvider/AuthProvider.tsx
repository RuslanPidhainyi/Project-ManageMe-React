import { useState, useEffect, ReactNode } from 'react';
import authService from '../AuthService/authService';
import { UserType } from '../../Types/User.type/User.type';
import { AuthContext } from '../../Auth/AuthContext/AuthContext ';

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