import type { ModalHeaderProps } from './modal-header';
import { styles } from './styles';

const ModalHeader = ({title, css, onSubmit} : ModalHeaderProps) => {

    return (
        <header className = {styles(css)}>
            <div>
                <h3>{title}</h3>
                <button onClick = {onSubmit}>Cancelar</button>
            </div>
        </header>
    )
}

export default ModalHeader;