import type { Student } from "@/main/domain/student/student";
import type { StudentService } from "./student-service.i";
import type { StudentRepository } from "@/main/persistence/repository/student/student-repository.i";
import { RepeatEntityException } from "@/main/persistence/sql/repeat-entity-exception";


export class StudentServiceImpl implements StudentService {
    
    private repository : StudentRepository;

    constructor(repository : StudentRepository) {
        this.repository = repository;
    }
    
    async income(student: Student) : Promise<Student> {
        try {
            return await this.repository.income(student);
        }
        catch(error : unknown) {
            if(error instanceof RepeatEntityException) throw student.manyPhoneException();
            else throw new Error("") // ver como manejar excepciones
        }
    }

    /*
        ¿Qué devuelve initLesson()? ¿El estudiante del modelo debería guardarse las clases?
        ¿Quién envuelve las excepciones para la siguiente capa?

        1. patear al modelo la responsabilidad de crear las clases: student.initLesson();
        2. pasar al alumno y las clases al repositorio, por separado. Hacer un mensaje para que devuelve los elementos inotables de las clases.
        3. guardar las clases y al estudiante, devolviendo al estudiante con sus clases incluidas. No atrapar excepciones en el repository.
        4. cazar las excepciones en el servicio.
    */
}