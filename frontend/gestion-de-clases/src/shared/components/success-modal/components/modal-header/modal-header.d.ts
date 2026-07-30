import type { BackgroundColor } from "@/shared/styles/colors/colors"


export type ModalHeaderProps = {
    content : string
    css: BackgroundColor
    onSubmit : () => void
} 