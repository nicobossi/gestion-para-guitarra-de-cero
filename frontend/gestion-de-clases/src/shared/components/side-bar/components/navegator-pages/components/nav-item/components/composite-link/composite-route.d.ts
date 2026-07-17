import type { CompositeRoute } from "@/shared/components/side-bar/types/page-data"
import type { RoutesStyles } from "../../routes-styles"

export type CompositeLinkProps = {
    styles: RoutesStyles
    page: CompositeRoute
    pageName: string
    isActive: boolean 
}
