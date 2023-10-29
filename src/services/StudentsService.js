import axios from 'axios';

const baseURL = 'http://localhost:3001/api/v1/students';

export function getStudents() {
  const url = `${baseURL}`;
  return axios.get(url);
}

export function createStudent(body) {
  const url = `${baseURL}`;
  return axios.post(url, body);
}
