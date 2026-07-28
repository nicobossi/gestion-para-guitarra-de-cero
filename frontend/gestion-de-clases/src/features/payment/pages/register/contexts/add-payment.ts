import createAddContext from "@/shared/contexts/add/add-provider.context";
import type { Payment } from "@/shared/domain/payment/payment";

export const {
    AddProvider: AddPaymentProvider,
    AddContext: AddPaymentContext,
    useValidateAddContext
} = createAddContext<Payment>()