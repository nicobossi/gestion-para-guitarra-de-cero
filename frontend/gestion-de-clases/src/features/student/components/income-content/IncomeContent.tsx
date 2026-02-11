import { CauseError } from '@/infraestructure/api/api-error';
import useStudentContext from '../../contexts/useStudent-validate'
import StudentForm from '../income-form/IncomeForm'
import PhoneErrorContainer from '../phone-error-container/PhoneErrorContainer';


const IncomeContent = () => {

    const {error} = useStudentContext();

    const isError = () : boolean | undefined => error?.isCause(CauseError.RepeatStudentPhone);

    return (
        <section>
            {isError() ? <PhoneErrorContainer /> : <StudentForm />}
        </section>
    )
}

export default IncomeContent;