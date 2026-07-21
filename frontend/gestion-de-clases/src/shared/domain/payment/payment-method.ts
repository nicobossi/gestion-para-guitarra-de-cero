export const PaymentMethod = {
    MERCADO_PAGO: 'MERCADO_PAGO',
    EFECTIVO: 'EFECTIVO'
} as const

export type PaymentMethod = typeof PaymentMethod[keyof typeof PaymentMethod]