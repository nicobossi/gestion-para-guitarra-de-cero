import type { BackgroundColor } from "@/shared/styles/colors/colors"


export type ModalHeaderProps = {
    title : string
    css: BackgroundColor
    onSubmit : () => void
} 