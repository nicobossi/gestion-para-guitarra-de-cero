export const PaymentMethod = {
    MERCADO_PAGO: 'MERCADO_PAGO',
    CASH: 'CASH',
} as const;

export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod];
