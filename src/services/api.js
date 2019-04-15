import axios from 'axios';

const api = axios.create({
  baseUrl: 'https://omni2-backend.herokuapp.com'
});

export default api;