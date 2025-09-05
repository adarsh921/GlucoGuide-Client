import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, //backend base url
  withCredentials: true, // if backend needs cookies
});

// Request interceptor: attach token before every request
//NOTE: before making request verify token, add this functionality afterwards
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response  interceptor: handle expired tokens
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 403) {
      console.warn("Token expired or invalid.Logging out...");
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default api;
