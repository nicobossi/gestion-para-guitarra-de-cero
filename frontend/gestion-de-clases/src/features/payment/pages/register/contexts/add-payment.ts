import createAddContext from "@/shared/contexts/add/add-provider.context";
import type { Payment } from "@/shared/domain/payment/payment";
import type { RegisterPaymentSchema } from "../adapter/register-payment/schema";
import type { ReintentPayment } from "@/shared/domain/payment/reintent-payment";

export const {
    AddProvider: AddPaymentProvider,
    AddContext: AddPaymentContext,
    useValidateAddContext
} = createAddContext<Payment, RegisterPaymentSchema | ReintentPayment>()