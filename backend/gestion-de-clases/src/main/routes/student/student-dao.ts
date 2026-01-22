import { StudentMapper } from "@/main/dto/student/student-mapper";
import { StudentDaoImpl } from "@/main/persistence/sql/student/student-dao";
import client from "resources/client";


const mapper = new StudentMapper();
const studentDao = new StudentDaoImpl(client, mapper);

export default studentDao;