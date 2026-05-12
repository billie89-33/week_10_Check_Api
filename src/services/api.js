import axios from 'axios';

export const memberApi = axios.create({
  baseURL: 'https://69fd91d430ad0a6fd1c109c9.mockapi.io/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});


memberApi.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Connection Error:", error.response?.status);
    return Promise.reject(error);
  }
);


export const localApi = axios.create({
  baseURL: 'http://localhost:4000', 
  headers: { 'Content-Type': 'application/json' },
});