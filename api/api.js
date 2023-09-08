import axios from "axios";

const api = axios.create({
  //   baseURL: "http://localhost:3000/api",
  baseURL: "https://us-central1-scope-backend-93b9d.cloudfunctions.net/app",
});

export default api;
