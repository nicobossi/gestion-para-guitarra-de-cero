import { FEE_ROUTE, STUDENT_ROUTE } from "@/globals/routes/routes"
import type { PageData } from "./types/page-data"


const pagesData : PageData[] = [
    {
        pageName: "Alumnos",
        links: [
            {
                linkName: "Ingreso",
                link: STUDENT_ROUTE
            }
        ]
    },
    {
        pageName: "Cuotas",
        links: [
            {
                linkName: "Ingreso",
                link: FEE_ROUTE
            }
        ]
    }
]

export default pagesData;