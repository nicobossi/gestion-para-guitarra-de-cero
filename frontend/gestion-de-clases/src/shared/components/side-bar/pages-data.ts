import type { PageData } from "./types/page-data"
import { ADD, MAIN_ROUTE_FEE } from "@/globals/routes/fee";
import { INCOME, MAIN_ROUTE_STUDENT } from "@/globals/routes/student";


const pagesData : PageData[] = [
    {
        pageName: "Alumnos",
        links: [
            {
                linkName: "Ingreso",
                path: `${MAIN_ROUTE_STUDENT + INCOME}`
            }
        ]
    },
    {
        pageName: "Cuotas",
        links: [
            {
                linkName: "Ingreso",
                path: `${MAIN_ROUTE_FEE + ADD}`
            }
        ]
    }
]

export default pagesData;