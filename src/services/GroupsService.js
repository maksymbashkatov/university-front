import axios from 'axios';

const baseURL = 'http://localhost:3001/api/v1/groups';

export function getGroups() {
  const url = `${baseURL}`;
  return axios.get(url);
}

export function createGroup(body) {
  const url = `${baseURL}`;
  return axios.post(url, body);
}
