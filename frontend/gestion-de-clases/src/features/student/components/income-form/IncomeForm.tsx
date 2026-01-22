import './income-form.css'
import incomeInputsData from './inputs-data'
import type { IncomeFormContainerProps } from './income-form'
import FormContainer from '@/globals/components/form-container/FormContainer'



const IncomeFormContainer = ({onSubmit} : IncomeFormContainerProps) => {

    return (
        <section className = 'student-income_form-container'>
            <FormContainer 
                inputsData = {incomeInputsData}
                onSubmit = {onSubmit}
                title = 'Ingresar Alumno'
                />
        </section>
    )
}

export default IncomeFormContainer;