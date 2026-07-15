import type { InputData } from "@/globals/types/input";


const inputsData : InputData[] = [
    {
        id: "amount",
        type: "number",
        name : "amount",
        placeholder: "Monto"
    },
    {
        id: "applicationDate",
        type: "date",
        name : "applicationDate",
        placeholder: "Fecha de Aplicación"
    },
    {
        id: "paymentLapse",
        type: "text",
        name : "paymentLapse",
        placeholder: "Lapso De Pago"
    }
]

export default inputsData;