import type { SignUpPayload, LoginPayload } from "../types";

const TOKEN_KEY = '@auth_token';
// const API_BASE_URL = 'http://localhost:8000';
const API_BASE_URL = 'https://tessely-app-production.up.railway.app';

export function getAuthToken(): string | null {
  return localStorage.getItem(TOKEN_KEY);
}

export function isAuthenticated(): boolean {
  return !!localStorage.getItem(TOKEN_KEY);
}

export async function login(payload: LoginPayload) {
  const response = await fetch(`${API_BASE_URL}/api/v1/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    if (response.status === 401) {
      throw new Error('Invalid Username or Password');
    }
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();

  if (data.token.access_token) {
    localStorage.setItem(TOKEN_KEY, data.token.access_token);
    localStorage.setItem('@user_data', JSON.stringify(data.user));
  }

  return data;
}

export async function logout() {
  const token = localStorage.getItem(TOKEN_KEY);
  const response = await fetch(`${API_BASE_URL}/api/v1/auth/logout`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  localStorage.removeItem(TOKEN_KEY);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}

export async function signUp(payload: SignUpPayload) {
  const response = await fetch(`${API_BASE_URL}/api/v1/auth/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();

  if (data.token.access_token) {
    localStorage.setItem(TOKEN_KEY, data.token.access_token);
  }

  return data;
}

export async function forgetPassword(email: string) {
  const response = await fetch(`${API_BASE_URL}/api/v1/auth/forgot-password`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}

export async function resetPassword(newPassword: string, accessToken: string) {
  const response = await fetch(`${API_BASE_URL}/api/v1/auth/reset-password`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ new_password: newPassword }),
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}

