import feeRepository from "../../infraestructure/persistence/repository/instance";
import { FeeServiceImpl } from "./fee.service";



const feeService = new FeeServiceImpl(feeRepository);

export default feeService;