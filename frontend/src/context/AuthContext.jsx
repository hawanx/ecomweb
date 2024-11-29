import { createContext, useContext, useState} from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkAuth = async () => {

    const token = localStorage.getItem('authToken');
    
    if (!token) {
        setIsAuthenticated(false);
        return;
    }
    
    try {
        const res = await axios.get('http://localhost/protected', {
            headers: { Authorization: `Bearer ${token}` },
        });
        setIsAuthenticated(true); // Token is valid
    } catch (err) {
      console.log(err);
      setIsAuthenticated(false); // Invalid or expired token
    }
};

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

