import inputsData from './inputs-data';
import feeSchema from './form-data';
import InsertForm from '@/shared/components/insert-form/InsertForm';
import type { Fee } from '@/shared/domain/fee/fee';
import { formStyles } from './styles';

type FeeFormProps = {
    isLoading: boolean
    add: (fee: Fee) => void
}

const FeeForm = ({isLoading, add}: FeeFormProps) => {

    return (
        <InsertForm 
            title = "Cuota"
            schema = {feeSchema}
            inputsData = {inputsData}
            isLoading = {isLoading}
            onSubmit = {add}
            styles = {formStyles}
        />
    )
}

export default FeeForm;