import { createContext } from "react";
import type { UseFee } from "../hooks/fee.use";



const FeeContext = createContext<UseFee | null>(null);

export default FeeContext;