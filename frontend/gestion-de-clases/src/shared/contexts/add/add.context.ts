import type { UseAddData } from "@/shared/types/add-data";
import { createContext } from "react";

export type AddContext<T extends object, K> = React.Context<UseAddData<T, K> | null>

function createUseAddData<T extends object, K>() {
    return createContext<UseAddData<T, K> | null>(null);
}

export default createUseAddData;