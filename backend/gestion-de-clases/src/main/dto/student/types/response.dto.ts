import type { StudentRequestDto } from "./request-dto";



export type StudentResponseDto = StudentRequestDto & {
    id: number | undefined
}