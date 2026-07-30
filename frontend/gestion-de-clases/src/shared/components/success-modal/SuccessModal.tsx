import useActive from "@/shared/hooks/useActive";
import ModalFooter from "./components/modal-footer/ModalFooter";
import ModalHeader from "./components/modal-header/ModelHeader";
import type { SuccessModalProps } from "./success.modal";
import { createPortal } from "react-dom";
import { styles } from "./styles";

function SuccessModal<T>({title, message, bg, close, link}: SuccessModalProps<T>) {

    const {isActive, onActive} = useActive();

    function handleActive() {
        onActive();
        close();
    }

    const {modal, container, content} = styles(isActive)();

    return createPortal(
        <div className = {modal}>
            <div className = {container}>
                <ModalHeader 
                    css = {bg}
                    onSubmit = {handleActive}
                    content = {title} />
                <section className = {content}>{message}</section>
                <ModalFooter link = {link} />
            </div>
        </div>,
        document.body
    )
}

export default SuccessModal;