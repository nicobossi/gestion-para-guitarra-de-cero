import TitleContainer from '@/globals/components/title-container/TitleContainer';
import FormContent from '@/globals/components/form-content/FormContent';
import useFeeContext from '../../contexts/fee-validate';
import inputsData from './inputs-data';
import feeSchema from './form-data';
import GenericContainer from '@/globals/components/generic-container/GenericContainer';
import './fee-form.css'

const FeeForm = () => {

    const {isLoading, add} = useFeeContext();

    return (
        <section className = "fee-add_form-container">
            <GenericContainer>
                <TitleContainer title = "Cuota" />
                <FormContent 
                    schema = {feeSchema}
                    inputsData = {inputsData}
                    isLoading = {isLoading}
                    onSubmit = {add}/>
            </GenericContainer>
        </section>
    )
}

export default FeeForm;