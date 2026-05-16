import { BodyValidatorMiddleware } from "@/main/shared/infraestructure/middlewares/body-validator/body-validator.middleware";
import feeSchema from "../schema/schema";
import { FeeRouter } from "./fee.router";
import feeController from "../../application/controller/instance";


const bodyValidator = new BodyValidatorMiddleware(feeSchema);
const feeRouter = new FeeRouter(bodyValidator, feeController);

export default feeRouter;