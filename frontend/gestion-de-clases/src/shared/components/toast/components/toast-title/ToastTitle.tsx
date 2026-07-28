import './styles.css';
import closeIcon from '@/assets/toast/close icon.svg';

type ToastTitleProps = {
    title: string 
    icon: string 
    onActive: () => void
}

const ToastTitle = ({title, icon, onActive}: ToastTitleProps) => {
    return (
        <div className = "toast-title-container">
            <section className = "toast-title-container_title">
                <figure>
                    <img src = {icon} alt = "Icono para la modal" />
                </figure>
                <p>{title}</p>
            </section>
            <section className = "toast-title-container_close">
                <figure>
                    <img src = {closeIcon} alt = "Icono para cerrar la modal" onClick = {onActive} />
                </figure>
            </section>
        </div>
    )
}

export default ToastTitle;