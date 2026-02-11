import { createContext } from "react";
import type { UseStudent } from "../hooks/student.use";

const StudentContext = createContext<UseStudent | null>(null);

export default StudentContext;