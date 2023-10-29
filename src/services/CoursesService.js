import axios from 'axios';

const baseURL = 'http://localhost:3001/api/v1/courses';

export function getCourses() {
  const url = `${baseURL}`;
  return axios.get(url);
}

export function createCourse(body) {
  const url = `${baseURL}`;
  return axios.post(url, body);
}
