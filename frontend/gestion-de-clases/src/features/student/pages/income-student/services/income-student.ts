import type { Student } from "../../../../../shared/domain/student/student";
import { URL_STUDENT_INCOME } from "@/globals/api/api-urls";
import api from "@/globals/api/api-client";
import requestDto from "../adapter/incomer/request.dto";
import type { Incomer } from "../adapter/incomer/incomer";
import { responseDto, type StudentResponseDto } from "../adapter/incomer/response.dto";


const incomeStudent = async (entrant : Incomer) : Promise<Student> => {
    const newStudent = await api.post<StudentResponseDto>(URL_STUDENT_INCOME, requestDto(entrant));
    return responseDto(newStudent.data);
}

export default incomeStudent;