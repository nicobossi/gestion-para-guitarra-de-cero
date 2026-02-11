import type { ModalHeaderProps } from './modal-header';
import './modal-header.css'


const ModalHeader = ({title, onSubmit} : ModalHeaderProps) => {

    return (
        <header className = "modal_header">
            <div>
                <h3>{title}</h3>
                <button onClick = {onSubmit}>Cancelar</button>
            </div>
        </header>
    )
}

export default ModalHeader;