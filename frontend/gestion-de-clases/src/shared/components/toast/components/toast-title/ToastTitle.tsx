type ToastTitleProps = {
    title: string 
    icon: string 
    onClose: () => void
}
const ToastTitle = ({title, icon, onClose}: ToastTitleProps) => {
    return (
        <div>
            <section>
                <p>{title}</p>
                <figure>
                    <img src = {icon} alt = "Icono para la modal" />
                </figure>
            </section>
            <div>
                <svg onClick = {onClose}></svg>
            </div>
        </div>
    )
}

export default ToastTitle;