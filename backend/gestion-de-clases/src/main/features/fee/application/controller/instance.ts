import { FeeMapper } from "../../infraestructure/adapter/fee.mapper";
import feeService from "../service/instance";
import { FeeController } from "./fee.controller";


const feeMapper = new FeeMapper();
const feeController = new FeeController(feeService, feeMapper);

export default feeController;