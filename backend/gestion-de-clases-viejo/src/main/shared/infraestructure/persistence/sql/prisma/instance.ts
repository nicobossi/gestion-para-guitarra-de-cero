import mapError from "../../errors/uknow-errors/map-error";
import { HandlerPrismaError } from "./handler-error";



const handlePrismaError : HandlerPrismaError = new HandlerPrismaError(mapError);

export default handlePrismaError;