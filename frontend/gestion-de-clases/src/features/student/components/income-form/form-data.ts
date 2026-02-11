import { object, string, type ObjectSchema } from "yup";
import type { StudentRequestDto } from "../../adapter/request.dto";


const incomerSchema : ObjectSchema<StudentRequestDto> = object().shape({
    name: 
        string().
        required("el campo es requerido").
        min(3).
        matches(/^[\p{L}]+$/u, "Solo se permiten letras sin espacios"),    
    secondName: 
        string().
        matches(/^[\p{L}\s]+$/u, {message: "Solo se permiten letras", excludeEmptyString: true}). 
        transform(value => value.length > 0 ? value : undefined),
    surname: 
        string().
        required("el campo es requerido"). 
        min(3).
        matches(/^[\p{L}\s]+$/u, "Solo se permiten letras"),   
    phone: 
        string().
        required("el campo es requerido").
        length(10).
        matches(/^[0-9]+$/, "Solo se permiten números"), 
    submissionDate: 
        string().
        required("el campo es requerido"). 
        test(
            "time required",
            "El valor debe ser una fecha",
            (value : string) => !isNaN(Date.parse(value))
        )
})

export default incomerSchema;