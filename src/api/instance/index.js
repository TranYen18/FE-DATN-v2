import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api",
});
instance.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export default instance;
