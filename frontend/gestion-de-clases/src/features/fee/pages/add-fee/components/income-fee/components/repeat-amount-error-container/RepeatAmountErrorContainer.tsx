import ErrorToast from '@/shared/components/toast/error/ErrorToast'
import './repeat-amount-error-container.css'
import { css } from '@styled-system/css'
import { token } from '@styled-system/tokens'

type RepeatAmountErrorContainerProps = {
    onError: () => void
}

const RepeatAmountErrorContainer = ({onError}: RepeatAmountErrorContainerProps) => {

    return (
        <ErrorToast 
            message = "El monto de la cuota ya se encuentra registrado"
            styles = {css.raw({ bg: token("colors.feeDarkColor")})}
            onClose = {onError}
        />
    )
}

export default RepeatAmountErrorContainer;