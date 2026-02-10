

export type FeeResponseDto = {
    id? : number
    amount : number,
    applicationDate : Date,
    paymentLapse : "MONTHLY" | "BIWEEKLY"
}