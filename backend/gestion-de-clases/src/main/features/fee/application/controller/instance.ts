import { FeeMapper } from "../../infraestructure/adapter/fee.mapper";
import feeService from "../service/instance";
import { FeeControllerRest } from "./fee.controller";


const feeMapper = new FeeMapper();
const feeController = new FeeControllerRest(feeService, feeMapper);

export default feeController;