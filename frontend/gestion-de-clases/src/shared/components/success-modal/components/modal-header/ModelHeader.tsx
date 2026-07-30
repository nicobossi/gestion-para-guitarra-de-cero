import type { ModalHeaderProps } from './modal-header';
import { styles } from './styles';
import closePath from '@/assets/toast/close icon.svg'

const ModalHeader = ({content, css, onSubmit} : ModalHeaderProps) => {

    const { header, container, title, closeIcon } = styles(css)();

    return (
        <header className = {header}>
            <div className = {container}>
                <h3 className = {title}>{content}</h3>
                <figure className = {closeIcon} >
                    <img 
                        src = {closePath} 
                        alt = "Icono de cierre para la modal" 
                        onClick = {onSubmit} 
                    />
                </figure>
            </div>
        </header>
    )
}

export default ModalHeader;