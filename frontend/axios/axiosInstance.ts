import axios from "axios";

const OPEN_STACK_URL = process.env.NEXT_PUBLIC_OPEN_STACK_URL;

const axiosInstance = axios.create({
  baseURL: `https://${OPEN_STACK_URL}`,
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
    return Promise.reject(new Error(error));
  }
);

export default axiosInstance;
