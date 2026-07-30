import InsertForm from "@/shared/components/insert-form/InsertForm"
import { formStyles } from "./styles"
import inputsData from "./types/inputs-data"
import reintentPaymentSchema from "./types/form-data"
import type { ReintentPayment } from "@/shared/domain/payment/reintent-payment"

type ReintentIncomePaymentProps = {
    isLoading: boolean
    add: (payment: ReintentPayment) => void
}

const ReintentIncomePayment = ({ isLoading, add }: ReintentIncomePaymentProps) => {
    return (
        <InsertForm 
            title = "Pago"
            schema = {reintentPaymentSchema}
            inputsData = {inputsData}
            isLoading = {isLoading}
            onSubmit = {add}
            styles = {formStyles}
        />
    )
}

export default ReintentIncomePayment;