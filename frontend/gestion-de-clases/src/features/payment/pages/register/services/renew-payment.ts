import api from "@/globals/api/api-client";
import { URL_REINTENT_PAYMENT, URL_RENEW_PAYMENT } from "@/globals/api/api-urls";
import type { Payment } from "@/shared/domain/payment/payment";
import type { RegisterPaymentSchema } from "../adapter/register-payment/schema";
import { adapteRegistePaymentRequest } from "../adapter/register-payment/request.dto";
import { adapteRegisterPaymentRespone } from "../adapter/register-payment/response.dto";
import type { PaymentRequest } from "../adapter/register-payment/types/request";

const registerPayment = async (payment: RegisterPaymentSchema, phone?: string) : Promise<Payment> => {
    if(phone) {
        const newPayment = await api.post<PaymentRequest>(URL_REINTENT_PAYMENT(phone), adapteRegistePaymentRequest(payment));
        return adapteRegisterPaymentRespone(newPayment.data);
    }
    else {
        const newPayment = await api.post<PaymentRequest>(URL_RENEW_PAYMENT, adapteRegistePaymentRequest(payment));
        return adapteRegisterPaymentRespone(newPayment.data);
    }
}

export default registerPayment;