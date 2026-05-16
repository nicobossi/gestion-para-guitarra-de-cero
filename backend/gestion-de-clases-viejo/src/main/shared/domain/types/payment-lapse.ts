import { PaymentLapse as PaymentLapsePrisma} from "resources/generated/prisma/enums";


export const PaymentLapse = PaymentLapsePrisma;
export type PaymentLapse = typeof PaymentLapsePrisma[keyof typeof PaymentLapsePrisma]