import type { Price } from "@/features/payment/adapters/price/price";
import type { SelectElement } from "@/shared/types/input";

export const adaptePrices = (prices: Price[]) => prices.map(price => adaptePrice(price))

const adaptePrice = (price: Price): SelectElement => {
    return {
        value: price.amount.toString()
    }
}
