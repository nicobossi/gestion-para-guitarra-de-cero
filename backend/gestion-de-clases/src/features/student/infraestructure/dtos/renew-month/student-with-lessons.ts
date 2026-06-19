import { StudentGetPayload } from '../../../../../../generated/prisma/models';
import { Student } from '../../../domain/student/student';
import { CreateLesson } from './create-lesson.mapper';

type StudentWithLessonsUpdate = StudentGetPayload<{
    include: { lessons: true };
}>;

export class StudentWithLessons {
    static sqlToModel(student: StudentWithLessonsUpdate): Student {
        return new Student(
            student.firstName,
            student.surname,
            student.phone,
            student.submissionDate,
            student.secondName,
            student.id,
            CreateLesson.sqlToModel(student.lessons),
        );
    }
}
