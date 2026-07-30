import InsertForm from "@/shared/components/insert-form/InsertForm"
import { formStyles } from "./styles"
import inputsData from "./types/inputs-data"
import reintentPaymentSchema from "./types/form-data"
import type { RegisterPaymentSchema } from "../../adapter/register-payment/schema"
import type { StudentPhone } from "@/features/payment/adapters/student-phone/student-phone"

type ReintentIncomePaymentProps = {
    isLoading: boolean
    schema: RegisterPaymentSchema;
    add: (payment: RegisterPaymentSchema, phone: string) => void
}

const ReintentIncomePayment = ({ isLoading, schema, add }: ReintentIncomePaymentProps) => {
    return (
        <InsertForm 
            title = "Pago"
            schema = {reintentPaymentSchema}
            inputsData = {inputsData}
            isLoading = {isLoading}
            onSubmit = {(phone: StudentPhone) => add(schema, phone.phone)}
            styles = {formStyles}
        />
    )
}

export default ReintentIncomePayment;