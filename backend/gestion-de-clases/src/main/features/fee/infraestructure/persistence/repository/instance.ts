import feeDao from "../sql/instance";
import { FeeRepositoryImpl } from "./fee.repository";



const feeRepository = new FeeRepositoryImpl(feeDao);

export default feeRepository;