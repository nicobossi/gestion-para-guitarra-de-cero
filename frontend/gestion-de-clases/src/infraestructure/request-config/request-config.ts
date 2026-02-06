import axios from "axios";
import handleError from "./config";

const api = axios.create({
    baseURL: "http://localhost:3000"
})

api.interceptors.response.use(
    response => response,
    (error : unknown) => handleError(error)
)

export default api;
