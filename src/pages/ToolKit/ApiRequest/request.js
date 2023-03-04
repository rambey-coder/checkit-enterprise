import axios from "axios";

axios.defaults.baseURL =
  "https://site--checkit-procurement--gqr8p4b5dyhw.code.run/api/";

const axiosInstance = axios.create({
  headers: {
    "Access-Control-Allow-Credentials": true,
    "content-type": "Application/json",
  },
  timeout: 80000,
  withCredentials: false,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("checkitAccessToken");
    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      };
    }
    return config;
  },
  (err) => {
    Promise.reject(err);
  }
);

export default axiosInstance;
