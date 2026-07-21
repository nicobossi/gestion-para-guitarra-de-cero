import type { Price } from "@/features/payment/adapters/price/price";
import type { FullName } from "@/features/payment/adapters/student-full-name/full-name";
import type { InputData } from "@/shared/types/input";
import { adapteFullNames } from "./adapters/fullname.adapter";
import { apatePrices } from "./adapters/prices.adapter";

type PaymentContent = {
    fullNames: FullName[]
    prices: Price[]
}

const inputsData = ({fullNames, prices}: PaymentContent): InputData[] => {
    return [
        {
            id: "completeName",
            type: "select",
            name : "completeName",
            placeholder: "Nombre Completo",
            elements: adapteFullNames(fullNames)
        },
        {
            id: "paymentDate",
            type: "date",
            name : "paymentDate",
            placeholder: "Fecha de pago"
        },
        {
            id: "paymentMethod",
            type: "text",
            name : "paymentMethod",
            placeholder: "Método de pago",
        },
        {
            id: "amount",
            type: "select",
            name : "amount",
            placeholder: "Monto",
            elements: apatePrices(prices)
        },
    ]
}

export default inputsData;