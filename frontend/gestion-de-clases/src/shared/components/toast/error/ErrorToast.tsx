import type { AnclaLink } from "@/shared/types/link";
import type { SystemStyleObject } from "@styled-system/types";
import ToastContainer from "../components/toast-container/ToastContainer";
import ToastTitle from "../components/toast-title/ToastTitle";

type ErrorToastProps = {
    link?: AnclaLink
    message: string
    styles: SystemStyleObject
    onClose: () => void
}

const ErrorToast = ({styles, message, link, onClose}: ErrorToastProps) => {
    return (
        <ToastContainer css = {styles}>
            <ToastTitle title = "Error" icon = {"icono de x"} onClose = {onClose} />
            <p>{message}</p>
            {link && <a href = {link.route}>{link.linkDescription}</a>}
        </ToastContainer>
    )
}

export default ErrorToast;