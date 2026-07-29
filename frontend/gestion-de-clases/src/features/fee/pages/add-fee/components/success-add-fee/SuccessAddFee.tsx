import { useValidateAddContext } from '../../contexts/add-fee';
import type { ModalFeeProps } from './success-add-fee';
import { css } from '@styled-system/css';
import { token } from '@styled-system/tokens';
import SuccessToast from '@/shared/components/toast/success/SuccessToast';

const SuccessAddFee = ({fee} : ModalFeeProps) => {

    const {freshData} = useValidateAddContext();

    return (
        <SuccessToast 
            message = {`La cuota con el monto de $${fee.amount} fue ingresada exitosamente ¿Desea volver al home?`}
            onClose = {freshData}
            styles = {css.raw({ bg: token("colors.feeDarkColor")})}
        />
    )
}

export default SuccessAddFee;