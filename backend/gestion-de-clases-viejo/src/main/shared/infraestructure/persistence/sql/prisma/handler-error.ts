import { PrismaClientKnownRequestError, PrismaClientValidationError } from "@prisma/client/runtime/client";
import ErrorReason from "../../errors/uknow-errors/reason";
import { InfraestructureDbError } from "../../errors/uknow-errors/uknow-error";
import type { DbError } from "../../errors/db-error";


export class HandlerPrismaError {

    private mapError : Map<string, DbError>;

    constructor(mapError : Map<string, DbError>) {
        this.mapError = mapError;
    }

    handle(error : unknown) : DbError {
        if(error instanceof PrismaClientKnownRequestError) return this.findError(error.code);
        else if(error instanceof PrismaClientValidationError) return new InfraestructureDbError("No existe el campo dado", ErrorReason.NotRegister);
        else return new InfraestructureDbError("Error desconocido", ErrorReason.Uknow);
    }

    private findError(code : string) : DbError {
        const exception = this.mapError.get(code);
        return exception ? exception : new InfraestructureDbError("Error no registrado", ErrorReason.Uknow);
    }
}