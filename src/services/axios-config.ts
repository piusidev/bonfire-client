import axios from 'axios';

export const axiosClient = () => {
  const baseURL = 'https://bonfire-dev-api.herokuapp.com/api';

  const api = axios.create({
    baseURL,
    headers: {
      'access-control-allow-origin': '*',
      'access-control-allow-methods': '*',
      'access-control-allow-headers': '*',
      'Content-Type': 'application/json',
    },
  });

  api.interceptors.response.use();

  return api;
};
