// authService.ts

interface LoginResponse {
  token: string;
  refreshToken?: string;
  // інші поля, якщо потрібно
}

export const login = async (login: string, password: string): Promise<LoginResponse> => {
  console.log('Attempting login with:', { login, password })
  const response = await fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ login, password }),
  });
  if (!response.ok) {
    console.error('Login failed with status:', response.status);
      throw new Error('Login failed');
  }
  return response.json();
};

// Додавання функції logout
export const logout = (): void => {
  localStorage.removeItem('token');
  localStorage.removeItem('refreshToken');
  localStorage.removeItem('currentUser');
};
  