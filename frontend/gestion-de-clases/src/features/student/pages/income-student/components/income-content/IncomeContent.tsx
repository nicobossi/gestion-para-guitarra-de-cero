import PhoneErrorMessage from './components/phone-error-container/PhoneErrorContainer';
import StudentForm from '@/features/student/pages/income-student/components/income-content/components/income-form/IncomeForm';
import { useValidateAddContext } from '../../context/add-student';
import { ModelCause } from '@/globals/api/types/cause';

const IncomeContent = () => {

    const { error, add, isLoading, freshData } = useValidateAddContext();

    const isError = () => error && error.isCause(ModelCause.RepeatNumberPhone);

    return (
        <>
            <StudentForm add = {add} isLoading = {isLoading} />
            {isError() && <PhoneErrorMessage onFresh = {freshData} />}
        </>
    )
}

export default IncomeContent;