


export const PaymentLapse = {
    MONTHLY: 'MONTHLY',
    BIWEEKLY: 'BIWEEKLY'
} as const

export type PaymentLapse = typeof PaymentLapse[keyof typeof PaymentLapse]