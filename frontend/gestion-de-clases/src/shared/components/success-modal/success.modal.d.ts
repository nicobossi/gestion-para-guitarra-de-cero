import type { BackgroundColor } from "@/shared/styles/colors/colors"
import type { JSX } from "react"

export type SuccessModalProps<T> = {
    title: string
    message: string 
    bg: BackgroundColor
    close: () => void 
    link?: () => JSX.Element
}