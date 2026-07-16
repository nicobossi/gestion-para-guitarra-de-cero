import { ADD, MAIN_ROUTE_FEE } from "@/globals/routes/fee";
import { ATTENDANCE, DASHBOARD, INCOME, MAIN_ROUTE_STUDENT, UNSUSCRIBE } from "@/globals/routes/student";
import type { PageRoute } from "./types/page-data";

const pagesData: PageRoute[] = [
    {
        id: 1,
        pageName: "Alumnos",
        links: [
            {
                id: 2,
                pageName: "Ingreso",
                path: `${MAIN_ROUTE_STUDENT + INCOME}`
            },
            {
                id: 3,
                pageName: "Asistencia",
                path: `${MAIN_ROUTE_STUDENT + ATTENDANCE}`
            },
            {
                id: 4,
                pageName: "Consultar",
                path: `${MAIN_ROUTE_STUDENT + DASHBOARD}`
            },
            {
                id: 5,
                pageName: "Dar de Baja",
                path: `${MAIN_ROUTE_STUDENT + UNSUSCRIBE}`
            }
        ]
    },
    {
        id: 5,
        pageName: "Cuotas",
        links: [
            {
                id: 6,
                pageName: "Ingreso",
                path: `${MAIN_ROUTE_FEE + ADD}`
            },
            {
                id: 7,
                pageName: "Consultar",
                path: `${MAIN_ROUTE_FEE + DASHBOARD}`
            }
        ]
    },
    {
        id: 8,
        pageName: "Pagos",
        links: [
            {
                id: 9,
                pageName: "Ingreso",
                path: `${MAIN_ROUTE_FEE + ADD}`
            }
        ]
    },
    {
        id: 10,
        pageName: "Clases",
        path: `${MAIN_ROUTE_FEE + ADD}`
    },
]

export default pagesData;