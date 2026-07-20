import type { CssFunction } from "@styled-system/css"
import type { RoutesResponsiveStyles } from "../../routes-styles"
import type { CompositeRoute } from "@/shared/components/side-bar/types/page-data"

type NavDescriptionProps = {
    pageName : CompositeRoute,
    isActive: boolean
    onVisible : (id: number) => void
}