import axios from "axios";

const OPEN_STACK_URL = process.env.OPEN_STACK_URL;

const axiosInstance = axios.create({
  baseURL: `http://${OPEN_STACK_URL}:8080`,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
