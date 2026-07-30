import type { BackgroundColor } from "@/shared/styles/colors/colors"
import type { SystemStyleObject } from "@styled-system/types"
import type { JSX } from "react"

export type SuccessModalProps<T> = {
    title: string
    message: string 
    bg: BackgroundColor
    close: () => void 
    link?: (css: SystemStyleObject) => JSX.Element
}