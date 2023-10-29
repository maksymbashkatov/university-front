import axios from 'axios';

const baseURL = 'http://localhost:3001/api/v1/lectors';

export function getLectors() {
  const url = `${baseURL}`;
  return axios.get(url);
}

export function getLectorById(id) {
  const url = `${baseURL}/${id}`;
  return axios.get(url);
}

export function createLector(body) {
  const url = `${baseURL}`;
  return axios.post(url, body);
}
