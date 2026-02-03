import axios from "axios";
import config from "./config";

const api = axios.create({
    baseURL: "http://localhost:3000"
})

api.interceptors.response.use(
    response => response,
    (error : unknown) => config(error)
)

export default api;