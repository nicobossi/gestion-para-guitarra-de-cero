import type { PreparePaymentRecord } from "../adapters/prepare-payment-record/response.dto";
import getPreparePaymentRecord from "../services/prepare-payment-record";
import { useEffect, useState } from "react";


const usePreparePaymentRecord = () => {
    const [preparePaymentRecord, setPreparePaymentRecord] = useState<PreparePaymentRecord | null>(null);

    useEffect(() => {
        getPreparePaymentRecord()
            .then(value => setPreparePaymentRecord(value))
            .catch(error => console.log(error))
        }, []);

    return {preparePaymentRecord}
}

export default usePreparePaymentRecord;