import api from "@/globals/api/api-client";
import { ApiError, CauseError } from "@/globals/api/api-error";
import { URL_RENEW_PAYMENT } from "@/globals/api/api-urls";
import type { Payment } from "@/shared/domain/payment/payment";
import type { RegisterPaymentSchema } from "../adapter/register-payment/schema";
import { adapteRegistePaymentRequest } from "../adapter/register-payment/request.dto";
import { adapteRegisterPaymentRespone } from "../adapter/register-payment/response.dto";
import type { PaymentRequest } from "../adapter/register-payment/types/request";

const registerPayment = async (payment: RegisterPaymentSchema) : Promise<Payment> => {
    try {
        const newPayment = await api.post<PaymentRequest>(URL_RENEW_PAYMENT, adapteRegistePaymentRequest(payment));
        return adapteRegisterPaymentRespone(newPayment.data);
    }
    catch(error: unknown) {
        if(error instanceof ApiError && error.getStatus == 409) {
            error.setCause(CauseError.RepeatStudentPhone)
            return Promise.reject(error);
        }
        throw error;
    }
}

export default registerPayment;