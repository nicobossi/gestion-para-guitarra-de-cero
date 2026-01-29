import httpResponse from "../../http/http-response/instance";
import { ErrorHandler } from "./error-handler.middleware";


const errorMiddelware = new ErrorHandler(httpResponse);

export default errorMiddelware;