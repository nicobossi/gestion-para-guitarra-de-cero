import { object, string, type ObjectSchema } from "yup";
import type { FeeSchema } from "../../adapter/schema";


const feeSchema : ObjectSchema<FeeSchema> = object().shape({
    amount: 
        string().
        required("El campo es requerido"). 
        test(
            "test to amount", 
            "El monto debe ser positivo", 
            (value : string) => Number.parseInt(value) > 0),
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
        transform((value : string) => value.toLowerCase()).
        oneOf(["mensual", "quincenal"], "El lapso de pago puede ser solo mensual o quincenal")
})

export default feeSchema;