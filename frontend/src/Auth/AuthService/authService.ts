import axios from 'axios';
import {jwtDecode}  from 'jwt-decode';

const API_URL = 'http://localhost:5000/api/auth/';

const login = async (login: string, password: string) => {
  try {
    const response = await axios.post(API_URL + 'signin', {
      login,
      password
    });

    if (response.data.accessToken) {
      const decodedToken = jwtDecode(response.data.accessToken);
      localStorage.setItem('user', JSON.stringify(decodedToken));
      localStorage.setItem('accessToken', response.data.accessToken);//dodawem
    }
    
    return response.data;
  } catch (error) {
    console.error("Login error:", error);
    throw error; 
  }
};

const logout = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('accessToken');
};

const getCurrentUser = () => {
  const userStr = localStorage.getItem('user');
  if (userStr) return JSON.parse(userStr);
  return null;
};

const authService = {
  login,
  logout,
  getCurrentUser,//dodawem
};

export default authService;




