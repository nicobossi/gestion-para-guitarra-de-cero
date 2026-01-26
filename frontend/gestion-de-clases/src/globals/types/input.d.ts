

export type InputData = {
    id : string
    type : string
    name : string
    placeholder : string
    isRequired : boolean
    errorMessage? : string
    validators?: RegisterOptions
}