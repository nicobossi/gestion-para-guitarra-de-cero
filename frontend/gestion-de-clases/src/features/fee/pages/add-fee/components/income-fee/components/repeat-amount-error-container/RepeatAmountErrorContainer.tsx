import ErrorToast from '@/shared/components/toast/error/ErrorToast'
import './repeat-amount-error-container.css'
import { css } from '@styled-system/css'

type RepeatAmountErrorContainerProps = {
    onError: () => void
}

const RepeatAmountErrorContainer = ({onError}: RepeatAmountErrorContainerProps) => {

    return (
        <ErrorToast 
            message = "El monto de la cuota ya se encuentra registrado"
            styles = {css.raw({ bg: '#3B3B40'})}
            onClose = {onError}
        />
    )
}

export default RepeatAmountErrorContainer;