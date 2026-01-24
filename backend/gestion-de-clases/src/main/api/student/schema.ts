import type { StudentRequestDto } from "@/main/dto/student/types/request.dto";
import { date, object, ObjectSchema, string } from "yup";

const studentSchema : ObjectSchema<StudentRequestDto> = object().shape({
    name: string().required("El nombre es requerido"),
    secondName: string(),
    surname: string().required("El apellido es requerido"),
    phone: string().length(10).required("El teléfono es requerido"),
    submissionDate: date().required("La fecha de ingreso es requerida")
})

export default studentSchema;

