import { useContext } from 'react';
import './modal-income.css'
import StudentContext from '../../context/student.context';

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
                <header className = "modal-income_header">
                    <h3>Alumno ingresado</h3>
                    <button>Cancelar</button>
                </header>
                <div className = "modal-income_content">
                    <p>
                    El ingrestante {student?.name} {student?.secondName} {student?.surname} es un nuevo alumno ¿Desea registrar su pago?
                    </p>
                </div>
                <footer className = "modal-income_navegate">
                    <a href="">Volver al Home</a>
                    <a href="">Registrar Pago</a>
                </footer>
            </div>
        </section>
    )
}

export default ModalIncome;