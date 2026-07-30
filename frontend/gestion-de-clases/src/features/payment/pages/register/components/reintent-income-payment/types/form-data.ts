import type { StudentPhone } from "@/features/payment/adapters/student-phone/student-phone";
import { object, ObjectSchema, string } from "yup";

const reintentPaymentSchema: ObjectSchema<StudentPhone> = object().shape({
    phone: 
        string().
        required("el campo es requerido").
        length(10).
        matches(/^[0-9]+$/, "Solo se permiten números"), 
});

export default reintentPaymentSchema;