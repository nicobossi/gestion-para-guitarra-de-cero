import type { UseAddData } from "@/shared/types/add-data";
import { createContext } from "react";

function createAddContext<T extends object>() {
    return createContext<UseAddData<T> | null>(null);
}

export default createAddContext;