import { number, object, ObjectSchema, string } from "yup";
import type { FeeRequestDto } from "../adapter/request.dto";
import { PaymentLapse } from "@/main/shared/domain/types/payment-lapse";



const feeSchema : ObjectSchema<FeeRequestDto> = object().shape({
    amount: 
        number().
        required("La cuota es requerida").
        positive("La cuota debe ser mayor a 0"),
    applicationDate: 
        string(). 
        required("La fecha de aplicación es requerida"). 
        test(
            "test to application date", 
            "el valor dado no tiene el formato de fecha", 
            (value : string) => !isNaN(Date.parse(value))),
    paymentLapse:
        string(). 
        oneOf(
            [PaymentLapse.MONTHLY, PaymentLapse.BIWEEKLY], 
            "El valor debe ser solo " + PaymentLapse.MONTHLY + " o " + PaymentLapse.BIWEEKLY).
        required("El lapso de pago es requerido")
})

export default feeSchema;