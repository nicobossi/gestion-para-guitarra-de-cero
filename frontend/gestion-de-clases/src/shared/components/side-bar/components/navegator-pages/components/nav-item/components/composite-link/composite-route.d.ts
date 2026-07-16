import type { CompositeRoute } from "@/shared/components/side-bar/types/page-data"

export type CompositeLinkProps = {
    page: CompositeRoute
    pageName: string
    isActive: boolean 
    isVisible: boolean
    onVisible: () => void 
}
