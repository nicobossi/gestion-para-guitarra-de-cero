import { StudentMapper } from "@/main/features/student/infraestructure/dtos/student.mapper";
import { StudentDaoImpl } from "@/main/features/student/infraestructure/persistence/sql/student.dao";
import client from "resources/client";


const mapper = new StudentMapper();
const studentDao = new StudentDaoImpl(client, mapper);

export default studentDao;