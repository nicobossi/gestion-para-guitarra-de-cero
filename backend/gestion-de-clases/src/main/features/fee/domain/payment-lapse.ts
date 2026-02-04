


export const PaymentLapse = {
    Monthly: "monthly",
    Biweekly: "biweekly"
} as const 


export type PaymentLapse = typeof PaymentLapse[keyof typeof PaymentLapse];