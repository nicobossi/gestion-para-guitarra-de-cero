import { object, string, type ObjectSchema } from "yup";
import type { FeeRequestDto } from "../../adapter/request.dto";
import { PaymentLapse } from "@/globals/types/payment-lapse";


const feeSchema : ObjectSchema<FeeRequestDto> = object().shape({
    amount: 
        string().
        required("El campo es requerido"),
    applicationDate: 
        string(). 
        required("El campo es requerido"). 
        test(
            "test to date", 
            "El valor debe ser una fecha",
            (value : string) => !isNaN(Date.parse(value))
        ),
    paymentLapse: 
        string(). 
        required("El campo es requerido"). 
        oneOf([PaymentLapse.MONTHLY, PaymentLapse.BIWEEKLY], "El campo puede tener solo " + PaymentLapse.MONTHLY + " o " + PaymentLapse.BIWEEKLY)
})

export default feeSchema;