import type {StudentResponseDto} from './response.dto'


export type StudentRequestDto = Omit<StudentResponseDto, "id">