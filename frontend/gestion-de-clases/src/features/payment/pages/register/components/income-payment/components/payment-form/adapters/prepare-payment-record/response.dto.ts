import type { Price } from "@/features/payment/adapters/price/price";
import type { FullName } from "@/features/payment/adapters/student-full-name/full-name";

export interface PreparePaymentRecord {
    fullNames: FullName[]
    prices: Price[]
}