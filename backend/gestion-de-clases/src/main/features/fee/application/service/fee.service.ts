import { RepeatEntityException } from "@/main/shared/infraestructure/persistence/errors/exceptions/exceptions";
import type { Fee } from "../../domain/fee";
import type { FeeRepository } from "../../infraestructure/persistence/repository/fee.repository.i";
import type { FeeService } from "./fee.service.i";



export class FeeServiceImpl implements FeeService {

    constructor(private readonly repository : FeeRepository) {}

    async save(fee: Fee): Promise<Fee> {
        try {
            return await this.repository.add(fee);
        }
        catch(error) {
            if(error instanceof RepeatEntityException) throw fee.repeatAmountException();
            else throw error;
        }
    }
    
}