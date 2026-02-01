import FormContainer from "@/globals/components/form-container/FormContainer";
import TitleContainer from "@/globals/components/title-container/TitleContainer";
import FormContent from "@/globals/components/form-content/FormContent";
import incomerSchema from "./form-data";
import incomeInputsData from "./inputs-data";
import useStudentContext from "../../context/useStudent-validate";
import './income-form.css'
import type { StudentRequestDto } from "../../adapter/request.dto";


const IncomeForm = () => {

    const {income, isLoading} = useStudentContext();

    return (
        <section className = "student-income_form-container">
            <FormContainer>
                <TitleContainer title = "Ingresar Alumno" />
                <FormContent<StudentRequestDto>
                    schema = {incomerSchema}
                    inputsData = {incomeInputsData} 
                    isLoading = {isLoading}
                    onSubmit = {income} />
            </FormContainer>
        </section>
    )
}

export default IncomeForm;