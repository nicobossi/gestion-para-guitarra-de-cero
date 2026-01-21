import { StudentEntityMapper } from "@/main/dto/entity-mappers/student/student-mapper";
import { StudentDaoImpl } from "@/main/persistence/sql/student-sql/student-dao";
import client from "resources/client";


const mapper = new StudentEntityMapper();
const studentDao = new StudentDaoImpl(client, mapper);

export default studentDao;