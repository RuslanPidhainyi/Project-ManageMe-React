import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth/';

const login = (login: string, password: string) => {
  return axios.post(API_URL + 'signin', {
    login,
    password
  }).then(response => {
    if (response.data.accessToken) {
      localStorage.setItem('user', JSON.stringify(response.data.accessToken));
    }
    return response.data;
  });
};

const authService = {
  login,
  logout: () => {
    localStorage.removeItem('user');
  }
};

export default authService;
