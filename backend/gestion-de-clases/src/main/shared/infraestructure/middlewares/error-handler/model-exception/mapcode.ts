import { CauseModelError } from "../../../domain/cause.error";




const modelCodeError : Map<CauseModelError, number> = new Map<CauseModelError, number>()
modelCodeError.set(CauseModelError.RepeatStudentPhone, 409);

export default modelCodeError;