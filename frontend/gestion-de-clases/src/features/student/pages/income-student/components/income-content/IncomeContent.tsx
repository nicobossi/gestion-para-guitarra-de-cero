import useStudentContext from '@/features/student/pages/income-student/context/useStudent-validate';
import { CauseError } from '@/globals/api/api-error';
import PhoneErrorContainer from './components/phone-error-container/PhoneErrorContainer';
import StudentForm from '@/features/student/pages/income-student/components/income-content/components/income-form/IncomeForm';


const IncomeContent = () => {

    const {error} = useStudentContext();

    const isError = () => error?.isCause(CauseError.RepeatStudentPhone);

    return (
        isError() ? <PhoneErrorContainer /> : <StudentForm />
    )
}

export default IncomeContent;