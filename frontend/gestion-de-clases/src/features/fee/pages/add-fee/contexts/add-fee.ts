import createAddContext from "@/shared/contexts/add/add-provider.context";
import type { Fee } from "@/shared/domain/fee/fee";

export const {AddProvider: FeeProvider, AddContext: FeeContext, useValidateAddContext} = createAddContext<Fee>();