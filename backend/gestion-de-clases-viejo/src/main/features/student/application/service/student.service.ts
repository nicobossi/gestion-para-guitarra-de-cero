import type { Student } from "@/main/features/student/domain/student";
import type { StudentService } from "./student.service.i";
import type { StudentRepository } from "@/main/features/student/infraestructure/persistence/repository/student.repository.i";
import { RepeatEntityException } from "@/main/shared/infraestructure/persistence/errors/exceptions/exceptions";


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
            else throw error;
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