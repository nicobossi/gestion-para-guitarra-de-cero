import { useContext } from 'react';
import './modal-income.css'
import StudentContext from '../../context/student.context';
import type { Student } from '@/globals/types/student';

/*
    <Link to="/">Volver al Home</Link>
    <Link to="/">Registrar Pago</Link>
    usar el contexto de react reouter.
*/

const ModalIncome = () => {

    const student = useContext(StudentContext)

    return (
        <section className = "modal-income_container">
            <div className = {student ? "modal-container_active" : "modal-container_disable"}>
                <ModalHeader />
                <ModalContent student = {student!}/>
                <ModalFooter />
            </div>
        </section>
    )
}

const ModalHeader = () => {
    return(
        <header className = "modal-income_header">
            <div>
                <h3>Alumno ingresado</h3>
                <button>Cancelar</button>
            </div>
        </header>
    )
}

const ModalContent = ({student} : {student : Student}) => {
    
    return(
        <div className = "modal-income_content">
            <p>
            El ingrestante {student.name} {student.secondName} {student.surname} se registro como un nuevo alumno ¿Desea registrar su pago?
            </p>
        </div>
    )
}

const ModalFooter = () => {
    return (
        <footer className = "modal-income_navegate">
            <div className = "home-link">
                <a href="">Volver a Home</a>
            </div>
            <div className = "payment-link">
                <a href="">Registrar Pago</a>
            </div>
        </footer>
    )
}

export default ModalIncome;