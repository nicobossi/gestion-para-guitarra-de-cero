import type { InputData } from "@/shared/types/input";
import { adapteFullNames } from "../../../../adapter/full-name/fullname.adapter";
import { adaptePrices } from "../../../../adapter/prices/prices.adapter";
import type { PreparePaymentRecord } from "./adapters/prepare-payment-record/response.dto";

const inputsData = (preparePaymentRecord: PreparePaymentRecord): InputData[] => {
    return [
        {
            id: "completeName",
            type: "text",
            name: "completeName",
            placeholder: "Nombre Completo",
            elements: adapteFullNames(preparePaymentRecord.fullNames)
        },
        {
            id: "paymentDate",
            type: "date",
            name: "paymentDate",
            placeholder: "Fecha de pago"
        },
        {
            id: "paymentMethod",
            type: "text",
            name: "paymentMethod",
            placeholder: "Método de pago",
            elements: [{ value: 'Mercado Pago' }, { value: 'Efectivo' }]
        },
        {
            id: "amount",
            type: "number",
            name: "amount",
            placeholder: "Monto",
            elements: adaptePrices(preparePaymentRecord.prices)
        },
    ]
}

export default inputsData;