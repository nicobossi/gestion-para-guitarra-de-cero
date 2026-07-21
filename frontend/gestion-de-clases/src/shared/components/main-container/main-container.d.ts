import type { MainContainerStyles } from "@/shared/styles/mainContainers/mainContainers"
import type { SystemStyleObject } from "@styled-system/types"
import type { JSX } from "react"

export type MainContainerProps = {
    children: JSX.Element
    css: MainContainerStyles
}