import { CredentialsException, DisconnectException, TimeException, UknowDataBaseException, UnauthorizedException } from "@/main/persistence/sql/prisma/exception/exceptions";
import { RepeatEntityException } from "@/main/persistence/sql/repeat-entity-exception";


const codeErrorHandler : Map<string, (message : string) => Error> = new Map<string, (message : string) => Error>();
codeErrorHandler.set("P2002", (message : string) => new RepeatEntityException(message));
codeErrorHandler.set("P1000", (message : string) => new CredentialsException(message));
codeErrorHandler.set("P1001", (message : string) => new DisconnectException(message));
codeErrorHandler.set("P1002", (message : string) => new TimeException(message));
codeErrorHandler.set("P1003", (message : string) => new UknowDataBaseException(message));
codeErrorHandler.set("P1008", (message : string) => new TimeException(message));
codeErrorHandler.set("P1010", (message : string) => new UnauthorizedException(message));

export default codeErrorHandler;
