import { CaseRootsResponse } from '../types';

const API_URL = import.meta.env.VITE_API_BASE_URL;

export async function fetchCaseRoots(): Promise<CaseRootsResponse> {
  const token = localStorage.getItem('@auth_token');

  if (!token) {
    throw new Error('No authentication token found');
  }

  const response = await fetch(`${API_URL}/process-mining/case-roots`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.statusText}`);
  }

  return response.json();
}
