import type { BackgroundColor } from "@/shared/styles/colors/colors";
import type React from "react";
import { toastStyles, toastSubContainer } from "./styles";

type ToastContainerProps = {
    css: BackgroundColor
    isActive: boolean
    children: React.ReactNode
}

const ToastContainer = ({css, isActive, children}: ToastContainerProps) => {
    return (
        <div className = {toastStyles(isActive, css)}>
            <div className = {toastSubContainer}>
                {children}
            </div>
        </div>
    )
}

export default ToastContainer;