export type InputData = SimpleInputData | SelectInputData

export type SimpleInputData = {
    id: string
    type: string
    name: string
    placeholder: string
}

export type SelectInputData = {
    id: string
    type: string
    name: string
    placeholder: string
    elements: SelectElement[]
}

export type SelectElement = {
    value: string
}