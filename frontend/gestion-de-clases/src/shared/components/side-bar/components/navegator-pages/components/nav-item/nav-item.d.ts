import type { PageRoute } from "@/shared/components/side-bar/types/page-data"

export type NavItemProps = {
    page: PageRoute
    isActive: boolean
    onVisible: (id: number) => void 
    isVisible: (id: number) => boolean
}

export type LinkProps = {
    page: PageRoute
    isActive: boolean
    isVisible: boolean
}