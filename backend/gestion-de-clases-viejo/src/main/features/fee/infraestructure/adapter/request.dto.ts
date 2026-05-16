import type { FeeResponseDto } from "./response.dto";


export type FeeRequestDto = Omit<FeeResponseDto, 'id'>