import type { JSX } from "react"

export type SuccessModalProps<T> = {
    data: T
    title: string
    message: string 
    close: () => void 
    link?: () => JSX.Element
}