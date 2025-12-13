import axios, { AxiosError } from "axios";

const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const VITE_API_VERSION = import.meta.env.VITE_API_VERSION;

const baseURL = `${VITE_API_BASE_URL}/${VITE_API_VERSION}`;

const api = axios.create({
  baseURL,
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default api;
