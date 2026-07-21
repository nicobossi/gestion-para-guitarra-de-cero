import ModalContainer from "../modal-container/ModalContainer";
import ModalContent from "./components/modal-content/ModalContent";
import ModalFooter from "./components/modal-footer/ModalFooter";
import ModalHeader from "./components/modal-header/ModelHeader";
import type { SuccessModalProps } from "./success.modal";

function SuccessModal<T>({data, title, message, close, link}: SuccessModalProps<T>) {
    return (
        <ModalContainer data = {data}>
            <ModalHeader 
                onSubmit = {close}
                title = {title} />
            <ModalContent 
                content = {message} />
            <ModalFooter link = {link} />
        </ModalContainer>
    )
}

export default SuccessModal;