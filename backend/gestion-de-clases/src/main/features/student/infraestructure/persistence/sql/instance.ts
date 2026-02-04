import { StudentMapper } from "@/main/features/student/infraestructure/adapter/student.mapper";
import { StudentDaoImpl } from "@/main/features/student/infraestructure/persistence/sql/student.dao";
import handlePrismaError from "@/main/shared/infraestructure/persistence/sql/prisma/instance";
import client from "resources/client";


const mapper = new StudentMapper();
const studentDao = new StudentDaoImpl(client, mapper, handlePrismaError);

export default studentDao;