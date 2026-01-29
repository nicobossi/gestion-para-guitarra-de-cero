import type { DbError } from "../db-error";
import { RepeatEntityException } from "../exceptions/exceptions";
import ErrorReason from "./reason";
import { DbUknowError } from "./uknow-error";


const mapError : Map<string, DbError> = new Map<string, DbError>()
mapError.set("P2002", new RepeatEntityException());
mapError.set("P1000", new DbUknowError("Hubo un problema de credenciales al conectarse a la base de datos", ErrorReason.Credentials));
mapError.set("P1001", new DbUknowError("La base de datos se encuentra desconectada", ErrorReason.Disconnect));
mapError.set("P1002", new DbUknowError("El tiempo para procesar la consulta fue demasiado largo", ErrorReason.MuchTime));
mapError.set("P1008", new DbUknowError("El tiempo para procesar la consulta fue demasiado largo", ErrorReason.MuchTime));
mapError.set("P1010", new DbUknowError("El usuario no está autorizado", ErrorReason.Unauthorized));

export default mapError;