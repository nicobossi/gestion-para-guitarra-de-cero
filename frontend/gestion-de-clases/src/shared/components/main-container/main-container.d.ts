import type { BackgroundColor } from "@/shared/styles/colors"
import type { SystemStyleObject } from "@styled-system/types"
import type { JSX } from "react"

export type MainContainerProps = {
    children: JSX.Element
    css: BackgroundColor
}