import { DbErrorMiddleware } from "./dberror.middleware";
import mapCodeStatus from "./mapcode";


const errorMiddelware = new DbErrorMiddleware(mapCodeStatus);

export default errorMiddelware;