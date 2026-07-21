import { useEffect, useState } from "react";
import type { Price } from "../adapters/price/price";
import { getFeePrices } from "../services/get-fee-amount.service";

const useFeePrices = () => {
    const [prices, setPrices] = useState<Price[]>([]);

    useEffect(() => {
        getFeePrices()
            .then(value => setPrices(value))
            .catch(error => console.log(error))
        }, []);

    return {prices}
}

export default useFeePrices;