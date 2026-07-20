import type { ActiveStyle } from "@/shared/styles/active";
import { cva } from "@styled-system/css";

const activeStyles: ActiveStyle = {
    base: {
        display: 'grid',
        alignItems: 'center',
        gridAutoRows: '100%',
        width: '80%',
        maxWidth: '200px',
        md: {
            gridTemplateColumns: '50% 50%',
        }
    },
    variants: {
        show: {
            true: {
                gridTemplateColumns: '50% 50%',
            },
            false: {
                gridTemplateColumns: '100% 0%'
            }
        }
    }
}

export const styles = (isActive: boolean) => cva(activeStyles)({ show: isActive });