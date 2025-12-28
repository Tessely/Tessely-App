import type { SignUpPayload } from "../types";

const TOKEN_KEY = '@auth_token';

export type LoginPayload = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export async function login(payload: LoginPayload) {
  const response = await fetch('https://tessely-app-production.up.railway.app/api/v1/auth/login', {
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

export async function logout() {
  const token = localStorage.getItem(TOKEN_KEY);
  const response = await fetch('https://tessely-app-production.up.railway.app/api/v1/auth/logout', {
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
  const response = await fetch('http://127.0.0.1:8000/api/v1/auth/signup', {
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