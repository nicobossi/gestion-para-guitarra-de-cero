import type { Cause } from "./cause"
import type { Motive } from "./motive"

export interface ErrorResponse {
    title: string 
    message: string 
    cause: Cause 
    path: string
    timestamp: string
    errors?: Motive[]
    id: string
}
