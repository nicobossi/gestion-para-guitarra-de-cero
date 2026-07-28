import incomerSchema from "./schema/form-data";
import incomeInputsData from "./types/inputs-data";
import InsertForm from "@/shared/components/insert-form/InsertForm";
import formStyle from "./styles";
import type { Incomer } from "../../../../adapter/incomer/incomer";

type StudentFormProps = {
    isLoading: boolean
    add: (student: Incomer) => void
}

const StudentForm = ({isLoading, add}: StudentFormProps) => {

    return (
        <InsertForm 
            title = "Ingresar Alumno"
            schema = {incomerSchema}
            inputsData = {incomeInputsData}
            isLoading = {isLoading}
            onSubmit = {add}
            styles = {formStyle}
        />
    )
}

export default StudentForm;