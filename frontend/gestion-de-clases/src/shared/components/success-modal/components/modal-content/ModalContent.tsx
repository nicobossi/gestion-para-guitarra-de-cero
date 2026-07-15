import type { ModalContentProps } from './modal-content'
import './modal-content.css'


const ModalContent = ({content} : ModalContentProps) => {
    return(
        <div className = "modal-income_content">
            <p>{content}</p>
        </div>
    )
}

export default ModalContent;