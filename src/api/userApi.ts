import axios, { InternalAxiosRequestConfig } from "axios";
import Auth from "./Auth";

const userApi = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL_2 || "",
});

userApi.interceptors.request.use(
  (config: InternalAxiosRequestConfig<any>) => {
    if (Auth.isAuthenticated()) {
      config.headers["Authorization"] = `Bearer ${Auth.getToken()}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

userApi.interceptors.response.use(
  (response) => {
    if (response.status === 208) {
      throw response;
    }
    return response;
  },
  (error) => Promise.reject(error)
);

export default userApi;
