import { object, string, type ObjectSchema } from "yup";
import type { RegisterPaymentSchema, TextPaymentMethod } from "../../../../adapter/register-payment/schema";
import { PaymentMethod } from "@/shared/domain/payment/payment-method";


const paymentSchema: ObjectSchema<RegisterPaymentSchema> = object().shape({
    completeName:
        string(). 
        required("El campo es requerido"),
    amount: 
        string().
        required("El campo es requerido"). 
        test(
            "test to amount", 
            "El monto debe ser positivo", 
            (value : string) => Number.parseInt(value) > 0),
    paymentDate: 
        string(). 
        required("El campo es requerido"). 
        test(
            "test to date", 
            "El valor debe ser una fecha",
            (value : string) => !isNaN(Date.parse(value))
        ),
    paymentMethod: 
        string<TextPaymentMethod>(). 
        required("El campo es requerido"). 
        transform(value => value === "mercado pago" ? PaymentMethod.MERCADO_PAGO : PaymentMethod.CASH)
})

export default paymentSchema;