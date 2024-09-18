// AuthContext.tsx
import { UserInfo } from '@interfaces/localStorage';
import { getUserInfo, removeUserInfo, setUserInfo } from '@utilities/utils';
import React, { createContext, ReactNode, useEffect, useState } from 'react';

interface AuthContextType {
  userInfo: UserInfo | null; // Cambiado a UserInfo | null para representar que no hay usuario autenticado
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfo | null>>;
  login: (userInfo: UserInfo) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userInfo, setUserInfoState] = useState<UserInfo | null>(
    getUserInfo('userInfo')?.hasOwnProperty('name') ? getUserInfo('userInfo') : null,
  );

  useEffect(() => {
    // Obtener y verificar la información del usuario al montar el componente
    const storedUserInfo = getUserInfo('userInfo');
    if (storedUserInfo?.hasOwnProperty('name')) {
      setUserInfoState(storedUserInfo);
    } else {
      setUserInfoState(null);
    }
  }, []);

  useEffect(() => {
    if (userInfo) {
      setUserInfo('userInfo', userInfo);
    } else {
      removeUserInfo('userInfo'); // Limpiar el localStorage si no hay usuario
    }
  }, [userInfo]);

  const login = (userInfo: UserInfo) => {
    setUserInfoState(userInfo);
  };

  const logout = () => {
    setUserInfoState(null);
  };

  return (
    <AuthContext.Provider value={{ userInfo, setUserInfo: setUserInfoState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext };
