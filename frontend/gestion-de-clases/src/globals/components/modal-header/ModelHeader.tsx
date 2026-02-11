import type { ModalHeaderProps } from './modal-header';
import './modal-header.css'


const ModalHeader = ({title} : ModalHeaderProps) => {
    return (
        <header className = "modal_header">
            <div>
                <h3>{title}</h3>
                <button>Cancelar</button>
            </div>
        </header>
    )
}

export default ModalHeader;