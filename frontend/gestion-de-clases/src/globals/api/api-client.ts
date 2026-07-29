import axios from "axios";
import responseMiddleware from "./middlewares/response";

const api = axios.create({
    baseURL: "http://localhost:3000"
})

responseMiddleware(api);

export default api;
