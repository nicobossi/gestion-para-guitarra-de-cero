import inputsData from './inputs-data';
import feeSchema from './form-data';
import './fee-form.css'
import InsertForm from '@/shared/components/insert-form/InsertForm';
import { useValidateAddContext } from '../../../../contexts/add-fee';

const FeeForm = () => {

    const {isLoading, add} = useValidateAddContext();

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