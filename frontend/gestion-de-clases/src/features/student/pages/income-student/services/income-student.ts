import type { Student } from "../../../../../shared/domain/student/student";
import { URL_STUDENT_INCOME } from "@/globals/api/api-urls";
import api from "@/globals/api/api-client";
import { ApiError, CauseError } from "@/globals/api/api-error";
import requestDto from "../adapter/request.dto";
import { responseDto, type StudentResponseDto } from "../adapter/response.dto";


const incomeStudent = async (entrant : Student) : Promise<Student> => {

    try {
        const newStudent = await api.post<StudentResponseDto>(URL_STUDENT_INCOME, requestDto(entrant));
        return responseDto(newStudent.data);
    }
    catch(error : unknown) {
        if(error instanceof ApiError && error.getStatus == 409) {
            error.setCause(CauseError.RepeatStudentPhone)
            return Promise.reject(error);
        }
        throw error;
    }
}

export default incomeStudent;