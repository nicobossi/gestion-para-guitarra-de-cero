import type { CssFunction } from "@styled-system/css"
import type { RoutesResponsiveStyles } from "../../routes-styles"

type NavDescriptionProps = {
    pageName : string,
    isActive: boolean
    onVisible : () => void
}