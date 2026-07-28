import type React from "react"
import { styles } from "./styles"

type AddPanelContainerProps = {
    children: React.ReactNode
}

const AddPanelContainer = ({children}: AddPanelContainerProps) => {
    return (
        <section className = {styles}>
            {children}
        </section>
    )
}

export default AddPanelContainer;