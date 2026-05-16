import type { Fee } from "../../../domain/fee";



export interface FeeDao {
    save(fee : Fee) : Promise<Fee>
}