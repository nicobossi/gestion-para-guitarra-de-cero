import GenericContainer from "@/shared/components/generic-container/GenericContainer";
import TitleContainer from "@/shared/components/title-container/TitleContainer";
import FormContent from "@/shared/components/form-content/FormContent";
import incomerSchema from "./form-data";
import incomeInputsData from "./inputs-data";
import './income-form.css'
import useStudentContext from "@/features/student/pages/income-student/context/useStudent-validate";
import type { StudentRequestDto } from "@/features/student/pages/income-student/adapter/request.dto";

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