import './modal-student.css'
import type { ModalIncomeProps } from './modal-student';
import useStudentContext from '@/features/student/pages/income-student/context/useStudent-validate';
import SuccessModal from '@/shared/components/success-modal/SuccessModal';
import LinkNavegation from '@/shared/components/link-navegation/LinkNavegation';

const ModalStudent = ({student} : ModalIncomeProps) => {

    const {freshData} = useStudentContext();

    return (
        <section className = "modal-income_container">
            <SuccessModal 
                data = {student}
                title = 'Alumno ingresado'
                message = {`El ingrestante ${student.name} ${student.secondName ?? ''} ${student.surname} se registro como un nuevo alumno ¿Desea registrar su pago?`}
                close = {freshData}
                link = {() => <LinkNavegation path = '' message = 'Registrar Pago'/>} 
            />
        </section>
    )
}

export default ModalStudent;