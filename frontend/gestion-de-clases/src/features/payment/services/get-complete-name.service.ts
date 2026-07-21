import api from "@/globals/api/api-client";
import type { FullName } from "../adapters/student-full-name/full-name";
import { URL_FULLNAMES } from "@/globals/api/api-urls";

export const getStudentCompleteName = async (): Promise<FullName[]> => 
    (await api.get<FullName[]>(URL_FULLNAMES)).data;