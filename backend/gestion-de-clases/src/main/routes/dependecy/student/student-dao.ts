import { StudentEntityMapper } from "@/main/dto/entity-mappers/student/student-mapper";
import { StudentDao } from "@/main/persistence/sql/student-sql/student-sql";
import client from "resources/context";


const mapper = new StudentEntityMapper();
const studentDao = new StudentDao(client, mapper);

export default studentDao;