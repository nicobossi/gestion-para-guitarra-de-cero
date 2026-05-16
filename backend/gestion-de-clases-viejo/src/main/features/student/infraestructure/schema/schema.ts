import { object, ObjectSchema, string } from "yup";
import type { StudentRequestDto } from "../adapter/request.dto";

const studentSchema : ObjectSchema<StudentRequestDto> = object().shape({
    name: 
        string().
        required("El nombre es requerido").
        matches(/^[\p{L}]+$/u, "Solo se permiten letras"),    
    secondName: 
        string().
        matches(/^[\p{L}]+$/u, "Solo se permiten letras"),  
    surname: 
        string().
        required("El apellido es requerido").
        matches(/^[\p{L}]+$/u, "Solo se permiten letras"),  
    phone: 
        string().
        length(10).
        required("El teléfono es requerido").
        matches(/^[0-9]+$/, "Solo se permiten números"),  
    submissionDate: 
        string().
        required("La fecha de ingreso es requerida").
        test(
            "time required",
            "El campo debe ser una fecha",
            (value : string) => !isNaN(Date.parse(value))
        )
})

export default studentSchema;

