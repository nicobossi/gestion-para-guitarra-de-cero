import { LessonMapper } from "@/main/features/lesson/infraestructure/dtos/lesson.mapper";
import { LessonSqlDaoImpl } from "@/main/features/lesson/infraestructure/persistence/sql/lesson.dao";
import type { LessonSqlDao } from "@/main/features/lesson/infraestructure/persistence/sql/lesson.dao.i";
import client from "resources/client";


const lessonMapper : LessonMapper = new LessonMapper();
const lessonDao : LessonSqlDao = new LessonSqlDaoImpl(client, lessonMapper);

export default lessonDao;