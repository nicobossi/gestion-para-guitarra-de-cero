import ErrorReason from "../../../persistence/errors/uknow-errors/reason";



const mapCodeStatus : Map<ErrorReason, number> = new Map<ErrorReason, number>();
mapCodeStatus.set(ErrorReason.Credentials, 500);
mapCodeStatus.set(ErrorReason.Disconnect, 503);
mapCodeStatus.set(ErrorReason.MuchTime, 504);
mapCodeStatus.set(ErrorReason.Uknow, 500);
mapCodeStatus.set(ErrorReason.Unauthorized, 501);
mapCodeStatus.set(ErrorReason.FieldNotFound, 500);
mapCodeStatus.set(ErrorReason.NotRegister, 500);

export default mapCodeStatus;