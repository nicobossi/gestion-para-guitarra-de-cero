import type { Entrant } from "@/globals/types/entrant";
import { createContext } from "react";


const StudentContext = createContext<Entrant | null>(null);

export default StudentContext;