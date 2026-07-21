import api from "@/globals/api/api-client";
import { URL_FEE_PRICES } from "@/globals/api/api-urls";
import type { Price } from "../adapters/price/price";

export const getFeePrices = async (): Promise<Price[]> =>
    (await api.get<Price[]>(URL_FEE_PRICES)).data;