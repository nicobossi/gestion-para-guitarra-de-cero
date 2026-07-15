import inputsData from './inputs-data';
import feeSchema from './form-data';
import './fee-form.css'
import useFeeContext from '../../../../contexts/fee-validate';
import InsertForm from '@/shared/components/insert-form/InsertForm';

const FeeForm = () => {

    const {isLoading, add} = useFeeContext();

    return (
        <section className = "fee-add_form-container">
            <InsertForm 
                title = "Cuota"
                schema = {feeSchema}
                inputsData = {inputsData}
                isLoading = {isLoading}
                onSubmit = {add}
            />
        </section>
    )
}

export default FeeForm;