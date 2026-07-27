import { CauseError } from '@/globals/api/api-error';
import PhoneErrorContainer from './components/phone-error-container/PhoneErrorContainer';
import StudentForm from '@/features/student/pages/income-student/components/income-content/components/income-form/IncomeForm';
import { useValidateAddContext } from '../../context/add-student';

const IncomeContent = () => {

    const { error, add, isLoading, freshData } = useValidateAddContext();

    const isError = () => error?.isCause(CauseError.RepeatStudentPhone);

    return (
        isError() ? 
            <PhoneErrorContainer onFresh = {freshData} /> : 
            <StudentForm add = {add} isLoading = {isLoading} />
    )
}

export default IncomeContent;