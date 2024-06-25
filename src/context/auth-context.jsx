import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const baseauth = import.meta.env.VITE_BASE_AUTH_API;

  const [userData, setUserData] = useState(null);
  
  useEffect(() => {
    const validResponse = async () => {
      try {
        const response = await axios.get(`${baseauth}/user/validate-user`, {
          withCredentials: true,
        });
        console.log('the valid response => ', response);

        if (response?.data?.valid) {
          console.log('its ok');
          setUserData(response?.data?.userDetails);
        }

        if (!response?.data) {
          console.log('validation invalid');
        }
      } catch (error) {
        if (error instanceof axios.AxiosError) {
          console.log('access cut => ', error?.response?.data);
        }
      }
    };

    validResponse();
  }, []);

  return (
    <AuthContext.Provider value={{ userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};
