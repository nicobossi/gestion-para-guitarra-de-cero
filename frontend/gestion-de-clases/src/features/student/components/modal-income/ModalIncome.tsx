import './modal-income.css'
import ModalHeader from '@/globals/components/modal-header/ModelHeader';
import ModalContent from '@/globals/components/modal-content/ModalContent';
import { Link } from 'react-router';
import type { ModalIncomeProps } from './modal-income';

/*
    <Link to="/">Registrar Pago</Link>
*/

const ModalIncome = ({student} : ModalIncomeProps) => {

    return (
        <section className = "modal-income_container">
            <div className = {student ? "modal-container_active" : "modal-container_disable"}>
                <ModalHeader 
                    title = "Alumno ingresado" />
                <ModalContent 
                    content = {`El ingrestante ${student.name} ${student.secondName} ${student.surname} se registro como un nuevo alumno ¿Desea registrar su pago?`} />
                <ModalFooter />
            </div>
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

export default ModalIncome;