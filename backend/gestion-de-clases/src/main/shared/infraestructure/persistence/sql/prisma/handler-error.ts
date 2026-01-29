import { PrismaClientKnownRequestError, PrismaClientValidationError } from "@prisma/client/runtime/client";
import { RepeatEntityException } from "@/main/shared/infraestructure/persistence/errors/exceptions/exceptions";
import ErrorReason from "../../errors/uknow-errors/errors-reason";
import { DbUknowError } from "../../errors/uknow-errors/errors";
import type { DbError } from "../../errors/db-error";


export class HandlerPrismaError {

    private mapError : Map<string, DbError> = new Map<string, DbError>();

    constructor() {
        this.setMap();
    }

    handle(error : unknown) : DbError {
        if(error instanceof PrismaClientKnownRequestError) return this.findError(error.code);
        else if(error instanceof PrismaClientValidationError) return new DbUknowError("No existe el campo dado", ErrorReason.NotRegister);
        else return new DbUknowError("Error desconocido", ErrorReason.Uknow);
    }

    private findError(code : string) : DbError {
        const exception = this.mapError.get(code);
        return exception ? exception : new DbUknowError("Error no registrado", ErrorReason.Uknow);
    }

    private setMap() : void {
        this.mapError.set("P2002", new RepeatEntityException());
        this.mapError.set("P1000", new DbUknowError("Hubo un problema de credenciales al conectarse a la base de datos", ErrorReason.Credentials));
        this.mapError.set("P1001", new DbUknowError("La base de datos se encuentra desconectada", ErrorReason.Disconnect));
        this.mapError.set("P1002", new DbUknowError("El tiempo para procesar la consulta fue demasiado largo", ErrorReason.MuchTime));
        this.mapError.set("P1008", new DbUknowError("El tiempo para procesar la consulta fue demasiado largo", ErrorReason.MuchTime));
        this.mapError.set("P1010", new DbUknowError("El usuario no está autorizado", ErrorReason.Unauthorized));
    }
}