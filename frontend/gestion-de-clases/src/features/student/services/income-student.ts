import type { Student } from "@/globals/types/student";
import { URL_STUDENT_INCOME } from "@/infraestructure/api/api-urls";
import axios from "@/infraestructure/request-config";
import requestDto from "../adapter/request.dto";
import { responseDto, type StudentResponseDto } from "../adapter/response.dto";
import { AxiosError } from "axios";
import { ApiError, ApiErrorType, CauseError } from "@/infraestructure/api/api-error";


const incomeStudent = async (entrant : Student) : Promise<Student> => {

    try {
        const newStudent = await axios.post<StudentResponseDto>(URL_STUDENT_INCOME, requestDto(entrant));
        return responseDto(newStudent.data);
    }
    catch(error : unknown) {
        console.log(error)
        if(error instanceof AxiosError) {
            if(error.response) {
                const status = error.response.status
                if(status === 409) return Promise.reject(new ApiError(status, error.message, ApiErrorType.Model, CauseError.RepeatStudentPhone));
                if(status >= 400 && status < 500) return Promise.reject(new ApiError(status, error.message, ApiErrorType.Client));
                if(status >= 500) return Promise.reject(new ApiError(status, error.message, ApiErrorType.Server));
            }
        }
        return Promise.reject(error);
    }
}

export default incomeStudent;