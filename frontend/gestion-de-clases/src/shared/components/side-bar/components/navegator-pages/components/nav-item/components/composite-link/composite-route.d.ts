import type { CompositeRoute } from "@/shared/components/side-bar/types/page-data"
import type { RoutesStyles } from "../../routes-styles"

export type CompositeLinkProps = {
    page: CompositeRoute
    isVisible: boolean
    isActive: boolean 
}
