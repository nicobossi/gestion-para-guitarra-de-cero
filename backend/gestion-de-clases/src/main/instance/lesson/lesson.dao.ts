import { LessonMapper } from "@/main/dto/lesson/lesson.mapper";
import { LessonSqlDaoImpl } from "@/main/persistence/sql/lesson/lesson.dao";
import type { LessonSqlDao } from "@/main/persistence/sql/lesson/lesson.dao.i";
import client from "resources/client";


const lessonMapper : LessonMapper = new LessonMapper();
const lessonDao : LessonSqlDao = new LessonSqlDaoImpl(client, lessonMapper);

export default lessonDao;