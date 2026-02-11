import './modal-container.css'
import type ModalContainerProps from "./modal-container";


function ModalContainer<T>({data, children} : ModalContainerProps<T>) {
    
    return (
        <div className = {data ? "modal-container_active" : "modal-container_disable"}>
            {children}
        </div>
    )
}


export default ModalContainer;