export type PageRoute = SimpleRoute | CompositeRoute

type PageData = {
    id: number
    pageName: string
    icon?: string
}

export type CompositeRoute = PageData & { links: SimpleRoute[] }

export type SimpleRoute = PageData & { path: string }

