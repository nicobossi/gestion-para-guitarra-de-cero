import type { InputData } from "@/globals/types/input";


const incomeInputsData : InputData[] = [
    {
        id: "name",
        type: "text",
        name: "name",
        placeholder: "Primer nombre",
    },
    {
        id: "secondName",
        type: "text",
        name: "secondName",
        placeholder: "Segundo nombre",
    },
    {
        id: "surname",
        type: "text",
        name: "surname",
        placeholder: "Apellido",
    },
    {
        id: "phone",
        type: "number",
        name: "phone",
        placeholder: "Teléfono",
    },
    {
        id: "submissionDate",
        type: "datetime-local",
        name: "submissionDate",
        placeholder: "Fecha de asistencia",
    },
]

export default incomeInputsData;