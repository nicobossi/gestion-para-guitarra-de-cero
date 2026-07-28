import incomerSchema from "./schema/form-data";
import incomeInputsData from "./types/inputs-data";
import './income-form.css'
import InsertForm from "@/shared/components/insert-form/InsertForm";
import type { Student } from "@/shared/domain/student/student";
import formStyle from "./styles";

type StudentFormProps = {
    isLoading: boolean
    add: (student: Student) => void
}

const StudentForm = ({isLoading, add}: StudentFormProps) => {

    return (
        <section className = "student-income_form-container">
            <InsertForm 
                title = "Ingresar Alumno"
                schema = {incomerSchema}
                inputsData = {incomeInputsData}
                isLoading = {isLoading}
                onSubmit = {add}
                styles = {formStyle}
            />
        </section>
    )
}

export default StudentForm;