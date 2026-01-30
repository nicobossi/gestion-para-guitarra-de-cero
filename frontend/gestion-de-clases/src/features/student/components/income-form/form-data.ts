import { date, object, string, type ObjectSchema } from "yup";
import type { StudentRequestDto } from "../../adapter/request.dto";


const incomeFormSchema : ObjectSchema<StudentRequestDto> = object().shape({
    name: string().required("el campo es requerido"),
    secondName: string(),
    surname: string().required("el campo es requerido"),
    phone: string().required("el campo es requerido"),
    submissionDate: date().required("el campo es requerido")
})

export default incomeFormSchema;