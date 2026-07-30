import './modal-container.css'
import type ModalContainerProps from "./modal-container";


function ModalContainer<T>({children} : ModalContainerProps<T>) {
    return (
        <div className = {"modal-container_active"}>
            {children}
        </div>
    )
}


export default ModalContainer;