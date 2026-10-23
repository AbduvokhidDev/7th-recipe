import axios from "axios";

const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

client.interceptors.request.use(
  async (config) => {
    try {
      const session = window.Clerk?.session;

      if (session) {
        const token = await session.getToken();

        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      }

      return config;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  (error) => Promise.reject(error),
);

client.interceptors.response.use(
  (response) => response,
  (error) => {
    const responseData = error.response?.data;
    const message =
      responseData?.error ||
      responseData?.message ||
      error.message ||
      "Server bilan bog‘lanishda xatolik yuz berdi.";

    const customError = new Error(
      typeof message === "string" ? message : JSON.stringify(message),
    );

    customError.details = responseData?.details || [];
    customError.status = error.response?.status || null;
    customError.data = responseData || null;

    return Promise.reject(customError);
  },
);

export default client;
