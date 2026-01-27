import './income-form.css'
import type { IncomeFormContainerProps } from './income-form'
import FormContainer from '@/globals/components/form-container/FormContainer'
import TitleContainer from '@/globals/components/title-container/TitleContainer'
import FormContent from '@/globals/components/form-content/FormContent'
import incomeInputsData from './inputs-data'
import type { Student } from '@/globals/types/student'

const IncomeFormContainer = ({onSubmit} : IncomeFormContainerProps) => {

    return (
        <section className = "student-income_form-container">
            <FormContainer>
                <TitleContainer title = "Ingresar Alumno" />
                <FormContent<Student> inputsData = {incomeInputsData} onSubmit={onSubmit} />
            </FormContainer>
        </section>
    )
}

export default IncomeFormContainer;