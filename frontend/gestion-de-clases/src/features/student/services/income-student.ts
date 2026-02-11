import type { Student } from "@/globals/types/student";
import { URL_STUDENT_INCOME } from "@/infraestructure/api/api-urls";
import requestDto from "../adapter/request.dto";
import { responseDto, type StudentResponseDto } from "../adapter/response.dto";
import api from "@/infraestructure/request-config/request-config";
import { ApiError, CauseError } from "@/infraestructure/api/api-error";


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