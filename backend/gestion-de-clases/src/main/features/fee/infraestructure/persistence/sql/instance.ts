import client from "resources/client";
import { FeeDaoImpl } from "./fee.dao"
import type { FeeDao } from "./fee.dao.i"
import handlePrismaError from "@/main/shared/infraestructure/persistence/sql/prisma/instance";
import { FeeMapper } from "../../adapter/fee.mapper";


const feeMapper : FeeMapper = new FeeMapper();
const feeDao : FeeDao = new FeeDaoImpl(client, feeMapper, handlePrismaError);

export default feeDao;