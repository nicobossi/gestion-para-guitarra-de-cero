import type { InputData } from "@/shared/types/input";

const inputsData: InputData[] = [
    {
        id: "completeName",
        type: "select",
        name : "completeName",
        placeholder: "Nombre Completo"
    },
    {
        id: "paymentDate",
        type: "date",
        name : "paymentDate",
        placeholder: "Fecha de pago"
    },
    {
        id: "paymentMethod",
        type: "select",
        name : "paymentMethod",
        placeholder: "Método de pago"
    },
    {
        id: "amount",
        type: "number",
        name : "amount",
        placeholder: "Monto"
    },
]

export default inputsData;