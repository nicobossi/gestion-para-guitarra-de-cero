import { CauseError } from '../../../../../../globals/api/errors/api-error';
import PhoneErrorMessage from './components/phone-error-container/PhoneErrorContainer';
import StudentForm from '@/features/student/pages/income-student/components/income-content/components/income-form/IncomeForm';
import { useValidateAddContext } from '../../context/add-student';

const IncomeContent = () => {

    const { error, add, isLoading, freshData } = useValidateAddContext();

    const isError = () => error && error.isCause(CauseError.RepeatStudentPhone);

    return (
        <>
            <StudentForm add = {add} isLoading = {isLoading} />
            {isError() && <PhoneErrorMessage onFresh = {freshData} />}
        </>
    )
}

export default IncomeContent;