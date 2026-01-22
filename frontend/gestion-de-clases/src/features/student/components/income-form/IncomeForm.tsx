import FormContainer from '@/globals/components/form-container/FormContainer'
import './income-form.css'
import incomeInputsData from './inputs-data'
import type { IncomeFormContainerProps } from './income-form'
import TitleContainer from '@/globals/components/title-container/TitleContainer'



const IncomeFormContainer = ({onSubmit} : IncomeFormContainerProps) => {

    return (
        <section className = 'student-income_form-container'>
            <TitleContainer title = 'Ingresar Alumno' />
            <FormContainer 
                inputsData = {incomeInputsData}
                onSubmit = {onSubmit}
            />
        </section>
    )
}

export default IncomeFormContainer;