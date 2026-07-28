import createAddContext from "@/shared/contexts/add/add-provider.context";
import type { Fee } from "@/shared/domain/fee/fee";
import type { AddFee } from "../components/income-fee/components/fee-form/types/schema";

export const {
    AddProvider: FeeProvider, 
    AddContext: FeeContext, 
    useValidateAddContext
} = createAddContext<Fee, AddFee>();