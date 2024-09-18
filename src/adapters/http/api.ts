import apiService from '@config/axiosConfig';
import { AxiosRequestConfig, AxiosResponse } from 'axios';

async function get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
  try {
    const response: AxiosResponse<T> = await apiService.get(url, config);
    return response.data;
  } catch (error) {
    handleApiError(error);
    throw error;
  }
}

async function post<T>(url: string, data: any, config?: AxiosRequestConfig): Promise<T> {
  try {
    const response: AxiosResponse<T> = await apiService.post(url, data, config);
    return response.data;
  } catch (error) {
    handleApiError(error);
    throw error;
  }
}

async function put<T>(url: string, data: any, config?: AxiosRequestConfig): Promise<T> {
  try {
    const response: AxiosResponse<T> = await apiService.put(url, data, config);
    return response.data;
  } catch (error) {
    handleApiError(error);
    throw error;
  }
}

async function del<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
  try {
    const response: AxiosResponse<T> = await apiService.delete(url, config);
    return response.data;
  } catch (error) {
    handleApiError(error);
    throw error;
  }
}

function handleApiError(error: any): void {
  console.error('API call failed:', error.response?.status, error.message);
}

export { get, post, put, del };
