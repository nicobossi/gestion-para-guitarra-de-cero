import type { ActiveStyle } from "@/shared/styles/active";
import { cva } from "@styled-system/css";

const activeStyles: ActiveStyle = {
    base: {
        justifyItems: 'center',
        width: '100%',
        minHeight: '20%',
        padding: '10%'
    },
    variants: {
        show: {
            true: {
                backgroundColor: '#273678'
            },
            false: {

            }
        }
    }
}

export const styles = (isActive: boolean) => cva(activeStyles)({ show: isActive });
