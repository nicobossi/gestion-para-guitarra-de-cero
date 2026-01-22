import type { InputData } from "@/globals/types/input";


const incomeInputsData : InputData[] = [
    {
        id: "firstName",
        type: "text",
        name: "firstName",
        placeholder: "Primer nombre",
        isRequired: true
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
        isRequired: true
    },
    {
        id: "phone",
        type: "text",
        name: "phone",
        placeholder: "Teléfono",
        isRequired: true
    },
    {
        id: "submissionDate",
        type: "date",
        name: "submissionDate",
        placeholder: "Fecha de asistencia",
        isRequired: true
    },
    {
        id: "submissionTime",
        type: "text",
        name: "submissionTime",
        placeholder: "Horario de asistencia",
        isRequired: true
    }
]

export default incomeInputsData;