import httpResponse from "../../http/http-response/instance";
import { DbErrorMiddelware } from "./db-errors.middleware";



const dbErrorMiddelware = new DbErrorMiddelware(httpResponse);

export default dbErrorMiddelware;