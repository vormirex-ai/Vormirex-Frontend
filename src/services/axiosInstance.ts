// import axios from "axios";

// import { store } from "@/store/store";

// const API_ROOT = import.meta.env.VITE_API_URL || "http://localhost/api";

// export const axiosInstance = axios.create({
//   baseURL: API_ROOT,
//   withCredentials: true,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// axiosInstance.interceptors.request.use((config) => {
//   const token = store.getState().auth.token;

//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }

//   return config;
// });
import axios from "axios";
import { store } from "@/store/store";
import { setCredentials, logout } from "@/store/slice/authSlice";

const API_ROOT = import.meta.env.VITE_API_URL || "http://localhost/api";

export const axiosInstance = axios.create({
  baseURL: API_ROOT,
  withCredentials: true,
});

let isRefreshing = false;

let failedQueue: any[] = [];

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};

// ======================
// REQUEST INTERCEPTOR
// ======================

axiosInstance.interceptors.request.use(
  (config) => {
    const token = store.getState().auth.token;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

// ======================
// RESPONSE INTERCEPTOR
// ======================

axiosInstance.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config;

    if (
      (error.response?.status === 401 || error.response?.status === 403) &&
      !originalRequest._retry
    ) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers.Authorization = `Bearer ${token}`;

            return axiosInstance(originalRequest);
          })
          .catch((err) => Promise.reject(err));
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const response = await axios.post(
          `${API_ROOT}/auth/refresh-token`,
          {},
          {
            withCredentials: true,
          },
        );

        const newAccessToken = response.data.accessToken;

        const user = store.getState().auth.user;

        store.dispatch(
          setCredentials({
            user,
            token: newAccessToken,
          }),
        );

        processQueue(null, newAccessToken);

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        return axiosInstance(originalRequest);
      } catch (refreshError) {
        processQueue(refreshError, null);

        store.dispatch(logout());

        window.location.href = "/login";

        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  },
);
