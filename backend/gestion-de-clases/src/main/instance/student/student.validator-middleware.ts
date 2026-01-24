import { ValidatorMiddleware } from "@/main/api/http-request/http-request";
import { HttpResponse } from "@/main/api/http-response/http-response";


const httpResponse = new HttpResponse();
const validatorMiddleware = new ValidatorMiddleware(httpResponse);

export default validatorMiddleware;