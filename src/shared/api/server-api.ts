'use server';

import axios from 'axios';

import type {
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig,
} from 'axios';

// NOTE: Create main axios instance for all requests
export const serverApi = axios.create({
  baseURL: process.env.BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request processing
const handleRequest = async (
  request: InternalAxiosRequestConfig
): Promise<InternalAxiosRequestConfig> => request;

const handleRequestError = (error: AxiosError) => {
  console.log(error.request);
  return Promise.reject(error);
};

serverApi.interceptors.request.use(handleRequest, handleRequestError);

// Response processing
const handleResponse = (response: AxiosResponse): AxiosResponse => response;

const handleResponseError = (error: AxiosError) => {
  console.log('Backend api error');
  if (error.response) {
    console.log('Backend api error.response.data: ', error.response.data);
    console.log('Backend api error.response.status: ', error.response.status);
    console.log('Backend api error.response.headers: ', error.response.headers);

    return error.response;
  }
  return Promise.reject(error);
};

serverApi.interceptors.response.use(handleResponse, handleResponseError);
