import type { Student } from "@/globals/types/student";
import { createContext } from "react";


const StudentContext = createContext<Student | null>(null);

export default StudentContext;