import axios from "axios";

const api = axios.create({
  baseURL: "https://api.7october.app/bc/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
