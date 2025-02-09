import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Asigură-te că URL-ul de bază este corect
});

export default api;
