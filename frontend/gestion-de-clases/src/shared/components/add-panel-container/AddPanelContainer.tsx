import type { BackgroundColor } from "@/shared/styles/colors/colors"
import type React from "react"
import { styles } from "./styles"

type AddPanelContainerProps = {
    css: BackgroundColor
    children: React.ReactNode
}

const AddPanelContainer = ({css, children}: AddPanelContainerProps) => {
    return (
        <section className = {styles(css)}>
            {children}
        </section>
    )
}

export default AddPanelContainer;