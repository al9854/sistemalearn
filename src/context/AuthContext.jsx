import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [role, setRole] = useState('admin'); // 'admin' | 'subscriber'

  const switchToAdmin      = () => setRole('admin');
  const switchToSubscriber = () => setRole('subscriber');

  return (
    <AuthContext.Provider value={{ role, switchToAdmin, switchToSubscriber }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
