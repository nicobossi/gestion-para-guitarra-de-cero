import incomerSchema from "./form-data";
import incomeInputsData from "./inputs-data";
import './income-form.css'
import InsertForm from "@/shared/components/insert-form/InsertForm";
import { useValidateAddContext } from "../../../../context/add-student";

const StudentForm = () => {

    const { add, isLoading } = useValidateAddContext();

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