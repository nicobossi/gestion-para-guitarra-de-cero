import { CauseModelError } from "../../../domain/cause.error";




const modelCodeError : Map<CauseModelError, number> = new Map<CauseModelError, number>()
modelCodeError.set(CauseModelError.RepeatStudentPhone, 409);
modelCodeError.set(CauseModelError.RepeatFeeAmount, 409);

export default modelCodeError;