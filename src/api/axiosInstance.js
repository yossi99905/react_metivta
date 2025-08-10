import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3003",
  withCredentials: true,
});

export const setAuthToken = (token) => {
  if (token) {
    instance.defaults.headers.common['x-api-key'] = token; // או Authorization
  } else {
    delete instance.defaults.headers.common['x-api-key'];
  }
};

export default instance;
