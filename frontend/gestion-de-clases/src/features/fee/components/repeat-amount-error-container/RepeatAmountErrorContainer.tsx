import useStudentContext from "@/features/student/contexts/useStudent-validate";
import ErrorContainer from "@/globals/components/error-container/ErrorContainer";
import './repeat-amount-error-container.css'

const RepeatAmountErrorContainer = () => {

    const {freshError} = useStudentContext();

    return (
        <div className = 'repeat-amount-error-container'>
            <ErrorContainer 
                content = "El monto de la cuota ya se encuentra registrado"
                onSubmit = {freshError}
            />
        </div>
    )
}

export default RepeatAmountErrorContainer;