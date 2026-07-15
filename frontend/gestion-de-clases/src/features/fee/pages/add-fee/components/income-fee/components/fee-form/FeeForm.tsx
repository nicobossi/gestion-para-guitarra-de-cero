import TitleContainer from '@/shared/components/title-container/TitleContainer';
import FormContent from '@/shared/components/form-content/FormContent';
import inputsData from './inputs-data';
import feeSchema from './form-data';
import GenericContainer from '@/shared/components/generic-container/GenericContainer';
import './fee-form.css'
import useFeeContext from '../../../../contexts/fee-validate';

const FeeForm = () => {

    const {isLoading, add} = useFeeContext();

    return (
        <section className = "fee-add_form-container">
            <div className = "fee-add_min-container">
                <GenericContainer>
                    <TitleContainer title = "Cuota" />
                    <FormContent 
                        schema = {feeSchema}
                        inputsData = {inputsData}
                        isLoading = {isLoading}
                        onSubmit = {add}/>
                </GenericContainer>
            </div>
        </section>
    )
}

export default FeeForm;