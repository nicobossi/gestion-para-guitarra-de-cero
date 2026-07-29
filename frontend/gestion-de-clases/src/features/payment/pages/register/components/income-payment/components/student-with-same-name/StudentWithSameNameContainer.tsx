import ErrorToast from "@/shared/components/toast/error/ErrorToast";
import { css } from "@styled-system/css";

type StudentWithSameNameContainerProps = {
    onFresh: () => void
}

const StudentWithSameNameContainer = ({onFresh}: StudentWithSameNameContainerProps) => {

    return (
        <ErrorToast 
            message = "Existen varios alumnos con el mismo nombre, por favor, ingrese el número de telefono del alumno para registrar su pago"
            styles = {css.raw({ bg: "#163B4D"})}
            onClose = {onFresh}
            link = {{
                linkDescription: 'ingresar teléfono',
                route: ''
            }}
        />
    )
}

export default StudentWithSameNameContainer;