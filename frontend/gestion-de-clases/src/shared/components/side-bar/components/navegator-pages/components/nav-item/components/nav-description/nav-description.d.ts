import type { CssFunction } from "@styled-system/css"
import type { RoutesStyles } from "../../routes-styles"

type NavDescriptionProps = {
    styles: RoutesStyles
    pageName : string,
    isActive: boolean
    onVisible : () => void
}