import axios from "axios";

axios.defaults.baseURL =
  "https://site--checkit-procurement--gqr8p4b5dyhw.code.run/api/";

const token = sessionStorage.getItem("checkitAccessToken")

const axiosInstance = axios.create({
  headers: {
    "Access-Control-Allow-Credentials": true,
    "content-type": "Application/json",
    "Access-Control-Allow-Origin": "*",
    Authorization: `Bearer ${token}`,
  },
  timeout: 80000,
  withCredentials: false,
});


export default axiosInstance;
