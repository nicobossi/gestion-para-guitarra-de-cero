import type { UseAddData } from "@/shared/types/add-data";
import { createContext } from "react";

export type AddContext<T extends object> = React.Context<UseAddData<T> | null>

function createUseAddData<T extends object>() {
    return createContext<UseAddData<T> | null>(null);
}

export default createUseAddData;