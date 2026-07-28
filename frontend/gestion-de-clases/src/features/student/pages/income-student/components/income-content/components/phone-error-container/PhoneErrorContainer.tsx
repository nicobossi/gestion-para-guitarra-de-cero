import ErrorToast from '@/shared/components/toast/error/ErrorToast'
import './phone-error-container.css'
import { css } from '@styled-system/css'
import { token } from '@styled-system/tokens'

type PhoneErrorContainerProps = {
    onFresh: () => void
}

const PhoneErrorMessage = ({onFresh}: PhoneErrorContainerProps) => {

    return (
        <ErrorToast 
            styles = {css.raw({ backgroundColor: token("colors.primary") })}
            message = "El número de celular ingresado está registrado para otro estudiante, actualice el telefono del estudiante antiguo."
            link = {{ linkDescription: "actualizar telefono", route: ""}}
            onClose = {onFresh}
        />
    )
}

export default PhoneErrorMessage;