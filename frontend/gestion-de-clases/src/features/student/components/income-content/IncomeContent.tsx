import { CauseError } from '@/infraestructure/api/api-error';
import useStudentContext from '../../context/useStudent-validate'
import IncomeForm from '../income-form/IncomeForm'
import PhoneErrorContainer from '../phone-error-container/PhoneErrorContainer';


const IncomeContent = () => {

    const {error} = useStudentContext();

    const isError = () : boolean | undefined => error?.isCause(CauseError.RepeatStudentPhone);

    return (
        <section className = "student-income_form-container">
            {isError() ? <PhoneErrorContainer /> : <IncomeForm />}
        </section>
    )
}

export default IncomeContent;