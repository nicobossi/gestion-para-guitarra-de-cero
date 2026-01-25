import { PrismaClientKnownRequestError } from "@prisma/client/runtime/client";
import codeErrorHandler from "./code-error.handler";
import { UknowDataBaseException } from "@/main/shared/infraestructure/persistence/exceptions/exceptions";


export class HandlerPrismaError {

    handleCreateError(error : unknown) : Error {
        if(error instanceof PrismaClientKnownRequestError) {
            const exception = codeErrorHandler.get(error.code);
            return exception ? exception(error.message) : new UknowDataBaseException(this.untrackedErrorMessage());
        }
        return new UknowDataBaseException(this.uknowErrorMessage());
    }

    private untrackedErrorMessage() : string {
        return "Hubo un error inesperado en la base de datos";
    }

    private uknowErrorMessage() : string {
        return "Hubo un error desconocido en la base de datos";
    }
}