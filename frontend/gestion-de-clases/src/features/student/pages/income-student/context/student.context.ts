import type { UseStudent } from "@/features/student/pages/income-student/hooks/student.use";
import { createContext } from "react";

const StudentContext = createContext<UseStudent | null>(null);

export default StudentContext;