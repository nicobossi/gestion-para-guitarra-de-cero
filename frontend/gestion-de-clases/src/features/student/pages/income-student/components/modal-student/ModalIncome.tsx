import './modal-student.css'
import type { ModalIncomeProps } from './modal-student';
import SuccessModal from '@/shared/components/success-modal/SuccessModal';
import LinkNavegation from '@/shared/components/link-navegation/LinkNavegation';
import { useValidateAddContext } from '../../context/add-student';
import { css } from '@styled-system/css';
import { token } from '@styled-system/tokens';
import type { SystemStyleObject } from '@styled-system/types';

const ModalStudent = ({student} : ModalIncomeProps) => {

    const { freshData } = useValidateAddContext();
    const gradient = css.raw({ bg: token("gradients.student") });

    return (
        <section className = "modal-income_container">
            <SuccessModal 
                title = 'Alumno ingresado'
                message = {`El ingrestante ${student.name} ${student.secondName ?? ''} ${student.surname} se registro como un nuevo alumno ¿Desea registrar su pago?`}
                close = {freshData}
                bg = {gradient}
                link = {(styles: SystemStyleObject) => <LinkNavegation path = '' message = 'registrar pago' styles = {styles}/>} 
            />
        </section>
    )
}

export default ModalStudent;