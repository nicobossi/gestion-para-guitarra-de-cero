import { ValidatorMiddleware } from "@/main/api/middleware/validator.middleware";
import { HttpResponse } from "@/main/api/http-response";


const httpResponse = new HttpResponse();
const validatorMiddleware = new ValidatorMiddleware(httpResponse);

export default validatorMiddleware;