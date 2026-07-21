import type { Price } from "@/features/payment/adapters/price/price";

export const apatePrices = (prices: Price[]) => prices.map(price => adaptePrice(price))

const adaptePrice = (price: Price) => {
    return {
        value: price.amount.toString()
    }
}
