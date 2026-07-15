import incomerSchema from "./form-data";
import incomeInputsData from "./inputs-data";
import './income-form.css'
import useStudentContext from "@/features/student/pages/income-student/context/useStudent-validate";
import InsertForm from "@/shared/components/insert-form/InsertForm";

const StudentForm = () => {

    const {add, isLoading} = useStudentContext();

    return (
        <section className = "student-income_form-container">
            <InsertForm 
                title = "Ingresar Alumno"
                schema = {incomerSchema}
                inputsData = {incomeInputsData}
                isLoading = {isLoading}
                onSubmit = {add}
            />
        </section>
    )
}

export default StudentForm;