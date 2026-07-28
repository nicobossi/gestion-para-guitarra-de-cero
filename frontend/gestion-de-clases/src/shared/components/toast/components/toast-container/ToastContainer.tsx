import type { BackgroundColor } from "@/shared/styles/colors/colors";
import type React from "react";
import { styles } from "./styles";

type ToastContainerProps = {
    css: BackgroundColor
    children: React.ReactNode
}

const ToastContainer = ({css, children}: ToastContainerProps) => {
    return (
        <div className = {styles(css)}>
            {children}
        </div>
    )
}

export default ToastContainer;