import { BodyValidatorMiddleware } from "@/main/shared/infraestructure/middlewares/body-validator/body-validator.middleware";
import { HttpResponse } from "@/main/shared/infraestructure/http/http-response/http-response";


const httpResponse = new HttpResponse();
const validatorMiddleware = new BodyValidatorMiddleware(httpResponse);

export default validatorMiddleware;