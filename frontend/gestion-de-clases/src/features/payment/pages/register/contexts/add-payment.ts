import createAddContext from "@/shared/contexts/add/add-provider.context";
import type { Payment } from "@/shared/domain/payment/payment";
import type { RegisterPaymentSchema } from "../adapter/register-payment/schema";

export const {
    AddProvider: AddPaymentProvider,
    AddContext: AddPaymentContext,
    useValidateAddContext
} = createAddContext<Payment, RegisterPaymentSchema>()