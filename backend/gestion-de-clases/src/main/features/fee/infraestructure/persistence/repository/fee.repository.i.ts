import type { Fee } from "../../../domain/fee";



export interface FeeRepository {
    add(fee : Fee) : Promise<Fee>
}