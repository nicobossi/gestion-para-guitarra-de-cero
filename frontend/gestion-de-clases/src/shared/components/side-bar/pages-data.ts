import { ADD, DASHBOARD_FEE, MAIN_ROUTE_FEE } from "@/globals/routes/fee";
import { ATTENDANCE, DASHBOARD, INCOME, MAIN_ROUTE_STUDENT, UNSUSCRIBE } from "@/globals/routes/student";
import type { PageRoute } from "./types/page-data";
import { DASHBOARD_PAYMENT, EXTEND, MAIN_ROUTE_PAYMENT, NEXT_PAYMENT, REGISTER } from "@/globals/routes/payment";

const pagesData: PageRoute[] = [
    {
        id: 1,
        pageName: "Alumnos",
        links: [
            {
                id: 2,
                pageName: "ingreso",
                path: `${MAIN_ROUTE_STUDENT + INCOME}`
            },
            {
                id: 3,
                pageName: "asistencia",
                path: `${MAIN_ROUTE_STUDENT + ATTENDANCE}`
            },
            {
                id: 4,
                pageName: "consultar",
                path: `${MAIN_ROUTE_STUDENT + DASHBOARD}`
            },
            {
                id: 5,
                pageName: "dar de Baja",
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
                pageName: "ingreso",
                path: `${MAIN_ROUTE_FEE + ADD}`
            },
            {
                id: 7,
                pageName: "consultar",
                path: `${MAIN_ROUTE_FEE + DASHBOARD_FEE}`
            }
        ]
    },
    {
        id: 8,
        pageName: "Pagos",
        links: [
            {
                id: 9,
                pageName: "registrar",
                path: `${MAIN_ROUTE_PAYMENT + REGISTER}`
            },
            {
                id: 10,
                pageName: "extender",
                path: `${MAIN_ROUTE_PAYMENT + EXTEND}`
            },
            {
                id: 9,
                pageName: "siguiente pago",
                path: `${MAIN_ROUTE_PAYMENT + NEXT_PAYMENT}`
            },
            {
                id: 9,
                pageName: "dashboard",
                path: `${MAIN_ROUTE_PAYMENT + DASHBOARD_PAYMENT}`
            }
        ]
    },
    {
        id: 15,
        pageName: "Clases",
        path: `${MAIN_ROUTE_FEE + ADD}`
    },
]

export default pagesData;