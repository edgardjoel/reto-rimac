import axios from 'axios';
import { apiUrl } from './apiConfig';

const apiService = axios.create({
  baseURL: apiUrl, // Reemplaza con tu URL de API
});

export default apiService;
