import { PrismaClientKnownRequestError } from "@prisma/client/runtime/client";
import { RepeatEntityException } from "../repeat-entity-exception";



export class HandlerPrismaError {


    handleCreateError(error : unknown) : Error {
        if(error instanceof PrismaClientKnownRequestError) {
            if(this.isUniqueConstraintCode(error)) return new RepeatEntityException(error.message);
        }
        return new Error(this.uknowErrorMessage());
    }

    private isUniqueConstraintCode(error: PrismaClientKnownRequestError) {
        return error.code === 'P2002';
    }

    private uknowErrorMessage() : string {
        return "Hubo un error inesperado en la base de datos";
    }
}