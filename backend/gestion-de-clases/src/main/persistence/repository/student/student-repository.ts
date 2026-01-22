import type { Lesson } from "@/main/domain/lesson/lesson";
import type { Student } from "@/main/domain/student/student";
import type { StudentRepository } from "./student-repository.i";
import type { StudentDao as StudentSqlDao } from "../../sql/student/student-dao.i";
import type { LessonSqlDao } from "../../sql/lesson/lesson-dao.i";


export class StudentRepositoryImpl implements StudentRepository {

    private readonly studentSqlDao : StudentSqlDao;
    private readonly lessonSqlDao : LessonSqlDao;

    constructor(studentSqlDao : StudentSqlDao, lessonSqlDao : LessonSqlDao) {
        this.studentSqlDao = studentSqlDao;
        this.lessonSqlDao = lessonSqlDao;
    }

    async income(student: Student): Promise<Student> {
        return await this.studentSqlDao.save(student);
    }

    async resumeLessons(student: Student, lessons: Lesson[]) : Promise<Student> {
        this.lessonSqlDao.saveMany(lessons);
        return await this.studentSqlDao.save(student); // hay que hacer otro mensaje para que lo devuelvacon sus clases
    }

}