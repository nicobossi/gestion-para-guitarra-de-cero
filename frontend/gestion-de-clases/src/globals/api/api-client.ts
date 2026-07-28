import axios from "axios";
import handleError from "./services/handle-error.service";

const api = axios.create({
    baseURL: "http://localhost:3000"
})

api.interceptors.response.use(
    response => response,
    (error) => handleError(error)
)

export default api;
