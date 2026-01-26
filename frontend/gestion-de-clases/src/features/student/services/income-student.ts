import type { Student } from "@/globals/types/student";
import { URL_STUDENT_INCOME } from "@/infraestructure/api-urls";
import axios from "@/infraestructure/request-config";
import requestDto from "../adapter/request.dto";
import { responseDto, type StudentResponseDto } from "../adapter/response.dto";


const incomeStudent = async (entrant : Student) : Promise<Student> => {

    try {
        const newStudent = await axios.post<StudentResponseDto>(URL_STUDENT_INCOME, requestDto(entrant));
        return responseDto(newStudent.data);
    }
    catch(error : unknown) {
        return Promise.reject(error);
    }
}

export default incomeStudent;