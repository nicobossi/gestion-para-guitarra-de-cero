import type { PreparePaymentRecord } from "../adapters/prepare-payment-record/response.dto";
import api from "@/globals/api/api-client";
import { URL_PREPARE_PAYMENT_RECORD } from "@/globals/api/api-urls";

async function getPreparePaymentRecord(): Promise<PreparePaymentRecord> {
    return (await api.get(URL_PREPARE_PAYMENT_RECORD)).data;
}

export default getPreparePaymentRecord;