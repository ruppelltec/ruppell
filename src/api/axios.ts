import axios, { AxiosError } from "axios";

const VITE_API_VERSION = import.meta.env.VITE_API_VERSION;

// Since there's no backend API configured, we'll use an empty baseURL
// All API calls will return 503 errors as expected
const api = axios.create({
  baseURL: `/${VITE_API_VERSION}`,
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
