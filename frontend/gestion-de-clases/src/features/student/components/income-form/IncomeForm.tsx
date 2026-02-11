import GenericContainer from "@/globals/components/generic-container/GenericContainer";
import TitleContainer from "@/globals/components/title-container/TitleContainer";
import FormContent from "@/globals/components/form-content/FormContent";
import incomerSchema from "./form-data";
import incomeInputsData from "./inputs-data";
import useStudentContext from "../../contexts/useStudent-validate";
import './income-form.css'
import type { StudentRequestDto } from "../../adapter/request.dto";


const StudentForm = () => {

    const {add, isLoading} = useStudentContext();

    return (
        <section className = "student-income_form-container">
            <GenericContainer>
                <TitleContainer title = "Ingresar Alumno" />
                <FormContent<StudentRequestDto>
                    schema = {incomerSchema}
                    inputsData = {incomeInputsData} 
                    isLoading = {isLoading}
                    onSubmit = {add} />
            </GenericContainer>
        </section>
    )
}

export default StudentForm;