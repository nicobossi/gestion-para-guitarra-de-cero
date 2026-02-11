import { createContext } from "react";
import type { UseStudentType } from "../hooks/student.use";

const StudentContext = createContext<UseStudentType | null>(null);

export default StudentContext;