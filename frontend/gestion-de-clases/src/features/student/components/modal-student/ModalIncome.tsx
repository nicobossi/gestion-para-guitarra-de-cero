import './modal-student.css'
import ModalHeader from '@/globals/components/modal-header/ModelHeader';
import ModalContent from '@/globals/components/modal-content/ModalContent';
import { Link } from 'react-router';
import type { ModalIncomeProps } from './modal-student';
import ModalContainer from '@/globals/components/modal-container/ModalContainer';
import useStudentContext from '../../contexts/useStudent-validate';

/*
    <Link to="/">Registrar Pago</Link>
*/

const ModalStudent = ({student} : ModalIncomeProps) => {

    const {freshData} = useStudentContext();

    return (
        <section className = "modal-income_container">
            <ModalContainer data = {student}>
                <ModalHeader 
                    onSubmit = {freshData}
                    title = "Alumno ingresado" />
                <ModalContent 
                    content = {`El ingrestante ${student.name} ${student.secondName} ${student.surname} se registro como un nuevo alumno ¿Desea registrar su pago?`} />
                <ModalFooter />
            </ModalContainer>
        </section>
    )
}

const ModalFooter = () => {
    return (
        <footer className = "modal-income_navegate">
            <div className = "home-link">
                <Link to="/">Volver al Home</Link>
            </div>
            <div className = "payment-link">
                <a href="">Registrar Pago</a>
            </div>
        </footer>
    )
}

export default ModalStudent;