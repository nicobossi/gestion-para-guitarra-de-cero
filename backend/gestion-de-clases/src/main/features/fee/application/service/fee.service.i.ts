import type { Fee } from "../../domain/fee";



export interface FeeService {
    save(fee : Fee) : Promise<Fee>
}