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
    }
    
    return response.data;
  } catch (error) {
    console.error("Login error:", error);
    throw error; // або обробіть помилку відповідним чином
  }
};

const authService = {
  login,
  logout: () => {
    localStorage.removeItem('user');
  }
};

export default authService;




