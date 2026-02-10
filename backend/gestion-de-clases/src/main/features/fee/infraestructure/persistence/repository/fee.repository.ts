import type { FeeRepository } from "./fee.repository.i";
import type { FeeDao } from "../sql/fee.dao.i";
import type { Fee } from "../../../domain/fee";



export class FeeRepositoryImpl implements FeeRepository {

    private readonly dao : FeeDao

    constructor(dao : FeeDao) {
        this.dao = dao;
    }

    async add(fee : Fee) : Promise<Fee> {
        return await this.dao.save(fee);
    }
    
}