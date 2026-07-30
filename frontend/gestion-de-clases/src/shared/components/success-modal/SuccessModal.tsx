import useActive from "@/shared/hooks/useActive";
import ModalContainer from "../modal-container/ModalContainer";
import ModalContent from "./components/modal-content/ModalContent";
import ModalFooter from "./components/modal-footer/ModalFooter";
import ModalHeader from "./components/modal-header/ModelHeader";
import { styles } from "./styles";
import type { SuccessModalProps } from "./success.modal";
import { createPortal } from "react-dom";

function SuccessModal<T>({title, message, bg, close, link}: SuccessModalProps<T>) {

    const {isActive, onActive} = useActive();

    function handleActive() {
        onActive();
        close();
    }

    return createPortal(
        <div className = {styles(isActive)}>
            <ModalContainer>
                <ModalHeader 
                    css = {bg}
                    onSubmit = {handleActive}
                    title = {title} />
                <ModalContent 
                    content = {message} />
                <ModalFooter link = {link} />
            </ModalContainer>
        </div>,
        document.body
    )
}

export default SuccessModal;