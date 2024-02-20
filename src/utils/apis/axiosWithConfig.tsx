import axios from "axios";
import configUrl from "../../../config";

let JWT_TOKEN = "";

const axiosWithConfig = axios.create();

export const setAxiosConfig = (token: string) => {
  JWT_TOKEN = token;
};

axiosWithConfig.interceptors.request.use((axiosConfig) => {
  axiosConfig.baseURL = configUrl.baseurl;
  axiosConfig.headers.Authorization = `Bearer ${JWT_TOKEN}`;

  return axiosConfig;
});

export default axiosWithConfig;
