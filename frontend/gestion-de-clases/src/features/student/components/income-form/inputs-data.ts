import type { InputData } from "@/globals/types/input";


const incomeInputsData : InputData[] = [
    {
        id: "name",
        type: "text",
        name: "name",
        placeholder: "Primer nombre",
        isRequired: true,
        errorMessage: "el campo es requerido",
        validators: {
            required: true,
        }
    },
    {
        id: "secondName",
        type: "text",
        name: "secondName",
        placeholder: "Segundo nombre",
        isRequired: false
    },
    {
        id: "surname",
        type: "text",
        name: "surname",
        placeholder: "Apellido",
        isRequired: true,
        errorMessage: "el campo es requerido",
        validators: {
            required: true,
        }
    },
    {
        id: "phone",
        type: "text",
        name: "phone",
        placeholder: "Teléfono",
        isRequired: true,
        errorMessage: "el campo es requerido",
        validators: {
            required: true,
        }
    },
    {
        id: "submissionDate",
        type: "datetime-local",
        name: "submissionDate",
        placeholder: "Fecha de asistencia",
        isRequired: true,
        errorMessage: "el campo es requerido",
        validators: {
            required: true,
            valueAsDate: true
        }
    },
]

export default incomeInputsData;