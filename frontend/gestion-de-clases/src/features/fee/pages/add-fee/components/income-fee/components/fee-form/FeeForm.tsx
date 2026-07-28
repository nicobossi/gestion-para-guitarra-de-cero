import inputsData from './types/inputs-data';
import feeSchema from './types/form-data';
import InsertForm from '@/shared/components/insert-form/InsertForm';
import { formStyles } from './styles';
import type { AddFee } from './types/schema';

type FeeFormProps = {
    isLoading: boolean
    add: (fee: AddFee) => void
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