import api from "@/globals/api/api-client";
import { URL_RENEW_PAYMENT } from "@/globals/api/api-urls";
import type { Payment } from "@/shared/domain/payment/payment";
import type { RegisterPaymentSchema } from "../adapter/register-payment/schema";
import { adapteRegistePaymentRequest } from "../adapter/register-payment/request.dto";
import { adapteRegisterPaymentRespone } from "../adapter/register-payment/response.dto";
import type { PaymentRequest } from "../adapter/register-payment/types/request";

const registerPayment = async (payment: RegisterPaymentSchema) : Promise<Payment> => {
    const newPayment = await api.post<PaymentRequest>(URL_RENEW_PAYMENT, adapteRegistePaymentRequest(payment));
    return adapteRegisterPaymentRespone(newPayment.data);
}

export default registerPayment;